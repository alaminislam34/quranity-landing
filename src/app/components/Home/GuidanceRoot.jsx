"use client";

import Image from "next/image";

const GuidanceRoot = () => {
  return (
    <div>
      <section className="max-w-400 mx-auto w-11/12 py-12 md:py-16 lg:py-20">
        <div>
          <h1 className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold text-center mb-12 xl:mb-16 max-w-3xl mx-auto">
            Guidance Rooted in Faith. Powered by Intelligence.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 xl:gap-x-0 relative">
          <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 max-h-40 max-w-7xl w-11/12 h-full rounded-full bg-primary/30 blur-[100px]"></div>
          <div className="max-w-5xl opacity-10 mx-auto w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-20">
            <Image
              src={"/images/background_animation.png"}
              height={5000}
              width={5000}
              alt="Animation"
              className="h-full w-full"
            />
          </div>
          <div className="flex items-center justify-center relative z-10">
            <Image
              src={"/images/iPhone16Pro.png"}
              height={5000}
              width={5000}
              alt="Phone image"
              priority
              className="max-h-240 h-full w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center relative z-10">
            <Image
              src={"/images/iPhone16Pro2.png"}
              height={5000}
              width={5000}
              alt="Phone image"
              priority
              className="max-h-240 h-full w-full object-contain"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 xl:gap-x-0 relative">
          <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 max-h-40 max-w-7xl w-11/12 h-full rounded-full bg-primary/30 blur-[100px]"></div>
          <div className="max-w-5xl opacity-10 mx-auto w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-20">
            <Image
              src={"/images/background_animation.png"}
              height={5000}
              width={5000}
              alt="Animation"
              className="h-full w-full"
            />
          </div>
          <div className="flex items-center justify-center relative z-10">
            <Image
              src={"/images/iPhone16Pro3.png"}
              height={5000}
              width={5000}
              alt="Phone image"
              priority
              className="max-h-240 h-full w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center relative z-10">
            <Image
              src={"/images/iPhone16Pro4.png"}
              height={5000}
              width={5000}
              alt="Phone image"
              priority
              className="max-h-240 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidanceRoot;
