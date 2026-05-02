"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { allConcepts } from "@/content/concepts/index";
import { CATEGORY_LABELS, CATEGORY_LABELS_DE, type SampleQuestion } from "@/content/types";
import { isConceptLearned, toggleLearnedConcept } from "@/lib/storage";
import { useLang } from "@/lib/language";
import { clsx } from "clsx";

const UI = {
  en: {
    definition: "Definition",
    whyItMatters: "Why it matters in this role",
    interviewAngle: "How it might appear in the interview",
    practiceQuestions: "Practice questions",
    example: "Example",
    related: "Related",
    keyPoints: "Key points to hit",
    markLearned: "Mark as Learned",
    learned: "Learned",
    navigate: "j / k to navigate",
    notFound: "Concept not found.",
    back: "Back to Learn",
  },
  de: {
    definition: "Definition",
    whyItMatters: "Warum das für diese Rolle wichtig ist",
    interviewAngle: "Wie es im Vorstellungsgespräch auftreten könnte",
    practiceQuestions: "Übungsfragen",
    example: "Beispiel",
    related: "Verwandte Themen",
    keyPoints: "Wichtige Punkte",
    markLearned: "Als gelernt markieren",
    learned: "Gelernt",
    navigate: "j / k zum Navigieren",
    notFound: "Konzept nicht gefunden.",
    back: "Zurück",
  },
};

export default function ConceptPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { lang } = useLang();
  const ui = UI[lang];
  const catLabels = lang === "de" ? CATEGORY_LABELS_DE : CATEGORY_LABELS;

  const concept = allConcepts.find((c) => c.id === slug);
  const [learned, setLearned] = useState(false);

  useEffect(() => {
    if (concept) setLearned(isConceptLearned(concept.id));
  }, [concept]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!concept) return;
      const sameCategory = allConcepts.filter((c) => c.category === concept.category);
      const idx = sameCategory.findIndex((c) => c.id === concept.id);
      if (e.key === "j" && idx < sameCategory.length - 1) {
        router.push(`/learn/${sameCategory[idx + 1].id}`);
      } else if (e.key === "k" && idx > 0) {
        router.push(`/learn/${sameCategory[idx - 1].id}`);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [concept, router]);

  if (!concept) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm text-neutral-400">{ui.notFound}</p>
        <Link href="/learn" className="mt-4 text-sm text-neutral-900 underline dark:text-neutral-100">
          {ui.back}
        </Link>
      </div>
    );
  }

  const de = lang === "de" && concept.de;
  const title = de ? de.title : concept.title;
  const definition = de ? de.definition : concept.definition;
  const whyItMatters = de ? de.whyItMatters : concept.whyItMatters;
  const interviewAngle = de ? de.interviewAngle : concept.interviewAngle;
  const example = de ? de.example ?? concept.example : concept.example;
  const sampleQuestions = de ? de.sampleQuestions ?? concept.sampleQuestions : concept.sampleQuestions;

  const related = concept.related
    ?.map((id) => allConcepts.find((c) => c.id === id))
    .filter(Boolean);

  function handleToggleLearned() {
    const next = toggleLearnedConcept(concept!.id);
    setLearned(next);
  }

  const sameCategory = allConcepts.filter((c) => c.category === concept.category);
  const idx = sameCategory.findIndex((c) => c.id === concept.id);

  const prevConcept = idx > 0 ? sameCategory[idx - 1] : null;
  const nextConcept = idx < sameCategory.length - 1 ? sameCategory[idx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-600">
        <Link href="/learn" className="hover:text-neutral-700 dark:hover:text-neutral-300">
          Learn
        </Link>
        <span>/</span>
        <Link
          href={`/learn?category=${concept.category}`}
          className="hover:text-neutral-700 dark:hover:text-neutral-300"
        >
          {catLabels[concept.category]}
        </Link>
        <span>/</span>
        <span className="text-neutral-600 dark:text-neutral-400">{title}</span>
      </div>

      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h1>
        <button
          onClick={handleToggleLearned}
          className={clsx(
            "flex-shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
            learned
              ? "border-neutral-900 bg-neutral-900 text-neutral-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
              : "border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500"
          )}
        >
          {learned ? ui.learned : ui.markLearned}
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <Section label={ui.definition}>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {definition}
          </p>
        </Section>

        <Section label={ui.whyItMatters}>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {whyItMatters}
          </p>
        </Section>

        <Section label={ui.interviewAngle}>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {interviewAngle}
          </p>
        </Section>

        {sampleQuestions && sampleQuestions.length > 0 && (
          <Section label={ui.practiceQuestions}>
            <div className="space-y-3">
              {sampleQuestions.map((sq, i) => (
                <SampleQuestionCard key={i} sq={sq} keyPointsLabel={ui.keyPoints} />
              ))}
            </div>
          </Section>
        )}

        {example && (
          <div className="rounded-lg border-l-2 border-neutral-300 bg-neutral-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
              {ui.example}
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {example}
            </p>
          </div>
        )}

        {related && related.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
              {ui.related}
            </p>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => {
                const relTitle = (lang === "de" && r!.de?.title) || r!.title;
                return (
                  <Link
                    key={r!.id}
                    href={`/learn/${r!.id}`}
                    className="rounded-md border border-neutral-200 px-3 py-1 text-xs text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-100"
                  >
                    {relTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800">
        {prevConcept ? (
          <Link
            href={`/learn/${prevConcept.id}`}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {(lang === "de" && prevConcept.de?.title) || prevConcept.title}
          </Link>
        ) : <div />}
        {nextConcept ? (
          <Link
            href={`/learn/${nextConcept.id}`}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {(lang === "de" && nextConcept.de?.title) || nextConcept.title}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        ) : <div />}
      </div>
      <p className="mt-4 text-center text-xs text-neutral-300 dark:text-neutral-700">
        {ui.navigate}
      </p>
    </div>
  );
}

function SampleQuestionCard({ sq, keyPointsLabel }: { sq: SampleQuestion; keyPointsLabel: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-700">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {sq.question}
        </span>
        <span className={clsx(
          "mt-0.5 flex-shrink-0 text-neutral-400 transition-transform dark:text-neutral-600",
          open && "rotate-180"
        )}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="border-t border-neutral-100 px-4 pb-4 pt-3 dark:border-neutral-800">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
            {keyPointsLabel}
          </p>
          <ul className="space-y-1.5">
            {sq.answerThemes.map((theme, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                {theme}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
        {label}
      </h2>
      {children}
    </div>
  );
}
