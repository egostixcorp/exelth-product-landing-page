"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const BlogBackButton = () => {
  const router = useRouter();
  return (
    <Button variant={"link"} onClick={() => router.back()}>
      ← Back
    </Button>
  );
};

export default BlogBackButton;
