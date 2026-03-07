"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "intro", title: "INTRODUCTION" },
  { id: "collection", title: "INFORMATION WE COLLECT" },
  { id: "usage", title: "HOW WE USE INFORMATION" },
  { id: "ai-transparency", title: "ARTIFICIAL INTELLIGENCE" },
  { id: "advertising", title: "ADVERTISING & ANALYTICS" },
  { id: "data-transfers", title: "INTERNATIONAL TRANSFERS" },
  { id: "retention", title: "DATA RETENTION" },
  { id: "rights", title: "YOUR RIGHTS" },
  { id: "meta-deletion", title: "USER DATA DELETION" },
  { id: "security", title: "SECURITY" },
  { id: "children", title: "CHILDREN'S PRIVACY" },
  { id: "contact", title: "CONTACT INFORMATION" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("intro");

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

      {/* Header Section */}
      <header className="py-16 md:py-24 flex flex-col items-center justify-center text-center gap-4 px-6">
        <div className="h-14 w-14 bg-[#B37C00] rounded-lg rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(179,124,0,0.3)]">
          <ShieldCheck className="-rotate-45 text-black w-8 h-8" />
        </div>

        <div className="flex items-center gap-3 opacity-60">
          <span className="h-px w-8 bg-gray-500"></span>
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold">
            Quranity LLC
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
          Privacy Policy
        </h1>

        <div className="mt-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
            Effective Date: February 25, 2026
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-11/12 pb-20 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 h-fit lg:sticky lg:top-24">
          <div className="bg-[#121212] rounded-2xl p-2 border border-white/5">
            <h3 className="text-sm font-semibold p-4 text-white mb-2">
              Privacy Navigation
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

        {/* Content Area */}
        <section className="lg:w-3/4 bg-[#121212] rounded-2xl p-6 md:p-10 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* 1. Introduction */}
            <div id="intro">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                1. Introduction
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                This Privacy Policy describes how QURANITY LLC (“Quranity,”
                “Company,” “we,” “our,” or “us”) collects, uses, processes,
                stores, and protects personal information when you use the
                Quranity mobile application, website, AI features, video modules
                (Shorts and Stories), Qur’an tools, prayer tools, and related
                services (collectively, the “Services”).
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                By using the Services, you acknowledge that you have read and
                understood this Privacy Policy.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* 2. Information We Collect */}
            <div id="collection">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                2. Information We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h4 className="text-white font-bold mb-2 text-sm">
                    Account & Tech
                  </h4>
                  <ul className="text-xs md:text-sm text-gray-400 space-y-2">
                    <li>
                      • Account: Name, email, username, subscription status.
                    </li>
                    <li>• Device: IP address, OS, app version, diagnostics.</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h4 className="text-white font-bold mb-2 text-sm">
                    Usage & Location
                  </h4>
                  <ul className="text-xs md:text-sm text-gray-400 space-y-2">
                    <li>
                      • Usage: Interactions, Qur’an searches, bookmarks, Shorts
                      activity.
                    </li>
                    <li>
                      • Location: City-level or GPS for prayer times/Qibla.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-xs md:text-sm italic text-gray-500">
                Note: Use of our services may inherently reveal religious
                beliefs. This data is processed solely to provide the Services .
              </p>
            </div>

            <hr className="border-white/5" />

            {/* 3. How We Use Information */}
            <div id="usage">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                3. How We Use Information
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  • Provide and maintain Services.
                </li>
                <li className="flex items-start gap-2">
                  • Deliver prayer times and Qibla direction.
                </li>
                <li className="flex items-start gap-2">
                  • Manage platform subscriptions.
                </li>
                <li className="flex items-start gap-2">
                  • Improve platform functionality.
                </li>
                <li className="flex items-start gap-2">
                  • Communicate service updates.
                </li>
                <li className="flex items-start gap-2">
                  • Comply with legal obligations.
                </li>
              </ul>
            </div>

            <hr className="border-white/5" />

            {/* 4. Artificial Intelligence */}
            <div id="ai-transparency">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                4. Artificial Intelligence
              </h2>
              <div className="bg-[#B37C00]/10 border border-[#B37C00]/20 p-6 rounded-xl">
                <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                  AI provides automated responses generated by artificial
                  intelligence systems. These responses may not always be
                  accurate, complete, or authoritative.
                </p>
                <p className="text-xs md:text-sm font-medium text-[#B37C00] uppercase tracking-wider">
                  AI outputs are for informational purposes only and do not
                  constitute religious rulings (fatwa), legal advice, or medical
                  advice.
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 5. Advertising & Analytics */}
            <div id="advertising">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                5. Advertising, Analytics & Meta SDK
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                We use tools such as Meta SDK and Meta Conversions API (CAPI).
                Tracking technologies are activated only after user consent
                where required by law.
              </p>
              <p className="text-sm font-bold text-white uppercase bg-white/5 p-4 rounded-lg inline-block border border-white/10">
                Quranity does NOT sell Personal Information.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* 7. Transfers & 8. Retention */}
            <div className="grid grid-cols-1 gap-12">
              <div id="data-transfers">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  7. Data Transfers
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Information may be processed in the United States. We
                  implement Standard Contractual Clauses (SCCs) where required.
                </p>
              </div>
              <div id="retention">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  8. Data Retention
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We retain data for as long as necessary to provide Services.
                  Users may request account deletion at any time .
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 9. Your Rights */}
            <div id="rights">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                9. Your Rights
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                You may have rights to access, correct, delete, or restrict
                processing of your personal information. California residents
                may exercise rights under the CCPA/CPRA.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* 10. User Data Deletion (Meta Requirement) */}
            <div id="meta-deletion">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                10. User Data Deletion (Meta Requirement)
              </h2>
              <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-xl">
                <p className="text-sm text-gray-400 mb-4">
                  To request deletion of personal data associated with
                  Facebook/Meta Login:
                </p>
                <ol className="text-sm text-gray-300 space-y-3 list-decimal list-inside">
                  <li>Log into Quranity and select 'Delete Account'.</li>
                  <li>
                    Email support@quranity.app with the subject 'Facebook Data
                    Deletion Request'.
                  </li>
                </ol>
                <p className="mt-4 text-xs text-gray-500">
                  Data will be deleted from active systems within 30 days.
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 11. Security & 12. Children */}
            <div className="grid grid-cols-1 gap-12">
              <div id="security">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  11. Security
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We use TLS encryption and restricted access controls. No
                  internet transmission is 100% secure.
                </p>
              </div>
              <div id="children">
                <h2 className="text-white text-lg font-semibold mb-4 uppercase">
                  12. Children's Privacy
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Services are not directed to children under 13 (or 16 in
                  certain regions). We do not knowingly collect minor
                  information.
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* 14. Contact Information */}
            <div id="contact">
              <h2 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
                14. Contact Information
              </h2>
              <div className="text-sm md:text-base text-gray-400 space-y-1 bg-white/5 p-6 rounded-xl border border-white/5">
                <p className="font-bold text-white">QURANITY LLC</p>
                <p>30 N Gould St Ste R</p>
                <p>Sheridan, Wyoming 82801</p>
                <p className="pt-2">
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

export default PrivacyPolicy;
