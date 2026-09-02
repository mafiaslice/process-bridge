import type { MetadataRoute } from "next";
import { publishedArticles } from "@/data/articles";
import { SITE_URL } from "@/data/site";

const staticPaths = [
  "/",
  "/about",
  "/what-we-do",
  "/our-approach",
  "/insights",
  "/start-with-clarity",
  "/careers",
  "/privacy",
  "/terms",
  "/case-studies",
  "/research",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: path === "/insights" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...publishedArticles().map((article) => ({
      url: `${SITE_URL}/insights/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
