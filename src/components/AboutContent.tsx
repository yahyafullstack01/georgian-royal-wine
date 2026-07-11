"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

function GeorgianDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/70 sm:w-24" />
      <span className="text-xs text-gold-500">◆</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/70 sm:w-24" />
    </div>
  );
}

function FactCard({
  icon,
  title,
  text,
  index,
}: {
  icon: string;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-burgundy-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gold-500/15 dark:bg-stone-900">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-burgundy-900/5 dark:bg-gold-500/5"
        aria-hidden="true"
      />
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream-100 ring-2 ring-gold-500/50 dark:bg-burgundy-950 dark:ring-gold-500/30">
          <Image
            src={icon}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain dark:[filter:brightness(0)_invert(0.88)_sepia(1)_saturate(8)_hue-rotate(358deg)_brightness(1.05)]"
          />
        </div>
        <span className="font-serif text-3xl leading-none text-gold-500/60">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mb-3 font-serif text-lg text-burgundy-900 dark:text-cream-100">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        {text}
      </p>
    </article>
  );
}

export default function AboutContent() {
  const { t } = useLocale();

  const facts = [
    {
      icon: "/about/icon-quality.png",
      title: t.about.fact1Title,
      text: t.about.fact1,
    },
    {
      icon: "/about/icon-heritage.png",
      title: t.about.fact2Title,
      text: t.about.fact2,
    },
    {
      icon: "/about/icon-grapes.png",
      title: t.about.fact3Title,
      text: t.about.fact3,
    },
    {
      icon: "/about/icon-wine.png",
      title: t.about.fact4Title,
      text: t.about.fact4,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-burgundy-950 py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M30 0l5 10 10 5-10 5-5 10-5-10-10-5 10-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Image
            src="/grw-logo.png"
            alt="Georgian Royal Wine"
            width={240}
            height={82}
            className="mx-auto h-16 w-auto object-contain sm:h-20"
            priority
          />
          <GeorgianDivider className="my-8" />
          <h1 className="font-serif text-4xl tracking-wide text-cream-100 sm:text-5xl lg:text-6xl">
            {t.about.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream-200/75 sm:text-lg">
            {t.about.subtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </section>

      {/* About intro */}
      <section className="relative bg-cream-50 py-20 dark:bg-stone-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative border border-burgundy-900/15 bg-white px-8 py-12 shadow-sm dark:border-gold-500/20 dark:bg-stone-900 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-3 border border-gold-500/20" aria-hidden="true" />
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-4 dark:bg-stone-900">
              <span className="text-gold-500">◆</span>
            </div>

            <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-200">
              {t.about.p1}
            </p>
            <GeorgianDivider className="my-8" />
            <p className="leading-relaxed text-stone-600 dark:text-stone-300">
              {t.about.p2}
            </p>
            <GeorgianDivider className="my-8" />
            <p className="leading-relaxed text-stone-600 dark:text-stone-300">
              {t.about.p3}
            </p>
          </div>
        </div>
      </section>

      {/* Vineyard */}
      <section className="relative overflow-hidden bg-burgundy-950 py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-burgundy-900/50 via-transparent to-burgundy-950"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-serif text-7xl leading-none text-gold-500 sm:text-8xl">
                220
              </p>
              <p className="mt-2 text-sm tracking-[0.25em] text-gold-400/80 uppercase">
                Hectares
              </p>
              <h2 className="mt-6 font-serif text-2xl leading-snug text-cream-100 sm:text-3xl">
                {t.about.vineyardTitle}
              </h2>
              <GeorgianDivider className="my-6 justify-start" />
              <p className="leading-relaxed text-cream-200/80">
                {t.about.vineyardDesc}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Saperavi", "Rkatsiteli", "Mtsvane", "Kisi"].map((grape) => (
                  <span
                    key={grape}
                    className="rounded-full border border-gold-500/30 px-4 py-1.5 text-xs tracking-wide text-gold-400 uppercase"
                  >
                    {grape}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-lg border border-gold-500/20" aria-hidden="true" />
              <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-gold-500/10">
                <Image
                  src="/about/wine-map.png"
                  alt="Kakheti and Racha wine regions map"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interesting Facts */}
      <section className="bg-cream-100 py-20 sm:py-28 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm tracking-[0.35em] text-burgundy-700 uppercase dark:text-gold-400">
              GRW
            </p>
            <h2 className="mt-3 font-serif text-3xl text-burgundy-950 sm:text-4xl dark:text-cream-100">
              {t.about.factsTitle}
            </h2>
            <GeorgianDivider className="mt-6" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {facts.map((fact, i) => (
              <FactCard
                key={i}
                icon={fact.icon}
                title={fact.title}
                text={fact.text}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-burgundy-900/10 bg-white py-16 dark:border-gold-500/10 dark:bg-stone-950">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <GeorgianDivider className="mb-8" />
          <Link
            href="/shop"
            className="inline-block rounded border-2 border-burgundy-900 px-10 py-3.5 text-sm font-medium tracking-[0.2em] text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
          >
            {t.about.explore}
          </Link>
        </div>
      </section>
    </div>
  );
}
