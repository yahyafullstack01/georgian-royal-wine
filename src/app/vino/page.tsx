import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import { CityIndexContent } from "@/components/SeoIndexContent";
import { breadcrumbJsonLd, cityIndexJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Vino georgiano por ciudad en España",
  description:
    "Envío de vino georgiano a Torrevieja, Alicante, Marbella, Madrid, Barcelona, Valencia, Málaga y Benidorm. Entrega gratis en España desde 1 caja.",
  alternates: { canonical: "/vino" },
  openGraph: {
    title: "Vino georgiano por ciudad en España | Georgian Royal Wine",
    description:
      "Dónde entregamos en España: Costa Blanca, Madrid, Barcelona, Marbella y más.",
    url: "/vino",
  },
};

export default function CityIndexPage() {
  return (
    <>
      <JsonLdScript
        data={[
          cityIndexJsonLd(),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Vino por ciudad", path: "/vino" },
          ]),
        ]}
      />
      <CityIndexContent />
    </>
  );
}
