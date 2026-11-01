"use client";

import { CartProvider } from "@/context/CartContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";
import type { Locale } from "@/lib/i18n/translations";

export default function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={initialLocale}>
        <CartProvider>{children}</CartProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
