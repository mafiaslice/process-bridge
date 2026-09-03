"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type MagnetLinesProps = {
  rows?: number;
  columns?: number;
  containerSize?: string;
  style?: CSSProperties;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
};

export function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  style,
  lineColor = "rgba(90, 70, 150, 0.28)",
  lineWidth = "1vw",
  lineHeight = "5vw",
  baseAngle = -10,
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const magnets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-magnet-line]"),
    );

    const handlePointerMove = (event: PointerEvent) => {
      magnets.forEach((magnet) => {
        const rect = magnet.getBoundingClientRect();
        const magnetX = rect.left + rect.width / 2;
        const magnetY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - magnetY, event.clientX - magnetX) * (180 / Math.PI);
        magnet.style.setProperty("--rotate", `${angle + baseAngle}deg`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [baseAngle, columns, rows]);

  const containerStyle = {
    width: containerSize,
    height: containerSize,
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      ...style,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="grid"
      style={containerStyle}
    >
      {Array.from({ length: rows * columns }, (_, index) => (
        <span
          key={index}
          data-magnet-line
          className="flex items-center justify-center"
        >
          <span
            className="block origin-center rounded-full"
            style={{
              width: lineWidth,
              height: lineHeight,
              backgroundColor: lineColor,
              transform: `rotate(var(--rotate, ${baseAngle}deg))`,
              transition: "transform 180ms ease-out",
            }}
          />
        </span>
      ))}
    </div>
  );
}

export default MagnetLines;