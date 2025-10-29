"use client";

import React, { useEffect, useState } from "react";
import FacilitiesDoctorCard from "../../../../../components/App/Facility/FacilitiesDoctorCard";
import { getAllFacilityDoctorsByFacilityId } from "../../../../../app/actions/facility";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const FacilityDepartmentPage = () => {
  const searchParams = useSearchParams();

  const org_id = searchParams.get("org_id");
  const doctor_id = searchParams.get("doctor_id");
  const facility_id = searchParams.get("facility_id");
  const facility_name = searchParams.get("facility_name");
  const department_id = searchParams.get("department_id");
  const department_name = searchParams.get("department_name");

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllFacilityDoctorsByFacilityId(facility_id);
        setDoctors(data || []);
      } catch (error) {
        console.error("Failed to fetch facility doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    if (facility_id) fetchDoctors();
  }, [facility_id]);

  const DoctorsByDepartmentId = doctors.filter(
    (doc) => String(doc.doctor.department_id) === String(department_id),
  );

  return (
    <div className="mx-auto min-h-screen max-w-4xl bg-white px-4 py-6 md:px-8">
      {/* --- Header --- */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">{facility_name}</h1>
        <p className="text-sm text-gray-500">
          {department_name || "Department"}
        </p>
      </div>

      {/* --- Loading --- */}
      {loading ? (
        <div className="flex h-[60vh] items-center justify-center text-gray-600">
          Loading doctors...
        </div>
      ) : DoctorsByDepartmentId.length === 0 ? (
        <div className="flex h-[60vh] flex-col items-center justify-center text-center text-gray-500">
          <p className="text-sm">No doctors available in this department.</p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {DoctorsByDepartmentId.map(({ doctor, facility_doctor }) => (
            <FacilitiesDoctorCard
              key={doctor.id}
              doctor_id={doctor.id}
              org_id={doctor.org_id}
              facility_id={facility_id}
              name={doctor.user.full_name}
              specialty={doctor.department?.name || "Unknown"}
              fee={
                facility_doctor.fee ? `${facility_doctor.fee}` : "Not provided"
              }
              image={doctor.user.avatar_url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FacilityDepartmentPage;
