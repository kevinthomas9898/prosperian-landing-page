import { ContentSection } from "@/components/sections/content-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";

export default function EServices() {
    return (
        <>
            <OverviewSection
                title="eServices"
                subtitle="Product Distribution through the Global eServe Network"
                image="/images/eServices.png"
                imageAlt="Prosperian AgriTech"
                paragraphs={[
                    "eServe Distributes Online Subscription Services through a network of Product Licensees to Consumers Globally. Our well-crafted product bundles and brands are localised specifically for each market, through brand-specific marketing campaigns, cost-benefit tiers, currencies, and languages",
                    "At eServe, we are driven by a passion for connecting people to the digital services they love, no matter where they are in the world. Through a dedicated network of Product Licensees, we bring tailored subscription bundles directly to consumers - each crafted with care to fit the unique needs of every market. From language and currency to cost-benefit tiers and localized campaigns, every detail is designed to resonate with the heart of each community. We believe in the power of personalization, ensuring that every consumer feels valued, understood, and connected to the services they deserve.",
                ]}
            />

            <ContentSection
                title="eServe Global"
                image="/images/eserve.png"
                imageAlt="eServe Global"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "Our Product Licensee Network connects consumers with Innovative Solutions in CoverTech, FinEd & HealthTech that Empowers Individuals through Access, Convenience & Value for a Better Quality of Life."
                ]}
                button={
                    {
                        label: "Website",
                        href: "#"
                    }
                }
            />
        </>
    );
}
