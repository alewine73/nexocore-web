import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TrackingClient from "./TrackingClient";
import Navbar from "@/components/Navbar";
import AllStructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://*.facebook.net https://www.facebook.com https://*.facebook.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.facebook.com https://*.facebook.com",
  "connect-src 'self' https://www.facebook.com https://*.facebook.com https://connect.facebook.net https://*.facebook.net https://graph.facebook.com",
  "font-src 'self'",
  "media-src 'self'",
].join("; ");

export const metadata: Metadata = {
  metadataBase: new URL("https://nexocore.es"),
  title: "NexoCore | Automatización IA + Marketing Digital en Valladolid",
  description:
    "Escalamos tu negocio con Inteligencia Artificial y Marketing Digital. Automatizaciones, funnels de venta y sistemas inteligentes para aumentar ROI. Consultoría empresarial en Valladolid.",
  keywords: "automatización IA, marketing digital, consultoría empresarial, funnels venta, inteligencia artificial Valladolid, escalamiento negocio",
  authors: [{ name: "NexoCore", url: "https://nexocore.es" }],
  creator: "NexoCore",
  publisher: "NexoCore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://nexocore.es",
    languages: {
      "es-ES": "https://nexocore.es",
      "en-US": "https://nexocore.es/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://nexocore.es",
    siteName: "NexoCore",
    title: "NexoCore | Automatización IA + Marketing Digital",
    description:
      "Transforma tu negocio con automatización IA, marketing digital y consultoría empresarial. Sistemas inteligentes para aumentar ROI hasta 300% en Valladolid.",
    images: [
      {
        url: "https://nexocore.es/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexoCore - Automatización IA y Marketing Digital",
        type: "image/png",
      },
      {
        url: "https://nexocore.es/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: "NexoCore Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexocore_es",
    creator: "@nexocore_es",
    title: "NexoCore | Automatización IA + Marketing Digital",
    description:
      "Escalamos tu negocio con automatización IA y marketing digital. Reducción de costes + aumento de ingresos.",
    images: ["https://nexocore.es/og-image.png"],
  },
  applicationName: "NexoCore",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NexoCore",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification",
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
        {/* Preload critical resources for performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Structured Data - JSON-LD */}
        <AllStructuredData />

        {/* Additional Meta Tags for better indexing */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        {/* Content Security Policy for security */}
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <TrackingClient />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '904024115582171');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=904024115582171&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {children}
      </body>
    </html>
  );
}