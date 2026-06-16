import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinTech - Comprehensive Global Platform | Prosperian Capital",
  description: "Our comprehensive PLANet platform supports eCommerce and FinTech businesses globally throughout the customer lifecycle with PCI DSS compliant solutions.",
  keywords: ["FinTech", "PLANet platform", "eCommerce", "payment processing", "PCI DSS", "card issuing", "digital payments", "global fintech", "PulsePay", "financial technology"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com/fintech",
    title: "FinTech - Comprehensive Global Platform | Prosperian Capital",
    description: "Our comprehensive PLANet platform supports eCommerce and FinTech businesses globally throughout the customer lifecycle with PCI DSS compliant solutions.",
    siteName: "Prosperian Capital",
    images: [
      {
        url: "/images/Fintech.png",
        width: 1200,
        height: 630,
        alt: "Prosperian FinTech Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech - Comprehensive Global Platform | Prosperian Capital",
    description: "Our comprehensive PLANet platform supports eCommerce and FinTech businesses globally throughout the customer lifecycle with PCI DSS compliant solutions.",
    images: ["/images/Fintech.png"],
    creator: "@ProsperianCap",
  },
};

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
