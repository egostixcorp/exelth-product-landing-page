# User Guide: Complete Patient Care & Setup Workflow

This document provides a step-by-step walkthrough of the entire patient care lifecycle in Exelth—from initial clinic setup to patient check-in, medical consultation, lab testing, automated notifications, and billing checkout.

---

## The Complete Clinic Lifecycle Overview

This diagram traces the flow of a single patient visit and how different roles interact:

<ClinicLifecycleTimeline />

---

## Phase 1: Full Clinic Setup

Before processing patient visits, the Clinic Administrator must perform the initial configuration:

1.  **Registration:** Sign up for an Exelth account and log into the admin dashboard.
2.  **Facility Setup:** Go to the **Organization** tab and edit the Facility profile (Branch Name, Address, Contact details, and upload your clinic logo).
3.  **Specialties Setup:** Navigate to **Organization** → **Departments** and register your departments (e.g., General Medicine, Pediatrics, Labs).
4.  **Roster Registry:** Go to **Organization** → **Staff** and add your staff profiles (assigning roles: `doctor`, `reception`, `staff`).

---

## Phase 2: Booking & Reception Check-In

1.  **Registration:** When a patient contacts the clinic, the receptionist navigates to the **Patients** tab, clicks **Add Patient**, and records their profile.
2.  **Booking:** In the **Calendar** tab, the receptionist clicks the desired time slot, searches for the patient, selects the doctor/department, and saves the appointment.
    *   *Automation:* The **Reminder Agent** sends a WhatsApp confirmation immediately, followed by a reminder 24 hours prior.
3.  **Lobby Check-In:** Upon arrival, the receptionist opens **Reception** → **Scheduled**, locates the patient's card, and clicks **Check In**.
    *   *Queue Tracking:* The patient moves to the **Waiting** column. The system begins tracking their wait time, updating the visual badge color (Green to Red) as time passes.

---

## Phase 3: Doctor Consultation & E-Prescriptions

1.  **Start Consultation:** The doctor selects the patient's name from the **Waiting** column under **Reception** and clicks **Start Consultation**.
2.  **Logging EHR:** The doctor logs the presenting symptoms, checks vital history, and records the active diagnosis.
3.  **Prescription:** Under the **Prescriptions** section, the doctor adds medications (frequency, dosage, and days duration) and clicks **Approve Prescription**.
    *   *Automation:* The system generates an E-Rx PDF and dispatches it directly to the patient's phone.
4.  **Lab Order:** The doctor clicks **Order Lab Test**, selects tests from the clinic's catalog, and clicks **Submit**.
5.  **Closing the Visit:** The doctor schedules a follow-up date and clicks **Complete Consultation** to send the patient to checkout.

---

## Phase 4: Diagnostic Lab Testing

1.  **Queue Entry:** The lab technician opens the **Labs** tab. The patient's lab order appears as **Ordered**.
2.  **Sample Collection:** Once the patient arrives in the lab, the technician collects the sample (e.g., blood) and changes the status to **Sample Collected**.
3.  **Processing:** The technician updates the status to **Processing** while conducting the tests.
4.  **Result Upload:** Once results are ready, the technician opens the order details, uploads the test results PDF, and changes the status to **Report Uploaded**.
    *   *Automation:* The patient receives an automated WhatsApp message with a link to download their diagnostic report.
5.  **Completion:** The technician updates the order status to **Completed**.

---

## Phase 5: Billing Payment & Checkout

1.  **Invoice Generation:** The patient returns to the front desk. The receptionist opens the **Payments** tab to review the compiled invoice (which automatically lists the consultation fee, medications, and completed lab tests).
2.  **Checkout Settlement:**
    *   *For Cash/Card:* The receptionist processes the payment at the counter and prints the receipt.
    *   *For Online UPI:* The receptionist clicks **Generate Payment Link** to send a Razorpay payment link via WhatsApp.
3.  **Checkout:** Once paid, the system marks the invoice as **Paid**, clearing the patient record and completing their care cycle.

<Image 
  src="/placeholders/patient-flow-checkout.png" 
  alt="Final visit billing compilation invoice and checkout dashboard screen" 
  caption="To capture: Take a screenshot of the cashier panel (/app/payments) showing the final itemized receipt and payments details for a patient visit." 
/>

