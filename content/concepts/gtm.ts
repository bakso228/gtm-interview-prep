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
    sampleQuestions: [
      {
        question:
          "Anthropic started as an API-first company. How does that origin shape how you'd design the DACH enterprise sales motion?",
        answerThemes: [
          "API adoption is a warm signal, not a sale — identify accounts already using the API as tier-1 targets",
          "Developer-led usage and enterprise procurement are different buyers: CDO/CTO vs. engineering team",
          "Build a bridge motion: when API spend or usage hits a threshold, trigger an AE outreach",
          "Sales motion must complement, not override, developer goodwill — heavy-handed enterprise pushes can kill organic adoption",
          "Messaging shifts from 'here's the API' to 'here's what your organisation can build at scale, securely'",
          "Sequence: developer POC → internal champion → executive sponsorship → enterprise contract",
        ],
      },
      {
        question:
          "A large German bank's data team is already using the Claude API on a credit card. At what point does this become a sales-qualified enterprise opportunity, and what do you do?",
        answerThemes: [
          "Qualification triggers: consistent spend growth, multiple teams using it, or a business-critical use case emerging",
          "First move: identify the internal champion — who is driving API adoption internally?",
          "Map upward: who owns the enterprise AI strategy? That's your Economic Buyer",
          "Frame the enterprise conversation as risk reduction + scale, not just 'buy more'",
          "Don't let an AE interrupt an organic adoption cycle — time the outreach carefully",
          "Goal of first enterprise meeting: understand scope of internal AI initiative, not pitch a product",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "How would you define Anthropic's ICP for the DACH enterprise segment? Walk me through the criteria you'd use.",
        answerThemes: [
          "Firmographic baseline: >1,000 employees, €500M+ revenue, headquartered or significant ops in DACH",
          "Industry fit: Financial Services, Healthcare, Technology — verticals with document-heavy workflows and regulatory need for auditability",
          "Maturity signal: active AI/ML team or CDO in place — laggard organizations won't close",
          "Tech stack signal: cloud-native (AWS/GCP/Azure), existing API integrations — friction to deploy is lower",
          "Budget signal: existing vendor spend on analytics, data, or cloud >€1M/year indicates procurement readiness",
          "Behavioral: attending AI conferences, publishing AI governance policies, or hiring for AI roles",
          "Negative signals: no data strategy, heavy on-prem infrastructure, no AI mandate from leadership",
        ],
      },
      {
        question:
          "Your AEs are spending time on deals that keep dying at security review or legal. What ICP signal might you be missing, and how do you fix it?",
        answerThemes: [
          "Late-stage death often means the account passed firmographic ICP but failed readiness ICP",
          "Add a procurement readiness filter: has this company bought enterprise SaaS in the last 2 years?",
          "Check for cloud/data governance maturity: if they don't have a DPA process, a Claude deal will stall indefinitely",
          "Add a 'AI governance posture' signal to ICP — companies with published AI policies are procurement-ready",
          "For DACH FS specifically: BaFin-regulated entities need a model documentation package upfront — qualify for that before investing cycles",
          "Solution: update ICP definition, retrain AEs on qualification criteria, add a stage-1 checklist item",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "How would you segment the DACH market for Anthropic's enterprise motion — and what motion does each segment get?",
        answerThemes: [
          "Strategic (top 20–30 accounts): named list, full enterprise cycle, exec sponsorship, dedicated AE",
          "Enterprise (1K–10K employees, €500M+ revenue): territory-based AE, full MEDDPICC qualification, 6–9 month cycle",
          "Commercial (250–1K employees): lighter motion, shorter cycle, higher volume, less customization",
          "Developer/API (any size, technical buyer): no AE initially — product-led, threshold-triggered outreach",
          "Key DACH nuance: Mittelstand (mid-market industrial) is a distinct segment requiring different messaging than German multinationals",
          "Segmentation should be encoded in Salesforce — AE territory assignments must match the model",
        ],
      },
      {
        question:
          "An AE wants to run enterprise and commercial deals simultaneously in their territory. What's your advice?",
        answerThemes: [
          "The motions are incompatible at the individual AE level — cycle length, deal complexity, and activity cadence are too different",
          "Forcing one AE to do both produces mediocrity on both — enterprise gets starved of focus, commercial gets over-engineered",
          "Solution: segment the territory clearly, assign the AE to one motion, route the other to a different resource or motion",
          "If team is too small to split: prioritize enterprise (higher ACV, better unit economics) and treat commercial as inbound-only",
          "Set clear rules of engagement in Salesforce so there's no confusion about which accounts get which motion",
          "Revisit at next planning cycle: if commercial opportunity is significant, make the headcount case",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Design a sales play for Anthropic targeting financial services firms in DACH that are actively launching a GenAI initiative.",
        answerThemes: [
          "Trigger: company announces an AI strategy, hires a Chief AI Officer, or publishes an AI governance policy",
          "Target persona: CDO or Chief Risk Officer — they own the regulatory and data risk dimension",
          "Hook: 'How do you ensure your AI outputs are auditable, explainable, and compliant with BaFin and EU AI Act requirements?'",
          "Differentiator: Claude's Constitutional AI and documented safety properties directly address the compliance question",
          "CTA: a bounded 4-week POC on a specific use case — regulatory reporting summarization or KYC document review",
          "Supporting content: EU AI Act readiness brief, model card, security architecture diagram",
          "Success metric: POC-to-commercial-proposal conversion rate, tracked at 60 days post-play launch",
        ],
      },
      {
        question:
          "You launched a sales play 60 days ago and it isn't generating pipeline. How do you diagnose whether to iterate or kill it?",
        answerThemes: [
          "First check: activation rate — are AEs actually running the play, or is it sitting in a folder?",
          "If activation is low: the problem is adoption (workflow friction, unclear instructions), not the play itself",
          "If activation is high but no pipeline: check where conversion is dying — outbound response, meeting conversion, or opp creation?",
          "Talk to AEs: what are prospects saying when they hear the pitch? What objection or silence is the response?",
          "Check the trigger: are you reaching accounts at the right moment, or is the timing off?",
          "Iterate if: message or CTA is wrong. Kill if: trigger or persona is fundamentally mismatched.",
          "Set a kill criterion upfront next time — define in advance what 'not working' looks like",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "Build Anthropic's value proposition for a German bank's CDO who is evaluating Claude for internal document processing workflows.",
        answerThemes: [
          "Lead with the business outcome, not the model: 'reduce analyst time on regulatory reporting by 60% without compliance risk'",
          "Regulatory hook: Claude's Constitutional AI provides auditable, explainable outputs — critical for BaFin-regulated decisions",
          "Data sovereignty: Anthropic's enterprise agreement ensures data does not leave agreed infrastructure and is not used for training",
          "Long-context advantage: Claude can process an entire annual report or loan file in a single pass — competitors can't",
          "Safety differentiation vs. OpenAI: documented model behavior, reduced hallucination rate on structured financial data",
          "ROI framing: X hours of analyst time saved per week × loaded cost rate = payback period well inside 12 months",
          "Avoid: feature lists, benchmark comparisons, or 'best model' claims — procurement teams don't care",
        ],
      },
      {
        question:
          "What's the difference between a company-level value proposition and a persona-level one, and why does the distinction matter in enterprise sales?",
        answerThemes: [
          "Company-level: why Anthropic vs. any AI vendor — addresses the Economic Buyer's strategic question",
          "Vertical-level: why Claude for financial services specifically — addresses industry-specific pain and regulatory context",
          "Persona-level: why Claude for the CISO vs. the CDO vs. the CFO — each has different success criteria and risk appetite",
          "Enterprise deals involve 5–8 stakeholders — a single message won't land for all of them",
          "The CDO cares about capability and speed; the CISO cares about security and auditability; the CFO cares about ROI and contract risk",
          "In practice: build a persona matrix — one column per stakeholder, one row per value dimension",
          "Failure mode: AEs use the company pitch for all personas and wonder why deals stall at CISO review",
        ],
      },
    ],
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
    sampleQuestions: [
      {
        question:
          "How would you prioritize which verticals to focus on first in DACH for Anthropic's enterprise motion? Walk me through your framework.",
        answerThemes: [
          "Score each vertical on: market size × ICP density × deal velocity × Claude differentiation × regulatory tailwind",
          "Financial Services: high ACV, strong Claude safety fit, longest cycles, best differentiation — tier 1",
          "Technology (software/IT): faster cycles, technical buyers, lower ACV, more competitive — tier 1 secondary",
          "Healthcare: strong use case (clinical docs, research), but strict data-residency adds 3–6 months — tier 2",
          "Manufacturing/Mittelstand: large market, but AI adoption is early-stage, slower buyer education — tier 2",
          "Retail: customer service automation is clear use case, but lower ACV and lots of point-solution competition — tier 3",
          "Year-1 focus: FS + Technology. Depth in two beats breadth in five.",
          "Revisit vertical prioritization at 6 months based on win rate and cycle length data",
        ],
      },
      {
        question:
          "What makes a vertical 'ready' for a dedicated sales play vs. a generic enterprise pitch?",
        answerThemes: [
          "Signal 1: you've closed 2–3 deals in the vertical and understand the buying pattern",
          "Signal 2: there's a repeatable trigger event — regulation, competitive pressure, or a mandate from the board",
          "Signal 3: the use case is specific enough to name ('KYC document review' vs. 'AI for banking')",
          "Signal 4: you have a case study or reference customer you can use in the pitch",
          "Signal 5: win rate in the vertical is meaningfully higher than average — the play is working implicitly",
          "Before a play: you're still hypothesis-testing. After the signals above: document and systematize it.",
          "A play without a case study or specific use case is just a pitch deck with a vertical logo",
        ],
      },
    ],
    related: ["icp", "sales-plays", "value-propositions", "anthropic-verticals"],
  },
];

export default concepts;
