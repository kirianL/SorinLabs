import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios — Planes de diseño web desde $200",
  description:
    "Comienza hoy mismo con nuestros paquetes de diseño web. Precios claros desde $200 USD, planes flexibles y un proceso ágil para llevar tu negocio a internet con alta calidad.",
  keywords: [
    "precios diseño web",
    "cuánto cuesta una página web",
    "paquetes diseño web Costa Rica",
    "precio landing page",
    "cotización sitio web",
  ],
  alternates: {
    canonical: "/precios",
  },
  openGraph: {
    title: "Precios — Planes de diseño web desde $200 | Sorin Labs",
    description:
      "Soluciones web profesionales con precios claros. Pago único, sin suscripciones. Tu sitio, para siempre.",
    url: "/precios",
  },
};

export default function PreciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
