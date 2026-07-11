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

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vinea-locale") as Locale | null;
    if (stored && ["en", "es", "ru", "fr", "uk"].includes(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = stored === "uk" ? "uk" : stored;
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("vinea-locale", next);
    document.documentElement.lang = next === "uk" ? "uk" : next;
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
