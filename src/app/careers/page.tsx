import { CtaButton } from "@/components/CtaButton";
import { careerAreas } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";

export const metadata = pageMeta({
  title: "Careers",
  description:
    "Build better ways of working. Process Bridge looks for curious, analytical, collaborative people.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section className="bg-lilac">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold tracking-[0.2em]">CAREERS</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Build Better Ways of Working.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            We look for curious, analytical, collaborative people — the kind who
            would rather understand a problem than decorate it with software.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-semibold">Areas we hire into</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {careerAreas.map((area) => (
              <li key={area}>
                <Badge variant="secondary" className="h-auto px-4 py-2 text-sm">
                  {area}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-yellow-tint">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Open roles</h2>
          <p className="mt-5 text-lg leading-8">
            We do not have open vacancies right now. If the work sounds like
            yours, join our talent network — tell us how you think, not just
            what you have done.
          </p>
          <div className="mt-8">
            <CtaButton>Join Our Talent Network →</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
