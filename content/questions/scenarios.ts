import type { Question } from "@/content/types";

const questions: Question[] = [
  {
    id: "sc-01",
    category: "scenarios",
    prompt:
      "You join Anthropic and pipeline in DACH financial services is 50% below target. It's day 45. What do you do?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Day 45: diagnose before prescribing — resist the urge to launch a campaign",
      "Layer the diagnosis: total coverage ratio → stage distribution → source mix → deal age → AE-level breakdown",
      "Determine if the problem is pipeline creation (not enough new opps) or conversion (opps dying mid-funnel)",
      "Talk to the AEs — what are they hearing in the field? What's blocking deals?",
      "Talk to any existing FS customers — what made them buy? What almost stopped them?",
      "Quick wins: activate dormant opportunities, partner with marketing on an FS event, reactivate warm inbound",
      "Structural fix (takes longer): update FS play, improve MEDDPICC training, add competitive content",
      "Report to leadership: here's the diagnosis, here's the quick action, here's the structural fix timeline",
    ],
  },
  {
    id: "sc-02",
    category: "scenarios",
    prompt:
      "An enterprise AE wants to expand into the manufacturing vertical in DACH. The data is mixed. How do you advise them?",
    difficulty: "medium",
    idealAnswerThemes: [
      "What does 'mixed data' mean — define the signal first (some wins, some stalls, or simply sparse?)",
      "Manufacturing in DACH: large Mittelstand base, conservative procurement, slower AI adoption",
      "Buyer persona is different: OT engineers, plant managers — less digital than FS or tech buyers",
      "Competitive landscape: vertical-specific industrial AI vendors, not just OpenAI",
      "Recommend: time-boxed experiment — 2–3 named accounts, dedicated AE time block, 90-day read",
      "Set success criteria upfront: 1 POC, specific revenue threshold, or market feedback milestone",
      "Don't dilute FS focus — manufacturing should be additive, not substitutive",
      "Be direct with the AE: here's what I see in the data, here's my recommendation, here's how we'll evaluate it",
    ],
  },
  {
    id: "sc-03",
    category: "scenarios",
    prompt:
      "The VP of Sales disagrees with your territory cut. They think you've over-allocated to FS and under-resourced tech. How do you handle it?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Don't capitulate without a reason — your territory cut was data-driven",
      "Understand their objection: is it data-based or instinct-based?",
      "Run the numbers together — open the model, not just the conclusion",
      "FS case: higher ACV, stronger Claude differentiation, longer cycles but better unit economics",
      "Tech case: faster cycles, more deals, but lower ACV and more competitive pressure",
      "Offer a middle path if data supports it: name 5 tech accounts, keep FS territory weight",
      "If you genuinely update your view based on their argument — say so explicitly and revise",
      "End with a shared decision, not a compromise that satisfies no one",
    ],
  },
  {
    id: "sc-04",
    category: "scenarios",
    prompt:
      "You have to reduce quota by 15% mid-year due to market conditions. How do you approach this with the sales team?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Lead with transparency: announce before AEs hear it secondhand",
      "Context matters: give the business rationale — macro conditions, pipeline data, not a vague 'market'",
      "Don't just cut the number — recalibrate the full comp model (accelerator thresholds, OTE baseline)",
      "Differentiate by AE: reps who are at 90%+ attainment deserve different treatment than those at 50%",
      "Think about accelerator structure: if you cut quota but keep old accelerator threshold, you inadvertently reduce upside",
      "Communication: 1:1 before the team announcement — no one hears bad news in a group setting first",
      "Morale management: acknowledge the disruption, focus on what the team can control",
      "Follow-up: check attainment distribution at 30 days post-cut — verify the adjustment landed fairly",
    ],
  },
  {
    id: "sc-05",
    category: "scenarios",
    prompt:
      "A major competitor — OpenAI via Microsoft Azure — is undercutting on price in two of your top DACH accounts. What's your response?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Don't react with price — understand why the prospect is listening to the price argument",
      "If price is the headline: value prop isn't landing well enough — investigate before discounting",
      "Get the AE to map the full stakeholder situation: who is the price objection coming from? CISO? CFO? CDO?",
      "Build the TCO argument: integration costs, compliance work, data migration — Azure isn't free to switch to",
      "Claude's advantages: Constitutional AI documentation for compliance teams, long-context for document-heavy FS work",
      "Activate executive sponsorship on both sides — price objections at procurement level disappear with C-level alignment",
      "Don't match price unless you've exhausted value differentiation — price discounts set a precedent",
      "Win/loss tracking: if we're losing on price consistently, that's a product or packaging problem, not a sales problem",
    ],
  },
  {
    id: "sc-06",
    category: "scenarios",
    prompt:
      "CRM data is unreliable and AEs aren't logging deal activity consistently. How do you fix it without alienating the team?",
    difficulty: "medium",
    idealAnswerThemes: [
      "Start by understanding why — is it workflow friction, tool confusion, or active resistance?",
      "Lead with AE self-interest: accurate CRM = better forecast = less quota variance = more predictable comp",
      "Don't lead with enforcement — that breeds minimal compliance, not accurate data",
      "Fix the friction first: is logging cumbersome? Automate what can be automated (email sync, call logging via Gong)",
      "Define the minimum required fields — don't require everything, require the 5 things that actually matter",
      "Make data quality visible: publish a weekly 'data health' score per AE without naming/shaming",
      "Close-date discipline: manager accountability in pipeline review — 'your close date is 30 days old, is it still valid?'",
      "Final lever: tie comp calculation to CRM data — if it's not in Salesforce, it didn't happen",
    ],
  },
  {
    id: "sc-07",
    category: "scenarios",
    prompt:
      "You inherit a sales play that isn't generating pipeline after 60 days. How do you diagnose and decide whether to iterate or kill it?",
    difficulty: "medium",
    idealAnswerThemes: [
      "First: is 60 days enough to evaluate? Enterprise pipeline takes time — check what's reasonable",
      "Activation rate: are AEs using the play? If not, the problem is adoption, not the play itself",
      "Conversion funnel: where is it dying — outbound response, meeting conversion, or opportunity creation?",
      "AE feedback: what are they hearing when they use it? What resonates, what doesn't?",
      "Message-market fit: is the trigger event right? Is the persona right? Is the CTA right?",
      "Competitive read: is a competitor running a better version of this play?",
      "Decision framework: iterate if problem is message or CTA; kill if trigger or persona is wrong",
      "Don't let a bad play run for 6 months — define a kill criterion upfront next time",
    ],
  },
  {
    id: "sc-08",
    category: "scenarios",
    prompt:
      "It's week 3 at Anthropic. The Head of GTM asks you to present your 90-day plan. What's in it?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Framing: it's a listening-and-diagnosis plan, not a prescription plan — you've been there 3 weeks",
      "Day 1–30: stakeholder interviews (AEs, CS, finance, product), pipeline audit, stage definition review",
      "Day 31–60: diagnosis completed — present findings on top 2–3 GTM gaps",
      "Day 61–90: first deliverable — one concrete improvement (territory refinement, playbook, coverage dashboard)",
      "Include what you won't do: won't redesign the comp plan in week 3; won't promise outcomes before diagnosis",
      "Show intellectual humility: 'here's what I think I'll find, and here's where I might be surprised'",
      "Close with: what success looks like at 90 days, and how you'll know if you're on track",
    ],
  },
  {
    id: "sc-09",
    category: "scenarios",
    prompt:
      "A large financial services prospect in Frankfurt stalls at security review for 6 weeks. How do you support the AE?",
    difficulty: "hard",
    idealAnswerThemes: [
      "First move: map who's doing the review — internal CISO team? External audit firm? Both?",
      "What's the actual blocker: missing documentation, a specific concern, or committee scheduling?",
      "Proactive content: model card, architecture diagram, pen-test results, data processing agreement — don't wait to be asked",
      "Escalation: activate your CISO or security lead on Anthropic's side for a peer call",
      "Champion engagement: is the internal champion pushing from inside? Arm them with talking points",
      "Timeline management: every 10 days without progress is a stall, not a review — set a follow-up cadence",
      "Executive sponsorship: if committee chair is EVP or CRO, match the level on your side",
      "Parallel process: start legal/DPA work now so they're not sequential with security review",
    ],
  },
  {
    id: "sc-10",
    category: "scenarios",
    prompt:
      "You're asked to build a capacity model for DACH with an 18-month horizon. Where do you start, and what are the key assumptions?",
    difficulty: "hard",
    idealAnswerThemes: [
      "Step 1: anchor to the revenue target for the 18-month period (from finance or leadership)",
      "Step 2: fix expected ACV by vertical — your primary unit of revenue",
      "Step 3: determine expected win rate (use historical or comparable market benchmarks)",
      "Step 4: model expected sales cycle length — DACH enterprise is 6–9 months for new logos",
      "Step 5: calculate required pipeline to generate target ARR (target ÷ win rate = pipeline needed)",
      "Step 6: model AE productivity — deals per AE per year at full ramp, factoring cycle length",
      "Step 7: back into headcount needed by quarter, accounting for ramp (months 1–6 are partial productivity)",
      "Step 8: model attrition — assume 15–20% annual AE attrition, add backfill hiring",
      "Sensitivity table: what happens if win rate is 5% lower, or ACV is 20% below assumption?",
      "Output: headcount plan by quarter with confidence range, not a single point estimate",
    ],
  },
];

export default questions;
