import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { siteConfig } from "@/lib/seo";

const title =
  "Купить грузинское вино в Испании | Georgian Royal Wine — Торревьеха";
const description =
  "Купить грузинское вино в Испании онлайн — магазин в Торревьехе (Costa Blanca). Премиальные грузинские вина с доставкой по всей Испании: Мадрид, Барселона, Марбелья, Валенсия, Малага. Саперави, Киндзмараули, Мукузани, Хванчкара, вино из квеври и Rezo's Wine. Бесплатная доставка от 1 ящика.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/ru",
    languages: {
      "es-ES": "/",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title,
    description,
    url: "/ru",
    locale: "ru_RU",
  },
};

export default function RuHome() {
  return <HomeContent />;
}
