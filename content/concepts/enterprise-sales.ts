import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "deal-stages",
    title: "Deal Stage Definitions",
    category: "enterprise-sales",
    definition:
      "Deal stages are the agreed milestones an opportunity passes through from first contact to close. A typical enterprise SaaS stage model: (1) Prospecting / Target, (2) Discovery — pain confirmed, buyer identified, (3) Qualification — MEDDPICC complete, (4) Validation — POC or technical evaluation, (5) Proposal — commercial terms shared, (6) Legal / Paper Process — contracting underway, (7) Closed Won / Lost. Each stage has explicit entry criteria (what must be true to move in) and exit criteria (what the AE must complete to advance).",
    whyItMatters:
      "The JD requires establishing stage definitions and qualification criteria for consistent execution. Without agreed definitions, 'Stage 3' means different things to different AEs — which makes pipeline reviews useless and forecasting impossible. Clear stages also make coaching concrete: 'You're at stage 3 but haven't identified the Economic Buyer — what's your plan?'",
    interviewAngle:
      "Could come up as: 'How would you design a stage model for Anthropic's enterprise motion in DACH?' Show you understand that stage gates are forcing functions — the goal is not to have lots of deals in stage 3, it's to have the right deals advancing on a predictable schedule.",
    sampleQuestions: [
      {
        question:
          "Design a deal stage model for Anthropic's enterprise motion in DACH. What are the stages, and what are the entry criteria for each?",
        answerThemes: [
          "Stage 1 — Target: account is ICP-qualified, AE has done basic research, account exists in Salesforce with owner assigned",
          "Stage 2 — Discovery: first meaningful conversation held, pain confirmed, at least one stakeholder identified, next meeting booked",
          "Stage 3 — Qualification: MEDDPICC partially complete (Metrics, Economic Buyer, Decision Process identified), AE has proposed a POC or next evaluation step",
          "Stage 4 — Validation: POC underway with agreed success criteria and named champion; AE has access to the Economic Buyer",
          "Stage 5 — Proposal: commercial terms shared, MEDDPICC fully complete, Paper Process mapped and underway",
          "Stage 6 — Legal: contract in legal review, DPA signed or in progress, close date within 30 days and confirmed by buyer",
          "Stage 7 — Closed Won/Lost: deal concluded; loss reasons documented in Salesforce for win/loss analysis",
          "Key principle: stage gates are entry criteria, not effort certificates — a deal doesn't advance because the AE worked hard, it advances because specific things are true",
        ],
      },
      {
        question:
          "An AE has 60% of their pipeline in stage 5 (Proposal) and stage 6 (Legal). Should you be pleased or concerned?",
        answerThemes: [
          "Surface reaction: 60% late-stage looks like a strong quarter — deals are close to closing",
          "Concern: a pipeline heavy in late stages means the early funnel is empty — next quarter is at risk",
          "Check the question: is this 60% by value or by count? A few large deals distort the picture",
          "Check deal age in those stages: deals that have been in stage 5–6 for more than 45 days are stalled, not progressing",
          "The real question: what's entering stage 2 and 3 this week? If the answer is 'nothing,' you have a pipeline creation crisis in 90 days",
          "Healthy pipeline distribution: roughly 40% early stage (1–3), 35% mid-stage (4), 25% late-stage (5–6)",
          "Action: celebrate the late-stage strength while immediately running a pipeline creation sprint for Q+1",
        ],
      },
    ],
    related: ["pipeline-management", "meddpicc", "crm-hygiene", "forecasting"],
  },
  {
    id: "multi-threading",
    title: "Multi-threading",
    category: "enterprise-sales",
    definition:
      "Multi-threading means building relationships with multiple stakeholders at a prospect — not just the Champion or primary contact. In enterprise deals, the decision involves an Economic Buyer, technical evaluators, procurement, legal, and often executive leadership. Single-threaded deals (one contact per account) are high-risk: if your contact leaves, gets sidelined, or loses internal support, the deal dies. Multi-threading is the practice of proactively mapping and engaging the full buying committee.",
    whyItMatters:
      "Enterprise AI deals at Anthropic will involve CTO, CISO, legal, procurement, and often a board-level mandate. An AE who only talks to the technical champion will be blindsided by the CISO who has security concerns or the CFO who thinks the pricing is wrong. In this role, you'll build playbooks that coach AEs to identify and engage the full stakeholder map early.",
    interviewAngle:
      "Could surface in: 'A financial services prospect stalls at security review for 6 weeks. How do you support the AE?' Strong answers go straight to stakeholder mapping — who else should be engaged? Is there an executive sponsor we haven't reached? What does the CISO need that we haven't provided?",
    sampleQuestions: [
      {
        question:
          "An AE's best deal is single-threaded through a CDO champion who is excited about Claude. The CDO is on holiday for 3 weeks and the deal is stalling. What do you do?",
        answerThemes: [
          "This is a multi-threading failure that was always one person change away from this outcome",
          "Immediate: ask the CDO (before they leave) to make an internal introduction to their team lead or a technical sponsor",
          "Understand the stakeholder map: who else attended any POC or demo? Those people are warm contacts",
          "Reach out to the technical team directly: 'I wanted to make sure your team has everything needed during [CDO's] holiday'",
          "Use this pause productively: send over security documentation, model card, DPA draft — advance the Paper Process without the champion",
          "After the deal: do a post-mortem on multi-threading — why was this deal single-threaded, and what's the playbook change?",
          "The CDO holiday is a symptom, not the problem — the problem is one-contact-deep qualification",
        ],
      },
      {
        question:
          "How do you coach an AE to build a stakeholder map on a new enterprise deal, and what does a complete map look like?",
        answerThemes: [
          "A complete map has 5–8 people across at least 3 dimensions: business (CDO, line-of-business owner), technical (CTO, CISO, IT), and commercial (CFO, procurement, legal)",
          "For each stakeholder: name, title, their success criterion for this project, their level of support (champion, neutral, skeptic), and who they report to",
          "Coaching question: 'Who at [company] would lose sleep if this AI project went wrong?' — that person is often the hidden blocker",
          "Discovery tactic: in the first meeting, ask the champion 'who else needs to be involved in a decision like this?' — they'll often give you the full committee",
          "In DACH FS: always ask about the 'AI governance committee' specifically — most large German banks have one that isn't mentioned until late in the process",
          "Red flag: an AE who says 'my contact handles everything' — nobody in enterprise handles everything alone",
          "Update the stakeholder map in Salesforce at every stage — if it doesn't change over a 6-month cycle, you're not really multi-threading",
        ],
      },
    ],
    related: ["executive-sponsorship", "meddpicc", "deal-stages"],
    example:
      "At Meta in APAC, we lost a large telco partnership because the deal was single-threaded through the CDO. When the CDO was replaced, we had to restart from zero. After that, we built a stakeholder mapping tool into every deal review.",
  },
  {
    id: "executive-sponsorship",
    title: "Executive Sponsorship",
    category: "enterprise-sales",
    definition:
      "Executive sponsorship is the practice of pairing a senior leader from the selling company with a senior leader at the prospect. The sponsor's role is to access C-suite relationships that AEs can't reach, convey strategic commitment, and unblock stalls that occur at executive level. On the seller side, this is typically the VP of Sales or a CCO. Sponsorship relationships must be earned through delivery credibility, not just title — a 'sponsor' who never follows through destroys trust faster than no sponsor at all.",
    whyItMatters:
      "In DACH enterprise deals — particularly in financial services — C-level relationships are often decisive. German and Swiss procurement cultures tend to be more hierarchical than US/UK, and a deal that isn't anchored at SVP/C level in the prospect organization can stall indefinitely in procurement. Building a systematic executive engagement program is a GTM ops responsibility.",
    interviewAngle:
      "Could come up as: 'How do you structure executive sponsorship for a strategic account?' or embedded in a scenario: 'Your champion loves it but the CFO is blocking — what do you do?' Show that you have a plan for activating an exec sponsor, not just hoping one appears.",
    sampleQuestions: [
      {
        question:
          "Your champion at a Frankfurt bank loves Claude, but the CFO is blocking on pricing and the deal has stalled for 6 weeks. How do you use executive sponsorship to unblock it?",
        answerThemes: [
          "Step 1: understand the CFO's objection specifically — is it total price, payment terms, or ROI clarity? These require different responses",
          "Step 2: determine if the champion can bring the CFO into the conversation, or if the relationship is too siloed",
          "Step 3: request an executive sponsorship meeting — Anthropic's VP or CCO with the bank's CFO or COO, framed as a strategic partnership conversation, not a sales call",
          "Step 4: prepare the exec sponsor with a CFO-specific brief: ROI model, risk mitigation framing, reference from a comparable FS firm",
          "The exec sponsor's job: not to pitch, but to establish peer-level trust and signal Anthropic's long-term commitment to the relationship",
          "In German FS culture: C-level-to-C-level contact signals seriousness — procurement teams respond differently when the deal has executive attention",
          "If executive sponsorship doesn't unblock it: the CFO objection is a symptom of a deeper issue (wrong use case, wrong value prop, wrong timing)",
        ],
      },
      {
        question:
          "How do you build a systematic executive sponsorship program rather than relying on ad hoc interventions?",
        answerThemes: [
          "Define the criteria for executive sponsorship: deals above €300K ACV, strategic accounts, or deals stalled for >4 weeks at executive level",
          "Build a sponsor roster: which Anthropic executives are available for sponsorship, what industries are they credible in, what's their capacity?",
          "Create a briefing template: every sponsorship engagement needs a 1-page brief — account context, deal stage, exec's goal, talking points",
          "Track executive engagements in Salesforce: which accounts have had exec contact, what was the outcome, did it accelerate the deal?",
          "Post-engagement debrief: what did the customer exec say? What intelligence did you gain? Feed it back to the AE and RevOps",
          "Measure impact: do deals with executive sponsorship close faster or at higher ACV? This is your ROI proof to get exec time",
          "The program fails if it's treated as a firefighting tool — it should be proactive (strategic accounts) not just reactive (stalled deals)",
        ],
      },
    ],
    related: ["multi-threading", "meddpicc", "deal-stages"],
  },
  {
    id: "poc-pov",
    title: "POC / POV Design",
    category: "enterprise-sales",
    definition:
      "A Proof of Concept (POC) is a technical validation where the customer tests the product against their own data or use case. A Proof of Value (POV) goes further — it ties the evaluation to specific, agreed business metrics (e.g., 'reduce document processing time by 40%'). POVs are more powerful because they create a measurable commitment from the customer and a clear success criterion. The risk with both: if you enter a POC without mutual success criteria and a 'what happens next' agreement, you're doing free consulting.",
    whyItMatters:
      "AI enterprise deals almost always involve a POC. Anthropic's Claude deals in financial services or healthcare will involve the customer testing on their own documents, workflows, or data. Designing the POC with clear scope, a defined success metric, a named champion, and a timeline — and getting executive sign-off on 'if POC succeeds, we proceed to commercial' — is a critical playbook element.",
    interviewAngle:
      "Could come up as: 'How would you design a POC for an enterprise Claude deployment in FS?' Strong answers define: scope (specific use case, not 'let's see what it can do'), success criteria (measurable, agreed upfront), timeline (bounded, typically 4–6 weeks), stakeholders (who signs off on success), and mutual commitment (customer's time + named AE resources).",
    sampleQuestions: [
      {
        question:
          "Design a POC for a German insurance firm evaluating Claude for claims document processing. What does a well-structured POC look like?",
        answerThemes: [
          "Use case definition: Claude processes incoming claims documents (PDFs, scanned forms) and extracts structured data — not 'explore what AI can do'",
          "Success criteria (agreed upfront): >90% extraction accuracy on a sample of 500 historical documents, processing time <30 seconds per document",
          "Timeline: 4 weeks — week 1 setup and data access, weeks 2–3 evaluation runs, week 4 results review and commercial discussion",
          "Mutual commitment: customer provides 500 labeled documents and a technical lead; Anthropic provides a solutions engineer and weekly check-ins",
          "Named stakeholders: champion (Head of Claims Analytics), technical sign-off (CTO), and Economic Buyer agrees upfront that a successful POC leads to a commercial conversation",
          "The 'what happens next' agreement: secure explicit commitment before POC starts — 'if we hit these criteria, we move to commercial proposal within 2 weeks'",
          "Without this agreement, you run a free POC and the customer says 'thank you, we'll be in touch'",
        ],
      },
      {
        question:
          "A prospect wants to run a 6-month 'extended evaluation' with no defined success criteria or commercial commitment. How do you respond?",
        answerThemes: [
          "This is a free consulting engagement dressed as a POC — decline or renegotiate the terms",
          "Reframe the ask: 'We'd love to support a thorough evaluation. To make it valuable for both sides, can we agree on specific success criteria and a timeline?'",
          "Propose a bounded 4-week POC on one specific use case instead of a 6-month open-ended evaluation",
          "Ask the qualification question: 'What would need to be true at the end of this evaluation for you to move to a commercial agreement?'",
          "If they can't answer that question, they're not ready to buy — this is a discovery problem, not a POC problem",
          "Red flag: 'extended evaluation' often means 'we want to use your product for free while we decide if we want to pay'",
          "Option: offer a paid POC with a credit toward the first year's contract if they proceed — this filters serious buyers from tire-kickers",
        ],
      },
    ],
    related: ["deal-stages", "meddpicc", "value-propositions", "multi-threading"],
  },
  {
    id: "procurement-legal",
    title: "Procurement & Legal in Enterprise Deals",
    category: "enterprise-sales",
    definition:
      "Enterprise deals in DACH typically involve a formal procurement process: vendor registration, RFP/RFI, security questionnaire, data protection impact assessment (DPIA), Data Processing Agreement (DPA), Master Service Agreement (MSA) redlines, and legal review. In regulated industries like financial services, add BaFin compliance review, AI-specific risk assessments, and potentially model documentation requirements under the EU AI Act. These processes can add 2–6 months to a deal cycle even after technical and commercial agreement.",
    whyItMatters:
      "The JD calls out operational excellence in 'complex industry sales cycles and compliance requirements.' In DACH, underestimating procurement complexity is a common mistake for US-origin companies. You need to map the Paper Process (the P in MEDDPICC) at stage 2, not stage 5 — otherwise you'll have a verbal yes and a 6-month close date.",
    interviewAngle:
      "Could surface in: 'A FS prospect stalls at security review for 6 weeks — what do you do?' or 'What's different about selling enterprise software in DACH vs. the US?' Show you understand data sovereignty (where does data reside?), regulatory context (GDPR, EU AI Act, BaFin), and procurement formality as structural realities, not obstacles.",
    sampleQuestions: [
      {
        question:
          "What's different about the procurement process for enterprise software in a German bank compared to a US tech company, and how does it affect your GTM motion?",
        answerThemes: [
          "Formality: German banks have structured procurement committees, formal RFP processes, and multiple approval layers — informal relationships don't bypass them",
          "Timeline: a German bank procurement process for a new AI vendor can take 6–12 months after commercial agreement — this must be in your forecast model",
          "Data sovereignty: German banks often require data to remain in Germany or EU, with documented data-residency guarantees — not just a checkbox",
          "BaFin and MaRisk: regulatory requirements for AI systems in banking add a compliance review layer that US software companies don't usually face",
          "EU AI Act: high-risk AI use cases (credit scoring, fraud detection) require technical documentation, human oversight proof, and risk management systems",
          "Security questionnaire: German banks typically send 200-question security questionnaires — have pre-populated answers ready or the deal stalls for months",
          "GTM implication: surface the procurement process at stage 2, pre-populate documentation, and set realistic close dates based on procurement reality, not wishful thinking",
        ],
      },
      {
        question:
          "A deal is technically won — the CDO wants to proceed — but it's been stuck in legal review for 8 weeks. What do you do?",
        answerThemes: [
          "First: understand what specifically is blocking in legal — is it DPA language, liability caps, data residency clauses, or the AI Act compliance documentation?",
          "Get a named contact in the customer's legal team — working through the champion to 'ask legal' is too slow",
          "Escalate on Anthropic's side: does the customer's legal team need a call with Anthropic's legal to resolve specific clauses?",
          "Pre-emptive documentation: send the Anthropic standard DPA, model card, and security architecture diagram before being asked — waiting for requests adds weeks",
          "Activate executive sponsorship: a C-to-C call signals urgency and can unlock internal prioritization at the customer",
          "Parallel process: while legal reviews, complete procurement registration, security questionnaire, and any other Paper Process steps that don't depend on legal",
          "Ask directly: 'What is the single biggest open item preventing legal sign-off?' and address that specifically — don't try to solve everything at once",
        ],
      },
    ],
    related: ["deal-stages", "meddpicc", "dach-market"],
    example:
      "German banks routinely add a 3rd-party security audit requirement (not just a vendor questionnaire) for AI systems. Building pre-clearance documentation — pen-test results, model cards, architecture diagrams — into the standard sales pack cuts 4–6 weeks off that step.",
  },
  {
    id: "expansion-motions",
    title: "Expansion Motions",
    category: "enterprise-sales",
    definition:
      "An expansion motion is the systematic process of growing revenue within existing customers. Common forms: seat expansion (more users added to a contract), usage growth (usage-based billing that scales with consumption), upsell (adding a higher-tier product or additional module), and cross-sell (adding a different product line). Expansion ARR is cheaper to acquire than new ARR because CAC is lower — the relationship, trust, and legal infrastructure already exist. QBR-driven upsell (using the quarterly business review as a structured expansion conversation) is the most common motion.",
    whyItMatters:
      "NRR > 100% depends on a working expansion motion. In this role, you'll design the expansion playbook: when does CS hand off to AE for upsell conversations, what triggers an expansion outreach, how are expansion quotas set. In AI, expansion often comes naturally as customers find new use cases — your job is to formalize it, not rely on organic discovery.",
    interviewAngle:
      "Could come up as: 'How do you think about land-and-expand in Anthropic's context?' or 'How would you design a QBR to maximize expansion opportunity?' Show that expansion is a planned motion, not an afterthought — it requires its own stage definitions, success metrics, and comp structure.",
    sampleQuestions: [
      {
        question:
          "Design an expansion playbook for Anthropic's DACH enterprise customers 6 months after initial deployment. What triggers expansion outreach and how is it structured?",
        answerThemes: [
          "Trigger 1: usage growth — if a customer's API usage grows >50% month-over-month, that signals new use cases and expansion readiness",
          "Trigger 2: QBR success — the quarterly business review shows the initial use case is performing; transition the conversation to 'what's next?'",
          "Trigger 3: new stakeholder — a new CDO or AI lead joins the account; a relationship reset is an expansion opportunity",
          "Trigger 4: new regulation — EU AI Act compliance requirements create a new use case (AI governance documentation, audit trails)",
          "Expansion conversation structure: review results from deployment → quantify the ROI achieved → introduce 2 adjacent use cases with rough business case → agree on a next evaluation or pilot",
          "CS-to-AE handoff: CS owns the relationship day-to-day; AEs engage for formal expansion discussions above €50K",
          "Expansion quota: give AEs an expansion quota separate from new logo quota — incentivize both motions",
        ],
      },
      {
        question:
          "How would you structure a QBR with an existing DACH enterprise customer to maximize expansion opportunity without making it feel like a sales call?",
        answerThemes: [
          "Frame: 'This is a partnership review, not a sales meeting' — the agenda should be customer-first",
          "Section 1: performance review — what metrics did we commit to at deployment? How are we tracking? (Be honest if underperforming)",
          "Section 2: customer goals — what are their AI priorities for the next 6 months? Listen more than you talk",
          "Section 3: product roadmap — share relevant upcoming Claude capabilities that map to what you just heard",
          "Section 4: adjacent use cases — based on what you've learned, propose 1–2 specific use cases you could support",
          "The expansion conversation is natural when it follows the customer's stated priorities — you're not pitching, you're proposing solutions to problems they just told you about",
          "Avoid: a QBR that is 80% product pitch and 20% customer listening — customers see through it and it erodes trust",
        ],
      },
    ],
    related: ["nrr-grr", "arr-mrr", "quota-setting", "deal-stages"],
  },
];

export default concepts;
