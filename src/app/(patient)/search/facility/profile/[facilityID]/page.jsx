"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL_V1 } from "@/const/URL";
import { usePathname } from "next/navigation";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  Share2,
  Users,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FacilityCarousel from "@/components/App/Card/FacilityCarousel";
import { MdVerified } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import FacilityProfileSkeleton from "@/components/App/Skeleton/FacilityProfileSkeleton";
import {
  getAllFacilityDoctorsByFacilityId,
  getAllDepartmentsByFacilityId,
} from "@/app/actions/facility";
import DepartmentsScrollView from "@/components/App/Facility/DepartmentsScrollView";
import FacilitiesDoctorCard from "@/components/App/Facility/FacilitiesDoctorCard";
import DoctorsSheet from "@/components/App/Facility/DoctorsSheet";
// import FacilityCarousel from "@/components/facility/FacilityCarousel";
// import FacilitiesDoctorCard from "@/components/Cards/FacilitiesDoctorCard";
// import DepartmentsScrollView from "@/components/Facility/DepartmentsScrollView";
// import LabTestsScreen from "@/components/Facility/LabTestCatalogs";
// import DoctorsSheet from "@/components/Models/DoctorSheetModal";

export default function FacilityProfileId({ params }) {
  const pathname = usePathname();
  const [facility, setFacility] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const doctorSheetRef = useRef(null);
  const openDoctorsSheet = () => doctorSheetRef.current?.present?.();

  useEffect(() => {
    const fetchFacilityData = async () => {
      try {
        const [facilityRes, doctorsRes, departmentsRes] = await Promise.all([
          fetch(`${API_URL_V1}/public-facilities`),
          await getAllFacilityDoctorsByFacilityId(params.facilityID),
          await getAllDepartmentsByFacilityId(params.facilityID),
          // fetch(`${API_URL_V1}/facility/${params.facilityId}/doctors`),
          // fetch(`${API_URL_V1}/facility/${params.facilityId}/departments`),
        ]);

        const facilityData = await facilityRes.json();
        // const doctorsData = await doctorsRes.json();
        // const deptData = await departmentsRes.json();

        setFacility(facilityData);
        setDoctors(doctorsRes);
        setDepartments(departmentsRes);
      } catch (err) {
        console.error("Failed to fetch facility data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilityData();
  }, [params.facilityID]);
  // console.log(facility);

  const selectedFacility = facility.find(
    (item) => item.id === params.facilityID,
  );
  const handleShare = async () => {
    const shareUrl = `https://exelth.com${pathname}`;
    const title = `Check out ${selectedFacility?.name} on Exelth`;
    const text = `${selectedFacility?.name}\n${selectedFacility?.location?.address || "View this healthcare facility"}`;

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  if (loading) {
    return <FacilityProfileSkeleton />;
  }

  if (!selectedFacility) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500">Facility not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white md:p-5 p-2">
      {/* --- Cover Carousel --- */}
      {/* <FacilityCarousel data={facility} /> */}
      <div className="redd hidden h-96 w-full items-center justify-center md:flex md:px-[21%]">
        <div className="redd grid h-full w-full grid-cols-2 gap-2 overflow-hidden rounded-2xl">
          <div id="cover_photo" className="size-full overflow-hidden">
            <Image
              src={selectedFacility?.cover_photo}
              alt=""
              width={500}
              height={500}
              className="size-full border object-cover"
            />
          </div>
          <div className="grid grid-cols-2 place-items-center">
            {selectedFacility?.photos?.slice(0, 4).map((photo, idx) => (
              <div key={idx} className="h-48 w-full overflow-hidden">
                <Image
                  src={photo}
                  alt={`Facility Photo ${idx + 1}`}
                  width={500}
                  height={500}
                  className="h-full w-full border object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <FacilityCarousel data={selectedFacility} />
      </div>

      {/* --- Header --- */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedFacility?.name}
              </h1>
              {selectedFacility?.verified ? (
                <div className="flex items-center gap-1 rounded-md border border-blue-500 bg-blue-50 px-2 py-0.5">
                  <MdVerified className="h-4 w-4 text-blue-600" />
                </div>
              ) : (
                <div className="flex items-center gap-1 rounded-md border border-gray-300 bg-gray-100 px-2 py-0.5">
                  <FaUsers className="h-4 w-4 text-gray-500" />
                </div>
              )}
            </div>

            <div className="mt-1 flex flex-col gap-1 text-sm text-gray-600">
              <div className="flex items-start gap-1">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>
                  {selectedFacility?.location?.address ||
                    "No address available"}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>
                    {selectedFacility?.business_number || "No number"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{selectedFacility?.business_email || "No email"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex items-center gap-1 border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <Share2 className="h-4 w-4 text-green-600" /> Share
            </Button>

            <Button
              onClick={() => setIsFavorite((prev) => !prev)}
              variant="outline"
              className={`flex items-center gap-1 border-gray-300 ${isFavorite ? "bg-red-100" : "bg-gray-50"}`}
            >
              <Heart
                className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-green-600"}`}
              />
            </Button>
          </div>
        </div>

        {/* --- Departments --- */}
        <div className="mt-6">
          <DepartmentsScrollView
            departments={departments}
            facility_id={params.facilityID}
            facility_name={selectedFacility.name}
            loading={loading}
          />
        </div>

        {/* --- Doctors Section --- */}
        <div className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
            <Stethoscope className="h-5 w-5 text-gray-600" /> Doctors
          </h2>

          {doctors.length === 0 ? (
            <p className="text-gray-500">
              No doctors available at this facility.
            </p>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {doctors.slice(0, 3).map(({ doctor, facility_doctor }) => (
                  <FacilitiesDoctorCard
                    key={doctor.id}
                    doctor_id={doctor.id}
                    org_id={doctor.org_id}
                    facility_id={selectedFacility.id}
                    name={doctor.user.full_name}
                    specialty={doctor.department?.name || "Unknown"}
                    fee={
                      facility_doctor.fee
                        ? `${facility_doctor.fee}`
                        : "Not provided"
                    }
                    image={doctor.user.avatar_url}
                  />
                ))}
              </div>

              {doctors.length > 3 && (
                <div className="mt-4 text-center">
                  <Button
                    onClick={() => setOpen(true)}
                    // onClick={openDoctorsSheet}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    See All Doctors ({doctors.length})
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        <DoctorsSheet
          doctors={doctors}
          ref={doctorSheetRef}
          open={open}
          onOpenChange={setOpen}
        />

        {/* --- Lab Tests --- */}
        <div className="mt-10">{/* <LabTestsScreen id={facility.id} /> */}</div>

        {/* --- Services --- */}
        {selectedFacility?.services_tag?.tags?.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedFacility.services_tag.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
