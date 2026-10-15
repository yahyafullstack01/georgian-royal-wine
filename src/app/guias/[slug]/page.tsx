import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/SeoArticle";
import JsonLdScript from "@/components/JsonLdScript";
import { getGuide, getGuideContent, guides } from "@/data/localSeo";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getGuideContent(slug, "es");
  if (!content) return { title: "Guía no encontrada" };
  return {
    title: { absolute: `${content.title} | Georgian Royal Wine` },
    description: content.description,
    alternates: { canonical: `/guias/${slug}` },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `/guias/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const content = getGuideContent(slug, "es");
  if (!guide || !content) notFound();

  return (
    <>
      <JsonLdScript
        data={[
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Guías", path: "/guias" },
            { name: content.title, path: `/guias/${slug}` },
          ]),
        ]}
      />
      <GuideArticle slug={slug} />
    </>
  );
}
