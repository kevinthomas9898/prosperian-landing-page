"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-24 items-center justify-between px-6 lg:px-10">
        <Link href="/">
          <Image
            src="/logos/ProsperianCapitalLogo.png"
            alt="Prosperian Capital"
            width={140}
            height={60}
            priority
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    pathname === item.href
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-neutral-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}