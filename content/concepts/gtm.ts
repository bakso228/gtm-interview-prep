import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "gtm-motion-types",
    title: "GTM Motion Types",
    category: "gtm",
    definition:
      "A GTM motion is the primary mechanism by which a company acquires and expands customers. The three main archetypes are product-led growth (PLG), where the product itself drives adoption and conversion; sales-led growth (SLG), where a direct sales team owns the full cycle from prospecting to close; and hybrid, which layers sales on top of product-driven interest. Most enterprise software companies operate some form of hybrid.",
    whyItMatters:
      "Anthropic serves both API developers (closer to PLG) and enterprise customers (sales-led). In this role you'll need to design sales motions, build playbooks, and set territory strategy that accounts for where deals originate and how they progress. Getting the motion right determines AE productivity and pipeline quality.",
    interviewAngle:
      "Expect questions like: 'How does Anthropic's API-first origin affect how you'd design the enterprise motion?' or 'Walk me through how you'd identify which accounts need a full sales cycle vs. a lighter touch.' Frame your answer around fit between product maturity, deal complexity, and buyer profile.",
    related: ["icp", "sales-plays", "vertical-gtm"],
    example:
      "Slack started fully PLG (free self-serve, viral team adoption), then added an enterprise sales team as deals grew in complexity. Anthropic is at a similar inflection point with Claude.",
  },
  {
    id: "icp",
    title: "Ideal Customer Profile (ICP)",
    category: "gtm",
    definition:
      "An ICP is a precise description of the company — not the person — most likely to become a high-value, long-term customer. It's defined by firmographic attributes (size, industry, geography, tech stack, maturity) combined with behavioral signals (budget cycle, current pain, initiative sponsorship). A well-defined ICP focuses selling effort and reduces cycle length by filtering out bad-fit deals early.",
    whyItMatters:
      "Territory design, account segmentation, and quota setting all depend on knowing your ICP. In DACH, you'd need to define which firmographics (e.g., FS firms with >€1B revenue and active digital transformation programs) are realistic early adopters of enterprise Claude vs. those that are years from procurement readiness.",
    interviewAngle:
      "Likely to come up as: 'How would you define Anthropic's ICP in DACH?' or 'How do you segment accounts to prioritize AE time?' Ground your answer in deal data, win/loss patterns, and the specific compliance and data-sovereignty context of German-speaking markets.",
    related: ["market-segmentation", "territory-design", "vertical-gtm"],
  },
  {
    id: "market-segmentation",
    title: "Market Segmentation",
    category: "gtm",
    definition:
      "Segmentation is the process of dividing a total addressable market into distinct groups that can be treated differently in go-to-market. Common dimensions: company size (SMB / commercial / enterprise / strategic), geography, industry vertical, buyer persona, or product usage pattern. Each segment typically has its own motion, quota model, AE profile, and success metrics.",
    whyItMatters:
      "This role explicitly requires designing territory and account segmentation strategies for DACH. Enterprise segments require longer cycles, higher ACV, and more complex qualification than commercial segments. Mixing them on a single motion produces mediocre results for both. Getting segmentation right is the prerequisite for everything else.",
    interviewAngle:
      "Could come up as: 'How would you segment the DACH market for Anthropic?' or 'What criteria determine whether an account is commercial vs. enterprise?' Your answer should show you can move from principles (employee count, procurement complexity, deal size) to a concrete cut that AEs can use in the field.",
    related: ["icp", "territory-design", "quota-setting"],
    example:
      "At Smile Identity, we segmented by geography × vertical (FS vs. tech) × deal size. Deals below $50K got a lighter motion; deals above $200K got exec-sponsored cycles with dedicated CS from day one.",
  },
  {
    id: "sales-plays",
    title: "Sales Plays",
    category: "gtm",
    definition:
      "A sales play is a repeatable, prescriptive sequence of actions an AE takes to address a specific customer situation — typically a pain point, use case, or competitive scenario. A play includes: the trigger (why now), the target persona, the talk track, supporting content, the call-to-action, and the success metric. Plays are narrower than playbooks (which cover the full motion) — a playbook might contain a dozen plays.",
    whyItMatters:
      "The JD asks you to build industry-specific sales plays. A well-designed play compresses ramp time, enables consistent messaging across a team, and makes performance coaching easier. Without plays, AEs improvise — and output variance is high. In a new market like DACH enterprise AI, you'll likely need to build these from scratch.",
    interviewAngle:
      "Expect: 'Walk me through how you'd design a sales play for financial services.' Strong answers define the trigger (e.g., bank launching a GenAI initiative), the persona (CTO or CDO), the hook (safety and regulatory compliance), the CTA (POC with risk-scoring use case), and the metric (POC-to-close rate).",
    related: ["sales-playbooks", "vertical-gtm", "competitive-enablement"],
    example:
      "At Meta, we built a 'Digital Lending' play for APAC telcos — specific trigger (loan app launch), persona (CDO), hook (Meta user data for credit scoring), metric (cost per approved loan). Conversion was 2x the generic pitch.",
  },
  {
    id: "value-propositions",
    title: "Value Propositions",
    category: "gtm",
    definition:
      "A value proposition is the explicit claim of the specific outcomes a customer will achieve by using your product, made relevant to their role, industry, and current pain. Enterprise GTM requires three layers: company-level ('why Anthropic vs. OpenAI'), vertical-level ('why Claude for financial services'), and persona-level ('why Claude for your risk team specifically'). Generic propositions produce low conversion; tailored ones shorten cycles.",
    whyItMatters:
      "You'll be asked to build and maintain industry-specific value propositions in this role. For DACH, the angle is often regulatory safety (EU AI Act, GDPR compliance), local data sovereignty, and documented safety properties. These map directly to what enterprise procurement teams ask about.",
    interviewAngle:
      "Could come up as: 'How would you build Anthropic's value proposition for a German financial services firm?' or 'What's the difference between a product pitch and a value proposition?' Show that you understand the buyer's internal business case, not just the feature list.",
    related: ["sales-plays", "icp", "competitive-enablement"],
  },
  {
    id: "vertical-gtm",
    title: "Vertical / Industry GTM",
    category: "gtm",
    definition:
      "Vertical GTM is the practice of specializing sales motions, messaging, playbooks, and enablement by industry rather than treating all customers uniformly. Each vertical has distinct buyer personas, procurement processes, regulatory environments, preferred use cases, and competitive landscapes. Specialization allows AEs to build credibility faster, reference relevant case studies, and close deals at higher ACV.",
    whyItMatters:
      "This is a core responsibility in the JD: refining industry-specific GTM strategies across Financial Services, Healthcare, Technology, Retail, and Manufacturing. In DACH, each vertical has unique characteristics — FS has strict BaFin oversight, manufacturing is Mittelstand-heavy, healthcare has data-residency requirements. Generic messaging doesn't clear procurement in these segments.",
    interviewAngle:
      "A natural prompt: 'How would you prioritize which verticals to enter first in DACH?' or 'What makes a vertical ready for a dedicated sales play?' Strong answers balance market size, deal velocity, competitive differentiation, and Anthropic's existing case studies or credibility in that vertical.",
    related: ["icp", "sales-plays", "value-propositions", "anthropic-verticals"],
  },
];

export default concepts;
