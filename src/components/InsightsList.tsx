"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles, insightTabs, type ArticleCategory } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Tab = (typeof insightTabs)[number];

export function InsightsList() {
  const [tab, setTab] = useState<Tab>("All");

  const visible = useMemo(() => {
    if (tab === "All") return articles;
    return articles.filter((article) => article.category === (tab as ArticleCategory));
  }, [tab]);

  const featured = visible.find((article) => article.featured && article.status === "published");
  const rest = visible.filter((article) => article !== featured);

  return (
    <div className="flex flex-col gap-10">
      <ToggleGroup
        value={[tab]}
        onValueChange={(value) => {
          if (value[0]) setTab(value[0] as Tab);
        }}
        spacing={2}
        className="flex-wrap"
        aria-label="Filter insights"
      >
        {insightTabs.map((item) => (
          <ToggleGroupItem key={item} value={item} variant="outline">
            {item}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {visible.length === 0 ? (
        <p>Nothing in this category yet.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {featured ? <ArticleRow article={featured} featured /> : null}
          <ul className="flex flex-col">
            {rest.map((article, index) => (
              <li key={article.slug}>
                {index > 0 || featured ? <Separator /> : null}
                <ArticleRow article={article} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ArticleRow({
  article,
  featured,
}: {
  article: (typeof articles)[number];
  featured?: boolean;
}) {
  const inner = (
    <>
      <Badge variant="secondary">
        {article.category}
        {article.status === "coming-soon" ? " · Coming soon" : ""}
      </Badge>
      <h2 className={`font-semibold tracking-tight ${featured ? "text-3xl" : "text-xl"}`}>
        {article.title}
      </h2>
      {article.excerpt ? (
        <p className="max-w-3xl text-base leading-7">{article.excerpt}</p>
      ) : null}
    </>
  );

  const className = `flex flex-col items-start gap-3 py-8 ${
    article.status === "published" ? "" : "opacity-90"
  }`;

  if (article.status === "published") {
    return (
      <Link href={`/insights/${article.slug}`} className={`${className} hover:underline-offset-4`}>
        {inner}
      </Link>
    );
  }

  return (
    <article className={className}>
      {inner}
    </article>
  );
}

export function HomeInsightsPreview() {
  const published = articles.filter((article) => article.status === "published");

  return (
    <ul className="flex flex-col">
      {published.map((article, index) => (
        <li key={article.slug}>
          {index > 0 ? <Separator /> : null}
          <Link
            href={`/insights/${article.slug}`}
            className="flex flex-col gap-2 py-6 hover:bg-accent/40"
          >
            <Badge variant="secondary">{article.category}</Badge>
            <h3 className="text-lg font-semibold">{article.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
