import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityArticle } from "@/components/SeoArticle";
import JsonLdScript from "@/components/JsonLdScript";
import { cities, getCity, getCityContent } from "@/data/localSeo";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getCityContent(slug, "ru");
  if (!content) return { title: "Город не найден" };
  return {
    title: { absolute: content.title },
    description: content.description,
    alternates: {
      canonical: `/ru/vino/${slug}`,
      languages: {
        "es-ES": `/vino/${slug}`,
        "ru-RU": `/ru/vino/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `/ru/vino/${slug}`,
      locale: "ru_RU",
    },
  };
}

export default async function RuCityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  const content = getCityContent(slug, "ru");
  if (!city || !content) notFound();

  return (
    <>
      <JsonLdScript
        data={[
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Главная", path: "/ru" },
            { name: "Вино по городам", path: "/ru/vino" },
            { name: city.name, path: `/ru/vino/${city.slug}` },
          ]),
        ]}
      />
      <CityArticle slug={slug} />
    </>
  );
}
