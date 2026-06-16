import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosperian AgriTech - Sustainable Agriculture & Digital Infrastructure",
  description: "Prosperian AgriTech unites sustainable agriculture and digital production under one renewable energy ecosystem through AgriNova vertical farming and BrightByte cyber-farming.",
  keywords: ["Prosperian AgriTech", "vertical farming", "sustainable agriculture", "renewable energy", "AgriNova", "BrightByte", "cyber-farming", "food security", "controlled-environment agriculture"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com/agritech",
    title: "Prosperian AgriTech - Sustainable Agriculture & Digital Infrastructure",
    description: "Prosperian AgriTech unites sustainable agriculture and digital production under one renewable energy ecosystem through AgriNova vertical farming and BrightByte cyber-farming.",
    siteName: "Prosperian Capital",
    images: [
      {
        url: "/images/Prosperian_AgriTech.png",
        width: 1200,
        height: 630,
        alt: "Prosperian AgriTech Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperian AgriTech - Sustainable Agriculture & Digital Infrastructure",
    description: "Prosperian AgriTech unites sustainable agriculture and digital production under one renewable energy ecosystem through AgriNova vertical farming and BrightByte cyber-farming.",
    images: ["/images/Prosperian_AgriTech.png"],
    creator: "@ProsperianCap",
  },
};

export default function AgritechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
