"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";

export default function ContactPageContent() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={t.contact.title} subtitle={t.contact.intro} compact />

      <div className="bg-cream-50 py-16 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <GeorgianDivider className="mb-8 justify-start" />

              <div className="space-y-8">
                <div className="border-l-2 border-gold-500/50 pl-6">
                  <h3 className="text-sm font-medium tracking-widest text-burgundy-700 uppercase dark:text-gold-400">
                    {t.contact.visitTasting}
                  </h3>
                  <address className="mt-2 not-italic text-stone-600 dark:text-stone-300">
                    <p>{t.footer.address1}</p>
                    <p>{t.footer.address2}</p>
                  </address>
                </div>
                <div className="border-l-2 border-gold-500/50 pl-6">
                  <h3 className="text-sm font-medium tracking-widest text-burgundy-700 uppercase dark:text-gold-400">
                    {t.contact.hours}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-stone-600 dark:text-stone-300">
                    {t.contact.hoursValue}
                  </p>
                </div>
                <div className="border-l-2 border-gold-500/50 pl-6">
                  <h3 className="text-sm font-medium tracking-widest text-burgundy-700 uppercase dark:text-gold-400">
                    {t.contact.getInTouch}
                  </h3>
                  <p className="mt-2 text-stone-600 dark:text-stone-300">
                    <a
                      href="tel:+995322000000"
                      className="hover:text-burgundy-700 dark:hover:text-gold-400"
                    >
                      +995 32 2 000 000
                    </a>
                    <br />
                    <a
                      href="mailto:info@grw-wine.com"
                      className="hover:text-burgundy-700 dark:hover:text-gold-400"
                    >
                      info@grw-wine.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="relative mt-10 hidden aspect-video overflow-hidden rounded-lg ring-1 ring-gold-500/20 lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1506377247727-2f5e3b773a8c?w=800&h=450&fit=crop"
                  alt="Kakheti vineyard"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-burgundy-950/20" />
              </div>
            </div>

            <div className="relative border border-burgundy-900/10 bg-white px-8 py-10 shadow-sm dark:border-gold-500/15 dark:bg-stone-900 sm:px-10">
              <div
                className="pointer-events-none absolute inset-3 border border-gold-500/15"
                aria-hidden="true"
              />
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
      </div>
    </>
  );
}
