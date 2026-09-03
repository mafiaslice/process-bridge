import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/CtaButton";
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
    <article className="bg-fog text-ink">
      <header className="border-b border-pale bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-charcoal">
            {article.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{article.title}</h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <div className="space-y-5 text-lg leading-8 text-charcoal">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-12 text-sm">
          <Link href="/insights" className="font-semibold text-ink hover:underline">
            ← All insights
          </Link>
        </p>
        <div className="mt-10">
          <CtaButton />
        </div>
      </div>
    </article>
  );
}
