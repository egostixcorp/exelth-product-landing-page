"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  en: string;
  bn: string;
  className?: string;
}

export default function TranslatableText({ en, bn, className }: Props) {
  const { lang } = useLanguage();
  const text = lang === "en" ? en : bn;

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={lang}
        className={className}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.25 }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}
