"use client";

import { useState } from "react";
import type { PracticeDayCount } from "@/lib/practice-scores";

const VW = 560;
const VH = 140;
const P = { top: 10, right: 12, bottom: 30, left: 32 };
const PW = VW - P.left - P.right;
const PH = VH - P.top - P.bottom;

function xAt(i: number, n: number): number {
  if (n <= 1) return P.left + PW / 2;
  return P.left + (i / (n - 1)) * PW;
}

export function PracticeDayChart({ days }: { days: PracticeDayCount[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  if (days.length === 0) {
    return (
      <div className="flex h-36 items-center justify-center text-sm text-neutral-400 dark:text-neutral-600">
        Answer some questions to see your progress here
      </div>
    );
  }

  const data = days.slice(-30);
  const n = data.length;
  const maxCount = Math.max(...data.map((d) => d.total), 1);
  const ticks = [...new Set([0, Math.ceil(maxCount / 2), maxCount])];

  function yAt(count: number): number {
    return P.top + (1 - count / maxCount) * PH;
  }

  const pts = data.map((d, i) => ({ ...d, x: xAt(i, n), y: yAt(d.total) }));
  const polyline = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      className="w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {ticks.map((t) => {
        const y = yAt(t);
        return (
          <g key={t}>
            <line
              x1={P.left} y1={y} x2={VW - P.right} y2={y}
              stroke="currentColor" strokeOpacity={0.1} strokeWidth={1}
            />
            <text
              x={P.left - 4} y={y}
              textAnchor="end" dominantBaseline="middle"
              fontSize={9} fill="currentColor" fillOpacity={0.4}
            >
              {t}
            </text>
          </g>
        );
      })}

      {n > 1 && (
        <polyline
          points={polyline}
          fill="none"
          stroke="#6366f1"
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      )}

      {pts.map((p, i) => {
        const isH = hovered === i;
        const ttX = Math.min(Math.max(p.x, 32), VW - P.right - 32);
        const ttY = p.y < P.top + 26 ? p.y + 16 : p.y - 28;
        const showLabel =
          i === 0 || i === n - 1 || n <= 7 || i % Math.max(1, Math.floor(n / 6)) === 0;
        return (
          <g key={p.date}>
            <circle
              cx={p.x} cy={p.y} r={isH ? 5 : 3.5}
              fill="#6366f1" fillOpacity={isH ? 1 : 0.7}
              stroke="white" strokeWidth={isH ? 1.5 : 0}
            />
            <circle
              cx={p.x} cy={p.y} r={12}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
            {isH && (
              <g>
                <rect x={ttX - 32} y={ttY - 2} width={64} height={18} rx={4} fill="#6366f1" />
                <text
                  x={ttX} y={ttY + 7}
                  textAnchor="middle" fontSize={9.5} fill="white" fontWeight="500"
                >
                  {p.total} answered
                </text>
              </g>
            )}
            {showLabel && (
              <text
                x={p.x} y={VH - P.bottom + 13}
                textAnchor="middle" fontSize={8}
                fill="currentColor" fillOpacity={0.4}
              >
                {p.date.slice(5).replace("-", "/")}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
