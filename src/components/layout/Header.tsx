"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Our Homes", href: "/our-homes" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#111111]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#2a2a2a]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Superior Homes (Qld) Pty Ltd"
                width={160}
                height={56}
                className="h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                      isActive
                        ? "text-[#ff7302]"
                        : scrolled
                        ? "text-[#a0a0a0] hover:text-[#f5f5f5]"
                        : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-[#ff7302]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#ff7302] transition-transform duration-200 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[#a0a0a0] hover:text-[#f5f5f5] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-bold py-3 border-b border-[#2a2a2a] transition-colors duration-200 ${
                  isActive ? "text-[#ff7302]" : "text-[#f5f5f5] hover:text-[#ff7302]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Spacer so content doesn't sit under fixed header */}
      <div className="h-20 md:h-24" />
    </>
  );
}
