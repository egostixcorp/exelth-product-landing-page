import React from "react";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";
const page = () => {
  return (
    <div>
      <FallBackScreen
        icon={"bill"}
        title={" No bills or payments yet."}
        subtitle={" Your recent invoices and transactions will be shown here."}
        actionText="Refresh"
        // onPress={() => router.back()}
      />
    </div>
  );
};

export default page;
