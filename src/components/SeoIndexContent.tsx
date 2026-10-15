"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useLocale } from "@/context/LocaleContext";
import {
  cities,
  guides,
  getGuideContent,
  seoIndex,
} from "@/data/localSeo";

export function CityIndexContent() {
  const { locale } = useLocale();
  const copy = seoIndex[locale] ?? seoIndex.es;

  return (
    <>
      <PageHero title={copy.cityTitle} subtitle={copy.citySubtitle} />
      <div className="bg-cream-50 py-16 dark:bg-stone-950">
        <ul className="mx-auto grid max-w-5xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {cities.map((city) => {
            const content = city.locales[locale] ?? city.locales.es;
            return (
              <li key={city.slug}>
                <Link
                  href={`/vino/${city.slug}`}
                  className="block border border-burgundy-900/10 bg-white p-6 transition-colors hover:border-gold-500/50 dark:border-gold-500/15 dark:bg-stone-900"
                >
                  <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
                    {city.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {content.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export function GuideIndexContent() {
  const { locale } = useLocale();
  const copy = seoIndex[locale] ?? seoIndex.es;

  return (
    <>
      <PageHero title={copy.guidesTitle} subtitle={copy.guidesSubtitle} />
      <div className="bg-cream-50 py-16 dark:bg-stone-950">
        <ul className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6">
          {guides.map((guide) => {
            const content =
              getGuideContent(guide.slug, locale) ?? guide.locales.es;
            return (
              <li key={guide.slug}>
                <Link
                  href={`/guias/${guide.slug}`}
                  className="block border border-burgundy-900/10 bg-white p-6 transition-colors hover:border-gold-500/50 dark:border-gold-500/15 dark:bg-stone-900"
                >
                  <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
                    {content.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {content.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
