import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Hablemos de tu proyecto",
  description:
    "Hablemos de tu proyecto. Cuéntanos tu idea y diseñemos juntos una experiencia digital que haga la diferencia. Respuesta en menos de 24 horas.",
  keywords: [
    "contacto diseño web",
    "cotización página web",
    "proyecto web Costa Rica",
    "contratar diseñador web",
  ],
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto — Hablemos de tu proyecto | Sorin Labs",
    description:
      "Cuéntanos tu idea y diseñemos juntos una experiencia digital que haga la diferencia.",
    url: "/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
