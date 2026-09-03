import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import { services } from "@/data/services";
import { footerCompany, footerInsights, TAGLINE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <Separator />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Logo variant="dark" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-6">{TAGLINE}</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
            Company
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2.5">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
            What We Do
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.number}>
                <Link href="/what-we-do" className="hover:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2.5">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
            Insights
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {footerInsights.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Process Bridge. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
