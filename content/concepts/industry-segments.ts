import type { Concept } from "@/content/types";

const concepts: Concept[] = [
  {
    id: "dach-banks",
    title: "DACH Banks — Segment Profile & Sales Motion",
    category: "industry-segments",
    definition:
      "DACH banking breaks into four structural layers, each with different buying dynamics: (1) Universal banks — Deutsche Bank, Commerzbank, UniCredit Germany, HypoVereinsbank — large IT teams, long cycles, executive access required; (2) Savings banks (Sparkassen) and cooperative banks (Volksbanken-Raiffeisenbanken) — collectively Germany's largest banking group by branch count, but decisions are made at the individual institution or association level, not centrally; (3) Private banks and asset managers — Julius Bär, DZ PRIVATBANK, Berenberg, Hauck Aufhäuser Lampe — smaller, faster-moving, innovation-oriented; (4) Swiss banks — UBS, Credit Suisse (absorbed into UBS), Vontobel, Pictet — strict data-residency (data must stay in Switzerland), highest compliance bar in DACH. Core characteristics: BaFin (Germany), FMA (Austria), FINMA (Switzerland) regulatory oversight; EU AI Act makes high-risk AI use cases (credit decisions, AML) formally regulated; data sovereignty is a procurement requirement not a preference; buying committees typically include CDO, CTO, CISO, Chief Risk Officer, legal, compliance, and often a dedicated AI governance board.",
    whyItMatters:
      "DACH banks represent the highest-ACV vertical Anthropic will pursue — typical enterprise deals in FS can reach seven figures over a three-year term. They also have the strongest product-market fit for Claude's specific differentiators: 200K-token context processes an entire loan file, regulatory report, or legal agreement in one pass; Constitutional AI gives compliance teams documentation they can take to regulators; no training on customer data removes the most common bank objection. The risk is that cycles are long (12–18 months) and procurement is formal — misunderstanding the org chart kills deals that should be won.",
    interviewAngle:
      "Very likely to come up as: 'Walk me through how you'd run a deal at a major German bank' or 'How do you handle data-residency objections from Swiss banks?' Show you understand that safety documentation is actual procurement collateral — not a talking point. Know the difference between the Sparkassen-Verbund (you need to work through DSGV or the Finanzinformatik IT subsidiary to scale) and a universal bank (you find the right CDO).",
    example:
      "Deutsche Bank's CDO approves a pilot on regulatory document summarization (MiFID II disclosures). The use case: analysts currently spend 4 hours per report manually extracting obligations from 300-page regulatory filings. Claude reduces that to 20 minutes with source-cited outputs. The CISO needs Anthropic's security whitepaper, data processing agreement, and a pen-test report before legal will sign. The POC runs for 8 weeks on anonymized documents hosted on Anthropic's Frankfurt endpoint.",
    related: ["dach-market", "anthropic-verticals", "ai-safety-gtm", "claude-enterprise-positioning", "dach-insurance", "procurement-legal"],
    sampleQuestions: [
      {
        question:
          "How would you design a year-1 coverage model for DACH banking, and which sub-segment would you prioritize first?",
        answerThemes: [
          "Priority: private banks and mid-size universal banks — faster decisions than Sparkassen-Verbund, smaller compliance surface than Swiss private banks",
          "Swiss banks are high-value but require Swiss data residency — qualify early: does Anthropic have a Swiss endpoint?",
          "Sparkassen / Volksbanken: huge market, but fragmented — work through association IT subsidiaries (Finanzinformatik, Fiducia & GAD) not individual institutions",
          "Large universals (Deutsche Bank, Commerzbank): flagship logos, but 12–18 month cycles — invest if there's an executive sponsor, not on spec",
          "Year-1 beachhead: 2–3 private banks on regulatory summarization → build a replicable use case and a German-language case study",
          "ICP signal: has dedicated AI or innovation team, >€5B revenue, CDO or Chief Innovation Officer in post",
          "Don't confuse ICP density with deal velocity — choose accounts you can actually close in year 1",
        ],
      },
      {
        question:
          "A German bank's CISO is blocking the deal citing data residency and model explainability concerns. How do you unblock it?",
        answerThemes: [
          "CISO is doing their job — don't try to route around them, bring them in early",
          "Data residency: confirm which endpoint the data traverses and whether inference stays in EU; engage Anthropic solutions engineering for architecture documentation",
          "Model explainability: Constitutional AI reduces unexplained outputs; model cards document behavior; cite-with-sources mode lets analysts trace every output",
          "Provide concrete collateral: security whitepaper, data processing agreement, penetration test report, SOC 2 certification",
          "EU AI Act framing: Anthropic's safety posture is compliance-ready — most competitors can't say that",
          "Offer a technical session: Anthropic's security architect + the bank's CISO team — not a sales call",
          "Track the objection: if CISO raises new concerns each round, they may not be the blocker — find out if legal or the AI governance board is the real hold",
        ],
      },
    ],
  },
  {
    id: "dach-insurance",
    title: "DACH Insurance — Segment Profile & Sales Motion",
    category: "industry-segments",
    definition:
      "DACH insurance divides into four meaningful sub-segments: (1) Primary P&C insurers — Allianz, AXA Germany, Zurich Germany, Generali Germany — large volumes of claims documentation, high operational AI value; (2) Life and health insurers — Allianz Leben, R+V, Debeka — strict data sensitivity, slower to innovate, strong use case in policy administration; (3) Reinsurers — Munich Re, Hannover Re, Swiss Re — most tech-forward in the sector, active AI programs, often serve as AI innovation lab for the wider industry; (4) Specialist insurers and brokers — HDI, Talanx, ERGO, Ecclesia Group. Key industry characteristics: document-heavy by design (policies, claims, regulatory filings are all text); Solvency II requires documentation and auditability of risk models; German-language policy and claims documents are the operational reality; fraud detection, claims automation, and underwriting documentation are the top three AI use cases; BaFin oversees insurance AI just as it does banking AI; Munich Re and Swiss Re are specifically interesting as they run internal AI programs and advise clients on AI — they can become both customers and informal channel influencers.",
    whyItMatters:
      "Insurance has the best product-market fit of any DACH vertical for Claude's core strengths: (1) Claims documents are long, unstructured, and in German — exactly the use case where 200K context and multilingual capability win; (2) Underwriting decisions must be auditable — Constitutional AI and source-cited outputs directly address this; (3) Fraud detection in claims processing requires cross-referencing large document sets — long context handles this in one pass. Reinsurers specifically are worth targeting early: Munich Re and Swiss Re are globally respected, have AI budgets, move faster than primary insurers, and a win there creates a reference that resonates across the sector.",
    interviewAngle:
      "Could come up as: 'How does insurance differ from banking in your DACH GTM, and do you treat them together or separately?' The answer is: separate motions. Banking sells to CDOs on regulatory risk reduction; insurance sells to COOs and Claims Operations leaders on process efficiency. The use cases are different, the champions are different, and the regulatory framing is different (Solvency II vs. EU AI Act). Showing this nuance signals you've done the work.",
    example:
      "Munich Re's Head of Digital & Innovation wants to pilot AI-assisted underwriting documentation: engineers currently synthesize 200+ page technical risk assessments into structured summaries manually. Claude processes the full document in one pass, extracts risk factors by category, and outputs a structured report with source citations. Because Munich Re advises primary insurers on AI adoption, a successful pilot there creates both a customer and an informal reference for the entire DACH insurance market.",
    related: ["dach-market", "anthropic-verticals", "dach-banks", "ai-safety-gtm", "vertical-gtm"],
    sampleQuestions: [
      {
        question:
          "Why target reinsurers before primary insurers in DACH, and how do you build a play specifically for Munich Re or Swiss Re?",
        answerThemes: [
          "Reinsurers are structurally more tech-forward: they run analytics at scale, have internal AI teams, and move faster than primary insurers",
          "Munich Re and Swiss Re both have active AI and digitalization programs — not greenfield education required",
          "Network effect: both advise primary insurers on risk models and technology — a reference at Munich Re resonates sector-wide",
          "Entry point: Head of Digital Transformation, Chief Data Officer, or Head of Innovation — not traditional procurement",
          "Use case anchor: underwriting documentation synthesis, catastrophe model output summarization, treaty analysis",
          "POC design: take a real (anonymized) 200-page risk assessment or treaty document — show structured extraction with source citations in German",
          "Swiss Re is based in Zurich — requires Swiss data residency; confirm infrastructure before investing in qualification",
        ],
      },
      {
        question:
          "How do you handle a primary insurer (e.g., Allianz Germany) where the AI pilot champion is in Claims Operations, not IT or CDO?",
        answerThemes: [
          "Claims Operations champion is actually better than CDO-only for this use case — they own the pain and the success metric",
          "Risk: Claims Operations may not have budget authority — map to economic buyer (COO or CFO) in parallel",
          "Use case: claims document processing — triage incoming reports, extract structured fields, flag missing information",
          "German-language capability is essential — all claims documents are in German; test on real German text in POC",
          "Quantify the value: how many claims handlers? How long per document? What's the fully-loaded cost?",
          "Success metric to agree upfront: accuracy vs. manual review, time saved per claim, escalation rate",
          "IT sign-off path: even with a COO sponsor, IT architecture review and security approval are required — involve them early",
        ],
      },
    ],
  },
  {
    id: "dach-telcos",
    title: "DACH Telcos — Segment Profile & Sales Motion",
    category: "industry-segments",
    definition:
      "DACH telcos split into two categories with very different buying behaviors: (1) Infrastructure operators — Deutsche Telekom (Germany's largest company by revenue), Vodafone Germany, Telefónica Germany (O2), 1&1, A1 Telekom Austria, Sunrise/Salt (Switzerland) — large enterprise customers in their own right with active digital transformation programs; (2) Enterprise IT arms — T-Systems (Deutsche Telekom's enterprise IT subsidiary, 40K+ clients) — critically important as a potential channel partner, not just a direct customer. Key industry dynamics: revenue pressure from commoditization of connectivity is driving AI investment in two directions — operational efficiency (network ops, customer service automation) and enterprise services (T-Systems reselling AI platforms to its 40K+ clients). Telcos are significantly faster to evaluate and buy AI than banks — procurement cycles of 3–9 months are realistic. They also tend to have existing hyperscaler relationships (T-Systems has partnerships with both AWS and Google Cloud), which means Claude often enters as a competitive evaluation or a complementary AI layer rather than sole-sourced.",
    whyItMatters:
      "Telcos offer the best short-cycle enterprise deals in DACH — 3–9 months vs. 12–18 for banks — and T-Systems specifically is a potential force-multiplier: winning T-Systems as a partner channel could create indirect access to 40K+ German enterprise customers. The customer service automation use case is immediate and quantifiable (German call center operations are expensive), and telcos have large internal developer teams who can move from API usage to enterprise contract faster than other DACH verticals.",
    interviewAngle:
      "The T-Systems angle is a strong signal of DACH market knowledge — most people name Deutsche Telekom as a customer target without realizing T-Systems is the more important commercial conversation (partner vs. customer). If asked 'How would you approach the telco vertical in DACH?', showing the dual play — T-Systems as both customer and channel — demonstrates market nuance.",
    example:
      "Vodafone Germany's Head of AI wants to automate first-contact resolution for B2B customer service in German. They handle 80K tickets/month; 60% require a human agent to process. A Claude-based triage layer routes and pre-drafts responses for 40% of tickets, reducing average handle time by 4 minutes per ticket. The champion is in CX, but the economic buyer is the COO. The deal is won after an 8-week pilot on real (anonymized) ticket data.",
    related: ["dach-market", "anthropic-verticals", "partner-ecosystem", "dach-banks", "api-vs-enterprise-gtm"],
    sampleQuestions: [
      {
        question:
          "T-Systems is Deutsche Telekom's enterprise IT arm. How would you approach them — as a customer, as a channel partner, or both, and what's the sequencing?",
        answerThemes: [
          "Both — but sequence matters: close a direct T-Systems internal AI deal first, then leverage that relationship to open the partner conversation",
          "Internal use case: T-Systems' own knowledge management, technical documentation for 40K client engagements, internal IT service desk automation",
          "Channel play: T-Systems resells Microsoft, AWS, and Google cloud services to 40K+ enterprise clients — adding Claude to their AI portfolio reaches accounts Anthropic can't directly cover",
          "Partner economics: T-Systems would want a reseller margin and co-sell rights — requires a formal partnership agreement with Anthropic's BD team",
          "Risk: T-Systems has existing AI vendor relationships (Microsoft Copilot, Google AI); position Claude as complementary (better reasoning, safety-first) not replacement",
          "Entry: approach Head of AI/Innovation at T-Systems AG, not T-Systems' procurement — you want a technical and commercial champion, not a vendor manager",
          "Timeline: direct deal in year 1; partner agreement in year 2 after trust is established",
        ],
      },
      {
        question:
          "A DACH telco has an existing AWS Bedrock contract that already includes Claude API access. How do you convert API usage into an enterprise deal?",
        answerThemes: [
          "API usage on Bedrock is a warm signal — treat it as a qualified inbound, not a cold account",
          "Bedrock provides Claude as raw API; enterprise adds: dedicated support, custom rate limits, data processing agreement, SLA, no training on data",
          "Find the internal champion: who's using the API? What are they building? What's the scale ambition?",
          "Trigger for enterprise conversion: when they want to move to production with customer-facing workloads — that's when enterprise requirements kick in",
          "Economic buyer is typically CTO or Head of AI, not the developer team using the API",
          "Don't undermine the AWS relationship — frame as 'optimizing your AI procurement' rather than replacing Bedrock",
          "Unique enterprise value over Bedrock alone: priority engineering support, account team, roadmap access, custom security review",
        ],
      },
    ],
  },
  {
    id: "dach-mittelstand",
    title: "Mittelstand — Segment Profile & Sales Motion",
    category: "industry-segments",
    definition:
      "The German Mittelstand is a structural economic reality, not just a size category: family-owned or founder-led companies with €10M–€2B revenue, typically 50–5,000 employees, often world-leading in niche industrial or precision-manufacturing sectors. They are concentrated in Bayern, Baden-Württemberg, NRW, and Hessen. Key characteristics that shape AI sales: (1) CEO or owner-operator makes all significant technology decisions — there is no CDO, often no CTO; (2) SAP is the dominant ERP and the primary IT touchpoint — the SAP partner ecosystem is the most credible channel into Mittelstand; (3) Export-heavy, meaning English-language AI tools have a secondary use case alongside German-language primary operations; (4) Deep expertise in narrow technical domains (precision instruments, specialty chemicals, automotive parts) — they don't want general-purpose AI, they want something that understands their domain; (5) AI literacy is lower than at large corporates — the sales cycle begins with education, not qualification; (6) Loyalty is extremely high once won — Mittelstand companies rarely churn, and peer-to-peer references (Unternehmer talks to Unternehmer in the same industry) are the most powerful sales tool in existence.",
    whyItMatters:
      "Mittelstand is the hardest segment to cover directly but the largest addressable market in Germany by company count. A direct enterprise motion doesn't scale here — ACV per deal is too low (€20K–€150K range) and sales cycles are too long for the revenue. The right GTM model is indirect: build a channel through SAP partners, industry-specific SIs (system integrators), and regional business associations (IHK, Bitkom, industry Verbände). One well-packaged industry vertical solution sold through an established Mittelstand SAP partner can create more revenue than 20 direct deals. Understanding this channel model is what separates a generic enterprise sales background from DACH-specific GTM knowledge.",
    interviewAngle:
      "This is a test of whether you know that a US-style direct enterprise motion doesn't work for Mittelstand. The strong answer acknowledges the segment's importance to the German economy, explains why direct coverage is economically unviable at scale, and proposes a partner-led model with specific channel types (SAP partners, regional SIs, industry associations). Bonus points for naming the IHK, Bitkom, and VDMA as ecosystem entry points.",
    example:
      "A family-owned precision engineering firm in Baden-Württemberg (€200M revenue, 800 employees) produces technical documentation for 3,000 components annually — all in German, all manually written by engineers. The CEO wants to reduce the time engineers spend on documentation from 30% to 10% of their week. A Claude-based documentation assistant generates first drafts from engineering notes and CAD specifications. The deal is sourced through their existing SAP partner (who handles ERP and now offers AI as an add-on). ACV: €45K. Reference value: priceless — the CEO speaks at their regional VDMA chapter meeting.",
    related: ["dach-market", "anthropic-verticals", "partner-ecosystem", "territory-design", "vertical-gtm"],
    sampleQuestions: [
      {
        question:
          "Why doesn't a direct enterprise sales motion scale for Mittelstand, and what GTM model would you build instead?",
        answerThemes: [
          "Direct motion economics don't work: ACV too low (€20K–€150K), sales cycles too long (6–12 months), buyer education required — CAC exceeds deal value",
          "The right model: indirect / partner-led — build a channel through SAP partners, regional SIs, industry associations",
          "SAP partner channel: >1,000 SAP partners in DACH serve Mittelstand accounts; they have trust, relationships, and ERP integration access",
          "Industry associations: VDMA (mechanical engineering), ZVEI (electronics), IHK (chambers of commerce) have direct Mittelstand relationships and credibility",
          "Product implication: Mittelstand needs packaged, vertical-specific solutions — not raw API or generic enterprise positioning",
          "Go-to-market sequence: identify 2–3 high-density industries (precision engineering, specialty chemicals); build a packaged use case; find 1 SI partner with Mittelstand depth in that vertical",
          "Success metric for year 1: partner signed + pilot with 3 Mittelstand accounts through that partner, not direct AEs closing deals",
        ],
      },
      {
        question:
          "How do peer references and community selling work in Mittelstand, and how do you build a reference program that leverages this dynamic?",
        answerThemes: [
          "Mittelstand CEOs trust other Mittelstand CEOs — a peer reference from a company in the same industry and region is worth more than any case study",
          "Channels for peer influence: IHK events, VDMA chapter meetings, Bitkom forums, industry trade fairs (Hannover Messe, Bauma, ACHEMA)",
          "Reference program design: identify 3–5 early adopters who are respected in their communities; invest in their success disproportionately; make them willing to take a call or speak at an event",
          "Don't make them write case studies — offer to write it for them, just need their quote and permission",
          "Reference incentives in Germany: direct discounts are less effective than exclusive access (early feature previews, dedicated support) — Mittelstand CEOs don't want to look like they took money to endorse",
          "Speaking circuit: industry association speaking slots (VDMA, IHK keynote) position Anthropic and the reference customer simultaneously",
          "Measurement: track reference calls per quarter, not case study downloads — a warm call from a CEO to a prospect closes deals; a PDF doesn't",
        ],
      },
    ],
  },
];

export default concepts;
