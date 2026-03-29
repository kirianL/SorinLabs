import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Sorin Labs, un estudio digital enfocado en la convergencia del diseño excepcional y la ingeniería de calidad.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
