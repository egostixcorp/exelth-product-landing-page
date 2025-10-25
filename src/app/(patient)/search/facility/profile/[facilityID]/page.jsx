import React from "react";

const FacilityProfileId = ({ params }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      Facility Profile ID: {params.facilityID}
    </div>
  );
};

export default FacilityProfileId;
