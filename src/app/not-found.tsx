"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-cream-50 px-4 py-24 text-center dark:bg-stone-950">
      <p className="text-xs tracking-[0.35em] text-gold-500 uppercase">404</p>
      <h1 className="mt-4 font-serif text-3xl text-burgundy-950 sm:text-4xl dark:text-cream-100">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-stone-600 dark:text-stone-400">
        {t.notFound.desc}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded bg-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
        >
          {t.nav.home}
        </Link>
        <Link
          href="/shop"
          className="rounded border border-burgundy-900 px-8 py-3.5 text-sm font-medium tracking-wide text-burgundy-900 uppercase transition-colors hover:bg-burgundy-900 hover:text-cream-100 dark:border-gold-500 dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-burgundy-950"
        >
          {t.nav.shop}
        </Link>
      </div>
    </div>
  );
}
