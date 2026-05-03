"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { allInterviewQuestions } from "@/content/interview";
import { getInterviewSession } from "@/lib/storage";
import { formatDuration } from "@/lib/interview-session";
import {
  INTERVIEW_TYPE_LABELS,
  INTERVIEW_TYPE_LABELS_DE,
} from "@/content/types";
import type { InterviewSession } from "@/content/types";
import { useLang } from "@/lib/language";
import { clsx } from "clsx";

export default function InterviewDone() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const { lang } = useLang();
  const [session, setSession] = useState<InterviewSession | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSession(getInterviewSession(sessionId));
    setLoaded(true);
  }, [sessionId]);

  if (!loaded) return null;

  if (!session) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {lang === "de" ? "Session nicht gefunden." : "Session not found."}
        </p>
        <Link
          href="/interview"
          className="mt-4 inline-block text-sm text-neutral-700 hover:underline dark:text-neutral-300"
        >
          ← {lang === "de" ? "Zurück zum Hub" : "Back to hub"}
        </Link>
      </div>
    );
  }

  const typeLabels = lang === "de" ? INTERVIEW_TYPE_LABELS_DE : INTERVIEW_TYPE_LABELS;
  const total = session.answers.length;
  const skipped = session.answers.filter((a) => a.rating === "skip").length;
  const answered = total - skipped;
  const duration =
    session.endedAt && session.startedAt ? session.endedAt - session.startedAt : 0;

  const ui =
    lang === "de"
      ? {
          heading: "Ergebnis",
          subline: (a: number, s: number, d: string) =>
            `${a} beantwortet, ${s} übersprungen — ${d}`,
          breakdownHeader: "Pro Frage",
          colType: "Typ",
          colQuestion: "Frage",
          colTime: "Zeit",
          colRating: "Bewertung",
          back: "Zurück zum Hub",
          another: "Nochmal starten",
        }
      : {
          heading: "Result",
          subline: (a: number, s: number, d: string) =>
            `${a} answered, ${s} skipped — ${d}`,
          breakdownHeader: "Per question",
          colType: "Type",
          colQuestion: "Question",
          colTime: "Time",
          colRating: "Rating",
          back: "Back to hub",
          another: "Start another",
        };

  function ratingLabel(r: number | "skip") {
    if (r === "skip") return lang === "de" ? "Übersprungen" : "Skip";
    return `${Math.round((r as number) * 100)}%`;
  }

  function ratingTone(r: number | "skip") {
    if (r === "skip") return "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500";
    if (r === 1.2) return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300";
    if (r === 1.0) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300";
    if (r === 0.8) return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";
    return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          {ui.heading}
        </p>
        <p
          className={clsx(
            "text-6xl font-bold tabular-nums",
            session.overallScorePct >= 80
              ? "text-emerald-600 dark:text-emerald-400"
              : session.overallScorePct >= 60
              ? "text-amber-600 dark:text-amber-400"
              : "text-red-600 dark:text-red-400"
          )}
        >
          {session.overallScorePct}%
        </p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {ui.subline(answered, skipped, formatDuration(duration))}
        </p>
        <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-600">
          {session.interviewerName}
        </p>
      </div>

      {/* Per-question breakdown */}
      <div className="mb-8 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <p className="border-b border-neutral-100 px-5 py-3 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
          {ui.breakdownHeader}
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-100 dark:border-neutral-800">
              <th className="px-5 py-2.5 text-left text-xs font-medium text-neutral-400 dark:text-neutral-600">
                {ui.colType}
              </th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-neutral-400 dark:text-neutral-600">
                {ui.colQuestion}
              </th>
              <th className="px-5 py-2.5 text-right text-xs font-medium text-neutral-400 dark:text-neutral-600">
                {ui.colTime}
              </th>
              <th className="px-5 py-2.5 text-right text-xs font-medium text-neutral-400 dark:text-neutral-600">
                {ui.colRating}
              </th>
            </tr>
          </thead>
          <tbody>
            {session.answers.map((a, i) => {
              const q = allInterviewQuestions.find((qq) => qq.id === a.questionId);
              if (!q) return null;
              const text = lang === "de" && q.de?.question ? q.de.question : q.question;
              return (
                <tr
                  key={`${a.questionId}-${i}`}
                  className="border-b border-neutral-50 last:border-0 dark:border-neutral-800/50"
                >
                  <td className="px-5 py-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                    {typeLabels[q.type]}
                  </td>
                  <td className="max-w-md truncate px-5 py-2.5 text-neutral-700 dark:text-neutral-300">
                    {text}
                  </td>
                  <td className="px-5 py-2.5 text-right font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
                    {formatDuration(a.durationSeconds * 1000)}
                  </td>
                  <td className="px-5 py-2.5 text-right">
                    <span
                      className={clsx(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        ratingTone(a.rating)
                      )}
                    >
                      {ratingLabel(a.rating)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/interview"
          className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-500"
        >
          ← {ui.back}
        </Link>
        <Link
          href="/interview"
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 transition-all hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          {ui.another}
        </Link>
      </div>
    </div>
  );
}
