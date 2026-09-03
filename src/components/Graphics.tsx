export function BridgeGlow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M80 300 C80 160 200 88 320 88 C440 88 560 160 560 300"
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      <path
        d="M120 300 C120 184 220 120 320 120 C420 120 520 184 520 300"
        stroke="#96AED7"
        strokeWidth="2"
      />
      <path
        d="M160 300 C160 208 240 152 320 152 C400 152 480 208 480 300"
        stroke="#F8D97A"
        strokeWidth="1.75"
      />
      <line x1="80" y1="300" x2="80" y2="360" stroke="#FFFFFF" strokeWidth="3" />
      <line x1="560" y1="300" x2="560" y2="360" stroke="#FFFFFF" strokeWidth="3" />
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
      />
      <path
        d="M20 160 C150 160 170 70 300 70 C430 70 450 180 580 180 C700 180 720 90 780 90"
        stroke="#D4CAF7"
        strokeWidth="1.25"
      />
      <path
        d="M20 120 C120 120 180 50 260 50"
        stroke="#F8D97A"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function ProblemIcon({
  index,
  className = "size-10",
}: {
  index: number;
  className?: string;
}) {
  const stroke = "#000000";
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
        <svg viewBox="0 -960 960 960" {...common}>
          <path
            d="M792-56 686-160H260q-92 0-156-64T40-380q0-77 47.5-137T210-594q3-8 6-15.5t6-16.5L56-792l56-56 736 736-56 56ZM260-240h346L284-562q-2 11-3 21t-1 21h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm185-161Zm419 191-58-56q17-14 25.5-32.5T840-340q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-27 0-52 6.5T380-693l-58-58q35-24 74.5-36.5T480-800q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 39-15 72.5T864-210ZM593-479Z"
            fill="currentColor"
            stroke="none"
          />
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
          <circle cx="30" cy="12" r="4" />
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
          <path d="M16 14 H24" />
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
