// hooks/useDoctorFacilityStatus.ts
"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface DoctorFacilityStatus {
  showPrice: boolean;
  isBook: boolean;
  loading: boolean;
}

export function useDoctorFacilityStatus(
  facilityId: string | null,
  orgMemberId: string | null,
): DoctorFacilityStatus {
  const [status, setStatus] = useState<DoctorFacilityStatus>({
    showPrice: false,
    isBook: false,
    loading: true,
  });
  const supabase = createClient();
  useEffect(() => {
    if (!facilityId || !orgMemberId) return;

    const fetchStatus = async () => {
      setStatus((s) => ({ ...s, loading: true }));
      try {
        const { data, error } = await supabase
          .from("facility_doctors")
          .select("show_price, is_book")
          .eq("facility_id", facilityId)
          .eq("org_member_id", orgMemberId)
          .maybeSingle();

        if (error) throw error;

        if (data) {
          setStatus({
            showPrice: Boolean(data.show_price), // ✅ correctly handle DB boolean
            isBook: Boolean(data.is_book),
            loading: false,
          });
        } else {
          setStatus({
            showPrice: false,
            isBook: false,
            loading: false,
          });
        }
      } catch (err) {
        console.error("Error fetching doctor facility status:", err);
        setStatus({ showPrice: false, isBook: false, loading: false });
      }
    };

    fetchStatus();
  }, [facilityId, orgMemberId]);

  return status;
}
