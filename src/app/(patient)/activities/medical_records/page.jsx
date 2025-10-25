import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";
import React from "react";

const page = () => {
  return (
    <div>
      <FallBackScreen
        icon={"book"}
        title={" No medical records found."}
        subtitle={
          "Once your doctor uploads your medical records, they will appear here."
        }
        actionText="Refresh"
        // onPress={() => router.back()}
      />
    </div>
  );
};

export default page;
