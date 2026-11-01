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
  const content = getGuideContent(slug, "ru");
  if (!content) return { title: "Гид не найден" };
  return {
    title: { absolute: `${content.title} | Georgian Royal Wine` },
    description: content.description,
    alternates: {
      canonical: `/ru/guias/${slug}`,
      languages: {
        "es-ES": `/guias/${slug}`,
        "ru-RU": `/ru/guias/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `/ru/guias/${slug}`,
      locale: "ru_RU",
    },
  };
}

export default async function RuGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const content = getGuideContent(slug, "ru");
  if (!guide || !content) notFound();

  return (
    <>
      <JsonLdScript
        data={[
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Главная", path: "/ru" },
            { name: "Гиды", path: "/ru/guias" },
            { name: content.title, path: `/ru/guias/${slug}` },
          ]),
        ]}
      />
      <GuideArticle slug={slug} />
    </>
  );
}
