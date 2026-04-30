import gtm from "./gtm";
import revops from "./revops";
import enablement from "./enablement";
import metrics from "./metrics";
import planning from "./planning";
import enterpriseSales from "./enterprise-sales";
import anthropic from "./anthropic";
import type { Concept } from "@/content/types";

export { gtm, revops, enablement, metrics, planning, enterpriseSales, anthropic };

export const allConcepts: Concept[] = [
  ...gtm,
  ...revops,
  ...enablement,
  ...metrics,
  ...planning,
  ...enterpriseSales,
  ...anthropic,
];
