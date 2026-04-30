import type { Question } from "@/content/types";

const questions: Question[] = [
  {
    id: "cv-01",
    category: "cv-deepdive",
    prompt:
      "At Smile Identity, you grew ARR from $1.5M to $6M. What was your actual role in that growth — what did you build, what did you decide, and what was already there?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Starting conditions: no commercial infrastructure, ad hoc deals, founder-led sales",
      "Your first build: CRM + data stack (Redshift, Tableau) for pipeline visibility",
      "ICP definition: narrowed to FS and fintech — less horizontal than the CEO wanted",
      "Territory and quota design: 4 AEs, vertical-based not geographic",
      "Comp plan designed from scratch: OTE structure, accelerators, ramp quotas",
      "Vertical playbooks: FS and fintech, built from 20+ customer interviews",
      "Specific deals you influenced directly vs. deals the team closed",
      "What wasn't you: product-market fit was already there — you built the commercial machine around it",
    ],
    starStructure: {
      situation:
        "Smile Identity had strong product-market fit and early customer traction ($1.5M ARR) but no commercial infrastructure. Sales was founder-led, CRM was a spreadsheet, no quota model, no playbook.",
      task:
        "Build the entire commercial function from scratch and scale ARR to the Series B target.",
      action:
        "Built in priority order: (1) CRM + Redshift + Tableau for board-reportable metrics, (2) ICP definition narrowing to FS/fintech, (3) territory model by vertical, (4) quota and comp design for 4 AEs, (5) playbooks by vertical from customer interviews, (6) expansion motion for top 3 accounts.",
      result:
        "ARR 4x to $6M in under 2 years. Partner base 2.5x. Series B closed. Commercial infrastructure remained in place after the raise.",
    },
    context:
      "Smile Identity is an identity verification platform for African markets, serving primarily fintech and financial services companies. You joined as CGO (Chief Growth Officer) — effectively the commercial leader.",
  },
  {
    id: "cv-02",
    category: "cv-deepdive",
    prompt:
      "Walk me through how you designed the territory plans and quota structures at Smile Identity. How did you make the decisions, and what trade-offs did you navigate?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Territory model: vertical-based (FS vs. fintech vs. general tech) rather than geographic",
      "Rationale: deep vertical credibility closes faster in regulated markets",
      "Quota method: bottoms-up from territory TAM, not top-down allocation",
      "Data sources: LinkedIn company data, funding databases, ICP filtering",
      "First-year quotas were conservative to account for ramp and early market education",
      "Trade-off: geographic split would've been simpler but sacrificed vertical expertise",
      "Comp structure: 50/50 base/variable, accelerators above 100%, SPIF for FS new logos",
      "Fairness test: ran sensitivity analysis on each AE's territory before finalizing",
    ],
    context:
      "Smile Identity was a 4-AE commercial team. Territory decisions were made with limited data on TAM — African FS market was not well-mapped by standard tools.",
  },
  {
    id: "cv-03",
    category: "cv-deepdive",
    prompt:
      "Tell me about the data stack rebuild at Smile Identity. What did you actually build, why, and what decisions did it enable?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Starting point: pipeline was tracked in a spreadsheet; no CRM discipline",
      "First priority: Salesforce for deal tracking and pipeline visibility",
      "Second: Redshift as data warehouse for board reporting",
      "Third: Tableau dashboards for weekly pipeline review and Series B metrics",
      "Key metric set built: ARR, NRR, pipeline coverage, win rate by vertical",
      "Board reporting: previously narrative-only; became data-backed with trailing 4Q trends",
      "Direct impact: Series B investors cited clean metrics as due-diligence differentiator",
      "What you deprioritized: complex attribution modeling — YAGNI, get the basics right first",
    ],
  },
  {
    id: "cv-04",
    category: "cv-deepdive",
    prompt:
      "You were CGO of a B2B SaaS company at Series B stage. What does that role actually mean day-to-day — how did you spend your time?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Force multiplier for the CEO, not an individual contributor",
      "40% of time: pipeline review, deal strategy, AE coaching",
      "25% of time: cross-functional (product feedback from customers, legal on contracts, finance on metrics)",
      "20% of time: strategic planning — quota model, territory, comp, playbooks",
      "15% of time: board and investor relations — reporting, narratives, due diligence",
      "What you delegated: execution of sequences, inbound triage",
      "Biggest challenge: being strategic AND operational simultaneously with a 4-person team",
      "What it taught you: the leverage of frameworks — a good playbook multiplies a small team",
    ],
  },
  {
    id: "cv-05",
    category: "cv-deepdive",
    prompt:
      "Tell me about the Meta APAC telco partnerships. What made that GTM motion work at the scale you operated at?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Scale: 20+ markets, 50+ telco partners, contributing 20% of Meta's global user growth",
      "Motion: not a traditional sales cycle — partnership deals, multi-year, C-level negotiated",
      "What made it work: vertical-specific value props (not 'partner with Meta' but 'we'll grow your data users by X%')",
      "Bottoms-up valuation model per partner: projected user growth × revenue per user × Meta's uplift factor",
      "Tier 2 insight: Tier 2 telcos had higher ROI per deal than Tier 1 despite smaller size",
      "Stakeholder model: built relationships at CDO/CEO level, not just commercial BD",
      "Playbook components: deal valuation tool, partnership proposal template, exec alignment process",
      "What didn't work: deals stalling when the champion left — lesson in multi-threading",
    ],
    starStructure: {
      situation:
        "Meta's connectivity team needed to scale telco partnerships across APAC to drive user growth. Individual market teams were running ad hoc negotiations with inconsistent deal structures.",
      task:
        "Build a scalable partnership GTM motion that could be executed across 20+ markets with different regulatory environments and telco landscapes.",
      action:
        "Built a bottoms-up deal valuation model. Segmented telco partners by tier and opportunity. Created vertical-specific value props by telco type. Built a playbook including deal structure, negotiation sequence, and executive engagement process. Identified that Tier 2 telcos were undervalued and built a dedicated motion.",
      result:
        "APAC telco partnerships contributed 20% of Meta's global user growth. Tier 2 program delivered 30% of APAC growth from <15% of investment.",
    },
    context:
      "Facebook Connectivity (formerly Internet.org) was the initiative connecting underserved markets via telco partnerships. This was a B2B GTM motion at a consumer company — the deals were B2B; the outcome was B2C user growth.",
  },
  {
    id: "cv-06",
    category: "cv-deepdive",
    prompt:
      "You founded a global analytics team at Meta and presented to Mark Zuckerberg. What did you actually build, and what was the outcome?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Starting point: no centralized analytics for the connectivity partnership program",
      "What you built: analytics function across 4 offices — SF, London, Singapore, Nairobi",
      "Core outputs: global opportunity prioritization list, partnership performance dashboards, deal valuation framework",
      "The Zuckerberg presentation: connectivity program's commercial impact and market prioritization",
      "Why it mattered: data was the credibility lever — it moved the conversation from 'we're doing good' to 'here's the commercial case for connecting X markets'",
      "Team built: 6 analysts across 4 offices, reporting into you",
      "What you learned: analytics teams fail when they produce reports; they succeed when they produce decisions",
    ],
    context:
      "This was during the Meta San Francisco period (GTM Lead, Mobile Partnerships, 2015–2018). The 'Redefining Expectations' award was likely connected to this work.",
  },
  {
    id: "cv-07",
    category: "cv-deepdive",
    prompt:
      "You received two 'Redefining Expectations' awards at Meta — top 3% of the company. What specifically drove those recognitions?",
    difficulty: "medium",
    idealAnswerThemes: [
      "First award (Dublin/London era): founding the global analytics team for the EMEA sales org",
      "Specific impact: influenced multi-million campaigns and hiring decisions with data",
      "Second award (SF era): cross-functional leadership on the connectivity commercial program",
      "Zuckerberg presentation as the peak visibility moment",
      "Awards at Meta are peer-nominated — means the cross-functional credibility was real",
      "What it taught you: impact compounds when you build tools others depend on, not just deliver one-time analyses",
      "Avoid: false modesty ('I was just lucky') or overstatement ('I single-handedly built X')",
    ],
  },
  {
    id: "cv-08",
    category: "cv-deepdive",
    prompt:
      "At Agoda, you reduced operational complexity by 70% while maintaining full revenue output. That's a striking claim — walk me through what you actually did.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Starting point: 4 analysts, 40+ hours per week on manual bidding across 50+ markets",
      "Problem: manual decisions were inconsistent, not data-driven, unscalable",
      "Intervention: built elasticity models to automate the 3 decisions driving 80% of revenue",
      "70% reduction: fewer markets actively managed (cut markets below ROI threshold), automated routine decisions",
      "Revenue maintained: model outperformed manual baseline by 5%+ in remaining markets",
      "Process change: redeployed analyst time to exceptions and strategic markets",
      "Adoption challenge: team was skeptical of model replacing judgment — solved by showing accuracy first",
      "Define 'complexity': headcount hours, number of manual decision points, not arbitrary metric",
    ],
    starStructure: {
      situation:
        "Agoda's 2nd-largest acquisition channel required 4 analysts and 40+ hours/week of manual work across 50+ markets. No systematic model — decisions made on individual analyst judgment.",
      task:
        "Make the channel self-sustaining and scalable without adding headcount.",
      action:
        "Built price elasticity models per market cluster. Automated the 3 highest-volume decisions. Identified markets below minimum ROI threshold and stopped active management (maintained presence but removed from optimization cycle). Redeployed analysts to strategic and exception-based work.",
      result:
        "70% reduction in manual decision points. 5%+ revenue outperformance vs. prior period. Model adopted cross-team as standard.",
    },
  },
  {
    id: "cv-09",
    category: "cv-deepdive",
    prompt:
      "Walk me through the elasticity and bidding models you built at Agoda that outperformed benchmarks by 5%+. What's the methodology, and how do you know it worked?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Problem: heterogeneous markets need differentiated bidding strategies — uniform approach leaves money on table",
      "Data inputs: 3 years of query/click/conversion data, bid history, seasonal patterns",
      "Method: price elasticity curves per market cluster — how does conversion change with bid change?",
      "Key insight: most markets had a bid response breakpoint above/below which ROI drops sharply",
      "Automation: weekly model run that refreshed bid recommendations based on updated data",
      "5% outperformance: measured vs. prior period same-market performance with A/B validation on subset of markets",
      "Limitations you acknowledged: model didn't account for competitor bid changes (a known gap)",
      "Adoption: presented at team level before pushing to management — co-authorship built trust",
    ],
    context:
      "You were Head of Marketing Analytics at Agoda (Booking Holdings). The channel was paid search. Agoda is a major OTA competing with Booking.com, Expedia, and Google in the travel market.",
  },
  {
    id: "cv-10",
    category: "cv-deepdive",
    prompt:
      "Your current role is in marketing strategy and operations at SIXT — but your earlier career is squarely in B2B enterprise GTM. How do you connect those threads, and why shouldn't we see the SIXT role as a step sideways?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Don't be defensive — own the narrative before being asked to defend it",
      "SIXT role: built B2B marketing playbooks, lead-qualification frameworks, revenue analytics infrastructure",
      "The department is called 'marketing' but the work is GTM ops: segmentation, pipeline visibility, cross-functional alignment",
      "Skills built at SIXT that are directly applicable: multi-agent AI workflows, B2B enablement, exec briefings",
      "The arc is: Smile Identity (enterprise GTM from scratch) → Agoda (analytics depth) → SIXT (ops at scale) → Anthropic (back to B2B GTM with all of the above)",
      "The SIXT chapter added operational scale and AI tooling that earlier roles didn't have",
      "The throughline is always: commercial framework building, data-driven GTM, C-level stakeholder work",
    ],
  },
];

export default questions;
