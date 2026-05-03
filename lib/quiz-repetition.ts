import type { QuizRepetitionState } from "@/content/types";

const INTERVALS = [0, 3, 7] as const; // wrong: same day (0), right×1: 3d, right×2: 7d → graduated at 3

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

export function computeNextState(
  current: QuizRepetitionState | null,
  questionId: string,
  correct: boolean,
  today: string
): QuizRepetitionState {
  const prevStreak = current?.consecutiveCorrect ?? 0;
  const newStreak = correct ? Math.min(prevStreak + 1, 3) : 0;
  const interval = newStreak >= 3 ? 7 : INTERVALS[newStreak] ?? 1;
  return {
    questionId,
    consecutiveCorrect: newStreak,
    nextReviewDate: addDays(today, interval),
    lastSeen: today,
  };
}

export function isDueForReview(state: QuizRepetitionState, today: string): boolean {
  if (state.consecutiveCorrect >= 3) return false;
  return state.nextReviewDate <= today;
}

export function getReviewQueue(states: QuizRepetitionState[], today: string): string[] {
  return states
    .filter((s) => isDueForReview(s, today))
    .sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate))
    .map((s) => s.questionId);
}

export function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}
