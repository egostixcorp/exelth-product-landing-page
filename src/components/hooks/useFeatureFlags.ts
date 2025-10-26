import { createClient } from "@/utils/supabase/client"; // your Supabase client
import { useEffect, useState } from "react";

export function useFeatureFlags(apiUrl?: string) {
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [loadingFlags, setLoadingFlags] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();
  async function fetchFlags() {
    try {
      const url = apiUrl || "https://api.exelth.com/api/v1/feature-flags";
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load feature flags`);
      const data = await res.json();

      const mapped = Object.fromEntries(
        data.map((f: any) => [f.key, f.enabled])
      );
      setFlags(mapped);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoadingFlags(false);
    }
  }

  useEffect(() => {
    fetchFlags();

    // --- Real-time subscription using Supabase Realtime ---
    // const supabase = createClient();

    const channel = supabase
      .channel("feature_flags")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "feature_flags" },
        (payload) => {
          setFlags((prev) => {
            let updated = { ...prev };
            if (
              payload.eventType === "INSERT" ||
              payload.eventType === "UPDATE"
            ) {
              updated[payload.new.key] = payload.new.enabled;
            } else if (payload.eventType === "DELETE") {
              delete updated[payload.old.key];
            }
            return updated;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [apiUrl]);

  return {
    flags,
    loadingFlags,
    error,
    isEnabled: (key: string) => !!flags[key],
    refresh: async () => {
      setLoadingFlags(true);
      await fetchFlags();
    },
  };
}
