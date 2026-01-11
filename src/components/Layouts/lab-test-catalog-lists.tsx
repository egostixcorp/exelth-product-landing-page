"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLabTests } from "@/app/actions/labs";
import { useFeatureFlags } from "@/components/hooks/useFeatureFlags";
import LabTestCard from "@/components/Cards/lab-catalog-card";
// import { RequestPublishCard } from "@/components/Global/";
import { Loader2 } from "lucide-react";
import { RequestPublishCard } from "../App/Card/RequestPublishCard";
import { useAuth } from "@/context/AuthContext";

export default function LabTestsPage({ orgId }: { orgId: string }) {
  const router = useRouter();
  const { isEnabled, loadingFlags } = useFeatureFlags();
  const { user } = useAuth();
  const [tests, setTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orgId) return;

    getLabTests(orgId).then((data) => {
      setTests(data || []);
      setLoading(false);
    });
  }, [orgId]);

  if (loading || loadingFlags) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-green-600" />
      </div>
    );
  }

  if (!isEnabled("show_lab_catelogs")) return null;

  return (
    <div className="w-full space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Available Lab Tests
      </h2>

      {tests.length === 0 ? (
        <div className="flex h-[50vh] items-center justify-center">
          <RequestPublishCard
            type="lab_test"
            userId={user?.id || ""}
            orgId={orgId}
          />
          {/* <p className="text-gray-500">No lab tests available.</p> */}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <LabTestCard
              key={test.id}
              test={test}
              onBook={() =>
                router.push(`/search/facility/labs?test_id=${test.id}`)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
