import React from "react";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const page = () => {
  return (
    <div>
      <FallBackScreen
        icon={"coffee"}
        title={" No prescriptions or meal plans yet."}
        subtitle={
          "You'll see your prescribed medicines and scheduled meals here."
        }
        // actionText="Refresh"
        // onPress={() => router.back()}
      />
    </div>
  );
};

export default page;
