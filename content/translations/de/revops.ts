import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "pipeline-management": {
    title: "Pipeline Management",
    definition:
      "Pipeline Management ist die Disziplin, Deals durch definierte Phasen vom ersten Kontakt bis zum Abschluss zu verfolgen, zu qualifizieren und voranzutreiben. Dazu gehören Phasendefinitionen mit klaren Eintritts- und Austrittskriterien, ein regelmäßiger Überprüfungsrhythmus (wöchentliche Pipeline-Reviews) sowie Metriken zur Beurteilung der Pipeline-Gesundheit: Coverage-Ratio, phasengewichteter Wert, Velocity und Alter pro Phase. Starkes Pipeline Management macht den Umsatz vorhersehbar und deckt Probleme früh genug auf, um sie zu beheben.",
    whyItMatters:
      "Diese Rolle erfordert die Analyse branchenspezifischer Pipeline-Dynamiken und die Beseitigung operativer Engpässe in komplexen Verkaufszyklen. Im Enterprise-KI-Bereich bleiben Deals häufig beim Security-Review oder beim Rechtsteam stecken — dieses Muster früh in den Pipeline-Daten zu erkennen ermöglicht gezieltes Eingreifen. Du wirst den Überprüfungsrhythmus und die Frameworks besitzen, mit denen AEs ihr Buch selbst steuern.",
    interviewAngle:
      "Wahrscheinlich: 'Wie sieht eine gesunde Pipeline für Enterprise-KI-Software aus?' oder 'Wenn die DACH-FS-Pipeline Mitte des Quartals 50% unter Ziel liegt, was ist deine Diagnose?' Starke Antworten gehen über die Deal-Anzahl hinaus zu Phasenverteilung, Alter, Coverage-Ratio und Quellenmix, bevor Schlussfolgerungen gezogen werden.",
    example:
      "Bei Smile Identity führten wir wöchentliche Pipeline-Reviews segmentiert nach Branche durch. Wir stellten fest, dass Deals, die beim Rechtsteam stecken blieben, im FS-Bereich 3x länger dauerten — deshalb haben wir eine Pre-Legal-Checkliste entwickelt, die die Rechtszykluszeit um 30% verkürzt hat.",
    sampleQuestions: [
      {
        question:
          "Wie sieht eine gesunde Pipeline für einen Enterprise-KI-Software-Verkauf im DACH-Raum aus, und woran erkennst du, wenn deine es nicht ist?",
        answerThemes: [
          "Coverage: 3–4x für Enterprise (höher als Standard-SaaS aufgrund von 6–9 Monats-Zyklen)",
          "Phasenverteilung: Mehrheit in frühen/mittleren Phasen — starke Konzentration in späten Phasen ist ein Warnsignal",
          "Quellenvielfalt: Outbound, Inbound, Partner, API-Conversion — keine Einzel-Quellen-Abhängigkeit",
          "Alters-Disziplin: jeden Deal markieren, der seit >30 Tagen in einer Phase keine Bewegung gezeigt hat, als Stillstand, nicht als aktive Opportunity",
          "Warnsignale: Coverage unter 2x, gesamte Pipeline besteht aus Q4-Deals, dieselben Deals tauchen Woche für Woche auf",
          "DACH-Besonderheit: ein Deal über 500.000 €, der seit 8 Wochen beim Security-Review steckt, ist trotzdem tote Pipeline, bis er sich bewegt",
          "Praxistest: alle Deals >90 Tage alt ohne Phasenbewegung herausrechnen — wie hoch ist deine echte Coverage jetzt?",
        ],
      },
      {
        question:
          "Es ist Woche 6 eines 13-wöchigen Quartals und die DACH-Financial-Services-Pipeline liegt 50% unter Ziel. Erkläre deine Vorgehensweise.",
        answerThemes: [
          "Diagnose vor dem Handeln: ist das Problem Pipeline-Erstellung oder Pipeline-Conversion?",
          "Coverage nach Phase prüfen: fehlt einfach Pipeline, oder stirbt sie in der Mitte des Funnels?",
          "Mit AEs sprechen: was hören sie? Gibt es ein Wettbewerbs-, Messaging- oder Timing-Problem?",
          "Quellenmix prüfen: versiegt der Inbound, oder konvertiert Outbound nicht zu Meetings?",
          "Sofortmaßnahme (dieses Quartal): ruhende Opportunities reaktivieren, gezielten Outbound-Sprint durchführen, gemeinsam mit einem Partner eine Veranstaltung ausrichten",
          "Strukturelle Lösung (nächstes Quartal): FS-Play aktualisieren, Wettbewerbs-Enablement verbessern, CISO-spezifischen Track in den POC-Prozess aufnehmen",
          "Klar an die Führung berichten: hier ist die Lücke, hier ist die Ursache, hier ist, was ich dieses Quartal vs. nächstes Quartal tue",
        ],
      },
    ],
  },
  "forecasting": {
    title: "Forecasting-Methoden",
    definition:
      "Sales Forecasting prognostiziert den Umsatz, der innerhalb eines Zeitraums erwartet wird zu schließen. Drei Hauptmethoden: (1) Phasengewichtet — Deal-Wert mit der jeder Phase zugewiesenen Wahrscheinlichkeit multiplizieren; (2) Call-basiert — AEs reichen eine 'Commit'-Zahl auf Basis ihrer Einschätzung ein, ergänzt durch Manager-Review; (3) KI-gestützt — Tools wie Clari oder Gong analysieren Aktivitätssignale zur Vorhersage der Abschlusswahrscheinlichkeit. Enterprise-Teams schichten typischerweise alle drei: Phasengewichtung als Baseline, AE-Calls für die aktuelle Quartalssicht, KI-Scoring zur Mustererkennung.",
    whyItMatters:
      "Die Stellenbeschreibung fordert, quartals- und jahresbezogene Planungszyklen voranzutreiben und proaktive Erkenntnisse aus Pipeline-Analytics zu entwickeln. Genaues Forecasting bedeutet nicht nur die Zahl — es baut Vertrauen bei Finance und Führung auf, informiert Einstellungsentscheidungen und bestimmt, ob die Kapazitätsmodell-Annahmen eingehalten werden.",
    interviewAngle:
      "Könnte als: 'Wie würdest du die Forecast-Genauigkeit in einem Team verbessern, dem du gerade beigetreten bist?' oder 'Welche Forecast-Methode bevorzugst du für eine frühe Enterprise-Motion?' aufkommen. Zeige, dass du die Grenzen jedes Ansatzes verstehst und weißt, wie man sie trianguliert.",
    example:
      "Bei Agoda habe ich ein kanalspezifisches Forecast-Modell entwickelt, das Elastizitätskurven, Bidding-Historie und Markt-Saisonalität trianguliert hat. Es übertraf den manuellen Forecast um mehr als 5% und wurde teamübergreifend als Standard übernommen.",
    sampleQuestions: [
      {
        question:
          "Wie würdest du die Forecast-Genauigkeit in einem DACH-Enterprise-Team verbessern, dem du gerade beigetreten bist und das seinen Quartals-Call konsistent verfehlt?",
        answerThemes: [
          "Zuerst: das Verfehlensmuster diagnostizieren — sind sie immer optimistisch, oder schwankt der Forecast zufällig? Optimistischer Bias ist ein anderes Problem als zufällige Varianz.",
          "Phasendefinitionen prüfen: vage oder inkonsistente Phasengates produzieren bedeutungslose phasengewichtete Forecasts",
          "AEs einzeln befragen: ihr eigenes Vertrauen in jeden Deal verstehen — Commit vs. Upside vs. Hoffnung",
          "Drei Methoden schichten: phasengewichtete Baseline + AE-Call + Aktivitätssignal (Gong/Clari falls verfügbar)",
          "Eine Plausibilitätsfrage im Pipeline-Review hinzufügen: 'Was müsste schiefgehen, damit dieser Deal rutscht?'",
          "Forecast-Genauigkeit pro AE über 4 rollende Quartale verfolgen — das Signal finden, wer zuverlässig ist",
          "Forecast-Genauigkeit als expliziten KPI neben der Umsatzerreichung festlegen",
        ],
      },
      {
        question:
          "Was sind die Hauptgrenzen der phasengewichteten Forecast-Methode, und wie kompensierst du sie?",
        answerThemes: [
          "Phasengewichte sind historische Durchschnittswerte — sie spiegeln nicht die aktuelle Deal-Qualität oder Wettbewerbsdynamik wider",
          "AEs manipulieren Phasenzuweisungen, wenn die Pipeline niedrig ist — alles wird auf Phase 3 hochgestuft",
          "Erfasst kein Deal-Alter: ein Phase-3-Deal an Tag 10 und an Tag 180 erhalten dieselbe Wahrscheinlichkeit",
          "Ignoriert deal-spezifische Signale: ein Deal ohne CISO-Freigabe und mit einem 2-Wochen-Close-Datum ist nicht zu 80% wahrscheinlich",
          "Kompensation: Altersabfall hinzufügen (Wahrscheinlichkeit für Deals reduzieren, die sich seit X Tagen nicht bewegt haben)",
          "Kompensation: AE-Call-Schicht — ihre Einschätzung zu einzelnen Deals ist für Deals im laufenden Quartal genauer als gewichtete Durchschnittswerte",
          "Kompensation: Aktivitätssignale (Gong-Engagement-Score, E-Mail-Antwortrate) als Wahrscheinlichkeitsmodifikator",
        ],
      },
    ],
  },
  "crm-hygiene": {
    title: "CRM-Hygiene",
    definition:
      "CRM-Hygiene ist die fortlaufende Praxis, Deal-, Kontakt- und Account-Daten in Salesforce oder einem äquivalenten System aktuell, vollständig und korrekt zu halten. Sie verschlechtert sich von Natur aus — AEs vergessen, Aktivitäten zu protokollieren, Deal-Phasen driften von der Realität ab, Kontakte wechseln und werden nicht aktualisiert. Schlechte Hygiene bricht Forecasting, Gebietszuweisungen, Reporting und Provisions-Berechnungen. Sie aufrechtzuerhalten erfordert sowohl Prozesse (Phasengating-Anforderungen, Close-Date-Disziplin) als auch Durchsetzung (Pipeline-Review-Rituale, Manager-Verantwortlichkeit).",
    whyItMatters:
      "Die Stellenbeschreibung nennt explizit CRM-Datenverwaltung und die Sicherstellung der Salesforce-Adoption. Wenn die Datenqualität beim Einstieg niedrig ist, ist alles nachgelagerte unzuverlässig — kein Forecasting, keine Segmentierung, keine Play-Messung möglich. Die Behebung ist oft genauso ein politisches wie ein technisches Problem.",
    interviewAngle:
      "Könnte als Szenario auftauchen: 'CRM-Daten sind unzuverlässig und AEs protokollieren nicht. Wie behebst du das, ohne das Team zu verprellen?' Kluge Antworten beginnen nicht mit Durchsetzung — sie beginnen mit dem AE-Eigeninteresse (besseres Forecasting = weniger Quoten-Varianz = vorhersehbarere Provisions) und fügen dann Accountability-Mechanismen hinzu.",
    sampleQuestions: [
      {
        question:
          "CRM-Daten sind unzuverlässig und AEs protokollieren Deal-Aktivitäten nicht konsistent. Wie behebst du das, ohne es zu einer Strafmaßnahme zu machen?",
        answerThemes: [
          "Zunächst verstehen warum: ist es Workflow-Reibung (Protokollierung ist aufwändig), Verwirrung (unklar was zu protokollieren ist) oder Widerstand (sie sehen keinen Nutzen)?",
          "Mit AE-Eigeninteresse beginnen: genaues CRM bedeutet besserer Forecast, was weniger Überraschungen bei der Provisions-Abrechnung bedeutet — als Tool für sie framen",
          "Die Anforderungen reduzieren: die 5 Felder definieren, die tatsächlich Entscheidungen treiben — nicht alles verlangen, sondern das Richtige",
          "Automatisieren was möglich ist: E-Mail-Sync, Kalender-Logging, Gesprächsaufzeichnung via Gong — manuelle Schritte entfernen",
          "Datenqualität sichtbar machen: ein wöchentlicher 'Pipeline-Health-Score' pro AE zeigt das Problem ohne Beschämung",
          "Letzter Hebel: Provisions-Berechnung an CRM-Daten knüpfen — was nicht protokolliert ist, zählt nicht zur Quota-Erreichung",
          "Manager-Verantwortlichkeit: Pipeline-Review funktioniert nur mit protokollierten Daten — Manager müssen auf Deal-Ebene durchsetzen",
        ],
      },
      {
        question:
          "Wenn du nur 5 Pflichtfelder in Salesforce für eine Enterprise-Vertriebsmotion durchsetzen könntest, welche wären das und warum?",
        answerThemes: [
          "1. Close Date — treibt Forecast-Genauigkeit; muss realistisch sein, nicht wunschdenkerisch",
          "2. Deal-Phase — das Rückgrat aller Pipeline-Berichte; muss den vereinbarten Definitionen entsprechen",
          "3. Economic Buyer (Kontakt) — das am stärksten prädiktive Feld für Deal-Gesundheit; die meisten AEs überspringen es",
          "4. Nächster Schritt mit Datum — trennt aktive Deals von Zombie-Pipeline",
          "5. Wettbewerber (falls vorhanden) — unverzichtbar für Win/Loss-Analyse und Wettbewerbs-Enablement-Feedback-Loop",
          "Alles andere ist schön zu haben; diese fünf machen Forecasting und Coaching möglich",
          "Über Phase-Gate durchsetzen: ein Deal kann nicht auf Phase 3 vorrücken, ohne alle 5 Felder ausgefüllt zu haben",
        ],
      },
    ],
  },
  "sales-tech-stack": {
    title: "Sales Tech Stack",
    definition:
      "Der Sales Tech Stack ist die Sammlung von Software-Tools, die zur Durchführung und Messung der Go-to-Market-Motion eingesetzt werden. Kernschichten: CRM (Salesforce — das System of Record), Sales Engagement Platform / SEP (Outreach, Salesloft — für Sequenzierung, Gesprächsprotokollierung, E-Mail-Tracking), Conversation Intelligence (Gong, Chorus — Gesprächsaufzeichnung und Deal-Signale), BI / Reporting (Tableau, Looker — Pipeline-Dashboards) und CPQ (Salesforce CPQ, DealHub — Angebots- und Genehmigungsworkflows). Jede Schicht bedient eine andere Persona: CRM bedient Ops und Führung; SEP bedient AEs; BI bedient Management.",
    whyItMatters:
      "Die Stellenbeschreibung fordert, den Sales-Technology-Stack zu optimieren und eine effektive Adoption sicherzustellen. Das Risiko besteht nicht darin, das falsche Tool zu kaufen — sondern gute Tools zu kaufen, die niemand nutzt, weil sie nicht richtig eingeführt wurden oder der Workflow nicht mit der tatsächlichen Arbeitsweise der AEs übereinstimmt. Du wirst genauso viele Adoption-Entscheidungen wie Beschaffungsentscheidungen treffen müssen.",
    interviewAngle:
      "Könnte als: 'Wie sieht dein idealer RevOps Tech Stack für ein 15-köpfiges Enterprise-Team aus?' oder 'Wie würdest du messen, ob dein Gong-Rollout funktioniert?' aufkommen. Zeige, dass du über Adoption und Workflow-Fit nachdenkst, nicht nur über Feature-Listen.",
    example:
      "Bei Smile Identity habe ich den Daten-Stack von Grund auf auf Redshift + Tableau aufgebaut. Das Ziel war nicht analytische Raffinesse — es war, dem Vorstand eine einzige Quelle der Wahrheit zu geben, damit wir mit sauberen Metriken Series B aufnehmen konnten.",
    sampleQuestions: [
      {
        question:
          "Wie sieht dein idealer RevOps Tech Stack für ein 15-köpfiges Enterprise-Vertriebsteam aus, und was würdest du zuerst priorisieren?",
        answerThemes: [
          "Priorität 1: Salesforce als einziges System of Record — nichts anderes funktioniert ohne saubere CRM-Daten",
          "Priorität 2: Sales Engagement Platform (Outreach/Salesloft) — Sequenzen, Aktivitätsprotokollierung, E-Mail-Tracking",
          "Priorität 3: Conversation Intelligence (Gong) — Gesprächsaufzeichnung, Deal-Signale, Coaching",
          "Priorität 4: BI-Schicht (Tableau/Looker) — Pipeline-Dashboards, wöchentliche Reviews, Executive-Reporting",
          "Schön zu haben bei 15 Personen: CPQ (Angebotsmanagement), Anreicherungs-Tool (ZoomInfo/Clearbit)",
          "Reihenfolge ist wichtig: CRM zuerst, dann SEP, dann Gong — keine Komplexität hinzufügen, bevor das Fundament sauber ist",
          "Adoption ist das Risiko, nicht die Tool-Wahl — jedes neue Tool benötigt einen Workflow-Change-Management-Plan",
        ],
      },
      {
        question:
          "Du hast gerade Gong für das DACH-Enterprise-Team eingeführt. Wie misst du, ob der Rollout tatsächlich funktioniert?",
        answerThemes: [
          "Adoption-Metrik: % der in Gong aufgezeichneten Gespräche in den ersten 30 Tagen (Ziel: >80%)",
          "Nutzungs-Metrik: schauen sich Manager tatsächlich Gespräche an, oder ist es ein Aufzeichnungsarchiv, das niemand öffnet?",
          "Coaching-Metrik: Anzahl der Gesprächs-Review-Sessions pro AE pro Monat — Gong hat keinen Wert, wenn es nicht für Coaching genutzt wird",
          "Deal-Signal-Metrik: werden Deal-Alerts (z. B. Wettbewerber-Erwähnungen, Preiseinwände) aufgegriffen?",
          "Pipeline-Metrik: 60-Tage-Korrelation zwischen Gong-Engagement-Scores und Deal-Fortschritt — sagt hohes Engagement den Abschluss voraus?",
          "AE-Stimmung: verwenden AEs Gong-Clips in ihrer eigenen Vorbereitung, oder fühlt es sich wie Überwachung an?",
          "Erfolgsdefinition nach 90 Tagen: Gong ist Teil der wöchentlichen Deal-Reviews, nicht nur ein Protokollierungs-Tool",
        ],
      },
    ],
  },
  "lead-routing": {
    title: "Lead Routing & Datenqualität",
    definition:
      "Lead Routing ist der Prozess der Zuweisung eingehender Leads (aus Marketing, Events oder Produkt-Anmeldungen) an den richtigen AE auf Basis definierter Regeln: Geografie, Unternehmensgröße, Branche, namentliche Account-Listen oder Round-Robin innerhalb eines Segments. Die Datenqualität zum Zeitpunkt des Routings bestimmt, ob der richtige AE den richtigen Lead erhält — schlechte Anreicherung bedeutet, dass Enterprise-Leads bei SMB-AEs landen. SLAs definieren, wie lange ein AE Zeit hat zu reagieren, bevor der Lead weitergeleitet wird.",
    whyItMatters:
      "In einem Markt wie DACH, in dem Anthropic die Enterprise-Motion von Grund auf aufbaut, sind Leads knapp und fehlgeleitete Leads teuer. Die Routing-Logik von Anfang an richtig hinzubekommen — und die Anreicherungsschicht zu entwickeln, die sie unterstützt — ist eine grundlegende RevOps-Aufgabe für diese Rolle.",
    interviewAngle:
      "Am wahrscheinlichsten in einer umfassenderen RevOps-Design-Frage. Zeige, dass du verstehst, dass Routing-Regeln nachgelagert zu Segmentierungsentscheidungen sind: ohne klares ICP und Gebietsmodell kann kein gutes Routing aufgebaut werden.",
    sampleQuestions: [
      {
        question:
          "Wie würdest du das Lead-Routing-Modell für DACH angesichts von Anthropics dualer API- und Enterprise-Motion gestalten?",
        answerThemes: [
          "Erste Entscheidung: die zwei Motions trennen — API/Developer-Leads gehen in einen PLG/Dev-Success-Track; Enterprise-Leads gehen zu AEs",
          "Signal für Enterprise-Routing: Unternehmensgröße (>500 Mitarbeiter), Branche (FS, Healthcare, Technology) und Jobtitel (CDO, CTO, VP Engineering bei einem strategischen Account)",
          "Named-Account-Prüfung: wenn ein Inbound von einem Named Account kommt, direkt zum AE dieses Accounts weiterleiten — unabhängig vom Formularinhalt",
          "Anreicherungsschicht: ZoomInfo oder Clearbit verwenden, um firmografische Daten vor dem Routing anzufügen — nicht auf selbst gemeldete Unternehmensgröße verlassen",
          "SLA: Enterprise-Leads erhalten eine 4-Stunden-Reaktions-SLA; Developer-Leads erhalten eine gleichtagige automatisierte Sequenz",
          "Failsafe: wöchentlicher Audit der Routing-Genauigkeit — 10 Leads pro Woche stichprobenartig prüfen, um systematische Fehlweiterleitungen zu erkennen",
          "DACH-Besonderheit: deutsche und österreichische Accounts werden unterschiedlich geroutet (unterschiedliches AE-Gebietsmodell)",
        ],
      },
      {
        question:
          "Ein Entwickler eines deutschen Fertigungsunternehmens mit 2 Mrd. € Umsatz reicht ein Formular ein und möchte 'mehr über die Claude API erfahren'. Wie routest du diesen Lead?",
        answerThemes: [
          "Nicht nur nach dem Formularinhalt routen — '2 Mrd. € deutsches Fertigungsunternehmen' ist ein Enterprise-Signal, das die API-Absicht überlagert",
          "Lead anreichern: Unternehmensgröße, Branche und ob der Account auf irgendeiner Named-List steht bestätigen",
          "Prüfen, ob es einen bestehenden Account Owner gibt: wenn ein DACH-AE diesen Account hat, mit Kontext an ihn weiterleiten",
          "Wenn kein AE den Account besitzt: als heißen Inbound an den DACH-Team-Lead zur Zuweisung markieren",
          "Erster Outreach: auf den Enterprise-Wert (Skalierung, Sicherheit, Governance) fokussieren und gleichzeitig das API-Interesse anerkennen",
          "Ziel des ersten Meetings: Umfang der internen KI-Initiative verstehen und Economic Buyer identifizieren — keinen Deal abschließen",
          "Keine automatisierte API-Developer-Sequenz an ein Unternehmen mit 2 Mrd. € Umsatz schicken — das ist eine verpasste Enterprise-Opportunity",
        ],
      },
    ],
  },
  "revenue-analytics": {
    title: "Revenue-Analytics-Infrastruktur",
    definition:
      "Revenue Analytics ist die Reporting-Schicht, die CRM-, Produkt-, Marketing- und Finanzdaten in Entscheidungsgrundlagen für die Vertriebsführung umwandelt. Sie umfasst einen Standard-Dashboard-Satz (Pipeline nach Phase, AE-Produktivität, Deal-Velocity, Win/Loss-Raten, Forecast vs. Actuals), einen Rhythmus zur Überprüfung dieser (wöchentliche Pipeline, monatliches Business Review, quartalsweiser Executive-Readout) und die Dateninfrastruktur zur zuverlässigen Erstellung dieser Berichte (sauberes CRM + BI-Tooling + vereinbarte Definitionen).",
    whyItMatters:
      "Die Stellenbeschreibung erfordert, branchenspezifische Metriken und Pipeline-Dynamiken zu analysieren, um proaktive Erkenntnisse zu entwickeln — kein reaktives Reporting. Das bedeutet, die Infrastruktur aufzubauen, sich auf Metrik-Definitionen zu einigen und den Rhythmus zu betreiben — nicht nur Abfragen auf Anfrage auszuführen. Deine aktuelle SIXT-Rolle hat das im Jobtitel.",
    interviewAngle:
      "Könnte als: 'Wie baust du eine Reporting-Infrastruktur für ein Team auf, das keine hat?' oder 'Welche Metriken legst du auf ein wöchentliches Pipeline-Dashboard?' aufkommen. Starke Antworten unterscheiden zwischen vorlaufenden Indikatoren (Pipeline-Erstellung, Phasen-Conversion, Aktivität) und nachlaufenden Indikatoren (Closed-Won-Umsatz, ACV).",
    example:
      "Bei SIXT habe ich eine Revenue-Analytics-Infrastruktur aufgebaut, die KPI-Tracking und Pipeline-Transparenz für DACH, USA und APAC ermöglicht — das Ziel war proaktive Sichtbarkeit, nicht nur nachträgliches Reporting.",
    sampleQuestions: [
      {
        question:
          "Welche Metriken würdest du auf ein wöchentliches Pipeline-Dashboard für das DACH-Enterprise-Team legen, und warum genau diese?",
        answerThemes: [
          "Pipeline-Coverage nach Segment: gesamte Pipeline vs. Ziel × 3–4x — der mit Abstand wichtigste vorlaufende Indikator",
          "Phasenverteilung: Deals nach Phase diese Woche vs. letzte Woche — bewegt sich der Funnel?",
          "Diese Woche neu erstellte Pipeline: bauen AEs heute die Pipeline des nächsten Quartals auf?",
          "Deals ohne Aktivität in >14 Tagen: Zombie-Pipeline, die Coverage aufbläht und Forecasting irreführt",
          "Forecast vs. Commit: was AEs committet haben vs. was die Phasengewichtung sagt — Über-/Untervertrauen erkennen",
          "Win/Loss diese Woche: Wettbewerbs-Verluste in Echtzeit verfolgen, nicht nur quartalsweise",
          "Auf 6–8 Metriken beschränken: wenn das Dashboard 20 Minuten zum Lesen braucht, wird es nicht gelesen",
        ],
      },
      {
        question:
          "Du trittst dem DACH-Team von Anthropic bei und es gibt keine Reporting-Infrastruktur — nur Salesforce mit inkonsistenten Daten. Wie baust du von Grund auf auf?",
        answerThemes: [
          "Schritt 1: Metrik-Definitionen vereinbaren, bevor ein Tool angefasst wird — was bedeutet 'qualifizierte Opportunity'? Was zählt als ARR?",
          "Schritt 2: CRM-Datenqualität prüfen — verstehen, was zuverlässig ist, bevor Berichte darauf aufgebaut werden",
          "Schritt 3: die 5 kritischen Datenfelder beheben (Phase, Close Date, Economic Buyer, nächster Schritt, Wettbewerber)",
          "Schritt 4: zuerst das wöchentliche Pipeline-Dashboard aufbauen — dies treibt den Überprüfungsrhythmus, der die Datenqualität verbessert",
          "Schritt 5: AE-Produktivitätsmetriken einschichten, sobald Pipeline-Daten sauber sind",
          "Schritt 6: Reporting-Rhythmus automatisieren — geplante E-Mail jeden Montag, keine Ad-hoc-Anfragen",
          "Keine schöne BI-Schicht auf schmutzigen Daten aufbauen — erst die Daten bereinigen, dann ansprechend gestalten",
        ],
      },
    ],
  },
};

export default t;
