"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubLink = {
  href: string;
  label: string;
};

type NavLink = {
  href: string;
  label: string;
  subLinks?: SubLink[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About us" },
  {
    href: "/services/full-house-interior-renovation",
    label: "Services",
    subLinks: [
      { label: "Full Home Interior Construction & Renovation", href: "/services/full-house-interior-renovation" },
      { label: "Kitchen Remodeling", href: "/services/kitchen-remodelling" },
      { label: "Bathroom Renovation", href: "/services/bathroom-renovation" },
      { label: "Single Room Transformations", href: "/services/single-room-transformation" },
      { label: "Custom Furniture", href: "/services/custom-furniture" },
    ],
  },
  { href: "/contactus", label: "Contact" },
];

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/aboutus")) return pathname.startsWith("/aboutus");
  if (href.startsWith("/contactus")) return pathname.startsWith("/contactus");
  if (href.startsWith("/services")) return pathname.startsWith("/services");
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-1" onClick={closeMenu}>
          <Image src="/images/Logo.png" alt="Regenlanes Logo" width={36} height={36} />
          <span className="text-xl font-semibold tracking-tight lowercase">regenlanes</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className={`flex items-center gap-1 py-2 text-sm transition ${
                  isActiveLink(pathname, link.href)
                    ? "text-black"
                    : "text-zinc-500 hover:text-black"
                }`}
                onClick={closeMenu}
              >
                {link.label}
                {link.subLinks && (
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {link.subLinks && (
                <div className="absolute left-1/2 top-full mt-0 w-64 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out">
                  <div className="rounded-xl border border-zinc-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-lg px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-black"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        className={`${menuOpen ? "block" : "hidden"} max-h-[80vh] overflow-y-auto border-t border-zinc-100 bg-white md:hidden`}
      >
        {navLinks.map((link) => (
          <div key={link.label}>
            <Link
              href={link.href}
              className={`block px-6 py-4 text-sm font-medium transition hover:bg-zinc-50 ${
                isActiveLink(pathname, link.href) ? "text-black" : "text-zinc-900"
              }`}
              onClick={() => (link.subLinks ? undefined : closeMenu())}
            >
              {link.label}
            </Link>
            {link.subLinks && (
              <div className="bg-zinc-50 px-6 py-2">
                {link.subLinks.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    className="block py-3 text-sm text-zinc-500 hover:text-black"
                    onClick={closeMenu}
                  >
                    • {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
