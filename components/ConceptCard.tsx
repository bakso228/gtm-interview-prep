"use client";

import Link from "next/link";
import { clsx } from "clsx";
import type { Concept } from "@/content/types";
import { CATEGORY_LABELS, CATEGORY_LABELS_DE } from "@/content/types";
import { useLang } from "@/lib/language";

export default function ConceptCard({
  concept,
  learned,
}: {
  concept: Concept;
  learned: boolean;
}) {
  const { lang } = useLang();
  const de = lang === "de" && concept.de;
  const title = de ? de.title : concept.title;
  const definition = de ? de.definition : concept.definition;
  const catLabels = lang === "de" ? CATEGORY_LABELS_DE : CATEGORY_LABELS;

  return (
    <Link
      href={`/learn/${concept.id}`}
      className="group block rounded-lg border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
          {title}
        </span>
        {learned && (
          <span className="mt-0.5 flex-shrink-0 text-neutral-400 dark:text-neutral-600" title="Learned">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        )}
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {definition}
      </p>
      <div className="mt-3">
        <span className={clsx(
          "inline-block rounded px-2 py-0.5 text-xs",
          "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
        )}>
          {catLabels[concept.category]}
        </span>
      </div>
    </Link>
  );
}
