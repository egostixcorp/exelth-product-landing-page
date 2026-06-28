# Module Guide: Clinic Operational Workflows

The Workflow module tracks and optimizes your clinic's patient flow, waiting times, and operational performance.

---

## 1. Patient Flow Board (Kanban Queue)

The **Patient Flow** board provides a visual overview of patient visits, helping staff coordinate care:

*   **Stages:** Patient cards move across columns representing their visit status: **Scheduled** (booked) → **Waiting** (arrived) → **In Consultation** (in_consultation) → **Completed** (completed).
*   **Wait Time Alerts:** The system tracks how long a patient has been waiting in the lobby. If wait times exceed target targets (e.g., 30 minutes), the card displays a warning indicator so staff can prioritize care.

---

## 2. Automated Communication Rules

The rules engine automates patient notifications based on clinic events, reducing manual work:

*   **Appointment Booked:** Sends a confirmation message to the patient immediately.
*   **24-Hour Reminder:** Sends a reminder message 24 hours before the appointment to confirm or reschedule.
*   **1-Hour Alert:** Sends a quick reminder 1 hour before the start time.
*   **Result Ready:** Sends a message with a download link when lab reports or prescriptions are complete.

<Image 
  src="/placeholders/workflow-automation.png" 
  alt="Workflow automation dashboard showing notification rules and event triggers" 
  caption="To capture: Go to Workflow (/app/workflow), open the 'Rules' config page, and screenshot the notification trigger management blocks." 
/>

---

## 3. Workflow Files Roster

The **Files** panel lists all uploaded clinical documents, categorized by type:
*   **Prescriptions (Rx):** View and download signed doctor prescriptions.
*   **Lab Reports:** Access diagnostic results PDF reports.
*   Allows searching and filtering files by patient name or upload date.

