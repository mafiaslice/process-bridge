"use client";

import { useEffect, useId, useRef } from "react";
import type { Service } from "@/data/services";

type ServiceModalProps = {
  service: Service;
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const midpoint = Math.ceil(service.includes.length / 2);
  const left = service.includes.slice(0, midpoint);
  const right = service.includes.slice(midpoint);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2px] bg-fog p-6 text-ink shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-charcoal">
            {service.number}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-[2px] px-2 py-1 text-sm font-medium text-charcoal hover:bg-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Close
            <span aria-hidden="true"> ×</span>
          </button>
        </div>
        <h2 id={titleId} className="mt-3 text-3xl font-semibold tracking-tight">
          {service.title}
        </h2>
        <p className="mt-2 font-serif-italic text-xl text-charcoal">
          {service.tagline}
        </p>
        <p className="mt-5 text-base leading-7 text-charcoal">{service.description}</p>
        <h3 className="mt-8 text-xs font-semibold tracking-[0.18em] text-ink">
          SERVICES INCLUDE
        </h3>
        <div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          <ul className="space-y-2 text-sm leading-6 text-charcoal">
            {left.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm leading-6 text-charcoal">
            {right.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
