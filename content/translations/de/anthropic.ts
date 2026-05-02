import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "claude-enterprise-positioning": {
    title: "Claudes Enterprise-Positionierung",
    definition:
      "Claude ist Anthropics KI-Assistent, verfügbar über API und als Claude.ai (Consumer- und Team-Tarifstufen). Im Enterprise-Bereich wird Claude auf drei Achsen positioniert: Leistungsfähigkeit (erstklassiges Reasoning, Coding, Analyse, Long-Context-Dokumentenverarbeitung), Sicherheit (Constitutional AI, reduzierte Halluzinationen, dokumentiertes Modellverhalten) und Vertrauen (Enterprise-Sicherheit, Datenschutzzusagen, kein Training auf Kundendaten). Der Enterprise-GTM-Pitch unterscheidet sich grundlegend vom API/Developer-Pitch — er richtet sich an geschäftliche Entscheidungsträger, nicht an Ingenieure.",
    whyItMatters:
      "Man muss verstehen, was man verkauft, bevor man Gebietsstrategien, Playbooks oder Vergütungspläne darauf aufbauen kann. Claudes Sicherheitspositionierung ist ein echter Differenzierungsfaktor in regulierten Branchen (Finanzdienstleistungen, Gesundheitswesen), wo KI-Risiken auf Vorstandsebene diskutiert werden. Zu verstehen, wo Claude gewinnt und wo nicht, prägt jede nachgelagerte GTM-Entscheidung.",
    interviewAngle:
      "Nahezu sicher zu erwarten: 'Worin unterscheidet sich Anthropics Enterprise-Positionierung von der von OpenAI?' oder 'Wie würden Sie Claude dem CDO einer deutschen Bank verkaufen?' Die Antwort sollte mit Geschäftsergebnissen beginnen (Risikoreduktion, Compliance-Sicherheit, vertrauenswürdiger KI-Partner) — nicht mit Modell-Benchmarks.",
    example:
      "Ein deutsches Versicherungsunternehmen, das KI für die Schadenbearbeitung evaluiert, interessiert sich weniger für Claudes MMLU-Score und mehr für: Können wir seine Entscheidungen auditieren? Halluziniert es Vertragsnummern? Wohin gehen unsere Daten? Das ist Claudes Terrain.",
    sampleQuestions: [
      {
        question:
          "Wie würden Sie Claudes Enterprise-Wertversprechen dem CDO einer deutschen Bank pitchen, der OpenAI bereits evaluiert hat?",
        answerThemes: [
          "Mit Geschäftsrisikoreduktion beginnen, nicht mit Modell-Benchmarks",
          "Sicherheit und Auditierbarkeit adressieren direkt die Haftungsbedenken des CDO",
          "Kein Training auf Kundendaten — entscheidend für die Vertraulichkeit von Bankdaten",
          "Long-Context (200K Tokens) zur Verarbeitung vollständiger Kreditakten in einem Durchgang",
          "Constitutional AI erzeugt vorhersehbarere, nachvollziehbarere Outputs",
          "OpenAIs Marktstärke anerkennen — die Bewertungskriterien neu definieren",
          "Einen gezielten POC zu einem realen Anwendungsfall anbieten (z. B. Zusammenfassung von Regulierungsberichten)",
        ],
      },
      {
        question:
          "Was sind die drei Achsen von Claudes Enterprise-Positionierung, und welche resoniert am stärksten bei Käufern aus regulierten Branchen?",
        answerThemes: [
          "Drei Achsen: Leistungsfähigkeit, Sicherheit, Vertrauen",
          "Sicherheit resoniert am stärksten: Constitutional AI, dokumentiertes Verhalten, reduzierte Halluzinationen",
          "Vertrauens-Ebene: kein Training auf Kundendaten, Enterprise-Sicherheit, Datenresidenz",
          "Leistungsfähigkeit ist weiterhin relevant, sollte aber an Ergebnissen festgemacht werden — 'Fassen Sie Ihren 500-seitigen Vertrag in 30 Sekunden zusammen'",
          "Regulierte Käufer (Finanzdienstleistungen, Gesundheitswesen) haben Compliance-Teams, die KI-Anbieter genehmigen müssen",
          "Sicherheitsdokumentation ist echtes Beschaffungsmaterial — kein reines Verkaufsargument",
        ],
      },
    ],
  },
  "ai-safety-gtm": {
    title: "KI-Sicherheit als GTM-Vorteil",
    definition:
      "Anthropics zentraler Forschungsschwerpunkt ist die Entwicklung sicherer, interpretierbarer KI-Systeme. Constitutional AI (eine Technik zur Ausrichtung des KI-Verhaltens an Prinzipien ohne menschliche Kennzeichnung jedes Beispiels) und Forschung zur KI-Interpretierbarkeit sind Anthropics technische Differenzierungsmerkmale. Im Enterprise-Vertrieb übersetzen sich diese in: reduziertes Risiko schädlicher Outputs, vorhersehbareres und auditierbares Modellverhalten sowie eine verteidigbare Position für CISOs und Compliance-Teams. Sicherheit ist nicht nur ein Produktmerkmal — es ist Anthropics Markenversprechen und existenzieller Daseinszweck.",
    whyItMatters:
      "Sicherheit ist der wichtigste GTM-Differenzierungsfaktor von Anthropic im Enterprise-Bereich, insbesondere in der DACH-Region, wo der EU AI Act regulatorische Dringlichkeit schafft. Käufer aus dem Finanzdienstleistungssektor, dem Gesundheitswesen und dem öffentlichen Sektor tragen echte Haftungsrisiken, wenn KI-Systeme schädliche oder nicht erklärbare Entscheidungen treffen. Anthropics Sicherheitsforschung adressiert dieses Risiko direkt. Die Fähigkeit, Sicherheitsforschung in geschäftliche Risikoreduktion zu übersetzen — in verständlicher Sprache — ist eine Kernkompetenz für diese Rolle.",
    interviewAngle:
      "Könnte aufkommen als: 'Wie denken Sie über KI-Sicherheit, und wie passt Anthropics Position dazu zu Ihnen?' oder 'Wie wird Sicherheit zu einem Verkaufsargument, anstatt ein Gesprächsstopper zu werden?' Zeigen Sie, dass Sie Sicherheit mit Geschäftsrisiken verknüpfen können, nicht nur mit Ethik. Der CISO sorgt sich um Haftung; der CEO um Markenrisiken; der CDO um Modellzuverlässigkeit.",
    sampleQuestions: [
      {
        question:
          "Wie würden Sie Anthropics KI-Sicherheitsforschung in ein überzeugendes Argument für einen CISO übersetzen, der Enterprise-KI-Anbieter evaluiert?",
        answerThemes: [
          "CISOs sorgen sich um Haftung, Auditierbarkeit und vorhersehbares Verhalten — nicht um ethische Abstraktionen",
          "Constitutional AI = Modell trainiert, Prinzipien zu folgen → weniger unerwartete schädliche Outputs",
          "Dokumentiertes Modellverhalten macht Sicherheitsüberprüfungen handhabbar im Vergleich zu Black-Box-Wettbewerbern",
          "Kein Training auf Kundendaten eliminiert ein wesentliches Datenverletzungsrisiko",
          "EU AI Act-Konformität: Anthropics Sicherheitshaltung deckt sich direkt mit den Anforderungen für Hochrisiko-KI",
          "Konkret: 'Hier ist unser Security-Whitepaper und unsere Datenverarbeitungsvereinbarung' — nicht theoretisch",
          "Anbieten, Anthropics Sicherheitsteam in ein technisches Deep-Dive mit den Sicherheitsarchitekten einzubeziehen",
        ],
      },
      {
        question:
          "Wie schafft der EU AI Act GTM-Dringlichkeit für Anthropic in DACH, und wie würden Sie ihn in einem Verkaufsgespräch einsetzen?",
        answerThemes: [
          "EU AI Act tritt 2026 in Kraft — Hochrisiko-KI-Anwendungen (Finanzdienstleistungen, Gesundheitswesen) unterliegen der Pflichtkonformität",
          "Schafft Dringlichkeit: Unternehmen müssen nachweisen, dass KI-Systeme sicher und auditierbar sind",
          "Anthropics Safety-First-Positionierung ist ein Compliance-Aktivposten, nicht nur ein Differenzierungsmerkmal",
          "Anthropic als 'compliance-bereite' KI-Plattform gegenüber schnell bewegenden Wettbewerbern positionieren",
          "Bei Beschaffungsteams und rechtlichen/Compliance-Stakeholdern einsetzen, nicht nur bei IT",
          "Übertreibungen vermeiden — wissen, welche Anwendungsfälle tatsächlich als Hochrisiko eingestuft werden",
          "Mit Rechtsabteilungsressourcen oder einer Compliance-FAQ kombinieren, um die Beschaffung zu erleichtern",
        ],
      },
    ],
  },
  "anthropic-competitive": {
    title: "Anthropic vs. OpenAI vs. Google vs. AWS",
    definition:
      "Die vier primären Wettbewerber im Enterprise-KI-Markt: (1) OpenAI / Microsoft Azure OpenAI — stärkste Marke, GPT-4/4o, tief integriert in Microsoft 365 und Azure; (2) Google / Gemini — Vertex AI, Google Workspace-Integration, stark bei Unternehmen, die bereits GCP nutzen; (3) AWS Bedrock — Multi-Modell-Plattform (Claude inklusive), gewinnt durch Infrastruktur-Incumbency; (4) Anthropic direkt — Positionierung auf Sicherheit, längeren Context, besseres Reasoning bei dokumentenlastigen Aufgaben. Anthropics Schwäche: kleineres Vertriebsteam, geringere Markenbekanntheit in Deutschland, weniger vorgefertigte Integrationen.",
    whyItMatters:
      "Man wird mit diesen Anbietern in jedem Enterprise-Deal konkurrieren. Battle Cards, Wettbewerbsstrategien und Preisdiskussionen hängen davon ab, zu wissen, wo Claude wirklich gewinnt und wo nicht. In der DACH-Region bedeutet Microsofts tiefe Durchdringung von Enterprise-Accounts (Office 365 ist überall), dass Azure OpenAI in nahezu jeder Evaluation vertreten sein wird. Eine spezifische Antwort ist erforderlich, warum Claude Azure OpenAI schlägt oder ergänzt.",
    interviewAngle:
      "Könnte direkt aufkommen: 'Wie würden Sie Anthropic von OpenAI in einem deutschen Bank-Pitch differenzieren?' oder indirekt in einem Szenario: 'OpenAI unterbietet den Preis in zwei Ihrer Top-Accounts.' Starke Antworten greifen den Wettbewerber nicht an — sie definieren die Bewertungskriterien auf Dimensionen neu, auf denen Claude gewinnt.",
    example:
      "Claudes Long-Context-Fenster (200K Tokens) und dokumentierte Sicherheitseigenschaften sind konkrete Vorteile gegenüber GPT-4o für die Analyse von Finanzdokumenten. Ein Pitch, der mit 'Wir können Ihre gesamte Kreditakte in einem Durchgang mit auditierbaren Outputs verarbeiten' beginnt, schlägt einen Feature-für-Feature-Vergleich.",
    sampleQuestions: [
      {
        question:
          "Ein großer deutscher Hersteller ist tief im Microsoft-Ökosystem verankert und evaluiert Azure OpenAI. Wie gewinnen Sie — oder koexistieren Sie?",
        answerThemes: [
          "Die Microsoft-Beziehung nicht bekämpfen — als komplementär, nicht konkurrierend rahmen",
          "Azure OpenAI hat Claude auch auf Bedrock verfügbar — das Gespräch um das beste Modell für jede Aufgabe öffnen",
          "Claudes Vorteile: längerer Context, stärkeres Reasoning bei unstrukturierten Dokumenten, bessere Sicherheitshaltung",
          "Für Fertigungsanwendungsfälle (technische Dokumente, Qualitätsverfahren, Supply Chain) ist Long-Context entscheidend",
          "Den Champion außerhalb der IT finden — oft ein COO oder Betriebsleiter mit einem spezifischen Schmerzpunkt",
          "Ein Side-by-Side-POC zu einer realen Dokumentenanalyseaufgabe schlägt eine Präsentation",
          "Wenn der gesamte Account nicht zu gewinnen ist, einen Brückenkopf-Anwendungsfall gewinnen und ausbauen",
        ],
      },
      {
        question:
          "OpenAI senkt aggressiv die Preise in zwei Ihrer Top-DACH-Accounts. Wie reagieren Sie?",
        answerThemes: [
          "Nicht sofort im Preis mitgehen — diagnostizieren, ob es ein Preis- oder ein Wertproblem ist",
          "Den Executive Sponsor einbeziehen: 'Was treibt die Neubewertung — Kostendruck oder neue Anforderungen?'",
          "Bewertungskriterien neu definieren: Gesamtbetriebskosten umfassen fehlerhafte Outputs, Compliance-Nacharbeit, Vendor-Lock-in",
          "Claudes Sicherheit und Auditierbarkeit haben quantifizierbaren Risikowert — insbesondere bei regulierten Accounts",
          "Bei strategischem Account zu Anthropic-Führung eskalieren — Executive-to-Executive-Engagement",
          "Das Angebot des Wettbewerbers verstehen: Feature-für-Feature oder Bundle-Preisgestaltung?",
          "Wenn der Preis das eigentliche Problem ist, eine mehrjährige Verpflichtung oder erweiterten Umfang gegen bessere Konditionen prüfen",
        ],
      },
    ],
  },
  "api-vs-enterprise-gtm": {
    title: "API-First vs. Enterprise GTM",
    definition:
      "Anthropic betreibt gleichzeitig zwei unterschiedliche GTM-Bewegungen: (1) API/Developer — Entwickler integrieren Claude direkt, zahlen pro Token, Self-Service-Onboarding, Bottom-up-Adoption; (2) Enterprise Direct — große Organisationen kaufen verwalteten Zugang, SLAs, Datenschutzgarantien, dedizierten Support und oft einen ausgehandelten Vertrag. Diese beiden Bewegungen erfordern unterschiedliche AE-Profile, unterschiedliche Preisgestaltung, unterschiedliches Enablement und unterschiedliche Stage-Definitionen. Die Komplexität besteht darin, dass ein developer-adoptierter Account zu einem Enterprise-Account werden kann — und die Verwaltung dieses Übergangs ist eine wichtige GTM-Herausforderung.",
    whyItMatters:
      "DACH Enterprise GTM ist die vertriebsgetriebene Bewegung, aber viele Ziel-Accounts werden bereits Entwickler haben, die die API nutzen. Zu verstehen, wie man von der Developer-Adoption zur Enterprise-Verpflichtung überbrückt — und wie man Channel-Konflikte vermeidet — ist ein nuanciertes GTM-Design-Problem, das spezifisch für Anthropic ist. Ein Modell muss entwickelt werden, wann ein API-Account zu einer sales-qualifizierten Enterprise-Opportunity wird.",
    interviewAngle:
      "Könnte aufkommen als: 'Wie denken Sie über Anthropics dualen GTM-Ansatz?' oder 'Das Datenwissenschaftsteam einer großen Bank nutzt bereits die API — wie konvertieren Sie das zu einem Enterprise-Deal?' Zeigen Sie, dass Sie verstehen, dass die Developer-Bewegung warme Leads schafft, nicht nur potenzielle Channel-Konflikte.",
    sampleQuestions: [
      {
        question:
          "Das Data-Science-Team einer großen DACH-Bank nutzt die Claude API seit 3 Monaten für ein internes Projekt. Wie konvertieren Sie das zu einem Enterprise-Deal?",
        answerThemes: [
          "Developer-Nutzung ist ein warmes Signal — als SQL-Inbound behandeln, nicht als Kaltakquise",
          "Den internen Champion identifizieren: Wer zahlt die API-Rechnung? Wer hat das Pilotprojekt genehmigt?",
          "Den Anwendungsfall verstehen: nur intern oder kundenseitig? Skalierungsambitionen?",
          "Auslöser: wenn Entwickler in die Produktion wollen, greifen Enterprise-Anforderungen (SLA, DPA, Sicherheitsüberprüfung)",
          "Enterprise-Wert einführen: Datenschutzgarantie, dedizierter Support, individuelle Ratenlimits, kein Training auf Daten",
          "Den wirtschaftlichen Entscheider finden — oft IT-Führung oder CDO, nicht das Datenteam",
          "Einen Übergangspfad gestalten: 'Wir können Ihre bestehende Nutzung ohne Unterbrechung in eine Enterprise-Vereinbarung migrieren'",
        ],
      },
      {
        question:
          "Wie würden Sie ein Lead-Routing-Modell entwerfen, das API-Self-Service-Accounts von Enterprise-Opportunities in DACH unterscheidet?",
        answerThemes: [
          "Firmografische Auslöser: Unternehmensgröße >1.000 Mitarbeiter, Umsatz >500 Mio. € → an Enterprise-AE weiterleiten",
          "Nutzungssignale: Ausgaben >X €/Monat für API oder spezifische Anwendungsfallkategorien (kundenseitig, regulierte Daten)",
          "Absichtssignale: Kontakt von einer Nicht-Engineering-Persona (IT-Direktor, CDO, Beschaffung) auf dem API-Account",
          "SLA- oder Datenschutzanfrage → automatisches Enterprise-Qualifizierungs-Flag",
          "Gemeinsame CRM-Ansicht aufbauen: API-Accounts für Enterprise-AEs bei benannten Accounts sichtbar",
          "Klare Übergabe-SLA definieren: AE muss innerhalb von 48h nach Auslöser aktiv werden",
          "Über-Routing vermeiden: nicht jeder API-Nutzer ist Enterprise-bereit — eine Qualifizierungscheckliste erstellen",
        ],
      },
    ],
  },
  "dach-market": {
    title: "DACH-Enterprise-Marktcharakteristika",
    definition:
      "DACH (Deutschland, Österreich, Schweiz) weist besondere Merkmale auf, die das Enterprise-KI-GTM beeinflussen: (1) Datensouveränitätsbedenken — DSGVO plus lokale Regulierungen machen 'Wohin gehen meine Daten?' zu einer Beschaffungsanforderung, nicht nur einer Präferenz; (2) Formelle Beschaffungsprozesse — länger und risikoaverser als in den USA; (3) Mittelstand-Dominanz — Deutschlands Mittelstand (mittelständische Industrieunternehmen) ist das wirtschaftliche Rückgrat, aber Enterprise-KI-Adoption konzentriert sich auf Finanzdienstleistungen, Telekommunikation und große Technologieunternehmen; (4) EU AI Act — tritt 2026 in Kraft und schafft Compliance-Dringlichkeit für Hochrisiko-KI-Anwendungsfälle; (5) Sprache — deutschsprachiges Enablement und lokale Fallstudien sind relevant.",
    whyItMatters:
      "Die GTM-Bewegung wird spezifisch für DACH aufgebaut. Das Verständnis dieser strukturellen Realitäten prägt jede Entscheidung: wo zuerst zu investieren ist, wie der Verkaufszyklus aussieht, was im Sicherheits-Review-Paket enthalten ist und wie Vertikale priorisiert werden. DACH wie eine kleinere Version des US-Markts zu behandeln ist ein häufiger Fehler, der zu langen Zyklen und niedrigen Win-Rates führt.",
    interviewAngle:
      "Sehr wahrscheinlich in einer rollenspezifischen Frage: 'Was unterscheidet den Verkauf von Enterprise-Software in DACH von den USA?' oder 'Wie beeinflusst der EU AI Act Ihre GTM-Strategie?' Echtes Marktwissen demonstrieren, nicht nur allgemeine Enterprise-Vertriebsprinzipien mit einem DACH-Label.",
    example:
      "Schweizer Banken verlangen, dass KI-Training und -Inferenz innerhalb der Schweizer Grenzen stattfinden. Das filtert sofort zu Anbietern mit Schweizer Rechenzentren — etwas, das man vor der Account-Qualifizierung wissen muss, nicht nach der NDA-Unterzeichnung.",
    sampleQuestions: [
      {
        question:
          "Was sind die drei wichtigsten Unterschiede zwischen Enterprise-KI-Vertrieb in DACH und den USA, und wie prägen sie Ihren GTM-Ansatz?",
        answerThemes: [
          "1. Datensouveränität: DSGVO + EU AI Act machen Datenresidenz zur Beschaffungsanforderung — nicht optional",
          "2. Beschaffungskultur: länger, formeller, risikoaverser — Zyklen von 6–12 Monaten und mehr rechtliche Stakeholder sind zu erwarten",
          "3. Vertrauen-zuerst-Kaufkultur: deutsche Unternehmen kaufen von Anbietern mit lokaler Präsenz, Referenzen und Kontinuität",
          "Implikation: Datenresidenz-Kompatibilität vor der Deal-Investition prüfen",
          "Implikation: frühzeitig in Executive-Beziehungen investieren — Entscheidungen werden von Komitees getroffen, nicht nur von Champions",
          "Implikation: lokale Fallstudien und deutschsprachige Materialien entwickeln — ausschließlich US-Referenzen kommen nicht an",
          "Mittelstand ist volumenmäßig groß, aber schwerer zu skalieren — Enterprise-Ressourcen zuerst auf Finanzdienstleistungen, Telekommunikation und große Technologieunternehmen konzentrieren",
        ],
      },
      {
        question:
          "Wie verändert der EU AI Act Ihre Jahr-1-GTM-Prioritäten für DACH, und wie würden Sie ihn in einem Verkaufsgespräch einsetzen?",
        answerThemes: [
          "EU AI Act klassifiziert Hochrisiko-KI (Finanzdienstleistungen, Gesundheitswesen, HR-Entscheidungen) — diese Käufer unterliegen der Pflichtkonformität",
          "Dringlichkeit schaffen: 'Sie brauchen einen auditierbaren, konformen KI-Partner, bevor die Durchsetzung beginnt'",
          "Anthropics Sicherheitshaltung ist ein Compliance-Aktivposten — Constitutional AI, dokumentiertes Modellverhalten",
          "Hochrisiko-KI-Anwendungsfälle im ICP priorisieren: Kreditscoring, Versicherungszeichnung, klinische Entscheidungsunterstützung",
          "Compliance-Kollateral erstellen: Datenverarbeitungsvereinbarung, Model Cards, Security-Whitepaper",
          "Mit Rechts- und Compliance-Beratungsunternehmen partnern, die bereits mit diesen Käufern arbeiten",
          "Übertreibungen vermeiden: wissen, welche Anthropic-Anwendungsfälle unter dem Gesetz als Hochrisiko vs. eingeschränktes Risiko eingestuft werden",
        ],
      },
    ],
  },
  "anthropic-verticals": {
    title: "Anthropics Schlüsselvertikale in DACH",
    definition:
      "Anthropics primäre Enterprise-Vertikale in DACH sind: Finanzdienstleistungen (Banken, Versicherungen, Asset Management) — höchste regulatorische Kontrolle, höchster ACV, längste Zyklen; Gesundheitswesen — starke Anwendungsfälle in der klinischen Dokumentation und Forschung, strenge Datenresidenz-Anforderungen; Technologie (Softwareunternehmen, IT-Dienstleister) — kürzere Zyklen, technischere Käufer, oft Developer-first-Einstieg; Fertigung / Mittelstand — Anwendungsfälle in der industriellen Dokumentation, Qualitätskontrolle, Supply Chain; Einzelhandel — Kundenservice-Automatisierung, Produktdatenmanagement, frühphasige KI-Adoption. Finanzdienstleistungen und Gesundheitswesen sind angesichts der Deal-Größe und des Differenzierungs-Fits die Prioritätsvertikale.",
    whyItMatters:
      "Die Stellenbeschreibung listet diese Vertikale explizit auf und erfordert eine vertikalspezifische GTM-Strategie. Zu wissen, welche Vertikale bereit sind (wo der Schmerz explizit ist, der Käufer identifiziert und die Compliance-Hürden handhabbar sind) versus welche noch entstehen, bildet die Grundlage für Gebiets-Priorisierung und Ressourcenzuweisung.",
    interviewAngle:
      "Wird wahrscheinlich aufkommen als: 'Wie würden Sie Vertikale in DACH für Jahr 1 priorisieren?' Starke Antworten nutzen eine Bewertungsmatrix: Marktgröße × ICP-Dichte × regulatorischer Rückenwind vs. Gegenwind × Deal-Geschwindigkeit × Anthropics Wettbewerbsposition in diesem Vertikalsegment. Nicht einfach Finanzdienstleistungen wählen, weil es offensichtlich ist — die Begründung zeigen.",
    example:
      "Eine deutsche Privatbank, die KI auf Anthropic für die Zusammenfassung von Regulierungsberichten einsetzt, ist eine 10/10-Fallstudie: hoher ACV, replizierbarer Anwendungsfall, echter Claude-Vorteil (Long-Context-Dokumentenanalyse + sichere Outputs). Diesen Account zu finden und in ein Vertikal-Play zu verpacken ist die Jahr-1-Priorität.",
    sampleQuestions: [
      {
        question:
          "Wie würden Sie DACH-Vertikale für Jahr 1 bei Anthropic priorisieren, und welchen Rahmen würden Sie für diese Entscheidung verwenden?",
        answerThemes: [
          "Rahmen: Jedes Vertikalsegment auf 4 Achsen bewerten — Deal-Größe/ACV, ICP-Dichte, regulatorischer Rückenwind, Anthropics Wettbewerbsvorteil",
          "Jahr-1-Priorität: Finanzdienstleistungen — höchster ACV, stärkster Claude-Differenzierungsfaktor (Sicherheit + Long-Context), klare Anwendungsfälle",
          "Jahr-1-Sekundär: Technologieunternehmen — kürzere Zyklen, technische Champions, Developer-first-Einstiegspunkt",
          "Jahr-2-Aufbau: Gesundheitswesen — starker Anwendungsfall-Fit, aber längste Beschaffung und strengste Datenresidenz-Anforderungen",
          "Beobachtungsliste: Fertigung (Mittelstand) — großer Markt, aber KI-Reife niedriger, längerer Bildungszyklus",
          "Nicht zu breit aufstellen — zwei gut ausgestattete Vertikale schlagen fünf unterfinanzierte",
          "Mit Daten validieren: Wo sind aktuelle API-Nutzer konzentriert? Das ist der warme ICP",
        ],
      },
      {
        question:
          "Entwickeln Sie ein Sales Play für Finanzdienstleistungen in DACH. Was sind ICP, Einstiegspunkt, Anwendungsfall und Erfolgsbedingung?",
        answerThemes: [
          "ICP: Privatbanken, Versicherungsunternehmen, Asset Manager — Umsatz >5 Mrd. €, dediziertes Innovations- oder KI-Team",
          "Einstiegspunkt: CDO, Head of AI/Innovation oder Chief Risk Officer — nicht IT-Beschaffung",
          "Anwendungsfall: regulatorische Dokumentenverarbeitung (MiFID, Basel IV-Berichte), Vertragsanalyse, Research-Zusammenfassung",
          "Warum Claude hier gewinnt: 200K Context für lange Dokumente, Sicherheitsdokumentation für Compliance-Teams, kein Training auf Daten",
          "Discovery-Fragen: 'Wie sieht Ihr aktueller Prozess für Regulierungsbericht X aus? Was passiert, wenn er fehlerhaft ist?'",
          "POC-Design: ein echtes 200-seitiges Regulierungsdokument nehmen und strukturierten Output mit zitierten Quellen zeigen",
          "Erfolgsbedingung: identifizierter wirtschaftlicher Entscheider, definierte Erfolgskriterien im POC, klarer Weg zur Compliance-Team-Zustimmung",
        ],
      },
    ],
  },
};

export default t;
