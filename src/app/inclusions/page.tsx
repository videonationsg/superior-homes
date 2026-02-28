import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import { inclusions } from "@/data/inclusions";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Standard Inclusions | Superior Homes (Qld) Pty Ltd",
  description:
    "View the comprehensive standard inclusions that come with every Superior Homes build — among the best in Queensland.",
};

export default function InclusionsPage() {
  return (
    <>
      <PageHero
        title="Inclusions"
        subtitle="Every Superior Home comes with a comprehensive standard inclusions package — more for less."
        backgroundImage="/images/hero-banner.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Our standard inclusions package is one of the most comprehensive in Queensland.
              Every item listed below is included as standard — no hidden extras, no nasty surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inclusions.map((cat) => (
              <div
                key={cat.category}
                className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 hover:border-[#ff7302]/30 transition-colors duration-200"
              >
                <h3 className="text-[#f5f5f5] font-bold text-base mb-4 pb-3 border-b border-[#2a2a2a] flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#ff7302] rounded-full inline-block" />
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-[#ff7302] mt-0.5 shrink-0" />
                      <span className="text-[#a0a0a0] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-[#a0a0a0] text-sm mt-10">
            * Conditions apply. Specific products and brands are subject to availability.
            Speak to our team for full details.
          </p>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
