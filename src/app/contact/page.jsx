"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <section className=" py-16 md:py-24 px-4 min-h-screen">
      <section>
        <div className="max-w-400 mx-auto w-11/12 text-center">
          {/* Header Section */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D1D5DB] text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-sm"
          >
            We&apos;re Here to Help
          </motion.h2>

          <p className="text-[#9CA3AF] text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            Have a question, feedback, or need support? We&apos;d love to hear
            from you. Quranity is built with care for the global Muslim
            community, and your input helps us improve.
          </p>

          {/* Form Section */}
          <form className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="space-y-3">
                <label className="text-[#9CA3AF] text-xl font-medium block ml-1">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#171717] text-white rounded-xl py-4 px-6 outline-none border border-transparent focus:border-gray-600 transition-all placeholder:text-gray-500"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-[#9CA3AF] text-xl font-medium block ml-1">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#171717] text-white rounded-xl py-4 px-6 outline-none border border-transparent focus:border-gray-600 transition-all placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-3">
              <label className="text-[#9CA3AF] text-xl font-medium block ml-1">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.005 }}
                rows={8}
                placeholder="Message"
                className="w-full bg-[#171717] text-white rounded-xl py-4 px-6 outline-none border border-transparent focus:border-gray-600 transition-all placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#C1871D] hover:bg-[#A67318] text-white font-semibold py-4 px-8 rounded-xl flex items-center gap-2 transition-colors duration-300 shadow-lg"
              >
                Leave us a Message <ArrowRight size={20} />
              </motion.button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
