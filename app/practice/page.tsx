"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { allQuestions } from "@/content/questions/index";
import type { QuestionCategory, Difficulty } from "@/content/types";
import { QUESTION_CATEGORY_LABELS } from "@/content/types";
import { getSeenQuestions, getWeakQuestions } from "@/lib/storage";
import { shuffle, filterByCategory } from "@/lib/shuffle";
import { clsx } from "clsx";

const CATEGORIES = Object.keys(QUESTION_CATEGORY_LABELS) as QuestionCategory[];
const DIFFICULTIES: Difficulty[] = ["easy", "medium", "hard"];

export default function PracticePage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<QuestionCategory | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | null>(null);
  const [seenIds, setSeenIds] = useState<string[]>([]);
  const [weakIds, setWeakIds] = useState<string[]>([]);
  const [weakMode, setWeakMode] = useState(false);

  useEffect(() => {
    setSeenIds(getSeenQuestions());
    setWeakIds(getWeakQuestions());
  }, []);

  function getFiltered() {
    let pool = weakMode
      ? allQuestions.filter((q) => weakIds.includes(q.id))
      : allQuestions;
    if (activeCategory) pool = filterByCategory(pool, activeCategory);
    if (activeDifficulty) pool = pool.filter((q) => q.difficulty === activeDifficulty);
    return pool;
  }

  function startShuffled() {
    const pool = getFiltered();
    if (pool.length === 0) return;
    const q = shuffle(pool)[0];
    router.push(`/practice/${q.id}`);
  }

  const filtered = getFiltered();
  const unseen = filtered.filter((q) => !seenIds.includes(q.id));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Stats */}
      <div className="mb-8 flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          <span className="font-medium text-neutral-900 dark:text-neutral-100">{seenIds.length}</span> of {allQuestions.length} seen
        </span>
        <span>
          <span className="font-medium text-neutral-900 dark:text-neutral-100">{weakIds.length}</span> marked weak
        </span>
      </div>

      {/* Category filter — horizontal scroll on mobile */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        <FilterPill
          label="All"
          active={!activeCategory && !weakMode}
          onClick={() => { setActiveCategory(null); setWeakMode(false); }}
        />
        {CATEGORIES.map((cat) => (
          <FilterPill
            key={cat}
            label={QUESTION_CATEGORY_LABELS[cat]}
            active={activeCategory === cat && !weakMode}
            onClick={() => { setActiveCategory(cat); setWeakMode(false); }}
          />
        ))}
        <FilterPill
          label={`Weak (${weakIds.length})`}
          active={weakMode}
          onClick={() => { setWeakMode(true); setActiveCategory(null); }}
        />
      </div>

      {/* Difficulty filter */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
        <FilterPill
          label="Any"
          active={!activeDifficulty}
          onClick={() => setActiveDifficulty(null)}
          small
        />
        {DIFFICULTIES.map((d) => (
          <FilterPill
            key={d}
            label={d.charAt(0).toUpperCase() + d.slice(1)}
            active={activeDifficulty === d}
            onClick={() => setActiveDifficulty(d)}
            small
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-3">
        <button
          onClick={startShuffled}
          disabled={filtered.length === 0}
          className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-700 disabled:opacity-30 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Start Shuffled
        </button>
        {unseen.length > 0 && (
          <button
            onClick={() => {
              const q = shuffle(unseen)[0];
              router.push(`/practice/${q.id}`);
            }}
            className="rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
          >
            Start Unseen ({unseen.length})
          </button>
        )}
      </div>

      {/* Question list */}
      <div className="space-y-1">
        {filtered.length === 0 ? (
          <p className="text-sm text-neutral-400 dark:text-neutral-600">
            {weakMode ? "No weak questions in this filter." : "No questions match this filter."}
          </p>
        ) : (
          filtered.map((q) => (
            <button
              key={q.id}
              onClick={() => router.push(`/practice/${q.id}`)}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className={clsx(
                "flex-shrink-0 text-xs font-medium",
                q.difficulty === "easy" ? "text-neutral-400" :
                q.difficulty === "medium" ? "text-neutral-500" : "text-neutral-700 dark:text-neutral-300"
              )}>
                {q.difficulty[0].toUpperCase()}
              </span>
              <span className="flex-1 text-neutral-700 dark:text-neutral-300">{q.prompt}</span>
              <div className="flex flex-shrink-0 items-center gap-1.5">
                {weakIds.includes(q.id) && (
                  <span className="text-xs text-neutral-400 dark:text-neutral-600">weak</span>
                )}
                {seenIds.includes(q.id) && (
                  <span className="text-neutral-400 dark:text-neutral-600">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  small,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full border transition-colors",
        small ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm",
        active
          ? "border-neutral-900 bg-neutral-900 text-neutral-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
          : "border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500"
      )}
    >
      {label}
    </button>
  );
}
