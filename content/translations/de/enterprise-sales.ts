import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "deal-stages": {
    title: "Deal-Stage-Definitionen",
    definition:
      "Deal Stages sind die vereinbarten Meilensteine, die eine Opportunity vom ersten Kontakt bis zum Abschluss durchlaeuft. Ein typisches Enterprise-SaaS-Stage-Modell: (1) Prospecting / Target, (2) Discovery - Schmerz bestaetigt, Kaeufer identifiziert, (3) Qualification - MEDDPICC abgeschlossen, (4) Validation - POC oder technische Evaluierung, (5) Proposal - kommerzielle Konditionen kommuniziert, (6) Legal / Paper Process - Vertragsverhandlung laeuft, (7) Closed Won / Lost. Jede Stage hat explizite Eintrittskriterien (was erfuellt sein muss, um einzutreten) und Austrittskriterien (was der AE abschliessen muss, um voranzukommen).",
    whyItMatters:
      "Die Stellenbeschreibung fordert die Einfuehrung von Stage-Definitionen und Qualifikationskriterien fuer eine konsistente Ausfuehrung. Ohne vereinbarte Definitionen bedeutet 'Stage 3' fuer verschiedene AEs unterschiedliche Dinge - was Pipeline-Reviews nutzlos und Forecasting unmoeglich macht. Klare Stages machen auch Coaching konkret: 'Sie sind in Stage 3, haben aber noch keinen wirtschaftlichen Entscheider identifiziert - was ist Ihr Plan?'",
    interviewAngle:
      "Koennte als Frage auftauchen: 'Wie wuerden Sie ein Stage-Modell fuer Anthropics Enterprise-Motion in DACH gestalten?' Zeigen Sie, dass Stage Gates Zwangsmechanismen sind - das Ziel ist nicht, viele Deals in Stage 3 zu haben, sondern die richtigen Deals, die sich planmaessig vorwaertsbewegen.",
    sampleQuestions: [
      {
        question:
          "Gestalten Sie ein Deal-Stage-Modell fuer Anthropics Enterprise-Motion in DACH. Was sind die Stages und was sind die Eintrittskriterien fuer jede?",
        answerThemes: [
          "Stage 1 - Target: Account ist ICP-qualifiziert, AE hat grundlegende Recherche durchgefuehrt, Account ist in Salesforce mit zugewiesenem Owner angelegt",
          "Stage 2 - Discovery: Erstes bedeutsames Gespraech gefuehrt, Schmerz bestaetigt, mindestens ein Stakeholder identifiziert, naechstes Meeting gebucht",
          "Stage 3 - Qualification: MEDDPICC teilweise vollstaendig (Metrics, Economic Buyer, Decision Process identifiziert), AE hat einen POC oder naechsten Evaluierungsschritt vorgeschlagen",
          "Stage 4 - Validation: POC laeuft mit vereinbarten Erfolgskriterien und benanntem Champion; AE hat Zugang zum wirtschaftlichen Entscheider",
          "Stage 5 - Proposal: Kommerzielle Konditionen kommuniziert, MEDDPICC vollstaendig abgeschlossen, Paper Process kartiert und eingeleitet",
          "Stage 6 - Legal: Vertrag in rechtlicher Pruefung, DPA unterzeichnet oder in Bearbeitung, Abschlussdatum innerhalb von 30 Tagen und vom Kaeufer bestaetigt",
          "Stage 7 - Closed Won/Lost: Abschluss finalisiert; Verlustgruende in Salesforce fuer Win/Loss-Analyse dokumentiert",
          "Schluesselprinzip: Stage Gates sind Eintrittskriterien, keine Leistungsnachweise - ein Deal kommt nicht voran, weil der AE hart gearbeitet hat, sondern weil bestimmte Dinge wahr sind",
        ],
      },
      {
        question:
          "Ein AE hat 60 % seiner Pipeline in Stage 5 (Proposal) und Stage 6 (Legal). Sollten Sie zufrieden oder besorgt sein?",
        answerThemes: [
          "Erstreaktion: 60 % Late-Stage sieht nach einem starken Quartal aus - Deals stehen kurz vor dem Abschluss",
          "Bedenken: Eine Pipeline mit hohem Late-Stage-Anteil bedeutet, dass der Early Funnel leer ist - das naechste Quartal ist gefaehrdet",
          "Die richtige Frage: Sind diese 60 % nach Wert oder nach Anzahl? Wenige grosse Deals verzerren das Bild",
          "Deal-Alter in diesen Stages pruefen: Deals, die sich mehr als 45 Tage in Stage 5-6 befinden, sind ins Stocken geraten, nicht in Bewegung",
          "Die eigentliche Frage: Was tritt diese Woche in Stage 2 und 3 ein? Lautet die Antwort 'nichts', droht in 90 Tagen eine Pipeline-Krise",
          "Gesunde Pipeline-Verteilung: ca. 40 % Early Stage (1-3), 35 % Mid-Stage (4), 25 % Late Stage (5-6)",
          "Massnahme: Die Late-Stage-Staerke feiern und gleichzeitig sofort einen Pipeline-Creation-Sprint fuer Q+1 starten",
        ],
      },
    ],
  },
  "multi-threading": {
    title: "Multi-Threading",
    definition:
      "Multi-Threading bedeutet, Beziehungen zu mehreren Stakeholdern bei einem Interessenten aufzubauen - nicht nur zum Champion oder primaeren Kontakt. Bei Enterprise-Deals ist die Entscheidung mit einem wirtschaftlichen Entscheider, technischen Evaluatoren, Beschaffung, Rechtsabteilung und oft der Unternehmensfuehrung verbunden. Single-threaded Deals (ein Kontakt pro Account) sind risikobehaftet: Wenn der Kontakt das Unternehmen verlaesst, intern an Bedeutung verliert oder interne Unterstuetzung verliert, stirbt der Deal. Multi-Threading ist die Praxis, das vollstaendige Buying Committee proaktiv zu kartieren und einzubinden.",
    whyItMatters:
      "Enterprise-KI-Deals bei Anthropic binden CTO, CISO, Rechtsabteilung, Beschaffung und oft ein Mandat auf Vorstandsebene ein. Ein AE, der nur mit dem technischen Champion spricht, wird vom CISO ueberrascht, der Sicherheitsbedenken hat, oder vom CFO, der den Preis fuer falsch haelt. In dieser Rolle erstellen Sie Playbooks, die AEs coachen, die vollstaendige Stakeholder-Map fruehzeitig zu identifizieren und einzubinden.",
    interviewAngle:
      "Koennte auftauchen als: 'Ein Financial-Services-Interessent stockt 6 Wochen beim Security Review. Wie unterstuetzen Sie den AE?' Starke Antworten gehen direkt zum Stakeholder-Mapping: Wer sollte noch eingebunden werden? Gibt es einen Executive Sponsor, den wir noch nicht erreicht haben? Was braucht der CISO, das wir noch nicht geliefert haben?",
    example:
      "Bei Meta in APAC haben wir eine grosse Telco-Partnerschaft verloren, weil der Deal single-threaded durch den CDO lief. Als der CDO ausgetauscht wurde, mussten wir bei null anfangen. Danach haben wir ein Stakeholder-Mapping-Tool in jedes Deal-Review integriert.",
    sampleQuestions: [
      {
        question:
          "Der beste Deal eines AE ist single-threaded durch einen CDO-Champion, der von Claude begeistert ist. Der CDO ist 3 Wochen im Urlaub und der Deal stockt. Was unternehmen Sie?",
        answerThemes: [
          "Das ist ein Multi-Threading-Versagen, das immer nur einen Personalwechsel von diesem Ergebnis entfernt war",
          "Sofortmassnahme: Den CDO (vor seinem Urlaub) bitten, eine interne Einfuehrung zu seinem Teamleiter oder einem technischen Sponsor zu machen",
          "Stakeholder-Map verstehen: Wer hat an einem POC oder einer Demo teilgenommen? Diese Personen sind warme Kontakte",
          "Das technische Team direkt kontaktieren: Sicherstellen, dass das Team waehrend des CDO-Urlaubs alles hat, was es braucht",
          "Diese Pause produktiv nutzen: Sicherheitsdokumentation, Model Card, DPA-Entwurf zusenden - den Paper Process ohne den Champion vorantreiben",
          "Nach dem Deal: Post-Mortem zum Multi-Threading durchfuehren - warum war dieser Deal single-threaded, und was aendert sich am Playbook?",
          "Der CDO-Urlaub ist ein Symptom, nicht das Problem - das Problem ist eine nur einen Kontakt tiefe Qualifikation",
        ],
      },
      {
        question:
          "Wie coachen Sie einen AE, eine Stakeholder-Map bei einem neuen Enterprise-Deal aufzubauen, und wie sieht eine vollstaendige Map aus?",
        answerThemes: [
          "Eine vollstaendige Map umfasst 5-8 Personen ueber mindestens 3 Dimensionen: Business (CDO, Line-of-Business-Owner), Technik (CTO, CISO, IT) und Kommerziell (CFO, Beschaffung, Rechtsabteilung)",
          "Fuer jeden Stakeholder: Name, Titel, Erfolgskriterium fuer dieses Projekt, Unterstuetzungsniveau (Champion, neutral, Skeptiker) und direkte Vorgesetzte",
          "Coaching-Frage: 'Wer bei [Unternehmen] wuerde schlecht schlafen, wenn dieses KI-Projekt schieflaeuft?' - diese Person ist oft der verborgene Blocker",
          "Discovery-Taktik: Im ersten Meeting den Champion fragen, wer noch bei einer solchen Entscheidung eingebunden werden muss - oft nennen sie das gesamte Komitee",
          "Im DACH-FS-Bereich: Immer explizit nach dem 'KI-Governance-Komitee' fragen - die meisten grossen deutschen Banken haben eines, das erst spaet im Prozess erwaehnt wird",
          "Warnsignal: Ein AE, der sagt, sein Kontakt regle alles - niemand im Enterprise regelt alles allein",
          "Die Stakeholder-Map in Salesforce bei jeder Stage aktualisieren - wenn sie sich ueber einen 6-monatigen Zyklus nicht aendert, wird Multi-Threading nicht wirklich betrieben",
        ],
      },
    ],
  },
  "executive-sponsorship": {
    title: "Executive Sponsorship",
    definition:
      "Executive Sponsorship ist die Praxis, eine Fuehrungskraft des verkaufenden Unternehmens mit einer Fuehrungskraft beim Interessenten zu koppeln. Die Rolle des Sponsors besteht darin, C-Suite-Beziehungen zu nutzen, die AEs nicht erreichen koennen, strategisches Engagement zu signalisieren und Blockaden auf Fuehrungsebene aufzuloesen. Auf der Verkaeuferseite ist das typischerweise der VP Sales oder ein CCO. Sponsor-Beziehungen muessen durch Lieferkompetenz verdient werden, nicht nur durch Titel - ein 'Sponsor', der nie liefert, zerstoert Vertrauen schneller als gar kein Sponsor.",
    whyItMatters:
      "Bei DACH-Enterprise-Deals - insbesondere im Finanzdienstleistungsbereich - sind C-Level-Beziehungen oft entscheidend. Deutsche und Schweizer Beschaffungskulturen sind tendenziell hierarchischer als in den USA oder Grossbritannien, und ein Deal, der auf der Seite des Interessenten nicht auf SVP/C-Level verankert ist, kann in der Beschaffung auf unbestimmte Zeit stocken. Den Aufbau eines systematischen Executive-Engagement-Programms ist eine GTM-Ops-Verantwortung.",
    interviewAngle:
      "Koennte als Frage auftauchen: 'Wie strukturieren Sie Executive Sponsorship fuer einen strategischen Account?' oder in einem Szenario eingebettet: 'Ihr Champion liebt das Produkt, aber der CFO blockiert - was unternehmen Sie?' Zeigen Sie, dass Sie einen Plan zur Aktivierung eines Executive Sponsors haben, nicht nur auf das Erscheinen eines solchen hoffen.",
    sampleQuestions: [
      {
        question:
          "Ihr Champion bei einer Frankfurter Bank liebt Claude, aber der CFO blockiert beim Preis und der Deal stockt seit 6 Wochen. Wie nutzen Sie Executive Sponsorship, um ihn zu loesen?",
        answerThemes: [
          "Schritt 1: Den CFO-Einwand spezifisch verstehen - geht es um den Gesamtpreis, die Zahlungskonditionen oder die ROI-Klarheit? Diese erfordern unterschiedliche Antworten",
          "Schritt 2: Klaeren, ob der Champion den CFO ins Gespraech bringen kann oder ob die Beziehung zu stark silo-artig ist",
          "Schritt 3: Ein Executive-Sponsorship-Meeting anfordern - Anthropics VP oder CCO mit dem CFO oder COO der Bank, gerahmt als strategisches Partnerschaftsgespraech, nicht als Sales-Call",
          "Schritt 4: Den Executive Sponsor mit einem CFO-spezifischen Briefing vorbereiten: ROI-Modell, Risikominimierungs-Framing, Referenz von einer vergleichbaren FS-Firma",
          "Die Aufgabe des Executive Sponsors: nicht pitchen, sondern auf Peer-Ebene Vertrauen aufbauen und Anthropics langfristiges Engagement fuer die Beziehung signalisieren",
          "In der deutschen FS-Kultur: C-Level-zu-C-Level-Kontakt signalisiert Ernsthaftigkeit - Beschaffungsteams reagieren anders, wenn der Deal Executive-Aufmerksamkeit hat",
          "Wenn Executive Sponsorship nicht loest: Der CFO-Einwand ist ein Symptom eines tieferen Problems (falscher Use Case, falsches Value Proposition, falsches Timing)",
        ],
      },
      {
        question:
          "Wie bauen Sie ein systematisches Executive-Sponsorship-Programm auf, anstatt auf Ad-hoc-Interventionen zu setzen?",
        answerThemes: [
          "Kriterien fuer Executive Sponsorship definieren: Deals ueber 300K EUR ACV, strategische Accounts oder Deals, die mehr als 4 Wochen auf Executive-Ebene stocken",
          "Sponsor-Roster aufbauen: Welche Anthropic-Fuehrungskraefte stehen fuer Sponsorship zur Verfuegung, in welchen Branchen sind sie glaubwuerdig, wie ist ihre Kapazitaet?",
          "Briefing-Template erstellen: Jedes Sponsorship-Engagement benoetigt eine einseitige Zusammenfassung - Account-Kontext, Deal-Stage, Ziel der Fuehrungskraft, Gespraechspunkte",
          "Executive-Engagements in Salesforce tracken: Welche Accounts hatten Fuehrungskontakt, was war das Ergebnis, hat es den Deal beschleunigt?",
          "Post-Engagement-Debriefing: Was hat die Fuehrungskraft des Kunden gesagt? Welche Erkenntnisse wurden gewonnen? Rueckmeldung an den AE und RevOps",
          "Wirkung messen: Werden Deals mit Executive Sponsorship schneller oder mit hoeheren ACV abgeschlossen? Das ist der ROI-Nachweis fuer die Fuehrungszeit",
          "Das Programm scheitert, wenn es als Feuerwehr-Tool behandelt wird - es sollte proaktiv (strategische Accounts) sein, nicht nur reaktiv (stockende Deals)",
        ],
      },
    ],
  },
  "poc-pov": {
    title: "POC / POV Design",
    definition:
      "Ein Proof of Concept (POC) ist eine technische Validierung, bei der der Kunde das Produkt mit seinen eigenen Daten oder Use Cases testet. Ein Proof of Value (POV) geht weiter - er knuepft die Evaluierung an spezifische, vereinbarte Geschaeftskennzahlen (z. B. 'Dokumentenverarbeitungszeit um 40 % reduzieren'). POVs sind wirkungsvoller, weil sie ein messbares Commitment des Kunden und ein klares Erfolgskriterium schaffen. Das Risiko bei beiden: Wenn man ohne gegenseitige Erfolgskriterien und eine Vereinbarung ueber den naechsten Schritt in einen POC einsteigt, betreibt man kostenloses Consulting.",
    whyItMatters:
      "KI-Enterprise-Deals beinhalten fast immer einen POC. Anthropics Claude-Deals im Finanzdienstleistungs- oder Gesundheitsbereich binden den Kunden beim Testen mit eigenen Dokumenten, Workflows oder Daten ein. Den POC mit klarem Umfang, einem definierten Erfolgsmassstab, einem benannten Champion und einem Zeitrahmen zu gestalten - und auf der Fuehrungsebene die Zusicherung zu erhalten, dass ein erfolgreicher POC zur kommerziellen Vereinbarung fuehrt - ist ein kritisches Playbook-Element.",
    interviewAngle:
      "Koennte als Frage auftauchen: 'Wie wuerden Sie einen POC fuer einen Enterprise-Claude-Einsatz im FS-Bereich gestalten?' Starke Antworten definieren: Umfang (spezifischer Use Case, nicht 'schauen wir mal, was er kann'), Erfolgskriterien (messbar, vorab vereinbart), Zeitrahmen (begrenzt, typischerweise 4-6 Wochen), Stakeholder (wer den Erfolg bestaetigt) und gegenseitiges Commitment (Kundenzeit plus benannte AE-Ressourcen).",
    sampleQuestions: [
      {
        question:
          "Gestalten Sie einen POC fuer eine deutsche Versicherungsgesellschaft, die Claude fuer die Verarbeitung von Schadensdokumenten evaluiert. Wie sieht ein gut strukturierter POC aus?",
        answerThemes: [
          "Use-Case-Definition: Claude verarbeitet eingehende Schadensdokumente (PDFs, gescannte Formulare) und extrahiert strukturierte Daten - nicht 'erkunden Sie, was KI kann'",
          "Erfolgskriterien (vorab vereinbart): mehr als 90 % Extraktionsgenauigkeit bei einer Stichprobe von 500 historischen Dokumenten, Verarbeitungszeit unter 30 Sekunden pro Dokument",
          "Zeitrahmen: 4 Wochen - Woche 1 Setup und Datenzugang, Wochen 2-3 Evaluierungslaeufe, Woche 4 Ergebnisreview und kommerzielle Diskussion",
          "Gegenseitiges Commitment: Kunde stellt 500 annotierte Dokumente und eine technische Kontaktperson bereit; Anthropic stellt einen Solutions Engineer und woechentliche Check-ins bereit",
          "Benannte Stakeholder: Champion (Leiter Claims Analytics), technische Bestaetigung (CTO) und wirtschaftlicher Entscheider stimmt vorab zu, dass ein erfolgreicher POC zu einem kommerziellen Gespraech fuehrt",
          "Die Vereinbarung ueber den naechsten Schritt: Vor POC-Start explizites Commitment einholen - wenn die Kriterien erfuellt sind, geht man innerhalb von 2 Wochen zur kommerziellen Vereinbarung ueber",
          "Ohne diese Vereinbarung fuehrt man einen kostenlosen POC durch und der Kunde sagt 'Vielen Dank, wir melden uns'",
        ],
      },
      {
        question:
          "Ein Interessent moechte eine 6-monatige erweiterte Evaluierung ohne definierte Erfolgskriterien oder kommerzielles Commitment durchfuehren. Wie reagieren Sie?",
        answerThemes: [
          "Das ist ein als POC verkleidetes kostenloses Consulting-Engagement - ablehnen oder die Bedingungen neu verhandeln",
          "Die Anfrage umrahmen: Wir unterstuetzen gerne eine gruendliche Evaluierung - um sie fuer beide Seiten wertvoll zu machen, einigen wir uns auf spezifische Erfolgskriterien und einen Zeitrahmen",
          "Einen begrenzten 4-Wochen-POC zu einem spezifischen Use Case vorschlagen statt einer 6-monatigen offenen Evaluierung",
          "Die Qualifikationsfrage stellen: Was muesste am Ende dieser Evaluierung wahr sein, damit Sie zu einer kommerziellen Vereinbarung uebergehen?",
          "Wenn sie diese Frage nicht beantworten koennen, sind sie noch nicht kaufbereit - das ist ein Discovery-Problem, kein POC-Problem",
          "Warnsignal: Eine erweiterte Evaluierung bedeutet oft, dass man das Produkt kostenlos nutzen moechte, waehrend man entscheidet, ob man bezahlen will",
          "Option: Einen bezahlten POC anbieten, mit Anrechnung auf den ersten Jahresvertrag bei Weitergehen - so werden ernsthafte Kaeufer von unverbindlichen Interessenten getrennt",
        ],
      },
    ],
  },
  "procurement-legal": {
    title: "Beschaffung und Rechtsabteilung in Enterprise-Deals",
    definition:
      "Enterprise-Deals in DACH umfassen typischerweise einen formalen Beschaffungsprozess: Lieferantenregistrierung, RFP/RFI, Sicherheitsfragebogen, Datenschutz-Folgenabschaetzung (DPIA), Datenverarbeitungsvertrag (DPA), MSA-Redlines und rechtliche Pruefung. In regulierten Branchen wie dem Finanzdienstleistungssektor kommen BaFin-Compliance-Review, KI-spezifische Risikobewertungen und moeglicherweise Modelldokumentierungsanforderungen gemaess EU AI Act hinzu. Diese Prozesse koennen einem Deal-Zyklus nach technischer und kommerzieller Einigung 2-6 Monate hinzufuegen.",
    whyItMatters:
      "Die Stellenbeschreibung nennt operative Exzellenz bei komplexen branchenspezifischen Verkaufszyklen und Compliance-Anforderungen. In DACH ist das Unterschaetzen der Beschaffungskomplexitaet ein haeufiger Fehler fuer US-amerikanische Unternehmen. Den Paper Process (das P in MEDDPICC) muss man in Stage 2 kartieren, nicht in Stage 5 - sonst hat man ein muendliches Ja und ein Abschlussdatum in 6 Monaten.",
    interviewAngle:
      "Koennte auftauchen als: 'Ein FS-Interessent stockt 6 Wochen beim Security Review - was tun Sie?' oder 'Was ist beim Verkauf von Enterprise-Software in DACH anders als in den USA?' Zeigen Sie, dass Sie Datensouveraenitaet (wo werden Daten gespeichert?), regulatorischen Kontext (DSGVO, EU AI Act, BaFin) und Beschaffungsformalitaet als strukturelle Realitaeten verstehen, nicht als Hindernisse.",
    example:
      "Deutsche Banken verlangen routinemaessig ein Drittanbieter-Sicherheitsaudit (nicht nur einen Lieferantenfragebogen) fuer KI-Systeme. Das Einbinden von Vorab-Clearance-Dokumentationen - Penetrationstest-Ergebnisse, Model Cards, Architekturdiagramme - in das Standard-Sales-Paket verkuerzt diesen Schritt um 4-6 Wochen.",
    sampleQuestions: [
      {
        question:
          "Was unterscheidet den Beschaffungsprozess fuer Enterprise-Software bei einer deutschen Bank von dem bei einem US-Tech-Unternehmen, und wie wirkt sich das auf Ihre GTM-Motion aus?",
        answerThemes: [
          "Foermlichkeit: Deutsche Banken haben strukturierte Beschaffungsausschuesse, formale RFP-Prozesse und mehrere Genehmigungsebenen - informelle Beziehungen umgehen diese nicht",
          "Zeitrahmen: Ein Beschaffungsprozess einer deutschen Bank fuer einen neuen KI-Lieferanten kann nach kommerzieller Einigung 6-12 Monate dauern - das muss im Forecast-Modell enthalten sein",
          "Datensouveraenitaet: Deutsche Banken verlangen haeufig, dass Daten in Deutschland oder der EU verbleiben, mit dokumentierten Datenresidenzsicherheiten - nicht nur ein Kontrollkaestchen",
          "BaFin und MaRisk: Regulatorische Anforderungen fuer KI-Systeme im Bankwesen fuegen eine Compliance-Review-Ebene hinzu, mit der US-Softwareunternehmen normalerweise nicht konfrontiert sind",
          "EU AI Act: Hochrisiko-KI-Use-Cases (Kredit-Scoring, Betrugserkennung) erfordern technische Dokumentation, Nachweise menschlicher Aufsicht und Risikomanagementsysteme",
          "Sicherheitsfragebogen: Deutsche Banken senden typischerweise 200-Fragen-Sicherheitsfragebögen - vorausgefuellte Antworten bereithalten, sonst stockt der Deal monatelang",
          "GTM-Implikation: Den Beschaffungsprozess in Stage 2 aufdecken, Dokumentation vorausfuellen und realistische Abschlussdaten auf Basis der Beschaffungsrealitaet setzen, nicht auf Wunschdenken",
        ],
      },
      {
        question:
          "Ein Deal ist technisch gewonnen - der CDO moechte fortfahren - steckt aber seit 8 Wochen in der rechtlichen Pruefung fest. Was unternehmen Sie?",
        answerThemes: [
          "Zunaechst: genau verstehen, was in der Rechtsabteilung blockiert - geht es um DPA-Formulierungen, Haftungsgrenzen, Datenresidenz-Klauseln oder AI-Act-Compliance-Dokumentation?",
          "Einen benannten Kontakt im Rechtsteam des Kunden beschaffen - ueber den Champion bei der Rechtsabteilung nachzufragen ist zu langsam",
          "Auf Anthropics Seite eskalieren: Benoetigt das Rechtsteam des Kunden ein Gespraech mit Anthropics Rechtsabteilung, um spezifische Klauseln zu klaeren?",
          "Proaktive Dokumentation: Standard-DPA von Anthropic, Model Card und Security Architecture Diagram zusenden, bevor darum gebeten wird - auf Anfragen zu warten kostet Wochen",
          "Executive Sponsorship aktivieren: Ein C-zu-C-Gespraech signalisiert Dringlichkeit und kann interne Priorisierung beim Kunden entsperren",
          "Parallelprozess: Waehrend die Rechtsabteilung prueft, Lieferantenregistrierung, Sicherheitsfragebogen und andere Paper-Process-Schritte abschliessen, die nicht von der Rechtsabteilung abhaengen",
          "Direkt fragen: Was ist das einzige offene Element, das den rechtlichen Abschluss verhindert? - und dieses spezifisch angehen, nicht alles auf einmal loesen wollen",
        ],
      },
    ],
  },
  "expansion-motions": {
    title: "Expansion Motions",
    definition:
      "Eine Expansion Motion ist der systematische Prozess der Umsatzsteigerung bei Bestandskunden. Haeufige Formen: Seat Expansion (mehr Nutzer werden einem Vertrag hinzugefuegt), Usage Growth (nutzungsbasierte Abrechnung, die mit dem Verbrauch skaliert), Upsell (Hinzufuegen eines hoeherwertigen Produkts oder Zusatzmoduls) und Cross-Sell (Hinzufuegen einer anderen Produktlinie). Expansion-ARR ist guenstiger zu gewinnen als neuer ARR, weil die CAC niedriger ist - die Beziehung, das Vertrauen und die rechtliche Infrastruktur sind bereits vorhanden. QBR-gesteuerter Upsell (den Quarterly Business Review als strukturiertes Expansionsgespraech nutzen) ist die haeufigste Motion.",
    whyItMatters:
      "NRR ueber 100 % haengt von einer funktionierenden Expansion Motion ab. In dieser Rolle gestalten Sie das Expansion-Playbook: Wann uebergibt CS an den AE fuer Upsell-Gespraeche, was triggert eine Expansions-Ansprache, wie werden Expansionsquoten festgelegt. Bei KI kommt Expansion oft natuerlich, wenn Kunden neue Use Cases entdecken - Ihre Aufgabe ist es, das zu formalisieren, statt auf organische Entdeckung zu setzen.",
    interviewAngle:
      "Koennte als Frage auftauchen: 'Wie denken Sie ueber Land-and-Expand im Kontext von Anthropic?' oder 'Wie wuerden Sie ein QBR gestalten, um Expansionsmoeglichkeiten zu maximieren?' Zeigen Sie, dass Expansion eine geplante Motion ist, kein Nachgedanke - sie erfordert eigene Stage-Definitionen, Erfolgsmetriken und Verguetungsstruktur.",
    sampleQuestions: [
      {
        question:
          "Gestalten Sie ein Expansion-Playbook fuer Anthropics DACH-Enterprise-Kunden 6 Monate nach dem initialen Deployment. Was triggert Expansions-Ansprachen und wie sind sie strukturiert?",
        answerThemes: [
          "Trigger 1: Usage Growth - wenn die API-Nutzung eines Kunden monatlich mehr als 50 % waechst, signalisiert das neue Use Cases und Expansionsbereitschaft",
          "Trigger 2: QBR-Erfolg - der Quarterly Business Review zeigt, dass der initiale Use Case funktioniert; das Gespraech auf 'Was kommt als Naechstes?' lenken",
          "Trigger 3: Neuer Stakeholder - ein neuer CDO oder KI-Verantwortlicher tritt dem Account bei; ein Beziehungs-Reset ist eine Expansionsmoeglichkeit",
          "Trigger 4: Neue Regulierung - EU-AI-Act-Compliance-Anforderungen schaffen einen neuen Use Case (KI-Governance-Dokumentation, Audit Trails)",
          "Expansionsgespraech-Struktur: Ergebnisse des Deployments reviewen, erzielten ROI quantifizieren, 2 angrenzende Use Cases mit grobem Business Case einfuehren, naechste Evaluierung oder Pilot vereinbaren",
          "CS-zu-AE-Uebergabe: CS betreut die Beziehung taeglich; AEs werden fuer formale Expansionsdiskussionen ueber 50.000 EUR einbezogen",
          "Expansionsquote: AEs eine Expansionsquote separat von der Neulogo-Quote geben - beide Motions incentivieren",
        ],
      },
      {
        question:
          "Wie wuerden Sie ein QBR mit einem bestehenden DACH-Enterprise-Kunden strukturieren, um Expansionsmoeglichkeiten zu maximieren, ohne dass es sich wie ein Sales-Call anfuehlt?",
        answerThemes: [
          "Rahmen: Das ist ein Partnerschaftsreview, kein Sales-Meeting - die Agenda sollte kundenzentriert sein",
          "Abschnitt 1: Performance-Review - welche Kennzahlen haben wir beim Deployment zugesagt? Wie entwickeln wir uns? (Offen sein, wenn die Leistung hinter den Erwartungen zurueckbleibt)",
          "Abschnitt 2: Kundenziele - was sind ihre KI-Prioritaeten fuer die naechsten 6 Monate? Mehr zuhoeren als sprechen",
          "Abschnitt 3: Produkt-Roadmap - relevante kommende Claude-Faehigkeiten teilen, die zu dem passen, was Sie gerade gehoert haben",
          "Abschnitt 4: Angrenzende Use Cases - basierend auf dem Gelernten 1-2 spezifische Use Cases vorschlagen, die man unterstuetzen koennte",
          "Das Expansionsgespraech ist natuerlich, wenn es den erklaerten Prioritaeten des Kunden folgt - man pitcht nicht, man schlaegt Loesungen fuer Probleme vor, die der Kunde gerade genannt hat",
          "Vermeiden: Ein QBR, das zu 80 % aus Produkt-Pitch und zu 20 % aus Kundenzuhoeren besteht - Kunden durchschauen das, und es untergraebt das Vertrauen",
        ],
      },
    ],
  },
};

export default t;
