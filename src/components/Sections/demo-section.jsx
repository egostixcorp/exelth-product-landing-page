import React from "react";
import DesktopMockUp from "../Mock/desktop-mockup";
import PhoneMockUp from "../Mock/phone-mockup";
const DemoSection = () => {
  return (
    <div className="redd relative flex w-full flex-col items-center justify-start gap-5">
      {/* <h1 className="w-full text-center font-semibold laptop:text-3xl">
        Mordern Health Care Management System
      </h1> */}
      <DesktopMockUp />
      {/* <LaptopMockUp screenImage="/mock/light-b2b-app.png" /> */}
      {/* <div className="overflow-hidden"> */}
      <PhoneMockUp />
      {/* </div> */}
    </div>
  );
};

export default DemoSection;
