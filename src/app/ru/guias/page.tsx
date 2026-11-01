import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import { GuideIndexContent } from "@/components/SeoIndexContent";
import { breadcrumbJsonLd, guideIndexJsonLd } from "@/lib/structuredData";

const title = "Гиды по грузинскому вину";
const description =
  "Гиды по покупке грузинского вина в Испании: квеври, Саперави, Киндзмараули, Хванчкара и как заказать ящик с бесплатной доставкой.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ru/guias",
    languages: {
      "es-ES": "/guias",
      "ru-RU": "/ru/guias",
    },
  },
  openGraph: {
    title: `${title} | Georgian Royal Wine`,
    description:
      "Какую бутылку выбрать и как работает доставка из Торревьехи.",
    url: "/ru/guias",
    locale: "ru_RU",
  },
};

export default function RuGuidesPage() {
  return (
    <>
      <JsonLdScript
        data={[
          guideIndexJsonLd("ru"),
          breadcrumbJsonLd([
            { name: "Главная", path: "/ru" },
            { name: "Гиды", path: "/ru/guias" },
          ]),
        ]}
      />
      <GuideIndexContent />
    </>
  );
}
