"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const homes = [
  { name: "The Hampton", src: "/images/homes/the-hampton-23.jpg", style: "Colonial" },
  { name: "The Longreach", src: "/images/homes/the-longreach.jpg", style: "Modern" },
  { name: "The Matilda", src: "/images/homes/the-matilda.jpg", style: "Mediterranean" },
  { name: "The Daintree", src: "/images/homes/the-daintree-5.jpg", style: "Colonial" },
  { name: "The Sapphire", src: "/images/homes/the-sapphire.jpg", style: "Modern" },
  { name: "The Westwood", src: "/images/homes/the-westwood.jpg", style: "Mediterranean" },
  { name: "The Katherine", src: "/images/homes/the-katherine-23.jpg", style: "Colonial" },
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = homes.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active]);

  return (
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
          // Wrap offset for circular behaviour
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
              onClick={() => !isCenter && setActive(i)}
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
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-center gap-6 mt-10 px-4">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous home"
          className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302] transition-colors duration-200"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
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

        {/* Next */}
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
  );
}
