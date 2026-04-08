"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const SpiritualSection = () => {
  const t = useTranslations("spiritual");
  const locale = useLocale();

  const features = [
    {
      key: "quran",
      icon: (
        <div>
          <Image
            src={"/images/quran.png"}
            width={200}
            priority
            height={200}
            alt={t("features.quran.alt")}
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: t("features.quran.title"),
      description: t("features.quran.description"),
    },
    {
      key: "prayer",
      icon: (
        <div>
          <Image
            src={"/images/mosque.png"}
            width={200}
            priority
            height={200}
            alt={t("features.prayer.alt")}
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: t("features.prayer.title"),
      description: t("features.prayer.description"),
    },
    {
      key: "ai",
      icon: (
        <div>
          <Image
            src={"/images/ai.png"}
            width={200}
            priority
            height={200}
            alt={t("features.ai.alt")}
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
  ];

  return (
    <section className="relative flex items-center justify-center px-6 py-20">
      <div
        className={`max-w-400 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${locale === "ar" ? "text-right" : "text-left"}`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 20 }}
          whileInView={{ opacity: 1, x: 0, rotateY: -15 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative perspective-1000 flex justify-center lg:justify-end"
        >
          <Image
            src={"/images/app2.jpg"}
            height={2000}
            width={2000}
            alt={t("appAlt")}
            className="max-h-150 object-contain h-full w-full relative z-10"
          />
          <div className="absolute max-w-80 rounded-r-full aspect-square lg:max-w-180 mx-auto max-h-50 lg:max-h-100 top-1/2 -translate-y-1/2 blur-3xl left-1/2 -translate-x-1/2  bg-primary/20 h-full w-full"></div>
        </motion.div>

        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold mb-12 xl:mb-16"
          >
            {t("title")}
          </motion.h2>

          <div className="space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group flex flex-col gap-4"
              >
                <div
                  className={`flex items-center gap-4 ${locale === "ar" ? "flex-row-reverse" : ""}`}
                >
                  {feature.icon}
                  <h4 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray/80 leading-relaxed ">
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
