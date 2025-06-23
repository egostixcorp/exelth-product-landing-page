import React from "react";
import Container from "@/components/Global/Container";
import FeatureSection from "@/components/Layouts/grid-layout";
const FeaturesPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Container>
        <FeatureSection />
      </Container>
    </div>
  );
};

export default FeaturesPage;
