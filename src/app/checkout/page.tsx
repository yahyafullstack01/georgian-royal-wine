"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();
  const { t } = useLocale();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-burgundy-950 dark:text-cream-100">
          {t.checkout.title}
        </h1>
        <p className="mt-4 text-stone-500 dark:text-stone-400">
          {t.checkout.empty}
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block text-burgundy-700 hover:underline dark:text-gold-400"
        >
          {t.checkout.continue}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-serif text-4xl text-burgundy-950 dark:text-cream-100">
        {t.checkout.title}
      </h1>
      <CheckoutForm />
    </div>
  );
}
