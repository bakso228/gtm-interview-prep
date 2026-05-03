import type {
  InterviewQuestion,
  InterviewQuestionType,
  InterviewSession,
  InterviewAnswer,
} from "@/content/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickQuestionSet(pool: InterviewQuestion[]): string[] {
  const pick = (type: InterviewQuestionType, n: number) =>
    shuffle(pool.filter((q) => q.type === type)).slice(0, n).map((q) => q.id);
  return [
    ...pick("intro", 1),
    ...pick("cv-probe", 1),
    ...pick("star", 3),
    ...pick("what-if", 4),
    ...pick("outro", 1),
  ];
}

export function buildSession(
  interviewerName: string,
  pool: InterviewQuestion[]
): InterviewSession {
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `iv-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    interviewerName,
    startedAt: Date.now(),
    questionIds: pickQuestionSet(pool),
    answers: [],
    overallScorePct: 0,
  };
}

export function computeScore(answers: InterviewAnswer[]): number {
  const real = answers.filter((a) => a.rating !== "skip");
  if (real.length === 0) return 0;
  const sum = real.reduce((s, a) => s + (a.rating as number), 0);
  return Math.round((sum / real.length) * 100);
}

export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
