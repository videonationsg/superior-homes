import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import HomesFanCarousel from "@/components/sections/HomesFanCarousel";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import CTAStrip from "@/components/sections/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <HomesFanCarousel />
      <TestimonialsCarousel />
      <CTAStrip />
    </>
  );
}
