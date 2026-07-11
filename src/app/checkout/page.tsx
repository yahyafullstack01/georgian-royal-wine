"use client";

import CheckoutForm from "@/components/CheckoutForm";
import PageHero from "@/components/PageHero";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();
  const { t } = useLocale();

  if (items.length === 0) {
    return (
      <>
        <PageHero title={t.checkout.title} compact />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-stone-500 dark:text-stone-400">{t.checkout.empty}</p>
          <Link
            href="/shop"
            className="mt-6 inline-block text-burgundy-700 hover:underline dark:text-gold-400"
          >
            {t.checkout.continue}
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero title={t.checkout.title} compact />
      <div className="bg-cream-50 py-12 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CheckoutForm />
        </div>
      </div>
    </>
  );
}
