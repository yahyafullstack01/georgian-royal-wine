import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { wines, getWineBySlug } from "@/data/wines";
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
  if (!wine) return { title: "Wine Not Found" };
  return {
    title: wine.name,
    description: wine.description,
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
