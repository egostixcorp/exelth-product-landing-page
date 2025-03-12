import React from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
const MarketingLayout = ({ children }) => {
  return (
    <div className="w-full selection:bg-green-950 selection:text-green-300">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
