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
      "Likely: 'What does a healthy pipeline look like for enterprise AI software?' or 'If pipeline in DACH FS is 50% below target, what's your diagnostic?' Strong answers show you go beyond deal count to stage distribution, age, coverage ratio, and source mix before drawing conclusions.",
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
    related: ["pipeline-management", "forecasting", "sales-tech-stack"],
    example:
      "At SIXT, I built a revenue analytics infrastructure enabling KPI tracking and pipeline visibility across DACH, US, and APAC — the goal was proactive visibility, not just after-the-fact reporting.",
  },
];

export default concepts;
