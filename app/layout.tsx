import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/lib/language";

export const metadata: Metadata = {
  title: "GTM Prep",
  description: "Anthropic GTM interview prep",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
            <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
              <nav className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                  GTM Prep
                </Link>
                <Link
                  href="/learn"
                  className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                >
                  Learn
                </Link>
                <Link
                  href="/practice"
                  className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                >
                  Practice
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="pt-12">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
