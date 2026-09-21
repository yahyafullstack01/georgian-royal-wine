import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto — vino georgiano Torrevieja, Alicante",
  description:
    "Contacta Georgian Royal Wine en Torrevieja (Costa Blanca): pedidos de vino georgiano, catas y partnerships. Tel. +34 607 609 474 · sbs@sb-servicio.com. Envíos a toda España.",
  keywords: [
    "contacto vino georgiano",
    "tienda vino Torrevieja",
    "Georgian Royal Wine contacto",
    "vino Costa Blanca",
    ...siteConfig.keywords,
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto | Georgian Royal Wine Torrevieja",
    description:
      "Tienda de vino georgiano en Torrevieja. Pedidos y envíos a toda España.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
