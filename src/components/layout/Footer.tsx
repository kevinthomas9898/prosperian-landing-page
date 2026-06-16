"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animated-wrapper";

const servicesColumn1 = [
  "AgriNova",
  "BrightByte",
  "eServe",
  "PulsePay",
];

const servicesColumn2 = [
  "PayPayYa",
  "Prosperian Card",
  "SmartStox",
  "OryXFund",
];

const supportLinks = [
  "About Us",
  "Privacy Policy",
  "FAQs",
  "Terms of Services",
];

export default function Footer() {
  return (
    <FadeIn duration={0.6}>
      <footer className="bg-black text-white">
        <div className="mx-auto px-6 py-16 lg:px-10">
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid gap-12 md:grid-cols-4">
              <StaggerItem direction="bottom">
                <div>
                  <Image
                    src="/logos/ProsperianCapitalLogo-black.png"
                    alt="Prosperian Capital"
                    width={180}
                    height={80}
                  />
                </div>
              </StaggerItem>

              <StaggerItem direction="bottom">
                <div>
                  <h3 className="mb-6 text-lg font-semibold">
                    Contact Us
                  </h3>

                  <div className="space-y-3 text-sm text-neutral-300">
                    <p>
                      Email -
                      Corporate@ProsperianCapital.com
                    </p>

                    <p>
                      Address - 531A Upper Cross Street
                    </p>

                    <p>#04-98 Hong Lim Complex</p>

                    <p>Singapore, 051531</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem direction="bottom">
                <div>
                  <h3 className="mb-6 text-lg font-semibold">
                    Services
                  </h3>

                  <div className="grid grid-cols-2 gap-4 text-sm text-neutral-300">
                    <div className="space-y-3">
                      {servicesColumn1.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {servicesColumn2.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem direction="bottom">
                <div>
                  <h3 className="mb-6 text-lg font-semibold">
                    Support
                  </h3>

                  <div className="space-y-3 text-sm text-neutral-300">
                    {supportLinks.map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/"
                          className="block hover:text-white"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          <motion.div
            className="mt-12 border-t border-neutral-800 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-neutral-400">
                @2026 All Rights Reserved by Prosperian Capital
                Holdings Pte Ltd
              </p>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 hover:border-white"
                >
                  <LinkIcon size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>
    </FadeIn>
  );
}