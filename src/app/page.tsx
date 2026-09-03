import { HomeInsightsPreview } from "@/components/InsightsList";
import { HowWeWorkGallery } from "@/components/HowWeWorkGallery";
import { Logo } from "@/components/Logo";
import { MagnetLines } from "@/components/MagnetLines";
import { ProblemsGallery } from "@/components/ProblemsGallery";
import { ScrollJourneyLine } from "@/components/ScrollJourneyLine";
import { CtaButton, TextLink } from "@/components/CtaButton";
import { audiences, pillars } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Aligning People, Process & Technology",
  description:
    "Process Bridge helps organisations understand how they work and create clarity around what needs to change — before investing in technology.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-lilac">
        <div className="pointer-events-none absolute inset-0 z-0">
          <MagnetLines
            rows={14}
            columns={18}
            containerSize="100%"
            style={{ width: "100%", height: "100%" }}
            lineWidth="2px"
            lineHeight="28px"
            baseAngle={-8}
            lineColor="rgba(90, 70, 150, 0.28)"
          />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="relative z-10">
            <h1 className="text-[32px] leading-tight font-medium tracking-tight sm:text-5xl">
              Are we investing in technology before properly understanding the
              problem?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 sm:text-lg">
              We help organisations understand how they work, identify what isn&apos;t
              working, and create clarity around what needs to change — before
              investing in technology.
            </p>
            <p className="mt-8">
              <a
                href="#question"
                className="text-sm font-semibold tracking-wide hover:underline"
              >
                Explore the question ↓
              </a>
            </p>
          </div>
          <div className="relative z-10">
            <Logo variant="light" className="h-auto w-full max-w-md justify-self-center" />
          </div>
        </div>
      </section>

      <ProblemsGallery />

      <ScrollJourneyLine>
        <section className="bg-yellow">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <p className="text-xs font-semibold tracking-[0.2em]">OUR BELIEF</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Don&apos;t Automate Confusion.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8">
              Automating a broken process doesn&apos;t fix it. Digitising unclear
              responsibilities doesn&apos;t create accountability. Building technology
              around poorly defined requirements doesn&apos;t guarantee the right
              solution.
            </p>
            <p className="mt-10 max-w-2xl border-l-2 border-foreground pl-5 text-2xl font-medium">
              Understanding comes before implementation.
            </p>
            <div className="mt-10">
              <CtaButton className="bg-foreground text-background hover:bg-foreground/90" />
            </div>
          </div>
        </section>

        <section className="bg-blue-tint">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
            <p className="mt-3 max-w-2xl text-lg">
              Six stages. Always in this order. Understanding first — then change.
            </p>
            <div className="mt-14">
              <HowWeWorkGallery />
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <p className="text-xs font-semibold tracking-[0.22em]">
              PEOPLE • PROCESS • TECHNOLOGY
            </p>
            <div className="mt-14 grid gap-12 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="text-base leading-7">{pillar.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-12">
              <TextLink href="/what-we-do">How We Can Help →</TextLink>
            </p>
          </div>
        </section>

        <section id="who-we-work-with" className="bg-lilac">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <h2 className="text-3xl font-semibold tracking-tight">Who we work with</h2>
            <ul className="mt-14 grid gap-12 md:grid-cols-2">
              {audiences.map((audience) => (
                <li key={audience.title} className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{audience.title}</h3>
                  <p className="text-base leading-7">{audience.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight">Insights</h2>
              <TextLink href="/insights">All insights →</TextLink>
            </div>
            <div className="mt-10">
              <HomeInsightsPreview />
            </div>
          </div>
        </section>

        <section className="bg-lilac">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Before you invest in the solution, can you clearly define the problem?
            </h2>
            <p className="mt-8">
              <CtaButton>If not, let&apos;s start there →</CtaButton>
            </p>
          </div>
        </section>
      </ScrollJourneyLine>
    </>
  );
}
