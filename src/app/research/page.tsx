import { TextLink } from "@/components/CtaButton";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Research",
  description: "Research from Process Bridge will appear here.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <section className="bg-fog text-ink">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-charcoal">INSIGHTS</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Research</h1>
        <p className="mt-6 text-lg leading-8 text-charcoal">
          Longer research notes will live here. For now, start with the essays
          on Insights.
        </p>
        <p className="mt-8">
          <TextLink href="/insights">Read Insights →</TextLink>
        </p>
      </div>
    </section>
  );
}
