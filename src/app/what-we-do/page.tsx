import { ServiceGrid } from "@/components/ServiceGrid";
import { CtaButton } from "@/components/CtaButton";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "What We Do",
  description:
    "Business analysis, process documentation, mapping, audits, optimisation, requirements, SOPs, and business–technology alignment.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-yellow">WHAT WE DO</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Understand the work. Then change it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Eight practices. One sequence: see clearly, then decide. Open a
            service to see exactly what is included.
          </p>
        </div>
      </section>

      <section className="bg-fog text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <ServiceGrid />
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-muted">
            Start with the problem. We will help you find the right path forward.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  );
}
