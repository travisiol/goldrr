import { ImageResponse } from "next/og";

export const alt = "GOLDR — Trade Memes. Stack Gold.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#060504",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(201,162,39,0.28), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 180,
            height: 110,
            borderRadius: 10,
            background:
              "linear-gradient(180deg, #E8CE8B 0%, #C9A227 45%, #8A6A18 100%)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 96,
            color: "#F6F1E6",
            fontWeight: 600,
            letterSpacing: -2,
          }}
        >
          GOLDR
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 30,
            letterSpacing: 6,
            color: "#DCB95F",
            fontWeight: 600,
          }}
        >
          TRADE MEMES. STACK GOLD.
        </div>
      </div>
    ),
    { ...size },
  );
}
