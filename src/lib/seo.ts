import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TAGLINE } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const defaultTitle = `${SITE_NAME} — ${TAGLINE.replace(/\.$/, "")}`;
