"use client";

import Image from "next/image";
import Link from "next/link";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";
import { testimonialStories } from "@/data/testimonials";

export default function HomeTestimonials() {
  const { t } = useLocale();
  const preview = t.testimonialsPage.reviews.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-cream-100 py-16 dark:bg-stone-900 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.3em] text-burgundy-700 uppercase dark:text-gold-400">
            {t.home.testimonialsEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-burgundy-950 sm:text-4xl dark:text-cream-100">
            {t.home.testimonialsTitle}
          </h2>
          <GeorgianDivider className="my-6" />
          <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400">
            {t.home.testimonialsSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {preview.map((quote, index) => (
            <blockquote
              key={quote}
              className="testimonial-rise border-t border-gold-500/40 pt-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span
                aria-hidden
                className="font-serif text-4xl leading-none text-gold-500"
              >
                “
              </span>
              <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                {quote}
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {testimonialStories.map((story, index) => (
            <div
              key={story.id}
              className="testimonial-rise relative aspect-[3/4] overflow-hidden"
              style={{ animationDelay: `${360 + index * 100}ms` }}
            >
              <Image
                src={story.image}
                alt={story.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-3 border border-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
          >
            {t.home.testimonialsCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
