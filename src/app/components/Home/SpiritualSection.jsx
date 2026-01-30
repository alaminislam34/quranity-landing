import React from "react";
import { motion } from "motion/react";
import { BookOpen, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";

const SpiritualSection = () => {
  const features = [
    {
      icon: (
        <div>
          <Image
            src={"/images/quran.png"}
            width={200}
            priority
            height={200}
            alt="Quran image"
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: "Qur'an, Every Day",
      description:
        "Read the Qur'an with clarity and focus. Enjoy full Surah views, tajweed highlighting, translations, audio recitation, and daily verses for reflection.",
      pointTo: "top-[20%]",
    },
    {
      icon: (
        <div>
          <Image
            src={"/images/mosque.png"}
            width={200}
            priority
            height={200}
            alt="Quran image"
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: "Accurate Prayer & Time Awareness",
      description:
        "Never miss a prayer with precise prayer times, next prayer countdowns, sunrise & sunset tracking, and Nafal prayer guidance — customized to your location.",
      pointTo: "top-[55%]",
    },
    {
      icon: (
        <div>
          <Image
            src={"/images/ai.png"}
            width={200}
            priority
            height={200}
            alt="Quran image"
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: "Muslim AI — Guidance You Can Trust",
      description:
        "Get instant answers to your spiritual questions with our integrated AI, trained to provide context-aware guidance from reliable sources.",
      pointTo: "top-[85%]",
    },
  ];

  return (
    <section className="relative flex items-center justify-center px-6 py-20">
      <div className="max-w-400 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            alt="App image"
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
            Everything You Need to Stay <br />
            <span className="text-gray-100">Spiritually Connected</span>
          </motion.h2>

          <div className="space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group flex flex-col gap-4"
              >
                <div className="shrink-0 flex flex-row items-center gap-2">
                  {feature.icon}
                  <h4 className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors">
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
