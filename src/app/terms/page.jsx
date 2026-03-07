"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const sections = [
  { id: "intro", title: "ACCEPTANCE OF TERMS" },
  { id: "about", title: "DESCRIPTION OF SERVICES" },
  { id: "content", title: "ACCOUNTS & SUBSCRIPTIONS" },
  { id: "muslim_ai", title: "USER RESPONSIBILITIES" },
  { id: "user_generated", title: "INTELLECTUAL PROPERTY" },
  { id: "features", title: "DISCLAIMER OF WARRANTIES" },
  { id: "payments", title: "LIMITATION OF LIABILITY" },
  { id: "indemnification", title: "INDEMNIFICATION" },
  { id: "arbitration", title: "ARBITRATION & DISPUTE RESOLUTION" },
  { id: "force-majeure", title: "FORCE MAJEURE" },
  { id: "termination", title: "TERMINATION" },
  { id: "contact", title: "CONTACT" },
];

const TermsConditions = () => {
  // Fix 1: Initialized state with the first valid ID from the sections array
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Adjusting margin to ensure the section is considered active
      // when it's roughly in the top-middle of the viewport
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
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          TERMS & CONDITIONS
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
              Quick Navigation
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
            {/* Acceptance of Terms */}
            <div id="intro" className="scroll-mt-32">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                By accessing or using the Quranity mobile application, website,
                AI systems, Shorts, Stories, Qur’an tools, and related services
                (the “Services”), you agree to be bound by these Terms &
                Conditions. If you do not agree, please do not use the Services.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Description of Services */}
            <div id="about">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                2. Description of Services
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                Quranity provides Islamic educational content, media features,
                prayer tools, and AI-generated informational responses. AI
                outputs are for informational purposes only and do not
                constitute religious rulings (fatwa), legal advice, or medical
                advice.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Accounts & Subscriptions */}
            <div id="content">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                3. Accounts & Subscriptions
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                Subscriptions are processed via Apple App Store or Google Play.
                Billing, refunds, and cancellations are governed by the
                respective platform’s policies. You are responsible for
                maintaining the confidentiality of your account credentials.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* User Responsibilities */}
            <div id="muslim_ai">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                4. User Responsibilities
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                You agree not to misuse the Services, interfere with platform
                functionality, or attempt unauthorized access. Any use of the AI
                to generate harmful or prohibited content is strictly forbidden.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Intellectual Property */}
            <div id="user_generated">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                5. Intellectual Property
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                All content, trademarks, branding, and technology within
                Quranity are owned by QURANITY LLC or its licensors. You may not
                reproduce or distribute any part of the service without explicit
                permission.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Disclaimer of Warranties */}
            <div id="features">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                6. Disclaimer of Warranties
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400 italic">
                The Services are provided “AS IS” and “AS AVAILABLE” without
                warranties of any kind, express or implied, including but not
                limited to the accuracy of AI-generated content.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Limitation of Liability */}
            <div id="payments">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                7. Limitation of Liability
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                To the maximum extent permitted by law, Quranity’s total
                aggregate liability arising out of or relating to the Services
                shall not exceed the total amount paid by you to Quranity in the
                twelve (12) months preceding the claim.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Indemnification */}
            <div id="indemnification">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                8. Indemnification
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                You agree to indemnify and hold harmless QURANITY LLC from
                claims, damages, and expenses arising out of your misuse of the
                Services or violation of these Terms.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Arbitration */}
            <div id="arbitration">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                9. Arbitration & Dispute Resolution
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                Any dispute arising out of or relating to these Terms shall be
                resolved through binding arbitration conducted on an individual
                basis. Class actions are not permitted. Governing Law: State of
                Wyoming, United States.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Force Majeure */}
            <div id="force-majeure">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                10. Force Majeure
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                Quranity shall not be liable for delays or failures resulting
                from causes beyond reasonable control, including natural
                disasters, strikes, or internet service provider failures.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Termination */}
            <div id="termination">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                11. Termination
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                We may suspend or terminate access to the Services immediately,
                without prior notice, for conduct that we believe violates these
                Terms or is harmful to other users.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Contact */}
            <div id="contact">
              <h2 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                12. Contact
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

export default TermsConditions;
