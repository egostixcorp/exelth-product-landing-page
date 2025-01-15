import React from "react";
import Header from "@/components/Global/Header";
const MarketingLayout = ({ children }) => {
  return (
    <div className="w-full selection:bg-green-950 selection:text-green-300">
      <Header />
      {children}
    </div>
  );
};

export default MarketingLayout;
