import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import FloorPlansClient from "@/components/sections/FloorPlansClient";
import { floorPlans } from "@/data/floor-plans";
import Link from "next/link";

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
          <FloorPlansClient plans={floorPlans} />
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
