"use client";

import { useState, FormEvent } from "react";
import { ContactFormData } from "@/types/wine";
import { useLocale } from "@/context/LocaleContext";

export default function ContactForm() {
  const { t } = useLocale();
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full rounded border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700 dark:border-stone-600 dark:bg-stone-800 dark:text-cream-100 dark:placeholder:text-stone-500 dark:focus:border-gold-500 dark:focus:ring-gold-500";

  if (status === "success") {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center dark:bg-green-950/30">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-green-700 dark:text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-green-900 dark:text-green-300">
          {t.contact.successTitle}
        </h3>
        <p className="mt-2 text-green-700 dark:text-green-400">
          {t.contact.successDesc}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-800 underline hover:no-underline dark:text-green-300"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
          >
            {t.contact.fullName}
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
          >
            {t.contact.email}
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
          >
            {t.contact.phone}
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
          >
            {t.contact.subject}
          </label>
          <select
            id="subject"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={inputClass}
          >
            <option value="">{t.contact.selectSubject}</option>
            <option value="general">{t.contact.general}</option>
            <option value="orders">{t.contact.orders}</option>
            <option value="wholesale">{t.contact.wholesale}</option>
            <option value="tasting">{t.contact.tasting}</option>
            <option value="other">{t.contact.other}</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded bg-burgundy-900 px-6 py-3.5 text-sm font-medium tracking-wide text-cream-100 uppercase transition-colors hover:bg-burgundy-800 disabled:opacity-60 sm:w-auto dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
      >
        {status === "submitting" ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
}
