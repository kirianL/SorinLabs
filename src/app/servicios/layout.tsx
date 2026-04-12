import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Diseño y desarrollo web profesional",
  description:
    "Diseño y desarrollo de sitios web modernos, sistemas autogestionables y optimización de rendimiento digital. Soluciones web a medida desde Costa Rica.",
  keywords: [
    "servicios diseño web",
    "desarrollo web profesional",
    "diseño UX/UI Costa Rica",
    "optimización web",
    "sistemas web a medida",
  ],
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios — Diseño y desarrollo web profesional | Sorin Labs",
    description:
      "Diseñamos y desarrollamos experiencias web modernas que combinan diseño cuidado, UX y tecnología eficiente.",
    url: "/servicios",
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
