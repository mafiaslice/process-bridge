import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 44,
            height: 28,
            borderTop: "6px solid #FFFFFF",
            borderLeft: "6px solid #FFFFFF",
            borderRight: "6px solid #FFFFFF",
            borderRadius: "22px 22px 0 0",
          }}
        />
      </div>
    ),
    size,
  );
}
