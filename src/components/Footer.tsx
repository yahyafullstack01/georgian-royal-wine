"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import Logo from "@/components/Logo";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto border-t border-burgundy-900/10 bg-burgundy-950 text-cream-200 dark:border-stone-800 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="md" linked={false} badge />
            <p className="mt-4 text-sm leading-relaxed text-cream-300/80">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold-400 uppercase">
              {t.footer.shop}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/shop?category=red" className="hover:text-gold-400">
                  {t.home.redWines}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=white" className="hover:text-gold-400">
                  {t.home.whiteWines}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rosé" className="hover:text-gold-400">
                  {t.home.rose}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=sparkling" className="hover:text-gold-400">
                  {t.home.sparkling}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold-400 uppercase">
              {t.footer.company}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-400">
                  {t.footer.ourStory}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold-400 uppercase">
              {t.footer.visitUs}
            </h4>
            <address className="mt-4 space-y-1 text-sm not-italic text-cream-300/80">
              <p>142 Vineyard Lane</p>
              <p>Napa Valley, CA 94558</p>
              <p className="pt-2">
                <a href="tel:+17075551234" className="hover:text-gold-400">
                  (707) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@georgianroyalwine.com"
                  className="hover:text-gold-400"
                >
                  hello@georgianroyalwine.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream-200/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream-400">
            &copy; {new Date().getFullYear()} Georgian Royal Wine. {t.footer.rights}
          </p>
          <p className="text-xs text-cream-400">{t.footer.drinkResponsibly}</p>
        </div>
      </div>
    </footer>
  );
}
