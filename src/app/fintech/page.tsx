import { ContentSection } from "@/components/sections/content-section";
import { OverviewSection } from "@/components/sections/overview-section";

export default function Fintech() {
    return (
        <>
            <OverviewSection
                title="FinTech"
                subtitle="Comprehensive Global Platform"
                image="/images/Fintech.png"
                imageAlt="Fintech"
                paragraphs={[
                    "Our comprehensive PLANet platform that supports eCommerce and FinTech businesses globally throughout the customer lifecycle, from Account Hosting, BackOffice Systems, Billing, Card Issuing, Customer Acquisition, Contact Centre Operations, Digital Payment Channels, eBanking, eMarketing, eWallet Technology, Equity Trading Automation, Field Agents, Financial Accounting Systems, Mobile Applications, Messaging Gateways, Multi-Channel CRM, Payment Processing, PCI DSS Compliant Card Handling, through various Specialised Gateway Solutions.",
                ]}
            />

            <ContentSection
                title="PulsePay"
                image="/images/pulse_pay.png"
                imageAlt="PulsePay"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "PulsePay enables global merchants to thrive—no matter the risk profile. With cutting-edge technology and a 100% acceptance rate, we don’t just process payments—we drive growth."
                ]}
                button={
                    {
                        label: "Website TBA",
                        href: "#"
                    }
                }
            />
            <ContentSection
                title="PayPayYa"
                image="/images/pay_pay_ya.png"
                imageAlt="PayPayYa"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "Sweet & Simple Digital Payments! Experience the naturally easy way to send, receive, and manage your money. PayPayYa makes digital payments as refreshing as a tropical breeze."
                ]}
                button={
                    {
                        label: "Website TBA",
                        href: "#"
                    }
                }
            />
            <ContentSection
                title="Prosperian Ambassador Card"
                image="/images/pros_amba_card.png"
                imageAlt="Prosperian Ambassador Card"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "The Prosperian Ambassador Card empowers you to earn, spend, and access credit with ease. Ambassadors can generate income by introducing the services of the Prosperian Capital Group to new clients, spend crypto seamlessly at participating merchants globally, and enjoy a flexible revolving credit facility available in most jurisdictions. It’s your gateway to earning, spending, and growing with Prosperian."
                ]}
                button={
                    {
                        label: "Website TBA",
                        href: "#"
                    }
                }
            />
            <ContentSection
                title="TerraX"
                image="/images/terraX.png"
                imageAlt="TerraX"
                variant="compact"
                reverse={true}
                className="border border-gray-200 m-12 rounded-lg"
                imageClassName="max-w-[600px]"
                paragraphs={[
                    "TerraX Financial is a global neo-banking and embedded finance platform providing SMEs with access to multi-currency accounts, digital asset wallets, cross-border payments, corporate card issuance, payroll services, treasury management, digitized fractional investments, equity trading, trade finance, and business lending solutions.",
                    "Through a single integrated ecosystem, TerraX Finance enables businesses to transact, manage liquidity, and access capital globally, reducing operational complexity while accelerating international growth. The platform serves SMEs, e-commerce merchants, professional service firms, importers, exporters, and digital enterprises operating across multiple jurisdictions"
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
