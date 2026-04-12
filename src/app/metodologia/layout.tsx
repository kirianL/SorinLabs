import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodología — Nuestro proceso de trabajo",
  description:
    "Nuestro proceso de trabajo: desde la estrategia y el diseño hasta el desarrollo y el lanzamiento de tu proyecto digital. Transparencia en cada fase.",
  keywords: [
    "proceso diseño web",
    "metodología desarrollo web",
    "cómo trabajamos",
    "fases proyecto web",
    "proceso creativo",
  ],
  alternates: {
    canonical: "/metodologia",
  },
  openGraph: {
    title: "Metodología — Nuestro proceso de trabajo | Sorin Labs",
    description:
      "Descubrimiento, diseño, desarrollo y lanzamiento. Así construimos experiencias digitales de calidad.",
    url: "/metodologia",
  },
};

export default function MetodologiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
