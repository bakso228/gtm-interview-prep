export type ConceptCategory =
  | "gtm"
  | "revops"
  | "enablement"
  | "metrics"
  | "planning"
  | "enterprise-sales"
  | "anthropic";

export type QuestionCategory =
  | "behavioral"
  | "role-specific"
  | "motivation"
  | "cv-deepdive"
  | "scenarios"
  | "concept-check";

export type Difficulty = "easy" | "medium" | "hard";

export type Concept = {
  id: string;
  title: string;
  category: ConceptCategory;
  definition: string;
  whyItMatters: string;
  interviewAngle: string;
  related?: string[];
  example?: string;
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
};

export const QUESTION_CATEGORY_LABELS: Record<QuestionCategory, string> = {
  behavioral: "Behavioral",
  "role-specific": "Role-Specific",
  motivation: "Motivation",
  "cv-deepdive": "CV Deep-Dive",
  scenarios: "Scenarios",
  "concept-check": "Concept-Check",
};
