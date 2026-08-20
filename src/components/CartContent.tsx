"use client";

import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { getWineContent } from "@/data/wineContent";
import {
  bottlesFree,
  bottlesPaid,
  bottlesShipped,
  boxUnitPrice,
  lineTotal,
} from "@/lib/packing";

function QtyControl({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="flex flex-1 flex-col rounded-lg border border-stone-200 bg-stone-50/80 p-3 dark:border-stone-700 dark:bg-stone-800/50">
      <span className="text-sm font-medium text-burgundy-950 dark:text-cream-100">
        {label}
      </span>
      <span className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
        {hint}
      </span>
      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          disabled={value <= 0}
          className="flex h-8 w-8 items-center justify-center rounded border border-stone-300 text-stone-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-stone-600 dark:text-stone-300"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-medium tabular-nums">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-8 w-8 items-center justify-center rounded border border-stone-300 text-stone-600 dark:border-stone-600 dark:text-stone-300"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CartContent() {
  const { items, setBottles, setBoxes, removeFromCart, totalPrice } = useCart();
  const { t, locale } = useLocale();

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
          {items.map((item) => {
            const content = getWineContent(item.wine.slug, locale);
            const shipped = bottlesShipped(item.bottles, item.boxes);
            const free = bottlesFree(item.boxes);
            const paid = bottlesPaid(item.bottles, item.boxes);

            return (
              <div key={item.wine.id} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
                <Link
                  href={`/wines/${item.wine.slug}`}
                  className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded bg-white sm:h-32 sm:w-24"
                >
                  <Image
                    src={item.wine.image}
                    alt={content.name}
                    fill
                    className="object-contain p-1"
                    sizes="96px"
                  />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div className="min-w-0">
                      <Link
                        href={`/wines/${item.wine.slug}`}
                        className="font-serif text-lg text-burgundy-950 hover:text-burgundy-700 dark:text-cream-100 dark:hover:text-gold-400"
                      >
                        {content.name}
                      </Link>
                      <p className="text-sm text-stone-500 dark:text-stone-400">
                        {item.wine.vintage
                          ? `${item.wine.vintage} · ${content.region}`
                          : content.region}
                      </p>
                    </div>
                    <p className="shrink-0 font-serif text-lg text-burgundy-900 dark:text-gold-400">
                      {formatPrice(
                        lineTotal(item.wine, item.bottles, item.boxes)
                      )}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <QtyControl
                      label={t.cart.qtyBottles}
                      hint={formatPrice(item.wine.price)}
                      value={item.bottles}
                      onChange={(n) => setBottles(item.wine.id, n)}
                    />
                    <QtyControl
                      label={t.cart.qtyBoxes}
                      hint={`${t.product.packBoxDesc} · ${formatPrice(boxUnitPrice(item.wine))}`}
                      value={item.boxes}
                      onChange={(n) => setBoxes(item.wine.id, n)}
                    />
                  </div>

                  <p className="mt-2 text-xs text-stone-600 dark:text-stone-300">
                    {t.cart.comboLineSummary
                      .replace("{bottles}", String(item.bottles))
                      .replace("{boxes}", String(item.boxes))
                      .replace("{paid}", String(paid))
                      .replace("{free}", String(free))
                      .replace("{total}", String(shipped))}
                  </p>

                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => removeFromCart(item.wine.id)}
                      className="rounded p-1.5 text-stone-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400"
                      aria-label={t.cart.remove}
                      title={t.cart.remove}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
