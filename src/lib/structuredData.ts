import {
  cities,
  deliveryFaqsByLocale,
  getGuideContent,
  guides,
  type SeoFaq,
} from "@/data/localSeo";
import { getWineContent } from "@/data/wineContent";
import { wines } from "@/data/wines";
import type { Wine } from "@/types/wine";
import type { Locale } from "@/lib/i18n/translations";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: SeoFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

const PRODUCT_DESCRIPTION_SUFFIX: Record<Locale, string> = {
  es: "Vino georgiano con envío desde Torrevieja a toda España.",
  ru: "Грузинское вино с доставкой из Торревьехи по всей Испании.",
  en: "Georgian wine shipped from Torrevieja across Spain.",
  fr: "Vin géorgien expédié depuis Torrevieja partout en Espagne.",
  uk: "Грузинське вино з доставкою з Торревьєхи по всій Іспанії.",
  bg: "Грузинско вино с доставка от Торевиеха до цяла Испания.",
};

const SHOP_LIST_NAME: Partial<Record<Locale, string>> = {
  es: "Tienda de vinos Georgian Royal Wine",
  ru: "Магазин вина Georgian Royal Wine",
};

const CITY_INDEX_NAME: Partial<Record<Locale, string>> = {
  es: "Envío de vino georgiano por ciudad",
  ru: "Доставка грузинского вина по городам",
};

const GUIDE_INDEX_NAME: Partial<Record<Locale, string>> = {
  es: "Guías de vino georgiano",
  ru: "Гиды по грузинскому вину",
};

const WINE_IN_PREFIX: Partial<Record<Locale, string>> = {
  es: "Vino en",
  ru: "Вино в",
};

export function wineProductJsonLd(wine: Wine, locale: Locale = "es") {
  const content = getWineContent(wine.slug, locale);
  const description =
    content.taste?.trim() ||
    content.tastingNotes?.trim() ||
    content.classification;
  const path = locale === "ru" ? `/ru/wines/${wine.slug}` : `/wines/${wine.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.name,
    description: `${content.name}. ${description} ${PRODUCT_DESCRIPTION_SUFFIX[locale]}`.slice(
      0,
      500,
    ),
    image: absoluteUrl(wine.image),
    sku: wine.slug,
    brand: {
      "@type": "Brand",
      name: wine.collections.includes("rezos")
        ? "Rezo's Wine"
        : "Georgian Royal Wine",
    },
    category: "Wine",
    countryOfOrigin: "Georgia",
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "EUR",
      price: wine.price.toFixed(2),
      availability: wine.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@id": `${siteConfig.url}/#business` },
      areaServed: { "@type": "Country", name: "Spain" },
    },
  };
}

export function shopItemListJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: SHOP_LIST_NAME[locale] ?? SHOP_LIST_NAME.es,
    itemListElement: wines.map((wine, index) => {
      const content = getWineContent(wine.slug, locale);
      const path =
        locale === "ru" ? `/ru/wines/${wine.slug}` : `/wines/${wine.slug}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(path),
        name: content.name,
      };
    }),
  };
}

export const deliveryFaqs: SeoFaq[] = deliveryFaqsByLocale.es;

export function cityIndexJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: CITY_INDEX_NAME[locale] ?? CITY_INDEX_NAME.es,
    itemListElement: cities.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${WINE_IN_PREFIX[locale] ?? WINE_IN_PREFIX.es} ${city.name}`,
      url: absoluteUrl(
        locale === "ru" ? `/ru/vino/${city.slug}` : `/vino/${city.slug}`,
      ),
    })),
  };
}

export function guideIndexJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: GUIDE_INDEX_NAME[locale] ?? GUIDE_INDEX_NAME.es,
    itemListElement: guides.map((guide, index) => {
      const content = getGuideContent(guide.slug, locale) ?? guide.locales.es;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: content.title,
        url: absoluteUrl(
          locale === "ru" ? `/ru/guias/${guide.slug}` : `/guias/${guide.slug}`,
        ),
      };
    }),
  };
}
