"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { gsap } from "gsap";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: ReactNode | string;
  logoAlt?: string;
  items: readonly PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
}

function matchesActiveHref(href: string, activeHref?: string) {
  if (!activeHref) return false;
  if (href.startsWith("/#")) return activeHref === "/";

  const path = href.split("#")[0];
  return activeHref === path || activeHref.startsWith(`${path}/`);
}

export function PillNav({
  logo,
  logoAlt = "Process Bridge",
  items,
  activeHref,
  className = "",
  ease = "power3.out",
  baseColor = "#000000",
  pillColor = "#d4caf7",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#000000",
  initialLoadAnimation = true,
}: PillNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const timelineRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuId = useId();

  const cssVars = {
    "--pill-base": baseColor,
    "--pill-bg": pillColor,
    "--pill-hover-text": hoveredPillTextColor,
    "--pill-text": pillTextColor,
  } as CSSProperties;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timelines = timelineRefs.current;
    const activeTweens = activeTweenRefs.current;
    const logoNode = logoRef.current;
    const navItemsNode = navItemsRef.current;

    const layoutPills = () => {
      circleRefs.current.forEach((circle, index) => {
        const pill = circle?.parentElement as HTMLElement | null;
        if (!circle || !pill) return;

        const { width, height } = pill.getBoundingClientRect();
        const radius = (width * width / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta = Math.ceil(
          radius - Math.sqrt(Math.max(0, radius * radius - width * width / 4)),
        ) + 1;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;
        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${diameter - delta}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");
        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: height + 20, opacity: 0 });

        timelines[index]?.kill();
        const timeline = gsap.timeline({ paused: true });
        timeline.to(circle, {
          scale: 1.2,
          duration: 0.8,
          ease,
          overwrite: "auto",
        }, 0);
        if (label) {
          timeline.to(label, {
            y: -(height + 8),
            duration: 0.6,
            ease,
            overwrite: "auto",
          }, 0);
        }
        if (hoverLabel) {
          timeline.to(hoverLabel, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease,
            overwrite: "auto",
          }, 0);
        }
        timelines[index] = timeline;
      });
    };

    layoutPills();
    const onResize = () => layoutPills();
    window.addEventListener("resize", onResize);

    if (initialLoadAnimation && !reduceMotion) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current?.querySelectorAll("li");
      if (logo) {
        gsap.set(logo, { scale: 0.8, opacity: 0 });
        gsap.to(logo, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }
      if (navItems?.length) {
        gsap.set(navItems, { opacity: 0, x: -16 });
        gsap.to(navItems, {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
      timelines.forEach((timeline) => timeline?.kill());
      activeTweens.forEach((tween) => tween?.kill());
      if (logoNode) gsap.killTweensOf(logoNode);
      if (navItemsNode) gsap.killTweensOf(navItemsNode.querySelectorAll("li"));
    };
  }, [ease, initialLoadAnimation, items]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(menu, { display: isMobileMenuOpen ? "block" : "none", opacity: 1, y: 0 });
      return;
    }

    if (isMobileMenuOpen) {
      gsap.set(menu, { display: "block", opacity: 0, y: -12 });
      gsap.to(menu, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [isMobileMenuOpen]);

  const animatePill = (index: number, entering: boolean) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeline = timelineRefs.current[index];
    if (!timeline) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(entering ? timeline.duration() : 0, {
      duration: entering ? 0.4 : 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const logoContent = typeof logo === "string" ? (
    <Image
      src={logo}
      alt={logoAlt}
      width={104}
      height={46}
      className="h-auto w-[104px] object-contain"
    />
  ) : (
    <span aria-label={logoAlt}>{logo}</span>
  );

  return (
    <div
      ref={containerRef}
      className={`relative z-40 w-full ${className}`}
      style={cssVars}
    >
      <nav className="flex items-center justify-between gap-3" aria-label="Primary">
        <div
          ref={logoRef}
          className="flex h-12 shrink-0 items-center rounded-full px-4"
          style={{ background: "var(--pill-base)" }}
        >
          <Link
            href="/"
            className="flex items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            {logoContent}
          </Link>
        </div>

        <div
          ref={navItemsRef}
          className="hidden min-[1180px]:flex items-center rounded-full p-1.5"
          style={{ background: "var(--pill-base)" }}
        >
          <ul className="m-0 flex h-9 list-none items-stretch gap-1 p-0" role="menubar">
            {items.map((item, index) => {
              const isActive = matchesActiveHref(item.href, activeHref);
              return (
                <li key={item.href} className="flex items-center" role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    aria-label={item.ariaLabel || item.label}
                    aria-current={isActive ? "page" : undefined}
                    className="relative inline-flex h-full items-center justify-center overflow-hidden rounded-full px-4 text-xs font-semibold uppercase tracking-[0.12em] no-underline focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    style={{
                      background: "var(--pill-bg)",
                      color: "var(--pill-text)",
                    }}
                    onMouseEnter={() => animatePill(index, true)}
                    onMouseLeave={() => animatePill(index, false)}
                    onFocus={() => animatePill(index, true)}
                    onBlur={() => animatePill(index, false)}
                  >
                    <span
                      className="absolute bottom-0 left-1/2 z-[1] block rounded-full"
                      style={{
                        background: "var(--pill-base)",
                        willChange: "transform",
                      }}
                      aria-hidden="true"
                      ref={(element) => {
                        circleRefs.current[index] = element;
                      }}
                    />
                    <span className="relative z-[2] inline-block overflow-hidden py-1 leading-none">
                      <span className="pill-label relative z-[2] inline-block" aria-hidden="true">
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-1 z-[3] inline-block w-full text-center"
                        style={{
                          color: "var(--pill-hover-text)",
                          willChange: "transform, opacity",
                        }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-1/2 z-[4] h-1 w-1 -translate-x-1/2 rounded-full"
                        style={{ background: "var(--pill-base)" }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-background transition-transform active:scale-90 min-[1180px]:hidden"
          style={{ background: "var(--pill-base)" }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        id={mobileMenuId}
        className="absolute left-0 right-0 top-full mt-2 hidden overflow-hidden rounded-3xl p-2 shadow-2xl min-[1180px]:hidden"
        style={{ background: "var(--pill-base)" }}
      >
        <ul className="m-0 flex list-none flex-col gap-1 p-0" role="menu">
          {items.map((item) => {
            const isActive = matchesActiveHref(item.href, activeHref);
            return (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-2xl px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background ${
                    isActive
                      ? "bg-lilac text-foreground"
                      : "text-background hover:bg-background/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PillNav;