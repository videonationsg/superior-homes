import Link from "next/link";
import { Mail } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-[#ff7302] py-16 md:py-20">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Build Your Dream Home?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Get in touch today — we&apos;d love to hear about your project and help you
          bring it to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#111111] transition-all duration-200 active:scale-95 text-sm uppercase tracking-wide"
          >
            Contact Us
          </Link>
          <a
            href="mailto:info@superiorhomesqld.com.au"
            className="inline-flex items-center gap-2 text-white font-medium text-sm hover:underline underline-offset-4"
          >
            <Mail size={16} />
            info@superiorhomesqld.com.au
          </a>
        </div>
      </div>
    </section>
  );
}
