import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "gtm-motion-types": {
    title: "GTM-Motion-Typen",
    definition:
      "Eine GTM-Motion ist der primäre Mechanismus, mit dem ein Unternehmen Kunden gewinnt und ausbaut. Die drei Hauptarchetypen sind: Product-led Growth (PLG), bei dem das Produkt selbst Adoption und Conversion treibt; Sales-led Growth (SLG), bei dem ein direktes Vertriebsteam den gesamten Zyklus von der Akquise bis zum Abschluss verantwortet; und Hybrid, das Vertrieb auf produktgetriebenes Interesse aufbaut. Die meisten Enterprise-Softwareunternehmen betreiben eine Form von Hybrid.",
    whyItMatters:
      "Anthropic bedient sowohl API-Entwickler (eher PLG) als auch Enterprise-Kunden (vertriebsgesteuert). In dieser Rolle musst du Sales-Motions gestalten, Playbooks aufbauen und eine Gebietsstrategie entwickeln, die berücksichtigt, wo Deals entstehen und wie sie voranschreiten. Die richtige Motion zu wählen bestimmt die AE-Produktivität und die Pipeline-Qualität.",
    interviewAngle:
      "Erwarte Fragen wie: 'Wie beeinflusst Anthropics API-first-Ursprung das Design der DACH-Enterprise-Motion?' oder 'Erkläre, wie du unterscheidest, welche Accounts einen vollständigen Verkaufszyklus vs. einen leichteren Ansatz benötigen.' Formuliere deine Antwort rund um die Passung zwischen Produktreife, Deal-Komplexität und Käuferprofil.",
    example:
      "Slack startete vollständig PLG (kostenlose Self-Service-Nutzung, virale Team-Adoption) und baute erst dann ein Enterprise-Vertriebsteam auf, als die Deals komplexer wurden. Anthropic befindet sich mit Claude an einem ähnlichen Wendepunkt.",
    sampleQuestions: [
      {
        question:
          "Anthropic startete als API-first-Unternehmen. Wie beeinflusst dieser Ursprung das Design der DACH-Enterprise-Vertriebsmotion?",
        answerThemes: [
          "API-Nutzung ist ein warmes Signal, kein Verkauf — Accounts, die die API bereits nutzen, als Tier-1-Ziele identifizieren",
          "Developer-getriebene Nutzung und Enterprise-Beschaffung sind unterschiedliche Käufer: CDO/CTO vs. Engineering-Team",
          "Eine Brücken-Motion aufbauen: wenn API-Ausgaben oder -Nutzung einen Schwellenwert erreichen, AE-Outreach auslösen",
          "Die Vertriebsmotion muss Developer-Goodwill ergänzen, nicht überschreiben — aggressives Enterprise-Vorgehen kann organische Adoption zerstören",
          "Messaging wechselt von 'hier ist die API' zu 'hier ist, was eure Organisation im großen Maßstab und sicher aufbauen kann'",
          "Ablauf: Developer-POC → interner Champion → Executive-Sponsorship → Enterprise-Vertrag",
        ],
      },
      {
        question:
          "Das Data-Team einer großen deutschen Bank nutzt die Claude API bereits auf Kreditkartenbasis. Ab wann wird daraus eine vertriebsqualifizierte Enterprise-Opportunity, und was tust du?",
        answerThemes: [
          "Qualifikationsauslöser: konstantes Ausgabenwachstum, mehrere Teams nutzen die API, oder ein geschäftskritischer Anwendungsfall entsteht",
          "Erster Schritt: den internen Champion identifizieren — wer treibt die API-Adoption intern?",
          "Aufwärts mappen: wer verantwortet die Enterprise-KI-Strategie? Das ist der Economic Buyer",
          "Das Enterprise-Gespräch als Risikoreduktion + Skalierung framen, nicht nur als 'mehr kaufen'",
          "Einen AE nicht in einen organischen Adoptionszyklus eindringen lassen — den Outreach zeitlich sorgfältig planen",
          "Ziel des ersten Enterprise-Meetings: Umfang der internen KI-Initiative verstehen, kein Produkt pitchen",
        ],
      },
    ],
  },
  "icp": {
    title: "Ideal Customer Profile (ICP)",
    definition:
      "Ein ICP ist eine präzise Beschreibung des Unternehmens — nicht der Person — das am wahrscheinlichsten ein hochwertiger, langfristiger Kunde wird. Er wird durch firmografische Merkmale (Größe, Branche, Geografie, Tech-Stack, Reife) in Kombination mit Verhaltenssignalen (Budgetzyklus, aktueller Schmerzpunkt, Initiative-Sponsoring) definiert. Ein klar definierter ICP fokussiert den Vertriebsaufwand und verkürzt den Verkaufszyklus, indem schlecht passende Deals früh herausgefiltert werden.",
    whyItMatters:
      "Gebietsdesign, Account-Segmentierung und Quotensetzung hängen alle davon ab, den ICP zu kennen. Im DACH-Raum musst du definieren, welche Firmografien (z. B. FS-Unternehmen mit >1 Mrd. € Umsatz und aktiven digitalen Transformationsprogrammen) realistische frühe Anwender von Enterprise Claude sind — und welche noch Jahre von der Beschaffungsreife entfernt sind.",
    interviewAngle:
      "Wahrscheinlich als: 'Wie würdest du Anthropics ICP im DACH-Segment definieren?' oder 'Wie segmentierst du Accounts, um die AE-Zeit zu priorisieren?' Begründe deine Antwort in Deal-Daten, Win/Loss-Mustern und dem spezifischen Compliance- und Datensouveränitätskontext der deutschsprachigen Märkte.",
    sampleQuestions: [
      {
        question:
          "Wie würdest du Anthropics ICP für das DACH-Enterprise-Segment definieren? Erkläre die Kriterien, die du verwenden würdest.",
        answerThemes: [
          "Firmografische Basis: >1.000 Mitarbeiter, >500 Mio. € Umsatz, Hauptsitz oder bedeutende Aktivitäten im DACH-Raum",
          "Branchenfit: Financial Services, Gesundheitswesen, Technologie — Branchen mit dokumentenintensiven Workflows und regulatorischem Bedarf an Nachvollziehbarkeit",
          "Reifeindikator: aktives KI/ML-Team oder CDO vorhanden — Nachzügler-Organisationen werden keinen Abschluss machen",
          "Tech-Stack-Signal: Cloud-native (AWS/GCP/Azure), bestehende API-Integrationen — Reibung bei der Einführung ist geringer",
          "Budget-Signal: bestehende Anbieterausgaben für Analytics, Daten oder Cloud >1 Mio. €/Jahr weist auf Beschaffungsreife hin",
          "Verhaltenssignal: Teilnahme an KI-Konferenzen, Veröffentlichung von KI-Governance-Richtlinien oder Stellenausschreibungen für KI-Rollen",
          "Negative Signale: keine Datenstrategie, schwerpunktmäßig On-Premise-Infrastruktur, kein KI-Mandat der Unternehmensführung",
        ],
      },
      {
        question:
          "AEs verlieren Zeit mit Deals, die immer wieder beim Security-Review oder beim Rechtsteam scheitern. Welches ICP-Signal fehlt möglicherweise, und wie behebst du das?",
        answerThemes: [
          "Scheitern in späten Phasen bedeutet oft, dass der Account den firmografischen ICP erfüllte, aber den Bereitschafts-ICP nicht",
          "Beschaffungsbereitschaft als Filter hinzufügen: hat dieses Unternehmen in den letzten 2 Jahren Enterprise-SaaS eingekauft?",
          "Cloud- und Data-Governance-Reife prüfen: ohne etablierten DPA-Prozess wird ein Claude-Deal auf unbestimmte Zeit blockiert",
          "Ein 'KI-Governance-Signal' in den ICP aufnehmen — Unternehmen mit veröffentlichten KI-Richtlinien sind beschaffungsbereit",
          "Speziell für DACH-FS: BaFin-regulierte Einheiten benötigen von Anfang an ein Modelldokumentationspaket — darauf qualifizieren, bevor man Ressourcen investiert",
          "Lösung: ICP-Definition aktualisieren, AEs zu neuen Qualifikationskriterien schulen, Checklisten-Element in Phase 1 aufnehmen",
        ],
      },
    ],
  },
  "market-segmentation": {
    title: "Marktsegmentierung",
    definition:
      "Segmentierung ist der Prozess, einen Total Addressable Market in unterschiedliche Gruppen aufzuteilen, die im Go-to-Market unterschiedlich behandelt werden können. Häufige Dimensionen: Unternehmensgröße (SMB / Commercial / Enterprise / Strategic), Geografie, Branche, Käufer-Persona oder Produktnutzungsmuster. Jedes Segment hat typischerweise seine eigene Motion, sein eigenes Quotenmodell, sein eigenes AE-Profil und eigene Erfolgsmetriken.",
    whyItMatters:
      "Diese Rolle erfordert ausdrücklich das Design von Gebiets- und Account-Segmentierungsstrategien für DACH. Enterprise-Segmente erfordern längere Zyklen, höheren ACV und eine komplexere Qualifikation als Commercial-Segmente. Beide in einer einzigen Motion zu mischen, führt für beide zu mittelmäßigen Ergebnissen. Eine gute Segmentierung ist die Voraussetzung für alles andere.",
    interviewAngle:
      "Könnte als: 'Wie würdest du den DACH-Markt für Anthropic segmentieren?' oder 'Welche Kriterien bestimmen, ob ein Account Commercial oder Enterprise ist?' aufkommen. Deine Antwort sollte zeigen, dass du von Prinzipien (Mitarbeiterzahl, Beschaffungskomplexität, Deal-Größe) zu einem konkreten Ansatz gelangen kannst, den AEs im Feld anwenden können.",
    example:
      "Bei Smile Identity segmentierten wir nach Geografie × Branche (FS vs. Tech) × Deal-Größe. Deals unter 50.000 $ erhielten eine leichtere Motion; Deals über 200.000 $ erhielten executive-gesponserte Zyklen mit dediziertem CS von Anfang an.",
    sampleQuestions: [
      {
        question:
          "Wie würdest du den DACH-Markt für Anthropics Enterprise-Motion segmentieren — und welche Motion erhält jedes Segment?",
        answerThemes: [
          "Strategic (Top 20–30 Accounts): namentliche Liste, vollständiger Enterprise-Zyklus, Executive-Sponsoring, dedizierter AE",
          "Enterprise (1.000–10.000 Mitarbeiter, >500 Mio. € Umsatz): gebietsbasierter AE, vollständige MEDDPICC-Qualifikation, 6–9 Monate Zyklus",
          "Commercial (250–1.000 Mitarbeiter): leichtere Motion, kürzerer Zyklus, höheres Volumen, weniger Individualisierung",
          "Developer/API (jede Größe, technischer Käufer): anfänglich kein AE — produktgesteuert, schwellenwertausgelöster Outreach",
          "Wichtige DACH-Besonderheit: Mittelstand (mittelständische Industrieunternehmen) ist ein eigenständiges Segment, das andere Messaging erfordert als deutsche Konzerne",
          "Segmentierung muss in Salesforce hinterlegt sein — AE-Gebietszuweisungen müssen dem Modell entsprechen",
        ],
      },
      {
        question:
          "Ein AE möchte Enterprise- und Commercial-Deals gleichzeitig in seinem Gebiet betreuen. Was empfiehlst du?",
        answerThemes: [
          "Die Motions sind auf Einzel-AE-Ebene nicht kompatibel — Zykluslänge, Deal-Komplexität und Aktivitätsrhythmus sind zu unterschiedlich",
          "Einen AE zu beidem zu zwingen erzeugt Mittelmäßigkeit in beiden — Enterprise leidet unter mangelndem Fokus, Commercial wird überingenieurmäßig behandelt",
          "Lösung: Gebiet klar aufteilen, AE einer Motion zuweisen, die andere an eine andere Ressource oder Motion weiterleiten",
          "Wenn das Team zu klein zum Aufteilen ist: Enterprise priorisieren (höherer ACV, bessere Unit Economics) und Commercial nur als Inbound behandeln",
          "Klare Engagement-Regeln in Salesforce festlegen, damit es keine Unklarheit darüber gibt, welche Accounts welche Motion erhalten",
          "Im nächsten Planungszyklus überprüfen: wenn die Commercial-Opportunity signifikant ist, den Headcount-Fall aufbauen",
        ],
      },
    ],
  },
  "sales-plays": {
    title: "Sales Plays",
    definition:
      "Ein Sales Play ist eine wiederholbare, vorgeschriebene Abfolge von Maßnahmen, die ein AE unternimmt, um eine spezifische Kundensituation anzugehen — typischerweise einen Schmerzpunkt, einen Anwendungsfall oder ein Wettbewerbsszenario. Ein Play umfasst: den Auslöser (warum jetzt), die Zielpersona, den Talk Track, unterstützende Inhalte, den Call-to-Action und die Erfolgsmetrik. Plays sind enger gefasst als Playbooks (die die gesamte Motion abdecken) — ein Playbook kann ein Dutzend Plays enthalten.",
    whyItMatters:
      "Die Stellenbeschreibung fordert, branchenspezifische Sales Plays aufzubauen. Ein gut gestaltetes Play verkürzt die Einarbeitungszeit, ermöglicht konsistentes Messaging im Team und erleichtert das Performance-Coaching. Ohne Plays improvisieren AEs — und die Ergebnisvarianz ist hoch. In einem neuen Markt wie dem DACH-Enterprise-KI-Bereich müssen diese wahrscheinlich von Grund auf neu aufgebaut werden.",
    interviewAngle:
      "Zu erwarten: 'Erkläre, wie du ein Sales Play für Financial Services designen würdest.' Starke Antworten definieren den Auslöser (z. B. Bank startet eine GenAI-Initiative), die Persona (CTO oder CDO), den Hook (Sicherheit und regulatorische Compliance), den CTA (POC mit einem Risk-Scoring-Anwendungsfall) und die Metrik (POC-zu-Abschluss-Rate).",
    example:
      "Bei Meta haben wir ein 'Digital Lending'-Play für APAC-Telkos entwickelt — mit spezifischem Auslöser (Launch einer Kredit-App), Persona (CDO), Hook (Meta-Nutzerdaten für Kreditscoring) und Metrik (Kosten pro genehmigtem Kredit). Die Conversion war 2x so hoch wie beim generischen Pitch.",
    sampleQuestions: [
      {
        question:
          "Designe ein Sales Play für Anthropic, das auf Financial-Services-Unternehmen in DACH abzielt, die aktiv eine GenAI-Initiative starten.",
        answerThemes: [
          "Auslöser: Unternehmen kündigt eine KI-Strategie an, stellt einen Chief AI Officer ein oder veröffentlicht eine KI-Governance-Richtlinie",
          "Zielpersona: CDO oder Chief Risk Officer — sie verantworten die regulatorische und datenbezogene Risikokomponente",
          "Hook: 'Wie stellt ihr sicher, dass eure KI-Ausgaben nachvollziehbar, erklärbar und konform mit BaFin- und EU-KI-Gesetz-Anforderungen sind?'",
          "Differenzierungsmerkmal: Claudes Constitutional AI und dokumentierte Sicherheitseigenschaften adressieren direkt die Compliance-Frage",
          "CTA: ein begrenzter 4-Wochen-POC zu einem spezifischen Anwendungsfall — Zusammenfassung regulatorischer Berichte oder KYC-Dokumentenprüfung",
          "Unterstützende Materialien: EU-KI-Gesetz-Readiness-Brief, Model Card, Sicherheitsarchitektur-Diagramm",
          "Erfolgsmetrik: POC-zu-kommerzielles-Angebot-Conversion-Rate, gemessen 60 Tage nach Play-Launch",
        ],
      },
      {
        question:
          "Du hast vor 60 Tagen ein Sales Play gestartet und es generiert keine Pipeline. Wie diagnostizierst du, ob du es iterieren oder stoppen solltest?",
        answerThemes: [
          "Zuerst prüfen: Aktivierungsrate — führen AEs das Play tatsächlich durch, oder liegt es in einem Ordner?",
          "Bei niedriger Aktivierung: das Problem ist Adoption (Workflow-Reibung, unklare Anweisungen), nicht das Play selbst",
          "Bei hoher Aktivierung, aber keiner Pipeline: prüfen, wo die Conversion scheitert — Outbound-Response, Meeting-Conversion oder Opportunity-Erstellung?",
          "Mit AEs sprechen: was sagen Interessenten, wenn sie den Pitch hören? Welcher Einwand oder welche Stille ist die Reaktion?",
          "Den Auslöser prüfen: erreichst du Accounts zum richtigen Zeitpunkt, oder stimmt das Timing nicht?",
          "Iterieren wenn: Botschaft oder CTA falsch ist. Stoppen wenn: Auslöser oder Persona grundlegend falsch gewählt.",
          "Nächstes Mal vorab ein Stop-Kriterium festlegen — im Voraus definieren, wie 'nicht funktionierend' aussieht",
        ],
      },
    ],
  },
  "value-propositions": {
    title: "Value Propositions",
    definition:
      "Eine Value Proposition ist die explizite Aussage über die spezifischen Ergebnisse, die ein Kunde durch den Einsatz deines Produkts erzielen wird, relevant für seine Rolle, Branche und den aktuellen Schmerzpunkt formuliert. Enterprise-GTM erfordert drei Ebenen: Unternehmensebene ('warum Anthropic vs. OpenAI'), vertikale Ebene ('warum Claude für Financial Services') und Persona-Ebene ('warum Claude speziell für dein Risk-Team'). Generische Propositions führen zu niedriger Conversion; maßgeschneiderte verkürzen die Zyklen.",
    whyItMatters:
      "In dieser Rolle wirst du gebeten, branchenspezifische Value Propositions aufzubauen und zu pflegen. Im DACH-Raum dreht sich der Ansatz häufig um regulatorische Sicherheit (EU-KI-Gesetz, DSGVO-Compliance), lokale Datensouveränität und dokumentierte Sicherheitseigenschaften. Diese treffen direkt auf das, was Enterprise-Beschaffungsteams nachfragen.",
    interviewAngle:
      "Könnte als: 'Wie würdest du Anthropics Value Proposition für ein deutsches Finanzdienstleistungsunternehmen entwickeln?' oder 'Was ist der Unterschied zwischen einem Produkt-Pitch und einer Value Proposition?' aufkommen. Zeige, dass du den internen Business Case des Käufers verstehst, nicht nur die Feature-Liste.",
    sampleQuestions: [
      {
        question:
          "Entwickle Anthropics Value Proposition für den CDO einer deutschen Bank, der Claude für interne Dokumentenverarbeitungs-Workflows evaluiert.",
        answerThemes: [
          "Mit dem Business Outcome führen, nicht mit dem Modell: 'Analysten-Zeit bei der regulatorischen Berichterstattung um 60% reduzieren — ohne Compliance-Risiko'",
          "Regulatorischer Hook: Claudes Constitutional AI liefert nachvollziehbare, erklärbare Ausgaben — entscheidend für BaFin-regulierte Entscheidungen",
          "Datensouveränität: Anthropics Enterprise-Vertrag stellt sicher, dass Daten die vereinbarte Infrastruktur nicht verlassen und nicht für das Training verwendet werden",
          "Long-Context-Vorteil: Claude kann einen gesamten Jahresbericht oder eine Kreditakte in einem einzigen Durchgang verarbeiten — Wettbewerber können das nicht",
          "Sicherheitsdifferenzierung gegenüber OpenAI: dokumentiertes Modellverhalten, reduzierte Halluzinationsrate bei strukturierten Finanzdaten",
          "ROI-Framing: X eingesparte Analysestunden pro Woche × belasteter Kostensatz = Amortisationszeitraum gut unter 12 Monaten",
          "Vermeiden: Feature-Listen, Benchmark-Vergleiche oder 'bestes Modell'-Aussagen — Beschaffungsteams interessiert das nicht",
        ],
      },
      {
        question:
          "Was ist der Unterschied zwischen einer unternehmensweiten Value Proposition und einer persona-spezifischen, und warum ist diese Unterscheidung im Enterprise-Vertrieb wichtig?",
        answerThemes: [
          "Unternehmensebene: warum Anthropic vs. irgendeinem KI-Anbieter — adressiert die strategische Frage des Economic Buyers",
          "Vertikale Ebene: warum Claude speziell für Financial Services — adressiert branchenspezifischen Schmerzpunkt und regulatorischen Kontext",
          "Persona-Ebene: warum Claude für den CISO vs. CDO vs. CFO — jeder hat unterschiedliche Erfolgskriterien und Risikobereitschaft",
          "Enterprise-Deals involvieren 5–8 Stakeholder — eine einzige Botschaft wird nicht bei allen ankommen",
          "Der CDO achtet auf Fähigkeit und Geschwindigkeit; der CISO achtet auf Sicherheit und Nachvollziehbarkeit; der CFO achtet auf ROI und Vertragsrisiko",
          "In der Praxis: eine Persona-Matrix erstellen — eine Spalte pro Stakeholder, eine Zeile pro Value-Dimension",
          "Fehlerfall: AEs verwenden den Unternehmens-Pitch für alle Personas und wundern sich, warum Deals beim CISO-Review stecken bleiben",
        ],
      },
    ],
  },
  "vertical-gtm": {
    title: "Vertical / Industry GTM",
    definition:
      "Vertikales GTM ist die Praxis, Vertriebsmotions, Messaging, Playbooks und Enablement nach Branchen zu spezialisieren, anstatt alle Kunden einheitlich zu behandeln. Jede Branche hat eigene Käufer-Personas, Beschaffungsprozesse, regulatorische Rahmenbedingungen, bevorzugte Anwendungsfälle und Wettbewerbslandschaften. Spezialisierung ermöglicht es AEs, schneller Glaubwürdigkeit aufzubauen, relevante Fallstudien anzuführen und Deals zu höheren ACVs abzuschließen.",
    whyItMatters:
      "Dies ist eine Kernverantwortung in der Stellenbeschreibung: branchenspezifische GTM-Strategien in Financial Services, Healthcare, Technology, Retail und Manufacturing zu verfeinern. Im DACH-Raum hat jede Branche besondere Merkmale — FS hat strikte BaFin-Aufsicht, Manufacturing ist Mittelstand-geprägt, Healthcare hat Datenanforderungen zur Datenresidenz. Generisches Messaging übersteht die Beschaffung in diesen Segmenten nicht.",
    interviewAngle:
      "Eine naheliegende Frage: 'Wie würdest du priorisieren, in welche Branchen du im DACH-Raum zuerst eintrittst?' oder 'Was macht eine Branche bereit für ein dediziertes Sales Play?' Starke Antworten balancieren Marktgröße, Deal-Velocity, Wettbewerbsdifferenzierung und bestehende Fallstudien oder Glaubwürdigkeit von Anthropic in dieser Branche.",
    sampleQuestions: [
      {
        question:
          "Wie würdest du priorisieren, auf welche Branchen du dich zuerst im DACH-Raum für Anthropics Enterprise-Motion konzentrierst? Erkläre dein Framework.",
        answerThemes: [
          "Jede Branche nach folgenden Faktoren bewerten: Marktgröße × ICP-Dichte × Deal-Velocity × Claude-Differenzierung × regulatorischer Rückenwind",
          "Financial Services: hoher ACV, starke Claude-Sicherheitspassung, längste Zyklen, beste Differenzierung — Tier 1",
          "Technology (Software/IT): schnellere Zyklen, technische Käufer, niedrigerer ACV, mehr Wettbewerb — Tier 1 sekundär",
          "Healthcare: starker Anwendungsfall (klinische Dokumente, Forschung), aber strenge Datenresidenz-Anforderungen fügen 3–6 Monate hinzu — Tier 2",
          "Manufacturing/Mittelstand: großer Markt, aber KI-Adoption ist noch früh, langsamere Käufer-Edukation — Tier 2",
          "Retail: Customer-Service-Automatisierung ist klarer Anwendungsfall, aber niedrigerer ACV und viel Punkt-Lösung-Wettbewerb — Tier 3",
          "Jahr-1-Fokus: FS + Technology. Tiefe in zwei schlägt Breite in fünf.",
          "Branchenpriorisierung nach 6 Monaten auf Basis von Gewinnrate und Zykluslängen-Daten überprüfen",
        ],
      },
      {
        question:
          "Was macht eine Branche 'bereit' für ein dediziertes Sales Play gegenüber einem generischen Enterprise-Pitch?",
        answerThemes: [
          "Signal 1: du hast 2–3 Deals in der Branche abgeschlossen und verstehst das Kaufmuster",
          "Signal 2: es gibt ein wiederholbares Auslöser-Ereignis — Regulierung, Wettbewerbsdruck oder ein Mandat des Vorstands",
          "Signal 3: der Anwendungsfall ist spezifisch genug um ihn zu benennen ('KYC-Dokumentenprüfung' vs. 'KI für Banking')",
          "Signal 4: du hast eine Fallstudie oder einen Referenzkunden, den du im Pitch verwenden kannst",
          "Signal 5: die Gewinnrate in der Branche ist deutlich höher als der Durchschnitt — das Play funktioniert implizit bereits",
          "Vor einem Play: du testest noch Hypothesen. Nach den oben genannten Signalen: dokumentieren und systematisieren.",
          "Ein Play ohne Fallstudie oder spezifischen Anwendungsfall ist nur ein Pitch-Deck mit einem Branchen-Logo",
        ],
      },
    ],
  },
};

export default t;
