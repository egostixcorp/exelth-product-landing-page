"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getPublicFacilityDetailsByID,
  getFacilityDoctorById,
} from "../../../app/actions/facility";
import { getPatientID } from "../../../app/actions/user";
import {
  bookAppointment,
  requestAppointment,
} from "../../../app/actions/appointment";
import { useAuth } from "@/context/AuthContext";
import { formatTimeToAMPM, calculateTimeUntilAppointment } from "@/lib/utils";
import Icon from "@/components/Global/Icon";
import BackButton from "../Button/BackButton";
import { useDoctorFacilityStatus } from "@/components/hooks/useDoctorFacilityStatus";
import Link from "next/link";
import { Phone } from "lucide-react";

dayjs.extend(LocalizedFormat);

export default function BookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const org_id = searchParams.get("org_id");
  const doctor_id = searchParams.get("doctor_id");
  const facility_id = searchParams.get("facility_id");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const seat = searchParams.get("seat");
  const fee = searchParams.get("fee");
  const slot_id = searchParams.get("slot_id");
  console.log({
    fee: fee,
  });

  const { user } = useAuth();
  const [facility, setFacility] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [patientId, setPatientId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("CoV"); // "Pay at clinic"
  const serviceFee = 0;
  const {
    showPrice,
    isBook,
    appointmentInit,
    loading: statusloading,
  } = useDoctorFacilityStatus(facility_id, doctor_id);
  useEffect(() => {
    const loadData = async () => {
      try {
        const [facilityData, doctorData, patientData] = await Promise.all([
          getPublicFacilityDetailsByID(facility_id),
          getFacilityDoctorById(doctor_id),
          getPatientID(user?.id),
        ]);

        setFacility(facilityData);
        setDoctor(doctorData?.doctor);
        setPatientId(patientData);
      } catch (err) {
        toast.error("Failed to load booking details");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [doctor_id, facility_id, user?.id]);

  const handleBookAppointment = async () => {
    setBooking(true);
    try {
      if (
        !org_id ||
        !doctor_id ||
        !facility_id ||
        !date ||
        !time ||
        !seat ||
        !slot_id ||
        !fee
      ) {
        toast.error("Missing appointment details.");
        return;
      }

      const appointmentData = {
        patient_id: String(patientId),
        org_id: String(org_id),
        doctor_id: String(doctor_id),
        facility_id: String(facility_id),
        department_id: String(doctor?.department?.id),
        seat_id: String(slot_id),
        date: String(date),
        time: String(time),
        seat_number: Number(seat),
        fee: Number(fee),
        payment_method: paymentMethod,
      };

      let result;

      if (appointmentInit === "requested") {
        result = await requestAppointment(appointmentData);
      } else {
        // default → booked
        result = await bookAppointment(appointmentData);
      }

      const { success, appointment_id } = result;

      if (success) {
        toast.success(
          appointmentInit === "requested"
            ? `Appointment requested. Clinic will confirm shortly. ID: ${appointment_id}`
            : `Appointment booked successfully. ID: ${appointment_id}`,
        );

        router.push("/activities/appointments_tests");
      } else {
        toast.error("Failed to complete appointment booking.");
      }
    } catch (err) {
      toast.error(err.message || "Booking failed. Try again.");
    } finally {
      setBooking(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-muted-foreground">
        Loading booking details...
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-3xl space-y-6 p-6">
      <div className="absolute -left-10 top-10">
        <BackButton />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Confirm Appointment</h1>
        <p className="text-gray-500">
          Review your appointment details before confirming
        </p>
      </div>

      {/* Doctor Info */}
      <Card>
        <CardContent className="flex items-center gap-4 py-4">
          <Image
            src={doctor?.user?.avatar_url || "/placeholder.jpg"}
            alt={doctor?.user?.full_name || "Doctor"}
            width={80}
            height={80}
            className="rounded-lg border object-cover"
          />
          <div>
            <p className="text-lg font-semibold">{doctor?.user?.full_name}</p>
            <p className="text-sm text-muted-foreground">
              {doctor?.department?.name || "—"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Appointment Details */}
      <Card>
        <CardContent className="space-y-3 py-4">
          <h2 className="text-lg font-semibold">Appointment Details</h2>
          <div className="space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <Icon.Calendar className="size-4" />
              Date:{" "}
              <span className="font-medium">{dayjs(date).format("LL")}</span>
            </p>
            <p className="flex items-center gap-2">
              <Icon.Clock className="size-4" />
              Time:{" "}
              <span className="font-medium">{formatTimeToAMPM(time)}</span>
            </p>
            <p className="flex items-center gap-2">
              <Icon.Bookmark className="size-4" />
              Seat Number: <span className="font-medium">{seat}</span>
            </p>
            <p className="flex items-center gap-2">
              <Icon.AlarmClock className="size-4" />
              In:{" "}
              <span className="text-green-600">
                {calculateTimeUntilAppointment(date, time)}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Facility Info */}
      <Card>
        <CardContent className="flex gap-4 py-4">
          <Image
            src={facility?.cover_photo || "/placeholder.jpg"}
            alt="Facility"
            width={80}
            height={60}
            className="rounded-lg border object-cover"
          />
          <div>
            <p className="text-lg font-semibold">{facility?.name}</p>
            <p className="text-sm text-muted-foreground">
              {facility?.location?.address || "No address provided"}
            </p>
            <p className="text-xs text-muted-foreground">
              {facility?.business_number &&
                `Phone: ${facility.business_number}`}
            </p>
            <p className="text-xs text-muted-foreground">
              {facility?.business_email && `Email: ${facility.business_email}`}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bill Details */}
      <Card>
        <CardContent className="space-y-2 py-4">
          <h2 className="text-lg font-semibold">Bill Details</h2>
          <div className="flex justify-between text-sm">
            <span>Consultation Fee</span>
            {/* <span>₹{fee}</span> */}
            <span>{showPrice ? `₹${fee}` : "Not provided fee"}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Service Fee & Tax</span>
            <span className="font-medium text-green-600">FREE</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total Payable</span>
            {/* <span>₹{fee}</span> */}
            <span>{showPrice ? `₹${fee}` : "Not provided fee"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardContent className="py-4">
          <h2 className="mb-3 text-lg font-semibold">Choose Payment Method</h2>
          <div className="flex gap-3">
            <Button
              variant={paymentMethod === "CoV" ? "exelth" : "outline"}
              onClick={() => setPaymentMethod("CoV")}
            >
              Pay at Clinic
            </Button>
            <Button
              variant={paymentMethod === "UPI" ? "exelth" : "outline"}
              onClick={() => setPaymentMethod("UPI")}
              disabled
            >
              Pay Online
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Important Info */}
      <Card>
        <CardContent className="space-y-1 py-4 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold text-foreground">
            Important Information
          </h2>
          <ul className="list-disc pl-4">
            <li>Arrive 10 minutes before your appointment.</li>
            <li>Bring a valid ID and past medical reports.</li>
            <li>Free cancellation up to 24 hours before the appointment.</li>
            <li>Late cancellation may incur charges.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-4">
        <div>
          <p className="text-lg font-bold">{showPrice ? `₹${fee}` : ""}</p>
          <p className="text-sm text-muted-foreground">Total Payable</p>
        </div>
        {user ? (
          isBook ? (
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              disabled={booking}
              onClick={handleBookAppointment}
            >
              {booking
                ? "Processing..."
                : appointmentInit === "requested"
                  ? "Request Appointment"
                  : "Confirm Booking"}
            </Button>
          ) : (
            // <Link href={`tel:${facility?.business_number}`}>
            <Button
              onClick={() => router.push(`tel:${facility?.business_number}`)}
              className="bg-blue-500 hover:bg-blue-600"
            >
              <Phone /> Call Clinic
            </Button>
            // </Link>
          )
        ) : isBook ? (
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            disabled={booking}
            onClick={() => router.push("/login")}
          >
            {booking
              ? "Processing..."
              : appointmentInit === "requested"
                ? "Request Appointment"
                : "Confirm Booking"}
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/login")}
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Phone /> Call Clinic
          </Button>
        )}
      </div>
    </div>
  );
}
