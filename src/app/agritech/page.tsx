import { ContentSection } from "@/components/sections/content-section";
import { OverviewSection } from "@/components/sections/overview-section";

export default function AgritechPage() {
    return (
        <>
            <OverviewSection
                title="Prosperian AgriTech"
                subtitle="Powering the Future of Food and Digital Infrastructure."
                image="/images/Prosperian_AgriTech.png"
                imageAlt="Prosperian AgriTech"
                paragraphs={[
                    "Prosperian AgriTech is a technology-driven infrastructure platform uniting sustainable agriculture and digital production under one renewable energy ecosystem.",
                    "Through AgriNova, the company operates advanced vertical farming systems that deliver reliable, sustainable food production. Through BrightByte, it deploys high-performance cyber-farming infrastructure that converts renewable energy into digital assets using sophisticated treasury management.",
                    "Together, these two platforms create a powerful synergy: renewable energy powering both the farms that feed the world and the digital infrastructure that powers tomorrow's economy.",
                    "Prosperian AgriTech stands at the intersection of technology, sustainability, and intelligent capital deployment, building resilient systems designed for the future.",
                ]}
            />
            <ContentSection
                title="AgriNova Vertical Farming"
                image="/images/AgriNova_Vertical_Farming.png"
                imageAlt="AgriNova Vertical Farming"
                paragraphs={[
                    "AgriNova is a next-generation vertical farming platform powered entirely by renewable energy. By combining advanced controlled-environment agriculture with sustainable power infrastructure, AgriNova produces high-quality crops year-round while using dramatically less land and water than traditional farming.",
                    "Our technology-driven approach enables consistent yields, climate resilience, and localised food production, helping communities strengthen food security while reducing environmental impact. AgriNova represents a smarter way to feed a growing world — efficient, clean, and scalable."
                ]}
                reverse={true}
                variant="compact"
                imageClassName="max-w-[400px]"
                className="border border-gray-200 m-12 rounded-lg"
                button={{
                    label: "Website TBA",
                    href: "#",
                }}
            />
            {/* BrightByte_CyberFarming.png */}
            <ContentSection
                title="BrightByte CyberFarming"
                image="/images/BrightByte_CyberFarming.png"
                imageAlt="BrightByte CyberFarming"
                paragraphs={[
                    "BrightByte CyberFarming transforms renewable energy into high-performance digital production. By operating advanced computing infrastructure powered by sustainable energy, BrightByte generates digital assets while optimising profitability through sophisticated treasury management strategies.",
                    "This “cyber-agriculture” model treats computing power as a productive digital crop — cultivated using efficient energy systems and managed with institutional-grade financial discipline. The result is a resilient, scalable platform that converts renewable power into long-term digital value."
                ]}
                reverse={true}
                variant="compact"
                imageClassName="max-w-[400px]"
                className="border border-gray-200 m-12 rounded-lg"
                button={{
                    label: "Website TBA",
                    href: "#",
                }}
            />
        </>
    );
}