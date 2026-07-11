"use client";

import CartContent from "@/components/CartContent";
import PageHero from "@/components/PageHero";
import { useLocale } from "@/context/LocaleContext";

export default function CartPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={t.cart.title} compact />
      <div className="bg-cream-50 py-12 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CartContent />
        </div>
      </div>
    </>
  );
}
