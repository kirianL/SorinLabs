import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de Sorin Labs.",
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
