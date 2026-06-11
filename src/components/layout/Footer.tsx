import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

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
    <footer className="bg-black text-white">
      <div className="mx-auto px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Image
              src="/logos/ProsperianCapitalLogo-black.png"
              alt="Prosperian Capital"
              width={180}
              height={80}
            />
          </div>

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

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Support
            </h3>

            <div className="space-y-3 text-sm text-neutral-300">
              {supportLinks.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-400">
              @2026 All Rights Reserved by Prosperian Capital
              Holdings Pte Ltd
            </p>

            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 hover:border-white"
            >
              <LinkIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}