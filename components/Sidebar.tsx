"use client";

import Link from "next/link";
import { clsx } from "clsx";
import type { ConceptCategory } from "@/content/types";
import { CATEGORY_LABELS, CATEGORY_LABELS_DE } from "@/content/types";
import { useLang } from "@/lib/language";

type SidebarItem = {
  category: ConceptCategory;
  total: number;
  learned: number;
};

export default function Sidebar({
  items,
  activeCategory,
}: {
  items: SidebarItem[];
  activeCategory: ConceptCategory | null;
}) {
  const { lang } = useLang();
  const catLabels = lang === "de" ? CATEGORY_LABELS_DE : CATEGORY_LABELS;
  const allLabel = lang === "de" ? "Alle Konzepte" : "All concepts";

  return (
    <nav className="space-y-0.5">
      <SidebarLink
        href="/learn"
        label={allLabel}
        active={activeCategory === null}
        count={items.reduce((s, i) => s + i.total, 0)}
        learned={items.reduce((s, i) => s + i.learned, 0)}
      />
      {items.map((item) => (
        <SidebarLink
          key={item.category}
          href={`/learn?category=${item.category}`}
          label={catLabels[item.category]}
          active={activeCategory === item.category}
          count={item.total}
          learned={item.learned}
        />
      ))}
    </nav>
  );
}

function SidebarLink({
  href,
  label,
  active,
  count,
  learned,
}: {
  href: string;
  label: string;
  active: boolean;
  count: number;
  learned: number;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
      )}
    >
      <span>{label}</span>
      <span className={clsx("text-xs tabular-nums", active ? "opacity-60" : "text-neutral-400 dark:text-neutral-600")}>
        {learned}/{count}
      </span>
    </Link>
  );
}
