import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors - Exponential Growth Phase | Prosperian Capital",
  description: "Partner with Prosperian Capital in our exponential growth phase through digitized fractional investment initiatives in BrightByte, eServe, and DigiProp.",
  keywords: ["investors", "venture capital", "fractional investment", "BrightByte", "eServe", "DigiProp", "digital infrastructure", "renewable energy", "security tokens", "blockchain investment"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com/investors",
    title: "Investors - Exponential Growth Phase | Prosperian Capital",
    description: "Partner with Prosperian Capital in our exponential growth phase through digitized fractional investment initiatives in BrightByte, eServe, and DigiProp.",
    siteName: "Prosperian Capital",
    images: [
      {
        url: "/images/investors.png",
        width: 1200,
        height: 630,
        alt: "Prosperian Investment Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investors - Exponential Growth Phase | Prosperian Capital",
    description: "Partner with Prosperian Capital in our exponential growth phase through digitized fractional investment initiatives in BrightByte, eServe, and DigiProp.",
    images: ["/images/investors.png"],
    creator: "@ProsperianCap",
  },
};

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
