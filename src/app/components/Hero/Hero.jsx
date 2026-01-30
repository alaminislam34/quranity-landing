"use client";

import Image from "next/image";
import React from "react";
import InfiniteGrid from "./Lines";

function HeroSection() {
  return (
    <div className="py-4 lg:pt-12 relative overflow-hidden pb-20 mb-24">
      <InfiniteGrid />
      <div className="py-6 md:py-8 relative">
        <h1 className="text-4xl md:text-5xl text-wrap xl:text-8xl font-extrabold font-lato mx-auto text-center max-w-7xl mb-6 leading-normal">
          Ask. Learn. Reflect. Grow With Quranity
        </h1>
        <p className="max-w-4xl mx-auto w-11/12 font-roboto text-center text-lg lg:text-2xl text-[#4A4A4A]">
          Stay connected to Allah with accurate prayer times, daily Qur’an
          verses, and trusted Islamic guidance — all in one beautifully designed
          app.
        </p>
      </div>
      <div className="mt-10 lg:mt-12 mx-auto relative">
        <div className="max-w-400 w-11/12 mx-auto absolute top-0 left-1/2 -translate-x-1/2 flex flex-row justify-between items-center">
          <Image
            src={"/images/Gradients.png"}
            height={800}
            width={1227}
            alt="App Image"
            className="mx-auto max-w-2xl z-10 relative rotate-180"
          />
          <Image
            src={"/images/Gradients.png"}
            height={800}
            width={1227}
            alt="App Image"
            className="mx-auto max-w-2xl z-10 relative"
          />
        </div>
        <div className="absolute max-w-80 aspect-square lg:max-w-180 mx-auto -rotate-45 max-h-80 lg:max-h-180 top-0 left-1/2 -translate-x-1/2  bg-primary/20 blur-[100px] h-full w-full"></div>
        <div className="flex items-center justify-center">
          <Image
            src={"/images/app.png"}
            height={800}
            width={1227}
            alt="App Image"
            className="mx-auto max-w-6xl w-10/12 lg:w-11/12 object-contain z-10 relative"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
