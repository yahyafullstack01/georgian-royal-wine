"use client";

import Image from "next/image";
import Link from "next/link";
import { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";
import { getWineContent } from "@/data/wineContent";

interface WineDetailContentProps {
  wine: Wine;
  related: Wine[];
}

export default function WineDetailContent({
  wine,
  related,
}: WineDetailContentProps) {
  const { t, locale } = useLocale();
  const content = getWineContent(wine.slug, locale);

  const specs = [
    { label: t.product.classification, value: content.classification },
    { label: t.product.region, value: content.region },
    { label: t.product.subregion, value: content.subregion },
    { label: t.product.microzone, value: content.microzone },
    { label: t.product.grape, value: content.grape },
    { label: t.product.grapesSourced, value: content.grapesSourced },
    { label: t.product.alcohol, value: content.alcohol ?? wine.alcohol },
    { label: t.product.servingTemperature, value: content.servingTemperature },
    { label: t.product.storageTemperature, value: content.storageTemperature },
    { label: t.product.color, value: content.color },
    { label: t.product.aroma, value: content.aroma },
    { label: t.product.taste, value: content.taste },
    { label: t.product.tastingNotes, value: content.tastingNotes },
    { label: t.product.pairing, value: content.pairing },
    { label: t.product.vinification, value: content.vinification },
    {
      label: t.product.vintage,
      value: content.vintage ?? (wine.vintage ? String(wine.vintage) : undefined),
    },
    { label: t.product.volume, value: wine.volume },
  ].filter((spec) => Boolean(spec.value));

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
          <span className="text-stone-800 dark:text-stone-300">{content.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-lg border border-gold-500/20"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white ring-1 ring-burgundy-900/5 dark:bg-stone-900 dark:ring-gold-500/10">
              <Image
                src={wine.image}
                alt={content.name}
                fill
                priority
                className="object-contain p-6"
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
              {content.region}, {content.country}
            </p>
            <h1 className="mt-2 font-serif text-4xl text-burgundy-950 dark:text-cream-100">
              {content.name}
            </h1>
            {(content.vintage || wine.vintage) && (
              <p className="mt-1 text-lg text-stone-500 dark:text-stone-400">
                {t.product.vintage} {content.vintage ?? wine.vintage}
              </p>
            )}

            <GeorgianDivider className="my-6 justify-start" />

            <p className="font-serif text-3xl text-burgundy-900 dark:text-gold-400">
              {formatPrice(wine.price)}
              <span className="ml-2 text-base font-sans font-normal text-stone-500 dark:text-stone-400">
                / {t.product.packBottleShort}
              </span>
            </p>

            <dl className="mt-8 divide-y divide-burgundy-900/10 border-y border-burgundy-900/10 dark:divide-gold-500/10 dark:border-gold-500/10">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-medium tracking-wide text-burgundy-800 dark:text-gold-400">
                    {spec.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="mb-3 text-sm font-medium tracking-wide text-burgundy-800 uppercase dark:text-gold-400">
                {t.product.choosePack}
              </p>
              <AddToCartButton wine={wine} size="lg" showPackOptions />
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
              {related.map((w) => {
                const relatedContent = getWineContent(w.slug, locale);
                return (
                  <Link
                    key={w.id}
                    href={`/wines/${w.slug}`}
                    className="group flex gap-4 rounded-lg border border-burgundy-900/5 bg-white p-4 ring-1 ring-gold-500/10 transition-shadow hover:shadow-md dark:border-stone-700 dark:bg-stone-900"
                  >
                    <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded bg-white">
                      <Image
                        src={w.image}
                        alt={relatedContent.name}
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-burgundy-950 group-hover:text-burgundy-700 dark:text-cream-100 dark:group-hover:text-gold-400">
                        {relatedContent.name}
                      </h3>
                      {w.vintage && (
                        <p className="text-sm text-stone-500 dark:text-stone-400">
                          {w.vintage}
                        </p>
                      )}
                      <p className="mt-1 font-medium text-burgundy-900 dark:text-gold-400">
                        {formatPrice(w.price)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
