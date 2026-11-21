import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.defaultTitle,
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: "/",
    images: [
      {
        url: absoluteUrl("/banner/Home1.jpg"),
        width: 1280,
        height: 853,
        alt: "Georgian Royal Wine — vinos de Kakheti en España",
      },
    ],
  },
};

export default function Home() {
  return <HomeContent />;
}
