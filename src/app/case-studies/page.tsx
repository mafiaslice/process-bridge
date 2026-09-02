import { CtaButton } from "@/components/CtaButton";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Case Studies",
  description: "Case studies from Process Bridge engagements will appear here.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <section className="bg-fog text-ink">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-charcoal">INSIGHTS</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Case Studies</h1>
        <p className="mt-6 text-lg leading-8 text-charcoal">
          We will publish detailed case studies here. Until then, the principles
          are already on the site: understand the work, then change it.
        </p>
        <div className="mt-8">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
