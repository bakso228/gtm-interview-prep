"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { allQuestions } from "@/content/questions/index";
import QuestionCard from "@/components/QuestionCard";
import { markQuestionSeen, toggleWeakQuestion, isQuestionWeak } from "@/lib/storage";
import { shuffle } from "@/lib/shuffle";

function PracticeQuestionInner() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const question = allQuestions.find((q) => q.id === id);
  const [isWeak, setIsWeak] = useState(false);
  const [sessionQueue, setSessionQueue] = useState<string[]>([]);

  useEffect(() => {
    if (question) {
      markQuestionSeen(question.id);
      setIsWeak(isQuestionWeak(question.id));
      // Build a session queue from all questions if not already set
      if (sessionQueue.length === 0) {
        setSessionQueue(shuffle(allQuestions).map((q) => q.id));
      }
    }
  }, [question?.id]);

  if (!question) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <p className="text-sm text-neutral-400">Question not found.</p>
        <Link href="/practice" className="mt-4 block text-sm text-neutral-900 underline dark:text-neutral-100">
          Back to Practice
        </Link>
      </div>
    );
  }

  function handleMarkWeak() {
    const next = toggleWeakQuestion(question!.id);
    setIsWeak(next);
  }

  function navigateNext() {
    const idx = sessionQueue.indexOf(question!.id);
    const nextId = sessionQueue[idx + 1] ?? sessionQueue[0];
    if (nextId && nextId !== question!.id) {
      router.push(`/practice/${nextId}`);
    } else {
      router.push("/practice");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <Link
          href="/practice"
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Practice
        </Link>
      </div>
      <QuestionCard
        question={question}
        isWeak={isWeak}
        onMarkWeak={handleMarkWeak}
        onNext={navigateNext}
        onSkip={navigateNext}
      />
    </div>
  );
}

export default function PracticeQuestionPage() {
  return (
    <Suspense>
      <PracticeQuestionInner />
    </Suspense>
  );
}
