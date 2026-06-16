import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Global Journey | Prosperian Capital - Fintech Innovation Worldwide",
  description: "Discover Prosperian Capital's global journey from South Africa to Singapore. Learn about our fintech innovations, team expertise, and mission to democratize financial services across 88 countries.",
  keywords: ["Prosperian Capital", "fintech", "global financial services", "digital payments", "financial inclusion", "eServices", "subscription-based finance", "PCI DSS", "Singapore fintech", "Mauritius fintech"],
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
    canonical: "/world",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com/world",
    title: "Our Global Journey | Prosperian Capital - Fintech Innovation Worldwide",
    description: "Discover Prosperian Capital's global journey from South Africa to Singapore. Learn about our fintech innovations, team expertise, and mission to democratize financial services across 88 countries.",
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
    title: "Our Global Journey | Prosperian Capital - Fintech Innovation Worldwide",
    description: "Discover Prosperian Capital's global journey from South Africa to Singapore. Learn about our fintech innovations, team expertise, and mission to democratize financial services across 88 countries.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function WorldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
