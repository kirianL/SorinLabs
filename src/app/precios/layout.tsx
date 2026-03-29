import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios — Planes de Diseño Web",
  description:
    "Planes de diseño y desarrollo web con precios claros. Desde landing pages hasta sitios web completos con optimización y asesoría estratégica. Pago único, sin suscripciones.",
  openGraph: {
    title: "Precios — Planes de Diseño Web | Sorin Labs",
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
