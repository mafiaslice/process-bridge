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
        <svg viewBox="0 -960 960 960" {...common}>
          <path
            d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"
            fill={stroke}
            stroke="none"
          />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 -960 960 960" {...common}>
          <path
            d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"
            fill={stroke}
            stroke="none"
          />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 -960 960 960" {...common}>
          <path
            d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM287-327l-57-56 57-57H80v-80h207l-57-57 57-56 153 153-153 153Zm386 0L520-480l153-153 57 56-57 57h207v80H673l57 57-57 56ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"
            fill={stroke}
            stroke="none"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 -960 960 960" {...common}>
          <path
            d="M120-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T360-790v84q-72 26-116 88.5T200-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H120Zm331.5-131.5Q440-303 440-320t11.5-28.5Q463-360 480-360t28.5 11.5Q520-337 520-320t-11.5 28.5Q497-280 480-280t-28.5-11.5ZM440-440v-240h80v240h-80Zm160 270v-84q72-26 116-88.5T760-482q0-45-17-87.5T690-648l-10-10v98h-80v-240h240v80H730l16 14q49 49 71.5 106.5T840-482q0 111-66.5 197.5T600-170Z"
            fill={stroke}
            stroke="none"
          />
        </svg>
      );
  }
}
