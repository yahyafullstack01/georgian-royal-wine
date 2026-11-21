import type { NextConfig } from "next";

const locales = ["en", "es", "ru", "fr", "uk", "bg", "ge", "ka"] as const;

const pageMap: Record<string, string> = {
  "": "/",
  home: "/",
  shop: "/shop",
  about: "/about",
  contact: "/contact",
  cart: "/cart",
  checkout: "/checkout",
  delivery: "/delivery",
  testimonials: "/testimonials",
  reviews: "/testimonials",
  // Old translated / suffixed slugs Google may still index
  "shop-en": "/shop",
  "shop-es": "/shop",
  "shop-ru": "/shop",
  "shop-fr": "/shop",
  "shop-uk": "/shop",
  "about-en": "/about",
  "about-es": "/about",
  "about-ru": "/about",
  "about-fr": "/about",
  "about-uk": "/about",
  "contact-en": "/contact",
  "contact-es": "/contact",
  "contact-ru": "/contact",
  "contact-fr": "/contact",
  "contact-uk": "/contact",
  "cart-en": "/cart",
  "cart-es": "/cart",
  "home-en": "/",
  "home-es": "/",
  "delivery-en": "/delivery",
  "delivery-es": "/delivery",
  "testimonials-en": "/testimonials",
  "testimonials-es": "/testimonials",
  "checkout-en": "/checkout",
  "checkout-es": "/checkout",
  tienda: "/shop",
  nosotros: "/about",
  contacto: "/contact",
  carrito: "/cart",
  opiniones: "/testimonials",
  entrega: "/delivery",
};

function buildLegacyRedirects() {
  const redirects: {
    source: string;
    destination: string;
    permanent: boolean;
  }[] = [];

  for (const locale of locales) {
    redirects.push({
      source: `/${locale}`,
      destination: "/",
      permanent: true,
    });

    for (const [oldSlug, destination] of Object.entries(pageMap)) {
      if (!oldSlug) continue;
      redirects.push({
        source: `/${locale}/${oldSlug}`,
        destination,
        permanent: true,
      });
    }

    // Old product URLs under a locale prefix
    redirects.push({
      source: `/${locale}/wines/:slug`,
      destination: "/wines/:slug",
      permanent: true,
    });
    redirects.push({
      source: `/${locale}/product/:slug`,
      destination: "/wines/:slug",
      permanent: true,
    });
    redirects.push({
      source: `/${locale}/products/:slug`,
      destination: "/wines/:slug",
      permanent: true,
    });
  }

  // Common CMS leftovers
  redirects.push(
    { source: "/index.php", destination: "/", permanent: true },
    { source: "/home", destination: "/", permanent: true },
    { source: "/tienda", destination: "/shop", permanent: true },
    { source: "/nosotros", destination: "/about", permanent: true },
    { source: "/contacto", destination: "/contact", permanent: true },
  );

  // Real, indexable Russian pages now live at these paths — don't redirect
  // them away to the Spanish-only root (see src/app/ru/**).
  const reclaimed = new Set(["/ru", "/ru/shop", "/ru/wines/:slug"]);
  return redirects.filter((redirect) => !reclaimed.has(redirect.source));
}

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(self)",
  },
  // Content-Security-Policy is set per-request in src/proxy.ts so it can
  // include a fresh nonce for inline scripts instead of 'unsafe-inline'.
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return buildLegacyRedirects();
  },
};

export default nextConfig;
