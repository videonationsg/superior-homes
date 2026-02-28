"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageHero from "@/components/ui/PageHero";
import { homes } from "@/data/homes";
import { Mail, ArrowUpRight } from "lucide-react";

type Style = "All" | "Colonial" | "Modern" | "Mediterranean" | "Renovation";

const styles: Style[] = ["All", "Colonial", "Modern", "Mediterranean", "Renovation"];

export default function OurHomesPage() {
  const [filter, setFilter] = useState<Style>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = filter === "All" ? homes : homes.filter((h) => h.style === filter);

  const slides = filtered.map((h) => ({ src: h.image, alt: h.name }));

  return (
    <>
      <PageHero
        title="Our Homes"
        subtitle="Built in the Caboolture area — available to view by appointment."
        backgroundImage="/images/hero-banner.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ff7302]/10 border border-[#ff7302]/30 text-[#ff7302] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-3">
                Built Homes
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] tracking-tight">
                Browse Our Homes
              </h2>
            </div>
            {/* Filter pills — desktop */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                    filter === s
                      ? "bg-white border-white text-[#0a0a0a]"
                      : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302]"
                  }`}
                >
                  {s}
                  {s !== "All" && (
                    <span className="ml-1 opacity-60">
                      ({homes.filter((h) => h.style === s).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Filter pills — mobile */}
          <div className="flex sm:hidden flex-wrap gap-2 mb-8">
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                  filter === s
                    ? "bg-white border-white text-[#0a0a0a]"
                    : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((home, i) => (
              <button
                key={home.slug}
                onClick={() => setLightboxIndex(i)}
                className="group text-left"
                aria-label={`View ${home.name}`}
              >
                {/* Seed-style image frame */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] mb-4 shadow-sm group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-shadow duration-300">
                  <Image
                    src={home.image}
                    alt={home.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {home.featured && (
                    <span className="absolute top-3 left-3 text-xs font-bold bg-[#ff7302] text-white px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  {/* Arrow icon — Seed-style */}
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight size={14} className="text-white" />
                  </span>
                </div>

                {/* Card info below image */}
                <div className="px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[#f5f5f5] font-bold text-sm leading-snug">
                      {home.name}
                    </h3>
                    <ArrowUpRight
                      size={15}
                      className="text-[#a0a0a0] group-hover:text-[#ff7302] transition-colors flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <span className="mt-1 inline-block text-xs text-[#ff7302] font-semibold">
                    {home.style}
                  </span>
                  <p className="text-[#a0a0a0] text-xs leading-relaxed line-clamp-2 mt-1">
                    {home.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[#a0a0a0] py-20">
              No homes match this filter.
            </p>
          )}
        </div>
      </section>

      {/* Viewing CTA */}
      <section className="py-14 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] mb-3">
            Enquire to Arrange a Viewing
          </h2>
          <p className="text-[#a0a0a0] mb-6">
            Many of these homes are available to view in person in the Caboolture area.
            Get in touch and we&apos;ll arrange a time that suits you.
          </p>
          <a
            href="mailto:info@superiorhomesqld.com.au"
            className="inline-flex items-center gap-2 bg-[#ff7302] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#ea7617] transition-all duration-200 active:scale-95 text-sm uppercase tracking-wide"
          >
            <Mail size={16} /> info@superiorhomesqld.com.au
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  );
}
