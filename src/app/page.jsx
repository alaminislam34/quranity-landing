"use client";

import HeroSection from "./components/Hero/Hero";
import Guide from "./components/Home/Guide";
import SpiritualSection from "./components/Home/SpiritualSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Guide />
      <SpiritualSection />
    </div>
  );
}
