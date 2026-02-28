import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const styles = [
  {
    name: "Colonial",
    image: "/images/homes/the-longreach.jpg",
    description:
      "Timeless Queensland character with verandahs, pitched roofs and a welcoming street presence that never goes out of style.",
  },
  {
    name: "Modern",
    image: "/images/homes/the-alpha.jpg",
    description:
      "Clean lines, open plan living and seamless indoor-outdoor flow — designed for the way contemporary families live.",
  },
  {
    name: "Mediterranean",
    image: "/images/homes/the-richmond.jpg",
    description:
      "Sculpted facades, tiled roofs and elegant archways that bring a touch of European sophistication to Queensland.",
  },
];

export default function HomeStyles() {
  return (
    <section className="py-20 md:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
            Our Home Styles
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mb-4">
            Find Your Style
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto">
            We build in three distinct architectural styles, each crafted with the same
            uncompromising attention to quality and detail.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {styles.map(({ name, image, description }) => (
            <div
              key={name}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-[#2a2a2a] cursor-pointer"
            >
              <Image
                src={image}
                alt={`${name} style homes by Superior Homes`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              {/* Orange accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff7302] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-2xl mb-2">{name}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/our-homes"
            className="inline-flex items-center gap-2 bg-transparent border border-[#2a2a2a] text-[#f5f5f5] font-semibold px-8 py-4 rounded-sm hover:border-[#ff7302] hover:text-[#ff7302] transition-all duration-200 text-sm uppercase tracking-wide"
          >
            View All Our Homes <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
