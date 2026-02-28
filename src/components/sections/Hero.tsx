"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background video — plays on hover, shows poster at rest */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hero-banner.webm"
        poster="/images/hero-banner.jpg"
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]/90" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-[#ff7302]/10 border border-[#ff7302]/30 text-[#ff7302] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          Family Owned &amp; Operated Since 1996
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Building Queensland
          <br />
          <span className="text-[#ff7302]">Dream Homes</span>
        </h1>

        <p className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Custom and pre-designed homes from Brisbane to Gympie. Colonial, Modern &amp;
          Mediterranean styles. HIA Member since 1997.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/floor-plans"
            className="inline-flex items-center gap-2 bg-[#ff7302] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#ea7617] transition-all duration-200 active:scale-95 text-sm uppercase tracking-wide"
          >
            View Floor Plans
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#f5f5f5]/30 text-[#f5f5f5] font-semibold px-8 py-4 rounded-sm hover:border-[#ff7302] hover:text-[#ff7302] transition-all duration-200 text-sm uppercase tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#a0a0a0] text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-[#ff7302]" />
      </div>
    </section>
  );
}
