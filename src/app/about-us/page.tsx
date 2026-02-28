import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import { CheckCircle, Users, Home, Star, Clock } from "lucide-react";

const team = [
  {
    name: "Peter Coffin",
    title: "Owner / Managing Director",
    credential: "21 years on the tools · 540+ homes built · 18 apprentices trained",
    bio: "Peter founded Superior Homes in 1996 with a simple goal: deliver second-to-none service in workmanship, materials and communication. Having grown up in cyclone country (Innisfail, Far North Queensland), Peter understands that quality construction is non-negotiable.",
    placeholder: true,
  },
  {
    name: "Gary",
    title: "In-House Draftsman",
    credential: "35+ years experience · 80+ floor plans",
    bio: "Gary offers personal consultations to clients looking to modify an existing plan or design something entirely new. His depth of experience means your floor plan is perfectly tailored to your block and lifestyle.",
    placeholder: true,
  },
  {
    name: "Sharon",
    title: "Interior Design Consultant",
    credential: "27 years experience",
    bio: "Sharon provides a complimentary 90-minute interior design and colour consultation with every build. Her expertise ensures your home's finishes, fixtures and palette come together beautifully.",
    placeholder: true,
  },
];

const values = [
  {
    icon: Star,
    title: "Workmanship",
    desc: "Every home is built to the same standard we would build our own. No shortcuts, no compromises.",
  },
  {
    icon: Home,
    title: "Materials",
    desc: "We specify premium materials including Bluescope Colorbond, Dulux paint systems and quality cabinetry throughout.",
  },
  {
    icon: CheckCircle,
    title: "Inclusions",
    desc: "Our standard inclusions set is among the most comprehensive in Queensland — more for less.",
  },
  {
    icon: Users,
    title: "Communication",
    desc: "From first consultation to handover, you are kept fully informed at every stage of your build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Family owned and operated since 1996 — building Queensland homes with passion and pride."
        backgroundImage="/images/hero-banner.jpg"
      />

      {/* Owner section */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
            <div>
              <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mb-5">
                Built on Trust Since 1996
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-4">
                Superior Homes (Qld) Pty Ltd was established by Peter Coffin in 1996 with a
                clear vision: to build homes that families can be proud of, at a price that
                represents genuine value.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-4">
                We construct Colonial, Modern and Mediterranean style homes across the region
                between Brisbane and Gympie. As a HIA Member since 1997, we are committed to
                the highest industry standards in every home we build.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed">
                With over 460 homes completed since inception and approximately 60 projects
                delivered annually, Superior Homes has built a reputation that speaks for
                itself — through the quality of our work and the loyalty of our clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "460+", label: "Homes Built", sub: "Since 1996" },
                { value: "28+", label: "Years Experience", sub: "Est. 1996" },
                { value: "60", label: "Homes Per Year", sub: "Approx. annual output" },
                { value: "HIA", label: "Member Since 1997", sub: "Industry accredited" },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-[#ff7302] mb-1">{value}</p>
                  <p className="text-[#f5f5f5] font-semibold text-sm">{label}</p>
                  <p className="text-[#a0a0a0] text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-center mb-12">
              <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
                Meet the Team
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
                The People Behind Your Home
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 hover:border-[#ff7302]/30 transition-colors duration-200"
                >
                  {/* Placeholder avatar */}
                  <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-4">
                    <Users size={28} className="text-[#ff7302]" />
                  </div>
                  <h3 className="text-[#f5f5f5] font-bold text-lg">{member.name}</h3>
                  <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-wide mb-2">
                    {member.title}
                  </p>
                  <p className="text-[#a0a0a0] text-xs mb-3 border-b border-[#2a2a2a] pb-3">
                    {member.credential}
                  </p>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
              Our Commitments
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm"
              >
                <div className="p-3 rounded-full bg-[#ff7302]/10 border border-[#ff7302]/20 inline-flex mb-4">
                  <Icon size={22} className="text-[#ff7302]" />
                </div>
                <h3 className="text-[#f5f5f5] font-bold mb-2">{title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-center">
              <p className="text-[#a0a0a0] text-sm mb-4 uppercase tracking-widest">
                Accredited With
              </p>
              <div className="flex items-center gap-8 flex-wrap justify-center">
                <Image
                  src="/images/hia.png"
                  alt="HIA — Housing Industry Association"
                  width={100}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/images/hia-25years.png"
                  alt="HIA 25 Year Member"
                  width={100}
                  height={100}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/images/nkba.png"
                  alt="NKBA"
                  width={100}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
