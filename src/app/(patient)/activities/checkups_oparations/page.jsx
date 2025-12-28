import React from "react";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const page = () => {
  return (
    <div>
      <FallBackScreen
        icon={"heart"}
        title={"  No checkups or operations planned yet."}
        subtitle={
          "Upcoming procedures and medical checkups will be listed here."
        }
        actionText="Refresh"
        // onPress={() => router.back()}
      />
    </div>
  );
};

export default page;
