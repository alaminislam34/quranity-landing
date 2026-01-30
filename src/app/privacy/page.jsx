"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "commitment", title: "Our Commitment to Privacy" },
  { id: "scope", title: "Scope of This Policy" },
  { id: "how-why", title: "How and Why We Use Your Information" },
  { id: "transparency", title: "Muslim AI - Transparency & Responsibility" },
  { id: "legal", title: "Legal Basis for Processing Data" },
  { id: "rights", title: "Your Privacy Rights" },
  { id: "changes", title: "Changes to This Privacy Policy" },
  { id: "contact", title: "Contact Information" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("commitment");

  // Logic for smooth scroll highlighting
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
        <div className="bg-[#B37C00] p-2 rounded-lg mb-2">
          <ShieldCheck className="text-black w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
      </header>

      <main className="max-w-400 mx-auto w-11/12 pb-20 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 h-fit md:sticky md:top-24">
          <div className="bg-[#121212] rounded-2xl p-6 border border-white/5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
              Quick Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {sections.map((section) => (
                <Link
                  href={`#${section.id}`}
                  key={section.id}
                  className={`text-left text-xs py-3 px-4 rounded-lg transition-all duration-300 ${
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
        <section className="md:w-3/4 bg-[#121212] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Our Commitment */}
            <div id="commitment">
              <h2 className="text-white text-xl font-semibold mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                At Quranity, protecting user privacy is a core responsibility,
                not an afterthought. As an Islamic app designed to support
                prayer, reflection, learning, and spiritual well-being, we
                understand that trust is essential.
              </p>
              <p className="text-sm font-medium text-white mb-3">
                We are committed to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Collecting only what is necessary</li>
                <li>Using data only for meaningful purposes</li>
                <li>Avoiding exploitation, surveillance, or misuse</li>
                <li>Being transparent about how information is handled</li>
              </ul>
            </div>

            {/* Scope of This Policy */}
            <div id="scope">
              <h2 className="text-white text-xl font-semibold mb-6">
                Scope of This Policy
              </h2>
              <p className="text-sm font-medium text-white mb-3">
                This Privacy Policy applies to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>The Quranity mobile application</li>
                <li>Our mobile application platforms</li>
                <li>
                  All in-app features, including Prayer Times, Qur’an Reader,
                  Muslim AI, and notifications
                </li>
                <li>Official Quranity websites and landing pages</li>
              </ul>
              <p className="text-sm font-medium text-white mb-3">
                This policy does not apply to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Third-party websites</li>
                <li>External links</li>
                <li>Services or platforms not controlled by Quranity</li>
              </ul>
              <p className="text-gray text-sm leading-relaxed">
                We encourage users to review the privacy policies of any
                third-party services they interact with.
              </p>
            </div>

            {/* How and Why */}
            <div id="how-why">
              <h2 className="text-white text-xl font-semibold mb-6">
                How and Why We Use Your Information
              </h2>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                We use collected information solely for legitimate and
                transparent purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Delivering accurate prayer schedules</li>
                <li>Displaying daily Qur’an verses</li>
                <li>Enabling Muslim AI responses</li>
                <li>Improving usability and design</li>
                <li>Managing free and premium plan usage</li>
                <li>Responding to inquiries or support requests</li>
                <li>Ensuring platform security</li>
              </ul>
              <p className="text-sm text-gray leading-[1.8] mb-4">
                We do not use user data for targeted advertising or profiling.
              </p>
            </div>

            {/* Muslim AI */}
            <div id="transparency">
              <h2 className="text-white text-xl font-semibold mb-6">
                Muslim AI – Transparency & Responsibility
              </h2>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                Muslim AI is designed as a supportive guidance tool, not an
                authoritative religious authority.
              </p>
              <p className="text-sm font-medium text-white mb-3">
                How AI Data Is Used:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>User questions are processed to generate responses</li>
                <li>
                  Conversations may be reviewed anonymously to improve quality
                </li>
                <li>No AI conversations are sold or shared for marketing</li>
              </ul>
              <p className="text-sm font-medium text-white mb-3">
                Important Limitations:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>AI responses are informational, not fatwas</li>
                <li>They should not replace qualified scholars</li>
                <li>Users should avoid sharing sensitive personal details </li>
              </ul>
              <p className="text-sm leading-[1.8] text-gray mb-4">
                Our goal is to assist reflection and learning — responsibly and
                respectfully.
              </p>
            </div>

            {/* Legal Basis */}
            <div id="legal">
              <h2 className="text-white text-xl font-semibold mb-6">
                Legal Basis for Processing Data
              </h2>
              <p className="text-sm leading-[1.8] text-white mb-3">
                Depending on applicable laws, Quranity processes data based on:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Your consent</li>
                <li>Legitimate interest in operating and improving services</li>
                <li>Compliance with legal obligations</li>
              </ul>
              <p className="text-sm leading-[1.8] text-gray mb-3">
                Users may withdraw consent at any time through device or app
                settings where applicable.
              </p>
            </div>

            {/* Rights */}
            <div id="rights">
              <h2 className="text-white text-xl font-semibold mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-sm leading-[1.8] text-white mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>Access your data</li>
                <li>Correct inaccuracies</li>
                <li>Request deletion</li>
                <li>Restrict processing</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-sm leading-[1.8] text-gray mb-3">
                Requests can be made by contacting us directly.
              </p>
            </div>

            {/* Changes */}
            <div id="changes">
              <h2 className="text-white text-xl font-semibold mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-sm leading-[1.8] text-white mb-3">
                We may update this policy to reflect:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray ml-2 mb-6 leading-relaxed">
                <li>New features</li>
                <li>Legal changes</li>
                <li>Improved practices</li>
              </ul>
              <p className="text-gray text-sm leading-relaxed">
                Any updates will be clearly indicated by a revised “Last
                Updated” date.
              </p>
            </div>

            {/* Contact */}
            <div id="contact" className="pt-8 border-t border-white/5">
              <h2 className="text-white text-xl font-semibold mb-6">
                Contact Information
              </h2>
              <p className="text-sm text-gray mb-4">
                For questions, concerns, or requests regarding privacy:
              </p>
              <p className="text-sm font-bold text-white mt-2">
                Email: support@quranity.app
              </p>
              <p className="text-sm font-bold text-white mt-2">
                App Name: Quranity
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
