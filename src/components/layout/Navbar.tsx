"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/navigation";
import { usePathname, useRouter } from "next/navigation";
import { Typography } from "../shared/typography";
import { motion } from "framer-motion";
import { useTransition } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Optimized Next.js navigation handler
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Stop default animated link jump

    startTransition(() => {
      // 1. Move to the new page without Next.js scrolling logic
      router.push(href, { scroll: false });
      
      // 2. Snap instantly to the top at the exact microsecond the page mounts
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-24 items-center justify-between px-6 lg:px-10">
        <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
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
                <Typography variant="18px">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className={`transition-colors hover:text-orange-600 ${
                        pathname === item.href
                          ? "text-orange-600 border-b-2 pb-3 border-orange-600"
                          : "text-neutral-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </Typography>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
