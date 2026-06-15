import { ContentSection } from "@/components/sections/content-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";

export default function Wealth() {
    return (
        <>
            <OverviewSection
                title="Investors"
                subtitle="Exponential Growth Phase"
                image="/images/investors.png"
                imageAlt="Exponential Growth Phase"
                paragraphs={[
                    "Prosperian Capital is an established enterprise that now wishes to expand our global operations through own and outside capital. We now find ourselves at the threshold of an Exponential Growth Phase, which afford forward looking investors an opportunity to participate in a well-diversified Investment Technology Group.",
                ]}
            />

            <ContentSection
                title="Investment Strategy"
                image="/images/investment.png"
                imageAlt="Investment Strategy"
                paragraphs={[
                    "We believe in building Diversified Income Streams through Strategic Infrastructure Investments and Scalable Global Offerings, utilising specialised FinTech Solutions, supported by Cloud-Based Platforms.",
                ]}
            />

            <ContentSection
                title="Investment Partnership Opportunity"
                image="/images/invest-partner.png"
                imageAlt="Investment Partnership Opportunity"
                paragraphs={[
                    "Partner with Prosperian in building our Group Revenue to more than $500M and earn Exponential Projected Returns.",
                    "Please request our Independent Investment Valuation Reports for our various Digitised Fractional Investment Initiatives more details."
                ]}
                className="bg-black"
                titleClassName="text-[#B94E1E]"
                paragraphClassName="text-white"
            />

            <ContentSection
                title="Initial Venture Capital"
                image="/images/olico.png"
                imageAlt="Initial Venture Capital"
                variant="compact"
                reverse={true}
                className="m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "We have achieved and exceeded our Initial Funding Goal of $5M, through our core Venture Capital Partner and Startup Revenues.",
                ]}
            />

            <div className="mt-12 bg-[#B94E1E] py-6 px-6">
                <div className="container-custom">
                    <Typography
                        variant="36px"
                        className="mx-auto max-w-5xl text-center text-white"
                    >
                        How to Invest With Prosperian
                    </Typography>
                    <Typography variant="20px-regular" className="mx-auto max-w-5xl text-center text-white">
                        Partner with us through your Project & Channel of Preference…
                    </Typography>
                </div>
            </div>

            <ContentSection
                title="Powering the Next Generation of Digital Infrastructure Returns"
                image="/images/brightbyte.png"
                imageAlt="BrightByte"
                variant="compact"
                reverse={true}
                className="m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "BrightBite develops renewable-powered compute infrastructure combined with intelligent digital-asset management to deliver resilient, infrastructure-backed investment exposure.",
                    "Once-Off Investment Tiers: $2,500 / $5,000 / $10,000",
                ]}
            />
            <div className="mx-16 mb-20">
                <Typography variant="36px" className="text-black">
                    CyberFarming: BrightByte CyberFarming
                </Typography>
                {/* cnver to ul */}
                <Typography variant="20px-regular" className="text-[#4B4B4B
            ] mt-10">
                    <ul className="space-y-4">
                        <li>Enabling Participation in Renewables for Micro-Investors</li>
                        <li>BrightBite is a renewable-powered digital infrastructure company developing and operating modular compute facilities in strategically selected locations. The company integrates utility-scale renewable energy generation with high-density compute operations and an intelligent post-production digital-asset management framework.</li>
                        <li>Unlike traditional crypto mining or data-centre operators, BrightBite's competitive advantage lies not only in low-cost energy and efficient infrastructure, but in the disciplined management, allocation, and reinvestment of digital outputs. This approach transforms infrastructure production into a managed capital engine, designed to generate resilient, compounding returns over time.</li>
                        <li>BrightBite targets long-term capital partners seeking exposure to renewable infrastructure, digital compute demand, and alternative yield strategies—without reliance on speculative assumptions or single revenue sources.</li>
                    </ul>
                </Typography>
            </div>
            <ContentSection
                title="Digitized eCommerce Participation"
                image="/images/eserve.png"
                imageAlt="SmartStox"
                variant="compact"
                reverse={true}
                className="m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "eServe's digitized security tokens, making ownership accessible, flexible, and globalized through blockchain-backed technology.",
                    "Once-Off Investment Tiers: $2,500 / $5,000 / $10,000"
                ]}
            />
            <div className="mx-16 mb-20">
                <Typography variant="36px" className="text-black">
                    eCommerce: eServe Global Consumer Subscription Services
                </Typography>
                {/* cnver to ul */}
                <Typography variant="20px-regular" className="text-[#4B4B4B
            ] mt-10">
                    <ul className="space-y-4">
                        <li>“Powering Global Subscriptions, Sharing the Rewards.”</li>
                        <li>eServe Global is a cutting-edge eCommerce platform that enables millions of consumers worldwide to access and manage online subscription services seamlessly. By investing in eServe Global through our secured loan note program, you participate directly in a predictable, subscription-based revenue model, targeting up to 40% annual returns.</li>
                        <li>Our platform is designed for scalable growth, transparent reporting, and investor accessibility — allowing you to start with as little as USD 1,000. With recurring subscription income as the backbone, eServe Global combines innovative technology, global reach, and secure investment structure to create a high-yield opportunity for both retail and accredited investors.</li>
                        <li>Invest in the future of digital subscriptions — watch your returns grow as the world goes subscription-first.</li>
                    </ul>
                </Typography>
            </div>


            <ContentSection
                title="Digitized Property Ownership"
                image="/images/digiprop.png"
                imageAlt="Digitized Property Ownership"
                variant="compact"
                reverse={true}
                className="m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "DigiProp digitizes property assets, making ownership accessible, flexible, and globalized through blockchain-backed technology.",
                    "Once-Off Investment Tiers: $2,500 / $5,000 / $10,000"
                ]}
            />
            <div className="mx-16 mb-20">
                <Typography variant="36px" className="text-black">
                    Diversifying Property Investment with Limited Capital: DigiProp
                </Typography>
                {/* cnver to ul */}
                <Typography variant="20px-regular" className="text-[#4B4B4B
            ] mt-10">
                    <ul className="space-y-4">
                        <li>Enabling Real Estate Investment Without Boundaries or Barrier</li>
                        <li>“Your Key to Property Ownership, One Digital Share at a Time.”</li>
                        <li>DigiProp revolutionizes how you invest in real estate, making ownership accessible, flexible, and rewarding. Through cutting-edge digitization of property assets, we open the doors to a world where anyone can own a piece of high-value properties, no matter their location or financial standing. </li>
                        <li>DigiProp offers Affordable Entry, Global Access, Ease and Security through Blockchain-backed technology that ensures seamless, transparent, and secure transactions. </li>
                        <li>Invest with Purpose and Passion - Whether you're diversifying your portfolio, building wealth, or fulfilling a lifelong dream of property ownership, DigiProp empowers you to take control of your financial future. </li>
                        <li>Don't just watch the real estate market grow - be a part of it! Join the DigiProp revolution today. </li>
                    </ul>
                </Typography>
            </div>


            <div className="mt-12 bg-[#B94E1E] p-20">
                <div className="container-custom">
                    <Typography
                        variant="36px"
                        className="mx-auto max-w-5xl text-center text-white mb-20"
                    >
                        Choose Your Channel of Preference…
                    </Typography>

                    <div className="flex flex-row justify-center items-center gap-32">
                        <div className="flex flex-col items-center justify-center">
                            <Image src="/images/dice_1.png" alt="Venture Capital" className="mb-9" width={50} height={50} />
                            <Typography variant="20px-regular" className="mx-auto max-w-5xl text-center text-white">VENTURE CAPITAL FIRMS</Typography>
                            <Typography variant="14px" className="font-light mx-auto max-w-5xl text-center text-white">(Typical &gt;$1 Million)</Typography>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Image src="/images/dice_2.png" alt="Professional Investors" className="mb-9" width={50} height={50} />
                            <Typography variant="20px-regular" className="mx-auto max-w-5xl text-center text-white">PROFESSIONAL INVESTORS</Typography>
                            <Typography variant="14px" className="font-light mx-auto max-w-5xl text-center text-white">(Typical &gt;$100K)</Typography>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Image src="/images/dice_3.png" alt="Security Token Offerings" className="mb-9" width={50} height={50} />
                            <Typography variant="20px-regular" className="mx-auto max-w-5xl text-center text-white">SECURITY TOKEN OFFERINGS</Typography>
                            <Typography variant="14px" className="font-light mx-auto max-w-5xl text-center text-white">($10,000 / $25,000 / $50,000)</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
