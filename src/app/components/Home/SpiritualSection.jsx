"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const SpiritualSection = () => {
  const t = useTranslations("spiritual");
  const locale = useLocale();

  // Refs for Scroll Detection and Video Control
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Detect if section is in view (amount: 0.4 means 40% of the section is visible)
  const isInView = useInView(containerRef, { amount: 0.4 });

  // Handle Play/Pause based on scroll position
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented by browser:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const features = [
    {
      key: "quran",
      icon: "/images/quran.png",
      title: t("features.quran.title"),
      description: t("features.quran.description"),
    },
    {
      key: "prayer",
      icon: "/images/mosque.png",
      title: t("features.prayer.title"),
      description: t("features.prayer.description"),
    },
    {
      key: "ai",
      icon: "/images/ai.png",
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div
        className={`max-w-360 w-11/12 mx-auto flex *:flex-1 gap-12 items-center ${
          locale === "ar" ? "text-right flex-row-reverse" : "text-left"
        }`}
      >
        {/* LEFT SIDE: VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-1000 flex justify-center group"
        >
          {/* Dynamic Background Glow */}
          <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Professional Mobile Frame (9:16) */}
          <div className="relative z-10 w-full max-w-100 aspect-9/16 overflow-hidden rounded-[2.8rem] border-8 border-slate-900/1 bg-black shadow-2xl ring-1 ring-white/10">
            {/* Minimalist Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-white/10 rounded-full" />
            </div>

            <video
              ref={videoRef}
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src={`/videos/${locale === "ar" ? "arabic" : "english"}.mp4`}
                type="video/mp4"
              />
            </video>

            {/* Screen Reflections / Glass Effect */}
            <div className="absolute inset-0 pointer-events-none rounded-[2.2rem] ring-1 ring-inset ring-white/10" />
            <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/5 via-transparent to-transparent opacity-30" />
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT SECTION */}
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F5F5F5] text-3xl md:text-4xl xl:text-5xl font-bold leading-tight"
          >
            {t("title")}
          </motion.h2>

          <div className="space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group flex flex-col gap-3"
              >
                <div
                  className={`flex items-center gap-4 ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="shrink-0 p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <Image
                      src={feature.icon}
                      width={32}
                      height={32}
                      priority
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                </div>

                <div className={`${locale === "ar" ? "pr-14" : "pl-14"}`}>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualSection;
