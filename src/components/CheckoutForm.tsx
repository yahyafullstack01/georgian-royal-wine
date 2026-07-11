"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { CheckoutFormData } from "@/types/wine";
import { formatPrice } from "@/lib/format";
import Image from "next/image";

export default function CheckoutForm() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle"
  );
  const [form, setForm] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const shipping = totalPrice >= 150 ? 0 : 12.99;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  const inputClass =
    "w-full rounded border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700 dark:border-stone-600 dark:bg-stone-800 dark:text-cream-100 dark:placeholder:text-stone-500 dark:focus:border-gold-500 dark:focus:ring-gold-500";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
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
          {t.checkout.confirmedDesc}{" "}
          <strong>{form.email}</strong>.
        </p>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
          {t.checkout.orderTotal}: {formatPrice(grandTotal)}
        </p>
        <button
          onClick={() => {
            clearCart();
            router.push("/shop");
          }}
          className="mt-8 rounded bg-burgundy-900 px-8 py-3 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
        >
          {t.checkout.continue}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-8 lg:col-span-3">
        <section className="rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
            {t.checkout.contactInfo}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.firstName}
              </label>
              <input
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.lastName}
              </label>
              <input
                id="lastName"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="checkout-email"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.email}
              </label>
              <input
                id="checkout-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="checkout-phone"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.phone}
              </label>
              <input
                id="checkout-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
            {t.checkout.shippingAddress}
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="address"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.street}
              </label>
              <input
                id="address"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="city"
                  className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  {t.checkout.city}
                </label>
                <input
                  id="city"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  {t.checkout.state}
                </label>
                <input
                  id="state"
                  required
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  {t.checkout.zip}
                </label>
                <input
                  id="zip"
                  required
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.country}
              </label>
              <select
                id="country"
                required
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className={inputClass}
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>France</option>
                <option>Italy</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
            {t.checkout.payment}
          </h2>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            {t.checkout.paymentDemo}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="card"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.cardNumber}
              </label>
              <input
                id="card"
                required
                placeholder="4242 4242 4242 4242"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="expiry"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.expiry}
              </label>
              <input
                id="expiry"
                required
                placeholder="MM/YY"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                {t.checkout.cvc}
              </label>
              <input
                id="cvc"
                required
                placeholder="123"
                className={inputClass}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="h-fit rounded-lg border border-stone-200 bg-white p-6 lg:col-span-2 dark:border-stone-700 dark:bg-stone-900">
        <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
          {t.checkout.yourOrder}
        </h2>
        <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
          {items.map((item) => (
            <div key={item.wine.id} className="flex gap-3">
              <div className="relative h-14 w-10 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={item.wine.image}
                  alt={item.wine.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="flex-1 text-sm">
                <p className="font-medium text-burgundy-950 dark:text-cream-100">
                  {item.wine.name}
                </p>
                <p className="text-stone-500 dark:text-stone-400">
                  {t.checkout.qty}: {item.quantity}
                </p>
              </div>
              <p className="text-sm font-medium">
                {formatPrice(item.wine.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-sm dark:border-stone-700">
          <div className="flex justify-between">
            <span className="text-stone-500 dark:text-stone-400">
              {t.cart.subtotal}
            </span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500 dark:text-stone-400">
              {t.cart.shipping}
            </span>
            <span>
              {shipping === 0 ? t.cart.free : formatPrice(shipping)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500 dark:text-stone-400">
              {t.checkout.tax}
            </span>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="flex justify-between border-t border-stone-200 pt-2 font-medium dark:border-stone-700">
            <span>{t.cart.total}</span>
            <span className="font-serif text-lg text-burgundy-900 dark:text-gold-400">
              {formatPrice(grandTotal)}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "processing"}
          className="mt-6 w-full rounded bg-burgundy-900 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 disabled:opacity-60 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
        >
          {status === "processing"
            ? t.checkout.processing
            : t.checkout.pay.replace("{amount}", formatPrice(grandTotal))}
        </button>

        <p className="mt-3 text-center text-xs text-stone-400">
          {t.checkout.ageNotice}
        </p>
      </div>
    </form>
  );
}
