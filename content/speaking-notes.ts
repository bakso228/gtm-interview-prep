export type SpeakingNote = {
  id: string;
  category: string;
  categoryDe: string;
  title: string;
  titleDe: string;
  paragraphs: string[];
  paragraphsDe: string[];
};

const speakingNotes: SpeakingNote[] = [
  {
    id: "introduction",
    category: "Introduction",
    categoryDe: "Vorstellung",
    title: "Career Introduction",
    titleDe: "Karriere-Vorstellung",
    paragraphs: [
      "Three things define my background, and I think all three are relevant here.",
      "First, I've spent most of my career in **B2B commercial roles** — enterprise deals with telcos and banks, long sales cycles, multi-stakeholder buying committees, C-level business cases. At Facebook I was directly involved in valuation, deal analysis, and presenting to CXOs of major telcos across Emerging Markets. **I know how complex enterprise selling gets** and how GTM and RevOps functions can support them from the inside.",
      "Second, I've **built commercial infrastructure from scratch** — sales motion, CRM, pipeline, quota setting, territory design, and variable comp. At Facebook my first team grew by 10x in 2 years, and at Smile ID, a B2B SaaS fintech where I took ARR from $1.5M to $6M. I'm comfortable with Salesforce and the analytics stack that sits around it.",
      "Third, I'm **analytically driven**. Whether it was building elasticity and bidding models at Agoda, designing forecasting frameworks adopted across teams, or running performance analysis for multi-million euro campaigns — translating complex data into strategy and actionable decisions is something I've done consistently across roles.",
      "(1) GTM strategy, (2) commercial infrastructure, and (3) analytical depth — this role needs all three. That's what brought me here.",
    ],
    paragraphsDe: [
      "Meine Karriere hatte drei Kapitel, und ich denke, alle drei sind relevant für das, was Sie suchen.",
      "Ich habe bei Facebook in einer Sales Ops & Planning-Rolle begonnen, als das Team aus zehn Personen bestand, und habe das Unternehmen verlassen, als wir über hundert waren. Ich war während dieser Skalierungsphase im Maschinenraum tätig — Headcount-Planung, Book-of-Business-Erstellung, CRM-Einführung, Sales-Programme über Call Center. Das ist der Ort, an dem ich mein Fundament darin aufgebaut habe, wie kommerzielle Organisationen strukturiert sind und wie sie wachsen.",
      "Danach bin ich in eine strategischere GTM-Rolle gewechselt, die schließlich in Singapur angesiedelt war, wo ich an einigen von Metas komplexesten Partnership-Deals in Schwellenmärkten gearbeitet habe — Telekommunikationsunternehmen, lange Verkaufszyklen, C-Level-Präsentationen, Business Cases, Playbooks. Ich habe auch ein regionales 'Insights as a Service'-Programm aufgebaut, das zu einem Kernbestandteil der Art und Weise wurde, wie wir diese Partnerschaften strukturiert haben. Das ist der Ort, an dem ich gelernt habe, dass die beste GTM-Arbeit nicht nur operativ ist — sie schafft echten Mehrwert für den Kunden.",
      "Nach 10 Jahren in Big Tech war ich bereit für etwas Kleineres und Schnelleres. Bei Smile ID habe ich die gesamte Commercial- und Growth-Funktion verantwortet — Sales Motion, Pipeline, CRM, Quotensetzung, Battle Cards — größtenteils von Grund auf aufgebaut.",
      "Dann haben mich persönliche Umstände nach Asien zurückgebracht, und ich habe die letzten Jahre damit verbracht, Performance Marketing und B2B-Lead-Generierung bei Agoda und Sixt zu leiten — ein anderer Muskel, aber dieselbe grundlegende Frage: Wie generiert man qualifizierte Nachfrage effizient und wandelt sie in Umsatz um.",
      "Was mich hierher bringt, ist dass diese Rolle genau an der Schnittstelle von allem liegt, was ich getan habe — GTM-Strategie, Sales Operations, funktionsübergreifende Umsetzung — aber bei einem Unternehmen, das meiner Meinung nach etwas wirklich Bedeutendes aufbaut. Diese Kombination ergibt sich nicht oft.",
    ],
  },
  {
    id: "why-anthropic",
    category: "Motivation",
    categoryDe: "Motivation",
    title: "Why Anthropic?",
    titleDe: "Warum Anthropic?",
    paragraphs: [
      "So I really got into Anthropic and understanding how it differs from OpenAI around a year ago, when I was stuck on a plane with nothing else to watch than a 6-hour podcast between Dario and Lex Fridman. I didn't make it through all of it, but I was struck by the **safety and trust approach** Dario laid out. It felt like the first time I'd heard someone in this space talk about the **risks as seriously as the upside**.",
      "I understand now that **Anthropic is structured around the research mission**, not the other way around. It's a research organization first, and the commercial engine exists to fund that research. The **Public Benefit Corporation structure** and the **Long-Term Benefit Trust** aren't just governance — it's a credible approach, and a deliberate contrast to somewhere like Facebook, where commercial pressure gradually erodes the original intent.",
      "That said, I'm **not naive** about the tension. There is massive commercial pressure, and the recent changes to the Responsible Scaling Policy show that navigating growth and mission isn't easy. But I'd rather work on that problem than optimize revenue for another SaaS company that is replaceable.",
    ],
    paragraphsDe: [],
  },
  {
    id: "why-anthropic-v2",
    category: "Motivation",
    categoryDe: "Motivation",
    title: "Why Anthropic? (v2)",
    titleDe: "Warum Anthropic? (v2)",
    paragraphs: [
      "For me it started about a year ago on a long flight with nothing to watch except a six-hour Lex Fridman podcast with Dario. Two things stuck with me.",
      "The first is **structural**. I spent enough time at Facebook to see **how commercial pressure gradually erodes a company's original values**. What I find credible about Anthropic is that they've built guardrails against exactly that — the **Public Benefit Corporation**, the **Long-Term Benefit Trust** that can override commercial decisions. It's not just a mission statement, it's a mechanism.",
      "The second point is more **personal**. Dario talks about holding both the unprecedented risks and the upside of AI simultaneously — like holding the share and the light. And the possible upside **isn't abstract to me**. I've had cancer touch my close circle, including my dad. And I've felt genuinely frustrated by how slowly the world has moved on something like that. The idea that AI — developed responsibly — could meaningfully accelerate progress on cancer research or drug discovery isn't just an interesting thesis for me. If I can contribute in whatever shape or form to that, it's an easy decision for me.",
    ],
    paragraphsDe: [],
  },
  {
    id: "why-this-role",
    category: "Motivation",
    categoryDe: "Motivation",
    title: "Why this role?",
    titleDe: "Warum diese Rolle?",
    paragraphs: [
      "First, the work. This role sits at the **intersection of GTM skills** I've built across B2B environments — and that combination is where I've done my best work. Given the team size and the stage Anthropic is in, I think you're not just looking for a pure operations player but someone versatile who can adapt quickly. That plays to my skills.",
      "Second, I want to **be genuinely challenged**. In my past, that's usually meant high-growth, high-ambiguity environments where the playbook doesn't fully exist yet. That's where I've always thrived — and I'd rather build something new than optimize something mature.",
      "Third, the **market**. DACH is where I started my career and where I want to continue it — but inside an international company that keeps my **multi-cultural DNA** alive. I'm in Munich for good now, and this role fits that picture exactly.",
      "So: (1) GTM work, (2) challenge fast paced environment (3) market focus with international DNA",
    ],
    paragraphsDe: [],
  },
  {
    id: "mission-values",
    category: "Reference",
    categoryDe: "Referenz",
    title: "Mission & Values",
    titleDe: "Mission & Werte",
    paragraphs: [
      "## Mission",
      "The responsible development and maintenance of advanced AI for the long-term benefit of humanity.",
      "## Tagline",
      "Making AI systems you can rely on — building reliable, interpretable, and steerable AI systems.",
      "## Purpose — four pillars",
      "- **Build safer systems** — frontier AI that is reliable, interpretable, and steerable, through research, safety techniques, and deployment via products and partnerships",
      "- **Safety is a science** — treat safety as a systematic discipline, not a principle. Research → products → insights → back into research → share publicly",
      "- **Interdisciplinary** — researchers, engineers, policy experts, business leaders working together across domains",
      "- **One piece of a bigger puzzle** — collaborate with civil society, government, academia, and industry to promote safety industry-wide, not just internally",
      "## The 7 Company Values",
      "1. **Act for the global good** — maximize positive outcomes for humanity long-term. Be bold. Guide the world through a technological revolution that could change the course of human history",
      "2. **Hold light and shade** — AI has unprecedented downside risks AND unprecedented upside benefits. Need both perspectives simultaneously",
      "3. **Be good to our users** — users defined broadly: customers, policymakers, employees, anyone impacted by the technology. Cultivate generosity and kindness. Going above and beyond is meeting expectations, not exceeding them",
      "4. **Ignite a race to the top on safety** — make safety a competitive advantage industry-wide, not just internally. Set the bar and drive others to match it",
      "5. **Do the simple thing that works** — empirical approach, care about impact not sophistication. Don't invent a spaceship if all you need is a bicycle",
      "6. **Be helpful, honest, and harmless** — high-trust, low-ego organization. Communicate kindly and directly. Assume good intentions even in disagreement. If something urgently needs doing, the right person is probably you",
      "7. **Put the mission first** — the mission is the final arbiter in every decision. No one is a bystander. Everyone takes personal ownership",
      "## Governance",
      "Public Benefit Corporation. Board elected by stockholders AND the Long-Term Benefit Trust (LTBT). Current LTBT trustees: Neil Buddy Shah, Richard Fontaine, Mariano-Florentino Cuéllar.",
      "## Memorize verbatim",
      "Two values worth memorizing verbatim for the interview: **Hold light and shade** — a distinctive framing you won't hear anywhere else, and it shows you've actually read their page. And **Do the simple thing that works** — directly relevant to a GTM ops role where overengineering is a real failure mode.",
    ],
    paragraphsDe: [],
  },
];

export default speakingNotes;
