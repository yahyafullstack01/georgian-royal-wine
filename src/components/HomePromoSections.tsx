"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

function GrapeBullet() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-500"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="2.2" fill="currentColor" />
      <circle cx="14" cy="8" r="2.2" fill="currentColor" />
      <circle cx="11.5" cy="12" r="2.2" fill="currentColor" />
      <circle cx="7.5" cy="12.5" r="2" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="2" fill="currentColor" />
    </svg>
  );
}

export default function HomePromoSections() {
  const { t } = useLocale();

  return (
    <>
      {/* 1 — GRW Club */}
      <section className="relative overflow-hidden bg-burgundy-950">
        <div className="absolute inset-0">
          <Image
            src="/about/harvest-table.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950 via-burgundy-950/85 to-burgundy-950/35" />
        </div>

        <div className="relative mx-auto flex min-h-[28rem] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.4em] text-gold-400 uppercase">
              GRW
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-wide text-cream-100 sm:text-5xl">
              {t.home.partnerTitle}
            </h2>
            <p className="mt-4 text-lg font-medium text-gold-400">
              {t.home.partnerPrice}
            </p>
            <div className="mt-5 h-px w-20 bg-gradient-to-r from-gold-500 to-transparent" />

            <ul className="mt-8 space-y-3 border-l border-gold-500/40 pl-5">
              {t.home.partnerBenefits.map((item) => (
                <li
                  key={item}
                  className="text-base leading-relaxed text-cream-100/85"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-gold-500 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-950 uppercase transition-colors hover:bg-gold-400"
            >
              {t.home.partnerCta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Delivery: split with accent rail + benefit grid */}
      <section className="bg-cream-50 py-16 sm:py-20 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-0 overflow-hidden lg:grid-cols-12">
            <div className="relative min-h-[18rem] lg:col-span-5 lg:min-h-[26rem]">
              <Image
                src="/about/winery-aerial.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-y-0 right-0 hidden w-1 bg-gold-500 lg:block" />
            </div>

            <div className="flex flex-col justify-center bg-white px-6 py-10 sm:px-10 lg:col-span-7 dark:bg-stone-900">
              <div className="flex items-end gap-4">
                <span className="font-serif text-6xl leading-none text-gold-500/35 sm:text-7xl">
                  48
                </span>
                <div>
                  <p className="text-xs tracking-[0.3em] text-burgundy-700 uppercase dark:text-gold-400">
                    hrs
                  </p>
                  <h2 className="font-serif text-2xl tracking-wide text-burgundy-950 uppercase sm:text-3xl dark:text-cream-100">
                    {t.home.deliveryTitle}
                  </h2>
                </div>
              </div>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.home.deliveryBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <GrapeBullet />
                    <span className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 border border-burgundy-900 px-7 py-3 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
                >
                  {t.home.deliveryCta}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/delivery"
                  className="inline-flex items-center gap-3 bg-burgundy-900 px-7 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
                >
                  {t.home.deliveryConditionsCta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Sommelier: image mosaic + numbered list */}
      <section className="overflow-hidden bg-cream-100 py-16 sm:py-20 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden">
                <Image
                  src="/about/chokha-bottles.jpg"
                  alt=""
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/about/barrels.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/about/shop-shelves.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            <div>
              <GeorgianMark />
              <h2 className="mt-4 font-serif text-3xl tracking-wide text-burgundy-950 sm:text-4xl dark:text-cream-100">
                {t.home.servicesTitle}
              </h2>

              <ol className="mt-8 space-y-0 divide-y divide-burgundy-900/10 dark:divide-gold-500/15">
                {t.home.servicesBenefits.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-5 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="w-8 shrink-0 font-serif text-xl text-gold-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 bg-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
              >
                {t.home.servicesCta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GeorgianMark() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px w-8 bg-gold-500" />
      <span className="text-xs text-gold-500">◆</span>
      <span className="h-px w-8 bg-gold-500" />
    </div>
  );
}
