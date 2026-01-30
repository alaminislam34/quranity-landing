"use client";

import HeroSection from "./components/Hero/Hero";
import Guide from "./components/Home/Guide";
import PricingSection from "./components/Home/PricingSection";
import SpiritualSection from "./components/Home/SpiritualSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Guide />
      <SpiritualSection />
      <PricingSection />
    </div>
  );
}
