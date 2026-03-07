"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const icons = [
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/share/18R73SgF3x/?mibextid=wwXIfr",
  },
  {
    Icon: AiFillInstagram,
    href: "https://www.instagram.com/quranityapp?igsh=bzV0dnBsbWE4cmF4&utm_source=qr",
  },
  {
    Icon: FaYoutube,
    href: "https://www.youtube.com/@quranityapp?si=JCL7xoUGtl3xJGF4",
  },
];

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
        { name: "FAQ", href: "#faq" },
        { name: "Facebook Deletion Page", href: "facebook-terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/share/18R73SgF3x/?mibextid=wwXIfr",
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/quranityapp?igsh=bzV0dnBsbWE4cmF4&utm_source=qr",
        },
        {
          name: "Youtube",
          href: "https://www.youtube.com/@quranityapp?si=JCL7xoUGtl3xJGF4",
        },
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
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 max-w-400 mx-auto w-11/12 mb-10" />

      {/* Bottom Section */}
      <div className="max-w-400 mx-auto w-11/12 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="shrink-0 flex items-center gap-2 flex-row">
          <Image
            src="/logos/quranity.jpg"
            height={200}
            width={200}
            alt="Logo"
            className="rounded-xl max-w-15 shadow-lg shadow-black/50"
          />
          <p className="text-white font-medium text-lg">Quranity</p>
        </Link>

        {/* Copyright */}
        <p className="text-[#A3A3A3] text-base">
          © {currentYear} Quranity LLC. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {icons.map((icon, i) => (
            <motion.a
              key={i}
              href={icon.href}
              whileHover={{ y: -3, backgroundColor: "#262626" }}
              className="p-3 border border-gray-800 rounded-full transition-colors"
            >
              <icon.Icon className="text-white text-2xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
