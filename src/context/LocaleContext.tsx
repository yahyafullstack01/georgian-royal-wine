"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getTranslations,
  locales,
  type Locale,
  type Translations,
} from "@/lib/i18n/translations";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  mounted: boolean;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const VALID_LOCALES = new Set(locales.map((l) => l.code));

function getHostKey(): string {
  if (typeof window === "undefined") return "default";
  return window.location.hostname.toLowerCase().replace(/^www\./, "");
}

function getDomainDefaultLocale(host = getHostKey()): Locale {
  if (host === "grw-wine.bg" || host.endsWith(".grw-wine.bg")) return "bg";
  return "es";
}

function storageKey(host = getHostKey()): string {
  return `vinea-locale:${host}`;
}

function applyDocumentLang(locale: Locale) {
  document.documentElement.lang = locale;
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  /**
   * Set by routes that have a dedicated, indexable locale URL (e.g. /ru/*).
   * When present, it seeds the initial render so server-rendered HTML is
   * already in that language — no client-side flash, and crawlers that
   * don't execute JS still see the right content.
   */
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "es");
  const [mounted, setMounted] = useState(Boolean(initialLocale));

  useEffect(() => {
    if (initialLocale) {
      applyDocumentLang(initialLocale);
      return;
    }
    const host = getHostKey();
    const domainDefault = getDomainDefaultLocale(host);
    const stored = localStorage.getItem(storageKey(host)) as Locale | null;
    const next =
      stored && VALID_LOCALES.has(stored) ? stored : domainDefault;
    setLocaleState(next);
    applyDocumentLang(next);
    setMounted(true);
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(storageKey(), next);
    applyDocumentLang(next);
  }, []);

  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, mounted }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
