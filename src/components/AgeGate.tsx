"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import Logo from "@/components/Logo";

const STORAGE_KEY = "grw-age-verified";

export default function AgeGate() {
  const { t, mounted } = useLocale();
  const [verified, setVerified] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setVerified(stored === "yes");
  }, []);

  useEffect(() => {
    if (mounted && !verified) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mounted, verified]);

  if (!mounted || verified) return null;

  const handleYes = () => {
    localStorage.setItem(STORAGE_KEY, "yes");
    setVerified(true);
  };

  const handleNo = () => {
    setBlocked(true);
  };

  if (blocked) {
    return (
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="age-gate-blocked-title"
        aria-describedby="age-gate-blocked-desc"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-950 px-4"
      >
        <div className="w-full max-w-md rounded-xl border border-gold-500/20 bg-cream-50 p-8 text-center shadow-2xl dark:border-gold-500/15 dark:bg-stone-900">
          <div className="flex justify-center">
            <Logo size="md" linked={false} badge />
          </div>

          <h1
            id="age-gate-blocked-title"
            className="mt-6 font-serif text-2xl text-burgundy-950 dark:text-cream-100"
          >
            {t.ageGate.blockedTitle}
          </h1>
          <p
            id="age-gate-blocked-desc"
            className="mt-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400"
          >
            {t.ageGate.blockedDesc}
          </p>

          <a
            href="https://www.google.com"
            className="mt-8 inline-block rounded bg-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
          >
            {t.ageGate.blockedCta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy-950 px-4"
    >
      <div className="w-full max-w-md rounded-xl border border-gold-500/20 bg-cream-50 p-8 text-center shadow-2xl dark:border-gold-500/15 dark:bg-stone-900">
        <div className="flex justify-center">
          <Logo size="md" linked={false} badge />
        </div>

        <h1
          id="age-gate-title"
          className="mt-6 font-serif text-2xl text-burgundy-950 dark:text-cream-100"
        >
          {t.ageGate.question}
        </h1>
        <p
          id="age-gate-desc"
          className="mt-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400"
        >
          {t.ageGate.desc}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleNo}
            className="rounded border border-stone-300 px-8 py-3 text-sm font-medium tracking-wide text-stone-600 uppercase transition-colors hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            {t.ageGate.no}
          </button>
          <button
            type="button"
            onClick={handleYes}
            autoFocus
            className="rounded bg-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
          >
            {t.ageGate.yes}
          </button>
        </div>
      </div>
    </div>
  );
}
