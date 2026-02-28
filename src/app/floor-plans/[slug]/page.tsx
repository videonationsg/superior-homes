import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { floorPlans } from "@/data/floor-plans";
import PageHero from "@/components/ui/PageHero";
import { Bed, Bath, Car, SquareIcon, ArrowLeft, Mail } from "lucide-react";

export async function generateStaticParams() {
  return floorPlans.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = floorPlans.find((p) => p.slug === slug);
  if (!plan) return {};
  return {
    title: `${plan.name} | Floor Plans | Superior Homes (Qld) Pty Ltd`,
    description: plan.description,
  };
}

export default async function FloorPlanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = floorPlans.find((p) => p.slug === slug);
  if (!plan) notFound();

  const related = floorPlans
    .filter((p) => p.slug !== plan.slug && (p.style === plan.style || p.bedrooms === plan.bedrooms))
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#111111] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-[#a0a0a0]">
          <Link href="/floor-plans" className="flex items-center gap-1 hover:text-[#ff7302] transition-colors">
            <ArrowLeft size={14} /> Floor Plans
          </Link>
          <span>/</span>
          <span className="text-[#f5f5f5]">{plan.name}</span>
        </div>
      </div>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Floor plan image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#2a2a2a]">
              <Image
                src={plan.image}
                alt={plan.name}
                fill
                className="object-contain bg-[#111111]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Details */}
            <div>
              <span className="text-xs font-semibold bg-[#ff7302] text-white px-2 py-1 rounded-sm mb-4 inline-block">
                {plan.style}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mb-4">
                {plan.name}
              </h1>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">{plan.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-4 text-center">
                  <Bed size={20} className="text-[#ff7302] mx-auto mb-1" />
                  <p className="text-[#f5f5f5] font-bold text-xl">{plan.bedrooms}</p>
                  <p className="text-[#a0a0a0] text-xs">Bedrooms</p>
                </div>
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-4 text-center">
                  <Bath size={20} className="text-[#ff7302] mx-auto mb-1" />
                  <p className="text-[#f5f5f5] font-bold text-xl">{plan.bathrooms}</p>
                  <p className="text-[#a0a0a0] text-xs">Bathrooms</p>
                </div>
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-4 text-center">
                  <Car size={20} className="text-[#ff7302] mx-auto mb-1" />
                  <p className="text-[#f5f5f5] font-bold text-xl">{plan.garage}</p>
                  <p className="text-[#a0a0a0] text-xs">Garage</p>
                </div>
                {plan.sqm && (
                  <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-4 text-center">
                    <SquareIcon size={20} className="text-[#ff7302] mx-auto mb-1" />
                    <p className="text-[#f5f5f5] font-bold text-xl">{plan.sqm}</p>
                    <p className="text-[#a0a0a0] text-xs">m²</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#ff7302] text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#ea7617] transition-all duration-200 active:scale-95 text-sm"
                >
                  Enquire About This Plan
                </Link>
                <a
                  href="mailto:info@superiorhomesqld.com.au"
                  className="inline-flex items-center justify-center gap-2 border border-[#2a2a2a] text-[#a0a0a0] font-semibold px-6 py-3 rounded-sm hover:border-[#ff7302] hover:text-[#ff7302] transition-all duration-200 text-sm"
                >
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related plans */}
      {related.length > 0 && (
        <section className="py-16 bg-[#111111] border-t border-[#2a2a2a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-[#f5f5f5] mb-8">Related Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/floor-plans/${p.slug}`}
                  className="group bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm overflow-hidden hover:border-[#ff7302]/50 transition-colors"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain bg-[#111111] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#f5f5f5] font-semibold mb-1">{p.name}</h3>
                    <div className="flex gap-3 text-[#a0a0a0] text-xs">
                      <span>{p.bedrooms} Bed</span>
                      <span>{p.bathrooms} Bath</span>
                      <span>{p.garage} Garage</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
