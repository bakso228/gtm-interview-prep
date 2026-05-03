import type { QuizAttempt, QuizQuestion, ConceptCategory } from "@/content/types";

export type CategoryScore = {
  category: ConceptCategory;
  totalSeen: number;
  correct: number;
  percentage: number;
};

export type DayScore = {
  date: string;
  total: number;
  correct: number;
  percentage: number;
};

function latestAttemptPerQuestion(attempts: QuizAttempt[]): QuizAttempt[] {
  const map = new Map<string, QuizAttempt>();
  for (const a of attempts) {
    const existing = map.get(a.questionId);
    if (!existing || a.timestamp > existing.timestamp) {
      map.set(a.questionId, a);
    }
  }
  return [...map.values()];
}

export function computeScoreByCategory(
  attempts: QuizAttempt[],
  allQuestions: QuizQuestion[]
): CategoryScore[] {
  const categories = [...new Set(allQuestions.map((q) => q.category))] as ConceptCategory[];
  return categories.map((category) => {
    const ids = new Set(allQuestions.filter((q) => q.category === category).map((q) => q.id));
    const relevant = latestAttemptPerQuestion(attempts.filter((a) => ids.has(a.questionId)));
    const correct = relevant.filter((a) => a.correct).length;
    return {
      category,
      totalSeen: relevant.length,
      correct,
      percentage: relevant.length === 0 ? 0 : Math.round((correct / relevant.length) * 100),
    };
  });
}

export function computeScoreByDay(attempts: QuizAttempt[]): DayScore[] {
  const byDay = new Map<string, { total: number; correct: number }>();
  for (const a of attempts) {
    const date = new Date(a.timestamp).toISOString().split("T")[0];
    const existing = byDay.get(date) ?? { total: 0, correct: 0 };
    byDay.set(date, { total: existing.total + 1, correct: existing.correct + (a.correct ? 1 : 0) });
  }
  return [...byDay.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, { total, correct }]) => ({
      date,
      total,
      correct,
      percentage: Math.round((correct / total) * 100),
    }));
}

export function mergeAttempts(local: QuizAttempt[], remote: QuizAttempt[]): QuizAttempt[] {
  const seen = new Set(local.map((a) => `${a.sessionId}:${a.questionId}:${a.timestamp}`));
  const fresh = remote.filter((a) => !seen.has(`${a.sessionId}:${a.questionId}:${a.timestamp}`));
  return [...local, ...fresh].sort((a, b) => a.timestamp - b.timestamp);
}
