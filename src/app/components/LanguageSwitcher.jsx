"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { locales } from "@/lib/i18n-utils";

export default function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languageNames = {
    en: t("english"),
    ar: t("arabic"),
    sq: t("albanian"),
  };

  const handleLanguageChange = (newLocale) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0 && locales.includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    router.replace(`/${segments.join("/")}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium border border-white/40 cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("selectLanguage")}
      >
        <span>{languageNames[locale] || t("english")}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
          role="listbox"
          aria-label={t("selectLanguage")}
        >
          {locales.map((loc) => (
            <button
              type="button"
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`w-full text-left px-4 py-2 transition-colors ${
                locale === loc
                  ? "bg-gray-950 text-primary-300 font-semibold"
                  : "hover:bg-gray-900 cursor-pointer"
              } ${loc === "en" ? "rounded-t-lg" : ""} ${loc === "sq" ? "rounded-b-lg" : ""}`}
            >
              {languageNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
