"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allInterviewQuestions } from "@/content/interview";
import {
  getInterviewSessions,
  setInterviewSessions,
  addInterviewSession,
  clearInterviewData,
} from "@/lib/storage";
import { buildSession, formatDuration } from "@/lib/interview-session";
import {
  fetchInterviewSessionsFromSheets,
  mergeSessions,
} from "@/lib/interview-sheets";
import type { InterviewSession } from "@/content/types";
import { useLang } from "@/lib/language";
import { clsx } from "clsx";

const JD_URL = "https://job-boards.greenhouse.io/anthropic/jobs/5121572008";

export default function InterviewHub() {
  const { lang } = useLang();
  const router = useRouter();
  const [name, setName] = useState("");
  const [sessions, setSessions] = useState<InterviewSession[]>([]);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const local = getInterviewSessions();
    const valid = local.filter(
      (s) => s.interviewerName && s.interviewerName.trim().length > 0 && s.startedAt > 0
    );
    if (valid.length !== local.length) {
      setInterviewSessions(valid);
    }
    setSessions(valid);
  }, []);

  useEffect(() => {
    async function sync() {
      setSyncing(true);
      try {
        const remote = await fetchInterviewSessionsFromSheets();
        if (remote.length > 0) {
          const local = getInterviewSessions();
          const merged = mergeSessions(local, remote);
          if (merged.length !== local.length) {
            setInterviewSessions(merged);
            setSessions(merged);
          }
        }
      } finally {
        setSyncing(false);
      }
    }
    void sync();
  }, []);

  function handleStart() {
    const trimmed = name.trim();
    if (!trimmed) return;
    const session = buildSession(trimmed, allInterviewQuestions);
    addInterviewSession(session);
    router.push(`/interview/run/${session.id}`);
  }

  function handleReset() {
    const msg =
      lang === "de"
        ? "Alle gespeicherten Interviews löschen? Das kann nicht rückgängig gemacht werden."
        : "Delete all saved interviews? This cannot be undone.";
    if (!confirm(msg)) return;
    clearInterviewData();
    setSessions([]);
  }

  const ui =
    lang === "de"
      ? {
          heading: "Mock-Interview",
          sub: "Lass dich von Freunden und Ex-Kolleg:innen für die Anthropic GTM-Rolle interviewen.",
          syncing: "Synchronisiere…",
          referenceHeader: "Referenz",
          jobDesc: "Stellenbeschreibung",
          viewCv: "CV ansehen",
          startHeader: "Neues Interview starten",
          startSub:
            "Gib den Namen des Interviewers ein. Du bekommst dann 10 Fragen mit einem Timer und sichtbaren 'Worauf-achten'-Hinweisen für den Interviewer.",
          namePlaceholder: "Name des Interviewers",
          startBtn: "Interview starten →",
          historyHeader: "Bisherige Sessions",
          historyDate: "Datum",
          historyName: "Interviewer",
          historyScore: "Ergebnis",
          historyDuration: "Dauer",
          empty: "Noch keine Sessions. Starte oben dein erstes Interview.",
          reset: "Alle Sessions löschen",
        }
      : {
          heading: "Mock Interview",
          sub: "Friends and former colleagues run you through the Anthropic GTM role.",
          syncing: "Syncing…",
          referenceHeader: "Reference",
          jobDesc: "Job description",
          viewCv: "View CV",
          startHeader: "Start a new session",
          startSub:
            "Enter the interviewer's name. You'll get 10 questions with a timer and watch-for bullets visible to the interviewer.",
          namePlaceholder: "Interviewer name",
          startBtn: "Start interview →",
          historyHeader: "Past sessions",
          historyDate: "Date",
          historyName: "Interviewer",
          historyScore: "Score",
          historyDuration: "Duration",
          empty: "No sessions yet. Start your first interview above.",
          reset: "Clear all sessions",
        };

  function formatDate(ts: number) {
    return new Date(ts).toLocaleDateString(lang === "de" ? "de-DE" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          {ui.heading}
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{ui.sub}</p>
        {syncing && (
          <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-600">{ui.syncing}</p>
        )}
      </div>

      {/* Reference card */}
      <div className="mb-4 rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
          {ui.referenceHeader}
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={JD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-500"
          >
            {ui.jobDesc} ↗
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-500"
          >
            {ui.viewCv} ↗
          </a>
        </div>
      </div>

      {/* Start session */}
      <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
          {ui.startHeader}
        </p>
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">{ui.startSub}</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleStart();
            }}
            placeholder={ui.namePlaceholder}
            className="flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-600"
          />
          <button
            onClick={handleStart}
            disabled={!name.trim()}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 transition-all hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
          >
            {ui.startBtn}
          </button>
        </div>
      </div>

      {/* Past sessions */}
      <div className="mb-10 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <p className="border-b border-neutral-100 px-5 py-3 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
          {ui.historyHeader}
        </p>
        {sessions.length === 0 ? (
          <p className="px-5 py-6 text-sm text-neutral-400 dark:text-neutral-600">
            {ui.empty}
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <th className="px-5 py-2.5 text-left text-xs font-medium text-neutral-400 dark:text-neutral-600">
                  {ui.historyDate}
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-medium text-neutral-400 dark:text-neutral-600">
                  {ui.historyName}
                </th>
                <th className="px-5 py-2.5 text-right text-xs font-medium text-neutral-400 dark:text-neutral-600">
                  {ui.historyDuration}
                </th>
                <th className="px-5 py-2.5 text-right text-xs font-medium text-neutral-400 dark:text-neutral-600">
                  {ui.historyScore}
                </th>
              </tr>
            </thead>
            <tbody>
              {[...sessions].reverse().map((s) => {
                const dur =
                  s.endedAt && s.startedAt ? s.endedAt - s.startedAt : 0;
                const completed = (s.endedAt ?? 0) > 0;
                return (
                  <tr
                    key={s.id}
                    className="border-b border-neutral-50 last:border-0 dark:border-neutral-800/50"
                  >
                    <td className="px-5 py-2.5 text-neutral-700 dark:text-neutral-300">
                      {formatDate(s.startedAt)}
                    </td>
                    <td className="px-5 py-2.5 text-neutral-700 dark:text-neutral-300">
                      {completed ? (
                        <Link
                          href={`/interview/done/${s.id}`}
                          className="hover:underline"
                        >
                          {s.interviewerName}
                        </Link>
                      ) : (
                        <Link
                          href={`/interview/run/${s.id}`}
                          className="hover:underline"
                        >
                          {s.interviewerName}{" "}
                          <span className="text-xs text-neutral-400">
                            ({lang === "de" ? "läuft" : "in progress"})
                          </span>
                        </Link>
                      )}
                    </td>
                    <td className="px-5 py-2.5 text-right font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
                      {dur > 0 ? formatDuration(dur) : "—"}
                    </td>
                    <td className="px-5 py-2.5 text-right">
                      {completed ? (
                        <span
                          className={clsx(
                            "rounded-full px-2 py-0.5 text-xs font-medium",
                            s.overallScorePct >= 80
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                              : s.overallScorePct >= 60
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                              : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                          )}
                        >
                          {s.overallScorePct}%
                        </span>
                      ) : (
                        <span className="text-xs text-neutral-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Reset */}
      {sessions.length > 0 && (
        <div className="border-t border-neutral-100 pt-6 dark:border-neutral-800">
          <button
            onClick={handleReset}
            className="text-xs text-neutral-400 transition-colors hover:text-red-500 dark:text-neutral-600 dark:hover:text-red-400"
          >
            {ui.reset}
          </button>
        </div>
      )}
    </div>
  );
}
