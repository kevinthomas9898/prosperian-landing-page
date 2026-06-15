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
                    "PulsePay enables global merchants to thrive—no matter the risk profile. With cutting-edge technology and a 100% acceptance rate, we don't just process payments—we drive growth."
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
                    "Prosperian Card is a modern global purchase card designed for a new generation of borderless commerce. Built for international users, it supports multilingual interaction and seamless payments across markets, making it easy to transact, manage spending, and access flexible purchasing power anywhere in the world.",

                    "The Prosperian Card includes a built-in revolving credit facility that allows cardholders to make purchases today and repay over time within a flexible spending cycle. Because the credit limits are intentionally structured to remain within applicable regulatory thresholds in many jurisdictions, the product can be deployed efficiently across multiple territories while maintaining a streamlined onboarding experience.",

                    "Beyond payments and credit, the Prosperian Card introduces a powerful ecosystem of value. Cardholders earn loyalty rewards on every transaction, turning everyday spending into meaningful benefits that accumulate over time. Businesses can also leverage the platform to remunerate employees, contractors, or sales agents instantly, enabling real-time payouts, incentives, or commissions directly onto their cards. This creates a dynamic financial tool that supports both spending and earning within a single integrated system.",

                    "Elegant in design and powerful in function, the Prosperian Card is more than a payment tool—it is a gateway to global financial convenience, empowering individuals and businesses with accessible credit, frictionless transactions, intelligent rewards, and the freedom to prosper wherever opportunity appears."
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
