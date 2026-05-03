import type { QuizQuestion } from "@/content/types";
import gtm from "./gtm";
import revops from "./revops";
import enablement from "./enablement";
import metrics from "./metrics";
import planning from "./planning";
import enterpriseSales from "./enterprise-sales";
import anthropic from "./anthropic";
import industrySegments from "./industry-segments";

export const allQuizQuestions: QuizQuestion[] = [
  ...gtm,
  ...revops,
  ...enablement,
  ...metrics,
  ...planning,
  ...enterpriseSales,
  ...anthropic,
  ...industrySegments,
];
