import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "arr-mrr",
    title: "ARR & MRR",
    category: "metrics",
    definition:
      "Annual Recurring Revenue (ARR) is the annualized value of all subscription contracts currently active. Monthly Recurring Revenue (MRR) is the monthly equivalent. ARR = MRR × 12. Both exclude one-time fees, professional services, and usage-based overages (though some companies include usage in ARR if it's contractually committed). ARR is the single most important metric for a SaaS company's valuation and growth story — investors use ARR multiples to price the business.",
    whyItMatters:
      "You'll be setting targets, building bottom-up plans, and presenting performance reviews against ARR. Knowing what goes into ARR (and what doesn't) matters because deals often include implementation fees, usage overages, or multi-year discounts that distort the headline number. Clean ARR calculation is also a fundraising hygiene point.",
    interviewAngle:
      "Could come up as a concept-check: 'What's the difference between ARR and revenue?' or embedded in a planning question: 'How do you model new ARR vs. expansion ARR in a capacity plan?' Show you understand the components: new ARR, expansion ARR, contraction ARR, and churn ARR.",
    related: ["nrr-grr", "cac-ltv", "forecasting"],
    example:
      "At Smile Identity, I grew ARR from $1.5M to $6M. That's a 4x in under 2 years. The key driver wasn't new logo volume — it was expansion ARR from existing accounts as they scaled their identity verification usage.",
  },
  {
    id: "nrr-grr",
    title: "NRR & GRR",
    category: "metrics",
    definition:
      "Net Revenue Retention (NRR) measures revenue from an existing customer cohort over 12 months, including expansion (upsells, seat additions) minus contraction and churn, divided by their revenue at the start. NRR > 100% means the customer base grows on its own without new logos. Gross Revenue Retention (GRR) excludes expansion — it only measures what you retained, not what you grew. GRR is capped at 100%; NRR is not.",
    whyItMatters:
      "NRR is arguably the most important SaaS metric for long-term business health. If NRR > 120%, you have compounding growth built in. If NRR < 90%, you're on a treadmill — no matter how many new logos you sign, you're losing ground. In this role, you'll be responsible for pipeline and territory design that drives both new ARR and expansion — understanding which motions drive each matters.",
    interviewAngle:
      "Classic concept-check: 'What's the difference between NRR and GRR, and which matters more?' The answer: both matter. GRR tells you retention quality; NRR tells you expansion quality. A business with 95% GRR and 115% NRR has decent retention but strong expansion. A business with 80% GRR and 95% NRR is losing customers faster than it can expand survivors.",
    related: ["arr-mrr", "expansion-motions", "cac-ltv"],
  },
  {
    id: "cac-ltv",
    title: "CAC, LTV & Payback Period",
    category: "metrics",
    definition:
      "Customer Acquisition Cost (CAC) is the total sales and marketing spend divided by the number of new customers acquired in a period. Lifetime Value (LTV) is the total revenue expected from a customer over their lifetime — typically calculated as (ACV × gross margin) ÷ churn rate. Payback period is the months to recover CAC from a customer's gross margin. LTV:CAC ratio benchmarks: >3x is healthy, >5x is excellent. Payback period: 12–18 months is good for enterprise; >24 months is a warning sign.",
    whyItMatters:
      "These metrics drive headcount planning and compensation decisions. If CAC is high and payback is long, adding AEs before improving close rates or ACV will just amplify losses. In a role where you're building capacity models and working with finance on target setting, you need to understand the unit economics of each segment.",
    interviewAngle:
      "Most likely embedded in a planning or scenario question: 'How do you know if it's the right time to add headcount in a territory?' or 'What's the ROI of a new AE in DACH?' Ground your answer in payback period and expected ACV from that territory.",
    related: ["arr-mrr", "nrr-grr", "capacity-models", "sales-velocity"],
  },
  {
    id: "sales-velocity",
    title: "Sales Velocity",
    category: "metrics",
    definition:
      "Sales velocity measures how fast revenue moves through the pipeline. Formula: (Number of opportunities × Win rate × Average deal value) ÷ Average sales cycle length. The output is revenue generated per day. The power of the formula is that it shows exactly which lever to pull: if cycle length is 90 days and you can compress it to 70, velocity goes up ~29% without touching win rate or deal size. Enterprise GTM typically optimizes ACV and win rate rather than volume.",
    whyItMatters:
      "This role requires analyzing sales metrics and developing proactive insights. Sales velocity gives you a single number to compare AEs, territories, or verticals — and decomposing the formula tells you exactly where performance is leaking. An AE with great win rate but low deal count and long cycles has a different coaching need than one with high volume but low ACV.",
    interviewAngle:
      "High probability concept-check: 'Explain sales velocity — what's the formula, and which lever would you pull first to improve it?' Strong answers don't pick a universal lever — they diagnose first. If win rate is 40% (good) but ACV is low, the lever is deal qualification. If cycle length is 120 days (long), the lever is Pipeline Process mapping.",
    related: ["pipeline-coverage", "win-rate", "forecasting", "pipeline-management"],
  },
  {
    id: "pipeline-coverage",
    title: "Pipeline Coverage",
    category: "metrics",
    definition:
      "Pipeline coverage is the ratio of total pipeline value to target revenue for a period. Formula: pipeline value ÷ revenue target. A 3x coverage ratio means you have $3 of pipeline for every $1 of target. Enterprise sales typically requires 3–4x coverage to have high confidence in hitting target, because win rates are lower and deals sometimes slip. Coverage below 2x is a red flag; above 5x often indicates poor qualification (pipeline is inflated with low-probability deals).",
    whyItMatters:
      "Coverage is one of the first numbers sales leadership looks at in a pipeline review. It's a leading indicator: if coverage is 1.5x in week 6 of a 13-week quarter, you have a problem that no amount of hustle in the final weeks will fix. In this role, you'll set coverage targets by segment and flag early when a vertical or territory is underpipelined.",
    interviewAngle:
      "Likely embedded in: 'What does a healthy pipeline look like for enterprise AI software?' or 'If DACH FS pipeline is at 1.8x coverage in week 6, what do you do?' Show you understand both the target (3–4x) and the action (pipeline creation sprint, field marketing event, reactivation of dormant opps).",
    related: ["pipeline-management", "sales-velocity", "forecasting"],
  },
  {
    id: "win-rate",
    title: "Win Rate & Stage Conversion",
    category: "metrics",
    definition:
      "Win rate is the percentage of opportunities that close as won, measured from a defined starting stage (often 'Qualified Opportunity' or stage 2). Overall enterprise win rates are typically 20–35%; against specific competitors or in specific verticals, they can vary significantly. Stage conversion rates track how deals move between pipeline stages — a conversion drop at a specific stage (e.g., proposal to legal) reveals systematic problems in that part of the motion.",
    whyItMatters:
      "Win rate is a lagging indicator of qualification and messaging quality. If win rate is low, the first question is: where in the funnel are you losing? If you're losing at proposal, it's a pricing or value proposition problem. If you're losing at legal, it's a procurement or trust problem. In this role, you'll need to build win/loss tracking to identify these patterns by vertical and AE.",
    interviewAngle:
      "Could come up as: 'How would you diagnose a low win rate in a new territory?' or 'What's an acceptable win rate for Anthropic's enterprise motion?' Show you know that win rate in isolation is meaningless — it must be paired with ACV, cycle length, and stage conversion to tell a story.",
    related: ["pipeline-coverage", "sales-velocity", "competitive-enablement"],
    example:
      "At Smile Identity, win rate in FS was 45% vs. 28% in general tech. We built a dedicated FS sales play and playbook which drove the FS number — but more importantly, we stopped wasting cycles on tech accounts that weren't ICP-fit.",
  },
  {
    id: "conversion-rates",
    title: "Conversion Rates by Stage",
    category: "metrics",
    definition:
      "Conversion rates by stage measure what percentage of deals advance from each pipeline stage to the next: MQL→SQL, SQL→Opportunity, Opportunity→Proposal, Proposal→Legal, Legal→Closed Won. Each transition is a forcing function — deals that don't qualify through each stage gate shouldn't be in the pipeline. Tracking conversions over time surfaces process problems (a new stage definition confusing AEs), messaging problems (deals converting at proposal but dying at legal), and external factors (a competitor entering a vertical).",
    whyItMatters:
      "Stage-level conversion data is one of the most actionable diagnostics in RevOps. It tells you exactly where friction is in the sales process — and where to focus enablement effort. In a new market like DACH enterprise AI, baseline conversion data is gold: it tells you whether your motion is working or needs adjustment.",
    interviewAngle:
      "Most likely embedded in a pipeline diagnostic or RevOps design question. Show you track conversions as a baseline, flag anomalies, and respond with targeted interventions (coaching, play updates, competitive content) rather than generic 'do more discovery' advice.",
    related: ["pipeline-management", "win-rate", "crm-hygiene"],
  },
];

export default concepts;
