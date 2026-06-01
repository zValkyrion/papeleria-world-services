import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "WORLD SERVICES | Comunicación Visual, Impresión y Rotulación Premium",
  description: "Donde la calidad encuentra su propósito. Socio estratégico en México para impresión digital de gran formato, rotulación corporativa y de flotillas, señalética, corte láser y soluciones de branding de alta gama.",
  keywords: [
    "World Services",
    "comunicación visual",
    "impresión digital",
    "gran formato",
    "rotulación de flotillas",
    "señalética protección civil",
    "corte láser acrílico",
    "artículos promocionales",
    "branding corporativo México",
    "impresión premium",
    "anuncios volumétricos 3D",
    "sustratos rígidos",
    "rotulado vehicular"
  ],
  authors: [{ name: "WORLD SERVICES" }],
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
    canonical: "https://worldservices.com.mx",
  },
  openGraph: {
    title: "WORLD SERVICES | Comunicación Visual e Impresión Premium",
    description: "Transformamos ideas en experiencias visuales memorables. Impresión de gran formato, rotulación vehicular, señalética normativa y corte láser de alta gama en México.",
    url: "https://worldservices.com.mx",
    siteName: "WORLD SERVICES",
    images: [
      {
        url: "https://worldservices.com.mx/logo.png",
        width: 512,
        height: 512,
        alt: "WORLD SERVICES - Comunicación Visual Premium, Impresión Gran Formato y Corte Láser",
      }
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WORLD SERVICES | Comunicación Visual e Impresión Premium",
    description: "Socio estratégico en México para impresión de gran formato, rotulación corporativa, corte láser y señalética normativa de alta gama.",
    images: ["https://worldservices.com.mx/logo.png"],
  }
};

export const viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://worldservices.com.mx/#organization",
      "name": "WORLD SERVICES",
      "url": "https://worldservices.com.mx",
      "logo": "https://worldservices.com.mx/logo.png",
      "image": "https://worldservices.com.mx/logo.png",
      "description": "Socio estratégico en México para impresión digital de gran formato, rotulación corporativa y de flotillas, señalética de protección civil, corte láser y soluciones integrales de branding corporativo.",
      "slogan": "YO LO HAGO POR TI",
      "sameAs": []
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://worldservices.com.mx/#localbusiness",
      "name": "WORLD SERVICES",
      "image": "https://worldservices.com.mx/logo.png",
      "url": "https://worldservices.com.mx",
      "telephone": "+525615053683",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "CDMX y Cobertura Nacional",
        "addressLocality": "Ciudad de México",
        "addressRegion": "CDMX",
        "postalCode": "01000",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.4326077,
        "longitude": -99.133208
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
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
