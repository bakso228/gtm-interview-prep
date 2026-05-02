import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "sales-playbooks": {
    title: "Sales Playbooks",
    definition:
      "Ein Sales Playbook ist eine dokumentierte Sammlung aller Ressourcen, die ein AE benötigt, um eine bestimmte Vertriebsbewegung umzusetzen: ICP-Definition, Discovery-Fragen, Einwandbehandlung, Wettbewerbspositionierung, Qualifikationskriterien, Stage-Anforderungen, Gesprächsleitfäden, Fallstudien und Angebotsvorlagen. Playbooks verkürzen die Einarbeitungszeit, schaffen Konsistenz im Team und machen Coaching skalierbar. Sie sind lebendige Dokumente – sie werden aktualisiert, wenn sich Marktbedingungen und Win/Loss-Daten verändern.",
    whyItMatters:
      "Die Stellenbeschreibung verlangt ausdrücklich den Aufbau und die Pflege branchenspezifischer Sales Playbooks. Für Anthropics Enterprise-Bewegung im DACH-Markt bedeutet das, Playbooks Vertical für Vertical zu erstellen – beginnend mit Financial Services und Technology – und sie laufend auf Basis neuer Deal-Daten zu aktualisieren. Ein Playbook ohne Aktualisierungsprozess wird innerhalb eines Quartals zur ungenutzten Ablage.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Erkläre mir, wie du ein Playbook für ein Vertical aufbauen würdest, in das du noch nie verkauft hast.' Zeige, dass du mit Kundenrecherche und Win/Loss-Interviews beginnst, nicht mit einer leeren Folienvorlage. Das Ergebnis sollte etwas sein, das AEs aktiv nutzen – nicht etwas, das RevOps im QBR präsentiert.",
    example:
      "Bei Meta haben wir globale Opportunity- und Priorisierungs-Playbooks für das Connectivity-Partnerships-Team über 20+ Märkte hinweg erstellt. Der Schlüssel war, sie marktspezifisch genug zu machen, um glaubwürdig zu sein, aber generisch genug, damit ein neuer Sales-Mitarbeiter innerhalb einer Woche damit arbeiten konnte.",
    sampleQuestions: [
      {
        question:
          "Erkläre mir Schritt für Schritt, wie du ein Sales Playbook für Anthropics Financial-Services-Vertical im DACH-Markt von Grund auf aufbauen würdest.",
        answerThemes: [
          "Mit Recherche beginnen, nicht mit Folien: 5 Kundeninterviews + 5 Win/Loss-Interviews, bevor irgendetwas geschrieben wird",
          "Den ICP spezifisch für dieses Vertical definieren: Welche FS-Unternehmen schließen am wahrscheinlichsten ab, und warum?",
          "Das Buying Committee abbilden: Wer ist an einer Enterprise-KI-Entscheidung bei einer deutschen Bank beteiligt (CDO, CISO, Beschaffung, Legal, CFO)?",
          "Den Discovery-Fragenpool aufbauen: Welche Fragen decken Schmerz, Dringlichkeit und Budgetsituation im FS-Bereich auf?",
          "Einwand-Bibliothek: Die fünf häufigsten Einwände im FS-Bereich ('Unsere Daten dürfen Deutschland nicht verlassen', 'Was unterscheidet euch von OpenAI', 'Was sagt die BaFin dazu?') mit Antworten",
          "Eine POC-Design-Vorlage spezifisch für FS-Anwendungsfälle einbeziehen",
          "Aktualisierungsprozess: Vierteljährliche Überprüfung auf Basis von Win/Loss-Daten – ein Playbook ohne Aktualisierungsmechanismus ist nach 90 Tagen wertlos",
        ],
      },
      {
        question:
          "Wie misst du, ob ein Sales Playbook tatsächlich genutzt wird und ob es wirkt?",
        answerThemes: [
          "Adoptionsmetrik: Prozentsatz der AEs, die innerhalb von 30 Tagen nach Launch eine Playbook-Zertifizierung oder ein Quiz abgeschlossen haben",
          "Nutzungsmetrik: Tauchen die Gesprächsleitfäden und Discovery-Fragen in Gong-Call-Reviews auf?",
          "Konversionsmetrik: Konvertieren Accounts, die über das Playbook bearbeitet wurden, zu einer höheren Rate als solche, bei denen das nicht der Fall ist?",
          "Zykluslänge: Schließen Deals, die das Playbook nutzen, schneller als die Baseline ab?",
          "AE-Feedback: Monatliche 5-Minuten-Umfrage durchführen – was funktioniert, was fehlt, was muss aktualisiert werden?",
          "Wenn AEs es nicht nutzen: Das Problem liegt meist am Format (zu lang, falsches Format) oder am Vertrauen (sie sind noch nicht überzeugt)",
          "Erfolgszeichen: Ein AE in einem Deal-Review referenziert spontan einen Playbook-Abschnitt, ohne dazu aufgefordert zu werden",
        ],
      },
    ],
  },
  "ae-onboarding": {
    title: "AE Onboarding & Hochlaufphase",
    definition:
      "AE-Onboarding ist der strukturierte Prozess, einen neuen Account Executive so schnell wie möglich produktiv zu machen. Er umfasst Produkttraining, Markteinführung, Tool-Setup, Call-Shadowing, Messaging-Zertifizierung und die ersten eigenständigen Deals. Die Ramp-Quote ist ein reduziertes Ziel während der Einarbeitungsphase – typischerweise 25–50 % der vollen Quote in Monat 1–2, ansteigend auf 100 % bis Monat 4–6, je nach Deal-Komplexität. Das Ramp-Design ist eine Vergütungs- und Kapazitätsplanungsentscheidung, nicht nur eine HR-Angelegenheit.",
    whyItMatters:
      "Die Stellenbeschreibung erfordert Erfahrung beim Aufbau von Sales-Kapazitätsmodellen und Headcount-Planung. Die Einarbeitung neuer Mitarbeiter ist ein zentraler Input: Wenn du im Q1 drei AEs einstellst, bestimmt ihr Ramp-Profil, wann du volle Produktivität erreichst – was sich auf dein Q2–Q3-Umsatzmodell auswirkt. Falsches Onboarding verzögert die Hochlaufphase; richtiges Onboarding ist ein Wettbewerbsvorteil.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Wie würdest du das Onboarding für einen neuen Enterprise-AE in einem Markt gestalten, den Anthropic noch nicht erschlossen hat?' oder 'Wie sieht eine gute Hochlaufphase für eine Enterprise-KI-Vertriebsbewegung aus?' Zeige, dass du an die Zeit bis zum ersten Deal denkst, nicht nur an den Starttermin.",
    sampleQuestions: [
      {
        question:
          "Entwirf einen 90-Tage-Onboarding-Plan für einen neuen Enterprise-AE, der dem DACH-Team in einem Markt beitritt, den Anthropic noch nicht vollständig erschlossen hat.",
        answerThemes: [
          "Tage 1–10: Interne Grundlagen – tiefer Einstieg ins Produkt, Wettbewerbslandschaft, CRM-Setup, Team-Vorstellungen",
          "Tage 11–20: Marktimmersion – Aufzeichnungen von Kundeninterviews, Win/Loss-Analyse, DACH-spezifischer regulatorischer Kontext",
          "Tage 21–30: Shadowing – Teilnahme an 5+ Discovery-Calls mit dem erfahrensten AE, nur beobachten, nicht reden",
          "Monat 2: Unterstützte Ausführung – erste Outbound-Sequenzen starten, erster Discovery-Call allein mit Manager in der Leitung",
          "Monat 3: Erste qualifizierte Opportunity in der Pipeline; erstes internes Deal-Review mit vollständig ausgefülltem MEDDPICC",
          "Zertifizierungsprüfpunkt: Kann der AE das FS-Pitch halten und die fünf häufigsten Einwände behandeln, bevor er eigenständig arbeitet?",
          "Ramp-Quote: 25 % in Monat 1–2, 50 % in Monat 3, 75 % in Monat 4, 100 % ab Monat 5",
        ],
      },
      {
        question:
          "Wie wirkt sich das Ramp-Quote-Design auf dein Kapazitätsmodell aus, und was passiert, wenn du es falsch gestaltest?",
        answerThemes: [
          "Die Hochlaufphase bestimmt, wann du Umsatz erzielst – eine 6-monatige Einarbeitungszeit bedeutet, dass ein Q1-Einstellungstermin erst im Q3 wesentlich beiträgt",
          "Wenn die Hochlaufphase zu kurz ist: Neue AEs haben die volle Quote, bevor sie bereit sind, verfehlen sie deutlich und verlassen das Unternehmen (Churn)",
          "Wenn die Hochlaufphase zu lang ist: Du zahlst volles OTE ohne proportionalen Umsatz, verbrennst Cash und verzerrst Unit Economics",
          "Im Kapazitätsmodell: Jeden neuen Mitarbeiter mit 25/50/75/100 % Produktivität pro Monat modellieren – niemals volle Produktivität ab Tag 1 annehmen",
          "Für Enterprise-KI (lange Zyklen): Die Hochlaufphase im DACH-Bereich sollte mindestens 5–6 Monate betragen – erste Deals brauchen so lange zum Abschluss, selbst mit warmen Leads",
          "Der Vergütungsplan muss mit der Hochlaufphase übereinstimmen – wenn die Ramp-Quote 25 % ist, der Accelerator aber bei 100 % beginnt, ist die Struktur fehlerhaft",
          "Ein Kapazitätsmodell, das volle Produktivität ab Monat 2 annimmt, wird eine Forecast-Lücke haben, die du erst im Q3 verstehst",
        ],
      },
    ],
  },
  bant: {
    title: "BANT",
    definition:
      "BANT ist ein Vertriebsqualifikationsrahmen: Budget (hat der Interessent Budget zugeteilt oder verfügbar?), Authority – Entscheidungsbefugnis (sprichst du mit dem Entscheidungsträger?), Need – Bedarf (gibt es ein definiertes Problem, das dein Produkt löst?), Timeline – Zeitplan (gibt es eine Dringlichkeit, es zu lösen?). Es ist das ursprüngliche Enterprise-Qualifikationsframework – einfach, weit verbreitet und nützlich für erste Qualifikationsgespräche. Die Haupteinschränkung: Es ist käuferseitig passiv und behandelt Bedarf und Entscheidungsbefugnis als bereits vorhanden, anstatt als etwas, das ein guter AE erst aufbaut.",
    whyItMatters:
      "Du musst ein Qualifikationsframework für Anthropics Enterprise-Bewegung empfehlen. BANT ist eine nützliche Basis für die Erstqualifizierung, versagt aber bei komplexen Enterprise-Deals mit mehreren Stakeholdern, wo Budget noch nicht existiert, Entscheidungsbefugnis verteilt ist und der AE Dringlichkeit erzeugen muss, anstatt sie vorzufinden.",
    interviewAngle:
      "Wird am häufigsten als Vergleich auftauchen: 'Wann würdest du BANT vs. MEDDIC vs. MEDDPICC einsetzen?' Deine Antwort sollte zeigen, dass du den Trade-off zwischen Einfachheit (BANT) und Präzision (MEDDPICC) verstehst und das Framework zur Komplexität der Vertriebsbewegung anpassen kannst.",
    sampleQuestions: [
      {
        question:
          "Wann würdest du BANT gegenüber MEDDIC bevorzugen, und gibt es Situationen, in denen BANT tatsächlich die bessere Wahl ist?",
        answerThemes: [
          "BANT funktioniert bei: kurzen Zyklen (<30 Tage), einzelnem Käufer, ACV unter 50.000 €, transaktionalen Deals",
          "BANT versagt bei: Enterprise-Deals, wo Budget geschaffen und nicht gefunden wird, Entscheidungsbefugnis auf ein Komitee verteilt ist und Dringlichkeit erst aufgebaut werden muss",
          "In der Praxis: BANT ist ein nützlicher Filter für Erstgespräche – wenn Budget, Entscheidungsbefugnis, Bedarf und Zeitplan alle fehlen, ist es kein Deal",
          "Aber BANT zu bestehen ist notwendig, nicht hinreichend: Ein Deal, der BANT besteht, kann trotzdem an Legal, CISO oder auf Führungsebene scheitern",
          "Für Anthropic DACH Enterprise: BANT ist unzureichend – verwende MEDDPICC für alles über 100.000 € ACV",
          "Ein Team, das neu mit strukturierter Qualifikation beginnt: Mit BANT starten, zu MEDDIC übergehen, sobald die Gewohnheit etabliert ist",
          "BANT niemals als Grund verwenden, die tiefere Qualifikation bei einem großen Deal zu überspringen",
        ],
      },
      {
        question:
          "Ein AE sagt dir, ein Deal sei qualifiziert, weil 'sie Budget haben und der VP es will.' Welche Fragen würdest du in einem Deal-Review stellen?",
        answerThemes: [
          "'Welche konkreten Kennzahlen erwarten sie zu erreichen – was bedeutet Erfolg für sie?' (Metrics)",
          "'Ist der VP der Economic Buyer – hat er das Budget und kann er unilateral unterschreiben?' (Economic Buyer)",
          "'Nach welchen Kriterien werden sie einen Anbieter auswählen – gibt es einen formalen Evaluierungsprozess?' (Decision Criteria)",
          "'Was sind die Schritte zwischen jetzt und einem unterzeichneten Vertrag – wer muss noch zustimmen?' (Decision Process)",
          "'Was passiert, wenn sie dieses Problem nicht lösen – was sind die Kosten der Untätigkeit?' (Implicate Pain)",
          "'Wer innerhalb der Organisation hilft uns aktiv, diesen Deal zu gewinnen?' (Champion)",
          "Wenn der AE diese Fragen nicht beantworten kann, ist der Deal nicht qualifiziert – es ist ein Kontakt mit Interesse",
        ],
      },
    ],
  },
  meddic: {
    title: "MEDDIC",
    definition:
      "MEDDIC ist ein Enterprise-Vertriebsqualifikationsrahmen mit sechs Komponenten: Metrics – Kennzahlen (quantifizierter geschäftlicher Nutzen, den der Kunde erwartet), Economic Buyer (die Person mit Budgetentscheidungsbefugnis), Decision Criteria – Entscheidungskriterien (formale und informelle Kriterien für die Anbieterauswahl), Decision Process – Entscheidungsprozess (Schritte und Zeitplan zur Kaufentscheidung), Identify Pain – Schmerzidentifikation (der spezifische Geschäftsschmerz, der Dringlichkeit erzeugt), und Champion (ein interner Fürsprecher mit Einfluss, der deinen Erfolg will). MEDDIC wurde in den 1990er Jahren bei PTC entwickelt und gilt bis heute als Goldstandard für komplexe B2B-Deals.",
    whyItMatters:
      "Diese Rolle dreht sich um die Förderung von Exzellenz im Enterprise-Vertrieb. MEDDIC ist das Framework, das die meisten Enterprise-Sales-Organisationen zur Qualifikation und Weiterentwicklung großer Deals einsetzen. Es in der Tiefe zu kennen – und zu wissen, wie man AEs dabei coacht – ist eine Grundvoraussetzung. Anthropics Enterprise-Deals werden mehrere Stakeholder, lange Zyklen und Beschaffungsscrutiny beinhalten: genau das Umfeld, für das MEDDIC entwickelt wurde.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Erkläre MEDDIC einem neuen AE' oder 'Wie würdest du MEDDIC nutzen, um einen ins Stocken geratenen Deal zu diagnostizieren?' Zeige, dass du jeden Buchstaben auf ein reales Deal-Szenario anwenden kannst, nicht nur die Definition aufsagen. Eine starke Antwort könnte ein Beispiel eines Deals enthalten, der ins Stocken geriet, weil der Champion das Unternehmen verließ oder der Economic Buyer nie identifiziert wurde.",
    sampleQuestions: [
      {
        question:
          "Führe mich durch MEDDIC anhand eines hypothetischen Anthropic-Enterprise-Deals – ein deutsches Versicherungsunternehmen, das Claude für die Schadenbearbeitung evaluiert.",
        answerThemes: [
          "Metrics: '30 % Reduktion der Bearbeitungszeit bei Schadensfällen, 15 % Reduktion des Analysten-Headcounts bei der Dokumentenprüfung' – spezifisch, messbar, mit dem Kunden vereinbart",
          "Economic Buyer: wahrscheinlich der CFO oder COO – der CDO sponsert, kontrolliert aber nicht das Budget; den echten Budgetverantwortlichen finden und ansprechen",
          "Decision Criteria: formal (Sicherheitszertifizierung, DSGVO-Konformität, Datenresidenz) + informell (welchem Anbieter der CDO bereits vertraut)",
          "Decision Process: Legal-Review → CISO-Freigabe → Beschaffungs-RFP → Vorstandsgenehmigung – jeden Schritt und Verantwortlichen kartieren",
          "Identify Pain: Versicherungsbetrug nimmt zu, manuelle Prüfung ist ein Engpass, und der EU AI Act verlangt bis 2026 erklärbare Outputs",
          "Champion: der Leiter der Claims-Analytics-Abteilung – sie will, dass es funktioniert, hat Glaubwürdigkeit beim COO und wird intern für uns eintreten",
          "Ein Deal ohne Champion ist ein Deal, bei dem du der Einzige bist, der verkauft – das verliert man fast immer",
        ],
      },
      {
        question:
          "Ein Deal steckt seit 8 Wochen in Stage 3 ohne Bewegung. Wie diagnostizierst du mit MEDDIC, was nicht stimmt?",
        answerThemes: [
          "Metrics prüfen: Hat der Kunde quantifiziert, wie Erfolg für ihn aussieht? Wenn nicht, gibt es keine Dringlichkeit – sie erkunden, kaufen aber nicht",
          "Economic Buyer prüfen: Hat der AE mit der Person gesprochen, die wirklich das Budget kontrolliert? Wenn nur der technische Kontakt, ist das der Stillstand",
          "Decision Criteria prüfen: Wissen wir, was sie zur Entscheidungsfindung nutzen werden? Wenn die Kriterien vage sind, hat der Deal keine treibende Kraft",
          "Decision Process prüfen: Gibt es einen nächsten formalen Schritt mit Datum? 'Wir evaluieren intern' ohne Datum ist kein Prozess",
          "Champion prüfen: Ist der Champion noch aktiv und hilft tatsächlich? Menschen wechseln Rollen, werden beschäftigt oder verlieren politisches Kapital",
          "Wahrscheinlichster Auslöser für 8-Wochen-Staus: Kein Zugang zum Economic Buyer und/oder der Champion ist still geworden",
          "Maßnahme: Den AE bitten, diese Woche einen Champion-Call anzufordern – wenn der Champion sich nicht treffen will, ist der Deal verloren",
        ],
      },
    ],
  },
  meddpicc: {
    title: "MEDDPICC",
    definition:
      "MEDDPICC erweitert MEDDIC um zwei zusätzliche Buchstaben: Paper Process – Papierprozess (die rechtlichen, Beschaffungs-, Sicherheits- und Vertragsschritte, die zum Abschluss erforderlich sind – im Enterprise-Bereich üblich) und Competition – Wettbewerb (wer sonst noch evaluiert wird und wie du dich unterscheidest). Diese Ergänzungen machen MEDDPICC vollständiger für moderne Enterprise-Deals, bei denen ein professionell gewonnener Deal trotzdem durch Beschaffungsverzögerungen oder einen Wettbewerber verloren gehen kann, der früher beim Economic Buyer war. MEDDPICC ist heute der De-facto-Standard bei den meisten Scale-up- und Enterprise-SaaS-Unternehmen.",
    whyItMatters:
      "Im DACH-Enterprise-Bereich ist die Paper-Process-Komponente besonders wichtig – deutsche und Schweizer Beschaffungsprozesse sind oft formaler und risikoaverser als US-amerikanische. Sicherheitsreviews, Datenverarbeitungsverträge (DPAs) und juristische Vertragsprüfungen können einem Zyklus Monate hinzufügen. Den Paper Process frühzeitig zu verstehen und zu kartieren ist ein Deal-Beschleunigungshebel.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Was ist der Unterschied zwischen MEDDIC und MEDDPICC?' oder 'Führe mich durch MEDDPICC bei einem Enterprise-Claude-Deal.' Zeige, dass du das P (Paper Process) als proaktive Managementchance siehst, nicht nur als letzten Schritt – die besten AEs bringen Beschaffungsanforderungen bei der Discovery ans Licht, nicht erst bei der Unterzeichnung.",
    example:
      "Ein Finanzdienstleistungsunternehmen in Frankfurt liebte das POC-Ergebnis, stagnierte aber vier Monate lang, weil niemand das interne KI-Beschaffungskomitee kartiert hatte. MEDDPICC zwingt dich, dieses Komitee in Stage 2 zu finden, nicht in Stage 5.",
    sampleQuestions: [
      {
        question:
          "Wie sieht der Paper Process für einen typischen Enterprise-Claude-Deal bei einem deutschen Finanzdienstleister aus, und wie managt man ihn proaktiv?",
        answerThemes: [
          "Typische Schritte: NDA → Sicherheitsfragebogen → DSFA (Datenschutz-Folgenabschätzung) → DPA (Datenverarbeitungsvertrag) → MSA-Vertragsverhandlungen → KI-Governance-Komitee-Review → Beschaffungsfreigabe → Vorstandsgenehmigung",
          "Zeitplan: Bei einem deutschen Finanzdienstleister kann dieser Prozess allein 3–5 Monate nach einer mündlichen Vereinbarung dauern",
          "Proaktiver Ansatz: Den Paper Process bei der Stage-2-Discovery ansprechen, nicht bei Stage 5 – 'Können Sie mir erklären, wie Ihr Unternehmen in den letzten 12 Monaten Enterprise-Software beschafft hat?'",
          "Das Dokumentationspaket vorab befüllen: Antworten auf Sicherheitsfragebögen, Model Card, Architekturdiagramm, DPA-Vorlage – diese sollten in Stage 2 bereit sein",
          "Den Paper-Process-Verantwortlichen frühzeitig identifizieren: Das ist meist Beschaffung + Legal, nicht der CDO-Champion",
          "Parallelverarbeitung: Legal-Review starten, während der POC läuft, nicht danach",
          "Der AE, der den Paper Process früh anspricht, schließt 6 Wochen schneller ab als derjenige, der wartet",
        ],
      },
      {
        question:
          "Wie coachst du einen AE im Umgang mit der Wettbewerbskomponente von MEDDPICC, wenn Anthropic gegen Azure OpenAI evaluiert wird?",
        answerThemes: [
          "Zuerst: Verstehen, wie Azure OpenAI positioniert ist – ist es der Incumbent oder eine parallele Evaluation?",
          "Wenn Incumbent (Microsoft bereits im Account): Der AE muss entweder verdrängen oder koexistieren – Koexistenz ist meist einfacher",
          "Wichtige Differenzierungsmerkmale für den AE: Constitutional AI für compliance-kritische Outputs, größeres Kontextfenster für dokumentenlastige FS-Arbeit, keine Nutzung von Kundendaten für das Training",
          "Das TCO-Argument: Azure-OpenAI-Integration wirkt günstig, erfordert aber erheblichen Engineering-Aufwand und kontinuierliches Prompt-Engineering – Claudes Enterprise-Support reduziert das",
          "Microsoft nicht schlecht machen: 'Verschiedene Werkzeuge für verschiedene Aufgaben' ist glaubwürdiger als 'Wir sind besser'",
          "Den Economic Buyer vor Microsoft erreichen: Azure-Vertreter haben Enterprise-Beziehungen – wenn Microsoft bereits auf CDO-Ebene ist, bist du im Rückstand",
          "Win/Loss-Tracking: Nach jedem Wettbewerbsdeal dokumentieren, was der Kunde als ausschlaggebenden Faktor nannte – das ist deine beste Wettbewerbsintelligenz",
        ],
      },
    ],
  },
  "competitive-enablement": {
    title: "Competitive Enablement",
    definition:
      "Competitive Enablement ist die Praxis, AEs mit dem Wissen und den Werkzeugen auszustatten, um Wettbewerbsdeals zu gewinnen. Dazu gehören Battle Cards (einseitige Vergleiche zu wichtigen Wettbewerbern: wo man gewinnt, wo man verliert, Einwandantworten), Win/Loss-Analysen (strukturierte Post-Deal-Interviews zur Musteridentifikation) und Wettbewerbspositionierungstraining. Im KI-Bereich verändert sich die Wettbewerbslandschaft schnell – Modelle werden aktualisiert, Preise verschieben sich, neue Marktteilnehmer erscheinen – daher haben Wettbewerbsinhalte eine kurze Haltbarkeit und müssen regelmäßig aktualisiert werden.",
    whyItMatters:
      "Anthropic konkurriert in jedem Enterprise-Deal mit OpenAI, Google (Gemini), AWS Bedrock und Microsoft Azure OpenAI. Deine Battle Cards müssen ehrlich sein darüber, wo Claude gewinnt (Sicherheitsprofil, RLHF, Constitutional AI, Kontextfenster) und wo nicht (Markenbekanntheit, Integrationsbreite). Generisches 'Wir sind besser'-Messaging verliert Deals; spezifische Wettbewerbsfallen gewinnen sie.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Ein wichtiger Wettbewerber unterbietet bei zwei deiner Top-Accounts im Preis. Was ist deine Reaktion?' oder 'Wie baust du eine Battle Card für OpenAI vs. Claude?' Zeige, dass du aus der Perspektive des Käufers denkst, nicht nur aus der Feature-Parität.",
    sampleQuestions: [
      {
        question:
          "Erstelle einen Entwurf einer Anthropic-vs.-Azure-OpenAI-Battle-Card. Was gehört hinein, und wie hältst du sie ehrlich?",
        answerThemes: [
          "Abschnitt 1: Wo wir gewinnen – Constitutional AI / prüfbare Outputs, größeres Kontextfenster, Garantie keine Nutzung von Kundendaten für das Training, Glaubwürdigkeit in der Safety-Forschung",
          "Abschnitt 2: Wo sie gewinnen – Microsoft Enterprise-Beziehungen, Azure-Ökosystem-Integration, Office 365 / Teams nativ, breitere Markenbekanntheit in nicht-technischen Verticals",
          "Abschnitt 3: Wann wir konkurrieren – regulierte Branchen (FS, Gesundheitswesen), wo Safety und Erklärbarkeit Beschaffungsanforderungen sind",
          "Abschnitt 4: Wann wir koexistieren – Azure OpenAI für allgemeine Produktivitätsanwendungsfälle (E-Mail-Entwürfe, Code-Unterstützung); Claude für komplexe Dokumentenanalyse und compliance-kritische Outputs",
          "Abschnitt 5: Top-3-Einwände und Antworten – 'Wir haben bereits Azure' / 'OpenAI ist bekannter' / 'Warum nicht einfach GPT-4 verwenden?'",
          "Ehrlichkeitsprinzip: Eine Battle Card, die so tut, als würden wir überall gewinnen, wird von niemandem ernst genommen – AEs müssen wissen, wo sie kämpfen und wo sie aufgeben sollen",
          "Aktualisierungsrhythmus: Vierteljährlich oder wenn eines der Modelle ein wichtiges Release hat",
        ],
      },
      {
        question:
          "Azure OpenAI unterbietet bei zwei deiner Top-DACH-Accounts im Preis. Was ist deine Reaktion?",
        answerThemes: [
          "Nicht mit Preis reagieren – verstehen, warum der Interessent auf das Preisargument eingeht",
          "Preis ist oft ein Proxy für eine wahrgenommene Wertlücke: Wenn sie preissensitiv sind, kommt das Wertversprechen nicht an",
          "Den AE nachbohren lassen: Wer hat das Preisthema angesprochen – Beschaffung oder der Economic Buyer? Das erfordert unterschiedliche Reaktionen",
          "Den TCO-Fall aufbauen: Azure-OpenAI-Integration erfordert erhebliche Engineering-Investitionen; Claude Enterprise reduziert diese Gesamtkosten",
          "Die Evaluierungskriterien neu ausrichten: Vom 'Preis pro Token' zu 'Kosten eines falschen Outputs in einem Compliance-Kontext' wechseln",
          "Executive-Sponsorship aktivieren: Preiseinwände auf Beschaffungsebene verschwinden, wenn die Abstimmung auf C-Level-Ebene stark ist",
          "Wenn wir konsistent über Accounts hinweg am Preis verlieren: Das ist ein Preisgestaltungs- oder Verpackungsproblem, kein Vertriebsproblem – an die Führung eskalieren",
        ],
      },
    ],
  },
};

export default t;
