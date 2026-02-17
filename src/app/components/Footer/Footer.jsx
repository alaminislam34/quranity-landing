"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

// Replace this with your actual logo path

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Home",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Price", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "Review", href: "#review" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Facebook", href: "https://facebook.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "Twitter", href: "https://twitter.com" },
      ],
    },
  ];

  return (
    <footer className="bg-[#141414] text-white py-12 md:py-16 xl:py-20">
      {/* Upper Section */}
      <div className="max-w-400 mx-auto w-11/12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link href={link.href} passHref>
                    <motion.span
                      whileHover={{ x: 5, color: "#d1d5db" }}
                      className="text-[#A3A3A3] text-lg cursor-pointer transition-colors"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* App Store Buttons */}
        {/* <div className="flex flex-col gap-4 items-start md:items-end">
          <motion.button whileHover={{ scale: 1.02 }}>
            <Image
              src="/logos/playstore.png"
              alt="Play Store"
              width={400}
              height={400}
              className="max-w-50 h-full w-full object-contain"
            />
          </motion.button>

          <motion.button whileHover={{ scale: 1.02 }}>
            <Image
              src="/logos/applestore.png"
              alt="Apple Store"
              width={400}
              height={400}
              className="max-w-50 h-full w-full object-contain"
            />
          </motion.button>
        </div> */}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 max-w-400 mx-auto w-11/12 mb-10" />

      {/* Bottom Section */}
      <div className="max-w-400 mx-auto w-11/12 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/quranity.jpg"
            height={200}
            width={200}
            alt="Logo"
            className="rounded-xl max-w-15 shadow-lg shadow-black/50"
          />
        </Link>

        {/* Copyright */}
        <p className="text-[#A3A3A3] text-base">
          © {currentYear} Quranity. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebook, AiFillInstagram, FaTwitter].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -3, backgroundColor: "#262626" }}
              className="p-3 border border-gray-800 rounded-full transition-colors"
            >
              <Icon className="text-white text-2xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
