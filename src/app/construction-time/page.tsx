import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import { Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Construction Time | Superior Homes (Qld) Pty Ltd",
  description:
    "Typical build times for Superior Homes Queensland — from final plans to handover.",
};

const timeframes = [
  {
    type: "Sewered Sites",
    duration: "12–14 Weeks",
    description:
      "From the completion of final working plans, allow 12 to 14 weeks to handover.",
    icon: Clock,
  },
  {
    type: "Unsewered Sites",
    duration: "14–16 Weeks",
    description:
      "From the completion of final working plans, allow 14 to 16 weeks to handover.",
    icon: Clock,
  },
];

const notes = [
  "Wet weather must be factored in beyond the stated periods.",
  "Conditions apply — speak to our team for a project-specific timeline.",
  "Our construction manager keeps you informed at every stage of the build.",
  "Many of our homes have been completed ahead of schedule.",
];

export default function ConstructionTimePage() {
  return (
    <>
      <PageHero
        title="Construction Time"
        subtitle="We build efficiently without compromising on quality. Here's what to expect."
        backgroundImage="/images/hero-banner.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeframe cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {timeframes.map(({ type, duration, description, icon: Icon }) => (
              <div
                key={type}
                className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-8 text-center hover:border-[#ff7302]/40 transition-colors duration-200"
              >
                <div className="inline-flex p-3 rounded-full bg-[#ff7302]/10 border border-[#ff7302]/20 mb-5">
                  <Icon size={24} className="text-[#ff7302]" />
                </div>
                <h3 className="text-[#f5f5f5] font-bold text-lg mb-2">{type}</h3>
                <p className="text-[#ff7302] font-extrabold text-4xl mb-3">{duration}</p>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 md:p-8">
            <h3 className="text-[#f5f5f5] font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#ff7302] rounded-full inline-block" />
              Important Notes
            </h3>
            <ul className="space-y-3">
              {notes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#ff7302] mt-0.5 shrink-0" />
                  <span className="text-[#a0a0a0] text-sm leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client testimonial quote */}
          <blockquote className="mt-10 border-l-2 border-[#ff7302] pl-6">
            <p className="text-[#a0a0a0] italic text-base leading-relaxed mb-2">
              &ldquo;Superior commenced construction early and finished 3 weeks ahead of
              schedule — remarkable given the industry delays at the time.&rdquo;
            </p>
            <cite className="text-[#ff7302] text-sm font-semibold not-italic">
              — Ananda &amp; Luke Oxford
            </cite>
          </blockquote>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
