"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";
import { testimonialStories } from "@/data/testimonials";

export default function TestimonialsPageContent() {
  const { t } = useLocale();
  const page = t.testimonialsPage;

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />

      <div className="bg-cream-50 py-16 dark:bg-stone-950 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100 sm:text-3xl">
              {page.reviewsTitle}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />

            <div className="space-y-10">
              {page.reviews.map((quote, index) => (
                <blockquote
                  key={quote}
                  className="testimonial-rise border-l-2 border-gold-500/50 pl-5 sm:pl-6"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span
                    aria-hidden
                    className="font-serif text-3xl leading-none text-gold-500"
                  >
                    “
                  </span>
                  <p className="mt-1 text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
                    {quote}
                  </p>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100 sm:text-3xl">
              {page.storiesTitle}
            </h2>
            <GeorgianDivider className="my-6 justify-start" />
            <p className="mb-8 text-base leading-relaxed text-stone-600 dark:text-stone-400">
              {page.storiesSubtitle}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {testimonialStories.map((story, index) => (
                <div
                  key={story.id}
                  className="testimonial-rise relative aspect-[3/4] overflow-hidden ring-1 ring-burgundy-900/10 dark:ring-gold-500/15"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
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
