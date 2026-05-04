import { NextResponse } from "next/server";

const GATEWAY_URL = "https://llm.orange.sixt.com/v1/chat/completions";
const MODEL = "claude-sonnet-4.6";

const SYSTEM_PROMPT = `You are evaluating a candidate's free-text answer to an interview practice question. Score from 0 to 100 and provide brief, specific feedback.

Use this rubric. The expected typical score for a thoughtful, on-topic answer is 60-80.

- 0-19 — Meets no expectations: refusal, gibberish, or does not address the question at all.
- 20-39 — Meets some expectations: engages with the question but very thin, vague, or off-target.
- 40-59 — Meets most expectations: addresses the question with substance; key elements present but shallow or incomplete.
- 60-79 — Meets all expectations: solid answer that addresses the question with substance AND at least one concrete element (an example, a number, a named situation, a structured plan, or a clear framework). This is the expected score for a competent attempt.
- 80-94 — Exceeds expectations: structured, specific, shows judgment; concrete examples, numbers, or a well-reasoned framework.
- 95-100 — Greatly exceeds expectations: exceptional — standout structure, deep specificity, original framing.

Grading principles — read carefully:
- The "background" bullets in the user message describe what this kind of question typically probes. They are CONTEXT for you to understand the domain. They are NOT a reference answer, NOT a checklist, and NOT a rubric.
- DO NOT compare the candidate's answer to those bullets word-for-word. Similar wording, overlapping topics, or shared structure with the background bullets is COMPLETELY fine and means nothing about the answer's quality.
- NEVER critique a candidate for "copying" or "reproducing" the background bullets. Strong candidates often instinctively cover the same areas the question is probing — that is a sign of competence, not plagiarism.
- Bullet-point or outline-style answers are valid. A structured 90-day plan, a numbered list, or a STAR-format outline can all score high if the content is substantive.
- Reward what the candidate actually wrote: concrete examples, numbers, named situations, structured thinking, direct engagement with the question's specific framing.
- Penalize ONLY: refusal to engage, off-topic content, internal contradictions, gibberish, or trivially short answers (1-2 vague sentences with no substance).
- If the answer is solid but missing depth, score in the 60-75 band, not below.
- Phrasing differences from any reference are NEVER a deduction.

Return STRICT JSON only — no prose before or after, no markdown code fence:
{"score": <integer 0-100>, "feedback": "<one or two short sentences: highlight the strongest element, then at most one specific suggestion>"}`;

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

Background — what this question typically probes (domain context only; NOT a reference answer, NOT a checklist, do NOT compare the candidate's wording to these):
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
