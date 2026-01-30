"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const sections = [
  { id: "intro", title: "Introduction & Acceptance of Terms" },
  { id: "about", title: "About Quranity" },
  { id: "content", title: "Use of Islamic Content" },
  { id: "muslim_ai", title: "Muslim AI – Important Disclaimer" },
  { id: "user_generated", title: "User-Generated Content" },
  { id: "features", title: "Free & Premium Features" },
  { id: "payments", title: "Payments & Subscriptions" },
  { id: "termination", title: "Termination of Use" },
];

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("commitment");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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
    <div className="selection:bg-[#B37C00]/30">
      {/* Global CSS for Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        [id] {
          scroll-margin-top: 100px;
        }
      `}</style>

      {/* Header Section */}
      <header className="py-12 md:py-16 xl:py-20 flex flex-col items-center justify-center text-center gap-2">
        <div className="h-14 w-14 border-6 border-primary rounded-lg rotate-45 mb-6 p-2">
          <div className="w-full h-full bg-primary"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Terms & Conditions
        </h1>
      </header>

      <main className="max-w-400 mx-auto w-11/12 pb-20 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 h-fit md:sticky md:top-24">
          <div className="bg-[#121212] rounded-2xl p-2 border border-white/5">
            <h3 className="text-sm md:text-base xl:text-lg font-semibold p-4 tracking-widest text-gray mb-6">
              Quick Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {sections.map((section) => (
                <Link
                  href={`#${section.id}`}
                  key={section.id}
                  className={`text-left text-xs truncate py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-[#B37C00] text-white font-semibold shadow-lg"
                      : "hover:bg-white/5 text-gray"
                  }`}
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <section className="md:w-3/4 bg-[#121212] rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Introduction & Acceptance of Terms */}
            <div id="intro">
              <h2 className="text-white text-xl font-semibold mb-6">
                Introduction & Acceptance of Terms
              </h2>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                Welcome to Quranity. These Terms & Conditions (“Terms”) govern
                your access to and use of the Quranity mobile application,
                website, and related services.
              </p>
              <p className="text-sm font-medium text-white mb-3">
                By downloading, accessing, or using Quranity, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>You have read and understood these Terms</li>
                <li>You agree to be bound by them</li>
                <li>
                  You will comply with all applicable laws and regulations
                </li>
              </ul>
              <p className="text-gray text-sm leading-relaxed">
                If you do not agree with these Terms, please do not use the app.
              </p>
            </div>
            <hr className="text-gray/40" />
            {/* About Quranity */}
            <div id="about">
              <h2 className="text-white text-xl font-semibold mb-6">
                About Quranity
              </h2>
              <p className="text-sm font-medium text-white mb-3">
                Quranity is a digital Islamic platform designed to support:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Daily prayer awareness</li>
                <li>Qur’an reading and reflection</li>
                <li>General Islamic guidance through Muslim AI</li>
                <li>Spiritual learning and personal growth</li>
              </ul>

              <p className="text-gray text-sm leading-relaxed">
                Quranity is not a religious authority and does not issue fatwas
                or legally binding rulings.
              </p>
            </div>
            <hr className="text-gray/40" />
            {/* Use of Islamic Content */}
            <div id="content">
              <h2 className="text-white text-xl font-semibold mb-6">
                Use of Islamic Content
              </h2>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                All Islamic content provided through Quranity:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Is intended for educational and spiritual purposes</li>
                <li>Should be approached with sincerity and reflection</li>
                <li>
                  Does not replace traditional learning or qualified scholars
                </li>
              </ul>
              <p className="text-sm text-gray leading-[1.8] mb-4">
                Translations, interpretations, and explanations may vary, and
                users are encouraged to seek additional knowledge when needed.
              </p>
            </div>
            <hr className="text-gray/40" />
            {/* Muslim AI – Important Disclaimer */}
            <div id="muslim_ai">
              <h2 className="text-white text-xl font-semibold mb-6">
                Muslim AI – Important Disclaimer
              </h2>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                Muslim AI is designed to provide general guidance and
                reflection, not authoritative religious rulings.
              </p>
              <p className="text-sm font-medium text-white mb-3">
                By using Muslim AI, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>AI responses are informational only</li>
                <li>Responses should not be considered fatwas</li>
                <li>AI guidance does not replace qualified scholars</li>
                <li>
                  Quranity is not responsible for decisions made solely based on
                  AI responses
                </li>
              </ul>

              <p className="text-sm leading-[1.8] text-gray mb-4">
                Users should exercise judgment and consult scholars for serious
                religious, legal, or personal matters.
              </p>
            </div>
            <hr className="text-gray/40" />
            {/* User-Generated Content */}
            <div id="user_generated">
              <h2 className="text-white text-xl font-semibold mb-6">
                User-Generated Content
              </h2>
              <p className="text-sm leading-[1.8] text-white mb-3">
                You may submit content such as:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Questions to Muslim AI</li>
                <li>Feedback or suggestions</li>
                <li>Support messages</li>
              </ul>
              <p className="text-sm leading-[1.8] text-white mb-3">
                By submitting content, you grant Quranity a limited,
                non-exclusive right to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Process the content to provide services</li>
                <li>Improve app quality (in anonymized form)</li>
              </ul>
              <p className="text-sm leading-[1.8] text-white mb-3">
                You agree not to submit:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Offensive or abusive material</li>
                <li>False or misleading information</li>
                <li>Content that violates laws or rights of others</li>
              </ul>
            </div>
            <hr className="text-gray/40" />
            {/* Free & Premium Features */}
            <div id="features">
              <h2 className="text-white text-xl font-semibold mb-6">
                Free & Premium Features
              </h2>
              <p className="text-sm leading-[1.8] text-white mb-3">
                Quranity may offer:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Free features with usage limits</li>
                <li>Premium or paid features (if enabled)</li>
              </ul>
              <p className="text-sm leading-[1.8] text-gray mb-3">
                Pricing, limits, and features may change at any time. We reserve
                the right to modify or discontinue any part of the service
                without prior notice.
              </p>
            </div>
            <hr className="text-gray/40" />
            {/* Payments & Subscriptions */}
            <div id="payments">
              <h2 className="text-white text-xl font-semibold mb-6">
                Payments & Subscriptions
              </h2>
              <p className="text-sm leading-[1.8] text-white mb-3">
                If Quranity offers paid subscriptions:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>
                  Payments are handled through authorized third-party platforms
                </li>
                <li>
                  Subscription fees are non-refundable unless required by law
                </li>
                <li>
                  You are responsible for managing your subscription through
                  your app store account
                </li>
              </ul>
            </div>
            <hr className="text-gray/40" />
            {/* Termination of Use */}
            <div id="termination" className="pt-8 border-t border-white/5">
              <h2 className="text-white text-xl font-semibold mb-6">
                Termination of Use
              </h2>
              <p className="text-sm text-gray mb-4">We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Suspend or terminate access</li>
                <li>Restrict features</li>
                <li>Remove content</li>
              </ul>
              <p className="text-sm font-bold text-white mt-2">
                If these Terms are violated or if misuse is detected.
              </p>
              <p className="text-sm font-bold text-white mt-2">
                Termination may occur without prior notice.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default TermsConditions;
