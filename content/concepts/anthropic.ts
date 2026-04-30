import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "claude-enterprise-positioning",
    title: "Claude's Enterprise Positioning",
    category: "anthropic",
    definition:
      "Claude is Anthropic's AI assistant, available via API and as Claude.ai (consumer + team tiers). In enterprise, Claude is positioned on three axes: capability (state-of-the-art reasoning, coding, analysis, long-context document processing), safety (Constitutional AI, reduced hallucinations, documented model behavior), and trust (enterprise-grade security, data privacy commitments, no training on customer data). The enterprise GTM pitch is distinct from the API/developer pitch — it targets business decision-makers, not engineers.",
    whyItMatters:
      "You need to understand what you're selling before you can build territory strategy, playbooks, or comp plans around it. Claude's safety positioning is a genuine differentiator in regulated industries (FS, healthcare) where AI risk is a board-level concern. Understanding where Claude wins and where it doesn't shapes every downstream GTM decision.",
    interviewAngle:
      "Almost certain to come up: 'What makes Anthropic's enterprise positioning different from OpenAI's?' or 'How would you sell Claude to a German bank's CDO?' Your answer should lead with business outcomes (risk reduction, compliance confidence, trusted AI partner), not model benchmarks.",
    related: ["ai-safety-gtm", "anthropic-competitive", "anthropic-verticals"],
    example:
      "A German insurance firm evaluating AI for claims processing cares less about Claude's MMLU score and more about: Can we audit its decisions? Will it hallucinate policy numbers? Where does our data go? That's Claude's turf.",
    sampleQuestions: [
      {
        question:
          "How would you pitch Claude's enterprise value proposition to a German bank's CDO who has already evaluated OpenAI?",
        answerThemes: [
          "Lead with business risk reduction, not model benchmarks",
          "Safety and auditability directly address CDO's liability concerns",
          "No training on customer data — critical for banking data confidentiality",
          "Long-context (200K tokens) for processing full loan files in one pass",
          "Constitutional AI produces more predictable, explainable outputs",
          "Acknowledge OpenAI's brand strength — reframe the evaluation criteria",
          "Offer a targeted POC on a real use case (e.g., regulatory report summarization)",
        ],
      },
      {
        question:
          "What are the three axes of Claude's enterprise positioning, and which one resonates most with regulated-industry buyers?",
        answerThemes: [
          "Three axes: capability, safety, trust",
          "Safety resonates most: Constitutional AI, documented behavior, reduced hallucinations",
          "Trust layer: no training on customer data, enterprise-grade security, data residency",
          "Capability still matters but should anchor to outcomes — 'summarize your 500-page contract in 30 seconds'",
          "Regulated buyers (FS, healthcare) have compliance teams who must approve AI vendors",
          "Safety documentation is actual procurement collateral — not just a talking point",
        ],
      },
    ],
  },
  {
    id: "ai-safety-gtm",
    title: "AI Safety as GTM Advantage",
    category: "anthropic",
    definition:
      "Anthropic's core research focus is building safe, interpretable AI systems. Constitutional AI (a technique for aligning AI behavior to principles without human labeling of every example) and research into AI interpretability are Anthropic's technical differentiators. In enterprise sales, these translate to: reduced risk of harmful outputs, more predictable and auditable model behavior, and a defensible position for CISOs and compliance teams. Safety is not just a product feature — it's Anthropic's brand promise and existential reason for existing.",
    whyItMatters:
      "Safety is the most important GTM differentiator Anthropic has in enterprise, especially in DACH where the EU AI Act creates regulatory urgency. Financial services, healthcare, and public sector buyers face real liability if AI systems make harmful or unexplainable decisions. Anthropic's safety research directly addresses that risk. Knowing how to translate safety research into business risk reduction — in plain language — is a core skill for this role.",
    interviewAngle:
      "Could come up as: 'How do you think about AI safety, and how does Anthropic's position on it resonate with you?' or 'How does safety become a sales argument vs. becoming a conversation-stopper?' Show you can connect safety to business risk, not just ethics. The CISO cares about liability; the CEO cares about brand risk; the CDO cares about model reliability.",
    related: ["claude-enterprise-positioning", "anthropic-competitive", "dach-market"],
    sampleQuestions: [
      {
        question:
          "How would you translate Anthropic's AI safety research into a compelling argument for a CISO evaluating enterprise AI vendors?",
        answerThemes: [
          "CISOs care about liability, auditability, and predictable behavior — not ethics abstractions",
          "Constitutional AI = model trained to follow principles → fewer unexpected harmful outputs",
          "Documented model behavior makes security review tractable vs. black-box competitors",
          "No training on customer data removes a major data-breach risk vector",
          "EU AI Act compliance: Anthropic's safety posture maps directly to high-risk AI requirements",
          "Concrete: 'Here's our security whitepaper and data processing agreement' — not theoretical",
          "Offer to include Anthropic's safety team in a technical deep-dive with their security architects",
        ],
      },
      {
        question:
          "How does the EU AI Act create GTM urgency for Anthropic in DACH, and how would you use it in a sales conversation?",
        answerThemes: [
          "EU AI Act enters force 2026 — high-risk AI uses (FS, healthcare) face mandatory compliance",
          "Creates urgency: enterprises must demonstrate AI systems are safe and auditable",
          "Anthropic's safety-first positioning is a compliance asset, not just a differentiator",
          "Position Anthropic as the 'compliance-ready' AI platform vs. move-fast competitors",
          "Use with procurement teams and legal/compliance stakeholders, not just IT",
          "Avoid overselling — know which use cases are actually classified as high-risk",
          "Pair with legal team resources or a compliance FAQ to make procurement easier",
        ],
      },
    ],
  },
  {
    id: "anthropic-competitive",
    title: "Anthropic vs. OpenAI vs. Google vs. AWS",
    category: "anthropic",
    definition:
      "The four primary competitors in enterprise AI: (1) OpenAI / Microsoft Azure OpenAI — largest brand, GPT-4/4o, deeply integrated with Microsoft 365 and Azure; (2) Google / Gemini — Vertex AI, Google Workspace integration, strong in companies already in GCP; (3) AWS Bedrock — multi-model platform (Claude included), wins on infrastructure incumbency; (4) Anthropic direct — positioning on safety, longer context, better reasoning in document-heavy tasks. Anthropic's weakness: smaller sales team, less brand recognition in Germany, fewer pre-built integrations.",
    whyItMatters:
      "You'll be competing with these vendors in every enterprise deal. Battle cards, competitive plays, and pricing discussions all depend on knowing where Claude genuinely wins and where it doesn't. In DACH, Microsoft's deep penetration of enterprise accounts (Office 365 is everywhere) means Azure OpenAI will be in virtually every evaluation. You need a specific answer for why Claude beats or complements Azure OpenAI.",
    interviewAngle:
      "Could come up directly: 'How would you differentiate Anthropic from OpenAI in a German bank pitch?' or indirectly in a scenario: 'OpenAI is undercutting on price in two of your top accounts.' Strong answers don't bash the competitor — they reframe the evaluation criteria on dimensions where Claude wins.",
    related: ["claude-enterprise-positioning", "ai-safety-gtm", "competitive-enablement"],
    example:
      "Claude's long-context window (200K tokens) and documented safety properties are concrete advantages over GPT-4o for financial document analysis. A pitch that leads with 'we can process your entire loan file in one pass with auditable outputs' beats a feature-by-feature comparison.",
    sampleQuestions: [
      {
        question:
          "A large German manufacturer is already deep in the Microsoft ecosystem and evaluating Azure OpenAI. How do you win — or co-exist?",
        answerThemes: [
          "Don't fight the Microsoft relationship — frame as complementary, not competing",
          "Azure OpenAI has Claude available on Bedrock too — open the conversation around best model for each task",
          "Claude's advantages: longer context, stronger reasoning on unstructured docs, better safety posture",
          "For manufacturing use cases (technical docs, quality procedures, supply chain), long-context matters",
          "Find the champion outside IT — often a COO or Head of Operations with a specific pain point",
          "A side-by-side POC on a real document-analysis task beats a slide deck",
          "If you can't win the full account, win a beachhead use case and expand",
        ],
      },
      {
        question:
          "OpenAI is cutting price aggressively in two of your top DACH accounts. How do you respond?",
        answerThemes: [
          "Don't immediately match on price — diagnose whether this is a price problem or a value problem",
          "Engage your executive sponsor: 'What's driving the re-evaluation — cost pressure or new requirements?'",
          "Reframe evaluation criteria: total cost of ownership includes failed outputs, compliance rework, vendor lock-in",
          "Claude's safety and auditability have quantifiable risk value — especially in regulated accounts",
          "Escalate to Anthropic leadership if strategic account — executive-to-executive engagement",
          "Understand the competitor's offer: feature-by-feature or bundle pricing?",
          "If price is the real issue, explore multi-year commitment or expanded scope in exchange for better terms",
        ],
      },
    ],
  },
  {
    id: "api-vs-enterprise-gtm",
    title: "API-First vs. Enterprise GTM",
    category: "anthropic",
    definition:
      "Anthropic operates two distinct GTM motions simultaneously: (1) API/developer — developers integrate Claude directly, pay per token, self-serve onboarding, bottoms-up adoption; (2) Enterprise direct — large organizations buy managed access, SLAs, data privacy guarantees, dedicated support, and often a negotiated contract. These two motions require different AE profiles, different pricing, different enablement, and different stage definitions. The complexity is that a developer-adopted account can become an enterprise account — and managing that transition is a key challenge.",
    whyItMatters:
      "DACH enterprise GTM is the sales-led motion, but many target accounts will already have developers using the API. Understanding how to bridge from developer adoption to enterprise commitment — and how to avoid channel conflict — is a nuanced GTM design problem specific to Anthropic. You'll need to build a model for when an API account becomes a sales-qualified enterprise opportunity.",
    interviewAngle:
      "Could come up as: 'How do you think about Anthropic's dual GTM motion?' or 'A large bank's data team is already using the API — how do you convert that to an enterprise deal?' Show you understand that the developer motion creates warm leads, not just potential channel conflict.",
    related: ["gtm-motion-types", "claude-enterprise-positioning", "market-segmentation"],
    sampleQuestions: [
      {
        question:
          "A large DACH bank's data science team has been using the Claude API for 3 months on an internal project. How do you convert this to an enterprise deal?",
        answerThemes: [
          "Developer usage is a warm signal — treat it as a SQLed inbound, not cold outreach",
          "Map the internal champion: who's paying the API bill? Who approved the pilot?",
          "Understand the use case: internal-only or customer-facing? Scale ambitions?",
          "Trigger: when developers want to go to production, enterprise requirements kick in (SLA, DPA, security review)",
          "Introduce enterprise value: data privacy guarantee, dedicated support, custom rate limits, no training on data",
          "Find the economic buyer — often IT leadership or CDO, not the data team",
          "Design a transition path: 'We can migrate your existing usage to an enterprise agreement with zero disruption'",
        ],
      },
      {
        question:
          "How would you design a lead routing model that distinguishes API self-serve accounts from enterprise opportunities in DACH?",
        answerThemes: [
          "Firmographic triggers: company size >1,000 employees, revenue >€500M → route to enterprise AE",
          "Usage signals: spending >€X/month on API, or specific use case categories (customer-facing, regulated data)",
          "Intent signals: contact from a non-engineering persona (IT director, CDO, procurement) on the API account",
          "SLA or data privacy inquiry → automatic enterprise qualification flag",
          "Build a shared CRM view: API accounts visible to enterprise AEs for named accounts",
          "Define clear handoff SLA: AE must engage within 48h of trigger",
          "Avoid over-routing: not every API user is enterprise-ready — create a qualification checklist",
        ],
      },
    ],
  },
  {
    id: "dach-market",
    title: "DACH Enterprise Market Characteristics",
    category: "anthropic",
    definition:
      "DACH (Germany, Austria, Switzerland) has distinct characteristics that affect enterprise AI GTM: (1) Data sovereignty concerns — GDPR + local regulations make 'where does my data go?' a procurement requirement, not just a preference; (2) Formal procurement processes — longer, more risk-averse than US; (3) Mittelstand dominance — Germany's Mittelstand (mid-size industrial companies) is the economic backbone, but enterprise AI adoption is concentrated in FS, telco, and large tech; (4) EU AI Act — coming into force in 2026, creates compliance urgency for high-risk AI use cases; (5) Language — German-language enablement and local case studies matter.",
    whyItMatters:
      "You're building the GTM motion specifically for DACH. Understanding these structural realities shapes every decision: where to invest first, what the sales cycle looks like, what's in the security review pack, and how to prioritize verticals. Treating DACH like a smaller version of the US market is a common mistake that produces slow cycles and low win rates.",
    interviewAngle:
      "Very likely in a role-specific question: 'What's different about selling enterprise software in DACH vs. the US?' or 'How does the EU AI Act affect your GTM strategy?' Show you have genuine knowledge of the market, not just general enterprise sales principles dressed up with a DACH label.",
    related: ["procurement-legal", "anthropic-verticals", "territory-design", "ai-safety-gtm"],
    example:
      "Swiss banks require that AI training data and inference happen within Swiss borders. This immediately filters to providers with Swiss data centers — something to know before qualifying an account, not after signing the NDA.",
    sampleQuestions: [
      {
        question:
          "What are the top three differences between enterprise AI sales in DACH vs. the US, and how do they shape your GTM approach?",
        answerThemes: [
          "1. Data sovereignty: GDPR + EU AI Act make data residency a procurement requirement — not optional",
          "2. Procurement culture: longer, more formal, risk-averse — expect 6–12 month cycles, more legal stakeholders",
          "3. Trust-first buying culture: German enterprises buy from vendors with local presence, references, and longevity",
          "Implication: qualify for data residency compatibility before investing in a deal",
          "Implication: invest early in executive relationships — decisions are made by committees, not champions alone",
          "Implication: develop local case studies and German-language materials — US-only references don't land",
          "Mittelstand is huge in volume but harder to scale — focus enterprise resources on FS, telco, large tech first",
        ],
      },
      {
        question:
          "How does the EU AI Act change your year-1 GTM priorities for DACH, and how would you use it in a sales conversation?",
        answerThemes: [
          "EU AI Act classifies high-risk AI (FS, healthcare, HR decisions) — those buyers face mandatory compliance",
          "Create urgency: 'You need an auditable, compliant AI partner before enforcement begins'",
          "Anthropic's safety posture is a compliance asset — Constitutional AI, documented model behavior",
          "Prioritize high-risk AI use cases in your ICP: credit scoring, insurance underwriting, clinical decision support",
          "Build compliance collateral: data processing agreement, model cards, security whitepaper",
          "Partner with legal/compliance advisory firms who are already working with these buyers",
          "Avoid overpromising: know which Anthropic use cases are high-risk vs. limited-risk under the Act",
        ],
      },
    ],
  },
  {
    id: "anthropic-verticals",
    title: "Anthropic's Key Verticals in DACH",
    category: "anthropic",
    definition:
      "Anthropic's primary enterprise verticals in DACH are: Financial Services (banks, insurance, asset management) — highest regulatory scrutiny, highest ACV, longest cycles; Healthcare — strong use cases in clinical documentation and research, strict data-residency requirements; Technology (software companies, IT services) — faster cycles, more technical buyers, often developers first; Manufacturing / Mittelstand — use cases in industrial documentation, quality control, supply chain; Retail — customer service automation, product data management, earlier-stage AI adoption. FS and Healthcare are the highest-priority verticals given deal size and differentiation fit.",
    whyItMatters:
      "The JD explicitly lists these verticals and requires vertical-specific GTM strategy. Knowing which verticals are ready (where the pain is explicit, the buyer is identified, and the compliance barriers are manageable) vs. which are emerging is the foundation of territory prioritization and resource allocation.",
    interviewAngle:
      "Likely to come up as: 'How would you prioritize verticals in DACH for year 1?' Strong answers use a scoring matrix: market size × ICP density × regulatory tailwind vs. headwind × deal velocity × Anthropic's competitive position in that vertical. Don't just pick FS because it's obvious — show the reasoning.",
    related: ["vertical-gtm", "icp", "dach-market", "claude-enterprise-positioning"],
    example:
      "A German private bank running AI on Anthropic for regulatory reporting summarization is a 10/10 case study: high ACV, replicable use case, genuine Claude advantage (long-context document analysis + safe outputs). Finding that account and packaging it into a vertical play is your year-1 priority.",
    sampleQuestions: [
      {
        question:
          "How would you prioritize DACH verticals for year 1 at Anthropic, and what framework would you use to make that decision?",
        answerThemes: [
          "Framework: score each vertical on 4 axes — deal size/ACV, ICP density, regulatory tailwind, Anthropic's competitive advantage",
          "Year-1 priority: Financial Services — highest ACV, strongest Claude differentiator (safety + long-context), clear use cases",
          "Year-1 secondary: Technology companies — shorter cycles, technical champions, developer-first entry point",
          "Year-2 build: Healthcare — strong use case fit but longest procurement and strictest data residency requirements",
          "Watch list: Manufacturing (Mittelstand) — large market but AI maturity lower, longer education cycle",
          "Don't spread thin — two well-resourced verticals beat five underfunded ones",
          "Validate with data: where are current API users concentrated? That's your warm ICP",
        ],
      },
      {
        question:
          "Design a sales play for financial services in DACH. What's the ICP, entry point, use case, and win condition?",
        answerThemes: [
          "ICP: Private banks, insurance firms, asset managers — €5B+ revenue, dedicated innovation or AI team",
          "Entry point: CDO, Head of AI/Innovation, or Chief Risk Officer — not IT procurement",
          "Use case: regulatory document processing (MiFID, Basel IV reporting), contract analysis, research summarization",
          "Why Claude wins here: 200K context for long docs, safety documentation for compliance teams, no training on data",
          "Discovery questions: 'What's your current process for X regulatory report? What happens when it's wrong?'",
          "POC design: take a real 200-page regulatory document and show structured output with sources cited",
          "Win condition: identified economic buyer, defined success criteria in POC, compliance team sign-off path clear",
        ],
      },
    ],
  },
];

export default concepts;
