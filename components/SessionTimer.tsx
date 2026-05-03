"use client";

import { useEffect, useState } from "react";
import { formatDuration } from "@/lib/interview-session";

export function SessionTimer({ startedAt }: { startedAt: number }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono tabular-nums">
      {formatDuration(now - startedAt)}
    </span>
  );
}
