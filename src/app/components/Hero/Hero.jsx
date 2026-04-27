"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import InfiniteGrid from "./Lines";

function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="py-4 lg:pt-12 relative pb-12">
      <InfiniteGrid />
      <div className="py-6 md:py-8 relative">
        <h1 className="text-4xl md:text-5xl text-wrap xl:text-8xl font-extrabold font-lato mx-auto text-center max-w-7xl mb-6 leading-normal">
          {t("title")}
        </h1>
        <p className="max-w-4xl mx-auto w-11/12 font-roboto text-center text-lg lg:text-2xl text-[#4A4A4A]">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-10 lg:mt-12 mx-auto relative">
        <div className="w-11/12 mx-auto absolute top-0 left-1/2 -translate-x-1/2 flex flex-row justify-between items-center">
          <Image
            src={"/images/Gradients.png"}
            height={800}
            width={1227}
            alt={t("appImageAlt")}
            className="mx-auto max-w-xs md:max-w-md lg:max-w-2xl z-10 relative rotate-180"
          />
          <Image
            src={"/images/Gradients.png"}
            height={800}
            width={1227}
            alt={t("appImageAlt")}
            className="mx-auto max-w-xs md:max-w-md lg:max-w-2xl z-10 relative"
          />
        </div>
        <div className="absolute max-w-80 aspect-square lg:max-w-180 mx-auto -rotate-45 max-h-80 lg:max-h-180 top-0 left-1/2 -translate-x-1/2  bg-primary/20 blur-[100px] h-full w-full"></div>
        <div className="flex items-center justify-center">
          <Image
            src={"/images/app.png"}
            height={800}
            width={1227}
            loading="lazy"
            alt={t("appImageAlt")}
            className="mx-auto max-w-6xl w-10/12 lg:w-11/12 object-contain z-10 relative"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
