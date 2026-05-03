"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { allQuizQuestions } from "@/content/quiz/index";
import { getQuizAttempts, addQuizAttempts, getRepetitionStates } from "@/lib/storage";
import { getReviewQueue, getTodayString } from "@/lib/quiz-repetition";
import { computeScoreByCategory, computeScoreByDay, mergeAttempts } from "@/lib/quiz-scores";
import { fetchAttemptsFromSheets } from "@/lib/sheets-sync";
import { CATEGORY_LABELS, CATEGORY_LABELS_DE, type ConceptCategory } from "@/content/types";
import { useLang } from "@/lib/language";
import { clsx } from "clsx";

const CATEGORIES: ConceptCategory[] = [
  "gtm", "revops", "enablement", "metrics", "planning",
  "enterprise-sales", "anthropic", "industry-segments",
];

export default function QuizHubPage() {
  const { lang } = useLang();
  const catLabels = lang === "de" ? CATEGORY_LABELS_DE : CATEGORY_LABELS;

  const [scores, setScores] = useState(() =>
    computeScoreByCategory(getQuizAttempts(), allQuizQuestions)
  );
  const [reviewCount, setReviewCount] = useState(() => {
    const states = getRepetitionStates();
    return getReviewQueue(states, getTodayString()).length;
  });
  const [todayScore, setTodayScore] = useState<{ total: number; correct: number } | null>(null);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const today = getTodayString();
    const days = computeScoreByDay(getQuizAttempts());
    const todayDay = days.find((d) => d.date === today);
    setTodayScore(todayDay ? { total: todayDay.total, correct: todayDay.correct } : null);
  }, []);

  useEffect(() => {
    async function sync() {
      setSyncing(true);
      try {
        const remote = await fetchAttemptsFromSheets();
        if (remote.length > 0) {
          const local = getQuizAttempts();
          const merged = mergeAttempts(local, remote);
          if (merged.length > local.length) {
            addQuizAttempts(merged.slice(local.length));
            setScores(computeScoreByCategory(merged, allQuizQuestions));
            const today = getTodayString();
            const days = computeScoreByDay(merged);
            const todayDay = days.find((d) => d.date === today);
            setTodayScore(todayDay ? { total: todayDay.total, correct: todayDay.correct } : null);
          }
        }
      } finally {
        setSyncing(false);
      }
    }
    void sync();
  }, []);

  const ui = {
    en: {
      heading: "Quiz",
      sub: "Test your knowledge across all 8 modules.",
      reviewCard: "Review Queue",
      reviewDue: (n: number) => `${n} question${n !== 1 ? "s" : ""} due today`,
      reviewEmpty: "Nothing due — you're up to date",
      startReview: "Start Review →",
      today: "Today",
      todayScore: (c: number, t: number) => `${c}/${t} correct`,
      noActivity: "No activity yet today",
      start: "Start →",
      seen: (n: number, t: number) => `${n} / ${t} seen`,
      syncing: "Syncing…",
    },
    de: {
      heading: "Quiz",
      sub: "Teste dein Wissen in allen 8 Modulen.",
      reviewCard: "Wiederholung",
      reviewDue: (n: number) => `${n} Frage${n !== 1 ? "n" : ""} heute fällig`,
      reviewEmpty: "Alles erledigt — keine Wiederholungen fällig",
      startReview: "Wiederholung starten →",
      today: "Heute",
      todayScore: (c: number, t: number) => `${c}/${t} richtig`,
      noActivity: "Noch keine Aktivität heute",
      start: "Starten →",
      seen: (n: number, t: number) => `${n} / ${t} gesehen`,
      syncing: "Synchronisiere…",
    },
  }[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {ui.heading}
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{ui.sub}</p>
        {syncing && (
          <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-600">{ui.syncing}</p>
        )}
      </div>

      {/* Today + Review row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {/* Today's score */}
        <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
            {ui.today}
          </p>
          {todayScore ? (
            <>
              <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                {Math.round((todayScore.correct / todayScore.total) * 100)}%
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {ui.todayScore(todayScore.correct, todayScore.total)}
              </p>
            </>
          ) : (
            <p className="text-sm text-neutral-400 dark:text-neutral-600">{ui.noActivity}</p>
          )}
        </div>

        {/* Review queue */}
        <div className={clsx(
          "rounded-xl border p-5",
          reviewCount > 0
            ? "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950"
            : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
        )}>
          <p className={clsx(
            "mb-1 text-xs font-medium uppercase tracking-wider",
            reviewCount > 0 ? "text-amber-600 dark:text-amber-400" : "text-neutral-400 dark:text-neutral-600"
          )}>
            {ui.reviewCard}
          </p>
          <p className={clsx(
            "text-sm mb-3",
            reviewCount > 0
              ? "text-amber-900 dark:text-amber-100 font-medium"
              : "text-neutral-400 dark:text-neutral-600"
          )}>
            {reviewCount > 0 ? ui.reviewDue(reviewCount) : ui.reviewEmpty}
          </p>
          {reviewCount > 0 && (
            <Link
              href="/quiz/review"
              className="text-xs font-medium text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-200 transition-colors"
            >
              {ui.startReview}
            </Link>
          )}
        </div>
      </div>

      {/* All Questions card */}
      <div className="mb-4">
        <Link
          href="/quiz/all"
          className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-5 py-4 hover:border-neutral-400 hover:shadow-sm transition-all dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
        >
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {lang === "de" ? "Alle Fragen" : "All Questions"}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-0.5">
              {allQuizQuestions.length} {lang === "de" ? "Fragen · zufällige Reihenfolge" : "questions · random order"}
            </p>
          </div>
          <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover:underline">
            {lang === "de" ? "Starten →" : "Start →"}
          </span>
        </Link>
      </div>

      {/* Category cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => {
          const score = scores.find((s) => s.category === cat);
          const total = allQuizQuestions.filter((q) => q.category === cat).length;
          const seen = score?.totalSeen ?? 0;
          const pct = score?.percentage ?? 0;
          return (
            <Link
              key={cat}
              href={`/quiz/${cat}`}
              className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                  {catLabels[cat]}
                </p>
                {seen > 0 && (
                  <span className={clsx(
                    "flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
                    pct >= 80
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                      : pct >= 50
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  )}>
                    {pct}%
                  </span>
                )}
              </div>
              <p className="mb-4 text-xs text-neutral-400 dark:text-neutral-600">
                {ui.seen(seen, total)}
              </p>
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover:underline">
                {ui.start}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
