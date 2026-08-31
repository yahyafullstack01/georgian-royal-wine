"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import Logo from "@/components/Logo";
import GeorgianDivider from "@/components/GeorgianDivider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto border-t border-gold-500/20 bg-burgundy-950 text-cream-200 dark:border-stone-800 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <GeorgianDivider className="mb-10" />
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
                  {t.shop.red}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=white" className="hover:text-gold-400">
                  {t.shop.white}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rose" className="hover:text-gold-400">
                  {t.shop.rose}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rezos" className="hover:text-gold-400">
                  {t.shop.rezos}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=qvevri" className="hover:text-gold-400">
                  {t.shop.qvevri}
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
              <li>
                <Link href="/delivery" className="hover:text-gold-400">
                  {t.footer.delivery}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold-400 uppercase">
              {t.footer.visitUs}
            </h4>
            <address className="mt-4 space-y-1 text-sm not-italic text-cream-300/80">
              <p>{t.footer.address1}</p>
              <p>{t.footer.address2}</p>
              <p className="pt-2">
                <a href="tel:+34607609474" className="hover:text-gold-400">
                  +34 607 609 474
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@grw-wine.com"
                  className="hover:text-gold-400"
                >
                  info@grw-wine.com
                </a>
              </p>
              <p className="pt-2">
                <a
                  href="https://www.instagram.com/georgianwine.es?igsi=MWsxOTYwbWlmZXp4OQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-gold-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.781.91.957 1.47.163.46.349 1.26.404 2.43.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.063 2.293c.46-.163 1.26-.349 2.43-.404C8.759 1.831 9.139 1.82 12 1.82zM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.903.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.903.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.059 1.277.261 2.149.558 2.912a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.763.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.149-.261 2.912-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.763.499-1.635.558-2.913C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.059-1.277-.261-2.149-.558-2.912a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.86.63C19.097.333 18.225.131 16.947.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @georgianwine.es
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
