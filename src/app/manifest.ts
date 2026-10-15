import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Georgian Royal Wine",
    short_name: "GRW",
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#5c1224",
    lang: "es",
    icons: [
      { src: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
