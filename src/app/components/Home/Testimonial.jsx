"use client";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const testimonials = [
  {
    name: "Benjamin Harper",
    role: "Marketing Manager",
    time: "3 days ago",
    content: "Love using this exchange as they offer very good support.",
    image: "https://i.pravatar.cc/150?u=ben",
  },
  {
    name: "Maria Bigu",
    role: "Customer Support",
    time: "3 days ago",
    content:
      "I feel enthusiastic about utilizing this platform. It offers a seamless experience.",
    image: "https://i.pravatar.cc/150?u=maria",
  },
  {
    name: "Roberta Francis",
    role: "Financial Analyst",
    time: "5 days ago",
    content:
      "Enjoy using this platform because they provide excellent support services.",
    image: "https://i.pravatar.cc/150?u=roberta",
  },
  {
    name: "Ethan Mitchell",
    role: "Sales Executive",
    time: "2 days ago",
    content:
      "Pleasantly surprised by the increase in funds, percentage-wise. It's a promising start for me as an investor.",
    image: "https://i.pravatar.cc/150?u=ethan",
  },
  {
    name: "Ava Foster",
    role: "Software Engineer",
    time: "1 day ago",
    content:
      "Using this platform has been such a breeze! I feel completely secure knowing my assets are protected, and whenever I need help, the support is top-notch. Managing my crypto has never been easier!",
    image: "https://i.pravatar.cc/150?u=ava",
  },
  {
    name: "Lucas Bennett",
    role: "Tech Sprint",
    time: "1 day ago",
    content:
      "KryptoRealm supports diverse blockchain networks. Registration is easy and user-friendly.",
    image: "https://i.pravatar.cc/150?u=lucas",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full relative group"
  >
    <div>
      <div className="flex justify-between items-start border-b border-b-gray/40 pb-4 mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#F38020] text-[#F38020]" />
          ))}
        </div>
        <span className="text-gray-500 text-sm font-light">
          {testimonial.time}
        </span>
      </div>

      <p className="text-gray-300 text-base leading-relaxed mb-8">
        {testimonial.content}
      </p>
    </div>

    <div className="flex justify-between items-center mt-auto">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border border-gray-700 object-cover"
        />
        <div>
          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors cursor-pointer">
        <BsTwitterX />
      </div>
    </div>
  </motion.div>
);

const Testimonial = () => {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#F5F5F5] text-2xl md:text-4xl xl:text-[40px] font-semibold text-center mb-12 xl:mb-16 max-w-3xl mx-auto">
          What our user say?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} testimonial={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
