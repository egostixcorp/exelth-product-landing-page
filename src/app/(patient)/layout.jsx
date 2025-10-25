import Header from "@/components/App/Global/Header";
import Footer from "@/components/Global/Footer";
import TabScreen from "@/components/App/Global/TabScreen";
import React from "react";
export const metadata = {
  metadataBase: new URL("https://www.exelth.com/"),
  title: {
    template: "%s | Exelth",
    default: "Exelth | Search Clinic, Doctors, Book Appointments",
  },
};
const PatientLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <TabScreen />
      <Footer />
    </div>
  );
};

export default PatientLayout;
