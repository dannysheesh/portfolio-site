import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Daniel Mangelsdorf — AI Solutions Engineer";
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
          background: "#000000",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            Daniel Mangelsdorf
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#86868b",
              letterSpacing: "-0.01em",
            }}
          >
            AI Solutions Engineer & Technical Pre-Sales
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "20px",
              fontWeight: 300,
              color: "#6e6e73",
            }}
          >
            RAG pipelines / Autonomous agents / Data platforms / Production web
            apps
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
