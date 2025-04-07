import React from "react";
import DesktopMockUp from "../Mock/desktop-mockup";
import LaptopMockUp from "../Mock/laptop-mockup";
const DemoSection = () => {
  return (
    <div className="redd flex flex-col gap-5 laptop:h-screen w-full items-center justify-start">
      <h1 className="laptop:text-3xl font-semibold text-center w-full">Mordern Hospital Management System</h1>
      <DesktopMockUp />
      {/* <LaptopMockUp screenImage="/mock/light-b2b-app.png" /> */}
    </div>
  );
};

export default DemoSection;
