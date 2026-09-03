"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles, insightTabs, type ArticleCategory } from "@/data/articles";

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
    <div>
      <div
        role="tablist"
        aria-label="Filter insights"
        className="flex flex-wrap gap-2"
      >
        {insightTabs.map((item) => {
          const selected = item === tab;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setTab(item)}
              className={`rounded-[2px] px-3 py-1.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                selected ? "bg-ink text-white" : "bg-pale text-charcoal hover:bg-grey"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-charcoal">Nothing in this category yet.</p>
      ) : (
        <div className="mt-10 grid gap-6">
          {featured ? <ArticleCard article={featured} featured /> : null}
          <ul className="grid gap-4 md:grid-cols-2">
            {rest.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ArticleCard({
  article,
  featured,
}: {
  article: (typeof articles)[number];
  featured?: boolean;
}) {
  const inner = (
    <>
      <p className="text-xs font-semibold tracking-[0.18em] text-charcoal">
        {article.category}
        {article.status === "coming-soon" ? " · Coming soon" : ""}
      </p>
      <h2 className={`mt-3 font-semibold tracking-tight text-ink ${featured ? "text-3xl" : "text-xl"}`}>
        {article.title}
      </h2>
      {article.excerpt ? (
        <p className="mt-3 text-sm leading-6 text-charcoal">{article.excerpt}</p>
      ) : null}
    </>
  );

  const className = `block h-full rounded-[2px] border border-pale bg-white p-6 ${
    featured ? "md:p-10" : ""
  } ${article.status === "published" ? "transition-colors hover:border-blue" : "cursor-default opacity-90"}`;

  if (article.status === "published") {
    return (
      <Link href={`/insights/${article.slug}`} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <article className={className} aria-disabled="true">
      {inner}
    </article>
  );
}

export function HomeInsightsPreview() {
  const published = articles.filter((article) => article.status === "published");

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {published.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/insights/${article.slug}`}
            className="block h-full rounded-[2px] border border-white/10 bg-charcoal/40 p-6 hover:border-lilac"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-yellow">
              {article.category}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{article.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
