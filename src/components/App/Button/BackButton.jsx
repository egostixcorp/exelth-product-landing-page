"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant={'outline'} className="rounded-full size-10" onClick={() => router.back()}>
      <ArrowLeft />
    </Button>
  );
};

export default BackButton;
