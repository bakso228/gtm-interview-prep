"use client";

import { useState } from "react";
import type { Question } from "@/content/types";
import { QUESTION_CATEGORY_LABELS } from "@/content/types";
import { clsx } from "clsx";

export type EvaluateResult =
  | { ok: true; score: number; feedback: string }
  | { ok: false; error: string };

export default function QuestionCard({
  question,
  isWeak,
  onMarkWeak,
  onNext,
  onSkip,
  onReveal,
  onEvaluate,
  sessionProgress,
}: {
  question: Question;
  isWeak: boolean;
  onMarkWeak: () => void;
  onNext: () => void;
  onSkip: () => void;
  onReveal?: (answer: string) => void;
  onEvaluate?: (answer: string) => Promise<EvaluateResult>;
  sessionProgress?: { current: number; total: number };
}) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [evalLoading, setEvalLoading] = useState(false);
  const [evalResult, setEvalResult] = useState<EvaluateResult | null>(null);

  function handleReveal() {
    setRevealed(true);
    onReveal?.(answer);
  }

  function handleNext() {
    setAnswer("");
    setRevealed(false);
    setEvalResult(null);
    setEvalLoading(false);
    onNext();
  }

  function handleSkip() {
    setAnswer("");
    setRevealed(false);
    setEvalResult(null);
    setEvalLoading(false);
    onSkip();
  }

  async function handleEvaluate() {
    if (!onEvaluate || !answer.trim() || evalLoading) return;
    setEvalLoading(true);
    setEvalResult(null);
    try {
      const result = await onEvaluate(answer);
      setEvalResult(result);
    } finally {
      setEvalLoading(false);
    }
  }

  const canEvaluate = !!onEvaluate && answer.trim().length > 0 && !evalLoading;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          {QUESTION_CATEGORY_LABELS[question.category]}
        </span>
        <span className={clsx(
          "rounded-full border px-2.5 py-0.5 text-xs",
          question.difficulty === "easy" && "border-neutral-200 text-neutral-400 dark:border-neutral-700",
          question.difficulty === "medium" && "border-neutral-300 text-neutral-500 dark:border-neutral-600",
          question.difficulty === "hard" && "border-neutral-500 text-neutral-700 dark:border-neutral-400 dark:text-neutral-300"
        )}>
          {question.difficulty}
        </span>
        {sessionProgress && (
          <span className="ml-auto text-xs text-neutral-400 dark:text-neutral-600 tabular-nums">
            {sessionProgress.current}/{sessionProgress.total}
          </span>
        )}
      </div>

      {/* Question */}
      <h1 className="text-xl font-medium leading-relaxed text-neutral-900 dark:text-neutral-100">
        {question.prompt}
      </h1>

      {/* Context */}
      {question.context && (
        <div className="rounded-lg bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {question.context}
        </div>
      )}

      {/* Answer textarea */}
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        rows={6}
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm leading-relaxed text-neutral-900 placeholder-neutral-300 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-700 dark:focus:border-neutral-500"
      />

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {!revealed ? (
          <button
            onClick={handleReveal}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Show Ideal Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Next Question
          </button>
        )}
        {onEvaluate && (
          <button
            onClick={handleEvaluate}
            disabled={!canEvaluate}
            className="rounded-lg border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:border-indigo-500 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-900"
          >
            {evalLoading ? "Scoring…" : "Get Feedback"}
          </button>
        )}
        <button
          onClick={onMarkWeak}
          className={clsx(
            "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
            isWeak
              ? "border-neutral-500 text-neutral-700 dark:border-neutral-400 dark:text-neutral-300"
              : "border-neutral-200 text-neutral-500 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500"
          )}
        >
          {isWeak ? "Remove Weak" : "Mark as Weak"}
        </button>
        <button
          onClick={handleSkip}
          className="rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600 dark:border-neutral-800 dark:text-neutral-600 dark:hover:border-neutral-700 dark:hover:text-neutral-400"
        >
          Skip
        </button>
      </div>

      {/* Eval result */}
      {evalResult && evalResult.ok && (
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-5 dark:border-indigo-800 dark:bg-indigo-950/30">
          <div className="mb-2 flex items-baseline gap-3">
            <p className="text-xs font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
              Score
            </p>
            <p className="text-2xl font-semibold text-indigo-700 tabular-nums dark:text-indigo-300">
              {evalResult.score}
              <span className="text-sm font-normal text-indigo-500 dark:text-indigo-400">/100</span>
            </p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {evalResult.feedback}
          </p>
        </div>
      )}
      {evalResult && !evalResult.ok && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
          Couldn't get feedback: {evalResult.error}
        </div>
      )}

      {/* Ideal answer reveal */}
      {revealed && (
        <div className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-700">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
            Ideal Answer — Key Themes
          </p>

          {question.starStructure && (
            <div className="mb-5 space-y-3">
              {(["situation", "task", "action", "result"] as const).map((key) => (
                <div key={key}>
                  <p className="mb-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {question.starStructure![key]}
                  </p>
                </div>
              ))}
              <div className="border-t border-neutral-100 pt-3 dark:border-neutral-800" />
            </div>
          )}

          <ul className="space-y-1.5">
            {question.idealAnswerThemes.map((theme, i) => (
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
