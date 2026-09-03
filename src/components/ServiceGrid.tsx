"use client";

import { useRef, useState } from "react";
import { ServiceModal } from "@/components/ServiceModal";
import { services, type Service } from "@/data/services";

export function ServiceGrid() {
  const [active, setActive] = useState<Service | null>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function open(service: Service) {
    setActive(service);
  }

  function close() {
    const number = active?.number;
    setActive(null);
    if (number) {
      queueMicrotask(() => cardRefs.current[number]?.focus());
    }
  }

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.number}>
            <button
              type="button"
              ref={(node) => {
                cardRefs.current[service.number] = node;
              }}
              onClick={() => open(service)}
              className="flex h-full w-full flex-col rounded-[2px] border border-pale bg-white p-6 text-left transition-colors hover:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-charcoal">
                {service.number}
              </span>
              <span className="mt-4 text-lg font-semibold text-ink">{service.title}</span>
              <span className="mt-2 font-serif-italic text-sm text-charcoal">
                {service.tagline}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {active ? <ServiceModal service={active} onClose={close} /> : null}
    </>
  );
}
