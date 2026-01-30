"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

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
  return (
    <div className="">
      {/* Header Section */}
      <header className="py-12 flex flex-col items-center justify-center text-center gap-2">
        <div className="bg-[#B37C00] p-2 rounded-lg mb-2">
          <ShieldCheck className="text-black w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
      </header>

      <main className="max-w-400 mx-auto w-11/12 pb-20 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 h-fit md:sticky md:top-8">
          <div className="bg-[#121212] rounded-2xl p-6 border border-white/5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
              Quick Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  className={`text-left text-xs py-3 px-4 rounded-lg transition-all ${
                    idx === 0
                      ? "bg-[#B37C00] text-white font-semibold shadow-lg"
                      : "hover:bg-white/5 text-gray-400"
                  }`}
                >
                  {section.title}
                </button>
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
              <p className="text-sm leading-relaxed mb-4">
                At Quranity, your privacy is our top priority. We are committed
                to protecting your personal information and being transparent
                about how we use it.
              </p>
              <p className="text-sm font-medium mb-3">Key aspects include:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>Collection with your consent</li>
                <li>Only the data needed for the service</li>
                <li>Provide you with control over your data</li>
                <li>Progressing security measures for data protection</li>
              </ul>
            </div>

            {/* Scope of This Policy */}
            <div id="scope">
              <h2 className="text-white text-xl font-semibold mb-6">
                Scope of This Policy
              </h2>
              <p className="text-sm font-medium mb-3">
                This Privacy Policy applies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2 mb-6">
                <li>Quranity web applications</li>
                <li>Our mobile application platforms</li>
                <li>
                  Interacting with Quranity services via APIs or Third-party
                  integrations
                </li>
                <li>Other digital channels owned and managed by us</li>
              </ul>
              <p className="text-sm font-medium mb-3">
                This policy does not apply to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>Third-party websites</li>
                <li>Partnerships</li>
                <li>When using third-party software independently</li>
              </ul>
            </div>

            {/* How and Why */}
            <div id="how-why">
              <h2 className="text-white text-xl font-semibold mb-6">
                How and Why We Use Your Information
              </h2>
              <p className="text-sm mb-4">
                We use information about you for various legitimate business
                reasons including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>Providing our core services to you</li>
                <li>Improving our platform services</li>
                <li>Personalization of experiences</li>
                <li>Communication about our services</li>
                <li>Managing security and preventing abuse</li>
                <li>Maintaining regulatory compliance and records</li>
                <li>Fulfilling legal obligations</li>
              </ul>
            </div>

            {/* Muslim AI */}
            <div id="transparency">
              <h2 className="text-white text-xl font-semibold mb-6">
                Muslim AI - Transparency & Responsibility
              </h2>
              <p className="text-sm mb-4">
                We use AI responsibly to improve our services and user
                experiences across our platforms.
              </p>
              <p className="text-sm font-medium mb-3">How AI works for us:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2 mb-6">
                <li>To help with translation and language processing</li>
                <li>
                  To provide suggestions based on user preference and history
                </li>
                <li>To facilitate better navigation and content discovery</li>
              </ul>
              <p className="text-sm font-medium mb-3">Important Limitations:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>Human oversight is maintained in key AI tasks</li>
                <li>Continuous monitoring for accuracy and bias</li>
                <li>User data used for training AI is anonymized</li>
              </ul>
            </div>

            {/* Legal Basis */}
            <div id="legal">
              <h2 className="text-white text-xl font-semibold mb-6">
                Legal Basis for Processing Data
              </h2>
              <p className="text-sm mb-3">
                Depending on applicable laws, the legal basis we rely on
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>Your consent</li>
                <li>Performance of a contract with you as an individual</li>
                <li>Compliance with statutory legal obligations</li>
              </ul>
            </div>

            {/* Rights */}
            <div id="rights">
              <h2 className="text-white text-xl font-semibold mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-sm mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>Withdraw consent</li>
                <li>Access your personal data</li>
                <li>Request deletion</li>
                <li>Rectify inaccuracies</li>
                <li>Lodge a complaint</li>
              </ul>
            </div>

            {/* Changes */}
            <div id="changes">
              <h2 className="text-white text-xl font-semibold mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-sm mb-3">
                We may update this policy from time to time:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2 mb-6">
                <li>To reflect changes</li>
                <li>Legal compliance</li>
                <li>Safety and security</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                We provide notice about significant changes via email or through
                the interface.
              </p>
            </div>

            {/* Contact */}
            <div id="contact" className="pt-8 border-t border-white/5">
              <h2 className="text-white text-xl font-semibold mb-6">
                Contact Information
              </h2>
              <p className="text-sm text-gray-400">
                For questions, requests, or concerns regarding privacy:
              </p>
              <p className="text-sm font-bold text-white mt-2">
                Privacy & Compliance Team
              </p>
              <p className="text-sm text-[#B37C00]">privacy@quranity.com</p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
