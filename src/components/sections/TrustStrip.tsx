import { Home, Award, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "Since 1996",
    label: "Family Owned & Operated",
  },
  {
    icon: Award,
    value: "HIA Member",
    label: "Member Since 1997",
  },
  {
    icon: Users,
    value: "460+ Homes",
    label: "Built Across Queensland",
  },
  {
    icon: MapPin,
    value: "Brisbane–Gympie",
    label: "Our Service Region",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#111111] border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="p-3 rounded-full bg-[#ff7302]/10 border border-[#ff7302]/20 group-hover:bg-[#ff7302]/20 transition-colors duration-200">
                <Icon size={22} className="text-[#ff7302]" />
              </div>
              <div>
                <p className="text-[#ff7302] font-bold text-lg md:text-xl leading-tight">
                  {value}
                </p>
                <p className="text-[#a0a0a0] text-xs md:text-sm mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
