import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Process Bridge — Aligning People, Process & Technology";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#F8D97A", fontSize: 22, letterSpacing: 4 }}>
          PROCESS BRIDGE
        </div>
        <div style={{ fontSize: 56, marginTop: 24, maxWidth: 900, lineHeight: 1.15 }}>
          Aligning People, Process & Technology.
        </div>
        <div style={{ color: "#D4CAF7", fontSize: 28, marginTop: 28 }}>
          Understand first. Build second.
        </div>
      </div>
    ),
    size,
  );
}
