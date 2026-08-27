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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060504",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 34,
            height: 22,
            borderRadius: 4,
            background:
              "linear-gradient(180deg, #E8CE8B 0%, #C9A227 45%, #8A6A18 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
