"use client";

import React from "react";
import {
  Mail,
  MapPin,
  Trash2,
  ShieldCheck,
  Globe,
  ChevronRight,
  Lock,
  Target,
  Zap,
  AlertCircle,
  FileText,
} from "lucide-react";

const FacebookDeletionPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans tracking-tight">
      {/* Header Section - Full Width Professional Style */}
      <header className="py-16 md:py-24 flex flex-col items-center justify-center text-center gap-4 border-b border-gray-900 bg-linear-to-b from-[#0A0A0A] to-black w-full px-6">
        {/* Icon Container */}
        <div className="bg-[#B37C00] p-3 md:p-4 rounded-2xl mb-2 shadow-[0_0_30px_rgba(179,124,0,0.15)]">
          <ShieldCheck className="text-black w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Brand Label */}
        <div className="flex items-center gap-3 opacity-60">
          <span className="h-px w-8 bg-gray-500"></span>
          <span className="text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            Quranity LLC Compliance
          </span>
          <span className="h-px w-8 bg-gray-500"></span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Data Deletion <span className="text-[#B37C00]">& Privacy</span>
        </h1>

        {/* Sub-text */}
        <p className="text-gray-500 text-sm md:text-base max-w-xl mt-2 leading-relaxed">
          Comprehensive instructions for data removal and our commitment to
          protecting your spiritual and personal journey.
        </p>

        {/* Effective Date Badge */}
        <div className="mt-6 px-4 py-1.5 border border-gray-800 rounded-full bg-white/5">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
            Last Updated: February 25, 2026
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto py-20 px-6">
        {/* Section 1: Data Deletion Instructions (Facebook/Meta) */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="md:w-1/3">
              <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                <Trash2 size={24} className="text-[#B37C00]" />
                User Deletion
              </h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Specific protocols for users who interacted with Quranity via
                Meta services.
              </p>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="group">
                <h4 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <ChevronRight size={18} className="text-[#B37C00]" />
                  How to Request Deletion
                </h4>
                <div className="space-y-4 pl-7">
                  <p className="text-gray-400 leading-relaxed">
                    1. <span className="text-white">In-App:</span> Log into your
                    account dashboard, navigate to settings, and select{" "}
                    <span className="text-red-500 font-medium">
                      'Delete Account'
                    </span>
                    .
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    2. <span className="text-white">Email:</span> Send a request
                    to{" "}
                    <a
                      href="mailto:support@quranity.app"
                      className="text-blue-400 underline underline-offset-4"
                    >
                      support@quranity.app
                    </a>{" "}
                    with the subject line{" "}
                    <span className="italic text-gray-500">
                      "Facebook Data Deletion Request"
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#0A0A0A] rounded-2xl border border-gray-900 flex gap-4">
                <AlertCircle className="text-blue-500 shrink-0" size={20} />
                <div>
                  <h5 className="text-white font-bold text-sm mb-1">
                    Meta Callback Support
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    We support Meta's Data Deletion Callback. Initiating
                    deletion through Facebook settings will automatically notify
                    our systems for processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Privacy Commitment */}
        <section className="mb-24 pt-16 border-t border-gray-900">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="md:w-1/3">
              <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                <Lock size={24} className="text-[#B37C00]" />
                Privacy First
              </h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                As an Islamic app, we treat your spiritual data with the utmost
                responsibility.
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We collect only what is necessary to support your prayer,
                reflection, and learning journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "No profiling or targeted ads",
                  "Meaningful data usage only",
                  "No data sales to third parties",
                  "Transparent handling protocols",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#0A0A0A] p-4 rounded-xl border border-gray-900 hover:border-[#B37C00]/30 transition-colors"
                  >
                    <ChevronRight size={16} className="text-[#B37C00]" />
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Muslim AI Transparency */}
        <section className="mb-24 py-12 px-8 bg-linear-to-r from-[#0A0A0A] to-[#111] rounded-3xl border border-gray-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap size={120} className="text-[#B37C00]" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-[#B37C00] text-xs uppercase tracking-[.3em] font-bold mb-3">
              AI Responsibility
            </h3>
            <h2 className="text-white text-3xl font-bold mb-4">
              Muslim AI Transparency
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Muslim AI is a guidance tool, not an authoritative fatwa
              authority. Conversations are processed to generate responses and
              may be reviewed anonymously to improve quality.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B37C00] mt-1.5 shrink-0" />
                <p>
                  User questions are processed solely to generate spiritual
                  insights.
                </p>
              </div>
              <div className="flex gap-3 items-start text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B37C00] mt-1.5 shrink-0" />
                <p>
                  AI responses should never replace the guidance of qualified
                  scholars.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Your Rights */}
        <section className="mb-24 pt-16 border-t border-gray-900">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="md:w-1/3">
              <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                <Target size={24} className="text-green-500" />
                User Rights
              </h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Manage your privacy regardless of your location.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-2">
                    Access & Correction
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    You have the right to view, download, or correct your
                    personal data at any time.
                  </p>
                </div>
                <div>
                  <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-2">
                    Right to Erasure
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Request full deletion of your datasets from our active
                    production systems.
                  </p>
                </div>
                <div>
                  <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-2">
                    Consent Withdrawal
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Stop data processing by withdrawing consent via in-app
                    settings or device permissions.
                  </p>
                </div>
                <div>
                  <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-2">
                    Data Security
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    We use industry-standard encryption to protect your records
                    from unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Full Width Contact */}
      <footer className="bg-[#0A0A0A] border-t border-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">
              Entity Headquarters
            </h5>
            <div className="flex items-start gap-3 text-gray-500 text-sm">
              <MapPin size={18} className="text-[#B37C00]" />
              <p>
                30 N Gould St #58868
                <br />
                Sheridan, Wyoming 82801, USA
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">
              Global Support
            </h5>
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <Globe size={18} className="text-[#B37C00]" />
              <p>compliance.quranity.app</p>
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <Mail size={18} />
              <p className="font-semibold">support@quranity.app</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-gray-900/50 flex flex-col sm:flex-row justify-between text-[10px] text-gray-700 uppercase tracking-[0.3em]">
          <p>© 2026 Quranity LLC</p>
          <p className="mt-2 sm:mt-0 italic">
            Protecting your spiritual journey through data integrity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FacebookDeletionPage;
