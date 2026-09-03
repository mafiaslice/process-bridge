import { InsightsList } from "@/components/InsightsList";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insights",
  description:
    "Think beyond the solution. Essays on process, people, technology, analysis and transformation.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <section className="bg-lilac">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold tracking-[0.2em]">INSIGHTS</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Think Beyond the Solution.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            Questions we keep asking before anyone buys, builds, or automates.
          </p>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <InsightsList />
        </div>
      </section>
    </>
  );
}
