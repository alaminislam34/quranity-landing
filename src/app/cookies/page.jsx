"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const sections = [
  { id: "what-are-cookies", title: "WHAT ARE COOKIES" },
  { id: "types-of-cookies", title: "TYPES OF COOKIES" },
  { id: "meta-analytics", title: "META & ANALYTICS TOOLS" },
  { id: "managing-cookies", title: "MANAGING COOKIES" },
  { id: "contact", title: "CONTACT" },
];

const CookiePage = () => {
  const [activeSection, setActiveSection] = useState("what-are-cookies");

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
  }, []);

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
            Quranity LLC
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
          Cookie Policy
        </h1>

        {/* Effective Date Badge */}
        <div className="mt-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
            Effective Date: February 25, 2026
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-11/12 pb-20 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 h-fit md:sticky md:top-24">
          <div className="bg-[#121212] rounded-2xl p-2 border border-white/5">
            <h3 className="text-sm font-semibold p-4 text-white mb-2">
              Policy Navigation
            </h3>
            <nav className="flex flex-col gap-1">
              {sections.map((section) => (
                <Link
                  href={`#${section.id}`}
                  key={section.id}
                  className={`text-left text-xs lg:text-sm truncate py-3 px-4 rounded-lg transition-all duration-300 ${
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
                1.What Are Cookies
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                Cookies are small text files stored on your device when you
                visit a website.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Types of Cookies */}
            <div id="types-of-cookies">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                2.Types of Cookies We Use
              </h2>
              <ul className="space-y-4 text-sm md:text-base text-gray-400">
                <li className="flex gap-3">
                  <span className="text-[#B37C00]">•</span>

                  <span>
                    <strong>Essential Cookies:</strong> Required for website
                    functionality.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B37C00]">•</span>

                  <span>
                    <strong>Analytics Cookies:</strong> Help us understand usage
                    patterns.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B37C00]">•</span>

                  <span>
                    <strong>Marketing Cookies:</strong> Used for advertising and
                    Meta integrations, subject to your consent.
                  </span>
                </li>
              </ul>
            </div>

            <hr className="border-white/5" />

            {/* Meta & Analytics */}
            <div id="meta-analytics">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                3.Meta & Analytics Tools
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                We may use Meta Pixel, Meta Conversions API (CAPI), and similar
                technologies.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                Where required by law, these tools are activated only after user
                consent.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Managing Cookies */}
            <div id="managing-cookies">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                4.Managing Cookies
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                You can manage cookie preferences through your browser settings
                or our website's consent banner.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Contact */}
            <div id="contact">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                5.Contact
              </h2>
              <div className="text-sm md:text-base text-gray-400 space-y-1 bg-white/5 p-6 rounded-xl border border-white/5">
                <p className="font-bold text-white">QURANITY LLC</p>
                <p className="pt-2">
                  For questions regarding this policy, please contact:
                </p>
                <p className="font-medium">
                  Email:{" "}
                  <a
                    href="mailto:support@quranity.app"
                    className="text-[#B37C00] hover:underline"
                  >
                    support@quranity.app
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
