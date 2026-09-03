"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProblemIcon } from "@/components/Graphics";
import { CORE_QUESTION, problems } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function ProblemsGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    let context: gsap.Context | null = null;
    let trigger: ScrollTrigger | null = null;
    let setupFrame = 0;
    let resizeFrame = 0;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;
    let active = true;

    const clearAnimation = () => {
      trigger?.kill();
      trigger = null;
      context?.revert();
      context = null;
      gsap.set(track, { x: 0 });
    };

    const setupAnimation = (retryIfEmpty: boolean) => {
      if (!active) {
        return;
      }

      clearAnimation();

      if (track.scrollWidth === 0 && retryIfEmpty) {
        retryTimer = setTimeout(() => setupAnimation(false), 80);
        return;
      }

      const horizontalDistance = Math.max(
        0,
        track.scrollWidth - viewport.offsetWidth,
      );

      if (horizontalDistance === 0) {
        return;
      }

      context = gsap.context(() => {
        const tween = gsap.to(track, {
          x: () => -Math.max(0, track.scrollWidth - viewport.offsetWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${Math.max(0, track.scrollWidth - viewport.offsetWidth)}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        trigger = tween.scrollTrigger ?? null;
      }, section);

      ScrollTrigger.refresh();
    };

    setupFrame = requestAnimationFrame(() => setupAnimation(true));

    const handleResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => setupAnimation(true));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      active = false;
      cancelAnimationFrame(setupFrame);
      cancelAnimationFrame(resizeFrame);
      if (retryTimer) {
        clearTimeout(retryTimer);
      }
      window.removeEventListener("resize", handleResize);
      clearAnimation();
    };
  }, []);

  return (
    <section
      id="question"
      ref={sectionRef}
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:flex md:min-h-[620px] md:items-center md:px-8 md:py-24">
        <div className="grid w-full gap-12 md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.8fr)] md:items-center md:gap-14">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology isn&apos;t always the answer.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8">
              {CORE_QUESTION} Sometimes the work is broken long before a system
              is chosen. These are the problems we see first.
            </p>
          </div>

          <div
            ref={viewportRef}
            className="problems-gallery-viewport overflow-x-auto md:overflow-x-hidden"
          >
            <ol ref={trackRef} className="problems-gallery-track">
              {problems.map((problem, index) => (
                <li
                  key={problem.title}
                  className="problems-gallery-card w-[min(82vw,22rem)] shrink-0 snap-start border border-black bg-white p-7 sm:p-8 md:w-[min(31vw,22rem)]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <ProblemIcon index={index} className="size-12" />
                    <p className="text-sm font-semibold tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="mt-16">
                    <h3 className="text-xl font-semibold">{problem.title}</h3>
                    <p className="mt-4 text-base leading-7">{problem.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
