import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios — Planes de diseño web",
  description:
    "Comienza hoy mismo con nuestros paquetes de diseño web. Precios claros, planes flexibles y un proceso ágil para llevar tu negocio a internet con alta calidad.",
  openGraph: {
    title: "Precios — Planes de diseño web | Sorin Labs",
    description:
      "Soluciones web profesionales con precios claros. Pago único, sin suscripciones. Tu sitio, para siempre.",
  },
};

export default function PreciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
