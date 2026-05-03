"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { allQuizQuestions } from "@/content/quiz/index";
import { getQuizAttempts, addQuizAttempts, getRepetitionStates, upsertRepetitionState } from "@/lib/storage";
import { computeNextState, getReviewQueue, getTodayString } from "@/lib/quiz-repetition";
import { syncAttemptsToSheets } from "@/lib/sheets-sync";
import { CATEGORY_LABELS, CATEGORY_LABELS_DE } from "@/content/types";
import type { QuizAttempt, ConceptCategory } from "@/content/types";
import { useLang } from "@/lib/language";
import QuizCard from "@/components/QuizCard";

const VALID_CATEGORIES = [
  "gtm", "revops", "enablement", "metrics", "planning",
  "enterprise-sales", "anthropic", "industry-segments",
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
  const router = useRouter();
  const { lang } = useLang();
  const categoryParam = params.category as string;
  const isReview = categoryParam === "review";

  const [questions, setQuestions] = useState(() => {
    if (isReview) {
      const states = getRepetitionStates();
      const dueIds = new Set(getReviewQueue(states, getTodayString()));
      const due = allQuizQuestions.filter((q) => dueIds.has(q.id));
      return shuffle(due);
    }
    const cat = allQuizQuestions.filter((q) => q.category === categoryParam);
    return shuffle(cat);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionId] = useState(generateSessionId);
  const [sessionAttempts, setSessionAttempts] = useState<QuizAttempt[]>([]);
  const [done, setDone] = useState(false);
  const [answeredIndices, setAnsweredIndices] = useState<Set<number>>(new Set());

  const { lang: _lang } = useLang(); void _lang;

  const ui = {
    en: {
      back: "← Back to Quiz",
      noQuestions: "No questions available.",
      reviewEmpty: "Review queue is empty — nothing due today.",
      done: "Session Complete",
      score: (c: number, t: number) => `${c} / ${t} correct (${Math.round((c / t) * 100)}%)`,
      backToQuiz: "Back to Quiz Hub",
      retake: "Retake",
      reviewLabel: "Review Queue",
    },
    de: {
      back: "← Zurück zum Quiz",
      noQuestions: "Keine Fragen verfügbar.",
      reviewEmpty: "Keine offenen Wiederholungen — heute nichts fällig.",
      done: "Sitzung abgeschlossen",
      score: (c: number, t: number) => `${c} / ${t} richtig (${Math.round((c / t) * 100)}%)`,
      backToQuiz: "Zurück zur Quiz-Übersicht",
      retake: "Wiederholen",
      reviewLabel: "Wiederholungswarteschlange",
    },
  }[lang];

  const categoryLabel = isReview
    ? ui.reviewLabel
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
    setSessionAttempts((prev) => [...prev, attempt]);
    setAnsweredIndices((prev) => new Set([...prev, currentIndex]));

    // Update spaced repetition state
    const states = getRepetitionStates();
    const current = states.find((s) => s.questionId === q.id) ?? null;
    const next = computeNextState(current, q.id, correct, getTodayString());
    upsertRepetitionState(next);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      finishSession();
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  function finishSession() {
    // Persist to localStorage
    addQuizAttempts(sessionAttempts);
    // Fire-and-forget sync to Sheets
    void syncAttemptsToSheets(sessionAttempts);
    setDone(true);
  }

  if (!isReview && !VALID_CATEGORIES.includes(categoryParam as typeof VALID_CATEGORIES[number])) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-sm text-neutral-400">
        {ui.noQuestions}{" "}
        <Link href="/quiz" className="underline">
          {ui.back}
        </Link>
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
    const correct = sessionAttempts.filter((a) => a.correct).length;
    const total = sessionAttempts.length;
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          {categoryLabel}
        </p>
        <h1 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {ui.done}
        </h1>
        <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {Math.round((correct / total) * 100)}%
        </p>
        <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
          {ui.score(correct, total)}
        </p>

        {/* Per-question breakdown */}
        <div className="space-y-1 mb-8">
          {questions.map((q, i) => {
            const attempt = sessionAttempts.find((a) => a.questionId === q.id);
            if (!attempt) return null;
            const qText = lang === "de" && q.de ? q.de.question : q.question;
            return (
              <div key={q.id} className="flex items-start gap-2 text-sm py-1.5">
                <span className={attempt.correct ? "text-emerald-500" : "text-red-400"}>
                  {attempt.correct ? "✓" : "✗"}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 leading-snug line-clamp-2">
                  {qText}
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
              setSessionAttempts([]);
              setAnsweredIndices(new Set());
              setCurrentIndex(0);
              setDone(false);
              setQuestions(shuffle([...questions]));
            }}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-neutral-50 hover:bg-neutral-700 transition-colors dark:bg-neutral-100 dark:text-neutral-900"
          >
            {ui.retake}
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

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
        question={currentQuestion}
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
