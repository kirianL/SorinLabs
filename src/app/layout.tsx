import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { VHFix } from "@/components/layout/vh-fix";

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
  metadataBase: new URL("https://sorinlabs.dev"),
  title: {
    default: "Sorin Labs — Diseño Web & Experiencias Digitales",
    template: "%s | Sorin Labs",
  },
  description:
    "Sorin Labs es un estudio digital enfocado en diseño y experiencia web de calidad. Creamos sitios web modernos, landing pages y plataformas digitales desde Costa Rica.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "diseño web Costa Rica",
    "agencia digital Costa Rica",
    "experiencia de usuario",
    "sitios web modernos",
    "landing pages",
    "plataformas digitales",
    "diseño UX/UI",
    "páginas web profesionales",
    "desarrollo web a medida",
    "estudio digital",
    "Sorin Labs",
    "Costa Rica",
  ],
  authors: [{ name: "Sorin Labs", url: "https://sorinlabs.dev" }],
  creator: "Sorin Labs",
  publisher: "Sorin Labs",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "rX7K7Q2nKk7HqFgVF64lCIKFptO8zAEkBU6H-dEnS44",
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://sorinlabs.dev",
    title: "Sorin Labs — Diseño Web & Experiencias Digitales",
    description:
      "Experiencias web diseñadas con intención. Sitios web modernos, claros y funcionales donde el diseño y la tecnología se encuentran.",
    siteName: "Sorin Labs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sorin Labs — Diseño Web & Experiencias Digitales",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sorinlabs",
    creator: "@sorinlabs",
    title: "Sorin Labs — Diseño Web & Experiencias Digitales",
    description:
      "Experiencias web diseñadas con intención. Sitios web modernos, claros y funcionales donde el diseño y la tecnología se encuentran.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {/* Preload for mobile hero image to fix LCP resource load delay */}
        <link rel="preload" as="image" href="/hero-640.webp" fetchPriority="high" media="(max-width: 640px)" />
        {/* Schema.org — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://sorinlabs.dev/#organization",
              name: "Sorin Labs",
              url: "https://sorinlabs.dev",
              logo: {
                "@type": "ImageObject",
                url: "https://sorinlabs.dev/LogoFullNegro.svg",
                width: 600,
                height: 150,
              },
              image: "https://sorinlabs.dev/LogoFullNegro.svg",
              email: "hello@sorinlabs.dev",
              description:
                "Sorin Labs es un estudio digital enfocado en diseño y experiencia web de calidad. Creamos sitios web modernos, landing pages y plataformas digitales desde Costa Rica.",
              foundingDate: "2026",
              founder: {
                "@type": "Person",
                name: "Kirian Luna",
                jobTitle: "Fundador y CEO",
              },
              sameAs: [
                "https://instagram.com/sorinlabs",
                "https://www.facebook.com/share/1DuaEeLjRF/?mibextid=wwXIfr",
                "https://x.com/sorinlabs",
                "https://threads.net/@sorinlabs",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@sorinlabs.dev",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
              },
            }),
          }}
        />

        {/* Schema.org — WebSite (enables sitelinks search box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://sorinlabs.dev/#website",
              name: "Sorin Labs",
              url: "https://sorinlabs.dev",
              publisher: {
                "@id": "https://sorinlabs.dev/#organization",
              },
              inLanguage: "es",
              description:
                "Experiencias web diseñadas con intención. Sitios web modernos, claros y funcionales donde el diseño y la tecnología se encuentran.",
            }),
          }}
        />

        {/* Schema.org — ProfessionalService (local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://sorinlabs.dev/#business",
              name: "Sorin Labs",
              url: "https://sorinlabs.dev",
              logo: "https://sorinlabs.dev/LogoFullNegro.svg",
              image: "https://sorinlabs.dev/LogoFullNegro.svg",
              email: "hello@sorinlabs.dev",
              description:
                "Estudio digital especializado en diseño web, desarrollo de plataformas y experiencias digitales premium desde Costa Rica.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CR",
                addressLocality: "Costa Rica",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 9.9281,
                  longitude: -84.0907,
                },
                geoRadius: "50000",
              },
              serviceType: [
                "Diseño web",
                "Desarrollo web",
                "Diseño UX/UI",
                "Desarrollo de sistemas web a medida",
                "Optimización y rendimiento web",
              ],
              sameAs: [
                "https://instagram.com/sorinlabs",
                "https://www.facebook.com/share/1DuaEeLjRF/?mibextid=wwXIfr",
                "https://x.com/sorinlabs",
                "https://threads.net/@sorinlabs",
              ],
              parentOrganization: {
                "@id": "https://sorinlabs.dev/#organization",
              },
            }),
          }}
        />

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
        <VHFix />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
