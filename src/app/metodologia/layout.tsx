import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodología",
  description: "Nuestro proceso de trabajo: desde la estrategia y el diseño hasta el desarrollo y el lanzamiento de tu proyecto digital.",
};

export default function MetodologiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
