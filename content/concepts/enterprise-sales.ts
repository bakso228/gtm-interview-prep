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
    related: ["nrr-grr", "arr-mrr", "quota-setting", "deal-stages"],
  },
];

export default concepts;
