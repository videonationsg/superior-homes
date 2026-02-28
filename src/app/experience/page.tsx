import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import { Hammer, Users, Home, Award } from "lucide-react";

export const metadata = {
  title: "Experience | Superior Homes (Qld) Pty Ltd",
  description:
    "Learn about the experience and credentials behind every Superior Home build.",
};

const stats = [
  {
    icon: Hammer,
    value: "540+",
    label: "Homes Built by Peter",
    detail: "21 years on the tools (1989–2016)",
  },
  {
    icon: Users,
    value: "18",
    label: "Apprentices Trained",
    detail: "Peter's personal commitment to the trade",
  },
  {
    icon: Home,
    value: "460+",
    label: "Superior Homes Builds",
    detail: "From 1996 to 2016 in Moreton Shire",
  },
  {
    icon: Award,
    value: "49+",
    label: "Years Combined Service",
    detail: "7 tradesmen, 2 apprentices on our team",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience"
        subtitle="Decades of hands-on experience behind every home we build."
        backgroundImage="/images/hero-banner.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {stats.map(({ icon: Icon, value, label, detail }) => (
              <div
                key={label}
                className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 text-center hover:border-[#ff7302]/40 transition-colors duration-200"
              >
                <div className="inline-flex p-3 rounded-full bg-[#ff7302]/10 border border-[#ff7302]/20 mb-4">
                  <Icon size={22} className="text-[#ff7302]" />
                </div>
                <p className="text-[#ff7302] font-extrabold text-3xl mb-1">{value}</p>
                <p className="text-[#f5f5f5] font-semibold text-sm mb-1">{label}</p>
                <p className="text-[#a0a0a0] text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Body content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 md:p-8">
              <h3 className="text-[#f5f5f5] font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#ff7302] rounded-full inline-block" />
                Peter Coffin — Founder
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                Peter began his carpentry career in 1989, spending 21 years on the tools
                before founding Superior Homes in 1996. During that time he personally
                constructed over 540 houses and trained 18 apprentices — a testament to his
                dedication to the trade and to passing on that knowledge.
              </p>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Having grown up in cyclone country (Innisfail, Far North Queensland),
                Peter&apos;s understanding of structural integrity is built on lived experience.
                That ethos flows through every home Superior Homes builds.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 md:p-8">
              <h3 className="text-[#f5f5f5] font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#ff7302] rounded-full inline-block" />
                The Superior Homes Team
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                Our team comprises 7 experienced tradesmen and 2 apprentices with a combined
                49+ years of service to the company. Each tradesperson is hand-selected by
                Peter and held to the same exacting standards on every project.
              </p>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                From 1996 to 2016, Superior Homes built 460 homes in the Moreton Shire
                Council area — approximately 60 projects per year. That track record speaks
                directly to the consistency and reliability that our clients have come to
                expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
