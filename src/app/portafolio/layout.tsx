import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Explora nuestros proyectos recientes: sitios web proyectados con intención y ejecutados con precisión técnica.",
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
