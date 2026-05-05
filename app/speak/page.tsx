"use client";

import { ReactNode, useState } from "react";
import speakingNotes from "@/content/speaking-notes";
import { useLang } from "@/lib/language";
import { clsx } from "clsx";

function renderHighlights(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <mark
          key={i}
          className="rounded bg-amber-100 px-1 font-medium text-neutral-900 dark:bg-amber-900/40 dark:text-amber-100"
        >
          {part.slice(2, -2)}
        </mark>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function renderBlocks(paragraphs: string[]): ReactNode[] {
  const blocks: ReactNode[] = [];
  let i = 0;
  while (i < paragraphs.length) {
    const line = paragraphs[i];
    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={i}
          className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100"
        >
          {renderHighlights(line.slice(3))}
        </h2>
      );
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      const start = i;
      while (i < paragraphs.length && paragraphs[i].startsWith("- ")) {
        items.push(paragraphs[i].slice(2));
        i++;
      }
      blocks.push(
        <ul
          key={start}
          className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
        >
          {items.map((it, j) => (
            <li key={j}>{renderHighlights(it)}</li>
          ))}
        </ul>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      const start = i;
      while (i < paragraphs.length && /^\d+\.\s/.test(paragraphs[i])) {
        items.push(paragraphs[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol
          key={start}
          className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
        >
          {items.map((it, j) => (
            <li key={j}>{renderHighlights(it)}</li>
          ))}
        </ol>
      );
    } else {
      blocks.push(
        <p
          key={i}
          className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
        >
          {renderHighlights(line)}
        </p>
      );
      i++;
    }
  }
  return blocks;
}

export default function SpeakPage() {
  const { lang } = useLang();
  const [activeId, setActiveId] = useState(speakingNotes[0]?.id ?? null);

  const activeNote = speakingNotes.find((n) => n.id === activeId) ?? null;
  const paragraphs =
    lang === "de" && activeNote?.paragraphsDe?.length
      ? activeNote.paragraphsDe
      : activeNote?.paragraphs ?? [];
  const title =
    lang === "de" && activeNote?.titleDe ? activeNote.titleDe : activeNote?.title ?? "";
  const category =
    lang === "de" && activeNote?.categoryDe ? activeNote.categoryDe : activeNote?.category ?? "";

  const ui = {
    en: { heading: "Speaking Notes", empty: "No note selected.", count: (n: number) => `${n} note${n !== 1 ? "s" : ""}` },
    de: { heading: "Sprechnotizen", empty: "Keine Notiz ausgewählt.", count: (n: number) => `${n} Notiz${n !== 1 ? "en" : ""}` },
  }[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Mobile: horizontal pill strip — above content */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
        {speakingNotes.map((note) => {
          const noteTitle = lang === "de" && note.titleDe ? note.titleDe : note.title;
          return (
            <button
              key={note.id}
              onClick={() => setActiveId(note.id)}
              className={clsx(
                "flex-shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors",
                activeId === note.id
                  ? "border-neutral-900 bg-neutral-900 text-neutral-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                  : "border-neutral-200 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
              )}
            >
              {noteTitle}
            </button>
          );
        })}
      </div>

      <div className="flex gap-8">
        {/* Sidebar — desktop only */}
        <div className="hidden w-52 flex-shrink-0 md:block">
          <nav className="space-y-0.5">
            <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
              {ui.heading}
            </p>
            {speakingNotes.map((note) => {
              const noteTitle = lang === "de" && note.titleDe ? note.titleDe : note.title;
              const noteCat = lang === "de" && note.categoryDe ? note.categoryDe : note.category;
              return (
                <button
                  key={note.id}
                  onClick={() => setActiveId(note.id)}
                  className={clsx(
                    "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
                    activeId === note.id
                      ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  )}
                >
                  <span className="block font-medium">{noteTitle}</span>
                  <span className={clsx("block text-xs mt-0.5", activeId === note.id ? "opacity-60" : "text-neutral-400 dark:text-neutral-600")}>
                    {noteCat}
                  </span>
                </button>
              );
            })}
            <p className="mt-4 px-3 text-xs text-neutral-400 dark:text-neutral-600">
              {ui.count(speakingNotes.length)}
            </p>
          </nav>
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {!activeNote ? (
            <p className="text-sm text-neutral-400 dark:text-neutral-600">{ui.empty}</p>
          ) : (
            <article>
              {/* Header */}
              <div className="mb-8">
                <span className="mb-2 inline-block rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  {category}
                </span>
                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {title}
                </h1>
              </div>

              {/* Paragraphs */}
              <div className="space-y-5">{renderBlocks(paragraphs)}</div>

              {/* Word count hint */}
              <p className="mt-8 text-xs text-neutral-300 dark:text-neutral-700">
                {paragraphs
                  .map((p) => p.replace(/^(##|###|-|\d+\.)\s/, ""))
                  .join(" ")
                  .replace(/\*\*/g, "")
                  .split(/\s+/)
                  .filter(Boolean).length}{" "}
                {lang === "de" ? "Wörter" : "words"}
              </p>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
