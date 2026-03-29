import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Diseño y desarrollo de sitios web modernos, sistemas autogestionables y optimización de rendimiento digital.",
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
