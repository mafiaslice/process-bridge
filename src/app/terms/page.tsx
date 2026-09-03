import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms",
  description: "Terms of use for the Process Bridge website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-fog text-ink">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Terms</h1>
        <p className="mt-6 text-charcoal leading-7">
          This is a placeholder for the website terms of use. Content on
          processbridge.org is provided for general information about Process
          Bridge and does not constitute advice until we have agreed an
          engagement in writing.
        </p>
        <p className="mt-4 text-charcoal leading-7">
          A complete set of terms will replace this page before public launch.
        </p>
      </div>
    </section>
  );
}
