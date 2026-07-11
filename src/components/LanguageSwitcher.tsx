"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import { locales, type Locale } from "@/lib/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale, mounted } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-16" />;
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm text-stone-700 transition-colors hover:bg-brand-500/10 dark:text-cream-200 dark:hover:bg-brand-400/10"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden font-medium uppercase sm:inline">
          {current.code}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-900">
          {locales.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code as Locale);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-burgundy-900/5 dark:hover:bg-cream-100/5 ${
                locale === lang.code
                  ? "bg-burgundy-900/5 font-medium text-burgundy-900 dark:bg-cream-100/10 dark:text-cream-100"
                  : "text-stone-600 dark:text-stone-300"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
