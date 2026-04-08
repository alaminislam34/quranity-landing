"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("contactPage");
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 px-4 min-h-screen">
      <section>
        <div className="max-w-400 mx-auto w-11/12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold text-center mb-12 xl:mb-16"
          >
            {t("title")}
          </motion.h2>

          <p className="text-[#9CA3AF] text-sm text-center md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            {t("description")}
          </p>

          {/* Form Section */}
          <form
            className={`space-y-8 ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="space-y-3">
                <label className="text-[#9CA3AF] text-xl font-medium block ml-1">
                  {t("nameLabel")}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder={t("namePlaceholder")}
                  className={`w-full bg-[#171717] text-white rounded-xl py-4 px-6 outline-none border border-transparent focus:border-gray-600 transition-all placeholder:text-gray-500 ${locale === "ar" ? "text-right" : "text-left"}`}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-[#9CA3AF] text-xl font-medium block ml-1">
                  {t("emailLabel")}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className={`w-full bg-[#171717] text-white rounded-xl py-4 px-6 outline-none border border-transparent focus:border-gray-600 transition-all placeholder:text-gray-500 ${locale === "ar" ? "text-right" : "text-left"}`}
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-3">
              <label className="text-[#9CA3AF] text-xl font-medium block ml-1">
                {t("messageLabel")}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.005 }}
                rows={8}
                placeholder={t("messagePlaceholder")}
                className={`w-full bg-[#171717] text-white rounded-xl py-4 px-6 outline-none border border-transparent focus:border-gray-600 transition-all placeholder:text-gray-500 ${locale === "ar" ? "text-right" : "text-left"}`}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#C1871D] hover:bg-[#A67318] text-white font-semibold py-4 px-8 rounded-xl flex items-center gap-2 transition-colors duration-300 shadow-lg"
              >
                {t("cta")} <ArrowRight size={20} />
              </motion.button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
