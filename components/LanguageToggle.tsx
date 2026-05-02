"use client";

import { useLang } from "@/lib/language";

export default function LanguageToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      title={lang === "en" ? "Auf Deutsch wechseln" : "Switch to English"}
      className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-100"
    >
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
}
