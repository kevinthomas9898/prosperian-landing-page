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
                        <h1 className="text-center text-8xl font-bold">
                            Global Fintech Solutions
                        </h1>

                        <p className="mb-16 max-w-3xl text-sm md:text-base">
                            Prosperian creates Innovative FinTech Solutions to combat
                            Systemic Exclusion globally
                        </p>

                        <div className="grid w-full max-w-7xl grid-cols-2 gap-10 md:grid-cols-3">
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

                                    <p className="text-sm font-medium">
                                        {service.title}
                                    </p>
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
            <section className="bg-white py-16 m-auto px-16">
                <div className="container-custom">
                    <div className="grid gap-10 md:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="border-r border-gray-200 pr-6 last:border-r-0"
                            >
                                <h2 className="text-5xl font-bold text-black">
                                    {item.value}
                                </h2>

                                <p className="mt-2 font-semibold text-gray-700">
                                    {item.label}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="bg-white py-20 px-16">
                <div className="container-custom">
                    <div className="grid items-center gap-16 md:grid-cols-2">
                        <div>
                            <h2 className="mb-8 text-4xl font-bold text-black">
                                The Challenge:
                                <br />
                                Systemic Exclusion
                            </h2>

                            <p className="leading-8 text-gray-600">
                                The mass consumer market has long been excluded from
                                sophisticated service offerings due to the inability of
                                legacy systems to support modern transaction and product
                                models. Existing fee structures prevent systemic
                                inclusion.
                            </p>

                            <p className="mt-6 leading-8 text-gray-600">
                                In an ever-escalating compliance-driven world,
                                rendering offerings to the significant middle mass
                                market has become even more challenging.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="/images/system-exe.png"
                                alt="Systemic Exclusion"
                                width={600}
                                height={400}
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="bg-white pb-24 px-16">
                <div className="container-custom">
                    <div className="grid items-center gap-16 md:grid-cols-2">
                        <div>
                            <h2 className="mb-8 text-4xl font-bold text-black">
                                The Solution:
                                <br />
                                Global FinTech Platform
                            </h2>

                            <p className="leading-8 text-gray-600">
                                With a true desire to change the world for the better,
                                by alleviating the difficulties that consumers in the
                                mass market face daily, we saw innovative technology as
                                the right tool to do just that.
                            </p>

                            <p className="mt-6 leading-8 text-gray-600">
                                We assembled resources and pursued an ambitious
                                international expansion plan, leveraging new skills,
                                travelling worldwide and embracing diverse cultures to
                                shape our unique products.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="/images/global-fintech.png"
                                alt="Global Fintech Platform"
                                width={600}
                                height={400}
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}