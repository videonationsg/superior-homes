import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

const quickLinks = [
  { label: "Inclusions", href: "/inclusions" },
  { label: "Construction Time", href: "/construction-time" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Experience", href: "/experience" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Superior Homes (Qld) Pty Ltd"
                width={150}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-xs">
              Family owned &amp; operated Queensland builder since 1996. Building
              Colonial, Modern &amp; Mediterranean style homes from Brisbane to Gympie.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/superiorhomesqld/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Superior Homes on Facebook"
                className="p-2 rounded-full border border-[#2a2a2a] text-[#a0a0a0] hover:text-[#ff7302] hover:border-[#ff7302] transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a0a0a0] text-sm hover:text-[#ff7302] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <p className="text-[#a0a0a0] text-sm mb-2">
              HIA Member Since 1997
            </p>
            <a
              href="mailto:info@superiorhomesqld.com.au"
              className="text-[#ff7302] text-sm hover:text-[#ffa902] transition-colors duration-200"
            >
              info@superiorhomesqld.com.au
            </a>
            <p className="text-[#a0a0a0] text-sm mt-3">
              Servicing Brisbane to Gympie, Queensland
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#a0a0a0] text-xs">
            &copy; {year} Superior Homes (Qld) Pty Ltd. All rights reserved.
          </p>
          <p className="text-[#a0a0a0] text-xs">
            HIA Member &nbsp;&bull;&nbsp; NKBA Affiliated
          </p>
        </div>
      </div>
    </footer>
  );
}
