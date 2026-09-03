import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy",
  description: "How Process Bridge handles information you share with us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-fog text-ink">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy</h1>
        <p className="mt-6 text-charcoal leading-7">
          This is a placeholder policy for the Process Bridge website. When you
          use the Start With Clarity form, we store the details you submit so we
          can reply. We do not sell that information. We do not embed third-party
          advertising or analytics keys in this site.
        </p>
        <p className="mt-4 text-charcoal leading-7">
          Questions about your data can be sent through the same form. A fuller
          policy will replace this page before public launch.
        </p>
      </div>
    </section>
  );
}
