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
      .map(
        (row: Record<string, unknown>): PracticeAttempt => ({
          questionId: String(row.questionId ?? ""),
          timestamp: Number(row.timestamp ?? 0),
          sessionId: String(row.sessionId ?? ""),
        })
      );
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
