"use client";

import HeroSection from "@/app/components/Hero/Hero";
import FAQ from "@/app/components/Home/FAQ";
import GuidanceRoot from "@/app/components/Home/GuidanceRoot";
import Guide from "@/app/components/Home/Guide";
import SpiritualSection from "@/app/components/Home/SpiritualSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Guide />
      <SpiritualSection />
      <GuidanceRoot />
      <FAQ />
    </div>
  );
}
