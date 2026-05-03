"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { allInterviewQuestions } from "@/content/interview";
import {
  getInterviewSession,
  updateInterviewSession,
} from "@/lib/storage";
import { computeScore } from "@/lib/interview-session";
import { syncInterviewAnswerToSheets, syncInterviewSessionToSheets } from "@/lib/interview-sheets";
import type { InterviewSession, InterviewRating } from "@/content/types";
import { useLang } from "@/lib/language";
import { InterviewQuestionCard } from "@/components/InterviewQuestionCard";
import { SessionTimer } from "@/components/SessionTimer";

export default function InterviewRunner() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const router = useRouter();
  const { lang } = useLang();

  const [session, setSession] = useState<InterviewSession | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const s = getInterviewSession(sessionId);
    if (!s) {
      setLoaded(true);
      return;
    }
    setSession(s);
    setCurrentIndex(s.answers.length);
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

  const total = session.questionIds.length;
  const currentId = session.questionIds[currentIndex];
  const question = allInterviewQuestions.find((q) => q.id === currentId);

  function handleRate(rating: InterviewRating, durationSeconds: number) {
    if (!session) return;
    const answer = {
      questionId: currentId,
      rating,
      durationSeconds,
      timestamp: Date.now(),
    };
    const newAnswers = [...session.answers, answer];
    const isLast = currentIndex >= total - 1;
    const updated: InterviewSession = {
      ...session,
      answers: newAnswers,
      ...(isLast
        ? {
            endedAt: Date.now(),
            overallScorePct: computeScore(newAnswers),
          }
        : {}),
    };
    updateInterviewSession(updated);
    setSession(updated);
    void syncInterviewAnswerToSheets(session.id, answer);

    if (isLast) {
      void syncInterviewSessionToSheets(updated);
      router.push(`/interview/done/${session.id}`);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  if (!question) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-neutral-500">Question not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between text-sm">
        <Link
          href="/interview"
          className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          ← {lang === "de" ? "Hub" : "Hub"}
        </Link>
        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
          <span>
            {lang === "de" ? "Gesamtzeit" : "Total"}:{" "}
            <SessionTimer startedAt={session.startedAt} />
          </span>
          <span className="hidden text-xs sm:inline">·</span>
          <span className="hidden sm:inline text-neutral-700 dark:text-neutral-300">
            {session.interviewerName}
          </span>
        </div>
      </div>

      <InterviewQuestionCard
        key={currentId}
        question={question}
        index={currentIndex}
        total={total}
        onRate={handleRate}
      />
    </div>
  );
}
