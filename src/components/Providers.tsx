"use client";

import { CartProvider } from "@/context/CartContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <CartProvider>{children}</CartProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
