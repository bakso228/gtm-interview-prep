import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-48px)] flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl space-y-3">
        <p className="mb-8 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          Anthropic · GTM Strategy &amp; Operations, DACH
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <ModeCard
            href="/learn"
            label="Learn"
            description="51 GTM concepts across 8 categories — including DACH industry segment playbooks. Master the vocabulary before the room does."
            count="51 concepts"
          />
          <ModeCard
            href="/practice"
            label="Practice"
            description="68 interview questions across 6 categories. Type your answer, then reveal the ideal structure."
            count="68 questions"
          />
          <ModeCard
            href="/speak"
            label="Speak"
            description="Personal speaking notes for the interview — career introduction, key stories, and talking points. Available in EN and DE."
            count="1 note"
          />
        </div>
      </div>
    </div>
  );
}

function ModeCard({
  href,
  label,
  description,
  count,
}: {
  href: string;
  label: string;
  description: string;
  count: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {label}
        </span>
        <span className="text-xs text-neutral-400 dark:text-neutral-600">{count}</span>
      </div>
      <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
      <div className="mt-6 flex items-center gap-1 text-xs font-medium text-neutral-900 dark:text-neutral-100">
        Open
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="translate-x-0 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
