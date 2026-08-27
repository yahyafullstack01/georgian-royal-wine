"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import GeorgianDivider from "@/components/GeorgianDivider";
import AboutHero from "@/components/AboutHero";

const GALLERY = [
  { src: "/about/harvest-table.jpg", alt: "Rezo’s Wine harvest display" },
  { src: "/about/shop-shelves.jpg", alt: "GRW wine shelves" },
  { src: "/about/team-vineyard.jpg", alt: "Team in the vineyard" },
  { src: "/about/vineyard-red.jpg", alt: "Red grapes in the vineyard" },
  { src: "/about/grapes-close.jpg", alt: "Ripe grape clusters" },
  { src: "/about/crush.jpg", alt: "Freshly harvested grapes" },
  { src: "/about/winery-aerial.jpg", alt: "Winery and vineyards from above" },
  { src: "/about/tanks-overhead.jpg", alt: "Stainless steel tanks" },
  { src: "/about/harvest-aerial.jpg", alt: "Harvest among the vines" },
  { src: "/about/chokha-bottles.jpg", alt: "GRW bottles in the cellar" },
];

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
      <AboutHero title={t.about.title} subtitle={t.about.subtitle} />

      {/* About intro */}
      <section className="relative bg-cream-50 py-20 dark:bg-stone-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative border border-burgundy-900/15 bg-white px-8 py-12 shadow-sm dark:border-gold-500/20 dark:bg-stone-900 sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-3 border border-gold-500/20"
              aria-hidden="true"
            />
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

      {/* Story strip — vine → cellar → shelf */}
      <section className="bg-burgundy-950">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {[
            { src: "/about/vineyard-path.jpg", label: t.about.stripVineyard },
            { src: "/about/barrels.jpg", label: t.about.stripCellar },
            { src: "/about/shop-shelves.jpg", label: t.about.stripCollection },
          ].map((item) => (
            <div key={item.src} className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-xs tracking-[0.3em] text-gold-400 uppercase">
                {item.label}
              </p>
            </div>
          ))}
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

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden sm:row-span-2 sm:aspect-auto sm:min-h-full">
                <Image
                  src="/about/vineyard-red.jpg"
                  alt="Vineyard grapes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/about/grapes-close.jpg"
                  alt="Grape clusters"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/about/wine-map.png"
                  alt="Kakheti and Racha wine regions map"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover bg-cream-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream-50 py-20 sm:py-28 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm tracking-[0.35em] text-burgundy-700 uppercase dark:text-gold-400">
              GRW
            </p>
            <h2 className="mt-3 font-serif text-3xl text-burgundy-950 sm:text-4xl dark:text-cream-100">
              {t.about.galleryTitle}
            </h2>
            <GeorgianDivider className="mt-6" />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {GALLERY.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            ))}
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

      {/* CTA with office */}
      <section className="relative isolate overflow-hidden py-24">
        <Image
          src="/about/office.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-burgundy-950/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <GeorgianDivider className="mb-8" />
          <Link
            href="/shop"
            className="inline-block rounded border-2 border-cream-100/80 px-10 py-3.5 text-sm font-medium tracking-[0.2em] text-cream-100 uppercase transition-colors hover:bg-cream-100 hover:text-burgundy-950"
          >
            {t.about.explore}
          </Link>
        </div>
      </section>
    </div>
  );
}
