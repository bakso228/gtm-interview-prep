import type { QuizQuestion } from '@/content/types';

const questions: QuizQuestion[] = [
  {
    id: 'qq-anthropic-01',
    category: 'anthropic',
    conceptId: 'claude-enterprise-positioning',
    question: 'What are the three axes on which Claude is positioned for enterprise buyers?',
    options: [
      'Speed, cost-efficiency, and ecosystem integrations',
      'Capability, safety, and trust',
      'Accuracy, scalability, and developer experience',
      'Model size, context window, and multilingual support',
    ],
    correctIndex: 1,
    explanation:
      'Claude\'s enterprise positioning rests on capability (reasoning, coding, long-context analysis), safety (Constitutional AI, reduced hallucinations, documented model behavior), and trust (enterprise security, data privacy commitments, no training on customer data). This framework targets business decision-makers, not engineers.',
    difficulty: 'easy',
    de: {
      question: 'Auf welchen drei Achsen wird Claude für Enterprise-Käufer positioniert?',
      options: [
        'Geschwindigkeit, Kosteneffizienz und Ökosystem-Integrationen',
        'Leistungsfähigkeit, Sicherheit und Vertrauen',
        'Genauigkeit, Skalierbarkeit und Entwicklererfahrung',
        'Modellgröße, Kontextfenster und mehrsprachiger Support',
      ],
      explanation:
        'Claudes Enterprise-Positionierung basiert auf Leistungsfähigkeit (Reasoning, Coding, Long-Context-Analyse), Sicherheit (Constitutional AI, reduzierte Halluzinationen, dokumentiertes Modellverhalten) und Vertrauen (Enterprise-Sicherheit, Datenschutzzusagen, kein Training auf Kundendaten). Dieses Framework richtet sich an geschäftliche Entscheidungsträger, nicht an Ingenieure.',
    },
  },
  {
    id: 'qq-anthropic-02',
    category: 'anthropic',
    conceptId: 'claude-enterprise-positioning',
    question:
      'When pitching Claude to a regulated-industry buyer who has already evaluated OpenAI, what should your opening argument lead with?',
    options: [
      'Claude\'s superior MMLU benchmark scores compared to GPT-4o',
      'The lower per-token pricing on the Claude API',
      'Business risk reduction, compliance confidence, and the no-training-on-customer-data guarantee',
      'The breadth of pre-built integrations available on the Anthropic platform',
    ],
    correctIndex: 2,
    explanation:
      'The enterprise GTM pitch for regulated industries must lead with business outcomes — risk reduction, compliance confidence, and data privacy. Model benchmarks are secondary. A German bank\'s CDO cares whether decisions are auditable, whether data stays confidential, and whether the vendor is a trusted partner — not about MMLU scores.',
    hint: 'Think about what a CDO at a German bank worries about when approving an AI vendor.',
    difficulty: 'medium',
    de: {
      question:
        'Wenn Sie Claude einem Käufer aus einer regulierten Branche pitchen, der OpenAI bereits evaluiert hat, womit sollte Ihr Eröffnungsargument beginnen?',
      options: [
        'Claudes überlegene MMLU-Benchmark-Scores im Vergleich zu GPT-4o',
        'Der niedrigere Token-Preis auf der Claude API',
        'Geschäftsrisikoreduktion, Compliance-Sicherheit und die Garantie, keine Kundendaten für das Training zu verwenden',
        'Die Breite der verfügbaren vorgefertigten Integrationen auf der Anthropic-Plattform',
      ],
      explanation:
        'Der Enterprise-GTM-Pitch für regulierte Branchen muss mit Geschäftsergebnissen beginnen — Risikoreduktion, Compliance-Sicherheit und Datenschutz. Modell-Benchmarks sind zweitrangig. Der CDO einer deutschen Bank interessiert sich dafür, ob Entscheidungen auditierbar sind, ob Daten vertraulich bleiben und ob der Anbieter ein vertrauenswürdiger Partner ist — nicht für MMLU-Scores.',
      hint: 'Denken Sie daran, worüber sich ein CDO einer deutschen Bank Sorgen macht, wenn er einen KI-Anbieter genehmigt.',
    },
  },
  {
    id: 'qq-anthropic-03',
    category: 'anthropic',
    conceptId: 'ai-safety-gtm',
    question: 'What is Constitutional AI, as used in Anthropic\'s GTM messaging?',
    options: [
      'A regulatory compliance framework that maps Claude outputs to EU AI Act requirements',
      'A technique for aligning AI behavior to principles without human labeling of every training example',
      'A model architecture that uses a constitutional layer to filter outputs before delivery',
      'An Anthropic certification program that validates enterprise security controls',
    ],
    correctIndex: 1,
    explanation:
      'Constitutional AI is Anthropic\'s technique for training a model to follow a set of principles — reducing harmful outputs — without requiring humans to hand-label every example. In GTM conversations, this translates to more predictable, auditable model behavior, which is the concrete value proposition for CISOs and compliance teams.',
    difficulty: 'easy',
    de: {
      question: 'Was ist Constitutional AI im Sinne von Anthropics GTM-Messaging?',
      options: [
        'Ein regulatorisches Compliance-Framework, das Claude-Outputs auf EU-AI-Act-Anforderungen abbildet',
        'Eine Technik zur Ausrichtung des KI-Verhaltens an Prinzipien ohne menschliche Kennzeichnung jedes Trainingsbeispiels',
        'Eine Modellarchitektur, die eine konstitutionelle Schicht verwendet, um Outputs vor der Auslieferung zu filtern',
        'Ein Anthropic-Zertifizierungsprogramm, das Enterprise-Sicherheitskontrollen validiert',
      ],
      explanation:
        'Constitutional AI ist Anthropics Technik, ein Modell darauf zu trainieren, einem Satz von Prinzipien zu folgen — um schädliche Outputs zu reduzieren — ohne dass Menschen jedes Beispiel manuell kennzeichnen müssen. In GTM-Gesprächen übersetzt sich das in vorhersehbareres, auditierbares Modellverhalten — das ist die konkrete Value Proposition für CISOs und Compliance-Teams.',
    },
  },
  {
    id: 'qq-anthropic-04',
    category: 'anthropic',
    conceptId: 'ai-safety-gtm',
    question:
      'A CISO evaluating enterprise AI vendors asks why AI safety matters beyond ethics. What is the most effective response?',
    options: [
      'Explain that Anthropic publishes safety research papers that demonstrate academic credibility',
      'Connect safety properties directly to liability reduction: auditable behavior, no harmful outputs, and documented model conduct map to security review requirements',
      'Point out that Constitutional AI makes Claude inherently more ethical than competing models',
      'Emphasize that safety features are included at no extra cost in the enterprise tier',
    ],
    correctIndex: 1,
    explanation:
      'CISOs care about liability, auditability, and predictable behavior — not ethics abstractions. The right framing connects safety properties to concrete security outcomes: Constitutional AI produces fewer unexpected outputs, documented model behavior makes security review tractable, and no training on customer data removes a major breach risk vector. Safety becomes a procurement asset, not a philosophy lecture.',
    hint: 'CISOs speak the language of liability and security review, not ethics.',
    difficulty: 'medium',
    de: {
      question:
        'Ein CISO, der Enterprise-KI-Anbieter evaluiert, fragt, warum KI-Sicherheit über Ethik hinaus relevant ist. Was ist die wirksamste Antwort?',
      options: [
        'Erklären, dass Anthropic Sicherheitsforschungsarbeiten veröffentlicht, die akademische Glaubwürdigkeit belegen',
        'Sicherheitseigenschaften direkt mit Haftungsreduktion verbinden: auditierbares Verhalten, keine schädlichen Outputs und dokumentiertes Modellverhalten entsprechen den Anforderungen der Sicherheitsüberprüfung',
        'Darauf hinweisen, dass Constitutional AI Claude inhärent ethischer macht als konkurrierende Modelle',
        'Betonen, dass Sicherheitsfunktionen ohne Zusatzkosten im Enterprise-Tarif enthalten sind',
      ],
      explanation:
        'CISOs sorgen sich um Haftung, Auditierbarkeit und vorhersehbares Verhalten — nicht um ethische Abstraktionen. Die richtige Rahmung verbindet Sicherheitseigenschaften mit konkreten Sicherheitsergebnissen: Constitutional AI erzeugt weniger unerwartete Outputs, dokumentiertes Modellverhalten macht Sicherheitsüberprüfungen handhabbar, und kein Training auf Kundendaten eliminiert ein wesentliches Datenverletzungsrisiko. Sicherheit wird zu einem Beschaffungsaktivposten, nicht zu einem Philosophievortrag.',
      hint: 'CISOs sprechen die Sprache von Haftung und Sicherheitsüberprüfung, nicht von Ethik.',
    },
  },
  {
    id: 'qq-anthropic-05',
    category: 'anthropic',
    conceptId: 'anthropic-competitive',
    question:
      'Which competitor is most likely to appear in nearly every DACH enterprise AI evaluation, and why?',
    options: [
      'Google Gemini, because Google Workspace is the dominant productivity suite in DACH',
      'AWS Bedrock, because most DACH enterprises run their infrastructure on AWS',
      'Microsoft Azure OpenAI, because Office 365 has deep penetration across DACH enterprise accounts',
      'Mistral AI, because it is a European provider with strong GDPR positioning',
    ],
    correctIndex: 2,
    explanation:
      'Microsoft\'s deep penetration of DACH enterprise accounts through Office 365 and Azure means Azure OpenAI will appear in virtually every enterprise AI evaluation. This is the single most important competitive dynamic to prepare for. The right response is not to attack the Microsoft relationship but to reframe evaluation criteria on dimensions where Claude genuinely wins.',
    difficulty: 'easy',
    de: {
      question:
        'Welcher Wettbewerber wird in nahezu jeder DACH-Enterprise-KI-Evaluation auftauchen, und warum?',
      options: [
        'Google Gemini, weil Google Workspace die dominierende Produktivitätssuite in DACH ist',
        'AWS Bedrock, weil die meisten DACH-Unternehmen ihre Infrastruktur auf AWS betreiben',
        'Microsoft Azure OpenAI, weil Office 365 tief in DACH-Enterprise-Accounts verankert ist',
        'Mistral AI, weil es ein europäischer Anbieter mit starker DSGVO-Positionierung ist',
      ],
      explanation:
        'Microsofts tiefe Verwurzelung in DACH-Enterprise-Accounts durch Office 365 und Azure bedeutet, dass Azure OpenAI in nahezu jeder Enterprise-KI-Evaluation vertreten sein wird. Dies ist die wichtigste Wettbewerbsdynamik, auf die man sich vorbereiten muss. Die richtige Reaktion ist nicht, die Microsoft-Beziehung anzugreifen, sondern die Bewertungskriterien auf Dimensionen neu zu definieren, auf denen Claude wirklich gewinnt.',
    },
  },
  {
    id: 'qq-anthropic-06',
    category: 'anthropic',
    conceptId: 'anthropic-competitive',
    question:
      'OpenAI is cutting prices aggressively in two of your top DACH accounts. What is the correct first response?',
    options: [
      'Immediately match the price reduction to protect the accounts before they switch',
      'Escalate to Anthropic leadership to approve emergency discounting',
      'Diagnose whether the re-evaluation is driven by price pressure or a genuine value gap before responding',
      'Position Claude as a premium product and decline to engage on pricing at all',
    ],
    correctIndex: 2,
    explanation:
      'Before reacting on price, you must diagnose whether this is actually a price problem or a perceived value problem. Engage your executive sponsor to understand what is driving the re-evaluation. If the issue is value, matching price solves nothing and erodes margin. Total cost of ownership — including compliance rework from poor outputs and vendor lock-in risk — often makes Claude the more economical choice when framed correctly.',
    hint: 'Resist the instinct to immediately lower price. Diagnose first.',
    difficulty: 'medium',
    de: {
      question:
        'OpenAI senkt die Preise aggressiv in zwei Ihrer Top-DACH-Accounts. Was ist die richtige erste Reaktion?',
      options: [
        'Die Preissenkung sofort nachziehen, um die Accounts zu sichern, bevor sie wechseln',
        'Zu Anthropic-Führung eskalieren, um Notfallrabatte zu genehmigen',
        'Diagnostizieren, ob die Neubewertung durch Kostendruck oder eine echte Wertlücke angetrieben wird, bevor man reagiert',
        'Claude als Premium-Produkt positionieren und sich generell nicht auf Preisdiskussionen einlassen',
      ],
      explanation:
        'Bevor man auf den Preis reagiert, muss man diagnostizieren, ob es sich wirklich um ein Preisproblem oder ein wahrgenommenes Wertproblem handelt. Den Executive Sponsor einbeziehen, um zu verstehen, was die Neubewertung antreibt. Wenn das Problem der Wert ist, löst ein Preisrückgang nichts und schmälert die Marge. Die Gesamtbetriebskosten — einschließlich Compliance-Nacharbeit durch schlechte Outputs und Vendor-Lock-in-Risiko — machen Claude bei richtiger Darstellung oft zur wirtschaftlicheren Wahl.',
      hint: 'Widerstehen Sie dem Impuls, sofort den Preis zu senken. Zuerst diagnostizieren.',
    },
  },
  {
    id: 'qq-anthropic-07',
    category: 'anthropic',
    conceptId: 'api-vs-enterprise-gtm',
    question:
      'What is the key trigger that signals an API self-serve account should be escalated to an enterprise AE?',
    options: [
      'The account has been using the API for more than 6 months without contacting sales',
      'A non-engineering persona — such as an IT director, CDO, or procurement contact — reaches out on the API account',
      'The account\'s monthly API spend exceeds a threshold and the model tier is upgraded',
      'The developer submits a support ticket requesting a custom rate limit',
    ],
    correctIndex: 1,
    explanation:
      'The clearest enterprise qualification trigger is when a non-engineering persona engages on the account. This signals that internal stakeholders are preparing to scale, comply with security requirements, or run a formal vendor evaluation — all enterprise-grade activities. Other usage signals (spend, SLA inquiry) also matter, but persona shift is the strongest indicator of enterprise intent.',
    hint: 'Think about which persona change most strongly signals organizational-level buying intent.',
    difficulty: 'medium',
    de: {
      question:
        'Was ist das wichtigste Signal, das anzeigt, dass ein API-Self-Service-Account zu einem Enterprise-AE eskaliert werden sollte?',
      options: [
        'Der Account nutzt die API seit mehr als 6 Monaten, ohne den Vertrieb zu kontaktieren',
        'Eine Nicht-Engineering-Persona — z. B. ein IT-Direktor, CDO oder Beschaffungskontakt — meldet sich über den API-Account',
        'Die monatlichen API-Ausgaben des Accounts überschreiten einen Schwellenwert und das Modell-Tier wird hochgestuft',
        'Der Entwickler reicht ein Support-Ticket ein und bittet um ein individuelles Ratenlimit',
      ],
      explanation:
        'Der deutlichste Enterprise-Qualifizierungsauslöser ist, wenn eine Nicht-Engineering-Persona auf dem Account aktiv wird. Dies signalisiert, dass interne Stakeholder sich darauf vorbereiten, zu skalieren, Sicherheitsanforderungen zu erfüllen oder eine formelle Anbieter-Evaluation durchzuführen — allesamt Enterprise-Aktivitäten. Andere Nutzungssignale (Ausgaben, SLA-Anfragen) sind ebenfalls relevant, aber der Persona-Wechsel ist der stärkste Indikator für Enterprise-Kaufabsicht.',
      hint: 'Überlegen Sie, welcher Persona-Wechsel am stärksten auf Kaufabsicht auf Organisationsebene hindeutet.',
    },
  },
  {
    id: 'qq-anthropic-08',
    category: 'anthropic',
    conceptId: 'api-vs-enterprise-gtm',
    question:
      'A large DACH bank\'s data science team has been using the Claude API for 3 months. When is the right moment to introduce enterprise contract terms?',
    options: [
      'Immediately upon detecting API usage from a named enterprise account',
      'After 12 months, once the team has proven internal value and built organizational support',
      'When the team wants to move a use case from internal pilot to production, triggering SLA, security review, and data privacy requirements',
      'Only when the API bill exceeds the minimum enterprise contract threshold',
    ],
    correctIndex: 2,
    explanation:
      'The natural enterprise conversion trigger is the move from pilot to production. Production deployment requires enterprise-grade guarantees the API does not offer: SLA, formal data processing agreement, dedicated support, and security review clearance. This is the moment to introduce enterprise terms — not too early (before value is proven) and not too late (after the team has already sought alternative enterprise solutions).',
    difficulty: 'medium',
    de: {
      question:
        'Das Data-Science-Team einer großen DACH-Bank nutzt die Claude API seit 3 Monaten. Wann ist der richtige Moment, Enterprise-Vertragsbedingungen einzuführen?',
      options: [
        'Sofort nach Erkennung der API-Nutzung von einem benannten Enterprise-Account',
        'Nach 12 Monaten, sobald das Team internen Wert bewiesen und organisatorische Unterstützung aufgebaut hat',
        'Wenn das Team einen Anwendungsfall vom internen Pilot in die Produktion überführen möchte und dabei SLA-, Sicherheitsüberprüfungs- und Datenschutzanforderungen ausgelöst werden',
        'Nur wenn die API-Rechnung den Mindest-Enterprise-Vertragsschwellenwert überschreitet',
      ],
      explanation:
        'Der natürliche Enterprise-Conversion-Auslöser ist der Übergang vom Pilot in die Produktion. Die Produktionsbereitstellung erfordert Enterprise-Garantien, die die API nicht bietet: SLA, formelle Datenverarbeitungsvereinbarung, dedizierten Support und Sicherheitsfreigabe. Dies ist der richtige Moment für Enterprise-Konditionen — nicht zu früh (bevor der Wert bewiesen ist) und nicht zu spät (nachdem das Team bereits alternative Enterprise-Lösungen gesucht hat).',
    },
  },
  {
    id: 'qq-anthropic-09',
    category: 'anthropic',
    conceptId: 'dach-market',
    question:
      'Why is "data sovereignty" a procurement requirement — not just a preference — for many DACH enterprise buyers?',
    options: [
      'German enterprises prefer domestic technology vendors as a matter of national industrial policy',
      'GDPR and local regulations legally require enterprises to know and control where their data is processed, making data residency a mandatory vendor qualification criteria',
      'Data sovereignty concerns are primarily driven by internal IT policies that block cloud services by default',
      'The EU AI Act mandates that all AI inference must happen within EU borders for enterprise use cases',
    ],
    correctIndex: 1,
    explanation:
      'GDPR and country-level data protection laws mean that DACH enterprises must be able to document where their data is processed and enforce contractual controls over it. For AI workloads, this means data residency is a procurement filter — not a nice-to-have. Swiss banks in particular may require that both training and inference happen within Swiss borders. This must be qualified early in the sales cycle.',
    hint: 'GDPR creates legal obligations, not just preferences.',
    difficulty: 'easy',
    de: {
      question:
        'Warum ist "Datensouveränität" für viele DACH-Enterprise-Käufer eine Beschaffungsanforderung — und nicht nur eine Präferenz?',
      options: [
        'Deutsche Unternehmen bevorzugen aus nationaler Industriepolitik inländische Technologieanbieter',
        'DSGVO und lokale Datenschutzgesetze verpflichten Unternehmen rechtlich, den Verarbeitungsort ihrer Daten zu kennen und zu kontrollieren, was Datenresidenz zu einem Pflichtkriterium bei der Anbieterauswahl macht',
        'Datensouveränitätsbedenken werden hauptsächlich durch interne IT-Richtlinien getrieben, die Cloud-Dienste standardmäßig blockieren',
        'Der EU AI Act schreibt vor, dass alle KI-Inferenzen für Enterprise-Anwendungsfälle innerhalb der EU-Grenzen stattfinden müssen',
      ],
      explanation:
        'DSGVO und nationale Datenschutzgesetze bedeuten, dass DACH-Unternehmen dokumentieren müssen, wo ihre Daten verarbeitet werden, und vertragliche Kontrollen darüber durchsetzen können müssen. Für KI-Workloads bedeutet dies, dass Datenresidenz ein Beschaffungsfilter ist — kein optionales Merkmal. Schweizer Banken können insbesondere verlangen, dass sowohl Training als auch Inferenz innerhalb der Schweizer Grenzen stattfinden. Dies muss früh im Verkaufszyklus qualifiziert werden.',
    },
  },
  {
    id: 'qq-anthropic-10',
    category: 'anthropic',
    conceptId: 'dach-market',
    question:
      'The EU AI Act is entering into force in 2026. Which of the following correctly describes how this creates GTM urgency for Anthropic in DACH?',
    options: [
      'All AI applications in DACH must be certified by a European authority before commercial use, driving immediate demand for compliant vendors',
      'High-risk AI use cases in regulated industries face mandatory compliance requirements, creating urgency for enterprises to select auditable, safety-documented AI partners before enforcement begins',
      'The EU AI Act bans the use of US-headquartered AI providers for government and financial sector use cases, giving European providers a legal advantage',
      'Enterprises must switch from US-based AI providers to EU-based alternatives within 12 months of the Act entering into force',
    ],
    correctIndex: 1,
    explanation:
      'The EU AI Act classifies AI uses in sectors like financial services, healthcare, and HR decisions as high-risk, subject to mandatory compliance obligations. This creates concrete urgency: enterprises deploying AI in these use cases must demonstrate they are using auditable, safety-documented systems. Anthropic\'s Constitutional AI and documented model behavior directly address these requirements, making the Act a sales accelerant when used correctly with compliance stakeholders.',
    hint: 'Focus on what "high-risk AI" classification means for regulated-industry buyers.',
    difficulty: 'hard',
    de: {
      question:
        'Der EU AI Act tritt 2026 in Kraft. Welche der folgenden Aussagen beschreibt korrekt, wie dies GTM-Dringlichkeit für Anthropic in DACH schafft?',
      options: [
        'Alle KI-Anwendungen in DACH müssen vor der kommerziellen Nutzung von einer europäischen Behörde zertifiziert werden, was sofortige Nachfrage nach konformen Anbietern erzeugt',
        'Hochrisiko-KI-Anwendungsfälle in regulierten Branchen unterliegen Pflichtkonformitätsanforderungen, was Dringlichkeit für Unternehmen schafft, vor Beginn der Durchsetzung auditierbare, sicherheitsdokumentierte KI-Partner zu wählen',
        'Der EU AI Act verbietet den Einsatz US-amerikanischer KI-Anbieter für Regierungs- und Finanzsektor-Anwendungsfälle und verschafft europäischen Anbietern einen rechtlichen Vorteil',
        'Unternehmen müssen innerhalb von 12 Monaten nach Inkrafttreten des Gesetzes von US-amerikanischen KI-Anbietern zu EU-basierten Alternativen wechseln',
      ],
      explanation:
        'Der EU AI Act klassifiziert KI-Anwendungen in Bereichen wie Finanzdienstleistungen, Gesundheitswesen und HR-Entscheidungen als Hochrisiko und unterwirft sie Pflichtkonformitätsanforderungen. Dies schafft konkrete Dringlichkeit: Unternehmen, die KI in diesen Anwendungsfällen einsetzen, müssen nachweisen, dass sie auditierbare, sicherheitsdokumentierte Systeme verwenden. Anthropics Constitutional AI und dokumentiertes Modellverhalten adressieren diese Anforderungen direkt und machen den Act zu einem Verkaufsbeschleuniger, wenn er korrekt mit Compliance-Stakeholdern eingesetzt wird.',
      hint: 'Konzentrieren Sie sich darauf, was die "Hochrisiko-KI"-Klassifizierung für Käufer aus regulierten Branchen bedeutet.',
    },
  },
  {
    id: 'qq-anthropic-11',
    category: 'anthropic',
    conceptId: 'anthropic-verticals',
    question:
      'Using a scoring framework, which DACH vertical should typically be the year-1 enterprise priority for Anthropic, and what combination of factors justifies this?',
    options: [
      'Manufacturing / Mittelstand — largest market by number of companies, and strong AI curiosity among operations teams',
      'Retail — fastest sales cycles, high volume of potential accounts, and clear ROI on customer service automation',
      'Financial Services — highest ACV, strongest Claude differentiator on safety and long-context, explicit regulatory urgency from the EU AI Act',
      'Healthcare — highest strategic value because AI in clinical settings is Anthropic\'s most publicized research focus',
    ],
    correctIndex: 2,
    explanation:
      'Financial Services scores highest on the four key axes: deal size / ACV (largest enterprise contracts in DACH), ICP density (banks, insurers, asset managers with identified AI budgets), regulatory tailwind (EU AI Act creates compliance urgency), and Anthropic\'s competitive advantage (Constitutional AI and 200K-token long-context directly address FS use cases like regulatory document processing and contract analysis). Healthcare is strong on use case fit but scores lower on deal velocity due to the strictest data residency requirements.',
    hint: 'Score each vertical on deal size, ICP density, regulatory tailwind, and Claude\'s competitive advantage.',
    difficulty: 'hard',
    de: {
      question:
        'Welche DACH-Vertikale sollte mit einem Scoring-Framework typischerweise die Jahr-1-Enterprise-Priorität für Anthropic sein, und welche Faktorkombination rechtfertigt dies?',
      options: [
        'Fertigung / Mittelstand — größter Markt nach Unternehmensanzahl und starke KI-Neugier in Betriebsteams',
        'Einzelhandel — schnellste Verkaufszyklen, hohes Volumen potenzieller Accounts und klarer ROI bei der Kundenservice-Automatisierung',
        'Finanzdienstleistungen — höchster ACV, stärkster Claude-Differenzierungsfaktor bei Sicherheit und Long-Context, explizite regulatorische Dringlichkeit durch den EU AI Act',
        'Gesundheitswesen — höchster strategischer Wert, weil KI im klinischen Bereich Anthropics meistpublizierter Forschungsschwerpunkt ist',
      ],
      explanation:
        'Finanzdienstleistungen erzielt auf den vier Schlüsselachsen die höchste Punktzahl: Deal-Größe/ACV (größte Enterprise-Verträge in DACH), ICP-Dichte (Banken, Versicherungen, Asset Manager mit identifizierten KI-Budgets), regulatorischer Rückenwind (EU AI Act schafft Compliance-Dringlichkeit) und Anthropics Wettbewerbsvorteil (Constitutional AI und 200K-Token-Long-Context adressieren direkt FS-Anwendungsfälle wie regulatorische Dokumentenverarbeitung und Vertragsanalyse). Das Gesundheitswesen ist beim Anwendungsfall-Fit stark, erzielt aber wegen der strengsten Datenresidenz-Anforderungen bei der Deal-Geschwindigkeit eine niedrigere Punktzahl.',
      hint: 'Bewerten Sie jede Vertikale nach Deal-Größe, ICP-Dichte, regulatorischem Rückenwind und Claudes Wettbewerbsvorteil.',
    },
  },
  {
    id: 'qq-anthropic-12',
    category: 'anthropic',
    conceptId: 'anthropic-verticals',
    question:
      'In the DACH financial services vertical, which entry point persona is most appropriate for a first meeting — and why is IT procurement the wrong choice?',
    options: [
      'Head of IT Infrastructure — they control the vendor shortlist and budget approval for all technology purchases',
      'CDO, Head of AI/Innovation, or Chief Risk Officer — they own the business problem and have both budget influence and regulatory accountability',
      'Chief Financial Officer — they approve all enterprise software contracts and understand the compliance cost implications',
      'IT Procurement — they run the formal RFP process and can fast-track approvals for strategic vendors',
    ],
    correctIndex: 1,
    explanation:
      'In DACH financial services, the right entry point is a business-aligned persona who owns the problem: CDO, Head of AI/Innovation, or Chief Risk Officer. These personas understand the use case (regulatory reporting, contract analysis), have budget authority or direct influence, and face the regulatory accountability that makes Anthropic\'s safety positioning directly relevant. IT procurement is the wrong first contact because they are process administrators — they evaluate against a defined spec, not define the spec. Entering through procurement means losing the narrative before the evaluation has begun.',
    hint: 'Who owns the business problem versus who manages the vendor process?',
    difficulty: 'hard',
    de: {
      question:
        'In der DACH-Finanzdienstleistungsvertikale — welche Einstiegspersona ist für ein erstes Meeting am besten geeignet, und warum ist IT-Beschaffung die falsche Wahl?',
      options: [
        'Head of IT Infrastructure — er kontrolliert die Anbieter-Shortlist und die Budgetgenehmigung für alle Technologieeinkäufe',
        'CDO, Head of AI/Innovation oder Chief Risk Officer — sie besitzen das Geschäftsproblem und haben sowohl Budgeteinfluss als auch regulatorische Verantwortung',
        'Chief Financial Officer — er genehmigt alle Enterprise-Softwareverträge und versteht die Compliance-Kostenimplikationen',
        'IT-Beschaffung — sie führt den formellen RFP-Prozess durch und kann Genehmigungen für strategische Anbieter beschleunigen',
      ],
      explanation:
        'In DACH-Finanzdienstleistungen ist der richtige Einstiegspunkt eine geschäftsorientierte Persona, die das Problem besitzt: CDO, Head of AI/Innovation oder Chief Risk Officer. Diese Personas verstehen den Anwendungsfall (regulatorisches Reporting, Vertragsanalyse), haben Budgetautorität oder direkten Einfluss und tragen die regulatorische Verantwortung, die Anthropics Sicherheitspositionierung direkt relevant macht. IT-Beschaffung ist der falsche erste Kontakt, weil sie Prozessadministratoren sind — sie evaluieren gegen eine definierte Spezifikation, definieren sie aber nicht. Der Einstieg über die Beschaffung bedeutet, die Erzählung zu verlieren, bevor die Evaluation begonnen hat.',
      hint: 'Wer besitzt das Geschäftsproblem, und wer verwaltet den Anbieter-Prozess?',
    },
  },
];

export default questions;
