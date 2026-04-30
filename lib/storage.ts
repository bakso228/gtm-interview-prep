const KEYS = {
  learnedConcepts: "gtm_learned_concepts",
  seenQuestions: "gtm_seen_questions",
  weakQuestions: "gtm_weak_questions",
  theme: "gtm_theme",
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
