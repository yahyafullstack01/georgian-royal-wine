import type { Metadata } from "next";
import JsonLdScript from "@/components/JsonLdScript";
import { siteConfig } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  shopItemListJsonLd,
} from "@/lib/structuredData";

const title = "Интернет-магазин грузинских вин в Испании";
const description =
  "Магазин грузинских вин онлайн в Испании: красные, белые и премиальные вина с доставкой из Торревьехи. Саперави, Киндзмараули, Мукузани, Хванчкара, вино из квеври — Мадрид, Барселона, Марбелья и вся Испания.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "магазин вина Испания",
    "купить грузинское вино онлайн",
    "грузинское вино Испания",
    "Саперави Испания",
    "Киндзмараули Испания",
    "Хванчкара",
    ...siteConfig.keywords,
  ],
  alternates: {
    canonical: "/ru/shop",
    languages: {
      "es-ES": "/shop",
      "ru-RU": "/ru/shop",
    },
  },
  openGraph: {
    title: `${title} | Georgian Royal Wine`,
    description,
    url: "/ru/shop",
    locale: "ru_RU",
  },
};

export default function RuShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript
        data={[
          shopItemListJsonLd("ru"),
          breadcrumbJsonLd([
            { name: "Главная", path: "/ru" },
            { name: "Магазин", path: "/ru/shop" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
