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
  const content = getCityContent(slug, "es");
  if (!content) return { title: "Ciudad no encontrada" };
  return {
    title: { absolute: content.title },
    description: content.description,
    alternates: { canonical: `/vino/${slug}` },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `/vino/${slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  const content = getCityContent(slug, "es");
  if (!city || !content) notFound();

  return (
    <>
      <JsonLdScript
        data={[
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Vino por ciudad", path: "/vino" },
            { name: city.name, path: `/vino/${city.slug}` },
          ]),
        ]}
      />
      <CityArticle slug={slug} />
    </>
  );
}
