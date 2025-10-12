"use client";
import { createContext, useContext, useEffect, useState } from "react";

type LangType = "en" | "bn";
interface LangContextType {
  lang: LangType;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<LangType>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("exelth_lang");
    if (savedLang === "bn" || savedLang === "en") setLang(savedLang);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "bn" : "en";
      localStorage.setItem("exelth_lang", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
