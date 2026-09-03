import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/CtaButton";
import { Badge } from "@/components/ui/badge";
import { getArticle, publishedArticles } from "@/data/articles";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return publishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: article.title,
    description: article.excerpt ?? article.title,
    path: `/insights/${article.slug}`,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !article.body) notFound();

  return (
    <article>
      <header className="bg-lilac">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <Badge variant="secondary">{article.category}</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{article.title}</h1>
        </div>
      </header>
      <div className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <div className="flex flex-col gap-5 text-lg leading-8">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-12 text-sm">
            <Link href="/insights" className="font-semibold hover:underline">
              ← All insights
            </Link>
          </p>
          <div className="mt-10">
            <CtaButton />
          </div>
        </div>
      </div>
    </article>
  );
}
