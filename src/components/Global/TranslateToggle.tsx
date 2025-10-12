// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";

// export default function TranslateToggle() {
//   const [lang, setLang] = useState<"en" | "bn">("en");

//   const toggleLang = () => {
//     const newLang = lang === "en" ? "bn" : "en";
//     setLang(newLang);
//     document.dispatchEvent(
//       new CustomEvent("languageChange", { detail: newLang }),
//     );
//   };

//   return (
//     <Button
//       onClick={toggleLang}
//       variant={"exelth"}
//       className="fixed bottom-6 transition-all duration-500 right-6 rounded-full bg-green-600 px-4 py-2 text-white shadow-lg"
//     >
//       {lang === "en" ? "বাংলা দেখুন" : "Show English"}
//     </Button>
//   );
// }
"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function TranslateToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="fixed bottom-6 z-[9999] right-6 rounded-full bg-green-600 px-4 py-2 text-white shadow-lg transition-all hover:bg-green-700"
    >
      {lang === "en" ? "বাংলা দেখুন" : "Show English"}
    </button>
  );
}
