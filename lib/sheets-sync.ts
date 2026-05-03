import type { QuizAttempt } from "@/content/types";

const WEBHOOK = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;

export async function syncAttemptsToSheets(attempts: QuizAttempt[]): Promise<void> {
  if (!WEBHOOK || attempts.length === 0) return;
  try {
    await fetch(WEBHOOK, {
      method: "POST",
      // Apps Script doPost requires text/plain to populate e.postData.contents
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(attempts),
    });
  } catch {
    // Silent fail — localStorage is source of truth
  }
}

export async function fetchAttemptsFromSheets(): Promise<QuizAttempt[]> {
  if (!WEBHOOK) return [];
  try {
    const res = await fetch(WEBHOOK, { cache: "no-store" });
    const data = await res.json();
    if (!data.ok || !Array.isArray(data.attempts)) return [];
    return data.attempts.map(
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
