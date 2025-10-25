import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Appointment & test */}
      <FallBackScreen
        icon={"calneder"}
        title={"You don't have any appointment yet."}
        subtitle={"Start by booking your first one!."}
        actionText="Book Now"
        // onPress={handleBookNow}
      />
    </div>
  );
};

export default page;
