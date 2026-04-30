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
    sampleQuestions: [
      {
        question:
          "A deal closes for €500K year 1 and €400K year 2, including €50K of one-time implementation fees in year 1. What's the ARR, and how does it change in year 2?",
        answerThemes: [
          "Year 1 ARR: €450K (€500K minus the €50K one-time implementation fee — implementation fees are not recurring)",
          "Year 2 ARR: €400K — this is a contraction of €50K ARR, not a flat renewal",
          "Report the €50K contraction explicitly in the ARR bridge — don't bury it",
          "Multi-year discounts: if year 2 is lower because of a bundled discount, that's also an ARR contraction event",
          "Usage overages: if the customer uses more than contracted, overage revenue is not ARR unless it gets rolled into a new commitment",
          "Clean ARR reporting matters for NRR calculation — if you include implementation in ARR year 1, your year 2 NRR looks artificially low",
        ],
      },
      {
        question:
          "How do you model new ARR vs. expansion ARR in a capacity plan for DACH, and why does the distinction matter?",
        answerThemes: [
          "New ARR: comes from net-new logos — requires a full sales cycle, high CAC, AE time",
          "Expansion ARR: comes from existing customers growing usage or adding seats — lower CAC, faster close, CS-driven",
          "In a capacity model: expansion ARR doesn't require additional AE headcount at the same ratio as new ARR",
          "Separate the two sources in your bottoms-up plan — otherwise you'll underhire for new logo motion or overhire for existing accounts",
          "If NRR > 110%: expansion ARR is compounding the base — you don't need as many new logos to hit target",
          "If NRR < 100%: expansion ARR is negative — you're on a treadmill, every new logo just replaces lost revenue",
          "For DACH year 1: near-zero expansion ARR (no existing customer base) — capacity model must be built almost entirely on new ARR",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Anthropic's DACH enterprise team has GRR of 88% and NRR of 102%. What does that tell you, and what would you do about it?",
        answerThemes: [
          "GRR of 88% means you're losing 12% of customers every year before any expansion — that's a retention problem, not an expansion problem",
          "NRR of 102% means expansion from surviving customers is barely covering the churn hole — the business is not compounding",
          "Root cause question: why are 12% of customers churning? Is it product fit, competitive loss, pricing, or POC-to-production failure?",
          "Priority: fix churn before investing heavily in expansion motion — expanding a leaky bucket accelerates losses",
          "Immediate action: structured win/loss and churn interviews on every churned account in the last 2 quarters",
          "GTM implication: if churn is concentrated in a specific vertical or ACV band, tighten ICP to stop selling into those segments",
          "Target benchmarks: GRR > 90%, NRR > 110% for healthy enterprise SaaS",
        ],
      },
      {
        question:
          "How do you design GTM motions differently depending on whether NRR is above or below 100%?",
        answerThemes: [
          "NRR > 110%: invest more in new logo acquisition — your existing base is compounding, so each new logo has a multiplied LTV",
          "NRR > 110%: land smaller initial deals faster (land-and-expand) — the expansion motion will carry the ARR",
          "NRR 95–100%: expansion and retention are roughly balanced — invest equally in CS-driven expansion and new logo motion",
          "NRR < 95%: do not invest heavily in new logo growth — you're filling a leaky bucket; fix retention first",
          "NRR < 95%: the expansion playbook is irrelevant until you understand why customers are contracting",
          "Board communication: NRR below 100% is a red flag for investors — it signals either product-market fit issues or a broken CS motion",
          "For DACH year 1: NRR is unknowable — set a target (>110%) and design the expansion motion upfront, not as an afterthought",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "The VP of Sales wants to add 2 more AEs to DACH in Q2. How do you evaluate whether the unit economics support it?",
        answerThemes: [
          "Step 1: calculate the fully-loaded cost of a new DACH enterprise AE (OTE + benefits + tooling + management overhead ≈ 1.5–2x OTE)",
          "Step 2: estimate expected ACV from a new DACH AE at full ramp — what does the current team produce per AE?",
          "Step 3: model the ramp timeline — in DACH enterprise, an AE won't produce material ARR until month 7–8",
          "Step 4: payback calculation — months until cumulative ARR contribution covers fully-loaded hire cost",
          "Step 5: compare to alternative uses of capital — would the same investment in enablement or marketing produce faster returns?",
          "Supporting evidence needed: pipeline coverage in DACH. If coverage is already 4x and existing AEs are constrained by capacity, headcount makes sense",
          "Red flag: adding AEs when pipeline coverage is below 2x — you're hiring people to chase deals that don't exist yet",
        ],
      },
      {
        question:
          "LTV:CAC for your DACH commercial segment is 1.8x. What does that tell you and what would you recommend?",
        answerThemes: [
          "1.8x LTV:CAC is below the 3x minimum threshold — you're destroying value in this segment",
          "Root cause options: CAC is too high (long cycles, low conversion), ACV is too low, or churn is too high",
          "Diagnostic: break CAC into components — is it a sales efficiency problem or a marketing spend problem?",
          "If cycles are too long: tighten ICP, qualify harder earlier, reduce time spent on deals that won't close",
          "If ACV is too low: move upmarket, add a minimum deal size, or reposition toward higher-value use cases",
          "If churn is high: product-fit issue — selling to the wrong customers; tighten ICP at the top of funnel",
          "Recommendation: don't invest in growing this segment until LTV:CAC is above 3x — you'd be scaling losses",
        ],
      },
    ],
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
      "High probability concept-check: 'Explain sales velocity — what's the formula, and which lever would you pull first to improve it?' Strong answers don't pick a universal lever — they diagnose first. If win rate is 40% (good) but ACV is low, the lever is deal qualification. If cycle length is 120 days (long), the lever is Paper Process mapping.",
    sampleQuestions: [
      {
        question:
          "Two DACH AEs have identical quota but very different sales velocity. AE1 has high win rate but few opportunities and long cycles. AE2 has high volume but low ACV and average win rate. What's your coaching plan for each?",
        answerThemes: [
          "AE1 (high win rate, low volume, long cycles): the constraint is pipeline creation — they close well but don't prospect enough",
          "AE1 coaching: outbound cadence review, territory coverage analysis, time allocation audit (how many hours per week on pipeline creation vs. active deals)",
          "AE1 cycle length: map their Paper Process management — long cycles in enterprise often mean late MEDDPICC, not slow buyers",
          "AE2 (high volume, low ACV, average win rate): the constraint is deal quality — they're chasing lots of small or weak deals",
          "AE2 coaching: qualification hygiene review, ICP adherence, minimum deal size discipline",
          "AE2 win rate: run a win/loss review on last 10 deals — where are they losing and why?",
          "Velocity formula makes coaching actionable: you can see exactly which variable each AE needs to move",
        ],
      },
      {
        question:
          "Sales velocity in DACH FS has dropped 25% quarter-over-quarter. Using the formula, how do you diagnose the cause?",
        answerThemes: [
          "Break the formula: did opportunity count drop, win rate drop, ACV drop, or cycle length increase?",
          "Check opportunity count first: fewer deals entering the funnel is a pipeline creation problem (outbound, marketing, partner)",
          "Check win rate: if more deals are losing, check competitive data — did a competitor get more aggressive?",
          "Check ACV: if deals are closing smaller, check if AEs are discounting or taking lower-value deals to hit quota",
          "Check cycle length: if cycles got longer, look at CISO/legal bottlenecks — did a new regulation add a procurement step?",
          "DACH FS-specific: EU AI Act implementation timelines can pause procurement decisions as firms await regulatory clarity",
          "Don't assume the cause — let the formula decomposition lead you to it",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Why is 3–4x coverage the standard for enterprise, and under what circumstances would you want even higher?",
        answerThemes: [
          "Enterprise win rates are typically 20–35% — to close 1x revenue, you need 3–5x pipeline",
          "Deal slippage is common in enterprise: procurement delays, budget freezes, champion changes can push deals by a quarter",
          "3x is the floor; 4x is comfortable; 5x+ may signal pipeline inflation rather than true opportunity",
          "When you'd want higher coverage: entering a new market (DACH year 1), where win rates are unknown and likely lower initially",
          "When you'd want higher coverage: if average deal size is very large (a few whale deals = high variance) — need more optionality",
          "When 3x might be too high: if your win rates are unusually strong (>50%) or deals rarely slip — you'd be spending AE time on deals that don't advance",
          "The right target is calibrated to your historical win rate and deal slippage rate, not a universal rule",
        ],
      },
      {
        question:
          "Coverage looks healthy at 4x, but revenue attainment is consistently coming in at 70% of forecast. What's the disconnect?",
        answerThemes: [
          "4x coverage with 70% attainment means the pipeline is inflated — lots of deals that aren't real",
          "Likely culprit: stage definitions are too loose, letting unqualified deals sit in mid-funnel",
          "Check deal age: how many pipeline deals are >90 days old with no advancement? Strip those out — what's your real coverage?",
          "Check AE commit accuracy: are AEs over-committing on deals they don't actually believe in?",
          "Check source mix: if a large portion of pipeline is inbound that never had a proper qualification call, that's phantom pipeline",
          "Solution: tighten stage-entry criteria, add a 'stale deal' flag for no activity in 30 days, require MEDDPICC completion to enter stage 3",
          "The target isn't 4x pipeline — it's 4x qualified pipeline",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Anthropic's DACH win rate is 18% overall but 38% in financial services. What does that tell you, and what do you do with the information?",
        answerThemes: [
          "18% overall for an early-stage enterprise motion in a new market isn't alarming — but the FS gap is the signal",
          "38% in FS means: the ICP is right, the message is landing, the POC is converting — that motion is working",
          "The 18% overall means: other verticals are dragging down the average — likely wrong ICP, wrong message, or wrong buyers",
          "Action: audit the non-FS losses — what stage are they losing at? Are these even ICP accounts?",
          "If losses are at proposal: messaging problem in those verticals",
          "If losses are at qualification/discovery: AEs are working deals that never had a chance — ICP discipline is the fix",
          "Strategic implication: double down on FS (where it works) before spreading to verticals where win rate is sub-15%",
        ],
      },
      {
        question:
          "Stage conversion shows a sharp drop from proposal to legal — only 40% of deals that reach proposal make it to legal review. How do you investigate?",
        answerThemes: [
          "40% proposal-to-legal conversion means 60% of deals die after commercial terms are shared — something in the proposal is breaking deals",
          "First hypothesis: price or commercial terms — are proposals coming in above budget or with unfamiliar contract structures?",
          "Second hypothesis: proposal is going to the wrong stakeholder — the CDO likes it but the CFO hasn't been involved and kills it",
          "Third hypothesis: a competitor is coming in with a better offer after seeing our proposal — we're leaking proposal content",
          "Investigation: win/loss interviews on 5 deals that died at proposal — ask directly what changed after they saw the proposal",
          "Gong review: listen to the proposal presentation calls — what objections are surfacing?",
          "Fix candidates: adjust pricing structure, multi-thread before sending proposal, add a CFO-specific ROI summary to the proposal deck",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "You're three months into DACH and you have your first stage conversion data. MQL→SQL is 35%, SQL→Opp is 28%, Opp→Proposal is 55%, Proposal→Close is 22%. What does this tell you?",
        answerThemes: [
          "MQL→SQL at 35%: reasonable for a new market — some inbound curiosity that isn't enterprise-ready is expected",
          "SQL→Opp at 28%: this is the concerning number — 72% of SQLs never become qualified opportunities, suggesting qualification is breaking down early",
          "Likely SQL→Opp problem: stage definition for SQL is too loose (anything with a meeting becomes an SQL), or AEs are not doing proper discovery before creating an opportunity",
          "Opp→Proposal at 55%: fine — over half of qualified deals get to proposal, which suggests discovery is working once AEs engage properly",
          "Proposal→Close at 22%: low but not alarming for a new market with no case studies — buyers want references before committing",
          "Priority fix: tighten SQL-to-Opp qualification — add a required MEDDIC checklist before creating an opportunity",
          "Secondary fix: proposal→close — start building FS case studies and reference programs to reduce late-stage hesitation",
        ],
      },
      {
        question:
          "Stage conversion data shows that deals in Healthcare convert from proposal to legal at half the rate of deals in Financial Services. How do you use this information?",
        answerThemes: [
          "First question: is the Healthcare drop a messaging problem, a procurement problem, or an ICP problem?",
          "Messaging hypothesis: Healthcare proposals may not be hitting the right pain — check if the value prop is adapted to healthcare-specific outcomes",
          "Procurement hypothesis: Healthcare in DACH has stricter data-residency requirements that surface at legal — does Anthropic have the documentation stack to clear that?",
          "ICP hypothesis: you may be selling to healthcare accounts that look good on paper but aren't procurement-ready for AI yet",
          "Investigation: win/loss interviews on 3 Healthcare deals that died at legal — what specifically was the blocker?",
          "If procurement is the issue: build a healthcare-specific pre-legal documentation pack (DPIA template, data residency confirmation, etc.)",
          "If messaging is the issue: update the Healthcare play to address the specific legal objections that are surfacing",
        ],
      },
    ],
    related: ["pipeline-management", "win-rate", "crm-hygiene"],
  },
];

export default concepts;
