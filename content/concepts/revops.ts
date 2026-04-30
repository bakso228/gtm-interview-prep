import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "pipeline-management",
    title: "Pipeline Management",
    category: "revops",
    definition:
      "Pipeline management is the discipline of tracking, qualifying, and advancing deals through defined stages from first contact to close. It includes stage definitions with clear entry/exit criteria, a regular inspection cadence (weekly pipeline reviews), and metrics to assess pipeline health: coverage ratio, stage-weighted value, velocity, and age by stage. Strong pipeline management makes revenue predictable and surfaces problems early enough to fix them.",
    whyItMatters:
      "This role requires analyzing industry-specific pipeline dynamics and removing operational bottlenecks in complex sales cycles. In enterprise AI, deals often stall at security review or legal — recognizing that pattern in the pipeline data early is what allows you to intervene. You'll own the inspection cadence and the frameworks AEs use to self-manage their book.",
    interviewAngle:
      "Likely: 'What does a healthy pipeline look like for enterprise AI software?' or 'If pipeline in DACH FS is 50% below target at mid-quarter, what's your diagnostic?' Strong answers show you go beyond deal count to stage distribution, age, coverage ratio, and source mix before drawing conclusions.",
    sampleQuestions: [
      {
        question:
          "What does a healthy pipeline look like for an enterprise AI software sale in DACH, and how would you know if yours isn't?",
        answerThemes: [
          "Coverage: 3–4x for enterprise (higher than standard SaaS due to 6–9 month cycles)",
          "Stage distribution: majority in early/mid stages — heavy late-stage concentration is a danger sign",
          "Source diversity: outbound, inbound, partner, API-conversion — no single-source dependency",
          "Age discipline: flag any deal that hasn't advanced in >30 days in any stage as a stall, not a live opportunity",
          "Warning signs: coverage below 2x, all pipeline is Q4 deals, same deals appearing week after week",
          "DACH nuance: a €500K deal stuck in security review for 8 weeks is still dead pipeline until it moves",
          "Practical test: strip out all deals >90 days old with no stage movement — what's your real coverage now?",
        ],
      },
      {
        question:
          "It's week 6 of a 13-week quarter and DACH financial services pipeline is 50% below target. Walk me through your response.",
        answerThemes: [
          "Diagnose before acting: is the problem pipeline creation or pipeline conversion?",
          "Check coverage by stage: is there simply not enough pipeline, or is it dying mid-funnel?",
          "Talk to AEs: what are they hearing? Is there a competitive, messaging, or timing issue?",
          "Check source mix: is inbound drying up, or is outbound not converting to meetings?",
          "Immediate action (this quarter): reactivate dormant opportunities, run a targeted outbound sprint, co-host an event with a partner",
          "Structural fix (next quarter): update the FS play, improve competitive enablement, add a CISO-specific track to the POC process",
          "Report clearly to leadership: here's the gap, here's the cause, here's what I'm doing this quarter vs. next",
        ],
      },
    ],
    related: ["forecasting", "crm-hygiene", "pipeline-coverage"],
    example:
      "At Smile Identity, we ran weekly pipeline reviews segmented by vertical. We discovered that deals stalling at legal took 3x longer in FS — so we built a pre-legal checklist that cut legal cycle time by 30%.",
  },
  {
    id: "forecasting",
    title: "Forecasting Methods",
    category: "revops",
    definition:
      "Sales forecasting predicts revenue expected to close within a period. Three main methods: (1) Stage-weighted — multiply deal value by the probability assigned to each stage; (2) Call-based — AEs submit a 'commit' number based on judgment, supplemented by manager review; (3) AI-assisted — tools like Clari or Gong analyze activity signals to predict close probability. Enterprise teams typically layer all three: stage-weighting as a baseline, AE calls for current-quarter visibility, AI scoring for pattern detection.",
    whyItMatters:
      "The JD asks you to drive quarterly and annual planning cycles and develop proactive insights from pipeline analytics. Accurate forecasting isn't just about the number — it builds trust with finance and leadership, informs hiring decisions, and determines whether you hit your capacity model assumptions.",
    interviewAngle:
      "Could come up as: 'How would you improve forecasting accuracy on a team you just joined?' or 'What's your preferred forecasting method for an early-stage enterprise motion?' Show you understand the limitations of each approach and how to triangulate across them.",
    sampleQuestions: [
      {
        question:
          "How would you improve forecasting accuracy on a DACH enterprise team you've just joined that's consistently missing its quarterly call?",
        answerThemes: [
          "First: diagnose the miss pattern — are they always optimistic, or does the forecast randomly swing? Optimistic bias is a different problem than random variance.",
          "Audit stage definitions: vague or inconsistent stage gates produce meaningless stage-weighted forecasts",
          "Interview AEs individually: understand their own confidence in each deal — commit vs. upside vs. hope",
          "Layer three methods: stage-weighted baseline + AE call + activity signal (Gong/Clari if available)",
          "Add a sanity-check question in pipeline review: 'What would have to go wrong for this to slip?'",
          "Track forecast accuracy per AE over rolling 4 quarters — find the signal in who is reliable",
          "Set forecast accuracy as an explicit KPI alongside revenue attainment",
        ],
      },
      {
        question:
          "What are the main limitations of stage-weighted forecasting, and how do you compensate for them?",
        answerThemes: [
          "Stage weights are historical averages — they don't reflect current deal quality or competitive dynamics",
          "AEs game stage assignments when pipeline is low — everything gets promoted to stage 3",
          "Doesn't capture deal age: a stage-3 deal at day 10 and day 180 both get the same probability",
          "Ignores deal-specific signals: a deal with no CISO approval and a 2-week close date is not 80% likely",
          "Compensation: add age decay (reduce probability for deals that haven't moved in X days)",
          "Compensation: AE call layer — their gut on individual deals is more accurate than weighted averages for close-quarter deals",
          "Compensation: activity signals (Gong engagement score, email response rate) as a probability modifier",
        ],
      },
    ],
    related: ["pipeline-management", "revenue-analytics", "capacity-models"],
    example:
      "At Agoda, I built a channel-level forecasting model that triangulated elasticity curves, bidding history, and market seasonality. It outperformed the manual forecast by 5%+ and got adopted cross-team as the standard.",
  },
  {
    id: "crm-hygiene",
    title: "CRM Hygiene",
    category: "revops",
    definition:
      "CRM hygiene is the ongoing practice of keeping deal, contact, and account data accurate, complete, and current in Salesforce or equivalent. It degrades naturally — AEs forget to log activities, deal stages drift from reality, contacts churn and aren't updated. Poor hygiene breaks forecasting, territory assignments, reporting, and comp calculations. Maintaining it requires both process (stage-gate requirements, close-date discipline) and enforcement (pipeline review rituals, manager accountability).",
    whyItMatters:
      "The JD explicitly calls out CRM data management and ensuring adoption of Salesforce. If data quality is low when you join, everything downstream is unreliable — you can't forecast, you can't segment, you can't measure plays. Fixing it is usually a political as much as a technical problem.",
    interviewAngle:
      "Could come up as a scenario: 'CRM data is unreliable and AEs aren't logging. How do you fix it without alienating the team?' Smart answers don't lead with enforcement — they lead with AE self-interest (better forecasting = less quota variance = more predictable comp) and then add accountability mechanisms.",
    sampleQuestions: [
      {
        question:
          "CRM data is unreliable and AEs aren't logging deal activity consistently. How do you fix it without making it a punishment exercise?",
        answerThemes: [
          "Start by understanding why: is it workflow friction (logging is hard), confusion (unclear what to log), or resistance (they don't see value)?",
          "Lead with AE self-interest: accurate CRM means better forecast means less surprise at comp time — frame it as a tool for them",
          "Reduce the ask: define the 5 fields that actually drive decisions — don't require everything, require the right things",
          "Automate what you can: email sync, calendar logging, call recording via Gong — remove manual steps",
          "Make data quality visible: a weekly 'pipeline health score' per AE shows the issue without naming and shaming",
          "Final lever: tie comp calculation to CRM data — if it's not logged, it doesn't count toward quota attainment",
          "Manager accountability: pipeline review only works on logged data — managers must enforce at the deal level",
        ],
      },
      {
        question:
          "If you could enforce only 5 mandatory fields in Salesforce for an enterprise sales motion, what would they be and why?",
        answerThemes: [
          "1. Close date — drives forecast accuracy; must be realistic, not aspirational",
          "2. Deal stage — the backbone of all pipeline reporting; must match agreed definitions",
          "3. Economic Buyer (contact) — single most predictive field for deal health; most AEs skip it",
          "4. Next step with a date — separates active deals from zombie pipeline",
          "5. Competitor (if any) — essential for win/loss analysis and competitive enablement feedback loop",
          "Everything else is nice-to-have; these five make forecasting and coaching possible",
          "Enforce via stage-gate: can't advance a deal to stage 3 without all 5 fields complete",
        ],
      },
    ],
    related: ["pipeline-management", "sales-tech-stack", "revenue-analytics"],
  },
  {
    id: "sales-tech-stack",
    title: "Sales Tech Stack",
    category: "revops",
    definition:
      "The sales tech stack is the collection of software tools used to execute and measure the go-to-market motion. Core layers: CRM (Salesforce — the system of record), Sales Engagement Platform / SEP (Outreach, Salesloft — for sequencing, call logging, email tracking), Conversation Intelligence (Gong, Chorus — call recording and deal signals), BI / Reporting (Tableau, Looker — pipeline dashboards), and CPQ (Salesforce CPQ, DealHub — quoting and approval workflows). Each layer serves a different persona: CRM serves ops and leadership; SEP serves AEs; BI serves management.",
    whyItMatters:
      "The JD asks you to optimize the sales technology stack and ensure effective adoption. The risk isn't buying the wrong tool — it's buying good tools that nobody uses because they weren't onboarded properly or the workflow doesn't match how AEs actually sell. You'll need to make adoption decisions as much as procurement decisions.",
    interviewAngle:
      "Could come up as: 'What does your ideal RevOps tech stack look like for a 15-person enterprise team?' or 'How would you measure whether your Gong rollout is working?' Show you think about adoption and workflow fit, not just feature lists.",
    sampleQuestions: [
      {
        question:
          "What does your ideal RevOps tech stack look like for a 15-person enterprise sales team, and what would you prioritize first?",
        answerThemes: [
          "Priority 1: Salesforce as the single system of record — nothing else works without clean CRM data",
          "Priority 2: Sales engagement platform (Outreach/Salesloft) — sequences, activity logging, email tracking",
          "Priority 3: Conversation intelligence (Gong) — call recording, deal signals, coaching",
          "Priority 4: BI layer (Tableau/Looker) — pipeline dashboards, weekly reviews, exec reporting",
          "Nice to have at 15 people: CPQ (quote management), enrichment tool (ZoomInfo/Clearbit)",
          "Sequence matters: CRM first, then SEP, then Gong — don't add complexity before the foundation is clean",
          "Adoption is the risk, not the tool choice — every new tool needs a workflow change management plan",
        ],
      },
      {
        question:
          "You've just rolled out Gong to the DACH enterprise team. How do you measure whether the rollout is actually working?",
        answerThemes: [
          "Adoption metric: % of calls recorded in Gong in the first 30 days (target: >80%)",
          "Usage metric: are managers actually reviewing calls, or is it a recording archive nobody opens?",
          "Coaching metric: number of call-review sessions per AE per month — Gong has no value if it's not used for coaching",
          "Deal signal metric: are deal alerts (e.g., competitor mentions, pricing objections) being acted on?",
          "Pipeline metric: 60-day correlation between Gong engagement scores and deal advancement — does high engagement predict close?",
          "AE sentiment: are AEs using Gong clips in their own prep, or does it feel like surveillance?",
          "Success definition at 90 days: Gong is part of weekly deal reviews, not just a logging tool",
        ],
      },
    ],
    related: ["crm-hygiene", "revenue-analytics", "lead-routing"],
    example:
      "At Smile Identity, I rebuilt the data stack on Redshift + Tableau from scratch. The goal wasn't analytics sophistication — it was giving the board a single source of truth so we could raise Series B on clean metrics.",
  },
  {
    id: "lead-routing",
    title: "Lead Routing & Data Quality",
    category: "revops",
    definition:
      "Lead routing is the process of assigning inbound leads (from marketing, events, or product sign-ups) to the right AE based on defined rules: geography, company size, industry, named account lists, or round-robin within a segment. Data quality at the point of routing determines whether the right rep gets the right lead — bad enrichment means enterprise leads land on SMB reps. SLAs define how long a rep has to respond before the lead is reassigned.",
    whyItMatters:
      "In a market like DACH where Anthropic is building the enterprise motion from scratch, leads are scarce and misrouted leads are expensive. Getting routing logic right upfront — and building the enrichment layer to support it — is a foundational RevOps task for the role.",
    interviewAngle:
      "Most likely to surface in a broader RevOps design question. Show you understand that routing rules are downstream of segmentation decisions: you can't build good routing without a clear ICP and territory model.",
    sampleQuestions: [
      {
        question:
          "How would you design the lead routing model for DACH given Anthropic's dual API + enterprise motion?",
        answerThemes: [
          "First decision: separate the two motions — API/developer leads go to a PLG/dev-success track; enterprise leads go to AEs",
          "Signal for enterprise routing: company size (>500 employees), industry (FS, Healthcare, Technology), and job title (CDO, CTO, VP Engineering at a strategic account)",
          "Named account check: if inbound is from a named account, route directly to that account's AE regardless of form fill",
          "Enrichment layer: use ZoomInfo or Clearbit to append firmographic data before routing — don't rely on self-reported company size",
          "SLA: enterprise leads get a 4-hour response SLA; developer leads get a same-day automated sequence",
          "Failsafe: weekly audit of routing accuracy — spot-check 10 leads per week to catch systematic misroutes",
          "DACH nuance: German and Austrian accounts route differently (different AE territory model)",
        ],
      },
      {
        question:
          "A developer at a €2B German manufacturing firm submits a form saying they want to 'learn more about the Claude API.' How do you route this?",
        answerThemes: [
          "Don't route on the form fill alone — '€2B German manufacturing firm' is an enterprise signal that overrides the API intent",
          "Enrich the lead: confirm company size, industry, and whether the account is on any named list",
          "Check if there's an existing account owner: if a DACH AE has this account, route to them with context",
          "If no AE owns the account: flag as a hot inbound to the DACH team lead for assignment",
          "Initial outreach: frame around the enterprise value (scale, security, governance) while acknowledging the API interest",
          "Goal of first meeting: understand scope of internal AI initiative and identify Economic Buyer — not close a deal",
          "Don't send an automated API developer sequence to a €2B firm — that's a missed enterprise opportunity",
        ],
      },
    ],
    related: ["crm-hygiene", "market-segmentation", "sales-tech-stack"],
  },
  {
    id: "revenue-analytics",
    title: "Revenue Analytics Infrastructure",
    category: "revops",
    definition:
      "Revenue analytics is the reporting layer that turns CRM, product, marketing, and finance data into decision-making inputs for sales leadership. It includes a standard dashboard set (pipeline by stage, AE productivity, deal velocity, win/loss rates, forecast vs. actuals), a cadence for reviewing them (weekly pipeline, monthly business review, quarterly exec readout), and the data infrastructure to produce them reliably (clean CRM + BI tooling + agreed definitions).",
    whyItMatters:
      "The JD requires you to analyze industry-specific metrics and pipeline dynamics to develop proactive insights — not reactive reporting. That means building the infrastructure, agreeing on metric definitions, and running the cadence, not just running queries when asked. Your current SIXT role has this in the job title.",
    interviewAngle:
      "Could come up as: 'How do you build a reporting infrastructure for a team that has none?' or 'What metrics do you put on a weekly pipeline dashboard?' Strong answers distinguish leading indicators (pipeline creation, stage conversion, activity) from lagging indicators (closed-won revenue, ACV).",
    sampleQuestions: [
      {
        question:
          "What metrics would you put on a weekly pipeline dashboard for the DACH enterprise team, and why those specifically?",
        answerThemes: [
          "Pipeline coverage by segment: total pipeline vs. target × 3–4x — the single most important leading indicator",
          "Stage distribution: deals by stage this week vs. last week — is the funnel moving?",
          "New pipeline created this week: are AEs building the next quarter's pipeline today?",
          "Deals with no activity in >14 days: zombie pipeline that inflates coverage and misleads forecasting",
          "Forecast vs. commit: what AEs have committed vs. what stage-weighting says — spot over/under-confidence",
          "Win/loss this week: track competitive losses in real time, not just quarterly",
          "Keep it to 6–8 metrics: if the dashboard requires 20 minutes to read, it won't be read",
        ],
      },
      {
        question:
          "You join Anthropic's DACH team and there's no reporting infrastructure — just Salesforce with inconsistent data. How do you build from scratch?",
        answerThemes: [
          "Step 1: agree on metric definitions before touching a tool — what does 'qualified opportunity' mean? What counts as ARR?",
          "Step 2: audit CRM data quality — understand what's reliable before building reports on it",
          "Step 3: fix the 5 critical data fields (stage, close date, economic buyer, next step, competitor)",
          "Step 4: build the weekly pipeline dashboard first — this drives the inspection cadence that improves data quality",
          "Step 5: layer in AE productivity metrics once pipeline data is clean",
          "Step 6: automate the reporting cadence — scheduled email every Monday, not ad hoc requests",
          "Don't build a beautiful BI layer on dirty data — fix the data first, then make it pretty",
        ],
      },
    ],
    related: ["pipeline-management", "forecasting", "sales-tech-stack"],
    example:
      "At SIXT, I built a revenue analytics infrastructure enabling KPI tracking and pipeline visibility across DACH, US, and APAC — the goal was proactive visibility, not just after-the-fact reporting.",
  },
];

export default concepts;
