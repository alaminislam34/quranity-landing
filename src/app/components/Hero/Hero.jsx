"use client";

import Image from "next/image";
import React from "react";
import InfiniteGrid from "./Lines";

function HeroSection() {
  return (
    <div className="py-4 lg:pt-12 relative overflow-hidden">
      <InfiniteGrid />
      <div className="py-6 md:py-8 relative">
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold font-lato mx-auto text-center lg:w-7/12 mb-6 leading-normal">
          Ask.Learn.Reflect.Grow With Quranity
        </h1>
        <p className="max-w-4xl mx-auto font-roboto text-center text-lg lg:text-2xl text-[#4A4A4A]">
          Stay connected to Allah with accurate prayer times, daily Qur’an
          verses, and trusted Islamic guidance — all in one beautifully designed
          app.
        </p>
      </div>
      <div className="mt-10 lg:mt-12 mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <Image
            src={"/images/Gradients.png"}
            height={800}
            width={1227}
            alt="App Image"
            className="mx-auto max-w-5xl z-10 relative"
          />
          <Image
            src={"/images/Gradients.png"}
            height={800}
            width={1227}
            alt="App Image"
            className="mx-auto max-w-5xl z-10 relative"
          />
        </div>
        <div className="absolute max-w-180 mx-auto -rotate-45 min-h-180 top-0 left-1/2 -translate-x-1/2 blur-[100px] bg-primary/20 border h-full w-full"></div>
        <Image
          src={"/images/app.png"}
          height={800}
          width={1227}
          alt="App Image"
          className="mx-auto max-w-5xl z-10 relative"
        />
      </div>
    </div>
  );
}

export default HeroSection;
