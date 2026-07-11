"use client";

import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";

export default function CartContent() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { t } = useLocale();

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-burgundy-900/5 dark:bg-cream-100/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-10 w-10 text-burgundy-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
          {t.cart.empty}
        </h2>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          {t.cart.emptyDesc}
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded bg-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
        >
          {t.cart.browse}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white dark:divide-stone-700 dark:border-stone-700 dark:bg-stone-900">
          {items.map((item) => (
            <div key={item.wine.id} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
              <Link
                href={`/wines/${item.wine.slug}`}
                className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded sm:h-32 sm:w-24"
              >
                <Image
                  src={item.wine.image}
                  alt={item.wine.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/wines/${item.wine.slug}`}
                      className="font-serif text-lg text-burgundy-950 hover:text-burgundy-700 dark:text-cream-100 dark:hover:text-gold-400"
                    >
                      {item.wine.name}
                    </Link>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {item.wine.vintage} · {item.wine.region}
                    </p>
                  </div>
                  <p className="font-serif text-lg text-burgundy-900 dark:text-gold-400">
                    {formatPrice(item.wine.price * item.quantity)}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.wine.id, item.quantity - 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded border border-stone-300 text-stone-600 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                      aria-label={t.cart.decreaseQty}
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.wine.id, item.quantity + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded border border-stone-300 text-stone-600 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
                      aria-label={t.cart.increaseQty}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.wine.id)}
                    className="text-sm text-stone-400 transition-colors hover:text-red-600 dark:hover:text-red-400"
                  >
                    {t.cart.remove}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-fit rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
          {t.cart.orderSummary}
        </h2>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between font-medium">
            <span>{t.cart.subtotal}</span>
            <span className="font-serif text-xl text-burgundy-900 dark:text-gold-400">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            {t.checkout.pricingNote}
          </p>
        </div>

        <Link
          href="/checkout"
          className="mt-6 block w-full rounded bg-burgundy-900 py-3.5 text-center text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
        >
          {t.cart.checkout}
        </Link>

        <Link
          href="/shop"
          className="mt-3 block text-center text-sm text-burgundy-700 hover:underline dark:text-gold-400"
        >
          {t.cart.continue}
        </Link>
      </div>
    </div>
  );
}
