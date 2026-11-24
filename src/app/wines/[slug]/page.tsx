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

function toTitleCase(name: string) {
  return name
    .split(" ")
    .map((word) =>
      word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word
    )
    .join(" ");
}

export async function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) return { title: "Vino no encontrado" };
  const content = getWineContent(wine.slug, "es");
  const displayName = toTitleCase(content.name);
  const title = `${displayName} — vino georgiano en España`;
  const taste =
    content.taste?.trim() ||
    content.tastingNotes?.trim() ||
    content.aroma?.trim() ||
    content.classification;
  const description = `${displayName}: ${taste.slice(0, 140)}${taste.length > 140 ? "…" : ""} Compra online con envío desde Torrevieja a toda España.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/wines/${slug}`,
      languages: {
        "es-ES": `/wines/${slug}`,
        "ru-RU": `/ru/wines/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/wines/${slug}`,
      images: wine.image
        ? [{ url: wine.image, alt: displayName }]
        : undefined,
    },
  };
}

export default async function WineDetailPage({ params }: Props) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);

  if (!wine) notFound();

  const related = wines
    .filter((w) => w.category === wine.category && w.id !== wine.id)
    .slice(0, 3);

  const content = getWineContent(wine.slug, "es");

  return (
    <>
      <JsonLdScript
        data={[
          wineProductJsonLd(wine),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Tienda", path: "/shop" },
            { name: content.name, path: `/wines/${wine.slug}` },
          ]),
        ]}
      />
      <WineDetailContent wine={wine} related={related} />
    </>
  );
}
