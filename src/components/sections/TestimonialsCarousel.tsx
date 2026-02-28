"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const featured = testimonials.filter((t) => t.featured);

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
            Testimonials
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          aria-live="polite"
          aria-label="Client testimonials"
        >
          <div className="flex">
            {featured.map((t) => (
              <div
                key={t.id}
                className="min-w-0 flex-[0_0_100%] px-2"
                role="group"
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-8 md:p-10 text-center">
                  <Quote size={36} className="text-[#ff7302] mx-auto mb-6" />
                  <p className="text-[#f5f5f5] text-lg md:text-xl leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-[#ff7302] font-semibold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6" aria-label="Carousel navigation">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === selected
                  ? "bg-[#ff7302] w-6"
                  : "bg-[#2a2a2a] hover:bg-[#a0a0a0]"
              }`}
            />
          ))}
        </div>

        {/* Link */}
        <div className="text-center mt-8">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#ff7302] font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Read All Testimonials <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
