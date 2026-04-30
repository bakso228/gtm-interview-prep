import behavioral from "./behavioral";
import roleSpecific from "./role-specific";
import motivation from "./motivation";
import cvDeepdive from "./cv-deepdive";
import scenarios from "./scenarios";
import conceptCheck from "./concept-check";
import type { Question } from "@/content/types";

export { behavioral, roleSpecific, motivation, cvDeepdive, scenarios, conceptCheck };

export const allQuestions: Question[] = [
  ...behavioral,
  ...roleSpecific,
  ...motivation,
  ...cvDeepdive,
  ...scenarios,
  ...conceptCheck,
];
