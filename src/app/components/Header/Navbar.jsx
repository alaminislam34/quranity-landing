"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import { localizeRoute } from "@/lib/i18n-utils";

export default function Navbar() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  const links = [
    { name: t("home"), href: localizeRoute("/", locale), segment: locale },
    {
      name: t("privacy"),
      href: localizeRoute("/privacy", locale),
      segment: "privacy",
    },
    {
      name: t("terms"),
      href: localizeRoute("/terms", locale),
      segment: "terms",
    },
    {
      name: t("facebookDeletion"),
      href: localizeRoute("/facebookTerms", locale),
      segment: "facebookTerms",
    },
    {
      name: t("contact"),
      href: localizeRoute("/contact", locale),
      segment: "contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [email, setEmail] = useState("");

  // Mocking auth - replace with your actual auth hook
  const { user } = { user: null, loading: false };
  const closeAll = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target))
        setMenuOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 backdrop-blur-3xl bg-background shadow-md shadow-white/3 z-50 py-2">
      <div className="max-w-400 mx-auto w-11/12">
        <div className="flex justify-between items-center h-16">
          <Link
            href={localizeRoute("/", locale)}
            className="shrink-0 flex items-center gap-2 flex-row"
          >
            <Image
              src="/logos/quranity.jpg"
              height={200}
              width={200}
              alt={t("logoAlt")}
              className="rounded-xl max-w-15 shadow-lg shadow-black/50"
            />
            <p className="text-white font-medium text-lg">{t("brand")}</p>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.segment}>
                <Link
                  href={link.href}
                  className={`text-[15px] transition-colors duration-200 ${
                    pathname.endsWith(link.segment)
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center border border-white/10 p-0.5 rounded-full cursor-pointer"
                >
                  <Image
                    src={user.image}
                    width={34}
                    height={34}
                    className="rounded-full"
                    alt={t("profileAlt")}
                  />
                </button>
              </div>
            ) : (
              <button
                className="lg:hidden p-2 text-gray-400 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed h-screen inset-0 z-60 lg:hidden transition-all overflow-hidden duration-300 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          ref={sidebarRef}
          className={`absolute right-0 top-0 z-50 h-full w-72 bg-black backdrop-blur-3xl p-8 border-l border-gray/50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-white font-bold text-xl">{t("menu")}</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.segment}
                href={link.href}
                onClick={closeAll}
                className={`text-lg ${pathname.endsWith(link.segment) ? "text-primary" : "text-gray-300"}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4 border-t border-white/5">
              <div className="flex items-center bg-[#141414] border border-white/10 rounded-lg px-4 py-2 group focus-within:border-white/20 transition-all">
                <Mail
                  size={18}
                  className="text-gray-400 group-focus-within:text-white"
                />
                <input
                  className="bg-transparent border-none text-[14px] text-white placeholder:text-gray-500 ml-3 focus:ring-0 w-48 outline-none"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
                {t("getApp")}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
