import { NextResponse } from "next/server";

const GATEWAY_URL = "https://llm.orange.sixt.com/v1/chat/completions";
const MODEL = "claude-sonnet-4.6";

const SYSTEM_PROMPT = `You are evaluating a candidate's free-text answer to an interview practice question. Score the answer from 0 to 100 and provide brief, specific feedback.

Grading principles:
- Ground your evaluation in what the candidate actually wrote. Do not penalize phrasing differences from any reference answer.
- The reference themes show what a strong answer might cover. Use them as one input, not a checklist. Reward partial credit when the candidate raises related concepts in their own framing.
- Reward clarity, structure, specificity (concrete examples, numbers, named situations) and direct engagement with the question.
- Penalize vague hand-waving, off-topic content, contradictions, or refusing to engage.
- A blank or trivially short answer should score very low.

Return STRICT JSON only — no prose before or after, no markdown code fence:
{"score": <integer 0-100>, "feedback": "<one or two short sentences pointing out the strongest element and the most important gap>"}`;

function buildUserMessage(
  question: string,
  themes: string[],
  answer: string
): string {
  const themesBlock = themes.length
    ? themes.map((t) => `- ${t}`).join("\n")
    : "(none provided)";
  return `Question:
${question}

Reference themes (for grading reference, not as a checklist):
${themesBlock}

Candidate's answer:
${answer.trim() || "(empty)"}`;
}

function parseModelOutput(text: string): { score: number; feedback: string } | null {
  const cleaned = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "");
  try {
    const obj = JSON.parse(cleaned);
    const score = Math.max(0, Math.min(100, Math.round(Number(obj.score))));
    const feedback = String(obj.feedback ?? "").trim();
    if (!Number.isFinite(score) || !feedback) return null;
    return { score, feedback };
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.LLM_GW_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "LLM_GW_API_KEY not configured" }, { status: 500 });
  }

  let body: { question?: string; idealAnswerThemes?: string[]; answer?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const question = String(body.question ?? "").trim();
  const themes = Array.isArray(body.idealAnswerThemes) ? body.idealAnswerThemes.map(String) : [];
  const answer = String(body.answer ?? "");
  if (!question) {
    return NextResponse.json({ ok: false, error: "missing question" }, { status: 400 });
  }

  const userMessage = buildUserMessage(question, themes, answer);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60_000);
  try {
    const res = await fetch(GATEWAY_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 256,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { ok: false, error: `gateway ${res.status}`, preview: errText.slice(0, 400) },
        { status: 502 }
      );
    }

    const data = await res.json();
    const text: string = data?.choices?.[0]?.message?.content ?? "";
    const parsed = parseModelOutput(text);
    if (!parsed) {
      return NextResponse.json(
        { ok: false, error: "model output not parseable", preview: text.slice(0, 400) },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, ...parsed });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  } finally {
    clearTimeout(timeout);
  }
}
