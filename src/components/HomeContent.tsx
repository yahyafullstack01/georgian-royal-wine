"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { getFeaturedWines } from "@/data/wines";
import { useLocale } from "@/context/LocaleContext";

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
      name: t.home.redWines,
      category: "red",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop",
    },
    {
      name: t.home.whiteWines,
      category: "white",
      image:
        "https://images.unsplash.com/photo-1474722883778-792e799d2d1d?w=600&h=400&fit=crop",
    },
    {
      name: t.home.rose,
      category: "rosé",
      image:
        "https://images.unsplash.com/photo-1567696153798-9c2a3a0b2c1e?w=600&h=400&fit=crop",
    },
    {
      name: t.home.sparkling,
      category: "sparkling",
      image:
        "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506377247727-2f5e3b773a8c?w=1920&h=1080&fit=crop"
          alt="Vineyard at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
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

      <section className="border-b border-stone-200 bg-white py-12 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="font-serif text-lg text-burgundy-900 dark:text-cream-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-burgundy-600 uppercase dark:text-gold-400">
              {t.home.featured}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-burgundy-950 sm:text-4xl dark:text-cream-100">
              {t.home.finestSelections}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-500 dark:text-stone-400">
              {t.home.featuredDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl text-burgundy-950 dark:text-cream-100">
            {t.home.shopByCategory}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.category}
                href={`/shop?category=${cat.category}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-burgundy-950/40 transition-colors group-hover:bg-burgundy-950/50" />
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
    </>
  );
}
