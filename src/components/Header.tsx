"use client";

import { usePathname } from "next/navigation";
import { PillNav } from "@/components/PillNav";
import { navLinks } from "@/data/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-lilac">
      <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
        <PillNav
          logo="/logo.png"
          logoAlt="Process Bridge"
          items={navLinks}
          activeHref={pathname}
          baseColor="#000000"
          pillColor="#d4caf7"
          pillTextColor="#000000"
          hoveredPillTextColor="#ffffff"
        />
      </div>
    </header>
  );
}
