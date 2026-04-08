"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const t = useTranslations("privacyPolicy");
  const [activeSection, setActiveSection] = useState("intro");
  const sections = t.raw("sections");
  const content = t.raw("content");
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
        <div className="h-14 w-14 bg-[#B37C00] rounded-lg rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(179,124,0,0.3)]">
          <ShieldCheck className="-rotate-45 text-black w-8 h-8" />
        </div>

        <div className="flex items-center gap-3 opacity-60">
          <span className="h-px w-8 bg-gray-500"></span>
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold">
            {t("company")}
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
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
        <aside className="lg:w-1/4 h-fit lg:sticky lg:top-24">
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

        <section className="lg:w-3/4 bg-[#121212] rounded-2xl p-6 md:p-10 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div id="intro">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.intro.title}
              </h2>
              {content.intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm md:text-base leading-relaxed text-gray-400 mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <hr className="border-white/5" />

            <div id="collection">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.collection.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.collection.cards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white/5 p-5 rounded-xl border border-white/5"
                  >
                    <h4 className="text-white font-bold mb-2 text-sm">
                      {card.title}
                    </h4>
                    <ul className="text-xs md:text-sm text-gray-400 space-y-2">
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs md:text-sm italic text-gray-500">
                {content.collection.note}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="usage">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.usage.title}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
                {content.usage.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 ${locale === "ar" ? "flex-row-reverse" : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-white/5" />

            <div id="ai-transparency">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.aiTransparency.title}
              </h2>
              <div className="bg-[#B37C00]/10 border border-[#B37C00]/20 p-6 rounded-xl">
                <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                  {content.aiTransparency.description}
                </p>
                <p className="text-xs md:text-sm font-medium text-[#B37C00] uppercase tracking-wider">
                  {content.aiTransparency.note}
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            <div id="advertising">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.advertising.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                {content.advertising.description}
              </p>
              <p className="text-sm font-bold text-white uppercase bg-white/5 p-4 rounded-lg inline-block border border-white/10">
                {content.advertising.highlight}
              </p>
            </div>

            <hr className="border-white/5" />

            <div className="grid grid-cols-1 gap-12">
              <div id="data-transfers">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  {content.dataTransfers.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {content.dataTransfers.description}
                </p>
              </div>
              <div id="retention">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  {content.retention.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {content.retention.description}
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            <div id="rights">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.rights.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                {content.rights.description}
              </p>
            </div>

            <hr className="border-white/5" />

            <div id="meta-deletion">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                {content.metaDeletion.title}
              </h2>
              <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-xl">
                <p className="text-sm text-gray-400 mb-4">
                  {content.metaDeletion.description}
                </p>
                <ol className="text-sm text-gray-300 space-y-3 list-decimal list-inside">
                  {content.metaDeletion.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-gray-500">
                  {content.metaDeletion.note}
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            <div className="grid grid-cols-1 gap-12">
              <div id="security">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  {content.security.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {content.security.description}
                </p>
              </div>
              <div id="children">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  {content.children.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {content.children.description}
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            <div id="contact">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
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

export default PrivacyPolicy;
