import { getDoctorAvailabilityByDoctorId } from "@/app/actions/appointment";
import { formatTimeToAMPM } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useDoctorAvailability = (doctor_id: any) => {
  const [availabilityText, setAvailabilityText] = useState("");

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!doctor_id) return;

      const records = await getDoctorAvailabilityByDoctorId(doctor_id);
      if (!records || records.length === 0) return;

      // Group by time
      const timeGroups: Record<string, { weekday: string; weeks: number[] }[]> =
        {};

      records.forEach((r) => {
        const key = `${formatTimeToAMPM(r.start_time)} – ${formatTimeToAMPM(
          r.end_time
        )}`;
        if (!timeGroups[key]) timeGroups[key] = [];
        timeGroups[key].push({
          weekday: r.weekday,
          weeks: r.weeks_of_month || [1, 2, 3, 4, 5],
        });
      });

      const displayArr: string[] = [];
      const seen = new Set<string>(); // to prevent duplicates

      Object.entries(timeGroups).forEach(([time, items]) => {
        // Separate full-week days (every week) vs partial
        const fullWeekDays = Array.from(
          new Set(
            items.filter((i) => i.weeks.length === 5).map((i) => i.weekday)
          )
        );
        const partialWeekDays = items.filter((i) => i.weeks.length !== 5);

        if (fullWeekDays.length) {
          const entry = `Every ${fullWeekDays.join(" & ")} ${time}`;
          if (!seen.has(entry)) {
            seen.add(entry);
            displayArr.push(entry);
          }
        }

        partialWeekDays.forEach((i) => {
          const weeksText = i.weeks
            .map((w) =>
              w === 1 ? "1st" : w === 2 ? "2nd" : w === 3 ? "3rd" : `${w}th`
            )
            .join(" & ");
          const entry = `${weeksText} ${i.weekday}, ${time}`;
          if (!seen.has(entry)) {
            seen.add(entry);
            displayArr.push(entry);
          }
        });
      });

      setAvailabilityText(displayArr.join(" | "));
    };

    fetchAvailability();
  }, [doctor_id]);

  return availabilityText;
};
