"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { allQuizQuestions } from "@/content/quiz/index";
import { addQuizAttempts, getRepetitionStates, upsertRepetitionState } from "@/lib/storage";
import { computeNextState, getReviewQueue, getTodayString } from "@/lib/quiz-repetition";
import { syncAttemptsToSheets } from "@/lib/sheets-sync";
import { CATEGORY_LABELS, CATEGORY_LABELS_DE } from "@/content/types";
import type { QuizAttempt, ConceptCategory } from "@/content/types";
import { useLang } from "@/lib/language";
import { clsx } from "clsx";
import QuizCard from "@/components/QuizCard";

const VALID_CATEGORIES = [
  "gtm", "revops", "enablement", "metrics", "planning",
  "enterprise-sales", "anthropic", "industry-segments", "all",
] as const;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateSessionId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function QuizPage() {
  const params = useParams();
  const { lang } = useLang();
  const categoryParam = params.category as string;
  const isReview = categoryParam === "review";
  const isAll = categoryParam === "all";

  const [questions] = useState(() => {
    if (isReview) {
      const states = getRepetitionStates();
      const dueIds = new Set(getReviewQueue(states, getTodayString()));
      return shuffle(allQuizQuestions.filter((q) => dueIds.has(q.id)));
    }
    if (isAll) return shuffle([...allQuizQuestions]);
    return shuffle(allQuizQuestions.filter((q) => q.category === categoryParam));
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionId] = useState(generateSessionId);
  // keyed by questionId for O(1) lookup on results screen
  const [sessionAttempts, setSessionAttempts] = useState<Map<string, QuizAttempt>>(new Map());
  const [done, setDone] = useState(false);

  const ui = {
    en: {
      back: "← Back to Quiz",
      noQuestions: "No questions available.",
      reviewEmpty: "Review queue is empty — nothing due today.",
      done: "Session Complete",
      answered: (a: number, t: number) => `${a} of ${t} answered`,
      score: (c: number, a: number) => `${c} / ${a} correct (${Math.round((c / a) * 100)}%)`,
      backToQuiz: "Back to Quiz Hub",
      retake: "Retake",
      reviewLabel: "Review Queue",
      allLabel: "All Questions",
      skipped: "skipped",
    },
    de: {
      back: "← Zurück zum Quiz",
      noQuestions: "Keine Fragen verfügbar.",
      reviewEmpty: "Keine offenen Wiederholungen — heute nichts fällig.",
      done: "Sitzung abgeschlossen",
      answered: (a: number, t: number) => `${a} von ${t} beantwortet`,
      score: (c: number, a: number) => `${c} / ${a} richtig (${Math.round((c / a) * 100)}%)`,
      backToQuiz: "Zurück zur Quiz-Übersicht",
      retake: "Wiederholen",
      reviewLabel: "Wiederholungswarteschlange",
      allLabel: "Alle Fragen",
      skipped: "übersprungen",
    },
  }[lang];

  const categoryLabel = isReview
    ? ui.reviewLabel
    : isAll
    ? ui.allLabel
    : (lang === "de" ? CATEGORY_LABELS_DE : CATEGORY_LABELS)[categoryParam as ConceptCategory] ?? categoryParam;

  function handleAnswer(chosenIndex: number, correct: boolean) {
    const q = questions[currentIndex];
    const attempt: QuizAttempt = {
      questionId: q.id,
      chosenIndex,
      correct,
      timestamp: Date.now(),
      sessionId,
    };

    // Update session display state
    setSessionAttempts((prev) => new Map(prev).set(q.id, attempt));

    // Persist immediately — no need to finish the session
    addQuizAttempts([attempt]);
    void syncAttemptsToSheets([attempt]);

    // Update spaced repetition
    const states = getRepetitionStates();
    const current = states.find((s) => s.questionId === q.id) ?? null;
    upsertRepetitionState(computeNextState(current, q.id, correct, getTodayString()));
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setDone(true);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  const isValidCategory = isReview || isAll || VALID_CATEGORIES.includes(categoryParam as typeof VALID_CATEGORIES[number]);
  if (!isValidCategory) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-sm text-neutral-400">
        {ui.noQuestions}{" "}
        <Link href="/quiz" className="underline">{ui.back}</Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <p className="text-sm text-neutral-400 dark:text-neutral-600">
          {isReview ? ui.reviewEmpty : ui.noQuestions}
        </p>
        <Link href="/quiz" className="mt-4 block text-sm underline text-neutral-700 dark:text-neutral-300">
          {ui.back}
        </Link>
      </div>
    );
  }

  if (done) {
    const attempts = [...sessionAttempts.values()];
    const answered = attempts.length;
    const correct = attempts.filter((a) => a.correct).length;

    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          {categoryLabel}
        </p>
        <h1 className="mb-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {ui.done}
        </h1>
        <p className="mb-6 text-sm text-neutral-400 dark:text-neutral-600">
          {ui.answered(answered, questions.length)}
        </p>

        {answered > 0 && (
          <>
            <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              {Math.round((correct / answered) * 100)}%
            </p>
            <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
              {ui.score(correct, answered)}
            </p>
          </>
        )}

        {/* Per-question breakdown */}
        <div className="space-y-1 mb-8 max-h-96 overflow-y-auto pr-1">
          {questions.map((q) => {
            const attempt = sessionAttempts.get(q.id);
            const qText = lang === "de" && q.de ? q.de.question : q.question;
            return (
              <div key={q.id} className="flex items-start gap-2 text-sm py-1">
                <span className={clsx(
                  "flex-shrink-0 mt-0.5",
                  attempt
                    ? attempt.correct ? "text-emerald-500" : "text-red-400"
                    : "text-neutral-300 dark:text-neutral-700"
                )}>
                  {attempt ? (attempt.correct ? "✓" : "✗") : "–"}
                </span>
                <span className={clsx(
                  "leading-snug line-clamp-2",
                  attempt ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-300 dark:text-neutral-700"
                )}>
                  {qText}
                  {!attempt && (
                    <span className="ml-1.5 text-xs text-neutral-300 dark:text-neutral-700">
                      ({ui.skipped})
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <Link
            href="/quiz"
            className="rounded-md border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:border-neutral-400 transition-colors dark:border-neutral-700 dark:text-neutral-300"
          >
            {ui.backToQuiz}
          </Link>
          <button
            onClick={() => {
              setSessionAttempts(new Map());
              setCurrentIndex(0);
              setDone(false);
            }}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-neutral-50 hover:bg-neutral-700 transition-colors dark:bg-neutral-100 dark:text-neutral-900"
          >
            {ui.retake}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <Link
          href="/quiz"
          className="text-xs text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
          {ui.back}
        </Link>
        <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {categoryLabel}
        </p>
      </div>

      <QuizCard
        question={questions[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasPrevious={currentIndex > 0}
        isLast={currentIndex === questions.length - 1}
      />
    </div>
  );
}
