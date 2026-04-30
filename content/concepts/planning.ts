import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "territory-design",
    title: "Territory Design",
    category: "planning",
    definition:
      "Territory design is the process of dividing a total addressable market into fair, productive account sets for individual AEs. Two primary models: geographic (AE owns all accounts in a region) and named account (AE owns a defined list regardless of location). Inputs: TAM by geography, ICP density, deal complexity, AE capacity (how many accounts one rep can actively work), and strategic priorities. Good territory design creates roughly equal opportunity for all reps while aligning accounts to AEs who have the most relevant expertise.",
    whyItMatters:
      "This is listed explicitly in the JD's required qualifications: 'proven experience designing territories.' In DACH, you'll need to make specific decisions: How many AEs? Geographic split (DE vs. AT/CH) or named? How do you handle global accounts with DACH subsidiaries? Where do strategic accounts go? These decisions determine AE morale, comp fairness, and revenue concentration risk.",
    interviewAngle:
      "High probability question: 'How would you approach territory design for Anthropic's DACH enterprise segment?' Strong answers cover: (1) start with ICP density by geo, (2) map to AE capacity, (3) account for deal complexity and cycle length, (4) balance named vs. geo, (5) review annually not just at hire.",
    related: ["icp", "market-segmentation", "quota-setting", "capacity-models"],
    example:
      "At Smile Identity, I designed territories by vertical rather than geo — FS accounts globally went to one AE, fintech to another. It was unconventional but cut ramp time because AEs built deep vertical credibility fast.",
  },
  {
    id: "quota-setting",
    title: "Quota Setting",
    category: "planning",
    definition:
      "Quota is the revenue target assigned to an AE for a period (typically annual, broken into quarters). Two design approaches: top-down (take company target, subtract management buffer, divide by AE count) and bottoms-up (model each AE's territory opportunity, set individual targets, aggregate to see if it meets company goal). Best practice is to use both and reconcile. A healthy quota should be achievable by 60–70% of the team — if everyone hits it, it's too low; if fewer than 40% hit it, it's too high and will drive attrition.",
    whyItMatters:
      "The JD requires 'proven experience designing territories, setting quotas, and building variable compensation plans.' Quota is the single number AEs care most about. Setting it wrong — too high and you lose reps; too low and you leave revenue on the table. The fairness signal matters as much as the absolute number: reps compare quotas relentlessly.",
    interviewAngle:
      "Could come up as: 'How would you build a quota model for a new AE joining the DACH team?' or 'How do you handle ramp quotas?' Strong answers show the bottoms-up methodology: territory TAM × penetration rate × ACV × win rate = achievable new ARR. Then sanity-check against top-down company target.",
    related: ["territory-design", "capacity-models", "comp-philosophy", "ae-onboarding"],
    example:
      "At Smile Identity, I ran a full bottoms-up quota model for each of the 4 AEs. We used territory TAM (estimated from LinkedIn company data + ICP filtering), historical win rates, and average deal size. The first pass was 20% higher than what we thought was fair — so we added a fairness buffer and used the difference as a stretch target tied to accelerators.",
  },
  {
    id: "capacity-models",
    title: "Capacity Models",
    category: "planning",
    definition:
      "A capacity model projects how many AEs (and supporting roles) are needed to hit a revenue target over a planning horizon. Inputs: revenue target, expected ACV, ramp timeline, productivity assumptions (% of quota expected from fully ramped vs. ramping AEs), and attrition rate. Output: a headcount plan by quarter showing when to hire, with what profile. The model also shows the 'productivity cliff' — the gap between current and needed headcount in any quarter.",
    whyItMatters:
      "The JD requires 'track record of building sales capacity models, productivity frameworks, and headcount planning processes.' In a growth market like DACH, hiring ahead of capacity is expensive; hiring behind leaves revenue on the table. The model is also the key input for working with Finance on targets — you need to show what's achievable given planned headcount and ramp.",
    interviewAngle:
      "High probability question: 'You're asked to build a capacity model for DACH with an 18-month horizon. Where do you start?' The answer: (1) fix the revenue target, (2) determine expected productivity per fully-ramped AE, (3) model ramp curves for new hires, (4) back into headcount needed by quarter, (5) account for attrition.",
    related: ["quota-setting", "territory-design", "forecasting", "ae-onboarding"],
  },
  {
    id: "ote-accelerators",
    title: "OTE, Accelerators & SPIFs",
    category: "planning",
    definition:
      "On-Target Earnings (OTE) is the total compensation an AE earns when hitting 100% of quota — base salary plus target variable (commission). The base/variable split in enterprise SaaS is typically 50/50 for AEs, 60/40 for more senior roles. Accelerators are commission multipliers that kick in above 100% quota attainment — e.g., 1.5x commission on every dollar above quota. SPIFs (Sales Performance Incentive Funds) are short-term cash bonuses for specific behaviors (closing a deal in a target vertical, hitting Q1 early).",
    whyItMatters:
      "Comp design shapes behavior. Accelerators encourage AEs to push past quota rather than sandbagging. SPIFs drive tactical priorities in a specific quarter. The risk: poorly designed accelerators can create perverse incentives (gaming deal timing, cherry-picking accounts). You'll need to design these in this role and understand the second-order effects.",
    interviewAngle:
      "Most likely embedded in a comp design question: 'How would you design the comp plan for DACH enterprise AEs?' Show you think about behavior, not just math: what does this plan incentivize, and is that what you want?",
    related: ["comp-philosophy", "quota-setting", "capacity-models"],
  },
  {
    id: "comp-philosophy",
    title: "Comp Plan Philosophy",
    category: "planning",
    definition:
      "A comp plan is only as good as the philosophy behind it. Core principles: (1) Simplicity — AEs should be able to calculate their own commission in their head; (2) Alignment — the plan should reward the behaviors that drive company strategy, not just revenue; (3) Fairness — equal opportunity across territories, consistent treatment of windfalls; (4) Predictability — reps shouldn't be surprised by their paycheck. Annual changes should be communicated early and with clear rationale. Frequent or opaque changes destroy trust faster than almost anything else.",
    whyItMatters:
      "This role requires designing comp plans. The mechanics matter less than the philosophy — a complex plan that technically optimizes for the right metrics but that AEs don't understand will underperform a simpler plan that's intuitive and fair. DACH markets also have legal considerations around commission structures.",
    interviewAngle:
      "Could come up as: 'Walk me through the comp plan you'd design for DACH AEs' or 'How do you handle a comp plan mid-year if you get the quota wrong?' Show you understand the trust dimension of comp — it's as much a cultural lever as a financial one.",
    related: ["ote-accelerators", "quota-setting", "territory-design"],
  },
  {
    id: "bottom-up-planning",
    title: "Bottom-Up Planning",
    category: "planning",
    definition:
      "Bottom-up planning starts from individual account or territory-level assumptions and aggregates to a total target, rather than dividing a company target among reps. Inputs by AE: territory TAM, ICP density, expected deals in period, expected ACV, win rate, cycle length. Output: an achievable ARR projection grounded in field reality. Bottom-up is more accurate than top-down but takes longer to build. Best practice: do both and reconcile the gap — top-down sets ambition, bottom-up reveals reality.",
    whyItMatters:
      "The JD specifically calls for working with Finance on target setting and bottom-up modeling. This is a core planning skill: being able to build a defensible plan from the territory up, rather than just allocating a board number. It also gives you credibility with AEs — the plan was built from their data, not handed down from finance.",
    interviewAngle:
      "Could come up as: 'What does a bottom-up plan for DACH enterprise look like — inputs, assumptions, outputs?' Walk the interviewer through your methodology: TAM → ICP filtering → account count → deals per AE → expected ACV → win rate → ARR projection.",
    related: ["quota-setting", "capacity-models", "territory-design", "forecasting"],
    example:
      "At Agoda, I built a bottom-up plan for our 2nd-largest acquisition channel across 50+ markets. The key was building market-level elasticity curves so that the plan wasn't just 'assume same as last year + 15%' but was grounded in actual bid response data.",
  },
];

export default concepts;
