import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "sales-playbooks",
    title: "Sales Playbooks",
    category: "enablement",
    definition:
      "A sales playbook is a documented collection of everything an AE needs to execute a specific sales motion: ICP definition, discovery questions, objection handling, competitive positioning, qualification criteria, stage requirements, talk tracks, case studies, and proposal templates. Playbooks reduce ramp time, create consistency across a team, and make coaching scalable. They're living documents — updated as market conditions and win/loss data evolve.",
    whyItMatters:
      "The JD explicitly requires building and maintaining industry-specific sales playbooks. For Anthropic's DACH enterprise motion, this means creating playbooks vertical by vertical — starting with Financial Services and Technology — and updating them as you accumulate deal data. A playbook without an update process becomes shelfware within a quarter.",
    interviewAngle:
      "Could come up as: 'Walk me through how you'd build a playbook for a vertical you've never sold into before.' Show you start with customer research and win/loss interviews, not with a blank slide template. Output should be something AEs use, not something ops presents in a QBR.",
    sampleQuestions: [
      {
        question:
          "Walk me through how you'd build a sales playbook for Anthropic's financial services vertical in DACH from scratch.",
        answerThemes: [
          "Start with research, not slides: 5 customer interviews + 5 win/loss interviews before writing anything",
          "Define the ICP for this vertical specifically: which FS firms are most likely to close, and why",
          "Map the buying committee: who is involved in an enterprise AI decision at a German bank (CDO, CISO, procurement, legal, CFO)",
          "Build the discovery question bank: what questions reveal the pain, urgency, and budget situation in FS",
          "Objection library: top 5 objections in FS ('our data can't leave Germany', 'how is this different from OpenAI', 'what does BaFin say') with responses",
          "Include a POC design template specific to FS use cases",
          "Update process: quarterly review based on win/loss data — a playbook with no update mechanism is dead in 90 days",
        ],
      },
      {
        question:
          "How do you measure whether a sales playbook is actually being used and whether it's working?",
        answerThemes: [
          "Adoption metric: % of AEs who have completed a playbook certification or quiz within 30 days of launch",
          "Usage metric: are the talk tracks and discovery questions showing up in Gong call reviews?",
          "Conversion metric: are accounts engaged via the playbook converting at a higher rate than those that aren't?",
          "Cycle length: are deals using the playbook closing faster than the baseline?",
          "AE feedback: run a monthly 5-minute survey — what's working, what's missing, what needs updating",
          "If AEs aren't using it: the problem is usually format (too long, wrong format) or confidence (they don't trust it yet)",
          "Success signal: an AE in a deal review spontaneously references a playbook section without being prompted",
        ],
      },
    ],
    related: ["sales-plays", "ae-onboarding", "competitive-enablement"],
    example:
      "At Meta, we built global opportunity and prioritization playbooks across 20+ markets for the connectivity partnerships team. The key was making them market-specific enough to be credible, generic enough that a new rep could execute within a week.",
  },
  {
    id: "ae-onboarding",
    title: "AE Onboarding & Ramp",
    category: "enablement",
    definition:
      "AE onboarding is the structured process of getting a new account executive productive as quickly as possible. It includes product training, market education, tool setup, shadowing calls, certification on messaging, and the first solo deals. Ramp quota is a reduced target during the onboarding period — typically 25–50% of full quota in month 1–2, scaling to 100% by month 4–6 depending on deal complexity. Ramp design is a comp and capacity planning decision, not just an HR one.",
    whyItMatters:
      "The JD asks for experience building sales capacity models and headcount planning. New hire ramp is a core input: if you're hiring 3 AEs in Q1, their ramp profile determines when you get full productivity, which affects your Q2–Q3 revenue model. Getting onboarding wrong delays ramp; getting it right is a competitive advantage.",
    interviewAngle:
      "Could come up as: 'How would you design onboarding for a new enterprise AE in a market Anthropic hasn't entered yet?' or 'What does good ramp look like for an enterprise AI sales motion?' Show you think about time-to-first-deal, not just time-to-start.",
    sampleQuestions: [
      {
        question:
          "Design a 90-day onboarding plan for a new enterprise AE joining the DACH team in a market Anthropic hasn't fully entered yet.",
        answerThemes: [
          "Days 1–10: internal foundations — product deep-dive, competitive landscape, CRM setup, team introductions",
          "Days 11–20: market immersion — customer interview recordings, win/loss analysis, DACH-specific regulatory context",
          "Days 21–30: shadowing — join 5+ discovery calls with the most experienced AE, no talking, only observing",
          "Month 2: assisted execution — run first outbound sequences, first discovery call solo with manager on the line",
          "Month 3: first qualified opportunity in pipeline; first internal deal review with full MEDDPICC completed",
          "Certification checkpoint: can they deliver the FS pitch and handle the top 5 objections before going solo?",
          "Ramp quota: 25% in month 1–2, 50% in month 3, 75% in month 4, 100% from month 5",
        ],
      },
      {
        question:
          "How does ramp quota design affect your capacity model, and what happens if you get it wrong?",
        answerThemes: [
          "Ramp affects when you get revenue — a 6-month ramp means a Q1 hire doesn't contribute materially until Q3",
          "If ramp is too short: new AEs are at full quota before they're ready, miss badly, and churn",
          "If ramp is too long: you pay full OTE without proportional revenue, burning cash and distorting unit economics",
          "In a capacity model: model each new hire at 25/50/75/100% productivity per month — never assume full productivity from day 1",
          "For enterprise AI (long cycles): ramp in DACH should be 5–6 months minimum — first deals take that long to close even with warm leads",
          "The comp plan must align with ramp — if ramp quota is 25% but the accelerator starts at 100%, the structure is broken",
          "A capacity model that assumes full productivity at month 2 will have a forecast gap you won't understand until Q3",
        ],
      },
    ],
    related: ["sales-playbooks", "capacity-models", "quota-setting"],
  },
  {
    id: "bant",
    title: "BANT",
    category: "enablement",
    definition:
      "BANT is a sales qualification framework: Budget (does the prospect have budget allocated or accessible?), Authority (are you speaking to the decision-maker?), Need (is there a defined problem your product solves?), Timeline (is there urgency to solve it?). It's the original enterprise qualification framework — simple, widely understood, and useful for initial qualification calls. Its main limitation: it's buyer-passive, treating need and authority as pre-existing rather than things a good AE constructs.",
    whyItMatters:
      "You'll need to recommend a qualification framework for Anthropic's enterprise motion. BANT is a useful baseline for early-stage screening but breaks down in complex, multi-stakeholder enterprise deals where budget doesn't exist yet, authority is distributed, and the AE must create urgency rather than find it.",
    interviewAngle:
      "Most likely to come up as a comparison: 'When would you use BANT vs. MEDDIC vs. MEDDPICC?' Your answer should show you understand the trade-off between simplicity (BANT) and rigor (MEDDPICC), and can match the framework to the sales motion's complexity.",
    sampleQuestions: [
      {
        question:
          "When would you use BANT over MEDDIC, and are there situations where BANT is actually the better choice?",
        answerThemes: [
          "BANT works for: short cycles (<30 days), single buyer, sub-€50K ACV, transactional deals",
          "BANT fails for: enterprise deals where budget is created not found, authority is distributed across a committee, and urgency must be constructed",
          "In practice: BANT is a useful first-call filter — if budget, authority, need, and timeline are all absent, it's not a deal",
          "But passing BANT is necessary, not sufficient: a deal that passes BANT can still die at legal, CISO, or exec level",
          "For Anthropic DACH enterprise: BANT is insufficient — use MEDDPICC for anything above €100K ACV",
          "A team new to structured qualification: start with BANT, graduate to MEDDIC once the habit is formed",
          "Never use BANT as a reason to skip deeper qualification on a large deal",
        ],
      },
      {
        question:
          "An AE tells you a deal is qualified because 'they have budget and the VP wants it.' What questions would you ask in a deal review?",
        answerThemes: [
          "'What are the specific metrics they expect to achieve — what does success look like to them?' (Metrics)",
          "'Is the VP the Economic Buyer — do they own the budget and can they sign unilaterally?' (Economic Buyer)",
          "'What criteria will they use to select a vendor — is there a formal evaluation process?' (Decision Criteria)",
          "'What are the steps between now and a signed contract — who else needs to approve?' (Decision Process)",
          "'What happens if they don't solve this problem — what's the cost of inaction?' (Implicate Pain)",
          "'Who inside the organization is actively helping us win this deal?' (Champion)",
          "If the AE can't answer these, the deal is not qualified — it's a contact with interest",
        ],
      },
    ],
    related: ["meddic", "meddpicc", "sales-playbooks"],
  },
  {
    id: "meddic",
    title: "MEDDIC",
    category: "enablement",
    definition:
      "MEDDIC is an enterprise sales qualification framework with six components: Metrics (quantified business impact the customer expects), Economic Buyer (the person with budget authority), Decision Criteria (formal and informal criteria used to select a vendor), Decision Process (steps and timeline to reach a purchase decision), Identify Pain (the specific business pain driving urgency), and Champion (an internal advocate with influence who wants you to win). MEDDIC was developed at PTC in the 1990s and remains the gold standard for complex B2B deals.",
    whyItMatters:
      "This role is about enabling enterprise sales excellence. MEDDIC is the framework most enterprise sales organizations use to qualify and advance large deals. Knowing it in depth — and knowing how to coach AEs to use it — is table stakes. Anthropic's enterprise deals will involve multiple stakeholders, long cycles, and procurement scrutiny: exactly the environment MEDDIC was designed for.",
    interviewAngle:
      "Could come up as: 'Explain MEDDIC to a new AE' or 'How would you use MEDDIC to diagnose a stalled deal?' Show you can apply each letter to a real deal scenario, not just recite the definition. A strong answer might: use an example of a deal that stalled because the Champion left or the Economic Buyer was never identified.",
    sampleQuestions: [
      {
        question:
          "Walk me through MEDDIC on a hypothetical Anthropic enterprise deal — a German insurance firm evaluating Claude for claims processing.",
        answerThemes: [
          "Metrics: '30% reduction in claims processing time, 15% reduction in analyst headcount on document review' — specific, measurable, agreed with the customer",
          "Economic Buyer: likely the CFO or COO — the CDO sponsors but doesn't hold the budget; find and access the real budget owner",
          "Decision Criteria: formal (security certification, GDPR compliance, data residency) + informal (which vendor the CDO already trusts)",
          "Decision Process: legal review → CISO sign-off → procurement RFP → board approval — map every step and owner",
          "Identify Pain: claims fraud is rising, manual review is a bottleneck, and the EU AI Act requires explainable outputs by 2026",
          "Champion: the Head of Claims Analytics — she wants it to work, has credibility with the COO, and will advocate internally",
          "A deal without a Champion is a deal where you're the only one selling — that almost always loses",
        ],
      },
      {
        question:
          "A deal has been in stage 3 for 8 weeks with no movement. Using MEDDIC, how do you diagnose what's wrong?",
        answerThemes: [
          "Check Metrics: has the customer quantified what success looks like? If not, there's no urgency — they're exploring, not buying",
          "Check Economic Buyer: has the AE spoken to the person who actually controls the budget? If only the technical contact, that's the stall",
          "Check Decision Criteria: do we know what they'll use to make a choice? If criteria are vague, the deal has no forcing function",
          "Check Decision Process: is there a next formal step with a date? 'We're evaluating internally' without a date is not a process",
          "Check Champion: is the champion still in place and actively helping? People change roles, get busy, or lose political capital",
          "Most likely culprit for 8-week stalls: no Economic Buyer access and/or Champion has gone quiet",
          "Action: get the AE to request a Champion call this week — if the Champion won't meet, the deal is dead",
        ],
      },
    ],
    related: ["meddpicc", "bant", "deal-stages", "multi-threading"],
  },
  {
    id: "meddpicc",
    title: "MEDDPICC",
    category: "enablement",
    definition:
      "MEDDPICC extends MEDDIC with two additional letters: Paper Process (the legal, procurement, security, and contract steps required to close — common in enterprise) and Competition (who else is being evaluated and how you compare). These additions make MEDDPICC more complete for modern enterprise deals, where a professionally-won deal can still lose to procurement delays or a competitor who got to the Economic Buyer earlier. MEDDPICC is now the de facto standard at most scale-up and enterprise SaaS companies.",
    whyItMatters:
      "In DACH enterprise, the Paper Process component is especially important — German and Swiss procurement processes are often more formal and risk-averse than US ones. Security reviews, data processing agreements (DPAs), and legal redlines can add months to a cycle. Understanding and mapping the Paper Process early is a deal-acceleration lever.",
    interviewAngle:
      "Could come up as: 'What's the difference between MEDDIC and MEDDPICC?' or 'Walk me through MEDDPICC on an enterprise Claude deal.' Show you see the P (Paper Process) as a proactive management opportunity, not just a final step — the best AEs start surfacing procurement requirements at discovery, not at signature.",
    sampleQuestions: [
      {
        question:
          "What does the Paper Process look like for a typical enterprise Claude deal in a German financial services firm, and how do you manage it proactively?",
        answerThemes: [
          "Typical steps: NDA → security questionnaire → DPIA (data protection impact assessment) → DPA (data processing agreement) → MSA redlines → AI governance committee review → procurement sign-off → executive approval",
          "Timeline: in a German FS firm, this process alone can take 3–5 months after verbal agreement",
          "Proactive approach: surface the Paper Process at stage 2 discovery, not stage 5 — 'can you walk me through how your firm has procured enterprise software in the last 12 months?'",
          "Pre-populate the documentation pack: security questionnaire responses, model card, architecture diagram, DPA template — have these ready at stage 2",
          "Identify the Paper Process owner early: it's usually procurement + legal, not the CDO champion",
          "Parallel processing: start legal review while POC is running, not after it concludes",
          "The AE who surfaces Paper Process early closes 6 weeks faster than the one who waits",
        ],
      },
      {
        question:
          "How do you coach an AE to handle the Competition component of MEDDPICC when Anthropic is being evaluated against Azure OpenAI?",
        answerThemes: [
          "First: understand where Azure OpenAI is positioned — is it the incumbent, or a competing evaluation?",
          "If incumbent (Microsoft already in the account): the AE must displace or coexist — coexist is usually easier",
          "Key differentiators to arm the AE with: Constitutional AI for compliance-critical outputs, longer context window for document-heavy FS work, no training on customer data",
          "The TCO argument: Azure OpenAI integration looks cheap but requires significant engineering work and ongoing prompt engineering — Claude's enterprise support reduces that",
          "Don't bash Microsoft: 'different tools for different tasks' is more credible than 'we're better'",
          "Get to the Economic Buyer before Microsoft does: Azure reps have enterprise relationships — if Microsoft is already at the CDO level, you're behind",
          "Win/loss tracking: after every competitive deal, document what the customer said was the deciding factor — this is your best competitive intelligence",
        ],
      },
    ],
    related: ["meddic", "procurement-legal", "deal-stages"],
    example:
      "A financial services firm in Frankfurt loved the POC outcome but stalled for 4 months because nobody had mapped their internal AI procurement committee. MEDDPICC forces you to find that committee at stage 2, not stage 5.",
  },
  {
    id: "competitive-enablement",
    title: "Competitive Enablement",
    category: "enablement",
    definition:
      "Competitive enablement is the practice of equipping AEs with the knowledge and tools to win competitive deals. It includes battle cards (one-page comparisons on key competitors: where you win, where you lose, objection responses), win/loss analysis (structured post-deal interviews to identify patterns), and competitive positioning training. In AI, the competitive landscape changes fast — models are updated, pricing shifts, new entrants appear — so competitive content has a short shelf life and requires regular refresh.",
    whyItMatters:
      "Anthropic competes with OpenAI, Google (Gemini), AWS Bedrock, and Microsoft Azure OpenAI in every enterprise deal. Your battle cards need to be honest about where Claude wins (safety posture, RLHF, Constitutional AI, context window) and where it doesn't (brand recognition, integration breadth). Generic 'we're better' messaging loses deals; specific competitive traps win them.",
    interviewAngle:
      "Could come up as: 'A major competitor is undercutting on price in two of your top accounts. What's your response?' or 'How do you build a battle card for OpenAI vs. Claude?' Show you think about the buyer's perspective, not just feature parity.",
    sampleQuestions: [
      {
        question:
          "Build an Anthropic vs. Azure OpenAI battle card outline. What goes in it, and how do you keep it honest?",
        answerThemes: [
          "Section 1: Where we win — Constitutional AI / auditable outputs, longer context window, no-training-on-customer-data guarantee, safety research credibility",
          "Section 2: Where they win — Microsoft enterprise relationships, Azure ecosystem integration, Office 365 / Teams native, broader brand recognition in non-tech verticals",
          "Section 3: When to compete — regulated industries (FS, healthcare) where safety and explainability are procurement requirements",
          "Section 4: When to coexist — Azure OpenAI for general productivity use cases (email drafting, code assist); Claude for complex document analysis, compliance-critical outputs",
          "Section 5: Top 3 objections and responses — 'We already have Azure' / 'OpenAI is better known' / 'Why not just use GPT-4?'",
          "Honesty principle: a battle card that pretends you win everything is trusted by no one — AEs need to know where to fight and where to walk away",
          "Refresh cadence: quarterly, or when either model has a major release",
        ],
      },
      {
        question:
          "Azure OpenAI is undercutting on price in two of your top DACH accounts. What's your response?",
        answerThemes: [
          "Don't react with price — understand why the prospect is engaging with the price argument",
          "Price is often a proxy for perceived value gap: if they're price-sensitive, the value prop isn't landing",
          "Get the AE to dig: who raised the price issue — procurement or the Economic Buyer? Those require different responses",
          "Build the TCO case: Azure OpenAI integration requires significant engineering investment; Claude enterprise reduces that total cost",
          "Reframe the evaluation criteria: shift from 'price per token' to 'cost of a wrong output in a compliance context'",
          "Activate executive sponsorship: price objections at procurement level disappear when C-level alignment is strong",
          "If we're losing on price consistently across accounts: it's a pricing or packaging problem, not a sales problem — escalate to leadership",
        ],
      },
    ],
    related: ["sales-playbooks", "sales-plays", "value-propositions", "anthropic-competitive"],
  },
];

export default concepts;
