import React from "react";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const page = () => {
  return (
    <div>
      <FallBackScreen
        icon={"home"}
        title={"  No room or bed allocated yet."}
        subtitle={" When admitted, your room info will appear here."}
        actionText="Refresh"
        // onPress={() => router.back()}
      />
    </div>
  );
};

export default page;
