"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is Quranity?",
    answer:
      "Quranity is an all-in-one Islamic app designed to help Muslims stay connected to their faith through the Qur'an, prayer times, daily reminders, and AI-powered Islamic guidance.",
  },
  {
    question: "Is Quranity free to use?",
    answer:
      "Yes, Quranity offers a comprehensive free version that includes all essential features for your daily spiritual journey.",
  },
  {
    question: "Which platforms does Quranity support (iOS / Android / Web)?",
    answer:
      "Quranity is available across all major platforms including iOS, Android, and via any modern web browser.",
  },
  {
    question: "How is Quranity different from other Islamic apps?",
    answer:
      "Quranity combines trusted Islamic content with modern AI technology, offering a personalized, intelligent, and spiritually focused experience — all in one app.",
  },
  {
    question: "Does the AI provide fatwas or personal rulings?",
    answer:
      "No, the AI is designed for educational guidance and information based on established texts; for formal fatwas, we always recommend consulting a qualified scholar.",
  },
  {
    question: "What sources are used for Hadith and Islamic content?",
    answer:
      "We utilize primary authentic sources and verified digital libraries to ensure all Hadith and scholarly content meet high standards of reliability.",
  },
  {
    question: "Is my data safe with Quranity?",
    answer:
      "Data privacy is a core priority. We use industry-standard encryption and security protocols to ensure your personal information remains private and secure.",
  },
  {
    question: "Does Quranity store my conversations with AI?",
    answer:
      "Conversations are stored locally or encrypted to improve your personalized experience, but you have full control over your data history at any time.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
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
  const [openIndex, setOpenIndex] = useState(0); // First one open by default as per image

  return (
    <section id="faq">
      <div className="max-w-300 mx-auto w-11/12 py-12 md:py-16 xl:py-20">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Common Questions About Quranity
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
