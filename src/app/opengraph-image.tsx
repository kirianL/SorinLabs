import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sorin Labs — Diseño Web & Experiencias Digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "LogoAzul.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Brand accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(38,28,193,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo image */}
          <img
            src={logoBase64}
            width={140}
            height={140}
            style={{
              borderRadius: 28,
            }}
          />

          {/* Brand name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Sorin Labs
          </div>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 3,
              background: "#261cc1",
              borderRadius: 2,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.5px",
              fontWeight: 400,
            }}
          >
            Diseño Web & Experiencias Digitales
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
              marginTop: 4,
            }}
          >
            Costa Rica
          </div>
        </div>

        {/* Domain in corner */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 36,
            fontSize: 13,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "2px",
            fontWeight: 500,
          }}
        >
          sorinlabs.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
