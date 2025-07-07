import React from "react";
import AboutPage from "@/components/Pages/about-page";
export const metadata = {
  title: "About",
};
const page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AboutPage />
    </div>
  );
};

export default page;
