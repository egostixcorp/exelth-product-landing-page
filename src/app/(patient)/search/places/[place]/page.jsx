import React from "react";

const page = ({ params }) => {
  const { place } = params;
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {place}
    </div>
  );
};

export default page;
