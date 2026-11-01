import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { wines, getWineBySlug } from "@/data/wines";
import { getWineContent } from "@/data/wineContent";
import WineDetailContent from "@/components/WineDetailContent";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, wineProductJsonLd } from "@/lib/structuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) return { title: "Вино не найдено" };
  const content = getWineContent(wine.slug, "ru");
  const title = `${content.name} — грузинское вино в Испании`;
  const taste =
    content.taste?.trim() ||
    content.tastingNotes?.trim() ||
    content.aroma?.trim() ||
    content.classification;
  const description = `${content.name}: ${taste.slice(0, 140)}${taste.length > 140 ? "…" : ""} Купить онлайн с доставкой из Торревьехи по всей Испании.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/ru/wines/${slug}`,
      languages: {
        "es-ES": `/wines/${slug}`,
        "ru-RU": `/ru/wines/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/ru/wines/${slug}`,
      locale: "ru_RU",
      images: wine.image
        ? [{ url: wine.image, alt: content.name }]
        : undefined,
    },
  };
}

export default async function RuWineDetailPage({ params }: Props) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);

  if (!wine) notFound();

  const related = wines
    .filter((w) => w.category === wine.category && w.id !== wine.id)
    .slice(0, 3);

  const content = getWineContent(wine.slug, "ru");

  return (
    <>
      <JsonLdScript
        data={[
          wineProductJsonLd(wine, "ru"),
          breadcrumbJsonLd([
            { name: "Главная", path: "/ru" },
            { name: "Магазин", path: "/ru/shop" },
            { name: content.name, path: `/ru/wines/${wine.slug}` },
          ]),
        ]}
      />
      <WineDetailContent wine={wine} related={related} />
    </>
  );
}
