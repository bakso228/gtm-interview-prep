"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import ConceptCard from "@/components/ConceptCard";
import Sidebar from "@/components/Sidebar";
import { allConcepts } from "@/content/concepts/index";
import type { ConceptCategory } from "@/content/types";
import { CATEGORY_LABELS } from "@/content/types";
import { getLearnedConcepts } from "@/lib/storage";
import { clsx } from "clsx";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as ConceptCategory[];

function LearnPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") as ConceptCategory | null;
  const [search, setSearch] = useState("");
  const [learnedIds, setLearnedIds] = useState<string[]>([]);

  useEffect(() => {
    setLearnedIds(getLearnedConcepts());
  }, []);

  const filtered = allConcepts.filter((c) => {
    const matchesCategory = !categoryParam || c.category === categoryParam;
    const matchesSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.definition.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sidebarItems = CATEGORIES.map((cat) => {
    const total = allConcepts.filter((c) => c.category === cat).length;
    const learned = allConcepts.filter(
      (c) => c.category === cat && learnedIds.includes(c.id)
    ).length;
    return { category: cat, total, learned };
  });

  function setCategory(cat: ConceptCategory | null) {
    if (cat) {
      router.push(`/learn?category=${cat}`);
    } else {
      router.push("/learn");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Mobile: horizontal category strip */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
        <MobilePill label="All" active={!categoryParam} onClick={() => setCategory(null)} />
        {CATEGORIES.map((cat) => (
          <MobilePill
            key={cat}
            label={CATEGORY_LABELS[cat]}
            active={categoryParam === cat}
            onClick={() => setCategory(cat)}
          />
        ))}
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <div className="hidden w-52 flex-shrink-0 md:block">
          <Sidebar items={sidebarItems} activeCategory={categoryParam} />
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          <div className="mb-5">
            <input
              type="search"
              placeholder="Search concepts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-600 dark:focus:border-neutral-500"
            />
          </div>
          {filtered.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-neutral-600">No concepts match your search.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {filtered.map((concept) => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  learned={learnedIds.includes(concept.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobilePill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex-shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors",
        active
          ? "border-neutral-900 bg-neutral-900 text-neutral-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
          : "border-neutral-200 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
      )}
    >
      {label}
    </button>
  );
}

export default function LearnPage() {
  return (
    <Suspense>
      <LearnPageInner />
    </Suspense>
  );
}
