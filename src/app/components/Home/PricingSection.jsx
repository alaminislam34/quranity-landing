"use client";

import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div>
      <section className="max-w-400 mx-auto w-11/12 py-12 md:py-16 xl:py-20">
        <div className="mb-12 xl:mb-16 space-y-6">
          <h1 className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold text-center">
            Start for Free. Upgrade When You’re Ready.
          </h1>
          <p className="text-gray/80 text-sm md:text-base text-center max-w-2xl mx-auto px-4">
            Quranity offers a free plan so you can explore core features without
            commitment. When you’re ready, unlock deeper AI guidance and premium
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 *:border *:border-[#BFBFBF]/50">
          <div className="relative rounded-2xl aspect-3/4 bg-black/50 backdrop-blur-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start">
              <h2 className="text-white text-4xl font-bold tracking-tight">
                Basic
              </h2>
            </div>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-white text-7xl font-bold tracking-tighter leading-none">
                Free
              </span>
            </div>

            <div className="flex flex-col gap-5 my-6">
              {["Standard Access", "Daily verses"].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Check className="p-1 rounded-full bg-primary/20 text-primary" />
                  </div>
                  <span className="text-white text-lg font-medium opacity-90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-white transition-all duration-300 py-5 rounded-2xl text-black font-bold text-xl">
              {" "}
              Upgrade to Premium
            </button>
          </div>
          <div className="relative rounded-2xl aspect-3/4 bg-primary/10 p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
            {/* Header & Badge */}
            <div className="flex justify-between items-start">
              <h2 className="text-white text-4xl font-bold tracking-tight">
                Premium
              </h2>
              <div className="bg-primary/15 px-4 py-1.5 rounded-full">
                <p className="text-[#A17C3B] text-xs font-bold tracking-wide">
                  Most Popular
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-white text-7xl font-bold tracking-tighter leading-none">
                $4.99
              </span>
              <span className="text-white/70 text-xl font-medium">/mo</span>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-5 my-6">
              {[
                "Unlimited AI Access",
                "4K Video Recitations",
                "Offline Mode",
                "Priority Support",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Check className="p-1 rounded-full bg-primary/20 text-primary" />
                  </div>
                  <span className="text-white text-lg font-medium opacity-90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#C0810B] hover:bg-[#A67009] transition-all duration-300 py-5 rounded-2xl text-white font-bold text-xl shadow-[0_10px_20px_rgba(192,129,11,0.3)]">
              Upgrade to Premium
            </button>
          </div>
          <div className="relative rounded-2xl aspect-3/4 bg-black/50 backdrop-blur-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start">
              <h2 className="text-white text-4xl font-bold tracking-tight">
                Premium
              </h2>
              <div className="bg-primary/15 px-4 py-1.5 rounded-full">
                <p className="text-[#A17C3B] text-xs font-bold tracking-wide">
                  Popular
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-white text-7xl font-bold tracking-tighter leading-none">
                $4.99
                <span className="text-white/70 text-xl font-medium">/mo</span>
              </span>
            </div>

            <div className="flex flex-col gap-5 my-6">
              {[
                "Unlimited AI Access",
                "4K Video Recitations",
                "Offline Mode",
                "Priority Support",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Check className="p-1 rounded-full bg-primary/20 text-primary" />
                  </div>
                  <span className="text-white text-lg font-medium opacity-90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-white transition-all duration-300 py-5 rounded-2xl text-black font-bold text-xl">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
