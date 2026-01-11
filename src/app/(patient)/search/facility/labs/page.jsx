import React from "react";

const LabTestBookPage = ({ searchParams }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      Lab: {searchParams.test_id}
    </div>
  );
};

export default LabTestBookPage;
