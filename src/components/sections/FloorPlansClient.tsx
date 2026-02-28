"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Car, SquareIcon, ArrowUpRight } from "lucide-react";
import type { FloorPlan } from "@/data/floor-plans";

const STYLES = ["All", "Colonial", "Modern", "Mediterranean"] as const;

export default function FloorPlansClient({ plans }: { plans: FloorPlan[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? plans : plans.filter((p) => p.style === active);

  const pills = (extraClass = "") =>
    STYLES.map((style) => (
      <button
        key={style}
        onClick={() => setActive(style)}
        className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors cursor-pointer ${
          active === style
            ? "bg-white border-white text-[#0a0a0a]"
            : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#ff7302] hover:text-[#ff7302]"
        } ${extraClass}`}
      >
        {style}
      </button>
    ));

  return (
    <>
      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#ff7302]/10 border border-[#ff7302]/30 text-[#ff7302] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-3">
            Our Range
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] tracking-tight">
            Browse Floor Plans
          </h2>
        </div>
        {/* Filter pills — desktop */}
        <div className="hidden sm:flex flex-wrap gap-2">{pills()}</div>
      </div>

      {/* Filter pills — mobile */}
      <div className="flex sm:hidden flex-wrap gap-2 mb-8">{pills()}</div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((plan) => (
          <Link
            key={plan.slug}
            href={`/floor-plans/${plan.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] mb-4 shadow-sm group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-shadow duration-300">
              <Image
                src={plan.image}
                alt={plan.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-3 left-3 text-xs font-bold bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                {plan.style}
              </span>
              <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight size={14} className="text-white" />
              </span>
            </div>

            <div className="px-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[#f5f5f5] font-bold text-base leading-snug">
                  {plan.name}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-[#a0a0a0] group-hover:text-[#ff7302] transition-colors flex-shrink-0 mt-0.5"
                />
              </div>
              <div className="flex items-center gap-3 mt-2 text-[#a0a0a0] text-xs">
                <span className="flex items-center gap-1">
                  <Bed size={12} className="text-[#ff7302]" />
                  {plan.bedrooms} Bed
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={12} className="text-[#ff7302]" />
                  {plan.bathrooms} Bath
                </span>
                <span className="flex items-center gap-1">
                  <Car size={12} className="text-[#ff7302]" />
                  {plan.garage} Garage
                </span>
                {plan.sqm && (
                  <span className="flex items-center gap-1">
                    <SquareIcon size={12} className="text-[#ff7302]" />
                    {plan.sqm}m²
                  </span>
                )}
              </div>
              <p className="text-[#a0a0a0] text-sm leading-relaxed line-clamp-2 mt-2">
                {plan.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
