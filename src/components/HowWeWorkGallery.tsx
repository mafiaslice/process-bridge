"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { approachStages } from "@/data/approach";

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
  { backgroundColor: "var(--lilac)", borderColor: "var(--black)", color: "var(--black)" },
  { backgroundColor: "var(--blue)", borderColor: "var(--black)", color: "var(--black)" },
  { backgroundColor: "var(--yellow)", borderColor: "var(--black)", color: "var(--black)" },
  { backgroundColor: "var(--black)", borderColor: "var(--white)", color: "var(--white)" },
  { backgroundColor: "var(--white)", borderColor: "var(--black)", color: "var(--black)" },
] as const;

export function HowWeWorkGallery() {
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
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="overflow-x-hidden">
      <div ref={pinRef}>
        <div ref={viewportRef} className="overflow-hidden">
          <div ref={trackRef} className="flex flex-row gap-6 md:gap-8">
            {approachStages.map((stage, index) => (
              <article
                key={stage.number}
                style={{
                  ...cardCornerStyles[index % cardCornerStyles.length],
                  ...cardColorStyles[index % cardColorStyles.length],
                }}
                className="flex min-h-64 w-[min(65vw,16rem)] shrink-0 flex-col border p-4 md:min-h-64 md:w-[min(22vw,16rem)] md:p-5"
              >
                <div className="flex min-h-10 items-start justify-end">
                  <p className="text-sm font-semibold tracking-[0.18em]">{stage.number}</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold tracking-tight">{stage.title}</h3>
                  <p className="mt-3 text-sm font-medium">{stage.question}</p>
                  <p className="mt-3 text-sm leading-6">{stage.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWorkGallery;