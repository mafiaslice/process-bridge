import { BridgeGlow } from "@/components/Graphics";
import { structure, values } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "Process Bridge exists to help organisations create clarity by aligning people, processes and technology. Understand first. Build second.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-yellow">ABOUT</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              About Process Bridge.
            </h1>
            <p className="mt-6 font-serif-italic text-2xl text-lilac">
              Better solutions begin with better understanding.
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">
              Process Bridge is a business-analysis and process-improvement
              consulting firm. We work with organisations that are about to invest
              in change — and want to understand the work first.
            </p>
          </div>
          <BridgeGlow className="h-auto w-full" />
        </div>
      </section>

      <section className="bg-fog text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Story</h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-charcoal">
            <p>
              Too many organisations buy technology before they understand the
              work the technology is meant to support. The result is familiar:
              a system that encodes confusion, a programme that cannot say what
              problem it solved, and a team still carrying the real process in
              their heads.
            </p>
            <p>
              Process Bridge was founded to close that gap. We start with how
              people actually work, how processes actually run, and what the
              organisation is actually trying to achieve. Only then do we talk
              about what to build, buy, or change.
            </p>
            <p>
              We are building a practice for organisations across Africa and
              beyond — places where operational clarity is not a luxury, and
              where the cost of automating the wrong thing is paid in time,
              trust, and money that could have been spent on understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-charcoal">MISSION</h2>
            <p className="mt-4 text-2xl leading-8 font-medium">
              To help organisations create clarity, improve how they work and
              make better decisions by aligning people, processes and technology.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-charcoal">VISION</h2>
            <p className="mt-4 text-2xl leading-8 font-medium">
              To be a trusted consulting partner for organisations seeking
              better, more sustainable ways of working — across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-fog text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Values</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="rounded-[2px] border border-pale bg-white p-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">How the firm is structured</h2>
          <p className="mt-4 max-w-2xl text-muted">
            This is the intended future structure of the practice — not a claim
            about current headcount. It is how the work is organised as we grow.
          </p>
          <ol className="mt-10 space-y-4">
            {structure.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 rounded-[2px] border border-white/10 p-5 md:grid-cols-[auto_1fr] md:items-baseline"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-yellow">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
