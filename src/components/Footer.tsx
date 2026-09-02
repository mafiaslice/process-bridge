import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";
import { footerCompany, footerInsights, TAGLINE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-grey">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">{TAGLINE}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            What We Do
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.number}>
                <Link href="/what-we-do" className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Insights
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerInsights.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Process Bridge. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
