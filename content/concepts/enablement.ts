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
    related: ["meddpicc", "bant", "deal-stages", "multi-threading"],
  },
  {
    id: "meddpicc",
    title: "MEDDPICC",
    category: "enablement",
    definition:
      "MEDDPICC extends MEDDIC with two additional letters: Paper Process (the legal, procurement, security, and contract steps required to close — common in enterprise) and Competition (who else is being evaluated and how you compare). These additions make MEDDPICC more complete for modern enterprise deals, where a technically-won deal can still lose to procurement delays or a competitor who got to the Economic Buyer earlier. MEDDPICC is now the de facto standard at most scale-up and enterprise SaaS companies.",
    whyItMatters:
      "In DACH enterprise, the Paper Process component is especially important — German and Swiss procurement processes are often more formal and risk-averse than US ones. Security reviews, data processing agreements (DPAs), and legal redlines can add months to a cycle. Understanding and mapping the Paper Process early is a deal-acceleration lever.",
    interviewAngle:
      "Could come up as: 'What's the difference between MEDDIC and MEDDPICC?' or 'Walk me through MEDDPICC on an enterprise Claude deal.' Show you see the P (Paper Process) as a proactive management opportunity, not just a final step — the best AEs start surfacing procurement requirements at discovery, not at signature.",
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
    related: ["sales-playbooks", "sales-plays", "value-propositions", "anthropic-competitive"],
  },
];

export default concepts;
