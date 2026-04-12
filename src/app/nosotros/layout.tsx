import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Estudio digital en Costa Rica",
  description:
    "Conoce a Sorin Labs, un estudio digital enfocado en la convergencia del diseño excepcional y la ingeniería de calidad. Fundado en Costa Rica.",
  keywords: [
    "sobre Sorin Labs",
    "estudio digital Costa Rica",
    "equipo diseño web",
    "agencia web Costa Rica",
    "quiénes somos",
  ],
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros — Estudio digital en Costa Rica | Sorin Labs",
    description:
      "Donde el diseño y la tecnología se encuentran. Un laboratorio digital enfocado en calidad técnica y diseño cuidado.",
    url: "/nosotros",
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
