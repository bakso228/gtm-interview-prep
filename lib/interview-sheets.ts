import type { InterviewSession, InterviewAnswer } from "@/content/types";

const API = "/api/interview";

export async function syncInterviewAnswerToSheets(
  sessionId: string,
  answer: InterviewAnswer
): Promise<void> {
  try {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "interview_answer",
        row: { ...answer, sessionId },
      }),
    });
  } catch {
    // localStorage is the source of truth
  }
}

export async function syncInterviewSessionToSheets(
  session: InterviewSession
): Promise<void> {
  try {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "interview_session", row: session }),
    });
  } catch {
    // ignore
  }
}

export async function fetchInterviewSessionsFromSheets(): Promise<InterviewSession[]> {
  try {
    const res = await fetch(`${API}?tab=interview_sessions`, { cache: "no-store" });
    const data = await res.json();
    if (!data.ok || !Array.isArray(data.attempts)) return [];
    return data.attempts
      .filter(
        (row: Record<string, unknown>) =>
          row.sessionId &&
          row.interviewerName &&
          String(row.interviewerName).trim().length > 0 &&
          Number(row.startedAt) > 0
      )
      .map(
        (row: Record<string, unknown>): InterviewSession => ({
          id: String(row.sessionId ?? ""),
          interviewerName: String(row.interviewerName ?? ""),
          startedAt: Number(row.startedAt ?? 0),
          endedAt: row.endedAt ? Number(row.endedAt) : undefined,
          questionIds: String(row.questionIds ?? "")
            .split(",")
            .filter(Boolean),
          answers: [],
          overallScorePct: Number(row.overallScorePct ?? 0),
        })
      );
  } catch {
    return [];
  }
}

export function mergeSessions(
  local: InterviewSession[],
  remote: InterviewSession[]
): InterviewSession[] {
  const seen = new Set(local.map((s) => s.id));
  const fresh = remote.filter((s) => !seen.has(s.id));
  return [...local, ...fresh].sort((a, b) => a.startedAt - b.startedAt);
}
