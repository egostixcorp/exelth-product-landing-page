import React from "react";
import { Skeleton } from "../../ui/skeleton";
const PlacesClientPage = ({ place }) => {
  return (
    <div className="flex h-full w-full items-start justify-center gap-5 p-10">
      <div
        id="facilities"
        className="grid h-full w-full grid-cols-1 place-items-center gap-5 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3"
      >
        {Array.from({ length: 13 }).map((_, idx) => {
          return (
            <Skeleton
              key={idx}
              className="h-64 rounded-3xl w-80 tablet:w-64 laptop:w-60 desktop:w-60"
            ></Skeleton>
          );
        })}
      </div>
      <div
        id="maps"
        className="redd sticky top-36 hidden h-[75vh] w-full laptop:block"
      >
        <Skeleton className="h-full w-full rounded-3xl" />
      </div>
    </div>
  );
};

export default PlacesClientPage;
