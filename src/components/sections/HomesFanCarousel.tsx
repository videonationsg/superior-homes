"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Bed, Bath, Car, Maximize2 } from "lucide-react";

type HomeEntry = {
  name: string;
  src: string;
  style: string;
  slug: string;
  bedrooms?: number;
  bathrooms?: number;
  garage?: number;
  sqm?: number;
  description?: string;
  floorPlanSlug?: string;
};

const homes: HomeEntry[] = [
  {
    name: "The Hampton",
    src: "/images/homes/the-hampton-23.jpg",
    style: "Colonial",
    slug: "the-hampton-23",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    description:
      "The Hampton 23 combines timeless colonial charm with modern functionality. Featuring generous living areas and a welcoming front facade.",
    floorPlanSlug: "the-hampton-23",
  },
  {
    name: "The Longreach",
    src: "/images/homes/the-longreach.jpg",
    style: "Colonial",
    slug: "the-longreach",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 220,
    description:
      "An enduring classic with a welcoming facade and a well-proportioned interior built for family life.",
  },
  {
    name: "The Matilda",
    src: "/images/homes/the-matilda.jpg",
    style: "Mediterranean",
    slug: "the-matilda",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 240,
    description:
      "Bold Mediterranean character with a tiled roof, rendered facade, and a beautifully appointed interior.",
  },
  {
    name: "The Daintree",
    src: "/images/homes/the-daintree-5.jpg",
    style: "Modern",
    slug: "the-daintree-5",
    bedrooms: 5,
    bathrooms: 3,
    garage: 2,
    sqm: 290,
    description:
      "Five bedrooms of pure quality — designed for larger families who refuse to compromise on space or style.",
    floorPlanSlug: "the-daintree-5-23",
  },
  {
    name: "The Sapphire",
    src: "/images/homes/the-sapphire.jpg",
    style: "Modern",
    slug: "the-sapphire",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    description:
      "Precious by name, precious by nature — The Sapphire is a refined home with outstanding quality throughout.",
  },
  {
    name: "The Westwood",
    src: "/images/homes/the-westwood.jpg",
    style: "Modern",
    slug: "the-westwood",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 235,
    description:
      "An impressive home that showcases Superior Homes' commitment to quality construction and exceptional design.",
  },
  {
    name: "The Katherine",
    src: "/images/homes/the-katherine-23.jpg",
    style: "Colonial",
    slug: "the-katherine-23",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    description:
      "The 2023 Katherine brings fresh elevation design and enhanced internal specifications to a beloved plan.",
    floorPlanSlug: "the-dundee-23",
  },
];

function getCardProps(offset: number) {
  const abs = Math.abs(offset);
  if (abs > 2) return null;
  return {
    rotateY: offset * 28,
    x: offset * 300,
    scale: 1 - abs * 0.13,
    opacity: 1 - abs * 0.18,
    zIndex: 10 - abs,
  };
}

export default function HomesFanCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<HomeEntry | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = homes.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  useEffect(() => {
    if (paused || selected) return;
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active, selected]);

  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  return (
    <>
      <section className="relative bg-[#0a0a0a] py-20 md:py-28 overflow-hidden">
        {/* Section heading */}
        <div className="text-center mb-14 px-4">
          <div className="inline-flex items-center gap-2 bg-[#ff7302]/10 border border-[#ff7302]/30 text-[#ff7302] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Browse Our Range
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] tracking-tight">
            Our Homes
          </h2>
          <p className="mt-3 text-[#a0a0a0] text-base max-w-xl mx-auto">
            From Colonial classics to Modern designs — each home crafted for Queensland living.
          </p>
        </div>

        {/* Fan carousel stage */}
        <div
          className="relative mx-auto select-none"
          style={{ height: 420, perspective: "1200px", maxWidth: 1100 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {homes.map((home, i) => {
            const offset = i - active;
            let d = offset;
            if (d > total / 2) d -= total;
            if (d < -total / 2) d += total;

            const props = getCardProps(d);
            if (!props) return null;

            const isCenter = d === 0;

            return (
              <motion.div
                key={home.src}
                className="absolute top-0 left-1/2 cursor-pointer"
                style={{
                  width: 340,
                  height: 420,
                  marginLeft: -170,
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  x: props.x,
                  rotateY: props.rotateY,
                  scale: props.scale,
                  opacity: props.opacity,
                  zIndex: props.zIndex,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                onClick={() => {
                  if (isCenter) {
                    setSelected(home);
                  } else {
                    setActive(i);
                  }
                }}
                whileHover={isCenter ? { scale: props.scale * 1.03 } : undefined}
              >
                {/* Card */}
                <div
                  className={`relative w-full h-full rounded-2xl overflow-hidden ${
                    isCenter
                      ? "ring-2 ring-[#ff7302]/50 shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
                      : "shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <Image
                    src={home.src}
                    alt={home.name}
                    fill
                    className="object-cover"
                    sizes="340px"
                    priority={isCenter}
                  />
                  {/* Bottom gradient + label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-1">
                      {home.style}
                    </span>
                    <p className="text-white font-bold text-lg leading-tight">{home.name}</p>
                    {isCenter && (
                      <p className="text-white/60 text-xs mt-1">Click to view details</p>
                    )}
                  </div>
                  {isCenter && (
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
                      <Maximize2 size={14} className="text-white/80" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-center gap-6 mt-10 px-4">
          <button
            onClick={prev}
            aria-label="Previous home"
            className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {homes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to ${homes[i].name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-[#ff7302] w-6"
                    : "bg-[#2a2a2a] w-1.5 hover:bg-[#a0a0a0]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next home"
            className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/our-homes"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] text-sm font-semibold uppercase tracking-wide px-6 py-3 rounded-sm transition-all duration-200"
          >
            View All Homes
          </Link>
        </div>
      </section>

      {/* ── Modal popup ── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              key="panel"
              className="fixed z-50 inset-0 flex items-center justify-center pointer-events-none px-4"
            >
              <motion.div
                className="pointer-events-auto relative bg-[#111111] rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] w-full max-w-3xl"
                initial={{ opacity: 0, scale: 0.55, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.55, y: 40 }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              >
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 text-white transition-colors duration-150"
                >
                  <X size={18} />
                </button>

                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src={selected.src}
                    alt={selected.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <span className="inline-block bg-[#ff7302] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {selected.style}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f5f5f5] tracking-tight mb-3">
                    {selected.name}
                  </h3>

                  {(selected.bedrooms || selected.sqm) && (
                    <div className="flex flex-wrap gap-4 mb-5">
                      {selected.bedrooms && (
                        <div className="flex items-center gap-2 text-[#a0a0a0]">
                          <Bed size={16} className="text-[#ff7302]" />
                          <span className="text-sm font-semibold">{selected.bedrooms} Bedrooms</span>
                        </div>
                      )}
                      {selected.bathrooms && (
                        <div className="flex items-center gap-2 text-[#a0a0a0]">
                          <Bath size={16} className="text-[#ff7302]" />
                          <span className="text-sm font-semibold">{selected.bathrooms} Bathrooms</span>
                        </div>
                      )}
                      {selected.garage && (
                        <div className="flex items-center gap-2 text-[#a0a0a0]">
                          <Car size={16} className="text-[#ff7302]" />
                          <span className="text-sm font-semibold">{selected.garage} Garage</span>
                        </div>
                      )}
                      {selected.sqm && (
                        <div className="flex items-center gap-2 text-[#a0a0a0]">
                          <Maximize2 size={16} className="text-[#ff7302]" />
                          <span className="text-sm font-semibold">{selected.sqm} m²</span>
                        </div>
                      )}
                    </div>
                  )}

                  {selected.description && (
                    <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
                      {selected.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {selected.floorPlanSlug ? (
                      <Link
                        href={`/floor-plans/${selected.floorPlanSlug}`}
                        onClick={() => setSelected(null)}
                        className="inline-flex items-center gap-2 bg-[#ff7302] hover:bg-[#e56500] text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-sm transition-colors duration-200"
                      >
                        View Floor Plan
                      </Link>
                    ) : (
                      <Link
                        href="/floor-plans"
                        onClick={() => setSelected(null)}
                        className="inline-flex items-center gap-2 bg-[#ff7302] hover:bg-[#e56500] text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-sm transition-colors duration-200"
                      >
                        See All Floor Plans
                      </Link>
                    )}
                    <Link
                      href="/our-homes"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] text-sm font-semibold uppercase tracking-wide px-6 py-3 rounded-sm transition-colors duration-200"
                    >
                      View All Homes
                    </Link>
                    <Link
                      href={`/contact?plan=${encodeURIComponent(selected.name)}`}
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] text-sm font-semibold uppercase tracking-wide px-6 py-3 rounded-sm transition-colors duration-200"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
