"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import type { InterviewQuestion, InterviewRating } from "@/content/types";
import {
  INTERVIEW_TYPE_LABELS,
  INTERVIEW_TYPE_LABELS_DE,
} from "@/content/types";
import { useLang } from "@/lib/language";
import { formatDuration } from "@/lib/interview-session";

const RATINGS = [0.6, 0.8, 1.0, 1.2] as const;

export function InterviewQuestionCard({
  question,
  index,
  total,
  onRate,
}: {
  question: InterviewQuestion;
  index: number;
  total: number;
  onRate: (rating: InterviewRating, durationSeconds: number) => void;
}) {
  const { lang } = useLang();
  const isDe = lang === "de";
  const text = isDe && question.de?.question ? question.de.question : question.question;
  const watchFor =
    isDe && question.de?.watchFor ? question.de.watchFor : question.watchFor;
  const tip = isDe && question.de?.tip ? question.de.tip : question.tip;
  const typeLabels = isDe ? INTERVIEW_TYPE_LABELS_DE : INTERVIEW_TYPE_LABELS;

  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    setStartedAt(Date.now());
    setNow(Date.now());
  }, [question.id]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  function handleRate(rating: InterviewRating) {
    const duration = Math.round((Date.now() - startedAt) / 1000);
    onRate(rating, duration);
  }

  function handleNumericRate(r: (typeof RATINGS)[number]) {
    handleRate(r as InterviewRating);
  }

  const ui = isDe
    ? {
        watchHeader: "Worauf der Interviewer achtet",
        skip: "Überspringen",
        openCv: "CV öffnen ↗",
      }
    : {
        watchHeader: "What the interviewer should listen for",
        skip: "Skip",
        openCv: "Open CV ↗",
      };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
      {/* Top meta row */}
      <div className="mb-4 flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-600">
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {typeLabels[question.type]}
        </span>
        <span className="font-mono tabular-nums">
          {formatDuration(now - startedAt)} · {index + 1} / {total}
        </span>
      </div>

      {/* CV-probe: prominent CV link button above the question */}
      {question.type === "cv-probe" && (
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900"
        >
          {ui.openCv}
        </a>
      )}

      {/* Question */}
      <h2 className="text-xl font-semibold leading-snug text-neutral-900 dark:text-neutral-100 sm:text-2xl">
        {text}
      </h2>

      {/* Tip line for cv-probe */}
      {tip && (
        <p className="mt-3 text-sm italic text-neutral-500 dark:text-neutral-400">
          {tip}
        </p>
      )}

      {/* Watch-for bullets */}
      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/60 dark:bg-amber-950/40">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-700 dark:text-amber-400">
          {ui.watchHeader}
        </p>
        <ul className="space-y-2 text-sm text-amber-900 dark:text-amber-100">
          {watchFor.map((bullet, i) => (
            <li key={i} className="flex gap-2 leading-relaxed">
              <span className="text-amber-500 dark:text-amber-500/70">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating buttons */}
      <div className="mt-6 grid gap-2 sm:grid-cols-5">
        {RATINGS.map((r) => (
          <button
            key={r}
            onClick={() => handleNumericRate(r)}
            className={clsx(
              "rounded-lg border px-4 py-3 text-sm font-medium transition-all hover:shadow-sm active:scale-[0.98]",
              r === 0.6 &&
                "border-red-300 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:text-red-300 dark:hover:bg-red-900",
              r === 0.8 &&
                "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900",
              r === 1.0 &&
                "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900",
              r === 1.2 &&
                "border-indigo-300 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900"
            )}
          >
            {Math.round(r * 100)}%
          </button>
        ))}
        <button
          onClick={() => handleRate("skip")}
          className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-500 transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
        >
          {ui.skip} →
        </button>
      </div>
    </div>
  );
}
