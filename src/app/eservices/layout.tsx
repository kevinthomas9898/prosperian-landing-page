import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eServices - Global Subscription Product Distribution | Prosperian Capital",
  description: "eServe distributes online subscription services globally through a network of Product Licensees, offering localized product bundles tailored for each market.",
  keywords: ["eServices", "eServe", "subscription services", "global distribution", "product licensees", "CoverTech", "FinEd", "HealthTech", "digital services", "localized marketing"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosperiancapital.com/eservices",
    title: "eServices - Global Subscription Product Distribution | Prosperian Capital",
    description: "eServe distributes online subscription services globally through a network of Product Licensees, offering localized product bundles tailored for each market.",
    siteName: "Prosperian Capital",
    images: [
      {
        url: "/images/eServices.png",
        width: 1200,
        height: 630,
        alt: "eServe Global Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eServices - Global Subscription Product Distribution | Prosperian Capital",
    description: "eServe distributes online subscription services globally through a network of Product Licensees, offering localized product bundles tailored for each market.",
    images: ["/images/eServices.png"],
    creator: "@ProsperianCap",
  },
};

export default function EServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
