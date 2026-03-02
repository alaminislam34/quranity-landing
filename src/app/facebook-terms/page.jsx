"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Trash2,
  ShieldCheck,
  Mail,
  MapPin,
  ExternalLink,
  Smartphone,
  Info,
} from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "deletion-methods", title: "DELETION METHODS" },
  { id: "meta-callback", title: "META CALLBACK SUPPORT" },
  { id: "processing-time", title: "PROCESSING & RETENTION" },
  { id: "privacy-commitment", title: "PRIVACY COMMITMENT" },
  { id: "contact", title: "CONTACT & SUPPORT" },
];

const FacebookDeletionPage = () => {
  const [activeSection, setActiveSection] = useState("deletion-methods");

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
    <div className="selection:bg-[#B37C00]/30 text-gray-300 min-h-screen bg-black">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        [id] {
          scroll-margin-top: 120px;
        }
      `}</style>

      {/* Header Section */}
      <header className="py-16 md:py-24 flex flex-col items-center justify-center text-center gap-4 px-6">
        <div className="h-14 w-14 bg-[#B37C00] rounded-lg rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(179,124,0,0.3)]">
          <Trash2 className="-rotate-45 text-black w-7 h-7" />
        </div>

        <div className="flex items-center gap-3 opacity-60">
          <span className="h-px w-8 bg-gray-500"></span>
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold">
            Quranity LLC
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase max-w-3xl">
          User Data Deletion{" "}
          <span className="text-[#B37C00]">Instructions</span>
        </h1>

        <div className="mt-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
            Last Updated: February 25, 2026
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-11/12 pb-20 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 h-fit lg:sticky lg:top-24">
          <div className="bg-[#121212] rounded-2xl p-2 border border-white/5">
            <h3 className="text-sm font-semibold p-4 text-white mb-2 uppercase tracking-tighter opacity-50">
              Quick Guide
            </h3>
            <nav className="flex flex-col gap-1">
              {sections.map((section) => (
                <Link
                  href={`#${section.id}`}
                  key={section.id}
                  className={`text-left text-xs lg:text-sm truncate py-3.5 px-4 rounded-lg transition-all duration-300 ${
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

        {/* Content Area */}
        <section className="lg:w-3/4 bg-[#121212] rounded-2xl p-6 md:p-12 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            {/* 1. Deletion Methods */}
            <div id="deletion-methods">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="text-[#B37C00] w-6 h-6" />
                <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                  1. How to Request Deletion
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#B37C00]/30 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#B37C00]/10 flex items-center justify-center mb-4 group-hover:bg-[#B37C00] transition-colors duration-500">
                    <Smartphone className="w-5 h-5 text-[#B37C00] group-hover:text-black" />
                  </div>
                  <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">
                    In-App Method
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Log into your Quranity account, navigate to Settings, and
                    select
                    <span className="text-red-500 font-bold ml-1">
                      &quot;Delete Account&quot;
                    </span>
                    .
                  </p>
                </div>

                <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#B37C00]/30 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#B37C00]/10 flex items-center justify-center mb-4 group-hover:bg-[#B37C00] transition-colors duration-500">
                    <Mail className="w-5 h-5 text-[#B37C00] group-hover:text-black" />
                  </div>
                  <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">
                    Direct Email
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Send a request to{" "}
                    <span className="text-white font-medium">
                      support@quranity.app
                    </span>{" "}
                    with the subject line
                    <span className="italic block mt-1 opacity-70">
                      &quot;Facebook Data Deletion Request&quot;
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 2. Meta Callback Support */}
            <div id="meta-callback">
              <div className="flex items-center gap-3 mb-6">
                <ExternalLink className="text-[#B37C00] w-6 h-6" />
                <h2 className="text-white text-xl font-bold uppercase tracking-wide">
                  2. Meta Callback Support
                </h2>
              </div>
              <div className="bg-[#B37C00]/5 border-l-4 border-[#B37C00] p-6 rounded-r-xl">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed italic">
                  &quot;If you initiate deletion directly through Facebook,
                  Facebook may send us a data deletion callback
                  notification.&quot;
                </p>
                <p className="mt-4 text-xs text-gray-500 leading-relaxed uppercase tracking-widest font-bold">
                  Automated Processing Enabled
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 3. Processing & Retention */}
            <div id="processing-time">
              <h2 className="text-white text-xl font-bold mb-8 uppercase tracking-wide">
                3. Processing & Retention
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold text-white mt-1">
                    01
                  </div>
                  <p className="text-sm md:text-base text-gray-400">
                    Upon verification of your identity, your data will be
                    deleted from active systems within **30 days**.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold text-white mt-1">
                    02
                  </div>
                  <p className="text-sm md:text-base text-gray-400">
                    Certain records may remain temporarily in secure backups for
                    legal or security purposes.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 4. Privacy Commitment */}
            <div id="privacy-commitment">
              <div className="flex items-center gap-3 mb-6">
                <Info className="text-[#B37C00] w-6 h-6" />
                <h2 className="text-white text-xl font-bold uppercase tracking-wide">
                  4. Privacy Commitment
                </h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                As an Islamic educational platform, Quranity treats your data as
                a trust (Amanah). We collect only what is necessary to provide
                spiritual services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "No profiling or targeted ads",
                  "No data sales to third parties",
                  "Encrypted data transmission",
                  "Transparent handling protocols",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B37C00]" />
                    <span className="text-xs text-gray-300 uppercase tracking-tighter">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 5. Contact & Support */}
            <div id="contact">
              <h2 className="text-white text-xl font-bold mb-8 uppercase tracking-wide">
                5. Contact & Support
              </h2>
              <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#B37C00] shrink-0" size={20} />
                    <div>
                      <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-1">
                        Entity Headquarters
                      </h5>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        QURANITY LLC
                        <br />
                        30 N Gould St #58868
                        <br />
                        Sheridan, Wyoming 82801, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <Mail className="text-[#B37C00] shrink-0" size={20} />
                    <div>
                      <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-1">
                        Compliance Email
                      </h5>
                      <a
                        href="mailto:support@quranity.app"
                        className="text-sm text-[#B37C00] hover:underline transition-all"
                      >
                        support@quranity.app
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#B37C00] p-4 text-center">
                  <p className="text-black text-[10px] font-bold uppercase tracking-[0.2em]">
                    Protecting your spiritual journey through data integrity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em]">
          © 2026 Quranity LLC • All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default FacebookDeletionPage;
