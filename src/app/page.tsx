import { Typography } from "@/components/shared/typography";
import { ContentSection } from "@/components/sections/content-section";
import Image from "next/image";

const stats = [
    {
        value: "25+",
        label: "Years",
        description:
            "Combining decades of expertise with a global network spanning across several industries.",
    },
    {
        value: "88",
        label: "Countries",
        description:
            "Built to support businesses and scalable solutions across the world.",
    },
    {
        value: ">75",
        label: "Employees",
        description:
            "Delivering trusted financial solutions at scale across global markets.",
    },
    {
        value: ">500",
        label: "Online Story",
        description:
            "Supporting enterprises globally with interconnected fintech ecosystems.",
    },
];

const services = [
    {
        icon: "/logos/AI.png",
        title: "AI-Driven Equity Trading",
    },
    {
        icon: "/logos/eWallets.png",
        title: "eWallets & Purchase Cards",
    },
    {
        icon: "/logos/Renewable-Energy.png",
        title: "Renewable Energy Data Centres",
    },
    {
        icon: "/logos/online-subscriptions.png",
        title: "Online Subscription Services",
    },
    {
        icon: "/logos/global-neo-banking.png",
        title: "Global Neo Banking Solutions",
    },
];

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#B94E1E] text-white">
                <div
                    className="absolute inset-0 bg-contain bg-center"
                    style={{
                        backgroundImage: "url('/images/Frame-block.png')",
                    }}
                />

                <div className="container-custom relative z-10">
                    <div className="flex min-h-[650px] flex-col items-center justify-center py-20 pb-0 text-center">
                        <Typography variant="84px" className="text-white">
                            Global Fintech Solutions
                        </Typography>

                        <Typography variant="22px" className="mt-9 text-white">
                            Prosperian creates Innovative FinTech Solutions to combat
                            Systemic Exclusion globally
                        </Typography>

                        <div className="grid w-full max-w-7xl grid-cols-2 gap-10 md:grid-cols-3 mt-20">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={40}
                                        height={40}
                                    />

                                    <Typography variant="20px" className="text-white">
                                        {service.title}
                                    </Typography>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <Image
                                src="/logos/globe.png"
                                alt="Global Network"
                                width={850}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-[#F4F4F4] py-16 m-auto px-16">
                <div className="container-custom">
                    <div className="grid gap-10 md:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="border-r-3 border-dashed border-gray-200 pr-6 last:border-r-0"
                            >
                                <Typography variant="64px" className="text-black">
                                    {item.value}
                                </Typography>

                                <Typography variant="22px" className="text-black">
                                    {item.label}
                                </Typography>

                                <Typography variant="14px" className="text-black mt-9">
                                    {item.description}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <ContentSection
                title={
                    <>
                        The Challenge:
                        <br />
                        Systemic Exclusion
                    </>
                }
                image="/images/system-exe.png"
                imageAlt="Systemic Exclusion"
                paragraphs={[
                    "The mass consumer market has long been excluded from sophisticated service offerings due to the inability of legacy systems to support micro transactions and product models not catering for infrequent payment patterns.",
                    "In an ever-escalating compliance-orientated world, rendering offerings to the significant middle mass market has become even more challenging.",
                ]}
            />

            {/* Solution */}
            <ContentSection
                title={
                    <>
                        The Solution:
                        <br />
                        Global FinTech Platform
                    </>
                }
                image="/images/global-fintech.png"
                imageAlt="Global FinTech Platform"
                paragraphs={[
                    "With a true desire to change the world for the better, by alleviating the difficulties that consumers in the mass market face daily, we saw innovative technology as the right tool to do just that.",
                    "We have developed a global FinTech platform that enables financial institutions to deliver sophisticated services to the mass market, without the need for significant investment in technology infrastructure.",
                ]}
            />
        </>
    );
}