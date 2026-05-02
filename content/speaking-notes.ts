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
      "My career has had three chapters, and I think all three are relevant to what you're looking for.",
      "I started at Facebook in a Sales Ops & Planning role when the team was 10 people and left when we were over a hundred. I was in the engine room during that scaling phase — headcount planning, book-of-business creation, CRM rollout, sales programs through call centers. That's where I built my foundation in how commercial organizations are structured and how they grow.",
      "From there I moved into a more strategic GTM role, eventually based in Singapore, where I worked on some of Meta's most complex partnership deals in Emerging Markets — telcos, long sales cycles, C-level presentations, business cases, playbooks. I also built a regional 'Insights as a Service' program that became a core part of how we structured those partnerships. That's where I learned that the best GTM work isn't just operational — it creates actual value for the customer.",
      "After 10 years in big tech I was ready for something smaller and faster. At Smile ID I owned the full commercial and growth function — sales motion, pipeline, CRM, quota setting, battle cards — built largely from scratch.",
      "Then personal circumstances brought me back to Asia, and I spent the last few years leading performance marketing and B2B lead generation at Agoda and Sixt, which is a different muscle but the same underlying question: how do you generate qualified demand efficiently and turn it into revenue.",
      "What brings me here is that this role sits exactly at the intersection of everything I've done — GTM strategy, sales operations, cross-functional execution — but at a company that I think is building something genuinely important. That combination doesn't come up often.",
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
];

export default speakingNotes;
