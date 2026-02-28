"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageHero from "@/components/ui/PageHero";
import { homes } from "@/data/homes";
import { Mail } from "lucide-react";

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
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                  filter === s
                    ? "bg-[#ff7302] border-[#ff7302] text-white"
                    : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302]"
                }`}
              >
                {s}
                {s !== "All" && (
                  <span className="ml-1 text-current opacity-60">
                    ({homes.filter((h) => h.style === s).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((home, i) => (
              <button
                key={home.slug}
                onClick={() => setLightboxIndex(i)}
                className="group bg-[#111111] border border-[#2a2a2a] rounded-sm overflow-hidden text-left hover:border-[#ff7302]/50 transition-all duration-200 cursor-pointer"
                aria-label={`View ${home.name}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={home.image}
                    alt={home.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {home.featured && (
                    <span className="absolute top-2 left-2 text-xs font-semibold bg-[#ff7302] text-white px-2 py-0.5 rounded-sm">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-[#f5f5f5] font-semibold text-sm mb-1">{home.name}</h3>
                  <p className="text-[#a0a0a0] text-xs leading-relaxed line-clamp-2">
                    {home.description}
                  </p>
                  <span className="mt-2 inline-block text-xs text-[#ff7302] font-medium">
                    {home.style}
                  </span>
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
