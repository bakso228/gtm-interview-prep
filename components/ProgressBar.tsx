export default function ProgressBar({ seen, total }: { seen: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((seen / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-neutral-900 transition-all dark:bg-neutral-100"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs tabular-nums text-neutral-400 dark:text-neutral-600">
        {seen}/{total}
      </span>
    </div>
  );
}
