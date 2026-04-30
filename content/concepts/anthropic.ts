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
  },
];

export default concepts;
