import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Sorin Labs.",
  alternates: {
    canonical: "/terminos",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
