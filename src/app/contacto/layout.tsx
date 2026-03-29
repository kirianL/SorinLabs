import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Hablemos de tu proyecto. Cuéntanos tu idea y diseñemos juntos una experiencia digital que haga la diferencia.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
