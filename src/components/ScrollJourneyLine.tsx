"use client";

import { type ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollJourneyLineProps = {
  children: ReactNode;
};

export function ScrollJourneyLine({ children }: ScrollJourneyLineProps) {
  const rangeRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;

      if (!path) {
        return;
      }

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(path, { strokeDashoffset: 0 });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        let refreshFrame: number | null = null;
        let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

        const journeyTween = gsap.fromTo(
          path,
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: rangeRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );

        refreshFrame = requestAnimationFrame(() => {
          refreshFrame = null;
          ScrollTrigger.refresh();
        });

        const handleResize = () => {
          if (resizeTimeout) {
            clearTimeout(resizeTimeout);
          }

          resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            ScrollTrigger.refresh();
          }, 100);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          if (refreshFrame !== null) {
            cancelAnimationFrame(refreshFrame);
          }
          if (resizeTimeout) {
            clearTimeout(resizeTimeout);
          }

          window.removeEventListener("resize", handleResize);
          journeyTween.scrollTrigger?.kill();
          journeyTween.kill();
        };
      });
    }, rangeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rangeRef} className="relative isolate overflow-hidden">
      <div className="relative z-10">{children}</div>
      <svg
        className="pointer-events-none absolute inset-y-0 right-0 z-20 h-full w-[min(24vw,16rem)] opacity-60"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
        fill="none"
      >
        <path
          ref={pathRef}
          className="journey-line-path"
          d="M88 0 C100 95 72 175 90 260 C100 345 76 430 90 515 C100 600 74 685 90 770 C100 850 76 925 88 1000"
          pathLength="1"
          stroke="var(--blue)"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset="1"
        />
      </svg>
    </div>
  );
}

export default ScrollJourneyLine;