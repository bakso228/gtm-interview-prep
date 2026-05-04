const KEYS = {
  learnedConcepts: "gtm_learned_concepts",
  seenQuestions: "gtm_seen_questions",
  weakQuestions: "gtm_weak_questions",
  theme: "gtm_theme",
  quizAttempts: "gtm_quiz_attempts",
  quizRepetition: "gtm_quiz_repetition",
  interviewSessions: "gtm_interview_sessions",
  practiceAttempts: "gtm_practice_attempts",
} as const;

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLearnedConcepts(): string[] {
  return read<string[]>(KEYS.learnedConcepts, []);
}

export function toggleLearnedConcept(id: string): boolean {
  const current = getLearnedConcepts();
  const learned = current.includes(id);
  write(KEYS.learnedConcepts, learned ? current.filter((x) => x !== id) : [...current, id]);
  return !learned;
}

export function isConceptLearned(id: string): boolean {
  return getLearnedConcepts().includes(id);
}

export function getSeenQuestions(): string[] {
  return read<string[]>(KEYS.seenQuestions, []);
}

export function markQuestionSeen(id: string): void {
  const current = getSeenQuestions();
  if (!current.includes(id)) write(KEYS.seenQuestions, [...current, id]);
}

export function getWeakQuestions(): string[] {
  return read<string[]>(KEYS.weakQuestions, []);
}

export function toggleWeakQuestion(id: string): boolean {
  const current = getWeakQuestions();
  const isWeak = current.includes(id);
  write(KEYS.weakQuestions, isWeak ? current.filter((x) => x !== id) : [...current, id]);
  return !isWeak;
}

export function isQuestionWeak(id: string): boolean {
  return getWeakQuestions().includes(id);
}

export function getTheme(): "light" | "dark" {
  return read<"light" | "dark">(KEYS.theme, "light");
}

export function setTheme(theme: "light" | "dark"): void {
  write(KEYS.theme, theme);
}

import type { QuizAttempt, QuizRepetitionState, PracticeAttempt } from "@/content/types";

export function getQuizAttempts(): QuizAttempt[] {
  return read<QuizAttempt[]>(KEYS.quizAttempts, []);
}

export function addQuizAttempts(attempts: QuizAttempt[]): void {
  const current = getQuizAttempts();
  write(KEYS.quizAttempts, [...current, ...attempts]);
}

export function setQuizAttempts(attempts: QuizAttempt[]): void {
  write(KEYS.quizAttempts, attempts);
}

export function clearQuizData(): void {
  write(KEYS.quizAttempts, []);
  write(KEYS.quizRepetition, []);
}

import type { InterviewSession } from "@/content/types";

export function getInterviewSessions(): InterviewSession[] {
  return read<InterviewSession[]>(KEYS.interviewSessions, []);
}

export function getInterviewSession(id: string): InterviewSession | null {
  return getInterviewSessions().find((s) => s.id === id) ?? null;
}

export function addInterviewSession(session: InterviewSession): void {
  const current = getInterviewSessions();
  write(KEYS.interviewSessions, [...current, session]);
}

export function updateInterviewSession(updated: InterviewSession): void {
  const current = getInterviewSessions();
  const idx = current.findIndex((s) => s.id === updated.id);
  if (idx >= 0) {
    current[idx] = updated;
    write(KEYS.interviewSessions, current);
  } else {
    write(KEYS.interviewSessions, [...current, updated]);
  }
}

export function setInterviewSessions(sessions: InterviewSession[]): void {
  write(KEYS.interviewSessions, sessions);
}

export function clearInterviewData(): void {
  write(KEYS.interviewSessions, []);
}

export function getRepetitionStates(): QuizRepetitionState[] {
  return read<QuizRepetitionState[]>(KEYS.quizRepetition, []);
}

export function upsertRepetitionState(state: QuizRepetitionState): void {
  const current = getRepetitionStates();
  const idx = current.findIndex((s) => s.questionId === state.questionId);
  if (idx >= 0) {
    current[idx] = state;
    write(KEYS.quizRepetition, current);
  } else {
    write(KEYS.quizRepetition, [...current, state]);
  }
}

export function getPracticeAttempts(): PracticeAttempt[] {
  return read<PracticeAttempt[]>(KEYS.practiceAttempts, []);
}

export function addPracticeAttempt(attempt: PracticeAttempt): void {
  const current = getPracticeAttempts();
  write(KEYS.practiceAttempts, [...current, attempt]);
}

export function setPracticeAttempts(attempts: PracticeAttempt[]): void {
  write(KEYS.practiceAttempts, attempts);
}

export function clearPracticeAttempts(): void {
  write(KEYS.practiceAttempts, []);
}
