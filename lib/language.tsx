"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Language } from "@/content/types";

type LanguageCtx = { lang: Language; toggle: () => void };

const Ctx = createContext<LanguageCtx>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "de") setLang("de");
  }, []);

  function toggle() {
    setLang((l) => {
      const next: Language = l === "en" ? "de" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
