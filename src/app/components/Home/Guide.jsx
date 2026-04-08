"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Guide = () => {
  const t = useTranslations("guide");

  const cards = [
    {
      image: "/images/quran.png",
      alt: t("cards.quran.alt"),
      title: t("cards.quran.title"),
      description: t("cards.quran.description"),
    },
    {
      image: "/images/mosque.png",
      alt: t("cards.prayer.alt"),
      title: t("cards.prayer.title"),
      description: t("cards.prayer.description"),
    },
    {
      image: "/images/ai.png",
      alt: t("cards.ai.alt"),
      title: t("cards.ai.title"),
      description: t("cards.ai.description"),
    },
  ];

  return (
    <div>
      <section className="max-w-400 mx-auto w-11/12 py-12 md:py-16 xl:py-20">
        <h1 className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold text-center mb-12 xl:mb-16">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 *:border *:border-[#BFBFBF]/50">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-[#141414] backdrop-blur-3xl px-6 py-4 lg:px-10 lg:py-5 flex flex-col gap-6 items-center justify-center"
            >
              <div>
                <Image
                  src={card.image}
                  width={200}
                  priority
                  height={200}
                  alt={card.alt}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-[#F5F5F5] font-semibold md:text-lg xl:text-xl">
                  {card.title}
                </h1>
                <p className="text-gray/80 text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Guide;
