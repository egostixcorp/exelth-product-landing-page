import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import ConsoleEasterEgg from "@/components/Global/ConsoleLogEgg";
// import TranslateToggle from "@/components/Global/TranslateToggle";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
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
    default:
      "Exelth | Healthcare Infrastructure Platform for Clinics & Hospitals",
  },

  description:
    "Exelth is a unified healthcare infrastructure platform for clinics and hospitals. Manage appointments, patient flow, billing, clinical records, staff coordination, and analytics in one connected system.",

  keywords: [
    "Exelth",
    "healthcare operation platform",
    "clinic management software",
    "hospital management system",
    "patient flow management",
    "visit management system",
    "medical billing software",
    "clinic scheduling software",
    "hospital operations software",
    "healthcare infrastructure platform",
  ],

  authors: [{ name: "Egostix Engineering", url: "https://www.egostix.com/" }],
  creator: "Egostix Engineering",
  publisher: "Exelth",

  openGraph: {
    type: "website",
    url: "https://www.exelth.com/",
    title: "Exelth | Unified Healthcare Operations Platform",
    description:
      "Run your clinic or hospital on one system. Exelth connects operations, patient flow, billing, clinical records, and analytics to improve efficiency and control.",
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
        <AuthProvider>
          <LanguageProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <GoogleAnalytics gaId="G-1H3MPS7600" />
              <GoogleTagManager gtmId="GTM-5KPGMHFZ" />
              {children}
              <Analytics />
              <ConsoleEasterEgg />
              {/* <TranslateToggle /> */}
            </ThemeProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
