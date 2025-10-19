"use client";

import { trackButtonClick } from "@/lib/tracker";
// import { useAuth } from "@/context/AppAuthContext"; // or however you get user
import { useState } from "react";

export function useTrackClick() {
  //   const { user } = useAuth(); // assumes you have user.id
  const [loading, setLoading] = useState(false);

  async function track(label: string) {
    try {
      setLoading(true);
      await trackButtonClick(label);
      console.log(`Tracked click for ${label}`);
    } catch (err) {
      console.error("Failed to track click:", err);
    } finally {
      setLoading(false);
    }
  }

  return { track, loading };
}
