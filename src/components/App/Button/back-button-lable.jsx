"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButtonLable = ({ lable }) => {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
    //   className="size-10 rounded-full"
      onClick={() => router.back()}
    >
      {lable ? lable : <ArrowLeft />}
    </Button>
  );
};

export default BackButtonLable;
