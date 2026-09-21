import { siteConfig, absoluteUrl } from "@/lib/seo";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["WineStore", "LocalBusiness", "Store"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: ["GRW", "Georgian Royal Wine España"],
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    image: absoluteUrl("/grw-logo.png"),
    logo: absoluteUrl("/grw-logo.png"),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "Spain" },
      { "@type": "City", name: "Torrevieja" },
      { "@type": "City", name: "Alicante" },
      { "@type": "City", name: "Marbella" },
      { "@type": "City", name: "Madrid" },
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Málaga" },
    ],
    sameAs: [siteConfig.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["es", "en", "ru", "fr", "uk"],
    publisher: { "@id": `${siteConfig.url}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
