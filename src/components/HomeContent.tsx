"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { getFeaturedWines } from "@/data/wines";
import { useLocale } from "@/context/LocaleContext";
import GeorgianDivider from "@/components/GeorgianDivider";
import HomeHeroMedia from "@/components/HomeHeroMedia";
import HomePromoSections from "@/components/HomePromoSections";
import HomeKakhetiSection from "@/components/HomeKakhetiSection";
import HomeTestimonials from "@/components/HomeTestimonials";

const QUALITY_IMAGES = [
  {
    src: "/certificates/iso-22000-russian-register.jpg",
    alt: "ISO 22000:2018 / HACCP — Russian Register Certificate",
    label: "ISO 22000:2018",
    caption: "Russian Register · HACCP",
    aspect: "portrait",
  },
  {
    src: "/certificates/iso-iqnet.jpg",
    alt: "ISO 22000:2018 / HACCP — IQNet Certificate",
    label: "IQNet Certificate",
    caption: "ISO 22000:2018 · HACCP",
    aspect: "portrait",
  },
  {
    src: "/news/grw-rkatsiteli-2019.jpg",
    alt: "GRW Rkatsiteli 2019 — Qvevri WineHunter Award Georgia 2022",
    label: "GRW Rkatsiteli 2019",
    caption: "Qvevri WineHunter · Georgia 2022",
    aspect: "landscape",
  },
  {
    src: "/news/grw-kisi-2019.jpg",
    alt: "GRW Kisi 2019 — Qvevri WineHunter Award Georgia 2022",
    label: "GRW Kisi 2019",
    caption: "Qvevri WineHunter · Georgia 2022",
    aspect: "landscape",
  },
] as const;

export default function HomeContent() {
  const { t } = useLocale();
  const featured = getFeaturedWines();

  const features = [
    { title: t.home.curatedTitle, desc: t.home.curatedDesc },
    { title: t.home.shippingTitle, desc: t.home.shippingDesc },
    { title: t.home.satisfactionTitle, desc: t.home.satisfactionDesc },
  ];

  const categories = [
    {
      name: t.shop.red,
      category: "red",
      image: "/wines/grw-kindzmarauli.png",
    },
    {
      name: t.shop.white,
      category: "white",
      image: "/wines/grw-alazani-valley.png",
    },
    {
      name: t.shop.rezos,
      category: "rezos",
      image: "/wines/rezos-wine-saperavi.png",
    },
    {
      name: t.shop.qvevri,
      category: "qvevri",
      image: "/wines/grw-kisi-qvevri.png",
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <HomeHeroMedia />
        <div className="absolute inset-0 bg-burgundy-950/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm tracking-[0.4em] text-gold-400 uppercase">
            {t.home.est}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-cream-100 sm:text-6xl lg:text-7xl">
            {t.home.heroTitle1}
            <br />
            <span className="text-gold-400">{t.home.heroTitle2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-200/90">
            {t.home.heroDesc}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="rounded bg-gold-500 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-950 uppercase transition-colors hover:bg-gold-400"
            >
              {t.home.shopCollection}
            </Link>
            <Link
              href="/about"
              className="rounded border border-cream-200/40 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-cream-100/10"
            >
              {t.home.ourStory}
            </Link>
          </div>
        </div>
      </section>

      <HomeKakhetiSection />

      <section className="border-b border-stone-200 bg-cream-100 py-12 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GeorgianDivider className="mb-10" />
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-burgundy-900/5 bg-white p-6 text-center shadow-sm dark:border-gold-500/10 dark:bg-stone-900"
              >
                <h3 className="font-serif text-lg text-burgundy-900 dark:text-cream-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-16 sm:py-24 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-burgundy-600 uppercase dark:text-gold-400">
              {t.home.featured}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-burgundy-950 sm:text-4xl dark:text-cream-100">
              {t.home.finestSelections}
            </h2>
            <GeorgianDivider className="my-6" />
            <p className="mx-auto mt-4 max-w-2xl text-stone-500 dark:text-stone-400">
              {t.home.featuredDesc}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {featured.slice(0, 4).map((wine) => (
              <ProductCard key={wine.id} wine={wine} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-block rounded border border-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-cream-100 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
            >
              {t.home.viewAllWines}
            </Link>
          </div>
        </div>
      </section>

      <HomePromoSections />

      <HomeTestimonials />

      <section className="relative overflow-hidden bg-burgundy-950 py-20 dark:bg-stone-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&h=600&fit=crop"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <GeorgianDivider className="mb-6" />
          <h2 className="font-serif text-3xl text-cream-100 sm:text-4xl">
            {t.home.legacyTitle}
          </h2>
          <p className="mt-6 leading-relaxed text-cream-200/80">
            {t.home.legacyDesc}
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm tracking-wide text-gold-400 uppercase hover:text-gold-300"
          >
            {t.home.learnStory}
          </Link>
        </div>
      </section>

      <section className="bg-cream-50 py-16 sm:py-24 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-burgundy-950 dark:text-cream-100">
              {t.home.shopByCategory}
            </h2>
            <GeorgianDivider className="my-6" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.category}
                href={`/shop?category=${cat.category}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white ring-1 ring-burgundy-900/10 dark:bg-stone-900 dark:ring-gold-500/15"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-burgundy-950/35 transition-colors group-hover:bg-burgundy-950/45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl text-cream-100">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-gold-500/15 bg-burgundy-950 py-20 dark:border-stone-800 dark:bg-stone-950 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-burgundy-700/40 blur-3xl" />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.35em] text-gold-400 uppercase">
              {t.home.qualitySubtitle}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-cream-100 sm:text-4xl lg:text-5xl">
              {t.home.qualityTitle}
            </h2>
            <GeorgianDivider className="my-7" />
            <p className="text-base leading-relaxed text-cream-200/75 sm:text-lg">
              {t.home.qualityDesc}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 sm:gap-10">
            {QUALITY_IMAGES.map((item, index) => (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="quality-cert-rise group block"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative overflow-hidden border border-gold-500/25 bg-cream-50/95 p-3 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-gold-400/60 group-hover:shadow-[0_32px_70px_-24px_rgba(201,168,76,0.35)] dark:bg-cream-100">
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div
                    className={`relative overflow-hidden bg-white ${
                      item.aspect === "landscape"
                        ? "aspect-[4/3]"
                        : "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-5"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="font-serif text-lg text-cream-100 transition-colors group-hover:text-gold-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.2em] text-cream-300/60 uppercase">
                    {item.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
