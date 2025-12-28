"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Users,
} from "lucide-react";
import DoctorSlotPicker from "@/components/App/Card/DoctorSlotPicker";
import {
  getFacilityDoctorFullDetailsById,
  getPublicFacilityDetailsByID,
} from "@/app/actions/facility";
import { getAppointmentSeatsByDoctorId } from "@/app/actions/slots";
import { MdVerified } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import BackButton from "../Button/BackButton";
export default function DoctorPage({ doctor_id, org_id, facility_id }) {
  const router = useRouter();
  // const params = useSearchParams();

  // const doctor_id = params.get("doctor_id");
  // const facility_id = params.get("facility_id");
  // const org_id = params.get("org_id");

  const [doctorData, setDoctorData] = useState(null);
  const [facilityData, setFacilityData] = useState(null);
  const [slotData, setSlotData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!doctor_id || !facility_id) return;
    const fetchData = async () => {
      try {
        const [docData, slots, facility] = await Promise.all([
          getFacilityDoctorFullDetailsById(doctor_id),
          getAppointmentSeatsByDoctorId(doctor_id),
          getPublicFacilityDetailsByID(facility_id),
        ]);
        setDoctorData(docData?.[0]);
        setSlotData(slots);
        setFacilityData(facility);
      } catch (err) {
        console.error("Failed to load doctor:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [doctor_id, facility_id]);

  if (loading)
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-green-600" />
      </div>
    );

  if (!doctorData)
    return (
      <div className="flex h-[70vh] items-center justify-center text-gray-600">
        Doctor not found.
      </div>
    );

  const doctor = doctorData.doctor;
  const facility_doctor = doctorData.facility_doctor;

  return (
    <div className="relative mx-auto max-w-4xl space-y-8 p-6">
      <div className="absolute -left-10 top-10">
        <BackButton />
      </div>
      {/* Doctor Profile */}
      <div className="flex items-center gap-6 rounded-2xl border bg-white p-6 shadow-sm">
        <Image
          src={doctor.user?.avatar_url || "/placeholder-avatar.png"}
          alt={doctor.user?.full_name || "Doctor"}
          width={100}
          height={100}
          className="rounded-full border object-cover"
        />
        <div className="flex flex-1 flex-col">
          <h2 className="text-lg font-semibold text-gray-900">
            {doctor.user?.full_name}
          </h2>
          <p className="text-sm text-gray-600">{doctor.department?.name}</p>
          {doctor.description && (
            <p className="mt-1 text-sm text-gray-500">
              Certificates: {doctor.description}
            </p>
          )}
          <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-green-50 px-3 py-1">
            <span className="text-xs font-medium text-green-800">
              Consultation Fee:
            </span>
            <span className="font-semibold text-green-700">
              {facility_doctor?.show_price
                ? `₹${facility_doctor.fee}`
                : "Not provided"}
            </span>
          </div>
        </div>
      </div>

      {/* Doctor Slots */}
      <div className="block laptop:hidden">
        <DoctorSlotPicker
          slotData={slotData}
          doctor_id={doctor_id}
          facility_id={facility_id}
          org_id={org_id}
          fee={facility_doctor?.fee}
        />
      </div>

      <div className="justify-s flex flex-row-reverse items-start gap-5">
        {/* Doctor Slots */}
        <div className="sticky top-52 hidden w-96 laptop:block">
          <DoctorSlotPicker
            slotData={slotData}
            doctor_id={doctor_id}
            facility_id={facility_id}
            org_id={org_id}
            fee={facility_doctor?.fee}
          />
        </div>
        <div id="info">
          {/* Facility Info */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">Facility Details</h3>

            {facilityData?.cover_photo && (
              <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg">
                <Image
                  src={facilityData.cover_photo}
                  alt={facilityData.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium text-gray-900">
                {facilityData.name}
              </h4>
              {facilityData.verified ? (
                <Badge
                  variant="outline"
                  className="border-blue-500 text-blue-500"
                >
                  <MdVerified className="mr-1 h-3.5 w-3.5" /> Verified
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="border-gray-400 text-gray-600"
                >
                  <FaUsers className="mr-1 h-3.5 w-3.5" /> Community
                </Badge>
              )}
            </div>

            <p className="text-sm text-gray-600">
              {facilityData.facility_type}
            </p>

            {facilityData?.location?.address && (
              <p className="mt-1 flex items-center text-sm text-gray-700">
                <MapPin className="mr-1 h-4 w-4 text-gray-500" />
                {facilityData.location.address}
              </p>
            )}
            {facilityData?.business_number && (
              <p className="mt-1 flex items-center text-sm text-gray-700">
                <Phone className="mr-1 h-4 w-4 text-gray-500" />
                {facilityData.business_number}
              </p>
            )}
            {facilityData?.business_email && (
              <p className="mt-1 flex items-center text-sm text-gray-700">
                <Mail className="mr-1 h-4 w-4 text-gray-500" />
                {facilityData.business_email}
              </p>
            )}

            {facilityData?.services_tag?.tags?.length > 0 && (
              <div className="mt-4">
                <h5 className="mb-2 text-sm font-medium text-gray-800">
                  Services
                </h5>
                <div className="flex flex-wrap gap-2">
                  {facilityData.services_tag.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
