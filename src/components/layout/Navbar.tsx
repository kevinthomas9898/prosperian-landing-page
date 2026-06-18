"use client";

import { useState, useTransition, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/navigation";
import { usePathname, useRouter } from "next/navigation";
import { Typography } from "../shared/typography";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Optimized Next.js navigation handler
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Stop default animated link jump
    setIsOpen(false);

    startTransition(() => {
      // 1. Move to the new page without Next.js scrolling logic
      router.push(href, { scroll: false });
      
      // 2. Snap instantly to the top at the exact microsecond the page mounts
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-white border-b'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="mx-auto flex h-24 items-center justify-between px-6 lg:px-10 relative z-50">
          <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
            <Image
              src="/logos/ProsperianCapitalLogo.png"
              alt="Prosperian Capital"
              width={140}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
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

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center p-2 text-neutral-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white"
          >
            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={`text-4xl font-semibold tracking-tight transition-colors hover:text-orange-600 ${
                      pathname === item.href ? "text-orange-600" : "text-neutral-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
