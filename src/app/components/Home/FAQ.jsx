"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const locale = useLocale();
  if (locale === "ar") {
    return (
      <div className="mb-4 border border-[#1F1F1F] rounded-xl hover:bg-[#111111] transition-colors duration-200">
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between p-6 text-right group"
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown
              className="text-white/70 group-hover:text-white"
              size={20}
            />
          </motion.div>
          <span className="text-white text-lg font-medium pl-8">
            {question}
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-2 text-right text-gray/80 leading-relaxed">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  return (
    <div className="mb-4 border border-[#1F1F1F] rounded-xl hover:bg-[#111111] transition-colors duration-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="text-white text-lg font-medium pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown
            className="text-white/70 group-hover:text-white"
            size={20}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 text-gray/80 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState(0); // First one open by default as per image

  const faqData = [
    {
      question: t("items.whatIs.question"),
      answer: t("items.whatIs.answer"),
    },
    {
      question: t("items.free.question"),
      answer: t("items.free.answer"),
    },
    {
      question: t("items.platforms.question"),
      answer: t("items.platforms.answer"),
    },
    {
      question: t("items.difference.question"),
      answer: t("items.difference.answer"),
    },
    {
      question: t("items.fatwa.question"),
      answer: t("items.fatwa.answer"),
    },
    {
      question: t("items.sources.question"),
      answer: t("items.sources.answer"),
    },
    {
      question: t("items.dataSafe.question"),
      answer: t("items.dataSafe.answer"),
    },
    {
      question: t("items.conversations.question"),
      answer: t("items.conversations.answer"),
    },
  ];

  return (
    <section id="faq">
      <div className="max-w-300 mx-auto w-11/12 py-12 md:py-16 xl:py-20">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          {t("title")}
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
