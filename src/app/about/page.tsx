import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre nosotros — vino georgiano en Torrevieja",
  description:
    "Georgian Royal Wine acerca los vinos de Kakheti y Racha a España desde Torrevieja. Tradición qvevri, Saperavi, Kindzmarauli y envío nacional a Madrid, Barcelona y Marbella.",
  keywords: [
    "Georgian Royal Wine",
    "historia vino georgiano",
    "vino Kakheti España",
    "qvevri UNESCO",
    ...siteConfig.keywords,
  ],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
