"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { useLocale } from "@/context/LocaleContext";

export default function ContactPageContent() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-4xl text-burgundy-950 dark:text-cream-100">
            {t.contact.title}
          </h1>
          <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
            {t.contact.intro}
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-sm font-medium tracking-widest text-burgundy-600 uppercase dark:text-gold-400">
                {t.contact.visitTasting}
              </h3>
              <address className="mt-2 not-italic text-stone-600 dark:text-stone-300">
                <p>142 Vineyard Lane</p>
                <p>Napa Valley, CA 94558</p>
              </address>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-widest text-burgundy-600 uppercase dark:text-gold-400">
                {t.contact.hours}
              </h3>
              <p className="mt-2 whitespace-pre-line text-stone-600 dark:text-stone-300">
                {t.contact.hoursValue}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-widest text-burgundy-600 uppercase dark:text-gold-400">
                {t.contact.getInTouch}
              </h3>
              <p className="mt-2 text-stone-600 dark:text-stone-300">
                <a
                  href="tel:+17075551234"
                  className="hover:text-burgundy-700 dark:hover:text-gold-400"
                >
                  (707) 555-1234
                </a>
                <br />
                <a
                  href="mailto:hello@georgianroyalwine.com"
                  className="hover:text-burgundy-700 dark:hover:text-gold-400"
                >
                  hello@georgianroyalwine.com
                </a>
              </p>
            </div>
          </div>

          <div className="relative mt-10 hidden aspect-video overflow-hidden rounded-lg lg:block">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop"
              alt="Wine tasting room"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-6 sm:p-8 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
            {t.contact.sendMessage}
          </h2>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            {t.contact.formIntro}
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
