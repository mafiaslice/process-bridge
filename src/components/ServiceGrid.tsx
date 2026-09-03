"use client";

import { services, type Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

function ServiceDetail({ service }: { service: Service }) {
  const midpoint = Math.ceil(service.includes.length / 2);
  const left = service.includes.slice(0, midpoint);
  const right = service.includes.slice(midpoint);

  return (
    <>
      <DialogHeader>
        <Badge variant="secondary">{service.number}</Badge>
        <DialogTitle className="text-3xl font-semibold tracking-tight">
          {service.title}
        </DialogTitle>
        <DialogDescription className="text-lg text-foreground">
          {service.tagline}
        </DialogDescription>
      </DialogHeader>
      <p className="text-base leading-7">{service.description}</p>
      <h3 className="text-xs font-semibold tracking-[0.18em]">SERVICES INCLUDE</h3>
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        <ul className="flex flex-col gap-2 text-sm leading-6">
          {left.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-sm leading-6">
          {right.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function ServiceGrid() {
  return (
    <ul>
      {services.map((service) => (
        <li key={service.number}>
          <Dialog>
            <DialogTrigger className="flex w-full items-baseline gap-6 py-7 text-left transition-colors hover:bg-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
              <span className="w-10 shrink-0 text-sm font-semibold tracking-[0.18em]">
                {service.number}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-lg font-semibold">{service.title}</span>
                <span className="text-base">{service.tagline}</span>
              </span>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
              <ServiceDetail service={service} />
            </DialogContent>
          </Dialog>
          <Separator />
        </li>
      ))}
    </ul>
  );
}
