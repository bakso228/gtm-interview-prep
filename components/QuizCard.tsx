"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { QuizQuestion } from "@/content/types";
import { useLang } from "@/lib/language";

type State = "idle" | "selected" | "revealed";

type Props = {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (chosenIndex: number, correct: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  hasPrevious: boolean;
  isLast: boolean;
};

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  hasPrevious,
  isLast,
}: Props) {
  const { lang } = useLang();
  const [state, setState] = useState<State>("idle");
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [hintOpen, setHintOpen] = useState(false);

  const q = lang === "de" && question.de ? question.de : question;
  const hint = lang === "de" && question.de?.hint ? question.de.hint : question.hint;

  function reveal(idx: number) {
    const correct = idx === question.correctIndex;
    setChosenIndex(idx);
    setState("revealed");
    onAnswer(idx, correct);
  }

  function handleClick(idx: number) {
    if (state === "idle") {
      setChosenIndex(idx);
      setState("selected");
    } else if (state === "selected" && idx === chosenIndex) {
      // second click on the same already-selected option submits it
      reveal(idx);
    } else if (state === "selected") {
      // clicking a different option just re-selects
      setChosenIndex(idx);
    }
  }

  function handleDoubleClick(idx: number) {
    if (state === "revealed") return;
    reveal(idx);
  }

  function handleCheck() {
    if (state !== "selected" || chosenIndex === null) return;
    reveal(chosenIndex);
  }

  function handleNext() {
    setState("idle");
    setChosenIndex(null);
    setHintOpen(false);
    onNext();
  }

  const ui = {
    en: {
      checkAnswer: "Check Answer",
      next: isLast ? "Done" : "Next →",
      previous: "← Previous",
      hint: "Hint",
      correct: "Correct!",
      incorrect: "Incorrect",
      doubleClickHint: "Double-click to submit",
    },
    de: {
      checkAnswer: "Antwort prüfen",
      next: isLast ? "Fertig" : "Weiter →",
      previous: "← Zurück",
      hint: "Hinweis",
      correct: "Richtig!",
      incorrect: "Falsch",
      doubleClickHint: "Doppelklick zum Bestätigen",
    },
  }[lang];

  function optionStyle(idx: number) {
    const base =
      "w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors flex items-start gap-3";
    if (state === "idle") {
      return clsx(base, "border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800/50 cursor-pointer");
    }
    if (state === "selected") {
      return clsx(
        base,
        idx === chosenIndex
          ? "border-neutral-900 bg-neutral-900 text-neutral-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 cursor-pointer"
          : "border-neutral-200 text-neutral-500 dark:border-neutral-700 dark:text-neutral-500 cursor-pointer"
      );
    }
    // revealed
    if (idx === question.correctIndex) {
      return clsx(base, "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950 dark:text-emerald-100");
    }
    if (idx === chosenIndex && idx !== question.correctIndex) {
      return clsx(base, "border-red-400 bg-red-50 text-red-900 dark:border-red-500 dark:bg-red-950 dark:text-red-100");
    }
    return clsx(base, "border-neutral-200 text-neutral-400 dark:border-neutral-800 dark:text-neutral-600");
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-neutral-400 dark:text-neutral-600">
        <span>{questionNumber} / {totalQuestions}</span>
        <span className="text-xs uppercase tracking-wider">{question.difficulty}</span>
      </div>

      {/* Question */}
      <h2 className="text-lg font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
        {q.question}
      </h2>

      {/* Options */}
      <div className="space-y-2.5">
        {(q.options as [string, string, string, string]).map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            onDoubleClick={() => handleDoubleClick(idx)}
            disabled={state === "revealed"}
            className={optionStyle(idx)}
          >
            <span className="flex-shrink-0 font-medium">{["A", "B", "C", "D"][idx]}.</span>
            <span>{opt}</span>
          </button>
        ))}
      </div>

      {/* Hint: double-click affordance when idle */}
      {state === "idle" && (
        <p className="text-xs text-neutral-300 dark:text-neutral-700 select-none">
          {ui.doubleClickHint}
        </p>
      )}

      {/* Revealed: result + explanation */}
      {state === "revealed" && (
        <div className={clsx(
          "rounded-xl border p-4 text-sm",
          chosenIndex === question.correctIndex
            ? "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950"
            : "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950"
        )}>
          <p className={clsx(
            "font-semibold mb-2",
            chosenIndex === question.correctIndex
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-red-700 dark:text-red-300"
          )}>
            {chosenIndex === question.correctIndex ? ui.correct : ui.incorrect}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {q.explanation}
          </p>
        </div>
      )}

      {/* Hint dropdown */}
      {hint && state !== "revealed" && (
        <div>
          <button
            onClick={() => setHintOpen(!hintOpen)}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            {ui.hint}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={clsx("transition-transform", hintOpen ? "rotate-180" : "")}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {hintOpen && (
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 italic leading-relaxed">
              {hint}
            </p>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="text-sm text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {ui.previous}
        </button>

        {state === "revealed" ? (
          <button
            onClick={handleNext}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 transition-colors"
          >
            {ui.next}
          </button>
        ) : (
          <button
            onClick={handleCheck}
            disabled={state !== "selected"}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {ui.checkAnswer}
          </button>
        )}
      </div>
    </div>
  );
}
