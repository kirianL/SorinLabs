import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio — Proyectos de diseño web",
  description:
    "Explora nuestros proyectos recientes: sitios web diseñados con intención y ejecutados con precisión técnica desde Costa Rica.",
  keywords: [
    "portafolio diseño web",
    "proyectos web",
    "ejemplos páginas web",
    "caso de estudio diseño web",
    "sitios web Costa Rica",
  ],
  alternates: {
    canonical: "/portafolio",
  },
  openGraph: {
    title: "Portafolio — Proyectos de diseño web | Sorin Labs",
    description:
      "Trabajo reciente que refleja nuestra forma de pensar el diseño. Sitios web diseñados con intención.",
    url: "/portafolio",
  },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
