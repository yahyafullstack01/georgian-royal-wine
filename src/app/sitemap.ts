import type { MetadataRoute } from "next";
import { cities, guides } from "@/data/localSeo";
import { wines } from "@/data/wines";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/delivery",
    "/testimonials",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/shop" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/shop" ? 0.9 : 0.7,
    ...(path === "" || path === "/shop"
      ? {
          alternates: {
            languages: {
              "es-ES": `${siteConfig.url}${path}`,
              "ru-RU": `${siteConfig.url}/ru${path}`,
            },
          },
        }
      : {}),
  }));

  const ruPages: MetadataRoute.Sitemap = ["", "/shop"].map((path) => ({
    url: `${siteConfig.url}/ru${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "weekly",
    priority: path === "" ? 1 : 0.9,
    alternates: {
      languages: {
        "es-ES": `${siteConfig.url}${path}`,
        "ru-RU": `${siteConfig.url}/ru${path}`,
      },
    },
  }));

  const winePages: MetadataRoute.Sitemap = wines.flatMap((wine) => [
    {
      url: `${siteConfig.url}/wines/${wine.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          "es-ES": `${siteConfig.url}/wines/${wine.slug}`,
          "ru-RU": `${siteConfig.url}/ru/wines/${wine.slug}`,
        },
      },
    },
    {
      url: `${siteConfig.url}/ru/wines/${wine.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          "es-ES": `${siteConfig.url}/wines/${wine.slug}`,
          "ru-RU": `${siteConfig.url}/ru/wines/${wine.slug}`,
        },
      },
    },
  ]);

  const cityPaths = ["", ...cities.map((city) => `/${city.slug}`)];
  const cityPages: MetadataRoute.Sitemap = cityPaths.flatMap((suffix) => [
    {
      url: `${siteConfig.url}/vino${suffix}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: suffix === "" ? 0.8 : 0.75,
      alternates: {
        languages: {
          "es-ES": `${siteConfig.url}/vino${suffix}`,
          "ru-RU": `${siteConfig.url}/ru/vino${suffix}`,
        },
      },
    },
    {
      url: `${siteConfig.url}/ru/vino${suffix}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: suffix === "" ? 0.8 : 0.75,
      alternates: {
        languages: {
          "es-ES": `${siteConfig.url}/vino${suffix}`,
          "ru-RU": `${siteConfig.url}/ru/vino${suffix}`,
        },
      },
    },
  ]);

  const guidePaths = ["", ...guides.map((guide) => `/${guide.slug}`)];
  const guidePages: MetadataRoute.Sitemap = guidePaths.flatMap((suffix) => [
    {
      url: `${siteConfig.url}/guias${suffix}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: suffix === "" ? 0.7 : 0.65,
      alternates: {
        languages: {
          "es-ES": `${siteConfig.url}/guias${suffix}`,
          "ru-RU": `${siteConfig.url}/ru/guias${suffix}`,
        },
      },
    },
    {
      url: `${siteConfig.url}/ru/guias${suffix}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: suffix === "" ? 0.7 : 0.65,
      alternates: {
        languages: {
          "es-ES": `${siteConfig.url}/guias${suffix}`,
          "ru-RU": `${siteConfig.url}/ru/guias${suffix}`,
        },
      },
    },
  ]);

  return [
    ...staticPages,
    ...ruPages,
    ...winePages,
    ...cityPages,
    ...guidePages,
  ];
}
