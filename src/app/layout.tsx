import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../../public/fonts/Inter_18pt-Regular.ttf", // fallback for mono
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Sorin Labs — Diseño Web & Experiencias Digitales",
    template: "%s | Sorin Labs",
  },
  description:
    "Sorin Labs es un estudio digital enfocado en diseño y experiencia web de calidad. Creamos sitios web modernos, landing pages y plataformas digitales desde Costa Rica.",
  keywords: [
    "diseño web",
    "experiencia de usuario",
    "desarrollo web",
    "sitios web modernos",
    "landing pages",
    "plataformas digitales",
    "Costa Rica",
    "Sorin Labs",
  ],
  authors: [{ name: "Sorin Labs" }],
  creator: "Sorin Labs",
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://sorinlabs.com",
    title: "Sorin Labs — Diseño Web & Experiencias Digitales",
    description:
      "Experiencias web diseñadas con intención. Sitios web modernos, claros y funcionales donde el diseño y la tecnología se encuentran.",
    siteName: "Sorin Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorin Labs — Diseño Web & Experiencias Digitales",
    description:
      "Experiencias web diseñadas con intención. Sitios web modernos, claros y funcionales donde el diseño y la tecnología se encuentran.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-[100svh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
