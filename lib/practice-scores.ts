import type { PracticeAttempt } from "@/content/types";

export type PracticeDayCount = {
  date: string;
  total: number;
};

export function scoreTier(score: number): string {
  if (score >= 95) return "Greatly exceeds expectations";
  if (score >= 80) return "Exceeds expectations";
  if (score >= 60) return "Meets all expectations";
  if (score >= 40) return "Meets most expectations";
  if (score >= 20) return "Meets some expectations";
  return "Meets no expectations";
}

export function computePracticeByDay(attempts: PracticeAttempt[]): PracticeDayCount[] {
  const byDay = new Map<string, number>();
  for (const a of attempts) {
    const date = new Date(a.timestamp).toISOString().split("T")[0];
    byDay.set(date, (byDay.get(date) ?? 0) + 1);
  }
  return [...byDay.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, total]) => ({ date, total }));
}
