"use client";

import { Typography } from "@/components/shared/typography";
import { ContentSection } from "@/components/sections/content-section";
import { Timeline, type TimelineItem } from "@/components/sections/TimeLine";
import { WorldSection } from "@/components/sections/WorldSection";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animated-wrapper";

export default function WorldPage() {

    const milestones: TimelineItem[] = [
        {
            year: "2002", side: "left",
            description: "South African (ZA) Operation Starts in a Basement",
        },
        {
            year: "2012", side: "right",
            description:
                "ZA Operation reaches 980 Permanent Staff across 24 Locations",
        },
        {
            year: "2014", side: "left",
            description:
                "Prosperian Capital International Incorporates in Mauritius (MU) for Global Market Development",
        },
        {
            year: "2015", side: "right",
            description:
                "MU Operation Completes PLANetPay Global Platform Development",
        },
        {
            year: "2016", side: "left",
            description: [
                "eServe MU launches First Products in 2 Countries",
                "ZA Operation Winds up after Concluding 2 Million Subscription Contracts",
            ],
        },
        {
            year: "2017", side: "right",
            description:
                "eServe MU Extends Territorial Reach to 29 Countries",
        },
        {
            year: "2018", side: "left",
            description:
                "Prosperian Wealth Establishes in Hong Kong",
        },
        {
            year: "2019", side: "right",
            description: [
                "Key Team Members completes Research Visits to 44 Countries",
                "eServe SG Expands to 80 Countries",
            ],
        },
        {
            year: "2020", side: "left",
            description: [
                "Prosperian Capital International Incorporates in Singapore",
                "PLANetPay Global Platform Achieves PCI DSS Certification",
            ],
        },
        {
            year: "2022", side: "right",
            description: [
                "Acquire Tankwa CyberFarm Property",
                "Conclude BaaS Contract with PayPay Ya & Premier ADVantage Card Service Providers",
                "Integrated to Tier 1 Global PSPs",
            ],
        },
        {
            year: "2023", side: "left",
            description:
                "Implemented Advanced Risk Mitigation Tools",
        },
        {
            year: "2024", side: "right",
            description:
                "Restructured for Efficiency & Future Growth",
        },
        {
            year: "2025", side: "left",
            description:
                "Additional Product Rollouts & Growth",
        },
        {
            year: "2026", side: "right",
            description:
                "Planned Digital Equity Offering",
        },
    ];
    return (
        <>
            <WorldSection />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Typography variant="42px" className="text-[#B94E1E] pt-[80px]">OUR ENVIRONMENT</Typography>
            </motion.div>
            <ContentSection
                title="LifeStyle Enhancing eServices on Subscription"
                image="/images/life-style.png"
                imageAlt="LifeStyle Enhancing eServices"
                paragraphs={[
                    "At Prosperian, we believe that financial freedom should be accessible to everyone, not just a privileged few.That's why we reimagined traditional financial services, breaking free from outdated regulations and barriers that have long excluded middle-mass consumers across the globe.",

                    "Our innovative, disruptive online subscription products are designed to empower individuals and families, addressing their core financial needs in a smarter, more affordable way.Tested and trusted in 88 countries, these offerings deliver the support and tools people deserve - without the high costs, barriers to entry, or complexity that traditional systems impose.",

                    "This isn't just about finances; it's about levelling the playing field. It's about giving more people the opportunity to thrive, to build a future without unnecessary hurdles. We're rewriting the rules so you can take control of your journey, your aspirations, and your life.",

                    "At Prosperian, we don't just imagine a better world - we're creating it.",
                ]}
            />

            <ContentSection
                title="Comprehensive FinTech Platform"
                image="/images/fintech-platform.png"
                imageAlt="Fintech Platform"
                paragraphs={[
                    "Prosperian helps the Systemically Excluded to prosper by facilitating Global Participation in Sophisticated Financial Offerings through contemporary FinTech solutions.",
                    "Our proprietory PlaNet system is a comprehensive platform that supports eCommerce and FinTech businesses globally throughout the customer lifecycle, from Product Rendering, Customer Acquisition through AI-Driven eMarketing, Account Hosting, BackOffice Systems, Billing, Card Issuing, Digital Payment Channels, Payment Processing, PCI DSS Compliant Card Handling, eBanking, eWallet Technology, Asset Digitalisation, Equity Trading Automation, Field Agents, Financial Accounting Systems, Mobile Applications, Messaging Gateways, Multi-Channel CRM, Contact Centre Operations, and various Specialised Integrations & Gateway Solutions."
                ]}
            />
            <FadeIn>
                <div className="mx-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Typography variant="36px" className="text-black">
                            Where We Started
                        </Typography>
                    </motion.div>
                    <StaggerContainer staggerDelay={0.1}>
                        <Typography variant="20px-regular" className="text-[#4B4B4B
            ] mt-10">
                            <ul className="space-y-4">
                                {["As a somewhat disillusioned South African entrepreneur, Francois Olivier assumed the role of business development director for Prosperian in Mauritius in 2014, after Prosperian's success in South Africa since 2002. At its apex, Prosperian's South African business reached roughly 2 million consumer contracts, supported by roughly 1,000 permanent staff members.", "During 2018 Prosperian moved its operation from Mauritius to Singapore, with limited financial and human resources, to accomplish our extremely ambitious international expansion dream. During this time, in our startup phase, we had to learn new skills, travel the globe, and employ vast resources and new technologies to form our unique products in the melting pot of cultures and solutions, that our business has become today.", "We had to develop tech solutions from scratch, by utilising technology that was not available even up to a few years ago, against the backdrop of large, multi-national companies employing billions, with substantially bigger teams, to accomplish the reach that we did, so far", "The shear scope and complexity of our project, at times, proved more challenging than expected and we had to find innovative workarounds to make offerings function as intended.", "Most importantly, we had to learn how to reach each market cost-effectively and to engage with consumers in their own preferred manner, whilst gathering crucial clientbase behavioural statistics and building attrition and payment profiles, by offering services over a minimum period of 2 years in each market."].map((item, index) => (
                                    <StaggerItem key={index} direction="bottom">
                                        <li>{item}</li>
                                    </StaggerItem>
                                ))}
                            </ul>
                        </Typography>
                    </StaggerContainer>
                </div>
            </FadeIn>
            <ContentSection
                title="Regulated Service Providers"
                image="/images/service-provider.png"
                imageAlt="Regulated Service Providers"
                paragraphs={[
                    "Prosperian partners with regulated service providers to free ourselves from the heavy weight of complex legislative requirements. This empowers us to focus on what truly matters - delivering our cutting-edge solutions with greater efficiency and at a lower cost. By embracing this strategic approach, we unlock the potential to innovate boldly, serve our clients better, and remain agile in a competitive world. It's not just about compliance; it's about creating the freedom to excel and transform ideas into impactful realities."
                ]}
            />

            <Timeline items={milestones} />

            <motion.div
                className="bg-black p-14 px-40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Typography variant="42px" className="text-[#B94E1E]">OUR TEAM</Typography>
                <Typography variant="28px-regular" className="text-white text-center">Executives</Typography>

                <StaggerContainer staggerDelay={0.2}>
                    <div className="mt-10 grid grid-cols-1 gap-28 md:grid-cols-2">
                        {/* Francois Olivier */}
                        <StaggerItem direction="bottom">
                            <div className="flex flex-col items-start text-start">
                                <div className="h-48 w-48 rounded-lg bg-white shadow-lg"></div>
                                <Typography variant="28px-regular" className="mt-4 text-[#B94E1E]">Francois Olivier</Typography>
                                <Typography variant="22px-regular" className="text-white">Founder</Typography>
                                <Typography variant="20px-regular" className="mt-2 text-white italic">"Always do the right thing for the right reason."</Typography>
                                <Typography variant="20px-regular" className="mt-1 text-white/60 text-start">
                                    Francois (52) gained 30 Years industry experience spanning banking, financial services, ecommerce,
                                    equities, fintech, credit, insurance, IT, investing, property, direct marketing, and product development
                                </Typography>
                            </div>
                        </StaggerItem>

                        {/* Johrika Jenkins */}
                        <StaggerItem direction="bottom">
                            <div className="flex flex-col items-start text-start">
                                <div className="h-48 w-48 rounded-lg bg-white shadow-lg"></div>
                                <Typography variant="28px-regular" className="mt-4 text-[#B94E1E]">Johrika Jenkins</Typography>
                                <Typography variant="22px-regular" className="text-white">Chief Operating Officer</Typography>
                                <Typography variant="20px-regular" className="mt-2 text-white italic">"We are here to serve customers; they pay our bills."</Typography>
                                <Typography variant="20px-regular" className="mt-1 text-white/60 text-start">
                                    Johrika (47) gained over 20 years of experience in direct marketing, the greater part of which she was also involved
                                    in client services. She further brings invaluable knowledge of product development, banking, and ecommerce.
                                </Typography>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </motion.div>

            <motion.div
                className="bg-white p-14 px-40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Typography variant="42px" className="text-[#B94E1E]">CORE OPERATIONAL TEAM</Typography>

                <StaggerContainer staggerDelay={0.15}>
                    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                        {/* Compliance & Legal */}
                        <StaggerItem direction="bottom">
                            <div className="flex flex-col items-start text-start bg-[#F4F4F4] p-10">
                                <div className="h-32 w-32 rounded-lg bg-white shadow-lg"></div>
                                <Typography variant="22px" className="mt-4 text-[#B94E1E]">Compliance & Legal</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    Our Compliance & Legal team serves as the bedrock of integrity within our organization. This team ensures that every decision, action, and strategy align with regulatory standards and ethical practices.
                                </Typography>
                                <Typography variant="22px" className="mt-2 text-black font-bold">Internal & External</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    Operating through a robust internal legal function, our team is bolstered by a network of trusted external regional specialists. This dual approach enables us to navigate the complexities of compliance across multiple jurisdictions with confidence and precision. Their unwavering commitment safeguards our reputation and reinforces our promise of ethical excellence in every endeavour.
                                </Typography>
                            </div>
                        </StaggerItem>

                        {/* Digital Engagement */}
                        <StaggerItem direction="bottom">
                            <div className="flex flex-col items-start text-start bg-[#F4F4F4] p-10">
                                <div className="h-32 w-32 rounded-lg bg-white shadow-lg"></div>
                                <Typography variant="22px" className="mt-4 text-[#B94E1E]">Digital Engagement</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    At the core of every impactful campaign and stunning design is our team, bringing visions to life. They don't just craft campaigns—they create meaningful connections that elevate brands and build lasting relationships.
                                </Typography>
                                <Typography variant="22px" className="mt-2 text-black font-bold">eMarketing: Driving Engagement & Growth</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    Our experts blend data-driven strategies with innovation, forging trust and loyalty. From email marketing to SEO, every click and message counts.
                                </Typography>
                                <Typography variant="22px" className="mt-2 text-black font-bold">Digital Communication: Bridging the Gap</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    We treat communication as an art, creating narratives that captivate and inspire. Whether through social media or multimedia storytelling, we ensure your brand remains unforgettable in a busy digital world.
                                </Typography>
                            </div>
                        </StaggerItem>

                        {/* InfoTech */}
                        <StaggerItem direction="bottom">
                            <div className="flex flex-col items-start text-start bg-[#F4F4F4] p-10">
                                <div className="h-32 w-32 rounded-lg bg-white shadow-lg"></div>
                                <Typography variant="22px" className="mt-4 text-[#B94E1E]">InfoTech</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    Innovation drives our Information Technology team, the architects of our digital landscape. With a core of dedicated business and systems analysts, this team transforms complex challenges into streamlined solutions. They work in harmony with specialist developers skilled in integration, front-end, and application development.
                                </Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    This blend of internal expertise and external specialization fosters a culture of continuous improvement, ensuring our technological infrastructure not only meets but exceeds the evolving demands of our business and stakeholders. Their work enables us to stay ahead in an ever-changing digital world, delivering solutions that inspire and empower.
                                </Typography>
                            </div>
                        </StaggerItem>

                        {/* Finance & CoSec */}
                        <StaggerItem direction="bottom">
                            <div className="flex flex-col items-start text-start bg-[#F4F4F4] p-14 rounded-3xl">
                                <div className="h-32 w-32 rounded-lg bg-white shadow-lg"></div>
                                <Typography variant="22px" className="mt-4 text-[#B94E1E]">Finance & CoSec</Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    The Finance & Company Secretarial team is the heartbeat of our financial health and governance. By partnering with professional regional and jurisdictional service providers, we maintain a seamless, efficient, and expert-driven approach to financial management and corporate compliance.
                                </Typography>
                                <Typography variant="22px-regular" className="mt-2 text-black/80">
                                    This outsourced model ensures we leverage world-class expertise tailored to the unique demands of each region we operate in. Together, they uphold the highest standards of accuracy, transparency, and accountability, empowering our organization to thrive in a dynamic global marketplace.
                                </Typography>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </motion.div>
        </>
    );
}