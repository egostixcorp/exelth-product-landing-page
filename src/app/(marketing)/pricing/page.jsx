import React from "react";
import Container from "@/components/Global/Container";
import { Badge } from "@/components/ui/badge";
const PricingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Container>
        <Badge
          variant={"outline"}
          className="desktop:text-2xl gap-1 rounded-3xl p-2 px-3 text-lg text-neutral-900"
        >
          <div className="size-5 animate-pulse rounded-full bg-green-600" />
          We are building <span>.</span>
          <span>.</span>
          <span>.</span>
        </Badge>
      </Container>
    </div>
  );
};

export default PricingPage;
