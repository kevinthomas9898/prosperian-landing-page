import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimationProvider } from "@/components/shared/animation-context";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prosperian Capital",
  url: "https://prosperiancapital.com",
  logo: "https://prosperiancapital.com/logos/ProsperianCapitalLogo.png",
  description: "Prosperian Capital delivers innovative fintech solutions, digital payment platforms, and sustainable technology infrastructure across 88 countries worldwide.",
  sameAs: [
    "https://twitter.com/ProsperianCap",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
  },
};

export const metadata: Metadata = {
  title: "Prosperian Capital - Global Fintech Solutions",
  description: "Prosperian Capital delivers innovative fintech solutions, digital payment platforms, and sustainable technology infrastructure across 88 countries worldwide.",
  keywords: ["Prosperian Capital", "fintech", "digital payments", "financial services", "agritech", "vertical farming", "sustainable technology", "global finance", "PCI DSS", "eServices"],
  authors: [{ name: "Prosperian Capital" }],
  creator: "Prosperian Capital",
  publisher: "Prosperian Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prosperiancapital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com",
    title: "Prosperian Capital - Global Fintech Solutions",
    description: "Prosperian Capital delivers innovative fintech solutions, digital payment platforms, and sustainable technology infrastructure across 88 countries worldwide.",
    siteName: "Prosperian Capital",
    images: [
      {
        url: "/images/Fintech.png",
        width: 1200,
        height: 630,
        alt: "Prosperian Capital Global Fintech Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperian Capital - Global Fintech Solutions",
    description: "Prosperian Capital delivers innovative fintech solutions, digital payment platforms, and sustainable technology infrastructure across 88 countries worldwide.",
    images: ["/images/Fintech.png"],
    creator: "@ProsperianCap",
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
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <AnimationProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}