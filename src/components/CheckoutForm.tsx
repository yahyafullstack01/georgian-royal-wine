"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { CheckoutFormData, CustomerType } from "@/types/wine";
import { formatPrice } from "@/lib/format";
import type { OrderRequestPayload } from "@/lib/order";
import Image from "next/image";

const EUROPEAN_COUNTRIES = [
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Poland",
  "Austria",
  "Czech Republic",
  "Romania",
  "Portugal",
  "Sweden",
  "Denmark",
  "Finland",
  "Ireland",
  "Greece",
  "Hungary",
  "Slovakia",
  "Bulgaria",
  "Croatia",
  "Lithuania",
  "Slovenia",
  "Latvia",
  "Estonia",
  "Luxembourg",
  "Georgia",
  "United Kingdom",
  "Other",
];

export default function CheckoutForm() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLocale();
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<CheckoutFormData>({
    customerType: "individual",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "Germany",
    notes: "",
  });

  const isBusiness = form.customerType === "business";

  const setCustomerType = (customerType: CustomerType) => {
    setForm((prev) => ({
      ...prev,
      customerType,
      company: customerType === "individual" ? "" : prev.company,
      businessType: customerType === "individual" ? "" : prev.businessType,
    }));
  };

  const businessTypeOptions = [
    { value: "restaurant", label: t.checkout.businessRestaurant },
    { value: "retailer", label: t.checkout.businessRetailer },
    { value: "distributor", label: t.checkout.businessDistributor },
    { value: "partner", label: t.checkout.businessPartner },
    { value: "other", label: t.checkout.businessOther },
  ] as const;

  const typeButtonClass = (active: boolean) =>
    `rounded-lg border p-4 text-left transition-colors ${
      active
        ? "border-gold-500 bg-gold-500/10 ring-1 ring-gold-500/40 dark:bg-gold-500/15"
        : "border-stone-200 bg-white hover:border-burgundy-300 dark:border-stone-600 dark:bg-stone-800 dark:hover:border-gold-500/40"
    }`;

  const inputClass =
    "w-full rounded border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700 dark:border-stone-600 dark:bg-stone-800 dark:text-cream-100 dark:placeholder:text-stone-500 dark:focus:border-gold-500 dark:focus:ring-gold-500";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    setErrorMessage("");

    const payload: OrderRequestPayload = {
      customer: form,
      items: items.map((item) => ({
        name: item.wine.name,
        slug: item.wine.slug,
        vintage: item.wine.vintage,
        region: item.wine.region,
        quantity: item.quantity,
        unitPrice: item.wine.price,
        lineTotal: item.wine.price * item.quantity,
      })),
      subtotal: totalPrice,
    };

    try {
      const response = await fetch("/api/order-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? t.checkout.error);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : t.checkout.error
      );
    }
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
          {t.checkout.orderTotal}: {formatPrice(totalPrice)}
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
      <div className="order-2 space-y-8 lg:order-1 lg:col-span-3">
        <p className="rounded-lg border border-gold-500/20 bg-cream-100 px-4 py-3 text-sm text-stone-600 dark:border-gold-500/15 dark:bg-stone-900 dark:text-stone-300">
          {t.checkout.orderRequestInfo}
        </p>

        <section className="rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
            {t.checkout.contactInfo}
          </h2>

          <p className="mt-4 text-sm font-medium text-stone-700 dark:text-stone-300">
            {t.checkout.customerTypeLabel}
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setCustomerType("business")}
              className={typeButtonClass(isBusiness)}
            >
              <span className="block font-medium text-burgundy-950 dark:text-cream-100">
                {t.checkout.customerBusiness}
              </span>
              <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
                {t.checkout.customerBusinessDesc}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCustomerType("individual")}
              className={typeButtonClass(!isBusiness)}
            >
              <span className="block font-medium text-burgundy-950 dark:text-cream-100">
                {t.checkout.customerIndividual}
              </span>
              <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
                {t.checkout.customerIndividualDesc}
              </span>
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
            {isBusiness && (
              <>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    {t.checkout.company}
                  </label>
                  <input
                    id="company"
                    required
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder={t.checkout.companyPlaceholder}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="businessType"
                    className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    {t.checkout.businessType}
                  </label>
                  <select
                    id="businessType"
                    required
                    value={form.businessType}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        businessType: e.target
                          .value as CheckoutFormData["businessType"],
                      })
                    }
                    className={inputClass}
                  >
                    <option value="">{t.checkout.businessTypePlaceholder}</option>
                    {businessTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
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
                {EUROPEAN_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
            {t.checkout.notes}
          </h2>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            {t.checkout.notesHint}
          </p>
          <textarea
            id="notes"
            rows={4}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder={t.checkout.notesPlaceholder}
            className={`${inputClass} mt-4`}
          />
        </section>

        {status === "error" && (
          <p className="rounded bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
            {errorMessage}
          </p>
        )}

        <div className="rounded-lg border border-gold-500/20 bg-cream-100 p-6 dark:border-gold-500/15 dark:bg-stone-900">
          <button
            type="submit"
            disabled={status === "processing"}
            className="w-full rounded bg-burgundy-900 py-4 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 disabled:opacity-60 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
          >
            {status === "processing" ? t.checkout.processing : t.checkout.submit}
          </button>
          <p className="mt-3 text-center text-xs text-stone-500 dark:text-stone-400">
            {t.checkout.ageNotice}
          </p>
        </div>
      </div>

      <div className="order-1 h-fit rounded-lg border border-stone-200 bg-white p-6 lg:sticky lg:top-24 lg:order-2 lg:col-span-2 lg:self-start dark:border-stone-700 dark:bg-stone-900">
        <h2 className="font-serif text-xl text-burgundy-950 dark:text-cream-100">
          {t.checkout.yourOrder}
        </h2>
        <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
          {items.map((item) => (
            <div key={item.wine.id} className="flex gap-3">
              <div className="relative h-14 w-10 shrink-0 overflow-hidden rounded">
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
                  {t.checkout.qty}: {item.quantity} · {formatPrice(item.wine.price)} each
                </p>
              </div>
              <p className="text-sm font-medium">
                {formatPrice(item.wine.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-sm dark:border-stone-700">
          <div className="flex justify-between font-medium">
            <span>{t.cart.subtotal}</span>
            <span className="font-serif text-lg text-burgundy-900 dark:text-gold-400">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            {t.checkout.pricingNote}
          </p>
        </div>
      </div>
    </form>
  );
}
