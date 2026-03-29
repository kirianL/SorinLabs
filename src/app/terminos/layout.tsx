import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos",
  description: "Términos y condiciones de uso de Sorin Labs.",
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
