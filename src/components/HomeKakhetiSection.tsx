"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import GeorgianDivider from "@/components/GeorgianDivider";

export default function HomeKakhetiSection() {
  const { t } = useLocale();
  const k = t.home.kakheti;

  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 dark:bg-stone-900 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <GeorgianDivider className="mb-8" />
          <h2 className="font-serif text-3xl leading-snug text-burgundy-950 dark:text-cream-100 sm:text-4xl lg:text-[2.35rem]">
            {k.title}
          </h2>
          <p className="mt-8 text-base leading-[1.85] text-stone-700 dark:text-stone-300 sm:text-lg">
            {k.introBefore}
            <span className="font-semibold text-burgundy-900 dark:text-gold-400">
              {k.introHighlight}
            </span>
            {k.introAfter}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <blockquote className="relative border-l-4 border-orange-700/80 py-1 pl-6 dark:border-orange-600/70 sm:pl-8">
            <p className="text-base leading-[1.85] text-stone-700 dark:text-stone-300 sm:text-lg">
              <span className="font-semibold text-burgundy-950 dark:text-cream-100">
                {k.kindzmarauliName}
              </span>
              {k.kindzmarauliText}
            </p>
          </blockquote>

          <div className="relative mx-auto h-72 w-44 shrink-0 sm:h-80 sm:w-48">
            <Image
              src="/wines/grw-kindzmarauli.png"
              alt="GRW Kindzmarauli"
              fill
              className="object-contain drop-shadow-xl"
              sizes="192px"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <Link
            href="/shop?category=red"
            className="inline-flex items-center gap-2 border border-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
          >
            {k.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
