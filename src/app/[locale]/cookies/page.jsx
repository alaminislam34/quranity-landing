"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const CookiePage = () => {
  const t = useTranslations("cookiesPolicy");
  const sections = t.raw("sections");
  const content = t.raw("content");
  const [activeSection, setActiveSection] = useState("what-are-cookies");
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
        {/* Icon Container */}
        <div className="h-14 w-14 border-4 border-[#B37C00] rounded-lg rotate-45 mb-6 p-2 flex items-center justify-center">
          <div className="w-full h-full bg-[#B37C00]"></div>
        </div>

        {/* Brand Label */}
        <div className="flex items-center gap-3 opacity-60">
          <span className="h-px w-8 bg-gray-500"></span>
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold">
            {t("company")}
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
          {t("title")}
        </h1>

        {/* Effective Date Badge */}
        <div className="mt-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
            {t("effectiveDate")}
          </p>
        </div>
      </header>

      <main
        className={`max-w-400 mx-auto w-11/12 pb-20 flex flex-col md:flex-row gap-8 ${locale === "ar" ? "lg:flex-row-reverse text-right" : "lg:flex-row"}`}
      >
        {/* Sidebar Navigation */}
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

        {/* Content Section */}
        <section className="md:w-3/4 bg-[#121212] rounded-2xl p-6 md:p-10 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* What are Cookies */}
            <div id="what-are-cookies">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.whatAreCookies.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.whatAreCookies.description}
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Types of Cookies */}
            <div id="types-of-cookies">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.typesOfCookies.title}
              </h2>
              <ol className="space-y-4 text-sm md:text-base text-gray-400 list-disc list-inside">
                {content.typesOfCookies.items.map((item) => (
                  <li key={item.title} className="">
                    <span>
                      <strong>{item.title}</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <hr className="border-white/5" />

            {/* Meta & Analytics */}
            <div id="meta-analytics">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.metaAnalytics.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                {content.metaAnalytics.description1}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.metaAnalytics.description2}
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Managing Cookies */}
            <div id="managing-cookies">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.managingCookies.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {content.managingCookies.description}
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Contact */}
            <div id="contact">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {content.contact.title}
              </h2>
              <div className="text-sm md:text-base text-gray-400 space-y-1 bg-white/5 p-6 rounded-xl border border-white/5">
                <p className="font-bold text-white">
                  {content.contact.company}
                </p>
                <p className="pt-2">{content.contact.description}</p>
                <p className="font-medium">
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

export default CookiePage;
