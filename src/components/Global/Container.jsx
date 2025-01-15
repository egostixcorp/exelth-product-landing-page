import React from "react";

const Container = ({ children }) => {
  return (
    <div className="redd container flex h-full items-center justify-center p-5 px-[15%] pt-20">
      {children}
    </div>
  );
};

export default Container;
