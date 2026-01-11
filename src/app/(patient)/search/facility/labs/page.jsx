import React from "react";
import { FlaskConical, Construction } from "lucide-react";
import BackButtonLable from "@/components/App/Button/back-button-lable";

const LabTestBookPage = ({ searchParams }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-muted px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <FlaskConical className="h-10 w-10 text-green-600" />
      </div>

      <h1 className="text-2xl font-bold">Lab Test Booking</h1>

      <p className="max-w-md text-sm text-muted-foreground">
        This lab booking flow is currently being built. You’ll soon be able to
        select time slots, sample collection, and confirm payments here.
      </p>

      {searchParams?.test_id && (
        <div className="rounded-md border bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
          Test ID: <span className="font-mono">{searchParams.test_id}</span>
        </div>
      )}

      <div className="mt-2 flex items-center gap-2 text-sm text-yellow-700">
        <Construction className="h-4 w-4" />
        Feature in active development
      </div>

     <BackButtonLable lable="Go Back" />
    </div>
  );
};

export default LabTestBookPage;
