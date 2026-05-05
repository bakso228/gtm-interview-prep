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
      "First, I've spent most of my career in **B2B commercial roles and on the consumption-based SaaS business models** — enterprise deals with telcos and banks, long sales cycles, C-level business cases, multi-stakeholder relationships — I know how complex they can get.",
      "Second, I've **built commercial infrastructure from scratch** — CRM, sales motion, pipeline, quota setting, playbooks. Both at scale inside Meta, and from zero at a B2B SaaS fintech called Smile ID.",
      "Third, I understand **B2B demand generation and prioritization** — I've led marketing operations and B2B lead generation at Agoda and Sixt, directly feeding enterprise sales teams.",
      "(1) GTM strategy, (2) sales operations, (3) demand generation — this role needs all three. That's what brought me here.",
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
    id: "why-this-role",
    category: "Motivation",
    categoryDe: "Motivation",
    title: "Why this role?",
    titleDe: "Warum diese Rolle?",
    paragraphs: [
      "The honest answer is that I've thought about what I want this next chapter to look like, and three things matter to me.",
      "First, the work. This role sits at the **intersection of GTM skills** — and that combination is where I've done my best work. Given the team size and the stage Anthropic is in — high-growth and high-ambiguity — I think you're not just looking for a pure operations player. That plays to my skills.",
      "Second, **I want the work to matter**. I'm not interested in optimizing GTM for another SaaS product nobody will remember in five years. At Anthropic, the commercial work directly funds the research, and those learnings will persist.",
      "Third, the market. **DACH is where I started** my career and where I want to continue it — but inside an international company that keeps my **multi-cultural DNA** alive. I'm in Munich for good now, and this role fits that picture exactly.",
      "So: (1) right work, (2) mission that matters, (3) DACH Market",
    ],
    paragraphsDe: [],
  },
];

export default speakingNotes;
