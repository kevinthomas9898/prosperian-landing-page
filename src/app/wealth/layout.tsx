import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosperian Global Wealth - Modern Wealth Platform | Prosperian Capital",
  description: "Prosperian Global Wealth offers modern wealth creation through SmartStox AI-assisted trading, DigiProp property tokenization, and OryXFund blue-chip equity exposure.",
  keywords: ["wealth management", "SmartStox", "DigiProp", "OryXFund", "AI trading", "property investment", "blockchain tokenization", "blue-chip equities", "digital wealth", "global assets"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com/wealth",
    title: "Prosperian Global Wealth - Modern Wealth Platform | Prosperian Capital",
    description: "Prosperian Global Wealth offers modern wealth creation through SmartStox AI-assisted trading, DigiProp property tokenization, and OryXFund blue-chip equity exposure.",
    siteName: "Prosperian Capital",
    images: [
      {
        url: "/images/pros_wealth.png",
        width: 1200,
        height: 630,
        alt: "Prosperian Global Wealth Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperian Global Wealth - Modern Wealth Platform | Prosperian Capital",
    description: "Prosperian Global Wealth offers modern wealth creation through SmartStox AI-assisted trading, DigiProp property tokenization, and OryXFund blue-chip equity exposure.",
    images: ["/images/pros_wealth.png"],
    creator: "@ProsperianCap",
  },
};

export default function WealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
