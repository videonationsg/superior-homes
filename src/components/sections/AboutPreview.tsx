import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "In-house draftsman Gary — 35+ years experience & 80+ plans",
  "Complimentary 90-minute interior design consultation with Sharon",
  "Hand-selected, trusted tradespeople on every project",
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/hero-banner.jpg"
                alt="Superior Homes — Quality Queensland Builder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/50 to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-[#ff7302] text-[#f5f5f5] p-5 rounded-sm shadow-xl">
              <p className="font-extrabold text-2xl leading-none">28+</p>
              <p className="text-xs font-medium mt-0.5 text-[#f5f5f5]/80">Years Building</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
              About Superior Homes
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] leading-tight mb-5">
              A Builder You Can Trust
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-4">
              Peter Coffin established Superior Homes (Qld) in 1996 with a clear goal:
              supply clients with a second-to-none service in workmanship, materials,
              inclusions and communication — from the first consultation to handover.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              Having grown up in cyclone country, Peter understands that a home is more
              than four walls — it is your family&apos;s greatest investment, and we treat it
              that way.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#ff7302] mt-0.5 shrink-0" />
                  <span className="text-[#f5f5f5] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-[#ff7302] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
