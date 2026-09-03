import { HomeInsightsPreview } from "@/components/InsightsList";
import { BridgeGlow, ProblemIcon } from "@/components/Graphics";
import { IntroOverlay } from "@/components/IntroOverlay";
import { Logo } from "@/components/Logo";
import { SnakeDiagram } from "@/components/SnakeDiagram";
import { CtaButton, TextLink } from "@/components/CtaButton";
import { audiences, CORE_QUESTION, pillars, problems } from "@/data/site";
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
      <IntroOverlay />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <Logo variant="light" className="mb-8 h-14 w-auto" />
            <h1 className="text-[32px] leading-tight font-medium tracking-tight sm:text-5xl">
              Are we investing in{" "}
              <em className="font-serif-italic font-normal text-yellow">technology</em>{" "}
              before properly understanding{" "}
              <em className="font-serif-italic font-normal text-yellow">the problem?</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              We help organisations understand how they work, identify what isn&apos;t
              working, and create clarity around what needs to change — before
              investing in technology.
            </p>
            <p className="mt-8">
              <a
                href="#question"
                className="text-sm font-semibold tracking-wide text-yellow hover:underline"
              >
                Explore the question ↓
              </a>
            </p>
          </div>
          <BridgeGlow className="h-auto w-full" />
        </div>
      </section>

      <section id="question" className="bg-fog text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Technology isn&apos;t always the answer.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal">
            {CORE_QUESTION} Sometimes the work is broken long before a system is
            chosen. These are the problems we see first.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {problems.map((problem, index) => (
              <li key={problem.title} className="rounded-[2px] border border-pale bg-white p-5">
                <ProblemIcon index={index} />
                <h3 className="mt-4 text-base font-semibold">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal">{problem.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-yellow">OUR BELIEF</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Don&apos;t Automate Confusion.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Automating a broken process doesn&apos;t fix it. Digitising unclear
            responsibilities doesn&apos;t create accountability. Building technology
            around poorly defined requirements doesn&apos;t guarantee the right
            solution.
          </p>
          <blockquote className="mt-10 max-w-2xl border-l-2 border-yellow pl-5 font-serif-italic text-2xl text-lilac">
            Understanding comes before implementation.
          </blockquote>
          <div className="mt-10">
            <CtaButton />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Six stages. Always in this order. Understanding first — then change.
          </p>
          <div className="mt-10">
            <SnakeDiagram />
          </div>
        </div>
      </section>

      <section className="bg-fog text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs font-semibold tracking-[0.22em] text-charcoal">
            PEOPLE • PROCESS • TECHNOLOGY
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[2px] border border-pale bg-white p-6">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal">{pillar.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10">
            <TextLink href="/what-we-do">How We Can Help →</TextLink>
          </p>
        </div>
      </section>

      <section id="who-we-work-with" className="bg-white text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Who we work with</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {audiences.map((audience) => (
              <li key={audience.title} className="rounded-[2px] border border-pale bg-fog p-6">
                <h3 className="text-lg font-semibold">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal">{audience.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">Insights</h2>
            <TextLink href="/insights">All insights →</TextLink>
          </div>
          <div className="mt-10">
            <HomeInsightsPreview />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Before you invest in the solution, can you clearly define the problem?
          </h2>
          <p className="mt-8">
            <CtaButton>If not, let&apos;s start there →</CtaButton>
          </p>
        </div>
      </section>
    </>
  );
}
