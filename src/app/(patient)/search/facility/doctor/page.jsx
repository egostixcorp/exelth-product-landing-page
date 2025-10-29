import React, { Suspense } from "react";

import DoctorProfileClientPage from "../../../../../components/App/Pages/DoctorProfileClientPage.jsx";
const page = ({ searchParams }) => {
  const { doctor_id, org_id, facility_id } = searchParams;
  return (
    <div className="min-h-screen w-full">
      <Suspense fallback={"Loading Doctor Profile"}>
        <DoctorProfileClientPage
          doctor_id={doctor_id}
          org_id={org_id}
          facility_id={facility_id}
        />
      </Suspense>
    </div>
  );
};

export default page;
