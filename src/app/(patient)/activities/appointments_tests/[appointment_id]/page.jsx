"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import {
  cancelAppointmentByPatient,
  deletePatientAppointment,
  getAppointmentById,
  getAppointmentSeatsById,
} from "@/app/actions/appointment";
import {
  getFacilityDoctorById,
  getPublicFacilityDetailsByID,
} from "@/app/actions/facility";
import { formatTimeToAMPM } from "@/lib/utils";

dayjs.extend(LocalizedFormat);

const AppointmentDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const appointment_id = params.appointment_id;
  const doctor_id = searchParams.get("doctor_id");
  const facility_id = searchParams.get("facility_id");

  const [loading, setLoading] = useState(true);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [appointment, setAppointment] = useState(null);
  const [appointmentSeat, setAppointmentSeat] = useState(null);
  const [facility, setFacility] = useState(null);
  const [doctor, setDoctor] = useState(null);

  const isCancelled = appointment?.status === "cancelled";
  const isCompleted = appointment?.status === "completed";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (!appointment_id || !doctor_id || !facility_id) return;

        const [facilityData, doctorData, appointmentData] = await Promise.all([
          getPublicFacilityDetailsByID(facility_id),
          getFacilityDoctorById(doctor_id),
          getAppointmentById(appointment_id),
        ]);

        setFacility(facilityData);
        setDoctor(doctorData.doctor);
        setAppointment(appointmentData);

        if (appointmentData?.appointment_seat_id) {
          const seat = await getAppointmentSeatsById(
            appointmentData.appointment_seat_id,
          );
          setAppointmentSeat(seat);
        }
      } catch (err) {
        console.error("Failed to load appointment details", err);
        alert("Failed to load appointment details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [appointment_id, doctor_id, facility_id]);

  const handleCancel = async () => {
    const ok = confirm("Are you sure you want to cancel this appointment?");
    if (!ok) return;

    try {
      setIsCancelling(true);
      await cancelAppointmentByPatient(appointment_id);
      setAppointment((prev) => ({ ...prev, status: "cancelled" }));
    } catch (err) {
      alert(err.message || "Failed to cancel appointment");
    } finally {
      setIsCancelling(false);
    }
  };

  const handleDelete = async () => {
    const ok = confirm("Are you sure you want to delete this appointment?");
    if (!ok) return;

    try {
      setIsDeleting(true);
      await deletePatientAppointment(appointment_id);
      router.back();
    } catch (err) {
      alert(err.message || "Failed to delete appointment");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading || !appointment || !doctor || !facility) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
          <p className="mt-3 text-sm text-gray-500">
            Loading appointment details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        {/* Doctor */}
        <div className="mb-6 flex items-center gap-4">
          {doctor.user?.avatar_url ? (
            <img
              src={doctor.user.avatar_url}
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-gray-200" />
          )}

          <div>
            <p className="text-lg font-semibold">{doctor.user?.full_name}</p>
            <p className="text-sm text-gray-500">
              {doctor.department?.name || "—"}
            </p>
          </div>
        </div>

        {/* Details */}
        <Detail label="Date & Time">
          {dayjs(appointment.date).format("LL")} at{" "}
          {formatTimeToAMPM(appointment.time)}
        </Detail>

        <Detail label="Appointment ID">{appointment_id}</Detail>

        <Detail label="Seat Number">
          {appointmentSeat?.seat_number || "—"}
        </Detail>

        <Detail label="Location">{facility.location?.address}</Detail>

        <Detail label="Status">
          <span
            className={`font-semibold capitalize ${
              appointment.status === "cancelled"
                ? "text-red-500"
                : appointment.status === "completed"
                  ? "text-green-600"
                  : appointment.status === "upcoming"
                    ? "text-blue-500"
                    : "text-yellow-500"
            }`}
          >
            {appointment.status}
          </span>
        </Detail>

        {/* Actions */}
        {appointment.status !== "cancelled" && (
          <button
            onClick={handleCancel}
            disabled={isCancelling || isCompleted}
            className={`mt-6 w-full rounded-xl py-3 font-semibold text-white ${
              isCancelling || isCompleted
                ? "bg-gray-300"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isCancelling ? "Cancelling..." : "Cancel Appointment"}
          </button>
        )}

        {appointment.status === "cancelled" && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`mt-4 w-full rounded-xl py-3 font-semibold text-white ${
              isDeleting ? "bg-gray-300" : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            {isDeleting ? "Deleting..." : "Delete Appointment"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetailPage;

/* ---------------- helpers ---------------- */

const Detail = ({ label, children }) => (
  <div className="mb-4">
    <p className="mb-1 text-sm text-gray-500">{label}</p>
    <p className="text-base font-medium text-gray-900">{children}</p>
  </div>
);
