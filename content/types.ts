export type Language = "en" | "de";

export type ConceptCategory =
  | "gtm"
  | "revops"
  | "enablement"
  | "metrics"
  | "planning"
  | "enterprise-sales"
  | "anthropic"
  | "industry-segments";

export type QuestionCategory =
  | "behavioral"
  | "role-specific"
  | "motivation"
  | "cv-deepdive"
  | "scenarios"
  | "concept-check";

export type Difficulty = "easy" | "medium" | "hard";

export type SampleQuestion = {
  question: string;
  answerThemes: string[];
};

export type ConceptDe = {
  title: string;
  definition: string;
  whyItMatters: string;
  interviewAngle: string;
  example?: string;
  sampleQuestions?: SampleQuestion[];
};

export type Concept = {
  id: string;
  title: string;
  category: ConceptCategory;
  definition: string;
  whyItMatters: string;
  interviewAngle: string;
  sampleQuestions?: SampleQuestion[];
  related?: string[];
  example?: string;
  de?: ConceptDe;
};

export type Question = {
  id: string;
  category: QuestionCategory;
  prompt: string;
  idealAnswerThemes: string[];
  starStructure?: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  context?: string;
  difficulty: Difficulty;
};

export const CATEGORY_LABELS: Record<ConceptCategory, string> = {
  gtm: "GTM Fundamentals",
  revops: "RevOps",
  enablement: "Sales Enablement",
  metrics: "Metrics & Forecasting",
  planning: "Planning & Comp",
  "enterprise-sales": "Enterprise Sales",
  anthropic: "Anthropic-Specific",
  "industry-segments": "DACH Industry Segments",
};

export const CATEGORY_LABELS_DE: Record<ConceptCategory, string> = {
  gtm: "GTM-Grundlagen",
  revops: "Revenue Operations",
  enablement: "Sales Enablement",
  metrics: "Metriken & Forecasting",
  planning: "Planung & Vergütung",
  "enterprise-sales": "Enterprise Sales",
  anthropic: "Anthropic-spezifisch",
  "industry-segments": "DACH-Branchensegmente",
};

export const QUESTION_CATEGORY_LABELS: Record<QuestionCategory, string> = {
  behavioral: "Behavioral",
  "role-specific": "Role-Specific",
  motivation: "Motivation",
  "cv-deepdive": "CV Deep-Dive",
  scenarios: "Scenarios",
  "concept-check": "Concept-Check",
};

export type QuizQuestion = {
  id: string;
  category: ConceptCategory;
  conceptId?: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  hint?: string;
  difficulty: Difficulty;
  de?: {
    question: string;
    options: [string, string, string, string];
    explanation: string;
    hint?: string;
  };
};

export type QuizAttempt = {
  questionId: string;
  chosenIndex: number;
  correct: boolean;
  timestamp: number;
  sessionId: string;
};

export type QuizRepetitionState = {
  questionId: string;
  consecutiveCorrect: number;
  nextReviewDate: string;
  lastSeen: string;
};

export type PracticeAttempt = {
  questionId: string;
  timestamp: number;
  sessionId: string;
};

export type InterviewQuestionType = "intro" | "cv-probe" | "star" | "what-if" | "outro";

export type InterviewQuestion = {
  id: string;
  type: InterviewQuestionType;
  question: string;
  watchFor: string[];
  tip?: string;
  de?: {
    question: string;
    watchFor: string[];
    tip?: string;
  };
};

export type InterviewRating = 0.6 | 0.8 | 1.0 | 1.2 | "skip";

export type InterviewAnswer = {
  questionId: string;
  rating: InterviewRating;
  durationSeconds: number;
  timestamp: number;
};

export type InterviewSession = {
  id: string;
  interviewerName: string;
  startedAt: number;
  endedAt?: number;
  questionIds: string[];
  answers: InterviewAnswer[];
  overallScorePct: number;
};

export const INTERVIEW_TYPE_LABELS: Record<InterviewQuestionType, string> = {
  intro: "Intro",
  "cv-probe": "CV check",
  star: "STAR · past experience",
  "what-if": "What-if scenario",
  outro: "Closing",
};

export const INTERVIEW_TYPE_LABELS_DE: Record<InterviewQuestionType, string> = {
  intro: "Einstieg",
  "cv-probe": "CV-Check",
  star: "STAR · Erfahrung",
  "what-if": "Szenario",
  outro: "Abschluss",
};
