"use client";

import ShopCatalog from "@/components/ShopCatalog";
import { useLocale } from "@/context/LocaleContext";

export default function ShopPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-burgundy-950 dark:text-cream-100">
          {t.shop.title}
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          {t.shop.subtitle}
        </p>
      </div>
      <ShopCatalog />
    </div>
  );
}
