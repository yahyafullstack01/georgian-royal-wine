import type { Metadata } from "next";
import DeliveryPageContent from "@/components/DeliveryPageContent";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Envío de vino a domicilio en España",
  description:
    "Envío de vino a domicilio en España desde Torrevieja: 3 € por 1–4 botellas en Torrevieja. 1 caja o más — envío gratis a Madrid, Barcelona, Marbella, Valencia, Málaga y toda España.",
  keywords: [
    "envio vino a domicilio",
    "entrega vino a domicilio España",
    "envio gratis vino",
    "wine delivery Spain",
    "entrega vino Torrevieja",
    "envio vino Madrid",
    "envio vino Barcelona",
    "envio vino Marbella",
    ...siteConfig.keywords,
  ],
  alternates: { canonical: "/delivery" },
  openGraph: {
    title: "Envío de vino a domicilio en España | Georgian Royal Wine",
    description:
      "Entrega en Torrevieja y envío gratis de vino en España a partir de 1 caja.",
    url: "/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryPageContent />;
}
