import React from "react";
import DesktopMockUp from "../Mock/desktop-mockup";
import LaptopMockUp from "../Mock/laptop-mockup";
const DemoSection = () => {
  return (
    <div className="redd flex w-full flex-col items-center justify-start gap-5 laptop:h-screen">
      {/* <h1 className="w-full text-center font-semibold laptop:text-3xl">
        Mordern Health Care Management System
      </h1> */}
      <DesktopMockUp />
      {/* <LaptopMockUp screenImage="/mock/light-b2b-app.png" /> */}
    </div>
  );
};

export default DemoSection;
