import type { InterviewQuestion } from "@/content/types";

export const allInterviewQuestions: InterviewQuestion[] = [
  // ── Intro ──────────────────────────────────────────────────────────────────
  {
    id: "iv-intro-01",
    type: "intro",
    question:
      "Walk me through your career so far and what brought you to this GTM Strategy & Operations role at Anthropic.",
    watchFor: [
      "Clear structure (chronological or thematic) and stays under ~2 minutes without rambling",
      "Threads a narrative from Meta DACH ops to Smile Identity GTM to Sixt — not a CV read-out",
      "Surfaces role-fit signals: GTM strategy, DACH context, enterprise B2B SaaS, AI-native operating",
      "Genuine energy when talking about Anthropic's mission and safe, beneficial AI",
    ],
    de: {
      question:
        "Erzähl mir kurz von deinem Werdegang und was dich zu dieser GTM Strategy & Operations Rolle bei Anthropic geführt hat.",
      watchFor: [
        "Klare Struktur (chronologisch oder thematisch), bleibt unter ~2 Minuten und schweift nicht ab",
        "Erzählt einen roten Faden von Meta DACH über Smile Identity zu Sixt, statt den Lebenslauf abzulesen",
        "Bringt Rollen-Fit-Signale: GTM-Strategie, DACH-Kontext, Enterprise B2B SaaS, AI-native Arbeitsweise",
        "Echte Begeisterung für Anthropics Mission und sichere, nützliche KI",
      ],
    },
  },

  // ── CV-probe pool (4 variants) ────────────────────────────────────────────
  {
    id: "iv-cv-01",
    type: "cv-probe",
    question:
      "Verify a specific role. Pick one position from the CV and ask Navid to explain his concrete contribution and how success was measured.",
    tip: "Open the CV, point at a single role (e.g. 'Head of Marketing Analytics at Agoda' or 'Chief Growth Officer at Smile Identity'), and ask: what exactly did you own, and what were the success metrics your boss judged you on?",
    watchFor: [
      "Specificity: concrete numbers, timelines, team sizes, named stakeholders, real KPIs",
      "Ownership language: clear 'I did X' vs 'we did Y'; can separate his work from the team's",
      "Alignment with the CV bullet — no inflation, no contradiction with what's written",
      "Confident delivery without hedging ('kind of', 'sort of', 'I think we maybe...')",
    ],
    de: {
      question:
        "Eine konkrete Rolle hinterfragen. Such dir eine Position aus dem CV aus und lass Navid seinen genauen Beitrag und die Erfolgskriterien erklären.",
      tip: "Öffne den CV, zeig auf eine Rolle (z. B. 'Head of Marketing Analytics bei Agoda' oder 'Chief Growth Officer bei Smile Identity') und frag: Wofür warst du genau verantwortlich, und an welchen KPIs hat dich dein Chef gemessen?",
      watchFor: [
        "Spezifität: konkrete Zahlen, Zeiträume, Teamgrößen, namentliche Stakeholder, echte KPIs",
        "Ownership: klares 'Ich habe X gemacht' vs. 'wir haben Y gemacht'; trennt seinen Anteil vom Teamergebnis",
        "Stimmt mit dem CV-Bullet überein — keine Aufblähung, kein Widerspruch zum Geschriebenen",
        "Selbstbewusster Vortrag ohne Weichspüler ('irgendwie', 'so ein bisschen', 'ich glaube...')",
      ],
    },
  },
  {
    id: "iv-cv-02",
    type: "cv-probe",
    question:
      "Stress-test a quantified achievement. Pick one number on the CV and have Navid walk through the methodology and his role.",
    tip: "Find a metric like 'grew ARR $1.5M to $6M', 'outperformed benchmarks by 5%+', or 'reduced operational complexity 70%+'. Ask: how was that measured, what was your specific role vs. the team's, and what would have happened if you'd done nothing?",
    watchFor: [
      "Walks through the methodology cleanly: baseline, intervention, measurement window, attribution",
      "Honest split between 'I' and 'we'; names other people who contributed",
      "Counterfactual is credible — can articulate what would have happened without his work",
      "Numbers match the CV exactly; no quiet rounding up or shifting the timeframe",
    ],
    de: {
      question:
        "Eine quantifizierte Leistung prüfen. Such dir eine Kennzahl aus dem CV aus und lass Navid Methodik und seinen Anteil erklären.",
      tip: "Finde eine Zahl wie 'ARR von $1.5M auf $6M gewachsen', 'Benchmarks um 5%+ übertroffen' oder 'operative Komplexität um 70%+ reduziert'. Frag: Wie wurde das gemessen, was war dein konkreter Beitrag vs. dem Team, und was wäre passiert, wenn du nichts gemacht hättest?",
      watchFor: [
        "Erklärt die Methodik sauber: Baseline, Maßnahme, Messzeitraum, Attribution",
        "Ehrliche Trennung von 'ich' und 'wir'; nennt Kolleg:innen, die beigetragen haben",
        "Kontrafaktisch glaubwürdig — kann sagen, was ohne ihn passiert wäre",
        "Zahlen stimmen exakt mit dem CV überein; kein stilles Aufrunden oder Verschieben des Zeitraums",
      ],
    },
  },
  {
    id: "iv-cv-03",
    type: "cv-probe",
    question:
      "Probe a job transition. Pick one move between companies and ask why he left, what he was looking for, and whether the next role delivered.",
    tip: "Pick any transition — Meta to Smile Identity, Smile Identity to Agoda, or Agoda to Sixt. Ask: why did you leave, what were you optimising for in the next role, and did it actually deliver on that?",
    watchFor: [
      "Coherent narrative: the 'why I left' connects logically to the 'what I picked next'",
      "Self-awareness about what worked and what didn't in the new role; no rose-tinted glasses",
      "No badmouthing of former employers; talks about pull factors more than push",
      "Connects the pattern to why Anthropic / DACH GTM is the right next step now",
    ],
    de: {
      question:
        "Einen Jobwechsel hinterfragen. Such dir einen Wechsel zwischen Firmen aus und frag, warum er gegangen ist, wonach er gesucht hat, und ob die nächste Rolle das eingelöst hat.",
      tip: "Such dir einen Wechsel aus — Meta zu Smile Identity, Smile Identity zu Agoda oder Agoda zu Sixt. Frag: Warum bist du gegangen, worauf hast du beim nächsten Schritt optimiert, und hat die neue Rolle das eingelöst?",
      watchFor: [
        "Stimmiger roter Faden: das 'Warum weg' passt logisch zum 'Was als nächstes'",
        "Selbstreflexion über das, was in der neuen Rolle funktioniert hat und was nicht; keine Schönfärberei",
        "Kein Schlechtreden früherer Arbeitgeber; redet mehr über Pull- als Push-Faktoren",
        "Verbindet das Muster mit dem 'warum jetzt Anthropic / DACH GTM' der nächste richtige Schritt ist",
      ],
    },
  },
  {
    id: "iv-cv-04",
    type: "cv-probe",
    question:
      "Pressure-test a skill or tool. Pick something from his stack and ask for a concrete moment under ambiguity or pressure.",
    tip: "Pick a skill or tool from the CV — SQL, Salesforce, Tableau, Claude Code / multi-agent workflows, territory design, or quota planning. Ask for a specific time he used it under tight deadline or with messy data, and what trade-offs he made.",
    watchFor: [
      "Concrete situation: real deadline, real stakeholders, real data — not a generic 'I always do X'",
      "Trade-offs articulated: what he chose to do and what he consciously did not do",
      "STAR-style structure (Situation, Task, Action, Result) without it sounding rehearsed",
      "Honest about what he'd do differently next time; no claim of perfect execution",
    ],
    de: {
      question:
        "Eine Skill- oder Tool-Aussage prüfen. Such dir etwas aus seinem Stack aus und lass ihn ein konkretes Beispiel aus einer Drucksituation oder unklaren Lage erzählen.",
      tip: "Such dir einen Skill oder ein Tool aus dem CV aus — SQL, Salesforce, Tableau, Claude Code / Multi-Agent-Workflows, Territory Design oder Quota Planning. Frag nach einer konkreten Situation unter Zeitdruck oder mit unsauberen Daten, und welche Trade-offs er gemacht hat.",
      watchFor: [
        "Konkrete Situation: echte Deadline, echte Stakeholder, echte Daten — kein generisches 'ich mache immer X'",
        "Trade-offs ausgesprochen: was er gemacht hat und was er bewusst nicht gemacht hat",
        "STAR-Struktur (Situation, Task, Action, Result) ohne auswendig gelernt zu klingen",
        "Ehrlich darüber, was er heute anders machen würde; keine Behauptung perfekter Umsetzung",
      ],
    },
  },

  // ── STAR pool (8 questions) ───────────────────────────────────────────────
  {
    id: "iv-star-01",
    type: "star",
    question:
      "Tell me about a time you built a GTM process from scratch — a forecasting cadence, lead-routing logic, territory or quota model — that hadn't existed before. Walk me through how you scoped it, what you actually built, and what changed once it was live.",
    watchFor: [
      "S: Names the company, segment, and a concrete starting state (e.g. 'no forecast cadence at Smile Identity Series B', 'territory model rebuilt at Sixt') — not 'at a previous company'.",
      "T: Clarifies whether he was the formal owner or a force multiplier, and what the explicit success metric was (forecast accuracy %, ramp time, coverage ratio).",
      "A: Describes the artifact in detail — stages, fields, SFDC config, who he interviewed, how he sequenced rollout — rather than 'I aligned stakeholders and built a framework'.",
      "R: Quantifies adoption and downstream impact (forecast accuracy delta, pipeline coverage, time-to-quota), and reflects on what he'd design differently at Anthropic's enterprise scale.",
    ],
    de: {
      question:
        "Erzähl mir von einer Situation, in der du einen GTM-Prozess von Grund auf aufgebaut hast — eine Forecast-Kadenz, Lead-Routing-Logik, ein Territory- oder Quota-Modell, das es vorher nicht gab. Führ mich durch das Scoping, was du konkret gebaut hast, und was sich geändert hat, als es live ging.",
      watchFor: [
        "S: Nennt Firma, Segment und einen konkreten Ausgangszustand (z. B. 'kein Forecast-Rhythmus bei Smile Identity', 'Territory-Modell bei Sixt neu aufgesetzt') — nicht nur 'bei einem früheren Arbeitgeber'.",
        "T: Macht klar, ob er formaler Owner oder Enabler war, und was die explizite Erfolgsmetrik war (Forecast-Genauigkeit, Ramp-Zeit, Coverage-Ratio).",
        "A: Beschreibt das Artefakt im Detail — Stages, Felder, SFDC-Konfiguration, mit wem er gesprochen hat, wie der Rollout sequenziert war — nicht nur 'Stakeholder aligned und Framework gebaut'.",
        "R: Quantifiziert Adoption und Wirkung (Forecast-Delta, Pipeline-Coverage, Time-to-Quota) und reflektiert, was er auf Anthropic-Enterprise-Niveau anders machen würde.",
      ],
    },
  },
  {
    id: "iv-star-02",
    type: "star",
    question:
      "Walk me through a situation where Sales, CS, Finance, and Marketing all had competing incentives and you had to land them on a single plan. What were the actual disagreements, and how did you bring them together?",
    watchFor: [
      "S: Surfaces a real tension (e.g. Sales pushing volume vs. Finance defending margin, Marketing's MQL definition vs. Sales' SQL bar) tied to a specific quarter or planning cycle.",
      "T: Articulates whether he held the pen or was brokering — and names the decision that needed to be made by when.",
      "A: Demonstrates stakeholder mechanics: 1:1 prep, where he pre-wired support, the data he brought to the joint meeting, the trade-offs he made personally to unlock the deal.",
      "R: Talks about durability — did the alignment hold past the meeting? — and what the team did differently in the next cycle.",
    ],
    de: {
      question:
        "Schilder mir eine Situation, in der Sales, CS, Finance und Marketing widersprüchliche Anreize hatten und du sie auf einen gemeinsamen Plan bringen musstest. Was waren die echten Streitpunkte, und wie hast du sie zusammengeführt?",
      watchFor: [
        "S: Bringt eine echte Spannung auf den Tisch (z. B. Sales auf Volumen vs. Finance auf Marge, MQL-Definition Marketing vs. SQL-Hürde Sales) verknüpft mit einem konkreten Quartal oder Planungszyklus.",
        "T: Macht klar, ob er die Feder geführt oder vermittelt hat — und welche Entscheidung bis wann fallen musste.",
        "A: Zeigt Stakeholder-Mechanik: 1:1-Vorbereitung, wo er Support vorab geklärt hat, welche Daten er mitgebracht hat, welche Trade-offs er selbst eingegangen ist.",
        "R: Spricht über Nachhaltigkeit — hat das Alignment über das Meeting hinaus gehalten? — und was im nächsten Zyklus anders lief.",
      ],
    },
  },
  {
    id: "iv-star-03",
    type: "star",
    question:
      "Describe a moment when a single piece of analysis — a model, a dashboard, a cohort cut — actually changed leadership's mind on a strategic question. What were they about to do, and what did the data show?",
    watchFor: [
      "S: Anchors a specific decision leadership was leaning toward (channel cut, market exit, headcount add) and the room he was in.",
      "T: States the question precisely and what 'changing their mind' would look like — not 'I provided insights'.",
      "A: Walks through the analytical choices: dataset, assumptions, what he chose to leave out, how he visualized it for an exec audience. Bonus: shows he stress-tested his own conclusion.",
      "R: Names the decision that flipped, the magnitude (revenue, spend, headcount), and credibility that compounded into later asks.",
    ],
    de: {
      question:
        "Beschreib einen Moment, in dem eine einzelne Analyse — ein Modell, ein Dashboard, ein Kohortenschnitt — die Meinung des Leadership zu einer strategischen Frage tatsächlich gedreht hat. Was wollten sie tun, und was zeigten die Daten?",
      watchFor: [
        "S: Verankert eine konkrete Entscheidung, zu der das Leadership tendierte (Kanal-Cut, Marktaustritt, Headcount-Aufbau) und in welchem Setting er war.",
        "T: Formuliert die Fragestellung präzise und was 'Meinungswechsel' konkret bedeutet hätte — nicht 'ich habe Insights geliefert'.",
        "A: Geht auf analytische Entscheidungen ein: Datenbasis, Annahmen, was er bewusst weggelassen hat, wie er es für ein Exec-Publikum aufbereitet hat. Plus: hat er die eigene Schlussfolgerung gegengeprüft?",
        "R: Nennt die gedrehte Entscheidung, die Größenordnung (Revenue, Budget, Headcount) und die Glaubwürdigkeit, die für spätere Themen entstand.",
      ],
    },
  },
  {
    id: "iv-star-04",
    type: "star",
    question:
      "Tell me about a deal or commercial relationship where DACH-specific dynamics — procurement rigor, GDPR/data residency, hierarchy, or German-language expectations — materially shaped the outcome. What did you do differently than you would have in another region?",
    watchFor: [
      "S: Names a specific deal, partner, or institution (bank, automotive OEM, public-sector body) and the DACH dynamic at play — not generic 'Germans like detail'.",
      "T: Clarifies his role in the deal cycle (deal desk, GTM strategist, negotiator) and what was at stake commercially.",
      "A: Concrete adjustments — bringing in a German-native AE, restructuring the contract for GDPR/AVV, sequencing a Geschäftsführer meeting before the working-level demo, building a TOMs annex.",
      "R: Outcome of the deal AND a generalizable insight he now applies to other DACH motions; relevant for Anthropic's enterprise vertical playbooks.",
    ],
    de: {
      question:
        "Erzähl von einem Deal oder einer kommerziellen Beziehung, bei dem DACH-spezifische Dynamiken — Einkaufsprozesse, DSGVO/Datenresidenz, Hierarchie, Erwartung an deutsche Sprache — den Ausgang substanziell geprägt haben. Was hast du anders gemacht als in einer anderen Region?",
      watchFor: [
        "S: Nennt einen konkreten Deal, Partner oder eine Institution (Bank, OEM, öffentliche Hand) und die DACH-Dynamik konkret — nicht pauschal 'Deutsche mögen Details'.",
        "T: Macht seine Rolle im Deal-Zyklus klar (Deal Desk, GTM-Strategist, Verhandler) und was kommerziell auf dem Spiel stand.",
        "A: Konkrete Anpassungen — deutschsprachiger AE im Lead, AVV-konforme Vertragsstruktur, Geschäftsführer-Termin vor dem Working-Level-Demo, TOMs-Anhang aufgesetzt.",
        "R: Deal-Ergebnis UND eine übertragbare Erkenntnis für andere DACH-Motions — direkt anschlussfähig an Anthropics Enterprise-Vertical-Playbooks.",
      ],
    },
  },
  {
    id: "iv-star-05",
    type: "star",
    question:
      "Tell me about a time you had to bring bad news to leadership — a missed forecast, a slipped target, a churned strategic account. How did you frame it, and what happened next?",
    watchFor: [
      "S: Owns a real miss with stakes (named account, named number, named quarter) — not a near-miss reframed as a win.",
      "T: Was clear on his accountability vs. shared accountability before walking in; didn't pre-shop the blame.",
      "A: Demonstrates emotional intelligence in framing — leading with cause and corrective action, not surprise; choice of channel (1:1 vs. forum), tone, and what data he brought.",
      "R: Reflects on the leadership reaction, how trust evolved, and the structural change (process, comp, cadence) he drove so the same miss wouldn't recur.",
    ],
    de: {
      question:
        "Erzähl von einer Situation, in der du dem Leadership schlechte Nachrichten überbringen musstest — verfehlter Forecast, gerissenes Target, abgewanderter Strategic Account. Wie hast du es formuliert, und was ist daraus geworden?",
      watchFor: [
        "S: Steht zu einem echten Miss mit Konsequenzen (benannter Account, Zahl, Quartal) — nicht ein knapper Treffer, der als Sieg umgedeutet wird.",
        "T: War klar über eigene vs. geteilte Verantwortung, bevor er in den Raum ging; hat Schuld nicht vorher 'verteilt'.",
        "A: Zeigt emotionale Intelligenz im Framing — beginnt mit Ursache und Gegenmaßnahme, nicht mit der Überraschung; bewusste Wahl von Kanal (1:1 vs. Forum), Tonalität, mitgebrachten Daten.",
        "R: Reflektiert die Reaktion des Leaderships, wie sich Vertrauen entwickelt hat, und welche strukturelle Änderung (Prozess, Comp, Kadenz) er angestoßen hat.",
      ],
    },
  },
  {
    id: "iv-star-06",
    type: "star",
    question:
      "Walk me through a cross-functional initiative where you were not the formal owner but you ended up driving it. How did you build the mandate to lead, and how did you handle the actual owner?",
    watchFor: [
      "S: Identifies a real initiative (an AI adoption program, an analytics rebuild, a partnership motion) and explicitly names who the formal owner was.",
      "T: Articulates why he stepped in — vacuum, capability gap, urgency — without making the owner a villain.",
      "A: Concrete moves to earn legitimacy: framing the work in the owner's language, giving them credit publicly, building a coalition of peers, knowing when to defer.",
      "R: Outcome of the initiative AND the state of the relationship with the owner afterward; signals he can operate Anthropic's matrixed RevOps/Sales/Product environment.",
    ],
    de: {
      question:
        "Führ mich durch eine bereichsübergreifende Initiative, bei der du nicht der formale Owner warst, aber sie am Ende getrieben hast. Wie hast du dir das Mandat erarbeitet, und wie bist du mit dem eigentlichen Owner umgegangen?",
      watchFor: [
        "S: Benennt eine echte Initiative (AI-Adoption-Programm, Analytics-Rebuild, Partnership-Motion) und sagt ausdrücklich, wer formaler Owner war.",
        "T: Erklärt, warum er eingesprungen ist — Vakuum, Capability Gap, Dringlichkeit — ohne den Owner zum Gegenspieler zu machen.",
        "A: Konkrete Schritte zur Legitimation: Arbeit in der Sprache des Owners framen, ihm öffentlich Credit geben, Koalition unter Peers aufbauen, wissen wann zurückstecken.",
        "R: Ergebnis der Initiative UND Zustand der Beziehung zum Owner danach; zeigt, ob er Anthropics Matrix aus RevOps/Sales/Product navigieren kann.",
      ],
    },
  },
  {
    id: "iv-star-07",
    type: "star",
    question:
      "Tell me about a project that genuinely went sideways — a model that didn't ship, a playbook that flopped, a bet that didn't pay off. What signals did you miss, and how did you salvage or wind it down?",
    watchFor: [
      "S: Picks a project he can't easily reframe as a hidden win; names the failure mode honestly (adoption, accuracy, timing, scope creep).",
      "T: Was clear on what success had been promised and to whom — willingness to expose the gap.",
      "A: Diagnostic depth — what early signal he missed, what he tried to fix mid-flight, the call to escalate vs. wind down, who he brought into the post-mortem.",
      "R: A specific lesson that visibly changed his next project's design; avoids 'I learned to communicate more' platitudes.",
    ],
    de: {
      question:
        "Erzähl von einem Projekt, das wirklich schiefgelaufen ist — ein Modell, das nicht gelauncht ist, ein Playbook, das gefloppt ist, eine Wette, die nicht aufgegangen ist. Welche Signale hast du übersehen, und wie hast du es gerettet oder beerdigt?",
      watchFor: [
        "S: Wählt ein Projekt, das er nicht einfach als versteckten Erfolg umdeuten kann; benennt den Failure-Modus ehrlich (Adoption, Genauigkeit, Timing, Scope Creep).",
        "T: War klar, was wem versprochen war — bereit, die Lücke offenzulegen.",
        "A: Diagnose-Tiefe — welches frühe Signal übersehen, was mitten im Flug versucht, Entscheidung Eskalation vs. Abbruch, wen er ins Post-mortem geholt hat.",
        "R: Eine konkrete Lehre, die sichtbar das Design des nächsten Projekts verändert hat; vermeidet Floskeln wie 'besser kommunizieren'.",
      ],
    },
  },
  {
    id: "iv-star-08",
    type: "star",
    question:
      "Describe a moment when leadership asked you to deliver two things that were genuinely in tension — growth and efficiency, speed and quality, two competing OKRs. How did you frame the trade-off, and what got cut?",
    watchFor: [
      "S: Identifies the two real targets and the structural tension (e.g. 70% complexity reduction while preserving revenue at Agoda; ARR growth vs. burn at Smile Identity).",
      "T: Was explicit about who set the conflicting goals and whether he renegotiated the brief or absorbed the tension.",
      "A: Quantitative trade-off logic — what he modeled, the explicit choice he made on what to cut/defer, how he sequenced phases, what guardrail metric he installed.",
      "R: Result on both axes (not just the one he optimized for) and how he communicated the trade-off back up — directly relevant to Anthropic's growth-with-discipline stage.",
    ],
    de: {
      question:
        "Beschreib einen Moment, in dem das Leadership zwei Dinge von dir wollte, die wirklich in Konflikt standen — Wachstum und Effizienz, Tempo und Qualität, zwei konkurrierende OKRs. Wie hast du den Trade-off geframet, und was ist gestrichen worden?",
      watchFor: [
        "S: Benennt die zwei realen Ziele und die strukturelle Spannung (z. B. 70 % Komplexitätsreduktion bei vollem Revenue-Output bei Agoda; ARR-Wachstum vs. Burn bei Smile Identity).",
        "T: Macht klar, wer die widersprüchlichen Ziele gesetzt hat und ob er den Auftrag neu verhandelt oder die Spannung absorbiert hat.",
        "A: Quantitative Trade-off-Logik — was er modelliert hat, die explizite Entscheidung, was gestrichen/verschoben wurde, Phasen-Sequenzierung, welche Guardrail-Metrik er installiert hat.",
        "R: Ergebnis auf beiden Achsen (nicht nur der optimierten) und wie er den Trade-off nach oben kommuniziert hat — direkt relevant für Anthropics Wachstums-mit-Disziplin-Phase.",
      ],
    },
  },

  // ── What-if pool (10 scenarios) ────────────────────────────────────────────
  {
    id: "iv-whatif-01",
    type: "what-if",
    question:
      "Imagine Anthropic decides to formally enter the Swiss market in Q3 next year. As the DACH GTM lead, walk me through how you'd approach the entry strategy — from initial prioritization through sales coverage, partnerships, and pricing. What would you sequence first, and what would you deliberately deprioritize?",
    watchFor: [
      "Structures the problem before jumping into tactics — e.g., segments by industry (banking/pharma heavy in CH), company size, and use case before designing coverage",
      "Acknowledges Swiss-specific dynamics: FINMA, data residency expectations, CHF pricing, German-French-Italian language split, neutrality on US vendors",
      "Sequences with clear logic (e.g., land with 2-3 lighthouse FS accounts via existing EU presence, then layer SI partnerships, then expand coverage) rather than parallel everything",
      "Names trade-offs explicitly — what gets deprioritized (e.g., SMB, French-speaking cantons in year one) and why",
    ],
    de: {
      question:
        "Stell dir vor, Anthropic entscheidet sich, im dritten Quartal nächsten Jahres formell in den Schweizer Markt einzutreten. Als GTM-Lead für DACH — wie würdest du den Markteintritt angehen? Führe mich durch deine Priorisierung, das Sequencing, Partnerschaften, Sales Coverage und Pricing-Überlegungen. Was würdest du zuerst angehen, und was bewusst zurückstellen?",
      watchFor: [
        "Strukturiert das Problem, bevor er in Taktik springt — segmentiert nach Branche (FS, Pharma), Unternehmensgröße und Use Case, bevor er Coverage designt",
        "Berücksichtigt schweizspezifische Dynamiken: FINMA, Datenresidenz, CHF-Pricing, Sprachregionen (DE/FR/IT), Neutralitätsthematik bei US-Anbietern",
        "Sequenziert nachvollziehbar (z.B. Einstieg über 2-3 Leuchtturm-FS-Kunden, dann SI-Partnerschaften, dann Coverage-Ausbau) statt alles parallel zu starten",
        "Benennt Trade-offs explizit — was wird im ersten Jahr bewusst nicht adressiert (SMB, Romandie) und warum",
      ],
    },
  },
  {
    id: "iv-whatif-02",
    type: "what-if",
    question:
      "Suppose you've just inherited the DACH region and you notice lead-to-opportunity conversion is consistently 30% below other EMEA regions, quarter after quarter. How do you diagnose what's going on, and what would your first 60 days look like?",
    watchFor: [
      "Hypothesis-driven diagnosis: separates lead quality, ICP fit, qualification rigor, SDR/AE handoff, and cultural/buying-cycle factors before assigning blame",
      "Pulls the right data — funnel by source, by segment, by rep, by industry — and triangulates with qualitative input from reps and lost-deal interviews",
      "Recognizes DACH-specific buyer behavior (longer cycles, procurement-heavy, works-council involvement) and whether benchmarks are even apples-to-apples",
      "Proposes a structured 60-day plan with clear milestones rather than a laundry list of fixes; identifies a couple of testable bets vs. boiling the ocean",
    ],
    de: {
      question:
        "Angenommen, du übernimmst gerade die DACH-Region und stellst fest, dass die Lead-to-Opportunity-Conversion seit mehreren Quartalen konstant 30% unter den anderen EMEA-Regionen liegt. Wie diagnostizierst du das Problem, und wie würden deine ersten 60 Tage aussehen?",
      watchFor: [
        "Hypothesengetriebene Diagnose: trennt Lead-Qualität, ICP-Fit, Qualifizierungstiefe, SDR/AE-Handoff und kulturelle Kauffaktoren, bevor er Schuldige sucht",
        "Zieht die richtigen Daten — Funnel nach Quelle, Segment, Rep, Branche — und trianguliert mit qualitativem Input aus Rep-Gesprächen und Lost-Deal-Reviews",
        "Erkennt DACH-spezifisches Buyer-Verhalten (längere Zyklen, Procurement-lastig, Betriebsrat) und hinterfragt, ob die Benchmarks überhaupt vergleichbar sind",
        "Schlägt einen strukturierten 60-Tage-Plan mit klaren Meilensteinen vor — wenige testbare Hypothesen statt Gießkanne",
      ],
    },
  },
  {
    id: "iv-whatif-03",
    type: "what-if",
    question:
      "Sales comes to you and asks: 'We need enterprise pricing for the German market. What should it look like?' Walk me through how you'd approach this. What's unique about German enterprise vs. just taking the US baseline and converting to euros?",
    watchFor: [
      "Doesn't default to FX conversion — thinks about willingness to pay, competitive anchoring, procurement norms, and value-based pricing per segment",
      "Surfaces German-specific factors: works councils, multi-year framework agreements, indexed pricing clauses, VAT treatment, public-sector pricing rules if relevant",
      "Considers packaging and discounting guardrails, not just headline price — floor pricing, volume tiers, ramp deals, MSA-friendly terms",
      "Quantitative reasoning: would reference comparable deals, win/loss data, and a sensitivity analysis rather than picking a number from intuition",
    ],
    de: {
      question:
        "Sales kommt auf dich zu und sagt: 'Wir brauchen Enterprise-Pricing für den deutschen Markt. Wie soll das aussehen?' Wie würdest du das angehen? Was ist einzigartig am deutschen Enterprise-Markt — verglichen damit, einfach den US-Baseline-Preis in Euro umzurechnen?",
      watchFor: [
        "Geht nicht den FX-Conversion-Weg — denkt an Zahlungsbereitschaft, Wettbewerbsanker, Beschaffungsnormen und wertbasiertes Pricing pro Segment",
        "Bringt deutsche Spezifika zur Sprache: Betriebsräte, Rahmenverträge, Indexierungsklauseln, MwSt-Behandlung, ggf. Vergaberecht",
        "Denkt an Packaging und Discount-Guardrails, nicht nur an den Listenpreis — Floor Pricing, Volumenstufen, Ramp Deals, MSA-taugliche Konditionen",
        "Quantitatives Denken: würde vergleichbare Deals, Win/Loss-Daten und Sensitivitätsanalyse heranziehen statt aus dem Bauch zu schießen",
      ],
    },
  },
  {
    id: "iv-whatif-04",
    type: "what-if",
    question:
      "A key strategic reseller in DACH — let's say one that sources roughly 15% of your regional pipeline — calls you up and says: 'We need a 30% margin increase, or we're walking.' How do you respond in the room, and how do you handle it over the next two weeks?",
    watchFor: [
      "Doesn't react emotionally or capitulate — buys time, asks what's actually driving the demand (margin pressure? competing vendor? change in their strategy?)",
      "Quantifies the BATNA on both sides: cost to replace the partner, partner's cost to replace Anthropic, real attribution of the 15% pipeline (sourced vs. influenced)",
      "Stakeholder map: who needs to know — Channel lead, RVP, Finance, Legal — and who decides; doesn't unilaterally negotiate",
      "Reframes from price to value: co-marketing, deal reg protection, MDF, certification — looks for non-margin levers before conceding cash",
    ],
    de: {
      question:
        "Ein strategischer Reseller in DACH — sagen wir einer, über den rund 15% deiner regionalen Pipeline läuft — ruft dich an und sagt: 'Wir brauchen 30% mehr Marge, sonst sind wir raus.' Wie reagierst du im Gespräch, und wie gehst du die nächsten zwei Wochen damit um?",
      watchFor: [
        "Reagiert nicht emotional und knickt nicht ein — verschafft sich Zeit, hinterfragt das eigentliche Motiv (Margendruck? Wettbewerber? Strategiewechsel?)",
        "Quantifiziert die BATNA beider Seiten: Kosten eines Partnerwechsels, Kosten für den Partner, Anthropic zu ersetzen, echte Pipeline-Attribution (sourced vs. influenced)",
        "Stakeholder-Mapping: wer muss eingebunden werden — Channel Lead, RVP, Finance, Legal — und wer entscheidet; verhandelt nicht im Alleingang",
        "Verschiebt das Gespräch von Preis zu Wert: Co-Marketing, Deal-Reg-Schutz, MDF, Zertifizierung — sucht Hebel jenseits von Cash-Marge",
      ],
    },
  },
  {
    id: "iv-whatif-05",
    type: "what-if",
    question:
      "Leadership asks you for a 12-month revenue forecast for a brand-new product launching in DACH. There's no historical data, no pipeline yet, and the product hasn't been sold anywhere else. How do you build the forecast, and how do you communicate the uncertainty?",
    watchFor: [
      "Triangulates multiple methods rather than picking one: top-down TAM/SAM/SOM, bottom-up rep-capacity model, analog-product comp (e.g., adoption curves of similar enterprise AI launches)",
      "Names assumptions explicitly and stress-tests them — ramp time, win rate, ACV distribution — and presents scenarios (bear/base/bull), not a single number",
      "Thinks about leading indicators he'd track to update the forecast monthly (qualified pipeline coverage, POC-to-paid conversion, etc.)",
      "Communicates uncertainty honestly to leadership without either sandbagging or over-promising — recognizes a forecast is a planning tool, not a commitment",
    ],
    de: {
      question:
        "Die Geschäftsleitung möchte von dir einen 12-Monats-Umsatzforecast für ein brandneues Produkt, das in DACH gelauncht wird. Keine Historie, keine Pipeline, das Produkt wurde noch nirgendwo verkauft. Wie baust du den Forecast auf, und wie kommunizierst du die Unsicherheit?",
      watchFor: [
        "Trianguliert mehrere Methoden statt nur einer: Top-down TAM/SAM/SOM, Bottom-up Rep-Capacity-Modell, Analog-Vergleich (Adoption-Kurven ähnlicher Enterprise-AI-Launches)",
        "Macht Annahmen explizit und testet sie unter Stress — Ramp-Time, Win Rate, ACV-Verteilung — und zeigt Szenarien (Bear/Base/Bull) statt einer einzelnen Zahl",
        "Denkt an Leading Indicators, mit denen er den Forecast monatlich nachschärft (qualifizierte Pipeline-Coverage, POC-zu-Paid-Conversion etc.)",
        "Kommuniziert Unsicherheit ehrlich gegenüber Leadership — weder Sandbagging noch Overpromising; versteht Forecast als Planungstool, nicht als Commitment",
      ],
    },
  },
  {
    id: "iv-whatif-06",
    type: "what-if",
    question:
      "Sales is closing deals that Customer Success says are 'unservable' given current onboarding capacity — implementations are slipping, NPS is dropping, and the two teams are openly fighting in Slack. You're asked to mediate. How do you handle it?",
    watchFor: [
      "Diagnoses the structural root cause, not just the interpersonal symptom — is comp misaligned, is qualification too loose, is CS under-resourced, or all three?",
      "Doesn't take a side; gets both leaders in a room and reframes around shared business outcomes (NRR, time-to-value) rather than 'sales vs. CS'",
      "Proposes concrete mechanisms: deal scoring/servability check at stage 4, capacity-aware booking, deal reviews with CS in the room, possibly comp clawbacks for churn",
      "Sees this as a GTM design problem — pipeline coverage, segment-level capacity planning — not just conflict resolution",
    ],
    de: {
      question:
        "Sales schließt Deals ab, die Customer Success bei der aktuellen Onboarding-Kapazität als 'nicht lieferbar' bezeichnet — Implementierungen verzögern sich, NPS fällt, und die beiden Teams streiten offen auf Slack. Du sollst vermitteln. Wie gehst du vor?",
      watchFor: [
        "Diagnostiziert die strukturelle Ursache, nicht nur das zwischenmenschliche Symptom — ist die Comp falsch incentiviert, ist Qualifizierung zu lasch, ist CS unterbesetzt — oder alles drei?",
        "Schlägt sich nicht auf eine Seite; bringt beide Leads zusammen und framed das Thema entlang gemeinsamer Business-Outcomes (NRR, Time-to-Value) statt 'Sales vs. CS'",
        "Schlägt konkrete Mechanismen vor: Servability-Check ab Stage 4, kapazitätsbewusstes Booking, Deal-Reviews mit CS im Raum, ggf. Comp-Clawback bei Churn",
        "Sieht das als GTM-Design-Problem — Pipeline-Coverage, segmentbezogene Kapazitätsplanung — nicht nur als Konfliktlösung",
      ],
    },
  },
  {
    id: "iv-whatif-07",
    type: "what-if",
    question:
      "It's six weeks into Q2, and leadership announces — due to a board commitment — that EMEA quota is being raised by 25% for the rest of the year. Reps are demoralized, your RVP is furious, and you have to operationalize this. Walk me through what you do in the first week.",
    watchFor: [
      "Manages up before managing down — pressure-tests the math with leadership (is this even achievable, what's the underlying assumption) before cascading",
      "Thinks about levers beyond 'just sell more': pipeline reallocation, accelerating renewals, pulling in expansion, opportunistic territories, SPIFFs on specific motions",
      "Acknowledges the human dimension — communication tone, retention risk on top reps, fairness of redistribution — not purely a spreadsheet exercise",
      "Builds a clear cadence: revised forecast within X days, weekly tracking, defined escalation triggers if gap widens",
    ],
    de: {
      question:
        "Wir sind sechs Wochen in Q2, und die Geschäftsleitung kündigt an — wegen eines Board-Commitments — dass die EMEA-Quote für den Rest des Jahres um 25% angehoben wird. Die Reps sind demoralisiert, dein RVP ist wütend, und du musst das operationalisieren. Wie sehen deine ersten sieben Tage aus?",
      watchFor: [
        "Managt nach oben, bevor er nach unten kaskadiert — challenged die Annahmen mit dem Leadership (ist das überhaupt erreichbar?), bevor er die Zahl weitergibt",
        "Denkt an Hebel jenseits von 'einfach mehr verkaufen': Pipeline-Reallokation, Renewal-Beschleunigung, Expansion vorziehen, opportunistische Territories, gezielte SPIFFs",
        "Anerkennt die menschliche Dimension — Kommunikationston, Fluktuationsrisiko bei Top-Reps, Fairness der Verteilung — nicht nur eine Excel-Übung",
        "Baut eine klare Kadenz: revidierter Forecast innerhalb X Tagen, wöchentliches Tracking, definierte Eskalations-Trigger, wenn die Lücke wächst",
      ],
    },
  },
  {
    id: "iv-whatif-08",
    type: "what-if",
    question:
      "A €5M expansion deal at a large German enterprise — let's say a DAX-listed insurer — stalls late-stage because their compliance team raises concerns about GDPR and the EU AI Act around Anthropic's data residency. The AE escalates to you. What do you do?",
    watchFor: [
      "Doesn't try to solve compliance alone — immediately loops in Legal, Privacy/DPO, Security, and Product; treats it as a cross-functional sprint with a clear owner",
      "Understands the substance: data residency vs. data processing, Schrems II implications, EU AI Act risk classification, model training vs. inference distinction",
      "Reframes the conversation with the customer's compliance team — gets their actual control requirements (DPA, SCCs, audit rights, sub-processor list) rather than abstract objections",
      "Thinks about precedent: a fix for one DAX customer likely unlocks others — escalates structurally to Product/Legal so it becomes a regional capability, not a one-off concession",
    ],
    de: {
      question:
        "Ein 5-Millionen-Euro-Expansion-Deal bei einem deutschen Großunternehmen — sagen wir einem DAX-gelisteten Versicherer — gerät spät im Zyklus ins Stocken, weil deren Compliance-Team GDPR- und EU-AI-Act-Bedenken zur Datenresidenz von Anthropic äußert. Der AE eskaliert zu dir. Wie gehst du vor?",
      watchFor: [
        "Versucht nicht, Compliance allein zu lösen — bindet sofort Legal, Datenschutz/DSB, Security und Product ein; behandelt es als cross-funktionalen Sprint mit klarem Owner",
        "Versteht die Substanz: Datenresidenz vs. Datenverarbeitung, Schrems-II-Implikationen, EU-AI-Act-Risikoklassen, Unterschied zwischen Training und Inferenz",
        "Bringt das Gespräch mit der Compliance-Seite des Kunden auf konkrete Kontroll-Anforderungen (AVV, SCCs, Audit-Rechte, Sub-Processor-Liste) statt abstrakter Einwände",
        "Denkt in Präzedenzfällen: ein Fix für einen DAX-Kunden öffnet weitere — eskaliert strukturell an Product/Legal, damit es regional zur Capability wird, nicht zur Einzelfallkonzession",
      ],
    },
  },
  {
    id: "iv-whatif-09",
    type: "what-if",
    question:
      "Mid-cycle, a competitor offers your flagship DACH prospect — a major German retailer in late-stage evaluation — a deal that's 50% cheaper with substantially looser terms. The AE panics and asks you for guidance. What do you advise, and what do you not do?",
    watchFor: [
      "Doesn't reflexively match price — first re-anchors on differentiated value, success metrics agreed earlier, and the cost of switching/risk of the cheaper option",
      "Diagnoses what's actually happening: is the customer using the offer as leverage, is the competitor desperate, has the AE lost the value narrative? Different responses to each",
      "Considers structural alternatives to discount: ramp deals, success milestones, shorter initial term, pilot scope expansion — protects price integrity and precedent",
      "Acknowledges the precedent risk: caving sets a regional benchmark; would loop in deal desk and possibly RVP rather than negotiate ad-hoc",
    ],
    de: {
      question:
        "Mitten im Zyklus bekommt dein Top-DACH-Prospect — ein großer deutscher Einzelhändler in der Spätphase der Evaluation — vom Wettbewerb ein Angebot, das 50% billiger ist und deutlich lockerere Konditionen hat. Der AE gerät in Panik und fragt dich um Rat. Was rätst du ihm — und was tust du bewusst nicht?",
      watchFor: [
        "Matched den Preis nicht reflexartig — re-ankert zuerst auf differenzierten Wert, vorher vereinbarte Erfolgsmetriken und die Switching-/Risiko-Kosten der günstigeren Option",
        "Diagnostiziert, was tatsächlich passiert: nutzt der Kunde das Angebot als Hebel, ist der Wettbewerber verzweifelt, hat der AE die Value-Story verloren? Jede Ursache verlangt eine andere Reaktion",
        "Denkt an strukturelle Alternativen zum Discount: Ramp Deals, Erfolgs-Meilensteine, kürzere Erstlaufzeit, erweiterter Pilot-Scope — schützt Preis-Integrität und Präzedenz",
        "Anerkennt das Präzedenzrisiko: Einknicken setzt einen regionalen Benchmark; bindet Deal Desk und ggf. RVP ein, statt ad-hoc zu verhandeln",
      ],
    },
  },
  {
    id: "iv-whatif-10",
    type: "what-if",
    question:
      "A major product launch — already announced to your top 20 DACH customers and tied to several active deals — slips by six weeks because of an engineering issue surfaced last Friday. As GTM lead, what does your remediation plan look like across customers, sales, marketing, and internal stakeholders?",
    watchFor: [
      "First instinct is to get the facts straight before communicating anything — what exactly slipped, what's the new realistic date, what's still usable now (e.g., beta, workaround)",
      "Tiered communication plan: differentiated by customer impact (deal at risk vs. nice-to-have), with the AE/CSM in the lead and exec sponsor for top accounts",
      "Coordinates cross-functionally — Product/Eng for the message of substance, Marketing for external comms, Sales Enablement for talk tracks, Legal for any contractual exposure",
      "Thinks about commercial remediation levers (extended pilots, credits, ramp adjustments) and tracks the deals at risk on a clear cadence rather than hoping it works out",
    ],
    de: {
      question:
        "Ein großer Produkt-Launch — bereits an deine Top-20-DACH-Kunden kommuniziert und an mehrere aktive Deals geknüpft — verschiebt sich um sechs Wochen wegen eines Engineering-Problems, das letzten Freitag aufgetaucht ist. Wie sieht dein Remediation-Plan als GTM-Lead aus — gegenüber Kunden, Sales, Marketing und intern?",
      watchFor: [
        "Erster Impuls: Faktenlage klären, bevor irgendetwas kommuniziert wird — was genau ist verzögert, was ist das realistische neue Datum, was ist jetzt schon nutzbar (Beta, Workaround)",
        "Gestaffelter Kommunikationsplan: differenziert nach Kundenwirkung (Deal in Gefahr vs. nice-to-have), AE/CSM in der Lead-Rolle, Exec Sponsor für Top-Accounts",
        "Koordiniert cross-funktional — Product/Eng für die inhaltliche Botschaft, Marketing für externe Comms, Sales Enablement für Talk Tracks, Legal für vertragliche Exponierung",
        "Denkt an kommerzielle Remediation-Hebel (verlängerte Pilots, Credits, Ramp-Anpassungen) und trackt die gefährdeten Deals in klarer Kadenz, statt zu hoffen, dass es schon klappt",
      ],
    },
  },

  // ── Outro ──────────────────────────────────────────────────────────────────
  {
    id: "iv-outro-01",
    type: "outro",
    question:
      "Do you have any questions for me about the role, the team, or Anthropic?",
    watchFor: [
      "Thoughtful, specific questions — not generic 'what's the culture like'",
      "Shows research: references the JD, Anthropic's mission, the DACH market, or recent product/policy moves",
      "Probes substance: GTM motion, vertical strategy, team structure, exec stakeholders, success metrics",
      "Engages the interviewer as a peer — listens to the answer and follows up, doesn't just check a box",
    ],
    de: {
      question: "Hast du Fragen an mich — zur Rolle, zum Team oder zu Anthropic?",
      watchFor: [
        "Durchdachte, konkrete Fragen — kein generisches 'wie ist die Kultur'",
        "Zeigt Recherche: bezieht sich auf die JD, Anthropics Mission, den DACH-Markt oder aktuelle Produkt-/Policy-Themen",
        "Geht in die Substanz: GTM-Motion, Vertikalstrategie, Teamstruktur, Exec-Stakeholder, Erfolgskriterien",
        "Tritt dem Interviewer auf Augenhöhe gegenüber — hört zu und hakt nach, statt nur abzuhaken",
      ],
    },
  },
];
