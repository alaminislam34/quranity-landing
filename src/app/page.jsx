"use client";

import HeroSection from "./components/Hero/Hero";
import FAQ from "./components/Home/FAQ";
import GuidanceRoot from "./components/Home/GuidanceRoot";
import Guide from "./components/Home/Guide";
import PricingSection from "./components/Home/PricingSection";
import SpiritualSection from "./components/Home/SpiritualSection";
import Testimonial from "./components/Home/Testimonial";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Guide />
      <SpiritualSection />
      <PricingSection />
      <GuidanceRoot />
      <Testimonial />
      <FAQ />
    </div>
  );
}
