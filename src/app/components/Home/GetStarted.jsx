"use client";

import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="py-12 md:py-16 xl:py-20">
      <div className="max-w-400 mx-auto w-11/12 flex flex-col items-center justify-center relative">
        {/* Background Outlined Text */}
        <div className="relative w-full flex flex-col justify-center">
          <h2
            className="text-[12vw] md:text-[15vw] font-black leading-none text-center select-none tracking-wider"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
            }}
          >
            QURANITY
          </h2>

          {/* Foreground Button Layer */}
          <div className=" flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group"
            >
              <span className="text-white text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
                Get Started
              </span>
              <ChevronRight className="text-white w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 stroke-[3px] transition-transform group-hover:translate-x-2" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
