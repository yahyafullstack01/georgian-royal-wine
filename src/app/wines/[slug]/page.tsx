import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { wines, getWineBySlug } from "@/data/wines";
import { getWineContent } from "@/data/wineContent";
import WineDetailContent from "@/components/WineDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) return { title: "Vino no encontrado" };
  const content = getWineContent(wine.slug, "es");
  const title = `${content.name} — vino georgiano en España`;
  const taste =
    content.taste?.trim() ||
    content.tastingNotes?.trim() ||
    content.aroma?.trim() ||
    content.classification;
  const description = `${content.name}: ${taste.slice(0, 140)}${taste.length > 140 ? "…" : ""} Compra online con envío desde Torrevieja a toda España.`;

  return {
    title,
    description,
    alternates: { canonical: `/wines/${slug}` },
    openGraph: {
      title,
      description,
      url: `/wines/${slug}`,
      images: wine.image
        ? [{ url: wine.image, alt: content.name }]
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

  return <WineDetailContent wine={wine} related={related} />;
}
