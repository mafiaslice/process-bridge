import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Start With Clarity",
  description:
    "Tell us what you are trying to solve. You do not need all the answers — start with the problem.",
  path: "/start-with-clarity",
});

export default function ContactPage() {
  return (
    <section className="bg-fog text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-charcoal">CONTACT</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Start With Clarity.
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal">
            Tell us what you&apos;re trying to solve. You don&apos;t need to have all
            the answers — start with the problem, and together we&apos;ll find the
            right path forward.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
