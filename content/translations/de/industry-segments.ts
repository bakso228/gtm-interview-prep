import type { ConceptDe } from "@/content/types";

const t: Record<string, ConceptDe> = {
  "dach-banks": {
    title: "DACH-Banken — Segmentprofil & Sales Motion",
    definition:
      "Das DACH-Bankwesen gliedert sich in vier strukturelle Schichten, jede mit unterschiedlicher Kaufdynamik: (1) Universalbanken — Deutsche Bank, Commerzbank, UniCredit Deutschland, HypoVereinsbank — große IT-Teams, lange Zyklen, Executive-Zugang erforderlich; (2) Sparkassen und Genossenschaftsbanken (Volksbanken-Raiffeisenbanken) — gemeinsam Deutschlands größte Bankengruppe nach Filialanzahl, aber Entscheidungen werden auf Einzel-Instituts- oder Verbandsebene getroffen, nicht zentral; (3) Privatbanken und Asset Manager — Julius Bär, DZ PRIVATBANK, Berenberg, Hauck Aufhäuser Lampe — kleiner, schneller beweglich, innovationsorientiert; (4) Schweizer Banken — UBS, Credit Suisse (in UBS integriert), Vontobel, Pictet — strenge Datenresidenz (Daten müssen in der Schweiz bleiben), höchste Compliance-Anforderungen in DACH. Kerneigenschaften: BaFin (Deutschland), FMA (Österreich), FINMA (Schweiz) regulatorische Aufsicht; EU AI Act macht Hochrisiko-KI-Anwendungsfälle (Kreditentscheidungen, Geldwäscheprävention) formal reguliert; Datensouveränität ist eine Beschaffungsanforderung, keine Präferenz; Einkaufskomitees umfassen typischerweise CDO, CTO, CISO, Chief Risk Officer, Recht, Compliance und oft ein dediziertes KI-Governance-Board.",
    whyItMatters:
      "DACH-Banken repräsentieren das Vertikalsegment mit dem höchsten ACV, das Anthropic verfolgen wird — typische Enterprise-Deals im Finanzdienstleistungsbereich können über eine Dreijahresvertragslaufzeit siebenstellige Beträge erreichen. Sie haben auch den stärksten Product-Market-Fit für Claudes spezifische Differenzierungsmerkmale: 200K-Token-Context verarbeitet eine vollständige Kreditakte, einen Regulierungsbericht oder eine Rechtsvereinbarung in einem Durchgang; Constitutional AI gibt Compliance-Teams Dokumentation, die sie Regulierern vorlegen können; kein Training auf Kundendaten beseitigt den häufigsten Bankeinwand. Das Risiko ist, dass Zyklen lang sind (12–18 Monate) und die Beschaffung formal ist — das Organigramm falsch zu verstehen, tötet Deals, die gewonnen werden sollten.",
    interviewAngle:
      "Sehr wahrscheinlich aufzukommen als: 'Erklären Sie mir, wie Sie einen Deal bei einer großen deutschen Bank abwickeln würden' oder 'Wie gehen Sie mit Datenresidenz-Einwänden von Schweizer Banken um?' Zeigen Sie, dass Sicherheitsdokumentation echtes Beschaffungsmaterial ist — kein reines Verkaufsargument. Den Unterschied zwischen dem Sparkassen-Verbund kennen (man muss über DSGV oder die Finanzinformatik-IT-Tochter skalieren) und einer Universalbank (man findet den richtigen CDO).",
    example:
      "Der CDO der Deutschen Bank genehmigt ein Pilotprojekt zur Zusammenfassung von Regulierungsdokumenten (MiFID II-Offenlegungen). Der Anwendungsfall: Analysten verbringen derzeit 4 Stunden pro Bericht damit, Verpflichtungen aus 300-seitigen Regulierungsunterlagen manuell zu extrahieren. Claude reduziert das auf 20 Minuten mit quellzitierten Outputs. Der CISO benötigt Anthropics Security-Whitepaper, Datenverarbeitungsvereinbarung und einen Pen-Test-Bericht, bevor der Rechtsdienst unterzeichnet. Der POC läuft 8 Wochen auf anonymisierten Dokumenten, die auf Anthropics Frankfurter Endpunkt gehostet werden.",
    sampleQuestions: [
      {
        question:
          "Wie würden Sie ein Jahr-1-Coverage-Modell für das DACH-Bankwesen gestalten, und welches Teilsegment würden Sie zuerst priorisieren?",
        answerThemes: [
          "Priorität: Privatbanken und mittelgroße Universalbanken — schnellere Entscheidungen als der Sparkassen-Verbund, kleinere Compliance-Oberfläche als Schweizer Privatbanken",
          "Schweizer Banken sind hochwertig, erfordern aber Schweizer Datenresidenz — frühzeitig qualifizieren: Hat Anthropic einen Schweizer Endpunkt?",
          "Sparkassen / Volksbanken: großer Markt, aber fragmentiert — über IT-Verbandstöchter arbeiten (Finanzinformatik, Fiducia & GAD), nicht über Einzelinstitute",
          "Große Universalbanken (Deutsche Bank, Commerzbank): Flaggschiff-Logos, aber 12–18-monatige Zyklen — nur mit Executive-Sponsor investieren, nicht auf Spekulation",
          "Jahr-1-Brückenkopf: 2–3 Privatbanken bei regulatorischer Zusammenfassung → einen replizierbaren Anwendungsfall und eine deutschsprachige Fallstudie aufbauen",
          "ICP-Signal: dediziertes KI- oder Innovationsteam, Umsatz >5 Mrd. €, CDO oder Chief Innovation Officer im Amt",
          "ICP-Dichte nicht mit Deal-Geschwindigkeit verwechseln — Accounts wählen, die in Jahr 1 tatsächlich abgeschlossen werden können",
        ],
      },
      {
        question:
          "Der CISO einer deutschen Bank blockiert den Deal und beruft sich auf Datenresidenz- und Modell-Erklärbarkeits-Bedenken. Wie lösen Sie das?",
        answerThemes: [
          "Der CISO tut seinen Job — nicht versuchen, ihn zu umgehen, sondern frühzeitig einbeziehen",
          "Datenresidenz: bestätigen, welchen Endpunkt die Daten durchlaufen und ob die Inferenz in der EU bleibt; Anthropic-Solutions-Engineering für Architekturdokumentation einschalten",
          "Modell-Erklärbarkeit: Constitutional AI reduziert unerklärte Outputs; Model Cards dokumentieren Verhalten; der Cite-with-Sources-Modus ermöglicht Analysten, jeden Output nachzuverfolgen",
          "Konkretes Kollateral bereitstellen: Security-Whitepaper, Datenverarbeitungsvereinbarung, Penetrationstest-Bericht, SOC-2-Zertifizierung",
          "EU AI Act-Rahmung: Anthropics Sicherheitshaltung ist compliance-bereit — die meisten Wettbewerber können das nicht sagen",
          "Eine technische Sitzung anbieten: Anthropics Sicherheitsarchitekt + das CISO-Team der Bank — kein Verkaufsgespräch",
          "Den Einwand verfolgen: wenn der CISO in jeder Runde neue Bedenken äußert, ist er möglicherweise nicht der eigentliche Blocker — herausfinden, ob der Rechtsdienst oder das KI-Governance-Board der eigentliche Engpass ist",
        ],
      },
    ],
  },
  "dach-insurance": {
    title: "DACH-Versicherungen — Segmentprofil & Sales Motion",
    definition:
      "DACH-Versicherungen unterteilen sich in vier bedeutsame Teilsegmente: (1) Primäre Sach- und Haftpflichtversicherer — Allianz, AXA Deutschland, Zurich Deutschland, Generali Deutschland — große Mengen an Schadendokumentation, hoher operativer KI-Wert; (2) Lebens- und Krankenversicherer — Allianz Leben, R+V, Debeka — hohe Datensensibilität, langsamere Innovation, starker Anwendungsfall in der Policenverwaltung; (3) Rückversicherer — Munich Re, Hannover Re, Swiss Re — technologisch fortschrittlichster Sektor, aktive KI-Programme, fungieren oft als KI-Innovationslabor für die gesamte Branche; (4) Spezialversicherer und Makler — HDI, Talanx, ERGO, Ecclesia Group. Wichtige Branchenmerkmale: dokumentenlastig von Natur aus (Policen, Schäden, Regulierungsanträge sind durchgehend textbasiert); Solvency II erfordert Dokumentation und Auditierbarkeit von Risikomodellen; deutschsprachige Policen- und Schadendokumente sind die operative Realität; Betrugserkennung, Schadenautomatisierung und Zeichnungsdokumentation sind die drei wichtigsten KI-Anwendungsfälle; BaFin überwacht Versicherungs-KI ebenso wie Banken-KI; Munich Re und Swiss Re sind besonders interessant, da sie interne KI-Programme betreiben und Kunden in Bezug auf KI beraten — sie können sowohl Kunden als auch informelle Channel-Multiplikatoren werden.",
    whyItMatters:
      "Versicherungen haben den besten Product-Market-Fit aller DACH-Vertikale für Claudes Kernstärken: (1) Schadendokumente sind lang, unstrukturiert und auf Deutsch — genau der Anwendungsfall, bei dem 200K Context und mehrsprachige Fähigkeiten gewinnen; (2) Zeichnungsentscheidungen müssen auditierbar sein — Constitutional AI und quellzitierte Outputs adressieren das direkt; (3) Betrugserkennung in der Schadensbearbeitung erfordert die Querverweisierung großer Dokumentensätze — Long-Context verarbeitet das in einem Durchgang. Rückversicherer sind es wert, frühzeitig anzusprechen: Munich Re und Swiss Re sind global respektiert, haben KI-Budgets, bewegen sich schneller als Erstversicherer, und ein Erfolg dort schafft eine Referenz, die in der gesamten Branche Widerhall findet.",
    interviewAngle:
      "Könnte aufkommen als: 'Wie unterscheidet sich Versicherung von Banking in Ihrem DACH-GTM, und behandeln Sie sie zusammen oder getrennt?' Die Antwort lautet: getrennte Bewegungen. Banking verkauft an CDOs auf der Grundlage von regulatorischer Risikoreduktion; Versicherungen verkaufen an COOs und Claims-Operations-Leiter auf der Grundlage von Prozesseffizienz. Die Anwendungsfälle sind unterschiedlich, die Champions sind unterschiedlich, und der regulatorische Rahmen ist unterschiedlich (Solvency II vs. EU AI Act). Diese Nuance zu zeigen, signalisiert, dass die Arbeit geleistet wurde.",
    example:
      "Der Head of Digital & Innovation bei Munich Re möchte KI-gestützte Zeichnungsdokumentation pilotieren: Ingenieure synthetisieren derzeit manuell 200-seitige technische Risikobewertungen in strukturierte Zusammenfassungen. Claude verarbeitet das vollständige Dokument in einem Durchgang, extrahiert Risikofaktoren nach Kategorie und gibt einen strukturierten Bericht mit Quellenangaben aus. Da Munich Re Erstversicherer bei der KI-Adoption berät, schafft ein erfolgreicher Pilot dort sowohl einen Kunden als auch eine informelle Referenz für den gesamten DACH-Versicherungsmarkt.",
    sampleQuestions: [
      {
        question:
          "Warum sollte man Rückversicherer vor Erstversicherern in DACH ansprechen, und wie baut man ein Play speziell für Munich Re oder Swiss Re?",
        answerThemes: [
          "Rückversicherer sind strukturell technologieaffiner: sie betreiben Analysen in großem Maßstab, haben interne KI-Teams und bewegen sich schneller als Erstversicherer",
          "Munich Re und Swiss Re haben beide aktive KI- und Digitalisierungsprogramme — keine grundlegende Aufklärung erforderlich",
          "Netzwerkeffekt: beide beraten Erstversicherer zu Risikomodellen und Technologie — eine Referenz bei Munich Re wirkt branchenweit",
          "Einstiegspunkt: Head of Digital Transformation, Chief Data Officer oder Head of Innovation — nicht die traditionelle Beschaffung",
          "Anwendungsfall-Anker: Zeichnungsdokumentationssynthese, Zusammenfassung von Katastrophenmodell-Outputs, Vertragsanalyse",
          "POC-Design: ein echtes (anonymisiertes) 200-seitiges Risikobewertungs- oder Vertragsdokument nehmen — strukturierte Extraktion mit Quellenangaben auf Deutsch zeigen",
          "Swiss Re hat seinen Sitz in Zürich — erfordert Schweizer Datenresidenz; Infrastruktur vor der Qualifizierungsinvestition bestätigen",
        ],
      },
      {
        question:
          "Wie geht man mit einem Erstversicherer (z. B. Allianz Deutschland) um, bei dem der KI-Pilot-Champion in der Claims Operations sitzt, nicht in der IT oder beim CDO?",
        answerThemes: [
          "Ein Claims-Operations-Champion ist für diesen Anwendungsfall tatsächlich besser als nur ein CDO — er besitzt den Schmerz und die Erfolgskennzahl",
          "Risiko: Claims Operations hat möglicherweise keine Budgetkompetenz — parallel den wirtschaftlichen Entscheider (COO oder CFO) identifizieren",
          "Anwendungsfall: Schadendokumentenverarbeitung — eingehende Berichte triage, strukturierte Felder extrahieren, fehlende Informationen kennzeichnen",
          "Deutsche Sprachfähigkeit ist unverzichtbar — alle Schadendokumente sind auf Deutsch; im POC mit echtem deutschen Text testen",
          "Wert quantifizieren: Wie viele Schadenbearbeiter? Wie lange pro Dokument? Was sind die vollständigen Kosten?",
          "Erfolgskennzahl vorab vereinbaren: Genauigkeit vs. manuelle Prüfung, eingesparte Zeit pro Schaden, Eskalationsrate",
          "IT-Zustimmungspfad: selbst mit einem COO-Sponsor sind IT-Architekturprüfung und Sicherheitsgenehmigung erforderlich — frühzeitig einbeziehen",
        ],
      },
    ],
  },
  "dach-telcos": {
    title: "DACH-Telekommunikation — Segmentprofil & Sales Motion",
    definition:
      "DACH-Telcos teilen sich in zwei Kategorien mit sehr unterschiedlichem Kaufverhalten auf: (1) Infrastrukturbetreiber — Deutsche Telekom (Deutschlands umsatzstärkstes Unternehmen), Vodafone Deutschland, Telefónica Deutschland (O2), 1&1, A1 Telekom Austria, Sunrise/Salt (Schweiz) — große Enterprise-Kunden in eigenem Recht mit aktiven digitalen Transformationsprogrammen; (2) Enterprise-IT-Arme — T-Systems (Enterprise-IT-Tochter der Deutschen Telekom, 40.000+ Kunden) — kritisch wichtig als potenzieller Channel-Partner, nicht nur als Direktkunde. Wichtige Branchendynamiken: Umsatzdruck durch Kommoditisierung der Konnektivität treibt KI-Investitionen in zwei Richtungen — betriebliche Effizienz (Netzwerkbetrieb, Kundenservice-Automatisierung) und Enterprise-Services (T-Systems verkauft KI-Plattformen an 40.000+ Kunden weiter). Telcos evaluieren und kaufen KI deutlich schneller als Banken — Beschaffungszyklen von 3–9 Monaten sind realistisch. Sie haben auch bestehende Hyperscaler-Beziehungen (T-Systems hat Partnerschaften sowohl mit AWS als auch mit Google Cloud), was bedeutet, dass Claude oft als Wettbewerbsevaluation oder komplementäre KI-Schicht eingeht, nicht als alleinige Quelle.",
    whyItMatters:
      "Telcos bieten die besten Kurzzyklen-Enterprise-Deals in DACH — 3–9 Monate vs. 12–18 für Banken — und T-Systems ist speziell ein potenzieller Kraftmultiplikator: T-Systems als Partner-Channel zu gewinnen, könnte indirekten Zugang zu 40.000+ deutschen Enterprise-Kunden schaffen. Der Kundenservice-Automatisierungs-Anwendungsfall ist sofort und quantifizierbar (deutsche Call-Center-Betrieb ist teuer), und Telcos haben große interne Entwicklerteams, die schneller von der API-Nutzung zur Enterprise-Vereinbarung übergehen können als andere DACH-Vertikale.",
    interviewAngle:
      "Der T-Systems-Aspekt ist ein starkes Signal für DACH-Marktkenntnis — die meisten Personen nennen Deutsche Telekom als Kundenziel, ohne zu erkennen, dass T-Systems das wichtigere kommerzielle Gespräch ist (Partner vs. Kunde). Bei der Frage 'Wie würden Sie das Telco-Vertikalsegment in DACH angehen?' zeigt das duale Play — T-Systems sowohl als Kunde als auch als Channel — Markt-Nuancen.",
    example:
      "Vodafones Head of AI bei Vodafone Deutschland möchte die Erstlösungsrate für B2B-Kundenservice auf Deutsch automatisieren. Sie bearbeiten 80.000 Tickets/Monat; 60% erfordern einen menschlichen Agenten. Eine Claude-basierte Triage-Schicht leitet vor und entwirft Antworten für 40% der Tickets, was die durchschnittliche Bearbeitungszeit um 4 Minuten pro Ticket reduziert. Der Champion ist in CX, aber der wirtschaftliche Entscheider ist der COO. Der Deal wird nach einem 8-wöchigen Piloten auf echten (anonymisierten) Ticket-Daten gewonnen.",
    sampleQuestions: [
      {
        question:
          "T-Systems ist der Enterprise-IT-Arm der Deutschen Telekom. Wie würden Sie sie angehen — als Kunden, als Channel-Partner oder beides, und wie ist die Reihenfolge?",
        answerThemes: [
          "Beides — aber die Reihenfolge ist entscheidend: zuerst einen direkten T-Systems-internen KI-Deal abschließen, dann diese Beziehung nutzen, um das Partner-Gespräch zu eröffnen",
          "Interner Anwendungsfall: T-Systems' eigenes Wissensmanagement, technische Dokumentation für 40.000+ Kundenengagements, internes IT-Service-Desk-Automatisierung",
          "Channel-Play: T-Systems verkauft Microsoft-, AWS- und Google-Cloud-Services an 40.000+ Enterprise-Kunden weiter — Claude in ihr KI-Portfolio aufzunehmen, erreicht Accounts, die Anthropic nicht direkt abdecken kann",
          "Partner-Ökonomie: T-Systems würde eine Reseller-Marge und Co-Sell-Rechte wollen — erfordert eine formelle Partnerschaftsvereinbarung mit Anthropics BD-Team",
          "Risiko: T-Systems hat bestehende KI-Anbieterbeziehungen (Microsoft Copilot, Google AI); Claude als komplementär (besseres Reasoning, Safety-First) positionieren, nicht als Ersatz",
          "Einstieg: Head of AI/Innovation bei T-Systems AG ansprechen, nicht T-Systems' Beschaffung — ein technischer und kommerzieller Champion, kein Vendor-Manager wird gesucht",
          "Zeitplan: direkter Deal in Jahr 1; Partnerschaftsvereinbarung in Jahr 2, nachdem Vertrauen aufgebaut wurde",
        ],
      },
      {
        question:
          "Ein DACH-Telco hat einen bestehenden AWS-Bedrock-Vertrag, der bereits Claude-API-Zugang beinhaltet. Wie konvertieren Sie API-Nutzung in einen Enterprise-Deal?",
        answerThemes: [
          "API-Nutzung auf Bedrock ist ein warmes Signal — als qualifizierter Inbound behandeln, nicht als Cold Account",
          "Bedrock liefert Claude als reine API; Enterprise fügt hinzu: dedizierter Support, individuelle Ratenlimits, Datenverarbeitungsvereinbarung, SLA, kein Training auf Daten",
          "Den internen Champion finden: Wer nutzt die API? Was bauen sie? Was sind die Skalierungsambitionen?",
          "Auslöser für Enterprise-Konvertierung: wenn sie mit kundenseitigen Workloads in die Produktion wollen — da greifen Enterprise-Anforderungen",
          "Der wirtschaftliche Entscheider ist typischerweise CTO oder Head of AI, nicht das Entwicklerteam, das die API nutzt",
          "Die AWS-Beziehung nicht untergraben — als 'Optimierung Ihrer KI-Beschaffung' rahmen, nicht als Bedrock ersetzen",
          "Einzigartiger Enterprise-Mehrwert gegenüber Bedrock allein: priorisierter Engineering-Support, Account-Team, Roadmap-Zugang, individuelle Sicherheitsüberprüfung",
        ],
      },
    ],
  },
  "dach-mittelstand": {
    title: "Mittelstand — Segmentprofil & Sales Motion",
    definition:
      "Der deutsche Mittelstand ist eine strukturelle wirtschaftliche Realität, nicht nur eine Größenkategorie: familiengeführte oder gründergeführte Unternehmen mit 10 Mio. €–2 Mrd. € Umsatz, typischerweise 50–5.000 Mitarbeiter, oft weltführend in Nischenindustrie- oder Präzisionsfertigungssektoren. Sie sind in Bayern, Baden-Württemberg, NRW und Hessen konzentriert. Wichtige Merkmale, die den KI-Vertrieb prägen: (1) CEO oder Eigentümer-Betreiber trifft alle wesentlichen Technologieentscheidungen — es gibt keinen CDO, oft keinen CTO; (2) SAP ist das dominante ERP und der primäre IT-Anknüpfungspunkt — das SAP-Partner-Ökosystem ist der glaubwürdigste Channel in den Mittelstand; (3) Exportlastig, was bedeutet, dass englischsprachige KI-Tools neben deutschsprachigen primären Betrieben einen sekundären Anwendungsfall haben; (4) Tiefes Fachwissen in engen technischen Domänen (Präzisionsinstrumente, Spezialchemikalien, Automobilteile) — sie wollen keine allzweck-KI, sie wollen etwas, das ihre Domäne versteht; (5) KI-Kompetenz ist niedriger als bei großen Konzernen — der Verkaufszyklus beginnt mit Aufklärung, nicht mit Qualifizierung; (6) Loyalität ist extrem hoch, wenn gewonnen — Mittelstandsunternehmen wechseln selten, und Peer-to-Peer-Referenzen (Unternehmer spricht mit Unternehmer in derselben Branche) sind das mächtigste Verkaufswerkzeug überhaupt.",
    whyItMatters:
      "Mittelstand ist das schwierigste Segment für eine direkte Abdeckung, aber der größte adressierbare Markt in Deutschland nach Unternehmensanzahl. Eine direkte Enterprise-Bewegung skaliert hier nicht — ACV pro Deal ist zu niedrig (20.000–150.000 €) und Verkaufszyklen zu lang für den Umsatz. Das richtige GTM-Modell ist indirekt: einen Channel über SAP-Partner, branchenspezifische Systemintegratoren und regionale Unternehmensverbände (IHK, Bitkom, Branchen-Verbände) aufbauen. Eine gut verpackte Branchenvertikal-Lösung, die über einen etablierten Mittelstands-SAP-Partner verkauft wird, kann mehr Umsatz generieren als 20 direkte Deals. Dieses Channel-Modell zu verstehen, unterscheidet einen generischen Enterprise-Vertriebshintergrund von DACH-spezifischem GTM-Wissen.",
    interviewAngle:
      "Das ist ein Test, ob man weiß, dass eine US-amerikanische direkte Enterprise-Bewegung für den Mittelstand nicht funktioniert. Die starke Antwort erkennt die Bedeutung des Segments für die deutsche Wirtschaft an, erklärt, warum direkte Abdeckung im Maßstab wirtschaftlich nicht tragfähig ist, und schlägt ein partnergetriebenes Modell mit spezifischen Channel-Typen vor (SAP-Partner, regionale Systemintegratoren, Branchenverbände). Bonuspunkte für die Nennung von IHK, Bitkom und VDMA als Ökosystem-Einstiegspunkte.",
    example:
      "Ein familiengeführtes Präzisionstechnikunternehmen in Baden-Württemberg (200 Mio. € Umsatz, 800 Mitarbeiter) erstellt jährlich technische Dokumentation für 3.000 Komponenten — alles auf Deutsch, alles manuell von Ingenieuren geschrieben. Der CEO möchte die Zeit, die Ingenieure für Dokumentation aufwenden, von 30 % auf 10 % ihrer Woche reduzieren. Ein Claude-basierter Dokumentationsassistent erstellt Erstentwürfe aus Ingenieurnotizen und CAD-Spezifikationen. Der Deal wird über den bestehenden SAP-Partner des Unternehmens bezogen (der ERP übernimmt und jetzt KI als Add-on anbietet). ACV: 45.000 €. Referenzwert: unschätzbar — der CEO spricht auf dem Treffen seines regionalen VDMA-Chapters.",
    sampleQuestions: [
      {
        question:
          "Warum skaliert eine direkte Enterprise-Vertriebsbewegung für den Mittelstand nicht, und welches GTM-Modell würden Sie stattdessen aufbauen?",
        answerThemes: [
          "Direkte Bewegungsökonomie funktioniert nicht: ACV zu niedrig (20.000–150.000 €), Verkaufszyklen zu lang (6–12 Monate), Käuferaufklärung erforderlich — Customer Acquisition Cost übersteigt den Deal-Wert",
          "Das richtige Modell: indirekt / partnergeführt — einen Channel über SAP-Partner, regionale Systemintegratoren, Branchenverbände aufbauen",
          "SAP-Partner-Channel: >1.000 SAP-Partner in DACH bedienen Mittelstands-Accounts; sie haben Vertrauen, Beziehungen und ERP-Integrationszugang",
          "Branchenverbände: VDMA (Maschinenbau), ZVEI (Elektronik), IHK (Industrie- und Handelskammern) haben direkte Mittelstands-Beziehungen und Glaubwürdigkeit",
          "Produktimplikation: Mittelstand benötigt verpackte, branchenspezifische Lösungen — keine rohe API oder generische Enterprise-Positionierung",
          "GTM-Sequenz: 2–3 dichte Branchen identifizieren (Präzisionstechnik, Spezialchemikalien); einen verpackten Anwendungsfall aufbauen; 1 Systemintegrator-Partner mit Mittelstandstiefe in diesem Vertikalsegment finden",
          "Erfolgskennzahl für Jahr 1: Partner unterzeichnet + Pilotprojekt mit 3 Mittelstands-Accounts über diesen Partner, keine direkten AEs, die Deals abschließen",
        ],
      },
      {
        question:
          "Wie funktionieren Peer-Referenzen und Community-Selling im Mittelstand, und wie bauen Sie ein Referenzprogramm auf, das diese Dynamik nutzt?",
        answerThemes: [
          "Mittelstands-CEOs vertrauen anderen Mittelstands-CEOs — eine Peer-Referenz von einem Unternehmen in derselben Branche und Region ist mehr wert als jede Fallstudie",
          "Kanäle für Peer-Einfluss: IHK-Veranstaltungen, VDMA-Chapter-Treffen, Bitkom-Foren, Branchenmessen (Hannover Messe, Bauma, ACHEMA)",
          "Referenzprogramm-Design: 3–5 Early Adopter identifizieren, die in ihren Gemeinschaften respektiert werden; unverhältnismäßig in ihren Erfolg investieren; sie dazu bewegen, einen Anruf entgegenzunehmen oder auf einer Veranstaltung zu sprechen",
          "Sie keine Fallstudien schreiben lassen — anbieten, sie selbst zu schreiben, nur ihr Zitat und ihre Genehmigung sind nötig",
          "Referenzanreize in Deutschland: direkte Rabatte sind weniger wirksam als exklusiver Zugang (frühe Feature-Vorschauen, dedizierter Support) — Mittelstands-CEOs wollen nicht so aussehen, als hätten sie Geld für eine Empfehlung genommen",
          "Sprecher-Circuit: Branchenverband-Sprecherplätze (VDMA, IHK-Keynote) positionieren Anthropic und den Referenzkunden gleichzeitig",
          "Messung: Referenzanrufe pro Quartal verfolgen, nicht Fallstudie-Downloads — ein warmer Anruf von einem CEO an einen Interessenten schließt Deals; eine PDF nicht",
        ],
      },
    ],
  },
};

export default t;
