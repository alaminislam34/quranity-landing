"use client";

import Image from "next/image";

const Guide = () => {
  return (
    <div>
      <section className="max-w-400 mx-auto w-11/12 py-12 md:py-16 xl:py-20">
        <h1 className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold text-center mb-12 xl:mb-16">
          Guided by Authentic Knowledge.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 *:border *:border-[#BFBFBF]/50">
          <div className="rounded-2xl bg-[#141414] backdrop-blur-3xl px-6 py-4 lg:px-10 lg:py-5 flex flex-col gap-6 items-center justify-center">
            <div>
              <Image
                src={"/images/quran.png"}
                width={200}
                priority
                height={200}
                alt="Quran image"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-[#F5F5F5] font-semibold md:text-lg xl:text-xl">
                {" "}
                Qur’an & Hadith-based guidance
              </h1>
              <p className="text-gray/80 text-sm md:text-base">
                Read the Qur’an with clarity and focus. Enjoy full Surah views,
                tajweed highlighting, translations, audio recitation
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#141414] backdrop-blur-3xl px-6 py-4 lg:px-10 lg:py-5 flex flex-col gap-6 items-center justify-center">
            <div>
              <Image
                src={"/images/mosque.png"}
                width={200}
                priority
                height={200}
                alt="Quran image"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-[#F5F5F5] font-semibold md:text-lg xl:text-xl">
                {" "}
                Accurate prayer times
              </h1>
              <p className="text-gray/80 text-sm md:text-base">
                Never miss a prayer with precise prayer times, next prayer
                countdowns, sunrise & sunset tracking, and Nafal prayer guidance
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#141414] backdrop-blur-3xl px-6 py-4 lg:px-10 lg:py-5 flex flex-col gap-6 items-center justify-center">
            <div>
              <Image
                src={"/images/ai.png"}
                width={200}
                priority
                height={200}
                alt="Quran image"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-[#F5F5F5] font-semibold md:text-lg xl:text-xl">
                {" "}
                AI with Islamic boundaries
              </h1>
              <p className="text-gray/80 text-sm md:text-base">
                Ask real-life questions and receive thoughtful, respectful
                Islamic guidance across spirituality, character, daily
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
