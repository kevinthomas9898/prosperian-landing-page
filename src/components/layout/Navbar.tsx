import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
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
                  className="text-sm font-medium text-neutral-800 transition-colors hover:text-orange-600"
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