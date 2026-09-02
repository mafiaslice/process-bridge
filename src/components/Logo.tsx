import { useId } from "react";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  title?: string;
};

function bowl(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
) {
  const o = `M ${cx - outer} ${cy} a ${outer} ${outer} 0 1 0 ${outer * 2} 0 a ${outer} ${outer} 0 1 0 ${-outer * 2} 0`;
  const i = `M ${cx - inner} ${cy} a ${inner} ${inner} 0 1 1 ${inner * 2} 0 a ${inner} ${inner} 0 1 1 ${-inner * 2} 0`;
  return `${o} ${i}`;
}

/**
 * Lockup: larger “bridge”, smaller “process” under an arch that joins the
 * elongated stems of b and d. No secondary wordmark is rendered beside it.
 */
export function Logo({
  variant = "light",
  className = "h-11 w-auto",
  title = "Process Bridge",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `pb-arch-${uid}`;
  const fill = variant === "light" ? "#FFFFFF" : "#000000";
  const flute = variant === "light" ? "#000000" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 420 168"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <clipPath id={clipId}>
          <path d="M34 62 C34 22 86 10 132 10 C178 10 230 22 230 62 L230 70 C230 34 178 22 132 22 C86 22 34 34 34 70 Z" />
        </clipPath>
      </defs>

      {/* Arch connecting b and d stems */}
      <path
        d="M34 62 C34 22 86 10 132 10 C178 10 230 22 230 62 L230 70 C230 34 178 22 132 22 C86 22 34 34 34 70 Z"
        fill={fill}
      />
      <g clipPath={`url(#${clipId})`} opacity="0.28">
        {Array.from({ length: 18 }, (_, i) => (
          <rect
            key={i}
            x={40 + i * 11}
            y={8}
            width="1.15"
            height="64"
            fill={flute}
          />
        ))}
      </g>

      <text
        x="132"
        y="58"
        textAnchor="middle"
        fill={fill}
        fontFamily="var(--font-outfit), Outfit, Avenir Next, Gotham, Century Gothic, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="2.4"
      >
        process
      </text>

      {/* Elongated pillars — stems of b and d */}
      <rect x="28" y="18" width="11" height="126" fill={fill} />
      <rect x="225" y="18" width="11" height="126" fill={fill} />

      {/* b bowl */}
      <path d={bowl(64, 122, 22, 11.5)} fill={fill} fillRule="evenodd" />
      <rect x="28" y="100" width="16" height="44" fill={fill} />

      {/* r */}
      <rect x="98" y="100" width="11" height="44" fill={fill} />
      <path
        d="M109 107 C118 98 136 99 140 112"
        stroke={fill}
        strokeWidth="11"
        strokeLinecap="square"
        fill="none"
      />

      {/* i */}
      <rect x="156" y="100" width="11" height="44" fill={fill} />
      <rect x="156" y="86" width="11" height="8" fill={fill} />

      {/* d bowl (stem is the right pillar) */}
      <path d={bowl(212, 122, 22, 11.5)} fill={fill} fillRule="evenodd" />
      <rect x="220" y="100" width="16" height="44" fill={fill} />

      {/* g — circular bowl, open descending loop */}
      <path d={bowl(280, 122, 22, 11.5)} fill={fill} fillRule="evenodd" />
      <path
        d="M302 122 V146 C302 160 288 168 272 164"
        stroke={fill}
        strokeWidth="11"
        strokeLinecap="square"
        fill="none"
      />

      {/* e — circular, horizontal bar */}
      <path d={bowl(344, 122, 22, 11.5)} fill={fill} fillRule="evenodd" />
      <rect x="328" y="116.5" width="32" height="11" fill={fill} />
    </svg>
  );
}

export function LogoMark({
  variant = "light",
  className = "h-8 w-8",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const fill = variant === "light" ? "#FFFFFF" : "#000000";
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
      <path
        d="M10 34 V18 C10 8 22 4 32 4 C42 4 54 8 54 18 V34"
        stroke={fill}
        strokeWidth="6"
        fill="none"
      />
      <rect x="7" y="16" width="6" height="26" fill={fill} />
      <rect x="51" y="16" width="6" height="26" fill={fill} />
    </svg>
  );
}
