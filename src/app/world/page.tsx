import { Typography } from "@/components/shared/typography";
import { ContentSection } from "@/components/sections/content-section";
import { Timeline, type TimelineItem } from "@/components/sections/TimeLine";
import Image from "next/image";
import { WorldSection } from "@/components/sections/WorldSection";
export default function WorldPage() {


    const milestones: TimelineItem[] = [
        { year: "2002", side: "left",
            description: "South African (ZA) Operation Starts in a Basement",
        },
        { year: "2012", side: "right",
            description:
                "ZA Operation reaches 980 Permanent Staff across 24 Locations",
        },
        { year: "2014", side: "left",
            description:
                "Prosperian Capital International Incorporates in Mauritius (MU) for Global Market Development",
        },
        { year: "2015", side: "right",
            description:
                "MU Operation Completes PLANetPay Global Platform Development",
        },
        { year: "2016", side: "left",
            description: [
                "eServe MU launches First Products in 2 Countries",
                "ZA Operation Winds up after Concluding 2 Million Subscription Contracts",
            ],
        },
        { year: "2017", side: "right",
            description:
                "eServe MU Extends Territorial Reach to 29 Countries",
        },
        { year: "2018", side: "left",
            description:
                "Prosperian Wealth Establishes in Hong Kong",
        },
        { year: "2019", side: "right",
            description: [
                "Key Team Members completes Research Visits to 44 Countries",
                "eServe SG Expands to 80 Countries",
            ],
        },
        { year: "2020", side: "left",
            description: [
                "Prosperian Capital International Incorporates in Singapore",
                "PLANetPay Global Platform Achieves PCI DSS Certification",
            ],
        },
        { year: "2022", side: "right",
            description: [
                "Acquire Tankwa CyberFarm Property",
                "Conclude BaaS Contract with PayPay Ya & Premier ADVantage Card Service Providers",
                "Integrated to Tier 1 Global PSPs",
            ],
        },
        { year: "2023", side: "left",
            description:
                "Implemented Advanced Risk Mitigation Tools",
        },
        { year: "2024", side: "right",
            description:
                "Restructured for Efficiency & Future Growth",
        },
        { year: "2025", side: "left",
            description:
                "Additional Product Rollouts & Growth",
        },
        { year: "2026", side: "right",
            description:
                "Planned Digital Equity Offering",
        },
    ];
    return (
        <>
            <WorldSection />
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
            <div className="mx-16 mb-20">
                <Typography variant="36px" className="text-black">
                    Where We Started
                </Typography>
                {/* cnver to ul */}
                <Typography variant="20px-regular" className="text-[#4B4B4B
            ] mt-10">
                    <ul className="space-y-4">
                        <li>As a somewhat disillusioned South African entrepreneur, Francois Olivier assumed the role of business development director for Prosperian in Mauritius in 2014, after Prosperian's success in South Africa since 2002. At its apex, Prosperian's South African business reached roughly 2 million consumer contracts, supported by roughly 1,000 permanent staff members.</li>
                        <li>During 2018 Prosperian moved its operation from Mauritius to Singapore, with limited financial and human resources, to accomplish our extremely ambitious international expansion dream. During this time, in our startup phase, we had to learn new skills, travel the globe, and employ vast resources and new technologies to form our unique products in the melting pot of cultures and solutions, that our business has become today.</li>
                        <li>We had to develop tech solutions from scratch, by utilising technology that was not available even up to a few years ago, against the backdrop of large, multi-national companies employing billions, with substantially bigger teams, to accomplish the reach that we did, so far</li>
                        <li>The shear scope and complexity of our project, at times, proved more challenging than expected and we had to find innovative workarounds to make offerings function as intended.</li>
                        <li>Most importantly, we had to learn how to reach each market cost-effectively and to engage with consumers in their own preferred manner, whilst gathering crucial clientbase behavioural statistics and building attrition and payment profiles, by offering services over a minimum period of 2 years in each market.</li>
                    </ul>
                </Typography>
            </div>
            <ContentSection
                title="Regulated Service Providers"
                image="/images/service-provider.png"
                imageAlt="Regulated Service Providers"
                paragraphs={[
                    "Prosperian partners with regulated service providers to free ourselves from the heavy weight of complex legislative requirements. This empowers us to focus on what truly matters - delivering our cutting-edge solutions with greater efficiency and at a lower cost. By embracing this strategic approach, we unlock the potential to innovate boldly, serve our clients better, and remain agile in a competitive world. It's not just about compliance; it's about creating the freedom to excel and transform ideas into impactful realities."
                ]}
            />

            <Timeline items={milestones} />

            <div className="bg-black p-14">
                <Typography variant="42px" className="text-[#B94E1E]">OUR TEAM</Typography>
                <Typography variant="20px-regular" className="text-white text-3xl">Executives</Typography>
            </div>
        </>
    );
}