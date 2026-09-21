import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tienda de vinos online en España",
  description:
    "Tienda de vinos online en España: compra vino tinto, blanco y premium con envío desde Torrevieja. Saperavi, Kindzmarauli, Mukuzani, Khvanchkara, qvevri y más — Madrid, Barcelona, Marbella y toda España.",
  keywords: [
    "tienda de vinos online",
    "comprar vino online España",
    "mejor vino España",
    "caja de vino online",
    "vino tinto bueno",
    "Saperavi",
    "Kindzmarauli",
    "wine shop Spain",
    "купить вино онлайн Испания",
    ...siteConfig.keywords,
  ],
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Tienda de vinos online en España | Georgian Royal Wine",
    description:
      "Compra vino online en España. Catálogo premium con envío desde Torrevieja a toda España.",
    url: "/shop",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
