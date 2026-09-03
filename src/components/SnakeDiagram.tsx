import { approachStages } from "@/data/approach";
import { Separator } from "@/components/ui/separator";

export function SnakeDiagram({
  expanded = false,
}: {
  expanded?: boolean;
  theme?: "dark" | "light";
}) {
  return (
    <ol className="grid gap-x-12 gap-y-12 md:grid-cols-3">
      {approachStages.map((stage, index) => (
        <li key={stage.number} className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-[0.18em]">{stage.number}</p>
          <h3 className="text-2xl font-semibold tracking-tight">{stage.title}</h3>
          <p className="font-medium">{stage.question}</p>
          <p className="text-base leading-7">
            {expanded ? stage.expanded : stage.summary}
          </p>
          {index < approachStages.length - 1 ? (
            <Separator className="mt-4 md:hidden" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
