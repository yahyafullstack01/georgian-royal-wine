"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";

export default function DeliveryPageContent() {
  const { t } = useLocale();
  const page = t.deliveryPage;

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />

      <div className="bg-cream-50 py-16 dark:bg-stone-950 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100 sm:text-3xl">
              {page.shippingTitle}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />
            <ul className="space-y-4">
              {page.shippingItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-l-2 border-gold-500/50 pl-5 text-base leading-relaxed text-stone-700 dark:text-stone-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100 sm:text-3xl">
              {page.sommelierTitle}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />
            <ul className="space-y-4">
              {page.sommelierItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-l-2 border-gold-500/50 pl-5 text-base leading-relaxed text-stone-700 dark:text-stone-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100 sm:text-3xl">
              {page.returnsTitle}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />
            <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
              {page.returnsText}
            </p>
          </section>

          <section className="mt-14 border border-gold-500/30 bg-white px-6 py-8 dark:border-gold-500/20 dark:bg-stone-900 sm:px-8">
            <p className="font-serif text-4xl text-gold-500 sm:text-5xl">
              15 000+
            </p>
            <h2 className="mt-2 font-serif text-xl text-burgundy-950 dark:text-cream-100 sm:text-2xl">
              {page.stockTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-stone-300">
              {page.stockText}
            </p>
          </section>

          <section className="mt-16 border border-burgundy-900/10 bg-white px-6 py-10 text-center dark:border-gold-500/15 dark:bg-stone-900 sm:px-10">
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
              {page.contactTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-600 dark:text-stone-400">
              {page.contactText}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
              >
                {page.contactCta}
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border border-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
              >
                {page.shopCta}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
