import gtm from "./gtm";
import revops from "./revops";
import enablement from "./enablement";
import metrics from "./metrics";
import planning from "./planning";
import enterpriseSales from "./enterprise-sales";
import anthropic from "./anthropic";
import industrySegments from "./industry-segments";
import type { Concept, ConceptDe } from "@/content/types";

import deGtm from "@/content/translations/de/gtm";
import deRevops from "@/content/translations/de/revops";
import deEnablement from "@/content/translations/de/enablement";
import deMetrics from "@/content/translations/de/metrics";
import dePlanning from "@/content/translations/de/planning";
import deEnterpriseSales from "@/content/translations/de/enterprise-sales";
import deAnthropic from "@/content/translations/de/anthropic";
import deIndustrySegments from "@/content/translations/de/industry-segments";

const DE: Record<string, ConceptDe> = {
  ...deGtm,
  ...deRevops,
  ...deEnablement,
  ...deMetrics,
  ...dePlanning,
  ...deEnterpriseSales,
  ...deAnthropic,
  ...deIndustrySegments,
};

export { gtm, revops, enablement, metrics, planning, enterpriseSales, anthropic, industrySegments };

export const allConcepts: Concept[] = [
  ...gtm,
  ...revops,
  ...enablement,
  ...metrics,
  ...planning,
  ...enterpriseSales,
  ...anthropic,
  ...industrySegments,
].map((c) => ({ ...c, de: DE[c.id] }));
