import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_SLOGAN,
  LOCALE,
  DESCRIPTION,
  CONTACT,
  SERVICE_CATALOG,
  AREA_SERVED,
  url
} from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase resuelve todas las URLs relativas de OG/canonical.
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "WORLD SERVICES | Anuncios Luminosos, Rotulación e Impresión Gran Formato CDMX",
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  category: "Comunicación visual y artes gráficas",
  keywords: [
    "World Services",
    "comunicación visual",
    "anuncios luminosos CDMX",
    "letras volumétricas 3D iluminadas",
    "letras corporativas backlight",
    "impresión digital gran formato",
    "lona front mesh backlight",
    "rotulación de flotillas",
    "rotulado vehicular vinil 3M",
    "señalética protección civil",
    "corte láser acrílico",
    "alucobond fachadas",
    "muebles exhibidores retail",
    "displays POP punto de venta",
    "activaciones BTL neón",
    "papelería y consumibles CDMX",
    "tóners originales y compatibles",
    "consumibles de oficina entrega 24 horas",
    "equipo de cómputo para oficina",
    "artículos promocionales personalizados",
    "branding corporativo México",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, address: true, email: true },
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
  alternates: {
    canonical: url("/"),
    languages: { "es-MX": url("/") },
  },
  openGraph: {
    title:
      "WORLD SERVICES | Anuncios Luminosos, Rotulación e Impresión Gran Formato",
    description: DESCRIPTION,
    url: url("/"),
    siteName: SITE_NAME,
    locale: LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WORLD SERVICES | Comunicación Visual e Impresión Premium en CDMX",
    description:
      "Anuncios luminosos, letras 3D, gran formato, rotulación de flotillas, señalética y corte láser. Papelería y consumibles con entrega de 24 h a 48 h en CDMX.",
  },
  icons: {
    icon: [{ url: `${basePath}/icon.png`, type: "image/png" }],
    shortcut: [`${basePath}/favicon.ico`],
  },
  manifest: `${basePath}/manifest.webmanifest`,
  // Se rellena vía env cuando se den de alta las propiedades en Search Console.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        caption: SITE_NAME,
      },
      image: { "@id": `${SITE_URL}/#logo` },
      description: DESCRIPTION,
      slogan: SITE_SLOGAN,
      email: CONTACT.email,
      areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
      contactPoint: CONTACT.phones.map((p) => ({
        "@type": "ContactPoint",
        telephone: p.e164,
        contactType: "sales",
        name: p.name,
        areaServed: "MX",
        availableLanguage: ["Spanish"],
      })),
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      url: SITE_URL,
      image: { "@id": `${SITE_URL}/#logo` },
      description: DESCRIPTION,
      slogan: SITE_SLOGAN,
      email: CONTACT.email,
      telephone: CONTACT.phones[0].e164,
      priceRange: "$$",
      currenciesAccepted: "MXN",
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.city,
        addressRegion: CONTACT.region,
        addressCountry: CONTACT.country,
      },
      areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...CONTACT.openingHours.days],
        opens: CONTACT.openingHours.opens,
        closes: CONTACT.openingHours.closes,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de comunicación visual y consumibles",
        itemListElement: SERVICE_CATALOG.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: [...AREA_SERVED],
          },
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <head>
        {/* Critical LCP resource preloading for hero canvas video render */}
        <link rel="preload" href={`${basePath}/frames/frame_001.webp`} as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full bg-white text-[#120830] flex flex-col selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
