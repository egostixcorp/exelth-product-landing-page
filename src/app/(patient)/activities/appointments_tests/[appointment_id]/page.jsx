"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { toast } from "sonner";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

dayjs.extend(LocalizedFormat);

const statusColor = {
  booked: "text-green-600",
  rescheduled: "text-blue-500",
  completed: "text-green-600",
  cancelled: "text-red-500",
};

const AppointmentDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const appointment_id = Array.isArray(params.appointment_id)
    ? params.appointment_id[0]
    : params.appointment_id;
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
        toast.error("Failed to load appointment details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [appointment_id, doctor_id, facility_id]);

  const handleCancel = async () => {
    try {
      setIsCancelling(true);
      await cancelAppointmentByPatient(appointment_id);
      setAppointment((prev) => ({ ...prev, status: "cancelled" }));
      toast.success("Appointment cancelled.");
    } catch (err) {
      toast.error(err.message || "Failed to cancel appointment");
    } finally {
      setIsCancelling(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deletePatientAppointment(appointment_id);
      toast.success("Appointment deleted.");
      router.back();
    } catch (err) {
      toast.error(err.message || "Failed to delete appointment");
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
    <div className="w-full max-w-xl">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        {/* Doctor */}
        <div className="mb-6 flex items-center gap-4">
          {doctor.user?.avatar_url ? (
            <img
              src={doctor.user.avatar_url}
              alt={doctor.user?.full_name ?? "Doctor"}
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-600">
              {doctor.user?.full_name?.[0] ?? "?"}
            </div>
          )}
          <div>
            <p className="text-lg font-semibold text-gray-900">
              {doctor.user?.full_name}
            </p>
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

        <Detail label="Appointment ID">
          <span className="font-mono text-sm">{appointment_id}</span>
        </Detail>

        <Detail label="Seat Number">
          {appointmentSeat?.seat_number || "—"}
        </Detail>

        <Detail label="Location">{facility.location?.address}</Detail>

        <Detail label="Status">
          <span
            className={`font-semibold capitalize ${statusColor[appointment.status] ?? "text-yellow-600"}`}
          >
            {appointment.status}
          </span>
        </Detail>

        {/* Cancel action */}
        {!isCancelled && (
          <ConfirmDialog
            title="Cancel this appointment?"
            description="This will cancel your appointment. You can book a new one at any time."
            confirmLabel={isCancelling ? "Cancelling..." : "Yes, cancel"}
            confirmClassName="bg-red-600 hover:bg-red-700 text-white"
            onConfirm={handleCancel}
            disabled={isCancelling || isCompleted}
          >
            <Button
              variant="destructive"
              className="mt-6 w-full"
              disabled={isCancelling || isCompleted}
            >
              Cancel Appointment
            </Button>
          </ConfirmDialog>
        )}

        {/* Delete action */}
        {isCancelled && (
          <ConfirmDialog
            title="Delete this appointment?"
            description="This will permanently remove the appointment record. This action cannot be undone."
            confirmLabel={isDeleting ? "Deleting..." : "Yes, delete"}
            confirmClassName="bg-red-600 hover:bg-red-700 text-white"
            onConfirm={handleDelete}
            disabled={isDeleting}
          >
            <Button
              variant="outline"
              className="mt-4 w-full text-gray-700"
              disabled={isDeleting}
            >
              Delete Appointment
            </Button>
          </ConfirmDialog>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetailPage;

/* ── helpers ───────────────────────────────────────────────── */

const Detail = ({ label, children }) => (
  <div className="mb-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
      {label}
    </p>
    <div className="text-sm font-medium text-gray-900">{children}</div>
  </div>
);

const ConfirmDialog = ({
  title,
  description,
  confirmLabel,
  confirmClassName,
  onConfirm,
  disabled,
  children,
}) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="max-w-sm">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogFooter className="gap-2">
        <DialogClose asChild>
          <Button variant="outline" className="flex-1">
            Keep it
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            className={`flex-1 ${confirmClassName}`}
            disabled={disabled}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
