import type { PracticeAttempt } from "@/content/types";

const API = "/api/practice";

export async function syncPracticeAttemptToSheets(
  attempt: PracticeAttempt
): Promise<void> {
  try {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "practice_attempt", row: attempt }),
    });
  } catch {
    // localStorage is the source of truth
  }
}

export async function fetchPracticeAttemptsFromSheets(): Promise<PracticeAttempt[]> {
  try {
    const res = await fetch(`${API}?tab=practice_attempts`, { cache: "no-store" });
    const data = await res.json();
    if (!data.ok || !Array.isArray(data.attempts)) return [];
    return data.attempts
      .filter((row: Record<string, unknown>) => row.questionId)
      .map((row: Record<string, unknown>): PracticeAttempt => {
        const rawScore = row.score;
        const score =
          rawScore === "" || rawScore === null || rawScore === undefined
            ? undefined
            : Number(rawScore);
        const feedback = row.feedback ? String(row.feedback) : undefined;
        const answer = row.answer ? String(row.answer) : undefined;
        return {
          questionId: String(row.questionId ?? ""),
          timestamp: Number(row.timestamp ?? 0),
          sessionId: String(row.sessionId ?? ""),
          ...(score !== undefined && Number.isFinite(score) ? { score } : {}),
          ...(feedback ? { feedback } : {}),
          ...(answer ? { answer } : {}),
        };
      });
  } catch {
    return [];
  }
}

export function mergePracticeAttempts(
  local: PracticeAttempt[],
  remote: PracticeAttempt[]
): PracticeAttempt[] {
  const seen = new Set(local.map((a) => `${a.sessionId}:${a.questionId}:${a.timestamp}`));
  const fresh = remote.filter(
    (a) => !seen.has(`${a.sessionId}:${a.questionId}:${a.timestamp}`)
  );
  return [...local, ...fresh].sort((a, b) => a.timestamp - b.timestamp);
}
