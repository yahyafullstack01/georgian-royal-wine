"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import GeorgianDivider from "@/components/GeorgianDivider";
import { useLocale } from "@/context/LocaleContext";

const PHONE_DISPLAY = "+34 607 609 474";
const PHONE_TEL = "+34607609474";
const EMAIL = "info@grw-wine.com";
const WHATSAPP = "https://wa.me/34607609474";
const INSTAGRAM = "https://www.instagram.com/lena.wine.grw";

export default function ContactPageContent() {
  const { t } = useLocale();

  const actions = [
    {
      href: `tel:${PHONE_TEL}`,
      label: t.contact.actionCall,
      detail: PHONE_DISPLAY,
    },
    {
      href: `mailto:${EMAIL}`,
      label: t.contact.actionEmail,
      detail: EMAIL,
    },
    {
      href: WHATSAPP,
      label: t.contact.actionWhatsapp,
      detail: "WhatsApp",
      external: true,
    },
    {
      href: INSTAGRAM,
      label: t.contact.actionInstagram,
      detail: "@lena.wine.grw",
      external: true,
    },
  ];

  return (
    <>
      <ContactHero title={t.contact.title} subtitle={t.contact.intro} />

      <div className="bg-cream-50 py-16 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Primary actions */}
          <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {actions.map((action, i) => (
              <a
                key={action.href}
                href={action.href}
                {...(action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="contact-hero-rise group border border-burgundy-900/10 bg-white px-4 py-5 text-center transition-colors hover:border-gold-500/50 hover:bg-cream-100 dark:border-gold-500/15 dark:bg-stone-900 dark:hover:border-gold-500/40 dark:hover:bg-stone-800"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="text-xs tracking-[0.25em] text-burgundy-700 uppercase dark:text-gold-400">
                  {action.label}
                </p>
                <p className="mt-2 text-sm text-stone-700 transition-colors group-hover:text-burgundy-900 dark:text-stone-300 dark:group-hover:text-cream-100">
                  {action.detail}
                </p>
              </a>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
                      href={`tel:${PHONE_TEL}`}
                      className="hover:text-burgundy-700 dark:hover:text-gold-400"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <br />
                    <a
                      href={`mailto:${EMAIL}`}
                      className="hover:text-burgundy-700 dark:hover:text-gold-400"
                    >
                      {EMAIL}
                    </a>
                  </p>
                </div>
              </div>

              {/* Office — visible on all breakpoints */}
              <div className="relative mt-10 aspect-[16/10] overflow-hidden ring-1 ring-gold-500/20">
                <Image
                  src="/about/office.jpg"
                  alt="GRW office"
                  fill
                  className="object-cover object-[center_30%] transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-burgundy-950/10" />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-burgundy-950 dark:text-cream-100">
                {t.contact.sendMessage}
              </h2>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                {t.contact.formIntro}
              </p>
              <GeorgianDivider className="my-6 justify-start" />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
