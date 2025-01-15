import React from "react";
import FeatureCard from "../Cards/feature-card";
import { features } from "../../data/features";
const FeaturesSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <div id="head">
        <h1 className="desktop:text-5xl text-3xl">Features</h1>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {features.map((data, i) => {
          return (
            <FeatureCard
              key={i}
              title={data.title}
              desc={data.description}
              icon={data.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
