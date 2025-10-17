import type { Metadata } from "next";
import ConsoleEasterEgg from "@/components/Global/ConsoleLogEgg";
import TranslateToggle from "@/components/Global/TranslateToggle";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const FacebookPixel = dynamic(import("../lib/facebook-meta-pixel"));
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

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
      <head>
        <Script
          id="fb-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq) return;
                n = f.fbq = function(){
                  n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments)
                };
                if(!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = true;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = true;
                t.src = 'https://connect.facebook.net/en_US/fbevents.js';
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              }(window, document, 'script');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <FacebookPixel />
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
