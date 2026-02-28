import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import { floorPlans } from "@/data/floor-plans";
import { Bed, Bath, Car, SquareIcon } from "lucide-react";

export const metadata = {
  title: "Floor Plans | Superior Homes (Qld) Pty Ltd",
  description:
    "Browse our range of Colonial, Modern and Mediterranean floor plans. All plans can be modified by our in-house draftsman.",
};

export default function FloorPlansPage() {
  return (
    <>
      <PageHero
        title="Floor Plans"
        subtitle="Browse our range of quality designs — or work with our in-house draftsman to create something entirely your own."
        backgroundImage="/images/hero-banner.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter hint */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Colonial", "Modern", "Mediterranean"].map((style) => (
              <span
                key={style}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                  style === "All"
                    ? "bg-[#ff7302] border-[#ff7302] text-white"
                    : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] cursor-pointer"
                }`}
              >
                {style}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorPlans.map((plan) => (
              <Link
                key={plan.slug}
                href={`/floor-plans/${plan.slug}`}
                className="group bg-[#111111] border border-[#2a2a2a] rounded-sm overflow-hidden hover:border-[#ff7302]/50 transition-all duration-200"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Style badge */}
                  <span className="absolute top-3 left-3 text-xs font-semibold bg-[#ff7302] text-white px-2 py-1 rounded-sm">
                    {plan.style}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-[#f5f5f5] font-bold text-lg mb-3">{plan.name}</h3>
                  <div className="flex items-center gap-4 text-[#a0a0a0] text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Bed size={14} className="text-[#ff7302]" />
                      {plan.bedrooms} Bed
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} className="text-[#ff7302]" />
                      {plan.bathrooms} Bath
                    </span>
                    <span className="flex items-center gap-1">
                      <Car size={14} className="text-[#ff7302]" />
                      {plan.garage} Garage
                    </span>
                    {plan.sqm && (
                      <span className="flex items-center gap-1">
                        <SquareIcon size={14} className="text-[#ff7302]" />
                        {plan.sqm}m²
                      </span>
                    )}
                  </div>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed line-clamp-2">
                    {plan.description}
                  </p>
                  <div className="mt-4 text-[#ff7302] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom plans CTA */}
      <section className="py-16 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] mb-3">
            Can&apos;t find exactly what you&apos;re looking for?
          </h2>
          <p className="text-[#a0a0a0] mb-6">
            Our in-house draftsman Gary has over 35 years of experience and access to 80+
            plans. He can modify any of our existing designs or work with you to create
            something entirely custom.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ff7302] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#ea7617] transition-all duration-200 active:scale-95 text-sm uppercase tracking-wide"
          >
            Enquire About a Custom Plan
          </Link>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
