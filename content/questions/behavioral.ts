import type { Question } from "@/content/types";

const questions: Question[] = [
  {
    id: "b-01",
    category: "behavioral",
    prompt:
      "Tell me about a time you turned complex data into a strategic recommendation that changed the direction of a project or business decision.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Data was ambiguous or contradictory — you had to impose a framework",
      "Named the specific dataset, model, or analysis technique",
      "Translated output into a business decision, not just a chart",
      "Stakeholder audience was senior (VP, C-level, board)",
      "Recommendation was acted on and had a measurable outcome",
      "Acknowledged limitations of the analysis honestly",
    ],
    starStructure: {
      situation:
        "Agoda: 2nd-largest acquisition channel performing below benchmark across 50+ markets. No clear diagnosis from existing reporting.",
      task:
        "Build a model that identifies which markets are underperforming due to structural factors vs. execution gaps — and recommend a resource reallocation.",
      action:
        "Built elasticity and bidding models from raw query/click/conversion data. Segmented markets by price sensitivity curve. Identified 12 markets where bidding was misoptimized. Presented to CMO with a clear reallocation recommendation and expected impact.",
      result:
        "Outperformed channel benchmark by 5%+. Model adopted cross-team as standard forecasting framework. Reduced operational complexity 70% by eliminating low-return markets from active management.",
    },
    context:
      "Use Agoda for the primary example. Secondary option: the Smile Identity data stack rebuild that enabled the Series B raise.",
  },
  {
    id: "b-02",
    category: "behavioral",
    prompt:
      "Describe a situation where you influenced a senior stakeholder who was skeptical of your analysis or recommendation.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Named the stakeholder level (VP, C-suite, board)",
      "Described their specific objection — not just 'they were skeptical'",
      "Showed how you reframed or re-presented rather than just repeating",
      "Used data to address the objection specifically",
      "Outcome: stakeholder changed position or approved the recommendation",
      "Preserved the relationship while standing your ground",
    ],
    starStructure: {
      situation:
        "Meta APAC: Telco partner team was skeptical of a new partnership valuation model. Regional VP felt it undervalued large incumbents.",
      task:
        "Defend the model methodology while keeping the VP onside for the broader deal strategy.",
      action:
        "Ran a sensitivity analysis on the specific assumption the VP challenged. Presented three scenarios with confidence intervals. Conceded one input was conservative and updated it. Held firm on the structural logic. Brought in a data science colleague to validate the methodology independently.",
      result:
        "VP approved the model. Deal structured at the revised valuation. Outcome matched model prediction within 8%.",
    },
  },
  {
    id: "b-03",
    category: "behavioral",
    prompt: "Tell me about a time you had to prioritize ruthlessly under resource constraints.",
    difficulty: "medium",
    idealAnswerThemes: [
      "Explicit scarcity: time, headcount, or budget was the constraint",
      "Used a framework to prioritize — not just gut feel",
      "Said no to something — and explained the logic",
      "Communicated the trade-off to stakeholders clearly",
      "Outcome showed the prioritization was right (in hindsight)",
    ],
    starStructure: {
      situation:
        "Smile Identity CGO role: 4-person commercial team, 3 active verticals, 2 pending RFPs, and a board deadline for Series B metrics.",
      task:
        "Decide which opportunities to pursue fully and which to deprioritize for the quarter.",
      action:
        "Built a quick scoring matrix: deal size × close probability × strategic fit × resource required. Two RFPs scored low on all four. Deprioritized them with a clear explanation to the CEO. Doubled down on two FS deals and the largest existing account expansion.",
      result:
        "Closed both priority deals. Expanded ARR from $1.5M to $3.2M in that half. Board round closed successfully on the metrics we hit.",
    },
  },
  {
    id: "b-04",
    category: "behavioral",
    prompt:
      "Tell me about a cross-functional conflict you navigated. What was the disagreement, and how did you resolve it?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Named the functions involved — not just 'two teams'",
      "The conflict had real stakes (revenue, timeline, headcount, strategy)",
      "Didn't escalate immediately — tried to resolve at peer level first",
      "Found the underlying interest behind each position",
      "Resolution was durable, not just a one-time compromise",
      "Maintained the relationship post-conflict",
    ],
    starStructure: {
      situation:
        "Meta APAC: Engineering and commercial teams disagreed on product feature prioritization for a major telco deal. Engineering wanted to delay; commercial had committed to a feature by the deal close date.",
      task:
        "Resolve without creating an adversarial relationship between teams and without jeopardizing the deal.",
      action:
        "Set up a joint session to understand engineering's constraint (resource, not willingness). Scoped a smaller MVP of the feature that satisfied the deal's core requirement. Negotiated a 3-week timeline instead of 8. Documented the agreement and communicated to both the telco and engineering leadership.",
      result:
        "Deal closed. Feature shipped on the 3-week timeline. Engineering team felt heard rather than overridden.",
    },
  },
  {
    id: "b-05",
    category: "behavioral",
    prompt:
      "Describe a time you built something from scratch — a team, a process, a framework, or a data system.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Starting conditions: nothing existed, or what existed was broken",
      "Designed the thing, didn't just execute someone else's design",
      "Involved stakeholder alignment, not just technical build",
      "Documented and handed off so it outlasted your direct involvement",
      "Specific outcome — what did the 'thing' enable that wasn't possible before?",
    ],
    starStructure: {
      situation:
        "Joining Smile Identity as CGO: no commercial infrastructure. No CRM, no pipeline visibility, no quota model, no territory definition, no playbook.",
      task:
        "Build the entire commercial function from scratch: sales, CS, marketing, analytics.",
      action:
        "Prioritized in order: CRM + data stack (Redshift, Tableau) for board reporting visibility. Then ICP definition and territory model. Then quota structures and comp plans. Then playbooks by vertical. Hired 4 AEs and a CS lead over 9 months.",
      result:
        "ARR went from $1.5M to $6M. Partner base 2.5x. Series B closed. The commercial infrastructure I built remained in place post-Series B.",
    },
  },
  {
    id: "b-06",
    category: "behavioral",
    prompt:
      "Tell me about a failure or a project that didn't land as expected. What went wrong, and what did you learn?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Genuine failure — not a disguised success story",
      "Named the specific thing that went wrong",
      "Took personal ownership — didn't diffuse blame",
      "Analysis of root cause, not just symptoms",
      "Concrete behavior change that resulted from the learning",
      "Applied the learning to a subsequent situation",
    ],
  },
  {
    id: "b-07",
    category: "behavioral",
    prompt:
      "Tell me about a time you had to operate in deep ambiguity. How did you find direction when the path wasn't clear?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Ambiguity was structural — not just information delay",
      "Named what was unknown and why it couldn't be resolved immediately",
      "Took action anyway — didn't wait for perfect information",
      "Used a principle or framework to make interim decisions",
      "Communicated the uncertainty upward while moving forward",
      "Outcome was acceptable despite the ambiguity",
    ],
    starStructure: {
      situation:
        "First 90 days at Smile Identity: no market data, no playbook, no customer insights, no existing commercial team. The company had product-market fit but no commercial model.",
      task:
        "Design a GTM strategy without the luxury of data or precedent.",
      action:
        "Ran 20 customer interviews in 6 weeks. Used ICP hypothesis → test → refine cycle. Set 3-month milestones that were achievable even without full clarity. Communicated confidence in direction to board while being honest about what was still unknown.",
      result:
        "First commercial framework shipped in week 12. First enterprise deal closed in month 4.",
    },
  },
  {
    id: "b-08",
    category: "behavioral",
    prompt:
      "Describe your most complex analytical project. Walk me through your process from problem definition to decision.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Problem framing came before analysis — you didn't just 'look at data'",
      "Named the dataset, tooling, and method",
      "Explicit about assumptions and their limitations",
      "Output was a decision or action, not a report",
      "Demonstrated structured thinking: hypothesis → test → conclusion",
      "Used the result in a real business context",
    ],
    starStructure: {
      situation:
        "Agoda: Commercial strategy for 2nd-largest channel, 50+ markets, no existing elasticity model. Manual bidding producing inconsistent results.",
      task:
        "Build a systematic model to replace manual bidding and forecast channel performance.",
      action:
        "Pulled 3 years of bid/query/conversion data. Built price elasticity curves by market cluster. Identified bid response breakpoints. Automated bidding recommendations into a weekly model run. Presented to CMO with confidence intervals and expected impact range.",
      result:
        "5%+ outperformance vs. benchmark. Adopted as standard. Operational complexity reduced 70% by removing markets below the model's minimum ROI threshold.",
    },
  },
  {
    id: "b-09",
    category: "behavioral",
    prompt:
      "Tell me about a time you drove alignment across teams with competing priorities.",
    difficulty: "medium",
    idealAnswerThemes: [
      "Named the competing interests specifically",
      "Didn't rely on hierarchy to force alignment",
      "Found a shared goal that both teams could commit to",
      "Used a structured process (workshop, joint review, shared metric)",
      "Alignment held over time — not just a one-meeting fix",
    ],
    starStructure: {
      situation:
        "Meta connectivity team: Product wanted to delay a partner feature; commercial had committed the feature in a deal. Legal had concerns about the contract terms.",
      task:
        "Get product, commercial, and legal to agree on a path that didn't blow the deal or create legal exposure.",
      action:
        "Mapped each team's actual constraint (not just their stated position). Found the scope reduction that resolved engineering's timeline issue. Added a contract clause that resolved legal's concern. Ran a single 90-minute joint session to get verbal alignment before any documentation.",
      result:
        "All three teams signed off. Deal closed without renegotiation.",
    },
  },
  {
    id: "b-10",
    category: "behavioral",
    prompt:
      "Tell me about a time you had to push back on leadership or change their direction.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Named the leader and the decision being challenged",
      "Your pushback was data-driven, not opinion-based",
      "You chose your moment — didn't push back publicly or reactively",
      "Had an alternative proposal ready, not just an objection",
      "Leadership ultimately changed course (or gave you a clear reason not to)",
      "Relationship wasn't damaged",
    ],
    starStructure: {
      situation:
        "Agoda: CMO proposed a budget reallocation that would cut the channel I owned by 30% mid-year based on a preliminary model. The model had a significant error in the elasticity calculation.",
      task:
        "Prevent a budget cut that would reduce channel output by more than the cut justified.",
      action:
        "Reproduced the CMO's model, identified the error, built a corrected version with scenario analysis. Requested a 30-minute session — not an email chain. Showed the error directly and its impact on the recommendation. Offered an alternative: a 10% cut to the lowest-performing markets with projected neutral revenue impact.",
      result:
        "CMO accepted the alternative. Channel budget was cut 10% in underperforming markets; revenue impact was within 2% of projection.",
    },
  },
  {
    id: "b-11",
    category: "behavioral",
    prompt:
      "Describe a time when you had to quickly learn a new domain or market and become effective in it.",
    difficulty: "medium",
    idealAnswerThemes: [
      "Named the domain and what you didn't know at the start",
      "Had a structured learning approach — not just 'I asked around'",
      "Showed intellectual humility without losing credibility",
      "Delivered something tangible while still learning",
      "Speed of ramp was faster than expected",
    ],
    starStructure: {
      situation:
        "Joining Agoda (travel/OTA) from a B2B SaaS background. Needed to rapidly develop expertise in performance marketing, paid search elasticity, and OTA-specific market dynamics across 50+ countries.",
      task:
        "Become credible enough to own the channel strategy within 90 days.",
      action:
        "Structured 30-day learning plan: week 1 — internal docs and dashboards; week 2 — shadowing channel managers; week 3 — first analysis; week 4 — first recommendation. Used first principles to build the elasticity model before learning the industry's conventions — this turned out to be an advantage.",
      result:
        "Presented first strategic recommendation at week 6. Model outperformed the existing approach by 5%+ and was adopted as standard within the quarter.",
    },
  },
  {
    id: "b-12",
    category: "behavioral",
    prompt:
      "Tell me about a time you improved a process or workflow at scale.",
    difficulty: "medium",
    idealAnswerThemes: [
      "Process had a real cost before you fixed it: time, revenue, or error rate",
      "Root-caused before redesigning",
      "Involved the people who own the process in the redesign",
      "Measured improvement post-launch",
      "Change held — it wasn't just a one-time fix",
    ],
    starStructure: {
      situation:
        "Agoda: Manual bidding process required 4 analysts, 40+ hours per week, produced inconsistent decisions across markets.",
      task:
        "Replace manual bidding with a model-driven workflow without losing revenue or analyst buy-in.",
      action:
        "Mapped the manual process step-by-step. Identified the 3 decisions that drove 80% of revenue impact. Automated those 3 decisions with the elasticity model. Redeployed analyst time to exception handling and market-specific nuance.",
      result:
        "70% reduction in operational complexity. No revenue degradation. Team reported higher job satisfaction (less repetitive work, more strategic).",
    },
  },
  {
    id: "b-13",
    category: "behavioral",
    prompt:
      "Describe a situation where you had to communicate a difficult message to a senior audience.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Message was genuinely difficult — bad news, a missed target, or an inconvenient truth",
      "Prepared the context before the message — no ambush",
      "Led with the key message, not a 10-slide buildup",
      "Acknowledged accountability without being defensive",
      "Had a path forward ready before walking in",
      "Audience left the room with clarity on next steps",
    ],
    starStructure: {
      situation:
        "Smile Identity: ARR growth was tracking 20% below the board's target at mid-year. Board was expecting a Series B pitch in Q4.",
      task:
        "Update the board on the miss before they saw it in the numbers, with a credible recovery plan.",
      action:
        "Prepared a 2-page memo: here's the gap, here's the root cause (one vertical underperforming), here's the plan (reallocation + two new pipeline sources), here's the revised projection with confidence intervals. Presented in the board call opening slot, not buried in the agenda.",
      result:
        "Board appreciated the transparency. Recovery plan approved. ARR hit 95% of original target by year-end. Series B closed the following quarter.",
    },
  },
  {
    id: "b-14",
    category: "behavioral",
    prompt:
      "Tell me about a time you had to build credibility in a new role quickly.",
    difficulty: "medium",
    idealAnswerThemes: [
      "Named the specific credibility gap — why was trust not automatic?",
      "Early win was substantive, not performative",
      "Listened before prescribing — showed respect for existing knowledge",
      "Win was visible to the right people",
      "Credibility enabled something that wouldn't have happened otherwise",
    ],
    starStructure: {
      situation:
        "Joining Agoda as Head of Marketing Analytics without a travel industry background. The existing team was skeptical of an outsider redesigning their channel strategy.",
      task:
        "Earn analytical credibility fast enough to get the team's buy-in on a new model.",
      action:
        "In week 3, ran a quick analysis that identified a bidding anomaly costing ~$200K/month in one market. Flagged it to the team lead before presenting to management. That surfaced the finding through the team, not over them. Result was attributed jointly.",
      result:
        "Team buy-in shifted from skeptical to collaborative within 6 weeks. The broader model was adopted because the team felt ownership over its development.",
    },
  },
  {
    id: "b-15",
    category: "behavioral",
    prompt: "Tell me about a time you saw a market opportunity that others missed or undervalued.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Opportunity was non-obvious — required synthesizing disparate signals",
      "Named what the conventional view was and why it was wrong",
      "Had a hypothesis before the data confirmed it",
      "Acted on the insight before consensus formed",
      "Outcome validated the view and had material impact",
    ],
    starStructure: {
      situation:
        "Meta APAC: Most partnership teams were prioritizing Tier 1 telcos (Singtel, Telkom, etc.) because of their size. Tier 2 and regional telcos were largely ignored.",
      task:
        "Evaluate whether the Tier 2 telco segment was actually undervalued and worth building a motion for.",
      action:
        "Built a bottoms-up valuation model for Tier 2 telcos across 8 markets. Found that their user growth per dollar of partnership was 60% higher than Tier 1 — because they had more to gain and less bureaucracy. Pitched and got approval for a Tier 2 partnership program.",
      result:
        "Tier 2 program delivered 30% of APAC's partnership-driven user growth despite representing <15% of the investment. Scaled the model to other regions.",
    },
  },
  {
    id: "b-16",
    category: "behavioral",
    prompt:
      "Describe a situation where you had to manage competing stakeholder priorities across a long deal cycle.",
    difficulty: "hard",
    idealAnswerThemes: [
      "Multiple stakeholders with genuinely different interests, not just different preferences",
      "Deal was long — months, not weeks",
      "Had a structured stakeholder map, not just a contact list",
      "Made trade-offs explicitly, not by default",
      "Deal closed (or didn't, with a clear lesson)",
      "Maintained relationships with all stakeholders throughout",
    ],
    starStructure: {
      situation:
        "Meta APAC: Large telco partnership deal involving 5 internal stakeholders (commercial, legal, product, finance, engineering) and 4 stakeholder groups at the partner (CEO, CDO, CTO, procurement).",
      task:
        "Coordinate across 9 stakeholders over a 6-month cycle without losing momentum or creating conflicting commitments.",
      action:
        "Built a stakeholder map with each person's priority and their decision authority. Weekly internal sync at working level; monthly executive sync. Every external commitment was cleared internally first. Created a shared tracking document visible to all internal stakeholders.",
      result:
        "Deal closed in 5.5 months. No conflicting commitments surfaced during negotiations. Partner's CEO cited the coordination quality as a reason for choosing Meta over a competitor.",
    },
  },
];

export default questions;
