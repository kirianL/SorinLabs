import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales de Sorin Labs.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
