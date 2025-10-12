import type { Metadata } from "next";
import ConsoleEasterEgg from "@/components/Global/ConsoleLogEgg";
import TranslateToggle from "@/components/Global/TranslateToggle";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.exelth.com/"),
  title: {
    template: "%s | Exelth",
    default: "Exelth | Centralized Digital Health Platform",
  },
  description:
    "Exelth is a next-generation digital healthcare platform by Egostix Engineering. We bring together patients, doctors, and healthcare facilities into one centralized system to improve access, efficiency, and patient care.",
  keywords: [
    "Exelth",
    "Egostix Engineering",
    "digital health platform",
    "healthcare technology",
    "telemedicine",
    "patient management",
    "doctor availability",
    "medical records",
    "e-prescriptions",
    "lab tests booking",
  ],
  authors: [{ name: "Egostix Engineering", url: "https://www.egostix.com/" }],
  creator: "Egostix Engineering",
  publisher: "Exelth",
  openGraph: {
    type: "website",
    url: "https://www.exelth.com/",
    title: "Exelth | Centralized Digital Health Platform",
    description:
      "Exelth unifies healthcare with a centralized platform for patients, doctors, and organizations. Streamline appointments, lab tests, prescriptions, and records in one place.",
    siteName: "Exelth",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ConsoleEasterEgg />
            <TranslateToggle />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
