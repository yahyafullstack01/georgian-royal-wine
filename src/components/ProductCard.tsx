"use client";

import Link from "next/link";
import Image from "next/image";
import { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";
import { useLocale } from "@/context/LocaleContext";
import { getWineContent } from "@/data/wineContent";

interface ProductCardProps {
  wine: Wine;
}

export default function ProductCard({ wine }: ProductCardProps) {
  const { t, locale } = useLocale();
  const content = getWineContent(wine.slug, locale);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-burgundy-900/5 bg-white shadow-sm ring-1 ring-gold-500/10 transition-all hover:shadow-lg hover:ring-gold-500/25 dark:border-gold-500/10 dark:bg-stone-900 dark:shadow-stone-950/50 dark:ring-gold-500/15">
      <Link
        href={`/wines/${wine.slug}`}
        className="relative aspect-[3/4] overflow-hidden bg-white dark:bg-stone-950"
      >
        <Image
          src={wine.image}
          alt={content.name}
          fill
          className="object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {!wine.inStock && (
          <span className="absolute top-2 left-2 rounded bg-burgundy-900/90 px-1.5 py-0.5 text-[10px] font-medium text-cream-100 sm:top-3 sm:left-3 sm:px-2 sm:py-1 sm:text-xs">
            {t.product.soldOut}
          </span>
        )}
        <span className="absolute top-2 right-2 max-w-[70%] truncate rounded bg-cream-100/90 px-1.5 py-0.5 text-[10px] font-medium text-burgundy-900 sm:top-3 sm:right-3 sm:px-2 sm:py-1 sm:text-xs dark:bg-stone-800/90 dark:text-cream-100">
          {content.classification}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-2.5 sm:p-4">
        <p className="text-[10px] tracking-widest text-burgundy-600 uppercase sm:text-xs dark:text-gold-400">
          {content.region}, {content.country}
        </p>
        <Link href={`/wines/${wine.slug}`}>
          <h3 className="mt-1 font-serif text-sm leading-snug text-burgundy-950 transition-colors hover:text-burgundy-700 sm:text-lg dark:text-cream-100 dark:hover:text-gold-400">
            {content.name}
          </h3>
        </Link>
        {(content.vintage || wine.vintage) && (
          <p className="mt-0.5 text-xs text-stone-500 sm:mt-1 sm:text-sm dark:text-stone-400">
            {content.vintage ?? wine.vintage}
          </p>
        )}
        <p className="mt-2 rounded border border-green-600/20 bg-green-50 px-2 py-1 text-[10px] font-medium leading-snug text-green-800 sm:text-xs dark:border-green-500/25 dark:bg-green-950/40 dark:text-green-400">
          {t.product.cardFreeDelivery}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 sm:pt-4">
          <span className="font-serif text-base text-burgundy-900 sm:text-xl dark:text-gold-400">
            {formatPrice(wine.price)}
          </span>
          <AddToCartButton wine={wine} size="sm" showPackOptions={false} />
        </div>
      </div>
    </article>
  );
}
