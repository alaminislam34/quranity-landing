"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const TermsConditions = () => {
  const t = useTranslations("termsPolicy");
  const sections = t.raw("sections");
  const content = t.raw("content");
  const [activeSection, setActiveSection] = useState("intro");
  const locale = useLocale();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="selection:bg-[#B37C00]/30 text-gray-300">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        [id] {
          scroll-margin-top: 120px;
        }
      `}</style>

      <header className="py-16 md:py-24 flex flex-col items-center justify-center text-center gap-4 px-6">
        <div className="h-14 w-14 border-4 border-[#B37C00] rounded-lg rotate-45 mb-6 p-2 flex items-center justify-center">
          <div className="w-full h-full bg-[#B37C00]"></div>
        </div>

        <div className="flex items-center gap-3 opacity-60">
          <span className="h-px w-8 bg-gray-500"></span>
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold">
            {t("company")}
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {t("title")}
        </h1>

        <div className="mt-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
            {t("effectiveDate")}
          </p>
        </div>
      </header>

      <main
        className={`max-w-400 mx-auto w-11/12 pb-20 flex flex-col  ${locale === "ar" ? "lg:flex-row-reverse text-right" : "lg:flex-row"} gap-8`}
      >
        <aside className="md:w-1/4 h-fit md:sticky md:top-24">
          <div className="bg-[#121212] rounded-2xl p-2 border border-white/5">
            <h3 className="text-sm font-semibold p-4 text-white mb-2">
              {t("navigationTitle")}
            </h3>
            <nav className="flex flex-col gap-1">
              {sections.map((section) => (
                <Link
                  href={`#${section.id}`}
                  key={section.id}
                  className={`text-xs lg:text-sm truncate py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-[#B37C00] text-white font-semibold shadow-lg"
                      : "hover:bg-white/5 text-gray-400"
                  }`}
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <section className="md:w-3/4 bg-[#121212] rounded-2xl p-6 md:p-10 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div id="intro" className="scroll-mt-32">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.intro.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.intro.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="about">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.about.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.about.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="content">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.content.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.content.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="muslim_ai">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.muslimAi.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.muslimAi.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="user_generated">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.userGenerated.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.userGenerated.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="features">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.features.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 italic">
                {content.features.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="payments">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.payments.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.payments.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="indemnification">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.indemnification.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.indemnification.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="arbitration">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.arbitration.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.arbitration.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="force-majeure">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.forceMajeure.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.forceMajeure.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="termination">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.termination.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.termination.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="contact">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.contact.title}
              </h2>
              <div className="text-sm md:text-base text-gray-400 space-y-1 bg-white/5 p-6 rounded-xl border border-white/5">
                <p className="font-bold text-white">
                  {content.contact.company}
                </p>
                <p>{content.contact.addressLine1}</p>
                <p>{content.contact.addressLine2}</p>
                <p className="pt-2">
                  Email:{" "}
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="text-[#B37C00] hover:underline"
                  >
                    {content.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default TermsConditions;
