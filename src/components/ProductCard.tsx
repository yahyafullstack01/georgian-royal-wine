"use client";

import Link from "next/link";
import Image from "next/image";
import { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";
import { useLocale } from "@/context/LocaleContext";

interface ProductCardProps {
  wine: Wine;
}

function categoryLabel(
  category: string,
  t: ReturnType<typeof useLocale>["t"]
) {
  const map: Record<string, string> = {
    red: t.shop.red,
    white: t.shop.white,
    rosé: t.shop.rose,
    sparkling: t.shop.sparkling,
  };
  return map[category] ?? category;
}

export default function ProductCard({ wine }: ProductCardProps) {
  const { t } = useLocale();

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-burgundy-900/5 bg-white shadow-sm ring-1 ring-gold-500/10 transition-all hover:shadow-lg hover:ring-gold-500/25 dark:border-gold-500/10 dark:bg-stone-900 dark:shadow-stone-950/50 dark:ring-gold-500/15">
      <Link
        href={`/wines/${wine.slug}`}
        className="relative aspect-[3/4] overflow-hidden"
      >
        <Image
          src={wine.image}
          alt={wine.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {!wine.inStock && (
          <span className="absolute top-3 left-3 rounded bg-burgundy-900/90 px-2 py-1 text-xs font-medium text-cream-100">
            {t.product.soldOut}
          </span>
        )}
        <span className="absolute top-3 right-3 rounded bg-cream-100/90 px-2 py-1 text-xs font-medium text-burgundy-900 dark:bg-stone-800/90 dark:text-cream-100">
          {categoryLabel(wine.category, t)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs tracking-widest text-burgundy-600 uppercase dark:text-gold-400">
          {wine.region}, {wine.country}
        </p>
        <Link href={`/wines/${wine.slug}`}>
          <h3 className="mt-1 font-serif text-lg text-burgundy-950 transition-colors hover:text-burgundy-700 dark:text-cream-100 dark:hover:text-gold-400">
            {wine.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          {wine.vintage}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-serif text-xl text-burgundy-900 dark:text-gold-400">
            {formatPrice(wine.price)}
          </span>
          <AddToCartButton wine={wine} size="sm" />
        </div>
      </div>
    </article>
  );
}
