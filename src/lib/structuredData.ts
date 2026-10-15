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

export function wineProductJsonLd(wine: Wine) {
  const content = getWineContent(wine.slug, "es");
  const description =
    content.taste?.trim() ||
    content.tastingNotes?.trim() ||
    content.classification;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.name,
    description: `${content.name}. ${description} Vino georgiano con envío desde Torrevieja a toda España.`.slice(
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
      url: absoluteUrl(`/wines/${wine.slug}`),
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

export function shopItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tienda de vinos Georgian Royal Wine",
    itemListElement: wines.map((wine, index) => {
      const content = getWineContent(wine.slug, "es");
      return {
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/wines/${wine.slug}`),
        name: content.name,
      };
    }),
  };
}

export const deliveryFaqs: SeoFaq[] = deliveryFaqsByLocale.es;

export function cityIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Envío de vino georgiano por ciudad",
    itemListElement: cities.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Vino en ${city.name}`,
      url: absoluteUrl(`/vino/${city.slug}`),
    })),
  };
}

export function guideIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guías de vino georgiano",
    itemListElement: guides.map((guide, index) => {
      const content = getGuideContent(guide.slug, "es") ?? guide.locales.es;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: content.title,
        url: absoluteUrl(`/guias/${guide.slug}`),
      };
    }),
  };
}
