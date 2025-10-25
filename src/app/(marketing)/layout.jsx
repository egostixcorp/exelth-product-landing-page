"use client";
import React, { useEffect } from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { setVisitorCookie } from "@/lib/tracker";
import TranslateToggle from "@/components/Global/TranslateToggle";
const MarketingLayout = ({ children }) => {
  useEffect(() => {
    (async () => {
      const id = await setVisitorCookie();
      // setVisitorId(id);
    })();
  }, []);
  return (
    <div className="w-full selection:bg-green-950 selection:text-green-300">
      <Header />
      {children}
      <TranslateToggle />
      <Footer />
    </div>
  );
};

export default MarketingLayout;
