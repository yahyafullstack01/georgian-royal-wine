"use client";

import CartContent from "@/components/CartContent";
import { useLocale } from "@/context/LocaleContext";

export default function CartPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-serif text-4xl text-burgundy-950 dark:text-cream-100">
        {t.cart.title}
      </h1>
      <CartContent />
    </div>
  );
}
