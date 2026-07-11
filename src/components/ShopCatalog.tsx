"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { wines } from "@/data/wines";
import ProductCard from "@/components/ProductCard";
import { useLocale } from "@/context/LocaleContext";

function ShopContent() {
  const searchParams = useSearchParams();
  const { t } = useLocale();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { value: "all", label: t.shop.allWines },
    { value: "red", label: t.shop.red },
    { value: "white", label: t.shop.white },
    { value: "rosé", label: t.shop.rose },
    { value: "sparkling", label: t.shop.sparkling },
  ];

  let filtered =
    category === "all"
      ? [...wines]
      : wines.filter((w) => w.category === category);

  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === cat.value
                  ? "bg-burgundy-900 text-cream-100 dark:bg-gold-500 dark:text-burgundy-950"
                  : "bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-burgundy-300 dark:bg-stone-900 dark:text-stone-300 dark:ring-stone-700 dark:hover:ring-gold-500"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 focus:border-burgundy-700 focus:outline-none dark:border-stone-600 dark:bg-stone-900 dark:text-stone-200 dark:focus:border-gold-500"
        >
          <option value="featured">{t.shop.sortFeatured}</option>
          <option value="price-low">{t.shop.sortPriceLow}</option>
          <option value="price-high">{t.shop.sortPriceHigh}</option>
          <option value="name">{t.shop.sortName}</option>
        </select>
      </div>

      <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
        {filtered.length}{" "}
        {filtered.length === 1 ? t.shop.wine : t.shop.wines}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((wine) => (
          <ProductCard key={wine.id} wine={wine} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-stone-500 dark:text-stone-400">
          {t.shop.noWines}
        </p>
      )}
    </>
  );
}

export default function ShopCatalog() {
  const { t } = useLocale();

  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-stone-500 dark:text-stone-400">
          {t.shop.loading}
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
