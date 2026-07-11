"use client";

import ShopCatalog from "@/components/ShopCatalog";
import PageHero from "@/components/PageHero";
import { useLocale } from "@/context/LocaleContext";

export default function ShopPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={t.shop.title} subtitle={t.shop.subtitle} compact />
      <div className="bg-cream-50 py-12 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ShopCatalog />
        </div>
      </div>
    </>
  );
}
