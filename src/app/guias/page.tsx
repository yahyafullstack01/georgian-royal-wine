import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import { GuideIndexContent } from "@/components/SeoIndexContent";
import { breadcrumbJsonLd, guideIndexJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Guías de vino georgiano",
  description:
    "Guías para comprar vino georgiano en España: qvevri, Saperavi, Kindzmarauli, Khvanchkara y cómo pedir una caja con entrega gratuita.",
  alternates: { canonical: "/guias" },
  openGraph: {
    title: "Guías de vino georgiano | Georgian Royal Wine",
    description:
      "Qué botella pedir y cómo funciona el envío desde Torrevieja.",
    url: "/guias",
  },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLdScript
        data={[
          guideIndexJsonLd(),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Guías", path: "/guias" },
          ]),
        ]}
      />
      <GuideIndexContent />
    </>
  );
}
