import type { MetadataRoute } from "next";
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
  }));

  const winePages: MetadataRoute.Sitemap = wines.map((wine) => ({
    url: `${siteConfig.url}/wines/${wine.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...winePages];
}
