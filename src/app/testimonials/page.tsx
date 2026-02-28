import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/sections/CTAStrip";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Testimonials | Superior Homes (Qld) Pty Ltd",
  description:
    "Read what our clients say about building with Superior Homes Queensland.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Don't take our word for it — here's what our clients have to say."
        backgroundImage="/images/hero-banner.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`bg-[#111111] border rounded-sm p-6 flex flex-col gap-4 ${
                  t.featured
                    ? "border-[#ff7302]/40"
                    : "border-[#2a2a2a] hover:border-[#ff7302]/30"
                } transition-colors duration-200`}
              >
                <Quote size={24} className="text-[#ff7302] shrink-0" />
                <p className="text-[#a0a0a0] text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-[#2a2a2a]">
                  <p className="text-[#ff7302] font-semibold text-sm">{t.name}</p>
                  {t.featured && (
                    <span className="text-xs text-[#a0a0a0]">Featured Client</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
