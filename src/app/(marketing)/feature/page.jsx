import React from "react";
import Container from "@/components/Global/Container";
import FeatureSection from "@/components/Sections/features-section";
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
