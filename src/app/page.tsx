import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Comprar vino online en España | Georgian Royal Wine — Torrevieja",
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Comprar vino online en España | Georgian Royal Wine — Torrevieja",
    description: siteConfig.defaultDescription,
    url: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
