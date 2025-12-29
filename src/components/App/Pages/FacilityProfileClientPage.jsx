"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL_V1 } from "@/const/URL";
import { useAuth } from "../../../context/AuthContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  Share2,
  Users,
  CheckCircle2,
  Stethoscope,
  Grid2X2,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FacilityCarousel from "@/components/App/Card/FacilityCarousel";
import { MdVerified } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import FacilityProfileSkeleton from "@/components/App/Skeleton/FacilityProfileSkeleton";
import {
  getAllFacilityDoctorsByFacilityId,
  getAllDepartmentsByFacilityId,
} from "@/app/actions/facility";
import GoogleMapEmbed from "../Global/GoogleMap";
import DepartmentsScrollView from "@/components/App/Facility/DepartmentsScrollView";
import FacilitiesDoctorCard from "@/components/App/Facility/FacilitiesDoctorCard";
import DoctorsSheet from "@/components/App/Facility/DoctorsSheet";
import TodayAvailability from "../Card/TodayDoctor";
import { RequestPublishCard } from "../Card/RequestPublishCard";

export default function FacilityProfileId({ params }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const [facility, setFacility] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  //   const doctorSheetRef = useRef(null);
  //   const openDoctorsSheet = () => doctorSheetRef.current?.present?.();
  // console.log(doctors);

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
    <div className="relative min-h-screen bg-white p-2 md:p-5">
      {/* --- Cover Carousel --- */}
      {/* <FacilityCarousel data={facility} /> */}

      <div className="redd relative w-full items-center justify-center tablet:px-2 md:h-96 laptop:px-8 desktop:px-[21%]">
        <div
          id="desktop-image-layout"
          className="redd hidden h-full w-full grid-cols-2 gap-2 overflow-hidden rounded-2xl md:grid"
        >
          <div id="cover_photo" className="size-full overflow-hidden">
            <Image
              src={selectedFacility?.cover_photo}
              alt=""
              width={500}
              height={500}
              className="size-full border object-cover"
            />
          </div>
          <div className="relative grid grid-cols-2 place-items-center">
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
            {selectedFacility?.photos?.length > 4 && (
              <DialogGallaryImages selectedFacility={selectedFacility} />
            )}
          </div>
        </div>
        <div id="mobile-carousel" className="block md:hidden">
          <FacilityCarousel data={selectedFacility} />
        </div>
        {/* Buttons */}
        <div className="absolute right-2 top-2 flex gap-3">
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

      {/* --- Header --- */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex w-full items-start justify-center gap-5">
          <div id="profile-layout" className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900 tablet:text-4xl">
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

                <div className="redd mt-1 flex flex-row gap-1 text-xs text-gray-600 tablet:text-xl">
                  <div id="info" className="redd w-full desktop:w-[35rem]">
                    <div className="flex items-start justify-start gap-1">
                      <MapPin className="size-5 text-gray-900 laptop:size-8" />
                      <span>
                        {selectedFacility?.location?.address ||
                          "No address available"}
                      </span>
                    </div>
                    {/* Google Maps Interactive Embed */}
                    <GoogleMapEmbed
                      lat={selectedFacility?.lat}
                      lng={selectedFacility?.lng}
                      name={selectedFacility?.name}
                      address={selectedFacility?.location?.address}
                      image={
                        selectedFacility?.cover_photo ||
                        selectedFacility?.photos?.[0]
                      }
                    />
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>
                          {selectedFacility?.business_number || "No number"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>
                          {selectedFacility?.business_email || "No email"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Departments --- */}
            <div className="mt-6">
              <DepartmentsScrollView
                departments={departments}
                facility_id={selectedFacility?.id}
                facility_name={selectedFacility?.name}
                loading={loading}
              />
            </div>

            {/* --- Doctors Section --- */}
            <div className="mt-8">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Stethoscope className="h-5 w-5 text-gray-600" /> Doctors
              </h2>

              {doctors.length === 0 ? (
                <div>
                  <p className="text-gray-500">
                    No doctors available at this facility.
                  </p>
                  <RequestPublishCard
                    type="doctor"
                    orgId={selectedFacility.id}
                    userId={user?.id}
                  />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4">
                    {doctors
                      ?.slice(0, 3)
                      .sort(
                        (a, b) =>
                          a.facility_doctor.order - b.facility_doctor.order,
                      ) // Sort by order if exists
                      ?.map(({ doctor, facility_doctor }) => (
                        <FacilitiesDoctorCard
                          key={doctor.id}
                          doctor_id={doctor.id}
                          org_id={doctor.org_id}
                          facility_id={selectedFacility?.id}
                          name={doctor.user.full_name}
                          specialty={doctor.department?.name || "Unknown"}
                          fee={
                            facility_doctor?.fee
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
              //   ref={doctorSheetRef}
              open={open}
              onOpenChange={setOpen}
            />

            {/* --- Lab Tests --- */}
            <div className="mt-10">
              {/* <LabTestsScreen id={facility.id} /> */}
            </div>

            {/* --- Services --- */}
            {selectedFacility?.services_tag?.tags?.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFacility?.services_tag?.tags.map((tag, idx) => (
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
          <div
            id="today-doctors"
            className="redd sticky top-36 mt-12 hidden min-h-72 rounded-3xl border border-neutral-100 p-5 shadow-lg tablet:block tablet:w-96 laptop:w-[35rem]"
          >
            <TodayAvailability
              facilityId={selectedFacility.id}
              number={selectedFacility.business_number}
            />
          </div>
        </div>
      </div>
      {/* <div className="sticky bottom-0 right-0 block w-full bg-white p-1 tablet:hidden">
        <Button
          onClick={() =>
            router.push(`tel:${selectedFacility?.business_number}`)
          }
          variant={"default"}
          className="h-12 w-full bg-blue-500 hover:bg-blue-600"
        >
          Call Clinic
        </Button>
      </div> */}
    </div>
  );
}

function DialogGallaryImages({ selectedFacility }) {
  return (
    <Dialog>
      <DialogTrigger className="absolute bottom-5 right-5 hidden tablet:block">
        <Button variant={"outline"}>
          {" "}
          <Grid2X2 /> Show More
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[30rem] w-[35rem]">
        <DialogHeader>
          <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
          <DialogDescription hidden>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 place-items-center gap-2 overflow-y-auto">
          {selectedFacility?.photos?.map((photo, idx) => (
            <div key={idx} className="h-48 w-full overflow-hidden rounded-lg">
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
      </DialogContent>
    </Dialog>
  );
}
