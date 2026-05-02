import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "arr-mrr": {
    title: "ARR & MRR",
    definition:
      "Annual Recurring Revenue (ARR) ist der auf das Jahr hochgerechnete Wert aller derzeit aktiven Abonnementverträge. Monthly Recurring Revenue (MRR) ist das monatliche Äquivalent. ARR = MRR × 12. Beide schließen einmalige Gebühren, Professional Services und nutzungsbasierte Übermengen aus (obwohl manche Unternehmen nutzungsbasierte Umsätze in den ARR einbeziehen, wenn sie vertraglich zugesichert sind). ARR ist die wichtigste Kennzahl für die Bewertung und Wachstumsgeschichte eines SaaS-Unternehmens – Investoren verwenden ARR-Multiples, um den Unternehmenswert zu ermitteln.",
    whyItMatters:
      "Du wirst Ziele setzen, Bottom-up-Pläne erstellen und Leistungsreviews gegen ARR präsentieren. Zu wissen, was in den ARR einfliesst (und was nicht), ist wichtig, da Deals oft Implementierungsgebühren, Nutzungsüberschüsse oder Mehrjahresrabatte enthalten, die die Headline-Zahl verzerren. Eine saubere ARR-Berechnung ist auch ein Hygienepunkt beim Fundraising.",
    interviewAngle:
      "Könnte als Konzeptfrage auftauchen: 'Was ist der Unterschied zwischen ARR und Umsatz?' oder eingebettet in eine Planungsfrage: 'Wie modellierst du neuen ARR vs. Expansion-ARR in einem Kapazitätsplan?' Zeige, dass du die Komponenten verstehst: neuer ARR, Expansion-ARR, Kontraktions-ARR und Churn-ARR.",
    example:
      "Bei Smile Identity habe ich den ARR von 1,5 Mio. $ auf 6 Mio. $ gesteigert. Das ist eine 4-fache Steigerung in weniger als 2 Jahren. Der wichtigste Treiber war nicht das Volumen neuer Logos – sondern Expansion-ARR aus bestehenden Accounts, als diese ihre Nutzung der Identitätsverifizierung hochskaliert haben.",
    sampleQuestions: [
      {
        question:
          "Ein Deal schließt mit 500.000 € in Jahr 1 und 400.000 € in Jahr 2 ab, einschließlich 50.000 € einmaliger Implementierungsgebühren in Jahr 1. Wie hoch ist der ARR, und wie verändert er sich in Jahr 2?",
        answerThemes: [
          "ARR Jahr 1: 450.000 € (500.000 € minus die 50.000 € einmaligen Implementierungsgebühren – Implementierungsgebühren sind nicht wiederkehrend)",
          "ARR Jahr 2: 400.000 € – das ist eine Kontraktion von 50.000 € ARR, kein flaches Renewal",
          "Die 50.000 € Kontraktion explizit in der ARR-Brücke ausweisen – nicht verstecken",
          "Mehrjahresrabatte: Wenn Jahr 2 aufgrund eines gebündelten Rabatts niedriger ist, ist das ebenfalls ein ARR-Kontraktionsereignis",
          "Nutzungsüberschüsse: Wenn der Kunde mehr als vertraglich vereinbart nutzt, ist der Überschussertrag kein ARR, es sei denn, er wird in eine neue Verpflichtung überführt",
          "Sauberes ARR-Reporting ist wichtig für die NRR-Berechnung – wenn du Implementierung in ARR Jahr 1 einbindest, sieht dein NRR in Jahr 2 künstlich niedrig aus",
        ],
      },
      {
        question:
          "Wie modellierst du neuen ARR vs. Expansion-ARR in einem Kapazitätsplan für DACH, und warum ist die Unterscheidung wichtig?",
        answerThemes: [
          "Neuer ARR: kommt von neuen Logos – erfordert einen vollständigen Verkaufszyklus, hohe CAC, AE-Zeit",
          "Expansion-ARR: kommt von bestehenden Kunden, die ihre Nutzung steigern oder weitere Lizenzen hinzufügen – niedrigere CAC, schnellerer Abschluss, CS-getrieben",
          "Im Kapazitätsmodell: Expansion-ARR erfordert nicht das gleiche Verhältnis an zusätzlichem AE-Headcount wie neuer ARR",
          "Die beiden Quellen im Bottom-up-Plan trennen – sonst werden für die neue Logo-Bewegung zu wenige oder für bestehende Accounts zu viele Mitarbeiter eingestellt",
          "Wenn NRR > 110 %: Expansion-ARR erhöht die Basis – du benötigst nicht so viele neue Logos, um das Ziel zu erreichen",
          "Wenn NRR < 100 %: Expansion-ARR ist negativ – du bist auf einem Laufband, jedes neue Logo ersetzt nur verlorenen Umsatz",
          "Für DACH im ersten Jahr: Nahezu kein Expansion-ARR (keine bestehende Kundenbasis) – das Kapazitätsmodell muss fast vollständig auf neuem ARR aufgebaut sein",
        ],
      },
    ],
  },
  "nrr-grr": {
    title: "NRR & GRR",
    definition:
      "Net Revenue Retention (NRR) misst den Umsatz einer bestehenden Kundenkohorte über 12 Monate, einschließlich Expansion (Upsells, zusätzliche Lizenzen) minus Kontraktion und Churn, geteilt durch ihren Umsatz zu Beginn. NRR > 100 % bedeutet, dass die Kundenbasis ohne neue Logos von selbst wächst. Gross Revenue Retention (GRR) schließt Expansion aus – sie misst nur, was du behalten hast, nicht was du gewachsen bist. GRR ist auf 100 % begrenzt; NRR nicht.",
    whyItMatters:
      "NRR ist wohl die wichtigste SaaS-Kennzahl für die langfristige Unternehmensgesundheit. Wenn NRR > 120 % ist, hast du inhärentes Wachstum eingebaut. Wenn NRR < 90 % ist, läufst du auf einem Laufband – egal wie viele neue Logos du gewinnst, du verlierst Boden. In dieser Rolle bist du für Pipeline und Territoriumbdesign verantwortlich, das sowohl neuen ARR als auch Expansion antreibt – zu verstehen, welche Bewegungen welches bewirken, ist entscheidend.",
    interviewAngle:
      "Klassische Konzeptfrage: 'Was ist der Unterschied zwischen NRR und GRR, und welche ist wichtiger?' Die Antwort: Beide sind wichtig. GRR sagt dir die Retentionsqualität; NRR sagt dir die Expansionsqualität. Ein Unternehmen mit 95 % GRR und 115 % NRR hat ordentliche Retention, aber starke Expansion. Ein Unternehmen mit 80 % GRR und 95 % NRR verliert Kunden schneller, als es verbliebene Kunden ausbauen kann.",
    sampleQuestions: [
      {
        question:
          "Das DACH-Enterprise-Team von Anthropic hat einen GRR von 88 % und einen NRR von 102 %. Was sagt dir das, und was würdest du dagegen tun?",
        answerThemes: [
          "GRR von 88 % bedeutet: Du verlierst jährlich 12 % der Kunden noch vor jeder Expansion – das ist ein Retention-Problem, kein Expansions-Problem",
          "NRR von 102 % bedeutet: Expansion von verbliebenen Kunden deckt kaum das Churn-Loch – das Unternehmen wächst nicht exponentiell",
          "Ursachenfrage: Warum verlassen 12 % der Kunden das Unternehmen? Ist es Product Fit, Wettbewerbsverlust, Preisgestaltung oder ein Scheitern beim Übergang vom POC zur Produktion?",
          "Priorität: Churn beheben, bevor stark in die Expansionsbewegung investiert wird – ein undichtes Gefäß durch Expansion zu befüllen, beschleunigt die Verluste",
          "Sofortmaßnahme: Strukturierte Win/Loss- und Churn-Interviews für jeden abgewanderten Account der letzten zwei Quartale",
          "GTM-Implikation: Wenn Churn in einem bestimmten Vertical oder ACV-Band konzentriert ist, ICP enger fassen, um den Verkauf in diese Segmente zu stoppen",
          "Zielbenchmarks: GRR > 90 %, NRR > 110 % für gesundes Enterprise-SaaS",
        ],
      },
      {
        question:
          "Wie gestaltest du GTM-Bewegungen unterschiedlich, abhängig davon, ob NRR über oder unter 100 % liegt?",
        answerThemes: [
          "NRR > 110 %: Mehr in die Neukundengewinnung investieren – deine bestehende Basis wächst exponentiell, also hat jedes neue Logo einen multiplizierten LTV",
          "NRR > 110 %: Kleinere Erstdeals schneller landen (Land-and-Expand) – die Expansionsbewegung trägt den ARR",
          "NRR 95–100 %: Expansion und Retention sind ungefähr ausgeglichen – gleichmäßig in CS-getriebene Expansion und neue Logo-Bewegung investieren",
          "NRR < 95 %: Nicht stark in neue Logo-Akquise investieren – du befüllst ein undichtes Gefäß; erst Retention verbessern",
          "NRR < 95 %: Das Expansion-Playbook ist irrelevant, bis du verstehst, warum Kunden abwandern",
          "Board-Kommunikation: NRR unter 100 % ist ein Warnsignal für Investoren – es signalisiert entweder Product-Market-Fit-Probleme oder eine fehlerhafte CS-Bewegung",
          "Für DACH im ersten Jahr: NRR ist nicht messbar – ein Ziel setzen (>110 %) und die Expansionsbewegung von Anfang an einplanen, nicht als Nachgedanken",
        ],
      },
    ],
  },
  "cac-ltv": {
    title: "CAC, LTV & Amortisationsdauer",
    definition:
      "Customer Acquisition Cost (CAC) ist der gesamte Vertriebs- und Marketingaufwand geteilt durch die Anzahl der in einem Zeitraum gewonnenen Neukunden. Lifetime Value (LTV) ist der gesamte erwartete Umsatz eines Kunden über seine Lebensdauer – typischerweise berechnet als (ACV × Bruttomarge) ÷ Churn-Rate. Die Amortisationsdauer ist die Anzahl der Monate, um den CAC aus der Bruttomarge eines Kunden zurückzugewinnen. LTV:CAC-Ratio-Benchmarks: >3x ist gesund, >5x ist ausgezeichnet. Amortisationsdauer: 12–18 Monate sind gut für Enterprise; >24 Monate sind ein Warnsignal.",
    whyItMatters:
      "Diese Kennzahlen bestimmen Headcount-Planung und Vergütungsentscheidungen. Wenn CAC hoch und die Amortisationsdauer lang ist, werden das Hinzufügen von AEs vor der Verbesserung von Abschlussraten oder ACV nur die Verluste verstärken. In einer Rolle, in der du Kapazitätsmodelle erstellst und mit Finance an der Zielsetzung arbeitest, musst du die Unit Economics jedes Segments verstehen.",
    interviewAngle:
      "Am wahrscheinlichsten in eine Planungs- oder Szenariofrage eingebettet: 'Woher weißt du, ob es der richtige Zeitpunkt ist, Headcount in einem Territorium hinzuzufügen?' oder 'Was ist der ROI eines neuen AEs in DACH?' Verankere deine Antwort in der Amortisationsdauer und dem erwarteten ACV aus diesem Territorium.",
    sampleQuestions: [
      {
        question:
          "Der VP of Sales möchte im Q2 zwei weitere AEs für DACH hinzufügen. Wie bewertest du, ob die Unit Economics das rechtfertigen?",
        answerThemes: [
          "Schritt 1: Die Vollkosten eines neuen DACH-Enterprise-AEs berechnen (OTE + Benefits + Tooling + Management-Overhead ≈ 1,5–2x OTE)",
          "Schritt 2: Den erwarteten ACV eines neuen DACH-AEs bei voller Hochlaufphase schätzen – was produziert das aktuelle Team pro AE?",
          "Schritt 3: Den Ramp-Zeitplan modellieren – im DACH-Enterprise-Bereich wird ein AE erst ab Monat 7–8 wesentlichen ARR liefern",
          "Schritt 4: Amortisationsberechnung – Monate bis die kumulierte ARR-Leistung die vollständigen Einstellungskosten deckt",
          "Schritt 5: Mit alternativen Kapitaleinsätzen vergleichen – würde die gleiche Investition in Enablement oder Marketing schnellere Renditen liefern?",
          "Notwendige Belege: Pipeline-Coverage in DACH. Wenn die Coverage bereits 4x beträgt und bestehende AEs kapazitätsbeschränkt sind, macht Headcount Sinn",
          "Warnsignal: AEs hinzufügen, wenn Pipeline-Coverage unter 2x liegt – du stellst Leute ein, um Deals zu verfolgen, die noch nicht existieren",
        ],
      },
      {
        question:
          "Das LTV:CAC-Verhältnis für dein DACH-Commercial-Segment beträgt 1,8x. Was sagt dir das, und was würdest du empfehlen?",
        answerThemes: [
          "1,8x LTV:CAC liegt unter der 3x-Mindestschwelle – du vernichtest in diesem Segment Wert",
          "Mögliche Grundursachen: CAC ist zu hoch (lange Zyklen, niedrige Konversionsrate), ACV ist zu niedrig oder Churn ist zu hoch",
          "Diagnose: CAC in Komponenten aufschlüsseln – ist es ein Vertriebseffizienz- oder ein Marketingausgabenproblem?",
          "Wenn Zyklen zu lang sind: ICP enger fassen, früher härter qualifizieren, Zeit für Deals reduzieren, die nicht abschließen werden",
          "Wenn ACV zu niedrig ist: In den oberen Marktsegment wechseln, eine Mindest-Deal-Größe einführen oder zu Anwendungsfällen mit höherem Wert repositionieren",
          "Wenn Churn hoch ist: Product-Fit-Problem – du verkaufst an die falschen Kunden; ICP am Anfang des Funnels enger fassen",
          "Empfehlung: Nicht in das Wachstum dieses Segments investieren, bis LTV:CAC über 3x liegt – du würdest Verluste skalieren",
        ],
      },
    ],
  },
  "sales-velocity": {
    title: "Sales Velocity",
    definition:
      "Sales Velocity misst, wie schnell Umsatz durch die Pipeline fließt. Formel: (Anzahl der Opportunities × Abschlussquote × Durchschnittlicher Deal-Wert) ÷ Durchschnittliche Verkaufszykluslänge. Das Ergebnis ist der pro Tag generierte Umsatz. Die Stärke der Formel liegt darin, dass sie genau zeigt, an welchem Hebel man ziehen sollte: Wenn die Zykluslänge 90 Tage beträgt und du sie auf 70 komprimieren kannst, steigt die Velocity um ~29 %, ohne Abschlussquote oder Deal-Größe zu verändern. Enterprise-GTM optimiert typischerweise ACV und Abschlussquote statt Volumen.",
    whyItMatters:
      "Diese Rolle erfordert die Analyse von Vertriebskennzahlen und die Entwicklung proaktiver Insights. Sales Velocity liefert dir eine einzelne Zahl, um AEs, Territorien oder Verticals zu vergleichen – und die Zerlegung der Formel zeigt dir genau, wo Leistung verloren geht. Ein AE mit guter Abschlussquote, aber wenigen Deals und langen Zyklen hat einen anderen Coaching-Bedarf als einer mit hohem Volumen, aber niedrigem ACV.",
    interviewAngle:
      "Hochwahrscheinliche Konzeptfrage: 'Erkläre Sales Velocity – was ist die Formel, und an welchem Hebel würdest du zuerst ziehen, um sie zu verbessern?' Starke Antworten wählen keinen universellen Hebel – sie diagnostizieren zuerst. Wenn die Abschlussquote 40 % beträgt (gut), aber der ACV niedrig ist, ist der Hebel die Deal-Qualifikation. Wenn die Zykluslänge 120 Tage beträgt (lang), ist der Hebel das Paper-Process-Mapping.",
    sampleQuestions: [
      {
        question:
          "Zwei DACH-AEs haben identische Quoten, aber sehr unterschiedliche Sales Velocity. AE1 hat eine hohe Abschlussquote, aber wenige Opportunities und lange Zyklen. AE2 hat hohes Volumen, aber niedrigen ACV und eine durchschnittliche Abschlussquote. Wie sieht dein Coaching-Plan für jeden aus?",
        answerThemes: [
          "AE1 (hohe Abschlussquote, geringes Volumen, lange Zyklen): Der Engpass ist die Pipeline-Erstellung – er schließt gut ab, prospektiert aber nicht genug",
          "AE1 Coaching: Review der Outbound-Kadenz, Analyse der Territoriumsabdeckung, Zeitverwendungsaudit (wie viele Stunden pro Woche für Pipeline-Erstellung vs. aktive Deals)",
          "AE1 Zykluslänge: Das Paper-Process-Management kartieren – lange Zyklen im Enterprise-Bereich bedeuten oft spätes MEDDPICC, keine langsamen Käufer",
          "AE2 (hohes Volumen, niedriger ACV, durchschnittliche Abschlussquote): Der Engpass ist die Deal-Qualität – er verfolgt viele kleine oder schwache Deals",
          "AE2 Coaching: Review der Qualifikationshygiene, ICP-Einhaltung, Disziplin bei der Mindest-Deal-Größe",
          "AE2 Abschlussquote: Win/Loss-Review für die letzten 10 Deals – wo verliert er und warum?",
          "Die Velocity-Formel macht Coaching umsetzbar: Du kannst genau sehen, welche Variable jeder AE bewegen muss",
        ],
      },
      {
        question:
          "Die Sales Velocity im DACH-FS-Bereich ist um 25 % von Quartal zu Quartal gesunken. Wie diagnostizierst du mithilfe der Formel die Ursache?",
        answerThemes: [
          "Die Formel zerlegen: Ist die Anzahl der Opportunities gesunken, die Abschlussquote gesunken, der ACV gesunken oder die Zykluslänge gestiegen?",
          "Zuerst die Opportunity-Anzahl prüfen: Weniger Deals im Funnel sind ein Pipeline-Erstellungsproblem (Outbound, Marketing, Partner)",
          "Abschlussquote prüfen: Wenn mehr Deals verloren gehen, Wettbewerbsdaten prüfen – ist ein Wettbewerber aggressiver geworden?",
          "ACV prüfen: Wenn Deals kleiner abschließen, prüfen ob AEs Rabatte geben oder geringwertige Deals zum Erreichen der Quote nehmen",
          "Zykluslänge prüfen: Wenn Zyklen länger geworden sind, nach CISO/Legal-Engpässen schauen – hat eine neue Regulierung einen Beschaffungsschritt hinzugefügt?",
          "DACH-FS-spezifisch: Implementierungsfristen des EU AI Act können Beschaffungsentscheidungen pausieren, während Unternehmen auf regulatorische Klarheit warten",
          "Die Ursache nicht annehmen – die Formelzerlegung zur Diagnose nutzen",
        ],
      },
    ],
  },
  "pipeline-coverage": {
    title: "Pipeline Coverage",
    definition:
      "Pipeline Coverage ist das Verhältnis des gesamten Pipeline-Werts zum Umsatzziel für einen Zeitraum. Formel: Pipeline-Wert ÷ Umsatzziel. Eine 3-fache Coverage-Ratio bedeutet, dass du 3 € Pipeline für jeden 1 € Ziel hast. Enterprise-Vertrieb erfordert typischerweise eine 3–4-fache Coverage, um das Ziel mit hoher Sicherheit zu erreichen, da Abschlussquoten niedriger sind und Deals manchmal verschieben. Coverage unter 2x ist ein Warnsignal; über 5x deutet oft auf schlechte Qualifikation hin (Pipeline ist mit Deals geringer Wahrscheinlichkeit aufgebläht).",
    whyItMatters:
      "Coverage ist eine der ersten Zahlen, die Sales-Führungskräfte in einem Pipeline-Review prüfen. Es ist ein Frühindikator: Wenn Coverage in Woche 6 eines 13-wöchigen Quartals bei 1,5x liegt, hast du ein Problem, das keine Menge zusätzlicher Aktivität in den Schlusswochen beheben wird. In dieser Rolle wirst du Coverage-Ziele nach Segment setzen und frühzeitig signalisieren, wenn ein Vertical oder Territorium unterversorgt ist.",
    interviewAngle:
      "Wahrscheinlich eingebettet in: 'Wie sieht eine gesunde Pipeline für Enterprise-KI-Software aus?' oder 'Wenn die DACH-FS-Pipeline in Woche 6 bei 1,8x Coverage liegt, was tust du?' Zeige, dass du sowohl das Ziel (3–4x) als auch die Maßnahme verstehst (Pipeline-Erstellungs-Sprint, Field-Marketing-Event, Reaktivierung ruhender Opportunities).",
    sampleQuestions: [
      {
        question:
          "Warum ist eine 3–4-fache Coverage der Standard für Enterprise, und unter welchen Umständen würdest du noch mehr wollen?",
        answerThemes: [
          "Enterprise-Abschlussquoten liegen typischerweise bei 20–35 % – um 1x Umsatz zu schließen, brauchst du 3–5x Pipeline",
          "Deal-Verschiebungen sind im Enterprise-Bereich üblich: Beschaffungsverzögerungen, Budget-Einfrierungen, Champion-Wechsel können Deals um ein Quartal verschieben",
          "3x ist das Minimum; 4x ist komfortabel; 5x+ kann Pipeline-Aufblähung anstatt echter Opportunität signalisieren",
          "Wann du höhere Coverage willst: Eintritt in einen neuen Markt (DACH Jahr 1), wo Abschlussquoten unbekannt und anfänglich wahrscheinlich niedriger sind",
          "Wann du höhere Coverage willst: Wenn die durchschnittliche Deal-Größe sehr groß ist (wenige Großdeals = hohe Varianz) – mehr Optionalität ist erforderlich",
          "Wann 3x zu hoch sein könnte: Wenn deine Abschlussquoten ungewöhnlich stark sind (>50 %) oder Deals selten verschieben – du würdest AE-Zeit für Deals aufwenden, die nicht voranschreiten",
          "Das richtige Ziel ist auf deine historische Abschlussquote und Deal-Verschiebungsrate kalibriert, keine universelle Regel",
        ],
      },
      {
        question:
          "Die Coverage sieht mit 4x gesund aus, aber die Umsatzerreichung liegt konsequent bei 70 % des Forecasts. Wo liegt die Diskrepanz?",
        answerThemes: [
          "4x Coverage bei 70 % Erreichung bedeutet: Die Pipeline ist aufgebläht – viele Deals, die nicht real sind",
          "Wahrscheinliche Ursache: Stage-Definitionen sind zu locker und lassen unqualifizierte Deals in der Mitte des Funnels",
          "Deal-Alter prüfen: Wie viele Pipeline-Deals sind >90 Tage alt ohne Fortschritt? Diese herausrechnen – was ist deine tatsächliche Coverage?",
          "AE-Commit-Genauigkeit prüfen: Übercommittten AEs bei Deals, an die sie eigentlich nicht glauben?",
          "Quell-Mix prüfen: Wenn ein großer Teil der Pipeline Inbound ist, der nie einen echten Qualifikations-Call hatte, ist das Phantom-Pipeline",
          "Lösung: Stage-Eintrittskriterien verschärfen, ein 'veralteter Deal'-Flag für keine Aktivität in 30 Tagen hinzufügen, MEDDPICC-Abschluss als Voraussetzung für Stage 3 einfordern",
          "Das Ziel ist nicht 4x Pipeline – es ist 4x qualifizierte Pipeline",
        ],
      },
    ],
  },
  "win-rate": {
    title: "Abschlussquote & Stage-Konversion",
    definition:
      "Die Abschlussquote ist der Prozentsatz der Opportunities, die als gewonnen abgeschlossen werden, gemessen ab einer definierten Ausgangsstufe (oft 'Qualifizierte Opportunity' oder Stage 2). Gesamte Enterprise-Abschlussquoten liegen typischerweise bei 20–35 %; gegen spezifische Wettbewerber oder in bestimmten Verticals können sie erheblich variieren. Stage-Konversionsraten verfolgen, wie Deals zwischen Pipeline-Stufen wechseln – ein Konversionsrückgang bei einer bestimmten Stufe (z. B. von Angebot zu Legal) enthüllt systematische Probleme in diesem Teil der Bewegung.",
    whyItMatters:
      "Die Abschlussquote ist ein nachlaufender Indikator für Qualifikations- und Messaging-Qualität. Wenn die Abschlussquote niedrig ist, lautet die erste Frage: Wo im Funnel verlierst du? Wenn du bei Angeboten verlierst, ist es ein Preisgestaltungs- oder Wertversprechen-Problem. Wenn du bei Legal verlierst, ist es ein Beschaffungs- oder Vertrauensproblem. In dieser Rolle musst du Win/Loss-Tracking aufbauen, um diese Muster nach Vertical und AE zu identifizieren.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Wie würdest du eine niedrige Abschlussquote in einem neuen Territorium diagnostizieren?' oder 'Was ist eine akzeptable Abschlussquote für Anthropics Enterprise-Bewegung?' Zeige, dass du weißt, dass die Abschlussquote isoliert bedeutungslos ist – sie muss mit ACV, Zykluslänge und Stage-Konversion kombiniert werden, um eine Geschichte zu erzählen.",
    example:
      "Bei Smile Identity war die Abschlussquote im FS-Bereich 45 % vs. 28 % im allgemeinen Tech-Bereich. Wir haben ein dediziertes FS-Sales-Play und Playbook entwickelt, das die FS-Zahl antrieb – aber noch wichtiger: Wir haben aufgehört, Zyklen für Tech-Accounts zu verschwenden, die nicht ICP-geeignet waren.",
    sampleQuestions: [
      {
        question:
          "Anthropics DACH-Abschlussquote beträgt insgesamt 18 %, aber 38 % im Financial-Services-Bereich. Was sagt dir das, und was machst du mit der Information?",
        answerThemes: [
          "18 % insgesamt für eine frühe Enterprise-Bewegung in einem neuen Markt ist nicht alarmierend – aber die FS-Lücke ist das Signal",
          "38 % im FS bedeutet: Der ICP stimmt, die Botschaft kommt an, der POC konvertiert – diese Bewegung funktioniert",
          "Die 18 % insgesamt bedeuten: Andere Verticals ziehen den Durchschnitt nach unten – wahrscheinlich falscher ICP, falsche Botschaft oder falsche Gesprächspartner",
          "Maßnahme: Die Nicht-FS-Verluste analysieren – in welcher Stage verlieren sie? Sind das überhaupt ICP-Accounts?",
          "Wenn Verluste beim Angebot: Messaging-Problem in diesen Verticals",
          "Wenn Verluste bei Qualifikation/Discovery: AEs bearbeiten Deals, die nie eine Chance hatten – ICP-Disziplin ist die Lösung",
          "Strategische Implikation: Im FS-Bereich verdoppeln (wo es funktioniert), bevor in Verticals mit Abschlussquoten unter 15 % expandiert wird",
        ],
      },
      {
        question:
          "Die Stage-Konversion zeigt einen starken Rückgang von Angebot zu Legal – nur 40 % der Deals, die das Angebot erreichen, gelangen zur Legal-Prüfung. Wie gehst du der Sache nach?",
        answerThemes: [
          "40 % Angebot-zu-Legal-Konversion bedeutet: 60 % der Deals sterben nach Vorlage der kommerziellen Bedingungen – irgendetwas im Angebot bricht Deals",
          "Erste Hypothese: Preis oder kommerzielle Bedingungen – kommen Angebote über dem Budget oder mit unbekannten Vertragsstrukturen an?",
          "Zweite Hypothese: Das Angebot geht an den falschen Stakeholder – der CDO findet es gut, aber der CFO war nicht involviert und lehnt es ab",
          "Dritte Hypothese: Ein Wettbewerber macht nach dem Sehen unseres Angebots ein besseres Angebot – wir verlieren Angebotsinhalte",
          "Untersuchung: Win/Loss-Interviews zu 5 Deals, die beim Angebot gestorben sind – direkt fragen, was sich nach dem Sehen des Angebots geändert hat",
          "Gong-Review: Anhören der Angebotspräsentations-Calls – welche Einwände tauchen auf?",
          "Lösungskandidaten: Preisstruktur anpassen, Multi-Threading vor dem Senden des Angebots sicherstellen, CFO-spezifische ROI-Zusammenfassung zum Angebots-Deck hinzufügen",
        ],
      },
    ],
  },
  "conversion-rates": {
    title: "Konversionsraten nach Stage",
    definition:
      "Konversionsraten nach Stage messen, wie viel Prozent der Deals von jeder Pipeline-Stufe zur nächsten voranschreiten: MQL→SQL, SQL→Opportunity, Opportunity→Angebot, Angebot→Legal, Legal→Closed Won. Jeder Übergang ist ein Qualitätsfilter – Deals, die sich nicht durch jedes Stage-Gate qualifizieren, sollten nicht in der Pipeline sein. Das Tracking der Konversionen im Zeitverlauf deckt Prozessprobleme auf (eine neue Stage-Definition, die AEs verwirrt), Messaging-Probleme (Deals konvertieren beim Angebot, sterben aber bei Legal) und externe Faktoren (ein Wettbewerber, der in ein Vertical eintritt).",
    whyItMatters:
      "Stage-Level-Konversionsdaten sind eine der umsetzbarsten Diagnosen in RevOps. Sie sagen dir genau, wo im Vertriebsprozess Reibung entsteht – und wo du Enablement-Aufwand fokussieren sollst. In einem neuen Markt wie DACH Enterprise KI sind Baseline-Konversionsdaten Gold wert: Sie sagen dir, ob deine Bewegung funktioniert oder angepasst werden muss.",
    interviewAngle:
      "Am wahrscheinlichsten in einer Pipeline-Diagnose- oder RevOps-Design-Frage eingebettet. Zeige, dass du Konversionen als Baseline verfolgst, Anomalien markierst und mit gezielten Interventionen reagierst (Coaching, Play-Updates, Wettbewerbsinhalte) statt mit generischem 'Macht mehr Discovery'-Ratschlägen.",
    sampleQuestions: [
      {
        question:
          "Du bist drei Monate im DACH-Markt und hast deine ersten Stage-Konversionsdaten. MQL→SQL beträgt 35 %, SQL→Opp 28 %, Opp→Angebot 55 %, Angebot→Abschluss 22 %. Was sagt dir das?",
        answerThemes: [
          "MQL→SQL bei 35 %: Vernünftig für einen neuen Markt – etwas eingehende Neugier, die nicht Enterprise-fähig ist, ist zu erwarten",
          "SQL→Opp bei 28 %: Das ist die besorgniserregende Zahl – 72 % der SQLs werden nie zu qualifizierten Opportunities, was darauf hindeutet, dass die Qualifikation früh scheitert",
          "Wahrscheinliches SQL→Opp-Problem: Stage-Definition für SQL ist zu locker (alles mit einem Meeting wird zu einem SQL), oder AEs führen keine ordentliche Discovery durch, bevor sie eine Opportunity erstellen",
          "Opp→Angebot bei 55 %: Akzeptabel – über die Hälfte der qualifizierten Deals erreicht das Angebot, was darauf hindeutet, dass Discovery funktioniert, sobald AEs sich ordentlich engagieren",
          "Angebot→Abschluss bei 22 %: Niedrig, aber nicht alarmierend für einen neuen Markt ohne Fallstudien – Käufer wollen Referenzen vor der Verpflichtung",
          "Prioritäre Korrektur: SQL-zu-Opp-Qualifikation verschärfen – eine MEDDIC-Checkliste als Pflicht vor der Opportunity-Erstellung einführen",
          "Sekundäre Korrektur: Angebot→Abschluss – beginnen, FS-Fallstudien und Referenzprogramme aufzubauen, um Zögerlichkeit in späten Stages zu reduzieren",
        ],
      },
      {
        question:
          "Stage-Konversionsdaten zeigen, dass Deals im Healthcare-Bereich von Angebot zu Legal mit der halben Rate konvertieren wie Deals im Financial-Services-Bereich. Wie nutzt du diese Information?",
        answerThemes: [
          "Erste Frage: Ist der Healthcare-Rückgang ein Messaging-Problem, ein Beschaffungsproblem oder ein ICP-Problem?",
          "Messaging-Hypothese: Healthcare-Angebote treffen möglicherweise nicht den richtigen Schmerzpunkt – prüfen, ob das Wertversprechen auf Healthcare-spezifische Ergebnisse angepasst ist",
          "Beschaffungs-Hypothese: Healthcare in DACH hat strengere Anforderungen an Datenresidenz, die bei Legal auftauchen – verfügt Anthropic über das Dokumentationspaket, um das zu klären?",
          "ICP-Hypothese: Du verkaufst möglicherweise an Healthcare-Accounts, die auf dem Papier gut aussehen, aber noch nicht beschaffungsbereit für KI sind",
          "Untersuchung: Win/Loss-Interviews für 3 Healthcare-Deals, die bei Legal gestorben sind – was war konkret der Blocker?",
          "Wenn Beschaffung das Problem ist: Ein Healthcare-spezifisches Pre-Legal-Dokumentationspaket aufbauen (DSFA-Vorlage, Datenresidenz-Bestätigung usw.)",
          "Wenn Messaging das Problem ist: Das Healthcare-Play aktualisieren, um die spezifischen rechtlichen Einwände anzusprechen, die auftauchen",
        ],
      },
    ],
  },
};

export default t;
