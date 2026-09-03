"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProblemIcon } from "@/components/Graphics";
import { CORE_QUESTION, problems } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const cardCornerStyles = [
  { borderTopLeftRadius: "clamp(1.5rem, 5vw, 64px)" },
  {
    borderTopRightRadius: "clamp(1.5rem, 5vw, 64px)",
    borderBottomLeftRadius: "clamp(1rem, 2.5vw, 32px)",
  },
  { borderRadius: "clamp(1rem, 2.5vw, 32px)" },
] as const;

const cardColorStyles = [
  {
    backgroundColor: "var(--lilac)",
    borderColor: "var(--black)",
    color: "var(--black)",
    iconClassName: "",
  },
  {
    backgroundColor: "var(--blue)",
    borderColor: "var(--black)",
    color: "var(--black)",
    iconClassName: "",
  },
  {
    backgroundColor: "var(--yellow)",
    borderColor: "var(--black)",
    color: "var(--black)",
    iconClassName: "",
  },
  {
    backgroundColor: "var(--black)",
    borderColor: "var(--white)",
    color: "var(--white)",
    iconClassName: "invert",
  },
  {
    backgroundColor: "var(--white)",
    borderColor: "var(--black)",
    color: "var(--black)",
    iconClassName: "",
  },
] as const;

export function ProblemsGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
          let initialFrame: number | null = null;
          let retryFrame: number | null = null;
          let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
          let pinTrigger: ScrollTrigger | undefined;
          let galleryTween: gsap.core.Tween | undefined;
          let hasRetried = false;

          const getDistance = () => {
            const viewport = viewportRef.current;
            const track = trackRef.current;

            if (!viewport || !track) {
              return 0;
            }

            return Math.max(0, track.scrollWidth - viewport.offsetWidth);
          };

          const setup = () => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            const pin = pinRef.current;

            if (!viewport || !track || !pin) {
              return;
            }

            const distance = getDistance();

            if (distance === 0 && !hasRetried) {
              hasRetried = true;
              retryFrame = requestAnimationFrame(() => {
                retryFrame = null;
                setup();
              });
              return;
            }

            if (distance === 0) {
              return;
            }

            galleryTween = gsap.to(track, {
              x: () => -getDistance(),
              ease: "none",
              scrollTrigger: {
                trigger: pin,
                pin: true,
                start: "top top",
                end: () => `+=${getDistance()}`,
                scrub: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
            pinTrigger = galleryTween.scrollTrigger ?? undefined;

            ScrollTrigger.refresh();
          };

          initialFrame = requestAnimationFrame(() => {
            initialFrame = null;
            setup();
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
            if (initialFrame !== null) {
              cancelAnimationFrame(initialFrame);
            }
            if (retryFrame !== null) {
              cancelAnimationFrame(retryFrame);
            }
            if (resizeTimeout) {
              clearTimeout(resizeTimeout);
            }

            window.removeEventListener("resize", handleResize);
            pinTrigger?.kill();
            galleryTween?.kill();
          };
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="question" className="bg-background">
      <div ref={pinRef} className="overflow-x-hidden">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Technology isn&apos;t always the answer.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8">
            {CORE_QUESTION} Sometimes the work is broken long before a system is
            chosen. These are the problems we see first.
          </p>

          <div ref={viewportRef} className="mt-16 overflow-hidden">
            <div
              ref={trackRef}
              className="flex flex-row gap-6 md:gap-8"
            >
              {problems.map((problem, index) => (
                <article
                  key={problem.title}
                  style={{
                    ...cardCornerStyles[index % cardCornerStyles.length],
                    ...cardColorStyles[index % cardColorStyles.length],
                  }}
                  className="flex min-h-64 w-[min(65vw,16rem)] shrink-0 flex-col border p-4 md:min-h-64 md:w-[min(22vw,16rem)] md:p-5"
                >
                  <div className="flex items-start justify-between gap-6">
                    <ProblemIcon
                      index={index}
                      className={`size-10 ${cardColorStyles[index % cardColorStyles.length].iconClassName}`}
                    />
                    <p className="text-sm font-semibold tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="mt-auto pt-8">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {problem.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6">{problem.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsGallery;