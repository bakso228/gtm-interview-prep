import type { QuizAttempt } from "@/content/types";

// Calls the Next.js API route which proxies to Apps Script server-side (no CORS issues)
const API = "/api/quiz";

export async function syncAttemptsToSheets(attempts: QuizAttempt[]): Promise<void> {
  if (attempts.length === 0) return;
  try {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attempts),
    });
  } catch {
    // Silent fail — localStorage is source of truth
  }
}

export async function fetchAttemptsFromSheets(): Promise<QuizAttempt[]> {
  try {
    const res = await fetch(API, { cache: "no-store" });
    const data = await res.json();
    if (!data.ok || !Array.isArray(data.attempts)) return [];
    return data.attempts
      .filter((row: Record<string, unknown>) => row.questionId)
      .map(
        (row: Record<string, unknown>): QuizAttempt => ({
          questionId: String(row.questionId ?? ""),
          chosenIndex: Number(row.chosenIndex ?? 0),
          correct: String(row.correct) === "TRUE" || row.correct === true,
          timestamp: Number(row.timestamp ?? 0),
          sessionId: String(row.sessionId ?? ""),
        })
      );
  } catch {
    return [];
  }
}
