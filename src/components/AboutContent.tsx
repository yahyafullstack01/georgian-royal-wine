"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export default function AboutContent() {
  const { t } = useLocale();

  const stats = [
    { number: "35+", label: t.about.years },
    { number: "200+", label: t.about.wines },
    { number: "15", label: t.about.countries },
  ];

  return (
    <div>
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop"
          alt="Vineyard landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-burgundy-950/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl text-cream-100">{t.about.title}</h1>
          <p className="mt-4 text-cream-200/80">{t.about.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-stone max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            {t.about.p1}
          </p>
          <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-300">
            {t.about.p2}
          </p>
          <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-300">
            {t.about.p3}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl text-burgundy-900 dark:text-gold-400">
                {stat.number}
              </p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-block rounded bg-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
          >
            {t.about.explore}
          </Link>
        </div>
      </section>
    </div>
  );
}
