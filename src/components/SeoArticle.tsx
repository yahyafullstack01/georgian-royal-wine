"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";
import {
  cities,
  guides,
  getCityContent,
  getGuideContent,
  seoUi,
  type LocalizedSeoCopy,
} from "@/data/localSeo";

export default function SeoArticle({
  titleName,
  content,
}: {
  titleName: string;
  content: LocalizedSeoCopy;
}) {
  const { locale } = useLocale();
  const ui = seoUi[locale] ?? seoUi.es;

  return (
    <>
      <PageHero title={titleName} subtitle={content.lead} />
      <article className="bg-cream-50 py-16 dark:bg-stone-950 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.28em] text-gold-500 uppercase">
            {content.eyebrow}
          </p>

          {content.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100 sm:text-3xl">
                {section.heading}
              </h2>
              <GeorgianDivider className="my-6 justify-start" />
              <div className="space-y-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-14">
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
              {ui.faqTitle}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />
            <div className="space-y-3">
              {content.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-burgundy-900/10 bg-white px-5 py-4 dark:border-gold-500/15 dark:bg-stone-900"
                >
                  <summary className="cursor-pointer font-medium text-burgundy-950 dark:text-cream-100">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
            >
              {ui.shopCta}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
            >
              {ui.contactCta}
            </Link>
          </div>

          <nav className="mt-14" aria-label={ui.morePages}>
            <h2 className="text-sm tracking-widest text-gold-500 uppercase">
              {ui.citiesNav}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/vino/${city.slug}`}
                    className="text-burgundy-800 underline-offset-4 hover:underline dark:text-gold-400"
                  >
                    {ui.wineIn.replace("{city}", city.name)}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-sm tracking-widest text-gold-500 uppercase">
              {ui.guidesNav}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {guides.map((guide) => {
                const guideContent =
                  getGuideContent(guide.slug, locale) ?? guide.locales.es;
                return (
                  <li key={guide.slug}>
                    <Link
                      href={`/guias/${guide.slug}`}
                      className="text-burgundy-800 underline-offset-4 hover:underline dark:text-gold-400"
                    >
                      {guideContent.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
}

export function CityArticle({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const city = cities.find((item) => item.slug === slug);
  const content = getCityContent(slug, locale);
  if (!city || !content) return null;
  return <SeoArticle titleName={city.name} content={content} />;
}

export function GuideArticle({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const content = getGuideContent(slug, locale);
  if (!content) return null;
  return <SeoArticle titleName={content.title} content={content} />;
}
