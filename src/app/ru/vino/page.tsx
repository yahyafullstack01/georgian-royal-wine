import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import { CityIndexContent } from "@/components/SeoIndexContent";
import { breadcrumbJsonLd, cityIndexJsonLd } from "@/lib/structuredData";

const title = "Грузинское вино по городам Испании";
const description =
  "Доставка грузинского вина в Торревьеху, Аликанте, Марбелью, Мадрид, Барселону, Валенсию, Малагу и Бенидорм. Бесплатная доставка по Испании от 1 ящика.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ru/vino",
    languages: {
      "es-ES": "/vino",
      "ru-RU": "/ru/vino",
    },
  },
  openGraph: {
    title: `${title} | Georgian Royal Wine`,
    description:
      "Куда мы доставляем в Испании: Коста-Бланка, Мадрид, Барселона, Марбелья и другие города.",
    url: "/ru/vino",
    locale: "ru_RU",
  },
};

export default function RuCityIndexPage() {
  return (
    <>
      <JsonLdScript
        data={[
          cityIndexJsonLd("ru"),
          breadcrumbJsonLd([
            { name: "Главная", path: "/ru" },
            { name: "Вино по городам", path: "/ru/vino" },
          ]),
        ]}
      />
      <CityIndexContent />
    </>
  );
}
