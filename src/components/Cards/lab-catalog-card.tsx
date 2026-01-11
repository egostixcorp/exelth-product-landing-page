"use client";

import { Button } from "@/components/ui/button";

export default function LabTestCard({
  test,
  onBook,
}: {
  test: any;
  onBook: () => void;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between flex-col shadow-sm transition hover:shadow-md">
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-gray-900">
          {test.name}
        </h3>

        <p className="text-sm text-gray-500">
          {test.category || "Lab Test"}
        </p>

        <p className="text-lg font-bold text-green-600">
          ₹{test.price}
        </p>

        {test.preparation_instructions && (
          <p className="text-xs text-gray-500">
            Prep: {test.preparation_instructions}
          </p>
        )}
      </div>

      <Button
        onClick={onBook}
        className="mt-4 w-full bg-green-600 hover:bg-green-700"
      >
        Book Test
      </Button>
    </div>
  );
}
