"use client";

import HeroSection from "./components/Hero/Hero";
import Guide from "./components/Home/Guide";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Guide />
    </div>
  );
}
