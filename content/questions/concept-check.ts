import type { Question } from "@/content/types";

const questions: Question[] = [
  {
    id: "cc-01",
    category: "concept-check",
    prompt:
      "Explain RevOps to a CFO who's never heard the term. Two minutes, no jargon.",
    difficulty: "easy",
    idealAnswerThemes: [
      "RevOps = the function that connects sales, marketing, and CS around shared revenue data",
      "Without RevOps: each team tracks different numbers, decisions are made on bad data",
      "Core outputs: clean pipeline data, reliable forecast, consistent stage definitions",
      "Analogy: RevOps is to revenue what finance is to cost — the control function",
      "Why the CFO should care: RevOps accuracy determines whether the forecast is a document or a decision",
      "Concrete example: RevOps defines 'qualified opportunity' so every AE means the same thing",
    ],
  },
  {
    id: "cc-02",
    category: "concept-check",
    prompt:
      "What's the difference between GTM strategy and sales enablement? How do you know which problem you're solving?",
    difficulty: "easy",
    idealAnswerThemes: [
      "GTM strategy: what markets, segments, verticals, motions — the 'where and how' at company level",
      "Sales enablement: equipping individual reps to execute that strategy — content, training, tools",
      "GTM strategy is upstream: you can't enable a motion that doesn't exist yet",
      "Symptoms of a GTM strategy problem: low pipeline across all AEs, wrong ICP, wrong territory",
      "Symptoms of an enablement problem: pipeline exists but conversion is low, AE-to-AE variance is high",
      "In practice: they interact constantly — a strategy change requires enablement to cascade it",
      "Key question: 'Is the problem the play or the execution of the play?'",
    ],
  },
  {
    id: "cc-03",
    category: "concept-check",
    prompt:
      "What does a healthy pipeline look like — and how would you know if yours isn't?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Healthy: 3–4x coverage at the segment level, not just in total",
      "Healthy: stage distribution is front-loaded (most deals in discovery/validation, not just late stages)",
      "Healthy: source diversity — outbound, inbound, partner — no single dependency",
      "Healthy: age distribution — deals aren't sitting in one stage more than the expected cycle segment",
      "Warning signs: coverage below 2x; all pipeline is in stage 4+; same deals appear every week; no new pipeline created this quarter",
      "The pipeline review question: 'If I removed all deals more than 90 days old that haven't advanced, what's my real coverage?'",
      "Health is relative to the target, the motion, and the cycle length — 2x might be fine for SMB, dangerous for enterprise",
    ],
  },
  {
    id: "cc-04",
    category: "concept-check",
    prompt:
      "Explain MEDDPICC and when you'd use it vs. a simpler framework like BANT.",
    difficulty: "medium",
    idealAnswerThemes: [
      "MEDDPICC: Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Implicate Pain, Champion, Competition",
      "BANT: Budget, Authority, Need, Timeline — simpler, designed for volume transactional deals",
      "Use BANT when: deal is straightforward, single buyer, short cycle (<30 days), sub-$50K ACV",
      "Use MEDDPICC when: enterprise deal, multiple stakeholders, 6+ month cycle, $100K+ ACV",
      "Paper Process is the differentiating letter in DACH — procurement complexity is high",
      "Champion is the most underused letter — most AEs know their contact but not if that contact has influence",
      "MEDDPICC is a coaching tool as much as a qualification tool — use it in deal reviews",
      "Transition: start with MEDDIC for new teams, add P and C once the basics are solid",
    ],
  },
  {
    id: "cc-05",
    category: "concept-check",
    prompt:
      "What's the difference between NRR and GRR, and which one matters more for an enterprise SaaS business?",
    difficulty: "easy",
    idealAnswerThemes: [
      "GRR: gross revenue retention — what you kept, capped at 100%",
      "NRR: net revenue retention — what you kept plus what you grew, can exceed 100%",
      "GRR tells you: are you retaining customers? Is churn a problem?",
      "NRR tells you: are you growing within existing customers? Is expansion working?",
      "NRR > 100% means the customer base grows on its own without new logos",
      "For enterprise SaaS: NRR matters more for valuation and growth story",
      "But: GRR < 85% means something is fundamentally broken — NRR can't fix it",
      "Rule of thumb: great enterprise SaaS has GRR > 90% and NRR > 110%",
    ],
  },
  {
    id: "cc-06",
    category: "concept-check",
    prompt:
      "Explain sales velocity — what's the formula, and if you could pull only one lever to improve it, which would you pull first?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Formula: (Opportunities × Win Rate × Average Deal Value) ÷ Sales Cycle Length",
      "Four levers: more opportunities, higher win rate, higher ACV, shorter cycles",
      "Which lever first: depends on the diagnosis, not a universal answer",
      "If win rate is below 20%: fix qualification and messaging first",
      "If ACV is below target: fix deal sizing and multi-product expansion",
      "If cycle length is outlier-long: fix Paper Process management and executive sponsorship",
      "If opportunity count is low: fix pipeline creation (coverage ratio, outbound motion)",
      "Common mistake: default to 'more opportunities' when win rate is the actual leak",
    ],
  },
];

export default questions;
