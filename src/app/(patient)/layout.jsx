import Header from "@/components/App/Global/Header";
import Footer from "@/components/Global/Footer";
import TabScreen from "@/components/App/Global/TabScreen";
import React from "react";
import AppDownloadDialog from "@/components/App/Global/AppDownloadDialog";
export const metadata = {
  metadataBase: new URL("https://www.exelth.com/patient"),

  title: {
    template: "%s | Exelth",
    default:
      "Exelth Care | Book Appointments, Track Visits & Access Health Records",
  },

  description:
    "Find trusted clinics and doctors, book appointments, track visit updates, access prescriptions and medical records, and stay connected to your care — all in one app.",

  openGraph: {
    type: "website",
    url: "https://www.exelth.com/patient",
    title:
      "Exelth Care | Book Appointments & Manage Your Healthcare in One App",
    description:
      "Book visits, receive updates, view prescriptions, and access your health records from trusted healthcare providers.",
    siteName: "Exelth Care",
  },
};
const PatientLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <AppDownloadDialog />
      <TabScreen />
      <Footer />
    </div>
  );
};

export default PatientLayout;
