"use client";

import Image from "next/image";
import Link from "next/link";
import { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";

interface WineDetailContentProps {
  wine: Wine;
  related: Wine[];
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

export default function WineDetailContent({
  wine,
  related,
}: WineDetailContentProps) {
  const { t } = useLocale();

  return (
    <div className="bg-cream-50 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-stone-500 dark:text-stone-400">
          <Link
            href="/shop"
            className="hover:text-burgundy-700 dark:hover:text-gold-400"
          >
            {t.nav.shop}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-burgundy-900 dark:text-cream-200">
            {categoryLabel(wine.category, t)}
          </span>
          <span className="mx-2">/</span>
          <span className="text-stone-800 dark:text-stone-300">{wine.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-lg border border-gold-500/20"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-stone-100 ring-1 ring-burgundy-900/5 dark:bg-stone-800 dark:ring-gold-500/10">
              <Image
                src={wine.image}
                alt={wine.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="relative border border-burgundy-900/10 bg-white p-8 shadow-sm dark:border-gold-500/15 dark:bg-stone-900">
            <div
              className="pointer-events-none absolute inset-3 border border-gold-500/10"
              aria-hidden="true"
            />
            <p className="text-sm tracking-widest text-burgundy-600 uppercase dark:text-gold-400">
              {wine.region}, {wine.country}
            </p>
            <h1 className="mt-2 font-serif text-4xl text-burgundy-950 dark:text-cream-100">
              {wine.name}
            </h1>
            <p className="mt-1 text-lg text-stone-500 dark:text-stone-400">
              {t.product.vintage} {wine.vintage}
            </p>

            <GeorgianDivider className="my-6 justify-start" />

            <p className="font-serif text-3xl text-burgundy-900 dark:text-gold-400">
              {formatPrice(wine.price)}
            </p>

            <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-300">
              {wine.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border border-burgundy-900/5 bg-cream-50 p-4 text-sm sm:grid-cols-4 dark:border-gold-500/10 dark:bg-stone-950">
              <div>
                <p className="text-stone-400">{t.product.category}</p>
                <p className="mt-1 font-medium capitalize">
                  {categoryLabel(wine.category, t)}
                </p>
              </div>
              <div>
                <p className="text-stone-400">{t.product.alcohol}</p>
                <p className="mt-1 font-medium">{wine.alcohol}</p>
              </div>
              <div>
                <p className="text-stone-400">{t.product.volume}</p>
                <p className="mt-1 font-medium">{wine.volume}</p>
              </div>
              <div>
                <p className="text-stone-400">{t.product.availability}</p>
                <p
                  className={`mt-1 font-medium ${wine.inStock ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {wine.inStock ? t.product.inStock : t.product.soldOut}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium tracking-widest text-burgundy-600 uppercase dark:text-gold-400">
                {t.product.tastingNotes}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {wine.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-gold-500/20 bg-burgundy-900/5 px-3 py-1 text-sm text-burgundy-800 dark:bg-cream-100/10 dark:text-cream-200"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <AddToCartButton wine={wine} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-burgundy-900/10 pt-16 dark:border-gold-500/10">
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
              {t.product.youMayLike}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((w) => (
                <Link
                  key={w.id}
                  href={`/wines/${w.slug}`}
                  className="group flex gap-4 rounded-lg border border-burgundy-900/5 bg-white p-4 ring-1 ring-gold-500/10 transition-shadow hover:shadow-md dark:border-stone-700 dark:bg-stone-900"
                >
                  <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded">
                    <Image
                      src={w.image}
                      alt={w.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-burgundy-950 group-hover:text-burgundy-700 dark:text-cream-100 dark:group-hover:text-gold-400">
                      {w.name}
                    </h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {w.vintage}
                    </p>
                    <p className="mt-1 font-medium text-burgundy-900 dark:text-gold-400">
                      {formatPrice(w.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
