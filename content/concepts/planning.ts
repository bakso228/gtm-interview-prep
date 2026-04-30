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
    sampleQuestions: [
      {
        question:
          "You're designing territory structure for a 4-AE DACH enterprise team from scratch. Walk me through your process.",
        answerThemes: [
          "Step 1: TAM mapping — how many ICP-qualified accounts exist in DACH by country and vertical? (LinkedIn, ZoomInfo, or manual research)",
          "Step 2: AE capacity — how many accounts can one enterprise AE actively work at depth? Typically 15–25 for a 6–9 month cycle",
          "Step 3: strategic accounts — name the top 20–30 accounts by ARR potential; these get dedicated coverage regardless of geography",
          "Step 4: vertical alignment — if you have a FS specialist, align FS accounts to them across geographies",
          "Step 5: geographic residual — cover remaining accounts geographically (DE is big enough to split by region; AT and CH are single-AE markets at 4-person team size)",
          "Step 6: fairness test — run a TAM balance check across territories; AEs will compare, and perceived unfairness kills morale",
          "Document in Salesforce immediately — territory disputes are expensive and always arise from ambiguity",
        ],
      },
      {
        question:
          "A large global account (e.g., Allianz) has its headquarters in Munich but significant AI decision-making in its Swiss and UK subsidiaries. How do you handle it in your territory model?",
        answerThemes: [
          "Global accounts with distributed decision-making are the hardest territory edge case",
          "Option 1: single AE owns the global relationship, coordinates with regional AEs as needed — avoids internal conflict, requires strong global coordination",
          "Option 2: regional AEs own their local entity, with a global AE managing the relationship at parent level — more coverage but creates comp conflict risk",
          "For Anthropic's scale: assign to one AE (likely the DACH AE given Munich HQ), but build a formal global account coordination process",
          "Comp clarity: if the Swiss subsidiary signs, does the DACH AE get credit? Define this before the deal closes",
          "Document the decision in Salesforce and get sales leadership sign-off — ambiguity on global accounts is guaranteed conflict",
          "Revisit when team grows: once you have dedicated global account AEs, these accounts move off regional books",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Walk me through how you'd build a quota for a new enterprise AE joining the DACH team targeting financial services.",
        answerThemes: [
          "Step 1: territory TAM — how many ICP FS accounts are in this AE's territory? Estimate from firmographic data",
          "Step 2: reachable accounts — at 20 active enterprise accounts per AE, how many FS accounts can they realistically work in year 1?",
          "Step 3: expected deals — at a 6–9 month cycle, an enterprise AE closes 3–5 new logos per year in a new market",
          "Step 4: expected ACV — what's the expected deal size for a FS account in DACH? (Use comparable benchmarks or initial pipeline data)",
          "Step 5: win rate assumption — in a new market with no case studies, assume 20–25% win rate to be conservative",
          "Bottom-up calculation: 4 deals × €150K ACV × 22% win rate = ~€130K ARR (account for ramp: year-1 quota ~60–70% of full capacity)",
          "Sanity-check against top-down: does the sum of all AE quotas cover the company target? If not, reconcile the gap explicitly",
        ],
      },
      {
        question:
          "60% of your DACH AEs missed quota last year. How do you figure out whether the quota was wrong or the AEs underperformed?",
        answerThemes: [
          "60% miss rate is a warning sign — the healthy range is 30–40% missing, not 60%",
          "First diagnostic: was the miss consistent across all AEs or concentrated in 1–2 reps?",
          "If concentrated: likely a performance issue with specific AEs — the quota may be fine",
          "If spread across all AEs: the quota is almost certainly too high — a market, capacity, or ramp calibration problem",
          "Check the bottoms-up model: did actual deal count and ACV match the model assumptions?",
          "Check external factors: did a macroeconomic event, regulatory change, or competitive shift affect DACH specifically?",
          "If quota was wrong: acknowledge it, recalibrate, and communicate the change clearly — reps lose trust when bad quotas are defended rather than corrected",
          "Future-proofing: build in a mid-year quota review mechanism so calibration happens before end-of-year surprises",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Build a high-level capacity model for DACH enterprise. The revenue target is €5M ARR in 18 months, current team is 2 AEs. What do you need to know and what does the model output?",
        answerThemes: [
          "Inputs needed: expected ACV per deal, win rate, average sales cycle length, ramp timeline, expected annual AE attrition",
          "Productivity per fully-ramped AE: (ACV × win rate × deals per year). If ACV = €150K, win rate = 25%, 4 deals/year → €150K ARR per fully-ramped AE",
          "€5M target ÷ €150K per AE = ~33 AE-equivalents of productivity needed over 18 months",
          "Current 2 AEs at full ramp = €300K/year → significant gap",
          "Model quarterly hiring: hire 2 more in Q1, 2 more in Q2, 1 more in Q3 — but account for ramp (Q1 hire contributes ~20% in Q1, 50% in Q2, etc.)",
          "Account for 15–20% annual attrition: if you need 8 AEs, plan to hire 10",
          "Output: a quarter-by-quarter headcount plan, cumulative ARR projection, and a sensitivity table showing what changes if win rate is 5% lower",
        ],
      },
      {
        question:
          "Finance has set the DACH ARR target at €8M for next year. Your capacity model says €5.5M is achievable given current headcount and planned hiring. How do you handle the gap?",
        answerThemes: [
          "Present the model transparently — don't massage the numbers to match the finance target",
          "Show the assumptions: here's what drives the €5.5M figure (headcount, ramp, win rate, ACV)",
          "Show what it would take to hit €8M: X additional AEs hired by Q1, or win rate improvement of Y%, or ACV uplift of Z%",
          "Quantify the risk of each lever: hiring more AEs is capital-intensive and ramp-dependent; win rate improvement is uncertain",
          "Recommended path: agree on €5.5M as base case with a €7M stretch target tied to specific accelerating conditions",
          "Don't just say the target is wrong — bring a path to close the gap, even if you don't think it's fully achievable",
          "This is a finance partnership conversation, not a negotiation — show your work and let the data drive the decision",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Design the variable comp structure for a DACH enterprise AE with a €200K OTE. What does the plan look like, and what behaviors does it drive?",
        answerThemes: [
          "Base/variable split: 50/50 → €100K base, €100K target variable (standard for enterprise SaaS)",
          "Commission rate at 100% quota: target variable ÷ quota (e.g., €100K variable on €500K quota = 20% commission rate)",
          "Accelerator structure: 1.0x up to 100%, 1.5x from 100–125%, 2.0x above 125%",
          "Behavior this drives: AEs are motivated to push past quota (not sandbag at 99%), and are very motivated to reach 125%+",
          "SPIF option: €10K bonus for first FS logo closed in H1 — drives vertical focus where you want it",
          "Risk to avoid: accelerators that kick in at 75% quota attainment — this rewards mediocrity and inflates comp cost",
          "DACH legal note: German employment law has restrictions on variable comp changes — get legal review before finalizing",
        ],
      },
      {
        question:
          "Your AEs are sandbagging — holding deals back to hit quota cleanly rather than pulling forward. How do you redesign the comp plan to fix it?",
        answerThemes: [
          "Sandbagging is a rational response to comp plans that punish overperformance (if you hit 150% this year, quota goes up 50% next year)",
          "Root cause 1: ratcheting quota — if overperformance raises next year's quota, AEs rationally avoid it",
          "Root cause 2: quarterly flush — if deals don't carry over quarters, AEs hold December deals for Q1",
          "Fix for ratcheting: cap quota increases at a fixed percentage regardless of attainment (e.g., max 15% increase year-over-year)",
          "Fix for quarterly flush: allow a deal closed in the last 2 weeks of a quarter to count in either that quarter or the next — AE's choice",
          "Accelerators help but don't fully solve it: if 150% attainment this year means 200% quota next year, the accelerator is effectively zero",
          "The only sustainable fix is credible quota-setting: if AEs trust that good performance won't lead to punitive quota increases, sandbagging stops",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "You've just discovered the comp plan you designed has an unintended consequence: AEs are avoiding multi-year deals because the commission is structured around year-1 ACV only. How do you fix it?",
        answerThemes: [
          "First: acknowledge the error and communicate transparently — 'we found an unintended incentive and we're fixing it'",
          "Immediate fix: retroactively credit any AE who closed a multi-year deal in the current plan period on the full TCV, not just year 1",
          "Plan redesign: commission on TCV (total contract value) up to 3 years, not year-1 ACV",
          "Or: commission on year-1 ACV + a smaller kicker for years 2 and 3 upfront — simpler but still rewards multi-year",
          "Avoid: paying full multi-year commission upfront creates risk if the customer churns in year 1 — add a clawback provision",
          "Communication: change the plan in writing, with examples of how deals are now calculated",
          "Lesson: always model 5–10 real deals through a new comp plan before launching to find edge cases",
        ],
      },
      {
        question:
          "How do you communicate a mid-year quota reduction to AEs who are at 90% attainment and angry about the change?",
        answerThemes: [
          "Don't announce this in a team meeting — do 1:1s first with AEs who are directly affected",
          "Lead with transparency: here's why the business made this decision (market conditions, revised forecasts) — don't be vague",
          "Acknowledge the disruption: a quota change mid-year is genuinely disruptive and the frustration is legitimate",
          "Show them the math: at 90% of old quota, they're now at X% of new quota — what does their new attainment and comp look like?",
          "Don't defend a bad decision — if the quota was wrong, say so",
          "Protect the comp for AEs at 90%+: consider protecting their OTE payout at the original quota level for the current period",
          "Trust is the long-term asset: AEs who feel treated fairly through a difficult change stay; those who feel blindsided leave",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Walk me through building a bottom-up plan for DACH enterprise for the next 12 months. What are the inputs, assumptions, and outputs?",
        answerThemes: [
          "Input 1: ICP account count by vertical — how many qualified accounts exist in DACH? (LinkedIn, ZoomInfo, or vertical databases)",
          "Input 2: AE count and ramp timeline — 2 fully ramped, 2 ramping Q1, 1 new in Q3",
          "Input 3: deals per AE per year — enterprise cycle of 7 months → fully ramped AE closes ~4 deals in 12 months",
          "Input 4: expected ACV — by vertical (FS: €200K avg, Tech: €120K avg, Healthcare: €180K avg)",
          "Input 5: win rate by vertical — conservative (20%) for new market, less conservative for established accounts",
          "Calculation: (deals per AE × win rate × ACV) × AE-equivalent productivity by quarter",
          "Output: quarterly ARR projection with a base case and an upside case, plus a sensitivity table showing the impact of win rate or ACV being ±20%",
          "Reconcile with top-down: present the gap explicitly and propose either a revised target or the specific investments needed to close it",
        ],
      },
      {
        question:
          "Finance wants to add a 20% 'aspiration buffer' on top of your bottom-up plan. How do you respond?",
        answerThemes: [
          "Understand the intent: is it a stretch target (transparent) or an official quota (what AEs will be paid on)? These require different responses",
          "If it's a stretch target: that's fine — communicate it clearly as an upside scenario, not a commitment",
          "If it's an official quota: a 20% buffer on top of a bottoms-up model is a recipe for 30–40% quota miss rates",
          "Push back with data: 'here's what it would take to hit the +20% — X additional AEs in Q1, or win rate improving from 20% to 28%'",
          "Offer a middle path: base quota at bottom-up number, with accelerators designed to incentivize reaching the aspiration level",
          "The right framing: bottom-up is what's achievable with current plans; aspiration requires incremental investment",
          "Never just accept an inflated target without documenting your model — you want the paper trail when the miss happens",
        ],
      },
    ],
    related: ["quota-setting", "capacity-models", "territory-design", "forecasting"],
    example:
      "At Agoda, I built a bottom-up plan for our 2nd-largest acquisition channel across 50+ markets. The key was building market-level elasticity curves so that the plan wasn't just 'assume same as last year + 15%' but was grounded in actual bid response data.",
  },
];

export default concepts;
