"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutSuccessContent />
    </Suspense>
  );
}

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();
  const { t } = useLocale();
  const [state, setState] = useState<
    | { status: "loading" }
    | { status: "error" }
    | { status: "confirmed"; email: string; subtotal: number }
  >({ status: "loading" });
  const hasCleared = useRef(false);

  useEffect(() => {
    if (!sessionId) {
      setState({ status: "error" });
      return;
    }

    fetch(`/api/checkout-session/confirm?session_id=${sessionId}`)
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error ?? "error");
        setState({ status: "confirmed", email: data.email, subtotal: data.subtotal });
        if (!hasCleared.current) {
          hasCleared.current = true;
          clearCart();
        }
      })
      .catch(() => setState({ status: "error" }));
  }, [sessionId, clearCart]);

  return (
    <>
      <PageHero title={t.checkout.title} compact />
      <div className="bg-cream-50 py-16 dark:bg-stone-950">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          {state.status === "loading" && (
            <p className="text-stone-500 dark:text-stone-400">
              {t.checkout.processing}
            </p>
          )}

          {state.status === "error" && (
            <>
              <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
                {t.checkout.error}
              </h2>
              <Link
                href="/checkout"
                className="mt-6 inline-block text-burgundy-700 hover:underline dark:text-gold-400"
              >
                {t.checkout.editOrder}
              </Link>
            </>
          )}

          {state.status === "confirmed" && (
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8 text-green-700 dark:text-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-burgundy-950 dark:text-cream-100">
                {t.checkout.confirmed}
              </h2>
              <p className="mt-3 text-stone-600 dark:text-stone-300">
                {t.checkout.confirmedDesc} <strong>{state.email}</strong>.
              </p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                {t.checkout.orderTotal}: {formatPrice(state.subtotal)}
              </p>
              <Link
                href="/shop"
                className="mt-8 inline-block rounded bg-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
              >
                {t.checkout.continue}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
