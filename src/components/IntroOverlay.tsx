"use client";

import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { INTRO_STORAGE_KEY } from "@/data/site";

const TOTAL = 5;

export function IntroOverlay() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(INTRO_STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  const finish = useCallback(() => {
    try {
      window.localStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      /* ignore quota / private mode */
    }
    setVisible(false);
  }, []);

  const advance = useCallback(() => {
    setStep((current) => {
      if (current >= TOTAL - 1) {
        finish();
        return current;
      }
      return current + 1;
    });
  }, [finish]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        finish();
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        advance();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [visible, advance, finish]);

  if (visible !== true) {
    return visible === null ? (
      <div className="fixed inset-0 z-50 bg-ink" aria-hidden="true" />
    ) : null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Introduction"
    >
      <div className="flex items-center justify-between px-5 py-5 md:px-10">
        <Logo variant="light" className="h-9 w-auto" />
        <button
          type="button"
          onClick={finish}
          className="text-sm font-medium text-muted underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow"
        >
          Skip intro
        </button>
      </div>

      <button
        type="button"
        onClick={advance}
        className="flex min-h-0 flex-1 flex-col items-start justify-center px-5 text-left md:px-16 lg:px-24"
      >
        <IntroScreen step={step} />
      </button>

      <div className="flex items-center justify-between px-5 py-5 text-xs text-muted md:px-10">
        <p>
          {String(step + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </p>
        <p>Click, Enter or Space to continue</p>
      </div>
    </div>
  );
}

function IntroScreen({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="max-w-4xl">
        <p className="text-[28px] leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl">
          Are we investing in{" "}
          <em className="font-serif-italic font-normal text-yellow">technology</em>{" "}
          before properly understanding{" "}
          <em className="font-serif-italic font-normal text-yellow">the problem?</em>
        </p>
        <p className="mt-10 text-sm font-medium tracking-wide text-yellow">
          Explore the question ↓
        </p>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Technology isn&apos;t always the answer.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          Organisations invest in automation, AI and software faster than ever.
          The real question is whether they understand the problem those tools
          are being asked to solve.
        </p>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="max-w-3xl">
        <div className="space-y-4 text-2xl text-muted sm:text-3xl">
          <p className="intro-reveal">Before you automate it.</p>
          <p className="intro-reveal">Before you digitise it.</p>
          <p className="intro-reveal">Before you build it.</p>
          <p className="intro-reveal font-serif-italic text-4xl text-yellow sm:text-6xl">
            Understand it.
          </p>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Sometimes, the problem isn&apos;t technology.
        </h2>
        <ul className="mt-8 space-y-3 text-lg text-muted">
          <li>The process is broken</li>
          <li>Responsibilities are unclear</li>
          <li>Knowledge lives in people&apos;s heads</li>
          <li>Stakeholders aren&apos;t aligned</li>
          <li>The wrong problem is being solved</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <Logo variant="light" className="mb-8 h-14 w-auto" />
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        We are Process Bridge.
      </h2>
      <p className="mt-4 text-2xl text-lilac">{TAGLINE_LOCAL}</p>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        We help organisations understand how they work, identify what isn&apos;t
        working, and create clarity around what needs to change — before
        investing in technology.
      </p>
      <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-yellow">
        PEOPLE • PROCESS • TECHNOLOGY
      </p>
      <p className="mt-10 text-base font-semibold text-yellow">Enter the site →</p>
    </div>
  );
}

const TAGLINE_LOCAL = "Aligning People, Process & Technology.";
