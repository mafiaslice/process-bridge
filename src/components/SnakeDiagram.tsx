import { approachStages, type ApproachStage } from "@/data/approach";

function StageCard({
  stage,
  expanded,
  theme,
}: {
  stage: ApproachStage;
  expanded?: boolean;
  theme: "dark" | "light";
}) {
  const light = theme === "light";
  return (
    <article
      className={`h-full rounded-[2px] border p-5 ${
        light ? "border-pale bg-white" : "border-white/10 bg-charcoal/40"
      }`}
    >
      <p className={`text-xs font-semibold tracking-[0.2em] ${light ? "text-charcoal" : "text-yellow"}`}>
        {stage.number}
      </p>
      <h3 className={`mt-2 text-xl font-semibold ${light ? "text-ink" : "text-white"}`}>
        {stage.title}
      </h3>
      <p className={`mt-2 text-sm font-medium ${light ? "text-charcoal" : "text-lilac"}`}>
        {stage.question}
      </p>
      <p className={`mt-2 text-sm leading-6 ${light ? "text-charcoal" : "text-muted"}`}>
        {expanded ? stage.expanded : stage.summary}
      </p>
    </article>
  );
}

function Arrow({
  direction = "right",
}: {
  direction?: "right" | "left" | "down";
}) {
  const label =
    direction === "down" ? "↓" : direction === "left" ? "←" : "→";
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center text-yellow"
    >
      <span className="text-lg">{label}</span>
    </div>
  );
}

export function SnakeDiagram({
  expanded = false,
  theme = "dark",
}: {
  expanded?: boolean;
  theme?: "dark" | "light";
}) {
  const top = approachStages.slice(0, 3);
  const bottom = [...approachStages.slice(3, 6)].reverse();

  return (
    <div>
      {/* Mobile: single vertical column */}
      <ol className="grid gap-3 md:hidden">
        {approachStages.map((stage, index) => (
          <li key={stage.number}>
            <StageCard stage={stage} expanded={expanded} theme={theme} />
            {index < approachStages.length - 1 ? (
              <div className="flex justify-center py-1 text-yellow" aria-hidden="true">
                ↓
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Desktop: 3 + 3 snake, no horizontal scroll */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3">
          <StageCard stage={top[0]} expanded={expanded} theme={theme} />
          <Arrow />
          <StageCard stage={top[1]} expanded={expanded} theme={theme} />
          <Arrow />
          <StageCard stage={top[2]} expanded={expanded} theme={theme} />
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] py-2">
          <div />
          <div />
          <div />
          <div />
          <Arrow direction="down" />
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3">
          <StageCard stage={bottom[0]} expanded={expanded} theme={theme} />
          <Arrow direction="left" />
          <StageCard stage={bottom[1]} expanded={expanded} theme={theme} />
          <Arrow direction="left" />
          <StageCard stage={bottom[2]} expanded={expanded} theme={theme} />
        </div>
      </div>
    </div>
  );
}
