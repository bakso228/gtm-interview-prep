import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "territory-design": {
    title: "Territory Design",
    definition:
      "Territory Design bezeichnet den Prozess, einen adressierbaren Gesamtmarkt in faire, produktive Account-Sets für einzelne AEs aufzuteilen. Es gibt zwei Hauptmodelle: geografisch (der AE betreut alle Accounts in einer Region) und Named Account (der AE betreut eine definierte Kontoliste unabhängig vom Standort). Eingabegrößen sind: TAM nach Geografie, ICP-Dichte, Deal-Komplexität, AE-Kapazität (wie viele Accounts ein Rep aktiv bearbeiten kann) sowie strategische Prioritäten. Gutes Territory Design schafft annähernd gleiche Chancen für alle Reps und ordnet Accounts den AEs mit der relevantesten Expertise zu.",
    whyItMatters:
      "Territory Design ist in der Stellenbeschreibung explizit als Anforderung genannt: 'nachgewiesene Erfahrung im Aufbau von Vertriebsgebieten'. Im DACH-Raum sind spezifische Entscheidungen notwendig: Wie viele AEs? Geografische Aufteilung (DE vs. AT/CH) oder Named Accounts? Wie geht man mit globalen Accounts um, die DACH-Tochtergesellschaften haben? Wo werden strategische Accounts angesiedelt? Diese Entscheidungen beeinflussen die Motivation der AEs, die Vergütungsgerechtigkeit und das Risiko einer Umsatzkonzentration.",
    interviewAngle:
      "Wahrscheinliche Interviewfrage: 'Wie würden Sie das Territory Design für Anthropics DACH-Enterprise-Segment angehen?' Starke Antworten umfassen: (1) Beginn mit der ICP-Dichte nach Geografie, (2) Abgleich mit der AE-Kapazität, (3) Berücksichtigung von Deal-Komplexität und Zyklendauer, (4) Balance zwischen Named und geografischen Territorien, (5) jährliche Überprüfung - nicht nur bei Neueinstellungen.",
    example:
      "Bei Smile Identity habe ich Territorien nach Vertikalen statt nach Geografie gestaltet - FS-Accounts weltweit gingen an einen AE, Fintech an einen anderen. Das war unkonventionell, hat aber die Hochlaufphase verkürzt, weil AEs schnell tiefes vertikales Know-how aufgebaut haben.",
    sampleQuestions: [
      {
        question:
          "Sie gestalten die Territorialstruktur für ein 4-köpfiges DACH-Enterprise-Team von Grund auf. Beschreiben Sie Ihren Prozess.",
        answerThemes: [
          "Schritt 1: TAM-Mapping - wie viele ICP-qualifizierte Accounts gibt es in DACH nach Land und Vertikale? (LinkedIn, ZoomInfo oder eigene Recherche)",
          "Schritt 2: AE-Kapazität - wie viele Accounts kann ein Enterprise AE aktiv und tiefgehend bearbeiten? Typischerweise 15-25 bei einem 6-9-monatigen Zyklus",
          "Schritt 3: Strategische Accounts - die Top 20-30 Accounts nach ARR-Potenzial werden unabhängig von der Geografie dediziert betreut",
          "Schritt 4: Vertikale Ausrichtung - hat man einen FS-Spezialisten, werden FS-Accounts geografie-übergreifend diesem AE zugeordnet",
          "Schritt 5: Geografische Restverteilung - verbleibende Accounts werden geografisch zugeteilt (DE ist groß genug für eine regionale Aufteilung; AT und CH sind bei 4 Personen Einzel-AE-Märkte)",
          "Schritt 6: Fairness-Check - TAM-Balance-Prüfung über alle Territorien; AEs vergleichen untereinander, und wahrgenommene Ungerechtigkeit schadet der Motivation",
          "Sofortige Dokumentation in Salesforce - Territorial-Konflikte sind kostspielig und entstehen stets aus Unklarheiten",
        ],
      },
      {
        question:
          "Ein großer globaler Account (z. B. Allianz) hat seinen Hauptsitz in München, aber wesentliche KI-Entscheidungen fallen in den Schweizer und britischen Tochtergesellschaften. Wie gehen Sie damit in Ihrem Territory-Modell um?",
        answerThemes: [
          "Globale Accounts mit verteilten Entscheidungsprozessen sind der schwierigste Edge Case im Territory Design",
          "Option 1: Ein AE betreut die globale Beziehung und koordiniert bei Bedarf mit regionalen AEs - vermeidet interne Konflikte, erfordert aber starke globale Koordination",
          "Option 2: Regionale AEs betreuen ihre lokale Einheit, ein globaler AE managt die Beziehung auf Muttergesellschaftsebene - mehr Abdeckung, aber Risiko von Vergütungskonflikten",
          "Für Anthropics Größe: Zuweisung an einen AE (wahrscheinlich der DACH-AE aufgrund des Münchner Hauptsitzes), aber mit einem formalen Koordinationsprozess für globale Accounts",
          "Vergütungsklarheit: Erhält der DACH-AE die Provision, wenn die Schweizer Tochtergesellschaft abschließt? Dieses muss vor dem Abschluss definiert sein",
          "Entscheidung in Salesforce dokumentieren und von der Vertriebsleitung genehmigen lassen - Unklarheiten bei globalen Accounts führen garantiert zu Konflikten",
          "Bei Teamwachstum überprüfen: Sobald es dedizierte Global-Account-AEs gibt, werden diese Accounts aus den regionalen Büchern herausgenommen",
        ],
      },
    ],
  },
  "quota-setting": {
    title: "Quota Setting",
    definition:
      "Die Quote ist das einem AE für einen Zeitraum (typischerweise ein Jahr, aufgeteilt in Quartale) zugewiesene Umsatzziel. Es gibt zwei Gestaltungsansätze: Top-down (Unternehmensziel nehmen, Management-Puffer abziehen, durch Anzahl der AEs teilen) und Bottom-up (territoriale Möglichkeiten je AE modellieren, individuelle Ziele setzen und prüfen, ob das Unternehmensziel erreicht wird). Best Practice ist die Kombination beider Ansätze und die Abstimmung der Ergebnisse. Eine gesunde Quote sollte von 60-70 % des Teams erreichbar sein - wenn alle sie erreichen, ist sie zu niedrig; wenn weniger als 40 % sie erreichen, ist sie zu hoch und führt zu Abgängen.",
    whyItMatters:
      "Die Stellenbeschreibung fordert 'nachgewiesene Erfahrung im Aufbau von Vertriebsgebieten, Quotenfestlegung und Gestaltung variabler Vergütungspläne'. Die Quote ist die einzige Kennzahl, die AEs am meisten interessiert. Eine falsche Festlegung - zu hoch und man verliert Reps; zu niedrig und man lässt Umsatz liegen. Das Gerechtigkeitssignal ist genauso wichtig wie die absolute Zahl: Reps vergleichen Quoten ständig.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Wie würden Sie eine Quote für einen neuen AE im DACH-Team aufbauen?' oder 'Wie handhaben Sie Ramp-Quoten?' Starke Antworten zeigen die Bottom-up-Methode: Territorium TAM x Penetrationsrate x ACV x Win Rate = erreichbarer neuer ARR. Anschließend Plausibilitätsprüfung gegen das Top-down-Unternehmensziel.",
    example:
      "Bei Smile Identity habe ich für jeden der 4 AEs ein vollständiges Bottom-up-Quotenmodell erstellt. Wir nutzten Territorium-TAM (geschätzt aus LinkedIn-Firmendaten + ICP-Filterung), historische Win Rates und durchschnittliche Deal-Größen. Der erste Entwurf lag 20 % höher als das, was wir für fair hielten - daher haben wir einen Fairness-Puffer hinzugefügt und die Differenz als Stretch-Ziel mit Acceleratoren verknüpft.",
    sampleQuestions: [
      {
        question:
          "Erklären Sie, wie Sie eine Quote für einen neuen Enterprise AE im DACH-Team mit Fokus auf Financial Services aufbauen würden.",
        answerThemes: [
          "Schritt 1: Territorium-TAM - wie viele ICP-FS-Accounts gibt es im Territorium dieses AE? Schätzung aus firmografischen Daten",
          "Schritt 2: Erreichbare Accounts - bei 20 aktiven Enterprise-Accounts pro AE: wie viele FS-Accounts kann dieser in Jahr 1 realistisch bearbeiten?",
          "Schritt 3: Erwartete Abschlüsse - bei einem 6-9-monatigen Zyklus schließt ein Enterprise AE in einem neuen Markt 3-5 neue Logos pro Jahr ab",
          "Schritt 4: Erwarteter ACV - was ist die erwartete Deal-Größe für einen FS-Account in DACH? (Vergleichsbenchmarks oder erste Pipeline-Daten verwenden)",
          "Schritt 5: Win-Rate-Annahme - in einem neuen Markt ohne Case Studies konservativ mit 20-25 % Win Rate ansetzen",
          "Bottom-up-Berechnung: 4 Abschlüsse x €150K ACV x 22 % Win Rate = ca. €130K ARR (Hochlaufphase berücksichtigen: Jahr-1-Quote ca. 60-70 % der vollen Kapazität)",
          "Plausibilitätsprüfung gegen Top-down: Deckt die Summe aller AE-Quoten das Unternehmensziel? Falls nicht, die Lücke explizit schließen",
        ],
      },
      {
        question:
          "60 % Ihrer DACH-AEs haben letztes Jahr ihre Quote verfehlt. Wie finden Sie heraus, ob die Quote falsch war oder die AEs zu wenig geleistet haben?",
        answerThemes: [
          "Eine Verfehlung von 60 % ist ein Warnsignal - der gesunde Bereich liegt bei 30-40 % Verfehlungen, nicht 60 %",
          "Erste Diagnose: War die Verfehlung bei allen AEs gleichmäßig oder bei 1-2 Reps konzentriert?",
          "Falls konzentriert: Wahrscheinlich ein Performance-Problem einzelner AEs - die Quote könnte in Ordnung sein",
          "Falls verteilt über alle AEs: Die Quote war mit großer Wahrscheinlichkeit zu hoch - ein Markt-, Kapazitäts- oder Hochlaufphasen-Kalibrierungsproblem",
          "Bottom-up-Modell prüfen: Haben tatsächliche Deal-Anzahl und ACV den Modellannahmen entsprochen?",
          "Externe Faktoren prüfen: Gab es ein makroökonomisches Ereignis, eine regulatorische Änderung oder eine Wettbewerbsverschiebung, die DACH spezifisch betraf?",
          "Falls die Quote falsch war: Offen ansprechen, neu kalibrieren und die Änderung klar kommunizieren - Reps verlieren das Vertrauen, wenn schlechte Quoten verteidigt statt korrigiert werden",
          "Zukunftssicherung: Einen halbjährlichen Quoten-Review-Mechanismus einführen, damit Kalibrierungen vor Jahresend-Überraschungen stattfinden",
        ],
      },
    ],
  },
  "capacity-models": {
    title: "Kapazitätsmodelle",
    definition:
      "Ein Kapazitätsmodell prognostiziert, wie viele AEs (und unterstützende Rollen) benötigt werden, um ein Umsatzziel über einen Planungshorizont zu erreichen. Eingabegrößen: Umsatzziel, erwarteter ACV, Hochlaufzeitraum, Produktivitätsannahmen (erwarteter Quotenanteil von voll eingearbeiteten vs. noch hochlaufenden AEs) und Fluktuationsrate. Ergebnis: ein vierteljährlicher Headcount-Plan, der zeigt, wann und mit welchem Profil eingestellt werden muss. Das Modell zeigt auch die 'Produktivitätslücke' - den Abstand zwischen aktuellem und benötigtem Headcount in einem bestimmten Quartal.",
    whyItMatters:
      "Die Stellenbeschreibung fordert 'nachgewiesene Erfahrung im Aufbau von Sales-Kapazitätsmodellen, Produktivitäts-Frameworks und Headcount-Planungsprozessen'. In einem Wachstumsmarkt wie DACH ist eine zu frühe Einstellung kostspielig; zu späte Einstellungen lassen Umsatz liegen. Das Modell ist auch der wichtigste Input für die Zusammenarbeit mit Finance bei der Zielsetzung - man muss zeigen, was angesichts des geplanten Headcounts und der Hochlaufphase erreichbar ist.",
    interviewAngle:
      "Wahrscheinliche Frage: 'Sie sollen ein Kapazitätsmodell für DACH mit einem 18-monatigen Horizont aufbauen. Womit beginnen Sie?' Die Antwort: (1) Umsatzziel festlegen, (2) erwartete Produktivität pro voll eingearbeitetem AE bestimmen, (3) Hochlaufkurven für Neueinstellungen modellieren, (4) benötigten Headcount quartalsweise ableiten, (5) Fluktuation berücksichtigen.",
    sampleQuestions: [
      {
        question:
          "Erstellen Sie ein High-Level-Kapazitätsmodell für DACH Enterprise. Das Umsatzziel liegt bei €5M ARR in 18 Monaten, das aktuelle Team hat 2 AEs. Was müssen Sie wissen und was liefert das Modell?",
        answerThemes: [
          "Benötigte Eingaben: erwarteter ACV je Abschluss, Win Rate, durchschnittliche Sales-Zyklusdauer, Hochlaufzeitraum, erwartete jährliche AE-Fluktuation",
          "Produktivität pro voll eingearbeitetem AE: (ACV x Win Rate x Abschlüsse pro Jahr). Bei ACV = €150K, Win Rate = 25 %, 4 Abschlüssen/Jahr -> €150K ARR pro voll eingearbeitetem AE",
          "€5M Ziel ÷ €150K pro AE = ca. 33 AE-Äquivalente an benötigter Produktivität über 18 Monate",
          "Aktuelle 2 AEs bei voller Einarbeitung = €300K/Jahr -> erhebliche Lücke",
          "Vierteljährliche Einstellungsplanung modellieren: 2 weitere in Q1, 2 weitere in Q2, 1 in Q3 - aber Hochlaufphase berücksichtigen (Q1-Einstellung trägt ca. 20 % in Q1, 50 % in Q2 etc. bei)",
          "15-20 % jährliche Fluktuation einplanen: Wenn 8 AEs benötigt werden, für 10 planen",
          "Ergebnis: Quartalsweiser Headcount-Plan, kumulierte ARR-Projektion und Sensitivitätstabelle, die zeigt, was sich bei 5 % niedrigerer Win Rate ändert",
        ],
      },
      {
        question:
          "Finance hat das DACH-ARR-Ziel auf €8M für nächstes Jahr festgesetzt. Ihr Kapazitätsmodell zeigt €5,5M als erreichbar, gegeben aktuellem Headcount und geplanten Einstellungen. Wie gehen Sie mit der Lücke um?",
        answerThemes: [
          "Das Modell transparent präsentieren - die Zahlen nicht verbiegen, um dem Finance-Ziel zu entsprechen",
          "Annahmen zeigen: Das sind die Treiber des €5,5M-Werts (Headcount, Hochlaufphase, Win Rate, ACV)",
          "Aufzeigen, was es braucht, um €8M zu erreichen: X zusätzliche AEs bis Q1, oder Win-Rate-Verbesserung um Y %, oder ACV-Steigerung um Z %",
          "Das Risiko jedes Hebels quantifizieren: Mehr AEs einstellen ist kapitalintensiv und hochlaufabhängig; Win-Rate-Verbesserung ist unsicher",
          "Empfohlener Weg: €5,5M als Basis-Szenario vereinbaren, mit einem €7M-Stretch-Ziel, das an spezifische Beschleunigungsbedingungen geknüpft ist",
          "Nicht einfach sagen, das Ziel sei falsch - einen Weg zur Lückenschließung vorlegen, auch wenn dieser nicht vollständig erreichbar erscheint",
          "Das ist ein Finance-Partnerschaftsgespräch, keine Verhandlung - die Arbeit zeigen und die Daten entscheiden lassen",
        ],
      },
    ],
  },
  "ote-accelerators": {
    title: "OTE, Acceleratoren und SPIFs",
    definition:
      "On-Target Earnings (OTE) ist die Gesamtvergütung, die ein AE bei Erreichung von 100 % der Quote verdient - Grundgehalt plus variables Zielgehalt (Provision). Die Basis/Variabel-Aufteilung im Enterprise-SaaS liegt typischerweise bei 50/50 für AEs und 60/40 für erfahrenere Rollen. Acceleratoren sind Provisionsmultiplikatoren, die ab 100 % Quotenerreichung greifen - z. B. 1,5-fache Provision auf jeden Euro über der Quote. SPIFs (Sales Performance Incentive Funds) sind kurzfristige Cash-Bonusse für spezifische Verhaltensweisen (Abschluss eines Deals in einer Zielbranche, vorzeitiges Erreichen von Q1-Zielen).",
    whyItMatters:
      "Vergütungsgestaltung formt Verhalten. Acceleratoren motivieren AEs, über die Quote hinaus zu pushen, statt zu sandbaggen. SPIFs lenken taktische Prioritäten in einem bestimmten Quartal. Das Risiko: schlecht gestaltete Acceleratoren können perverse Anreize schaffen (Timing von Abschlüssen manipulieren, Accounts cherry-picken). In dieser Rolle müssen Sie diese gestalten und die Second-Order-Effekte verstehen.",
    interviewAngle:
      "Am wahrscheinlichsten in einer Vergütungsgestaltungsfrage eingebettet: 'Wie würden Sie den Vergütungsplan für DACH-Enterprise-AEs gestalten?' Zeigen Sie, dass Sie über Verhaltensweisen nachdenken, nicht nur über Mathematik: Was incentiviert dieser Plan, und ist das das Gewünschte?",
    sampleQuestions: [
      {
        question:
          "Gestalten Sie die variable Vergütungsstruktur für einen DACH-Enterprise-AE mit einem OTE von €200K. Wie sieht der Plan aus und welche Verhaltensweisen fördert er?",
        answerThemes: [
          "Basis/Variabel-Aufteilung: 50/50 -> €100K Grundgehalt, €100K variables Zielgehalt (Standard für Enterprise SaaS)",
          "Provisionsrate bei 100 % Quote: Variables Zielgehalt ÷ Quote (z. B. €100K Variable auf €500K Quote = 20 % Provisionsrate)",
          "Accelerator-Struktur: 1,0x bis 100 %, 1,5x von 100-125 %, 2,0x über 125 %",
          "Induziertes Verhalten: AEs werden motiviert, über die Quote hinaus zu pushen (nicht bei 99 % einzubremsen), und sind stark motiviert, 125 %+ zu erreichen",
          "SPIF-Option: €10K Bonus für das erste FS-Logo, das in H1 abgeschlossen wird - lenkt den vertikalen Fokus dorthin, wo er gewünscht ist",
          "Zu vermeidendes Risiko: Acceleratoren, die bei 75 % Quotenerreichung greifen - das belohnt Mittelmäßigkeit und treibt die Vergütungskosten nach oben",
          "Rechtlicher Hinweis DACH: Das deutsche Arbeitsrecht schränkt Änderungen an variablen Vergütungsvereinbarungen ein - rechtliche Prüfung vor der Finalisierung einholen",
        ],
      },
      {
        question:
          "Ihre AEs sandbaggen - sie halten Abschlüsse zurück, um ihre Quote sauber zu erreichen, statt vorzuziehen. Wie gestalten Sie den Vergütungsplan um, um das zu beheben?",
        answerThemes: [
          "Sandbagging ist eine rationale Reaktion auf Vergütungspläne, die Überperformance bestrafen (wenn man dieses Jahr 150 % erreicht, steigt die Quote nächstes Jahr um 50 %)",
          "Grundursache 1: Ratcheting Quote - wenn Überperformance die Quote des nächsten Jahres erhöht, vermeiden AEs sie rational",
          "Grundursache 2: Quartals-Flush - wenn Abschlüsse nicht in Folgequartale übertragen werden, halten AEs Dezember-Abschlüsse für Q1 zurück",
          "Lösung für Ratcheting: Quotenerhöhungen auf einen festen Prozentsatz deckeln, unabhängig von der Erreichung (z. B. max. 15 % Erhöhung Jahr-über-Jahr)",
          "Lösung für Quartals-Flush: Einen in den letzten 2 Wochen eines Quartals abgeschlossenen Deal wahlweise dem aktuellen oder dem nächsten Quartal anrechnen - AEs Wahlrecht geben",
          "Acceleratoren helfen, lösen es aber nicht vollständig: Wenn 150 % Erreichung dieses Jahr eine 200 %-Quote nächstes Jahr bedeutet, ist der Accelerator effektiv null",
          "Die einzige nachhaltige Lösung ist glaubwürdige Quotenfestlegung: Wenn AEs darauf vertrauen, dass gute Leistung nicht zu strafenden Quotenerhöhungen führt, hört das Sandbagging auf",
        ],
      },
    ],
  },
  "comp-philosophy": {
    title: "Vergütungsplan-Philosophie",
    definition:
      "Ein Vergütungsplan ist nur so gut wie die Philosophie dahinter. Kernprinzipien: (1) Einfachheit - AEs sollten ihre eigene Provision im Kopf ausrechnen können; (2) Ausrichtung - der Plan sollte die Verhaltensweisen belohnen, die die Unternehmensstrategie fördern, nicht nur den Umsatz; (3) Fairness - gleiche Chancen über alle Territorien hinweg, einheitliche Behandlung von Windfall-Deals; (4) Vorhersehbarkeit - Reps sollten von ihrem Gehaltsscheck nicht überrascht werden. Jährliche Änderungen sollten frühzeitig und mit klarer Begründung kommuniziert werden. Häufige oder intransparente Änderungen zerstören das Vertrauen schneller als fast alles andere.",
    whyItMatters:
      "Diese Rolle erfordert die Gestaltung von Vergütungsplänen. Die Mechanik ist weniger wichtig als die Philosophie - ein komplexer Plan, der technisch die richtigen Kennzahlen optimiert, aber von AEs nicht verstanden wird, wird einen einfacheren, intuitiven und fairen Plan unterperformen. DACH-Märkte haben zudem rechtliche Besonderheiten bei Provisionsstrukturen.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Erläutern Sie den Vergütungsplan, den Sie für DACH-AEs gestalten würden' oder 'Wie gehen Sie mit einem Vergütungsplan um, bei dem Sie die Quote während des Jahres falsch gesetzt haben?' Zeigen Sie, dass Sie die Vertrauensdimension der Vergütung verstehen - sie ist genauso ein kultureller Hebel wie ein finanzieller.",
    sampleQuestions: [
      {
        question:
          "Sie haben soeben festgestellt, dass der von Ihnen gestaltete Vergütungsplan eine unbeabsichtigte Konsequenz hat: AEs meiden Multi-Year-Deals, weil die Provision nur auf den Jahr-1-ACV basiert. Wie beheben Sie das?",
        answerThemes: [
          "Zunächst: den Fehler eingestehen und transparent kommunizieren - 'Wir haben einen unbeabsichtigten Anreiz gefunden und korrigieren ihn'",
          "Sofortmaßnahme: Jedem AE, der im aktuellen Planzeitraum einen Multi-Year-Deal abgeschlossen hat, rückwirkend auf Basis des gesamten TCV gutschreiben, nicht nur Jahr 1",
          "Plan-Neugestaltung: Provision auf TCV (Gesamtvertragswert) bis zu 3 Jahren, nicht auf den Jahr-1-ACV",
          "Oder: Provision auf Jahr-1-ACV plus kleinerer Bonus für Jahre 2 und 3 im Voraus - einfacher, aber immer noch Multi-Year-belohnend",
          "Vermeiden: Volle Multi-Year-Provision vorab auszahlen birgt Risiken, wenn der Kunde in Jahr 1 churnt - Rückforderungsklausel hinzufügen",
          "Kommunikation: Planänderung schriftlich mit Beispielen, wie Abschlüsse nun berechnet werden",
          "Lektion: Immer 5-10 reale Abschlüsse durch einen neuen Vergütungsplan modellieren, bevor man ihn launcht - so werden Edge Cases gefunden",
        ],
      },
      {
        question:
          "Wie kommunizieren Sie eine unterjährige Quotenreduzierung an AEs, die bei 90 % Erreichung stehen und über die Änderung verärgert sind?",
        answerThemes: [
          "Das nicht in einem Teammeeting ankündigen - erst Einzelgespräche mit direkt betroffenen AEs führen",
          "Mit Transparenz beginnen: Hier ist, warum das Unternehmen diese Entscheidung getroffen hat (Marktbedingungen, revidierte Prognosen) - keine Vagheit",
          "Die Störung anerkennen: Eine Quotenänderung mitten im Jahr ist genuinen störend, und die Frustration ist berechtigt",
          "Die Mathematik zeigen: Bei 90 % der alten Quote stehen sie jetzt bei X % der neuen Quote - wie sieht ihre neue Erreichung und Vergütung aus?",
          "Keine schlechte Entscheidung verteidigen - wenn die Quote falsch war, das sagen",
          "Vergütung für AEs bei 90 %+ schützen: Erwägen, die OTE-Auszahlung auf dem Niveau der ursprünglichen Quote für den aktuellen Zeitraum zu sichern",
          "Vertrauen ist das langfristige Kapital: AEs, die sich bei einer schwierigen Änderung fair behandelt fühlen, bleiben; diejenigen, die sich überrumpelt fühlen, gehen",
        ],
      },
    ],
  },
  "bottom-up-planning": {
    title: "Bottom-Up-Planung",
    definition:
      "Bottom-Up-Planung beginnt mit Annahmen auf Einzel-Account- oder Territoriums-Ebene und aggregiert diese zu einem Gesamtziel, anstatt ein Unternehmensziel unter den Reps aufzuteilen. Eingaben je AE: Territorium-TAM, ICP-Dichte, erwartete Abschlüsse im Zeitraum, erwarteter ACV, Win Rate, Zyklendauer. Ergebnis: eine erreichbare ARR-Projektion, die in der Feldrealität verankert ist. Bottom-Up ist genauer als Top-Down, erfordert aber mehr Aufwand. Best Practice: beides durchführen und die Lücke abstimmen - Top-Down setzt den Ehrgeiz, Bottom-Up zeigt die Realität.",
    whyItMatters:
      "Die Stellenbeschreibung nennt explizit die Zusammenarbeit mit Finance bei der Zielsetzung und Bottom-Up-Modellierung. Das ist eine Kernplanungskompetenz: einen verteidigbaren Plan von unten nach oben aufbauen können, statt einfach eine Vorstandszahl zuzuweisen. Es verleiht auch Glaubwürdigkeit gegenüber AEs - der Plan wurde aus ihren Daten aufgebaut, nicht von Finance diktiert.",
    interviewAngle:
      "Könnte als Frage auftauchen: 'Wie sieht ein Bottom-Up-Plan für DACH Enterprise aus - Inputs, Annahmen, Outputs?' Den Interviewer durch die Methodik führen: TAM -> ICP-Filterung -> Account-Anzahl -> Abschlüsse pro AE -> erwarteter ACV -> Win Rate -> ARR-Projektion.",
    example:
      "Bei Agoda habe ich einen Bottom-Up-Plan für unseren zweitgrößten Akquisitionskanal über 50+ Märkte aufgebaut. Der Schlüssel war die Entwicklung von marktspezifischen Elastizitätskurven, sodass der Plan nicht einfach 'gleiches wie letztes Jahr + 15 %' war, sondern in echten Bid-Response-Daten verankert war.",
    sampleQuestions: [
      {
        question:
          "Beschreiben Sie den Aufbau eines Bottom-Up-Plans für DACH Enterprise für die nächsten 12 Monate. Was sind die Inputs, Annahmen und Outputs?",
        answerThemes: [
          "Input 1: ICP-Account-Anzahl nach Vertikale - wie viele qualifizierte Accounts gibt es in DACH? (LinkedIn, ZoomInfo oder vertikale Datenbanken)",
          "Input 2: AE-Anzahl und Hochlaufzeitraum - 2 voll eingearbeitet, 2 in Hochlaufphase Q1, 1 neu in Q3",
          "Input 3: Abschlüsse pro AE pro Jahr - Enterprise-Zyklus von 7 Monaten -> voll eingearbeiteter AE schließt ca. 4 Abschlüsse in 12 Monaten",
          "Input 4: Erwarteter ACV - nach Vertikale (FS: €200K Durchschnitt, Tech: €120K Durchschnitt, Healthcare: €180K Durchschnitt)",
          "Input 5: Win Rate nach Vertikale - konservativ (20 %) für neuen Markt, weniger konservativ für bestehende Accounts",
          "Berechnung: (Abschlüsse pro AE x Win Rate x ACV) x AE-Äquivalent-Produktivität nach Quartal",
          "Output: Quartalsweise ARR-Projektion mit einem Basis- und einem Upside-Szenario sowie eine Sensitivitätstabelle, die den Einfluss von Win Rate oder ACV von ±20 % zeigt",
          "Abstimmung mit Top-Down: Die Lücke explizit präsentieren und entweder ein überarbeitetes Ziel oder die spezifischen Investitionen vorschlagen, die zur Schließung erforderlich sind",
        ],
      },
      {
        question:
          "Finance möchte einen 20-prozentigen Ambitions-Puffer auf Ihren Bottom-Up-Plan aufschlagen. Wie reagieren Sie?",
        answerThemes: [
          "Die Absicht verstehen: Ist es ein Stretch-Ziel (transparent) oder eine offizielle Quote (auf die AEs vergütet werden)? Diese erfordern unterschiedliche Antworten",
          "Falls Stretch-Ziel: Das ist in Ordnung - klar als Upside-Szenario kommunizieren, nicht als Verpflichtung",
          "Falls offizielle Quote: Ein 20%-Puffer auf ein Bottom-Up-Modell ist ein Rezept für 30-40 % Quotenverfehlung",
          "Mit Daten zurückdrängen: 'Das ist, was es bräuchte, um +20 % zu erreichen - X zusätzliche AEs in Q1, oder Win Rate von 20 % auf 28 % verbessern'",
          "Einen mittleren Weg anbieten: Basis-Quote auf dem Bottom-Up-Wert, mit Acceleratoren, die auf das Ambitionsniveau ausgelegt sind",
          "Das richtige Framing: Bottom-Up ist das mit aktuellen Plänen Erreichbare; Ambition erfordert inkrementelle Investitionen",
          "Niemals einfach ein aufgeblähtes Ziel akzeptieren, ohne das Modell zu dokumentieren - der Paper Trail ist wichtig, wenn die Verfehlung eintritt",
        ],
      },
    ],
  },
};

export default t;
