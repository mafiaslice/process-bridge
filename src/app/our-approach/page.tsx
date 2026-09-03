import { CtaButton } from "@/components/CtaButton";
import { SnakeDiagram } from "@/components/SnakeDiagram";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Approach",
  description:
    "Discover, Map, Analyse, Define, Align, Improve. Effective change begins with understanding.",
  path: "/our-approach",
});

export default function OurApproachPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-yellow">OUR APPROACH</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Understand first. Build second.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            We do not start with a solution. We start with the work as it is —
            then we help the organisation decide what should change.
          </p>
        </div>
      </section>

      <section className="bg-fog py-16 text-ink">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SnakeDiagram expanded theme="light" />
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Every organisation is different. But effective change begins with
            understanding.
          </h2>
          <p className="mt-8">
            <CtaButton>See the Approach in Action →</CtaButton>
          </p>
        </div>
      </section>
    </>
  );
}
