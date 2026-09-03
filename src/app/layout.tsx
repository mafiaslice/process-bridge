import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultTitle } from "@/lib/seo";
import { SITE_NAME, SITE_URL, TAGLINE } from "@/data/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s — ${SITE_NAME}`,
  },
  description: TAGLINE,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Process Bridge — Aligning People, Process & Technology",
      },
    ],
  },
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={cn(outfit.variable, "h-full antialiased font-sans")}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
