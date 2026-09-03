import { CtaButton } from "@/components/CtaButton";
import { TextLink } from "@/components/CtaButton";

export default function NotFound() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-yellow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          This page isn&apos;t here.
        </h1>
        <p className="mt-4 text-muted">
          The address may have changed. Start from the homepage, or tell us what
          you were trying to solve.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <TextLink href="/">Back to the site →</TextLink>
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
