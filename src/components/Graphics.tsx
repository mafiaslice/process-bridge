export function BridgeGlow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <radialGradient id="pb-glow-lilac" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#D4CAF7" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#D4CAF7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pb-glow-blue" cx="78%" cy="60%" r="45%">
          <stop offset="0%" stopColor="#96AED7" stopOpacity="0.45" />
          <stop offset="75%" stopColor="#96AED7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pb-glow-yellow" cx="22%" cy="70%" r="35%">
          <stop offset="0%" stopColor="#F8D97A" stopOpacity="0.28" />
          <stop offset="80%" stopColor="#F8D97A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="420" fill="url(#pb-glow-lilac)" />
      <rect width="640" height="420" fill="url(#pb-glow-blue)" />
      <rect width="640" height="420" fill="url(#pb-glow-yellow)" />
      <path
        d="M80 300 C80 160 200 88 320 88 C440 88 560 160 560 300"
        stroke="#D4CAF7"
        strokeWidth="2"
        opacity="0.85"
      />
      <path
        d="M120 300 C120 184 220 120 320 120 C420 120 520 184 520 300"
        stroke="#96AED7"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M160 300 C160 208 240 152 320 152 C400 152 480 208 480 300"
        stroke="#F8D97A"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <line x1="80" y1="300" x2="80" y2="360" stroke="#D4CAF7" strokeWidth="2" />
      <line x1="560" y1="300" x2="560" y2="360" stroke="#D4CAF7" strokeWidth="2" />
      <line x1="40" y1="360" x2="600" y2="360" stroke="#393939" strokeWidth="1" />
    </svg>
  );
}

export function PathField({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M20 140 C140 140 160 40 280 40 C400 40 420 160 540 160 C660 160 680 70 780 70"
        stroke="#96AED7"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M20 160 C150 160 170 70 300 70 C430 70 450 180 580 180 C700 180 720 90 780 90"
        stroke="#D4CAF7"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <path
        d="M20 120 C120 120 180 50 260 50"
        stroke="#F8D97A"
        strokeWidth="1.25"
        opacity="0.7"
      />
    </svg>
  );
}

export function ProblemIcon({
  index,
  className = "h-10 w-10",
}: {
  index: number;
  className?: string;
}) {
  const stroke = "#F8D97A";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    className,
    "aria-hidden": true,
  };

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 40 40" {...common}>
          <path d="M8 28 L20 10 L32 28 Z" />
          <path d="M20 18 V24" />
          <circle cx="20" cy="27.5" r="0.8" fill={stroke} />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 40 40" {...common}>
          <circle cx="14" cy="16" r="5" />
          <circle cx="26" cy="16" r="5" />
          <path d="M8 30 C8 24 11 22 14 22 C17 22 19 24 20 26 C21 24 23 22 26 22 C29 22 32 24 32 30" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 40 40" {...common}>
          <circle cx="20" cy="14" r="5" />
          <path d="M10 32 C10 25 14 22 20 22 C26 22 30 25 30 32" />
          <circle cx="30" cy="12" r="4" stroke="#96AED7" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 40 40" {...common}>
          <circle cx="12" cy="14" r="4" />
          <circle cx="28" cy="14" r="4" />
          <circle cx="20" cy="28" r="4" />
          <path d="M15 16 L18 26" />
          <path d="M25 16 L22 26" />
          <path d="M16 14 H24" stroke="#96AED7" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 40 40" {...common}>
          <rect x="8" y="8" width="24" height="24" />
          <path d="M14 20 H26" />
          <path d="M20 14 V26" />
        </svg>
      );
  }
}
