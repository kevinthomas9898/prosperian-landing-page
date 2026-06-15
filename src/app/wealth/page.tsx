import { ContentSection } from "@/components/sections/content-section";
import { OverviewSection } from "@/components/sections/overview-section";

export default function investors() {
    return (
        <>
            <OverviewSection
                title="Prosperian Global Wealth"
                subtitle="Wealth Creation, Reimagined."
                image="/images/pros_wealth.png"
                imageAlt="Prosperian Global Wealth"
                paragraphs={[
                    "Prosperian Global Wealth is a modern wealth platform designed to help individuals build, grow, and preserve wealth from the ground up. By combining advanced financial technology with access to high-quality global assets, Prosperian makes sophisticated wealth strategies available to everyday investors.",
                    "Through SmartStox, investors gain exposure to a broker-monitored, AI-assisted trading strategy designed to capture market opportunities and generate above-average returns through disciplined execution and data-driven insights.",
                    "With DigiProp, users can participate in diversified international property portfolios, enabling access to real estate markets around the world without the traditional barriers of large capital requirements or complex cross-border transactions.",
                    "Meanwhile, OryXFund opens the door to blue-chip equity ownership through blockchain tokenisation, giving investors on-chain exposure to some of the world's most established companies, backed 1:1 by the underlying securities.",
                    "Together, these three pillars form a powerful ecosystem that empowers individuals to start investing from any level, diversify intelligently, and steadily build long-term financial security in an increasingly digital global economy.",
                    "At eServe, we are driven by a passion for connecting people to the digital services they love, no matter where they are in the world. Through a dedicated network of Product Licensees, we bring tailored subscription bundles directly to consumers - each crafted with care to fit the unique needs of every market. From language and currency to cost-benefit tiers and localized campaigns, every detail is designed to resonate with the heart of each community. We believe in the power of personalization, ensuring that every consumer feels valued, understood, and connected to the services they deserve.",
                ]}
            />

            <ContentSection
                title="DigiProp"
                image="/images/digiprop.png"
                imageAlt="DigiProp"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "DigiProp offers Affordable Entry, Global Access, Ease and Security through Blockchain-backed technology that ensures seamless, transparent, and secure transactions. ",
                ]}
                button={
                    {
                        label: "Website TBA",
                        href: "#"
                    }
                }
            />
            <ContentSection
                title="OryXFund"
                image="/images/oryFund.png"
                imageAlt="OryXFund"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "OryXFund provide onchain exposure to the world's top equities, backed 1:1 by the underlying security.",
                    "This is what investing looks like when it's designed for everyone. ",
                ]}
                button={
                    {
                        label: "Website TBA",
                        href: "#"
                    }
                }
            />
            <ContentSection
                title="SmartStox"
                image="/images/smartStox.png"
                imageAlt="SmartStox"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={["SmartStox isn't just another trading tool - it's a system built on real-world experience. Every algorithm, every trade, every reinvestment strategy has been tested in live markets and refined for maximum performance. Our AI doesn't sleep, second-guess, or let emotions interfere - it executes disciplined trades with precision, compounding your wealth over time while you live your life."
                ]}
                button={
                    {
                        label: "Website TBA",
                        href: "#"
                    }
                }
            />
        </>
    );
}
