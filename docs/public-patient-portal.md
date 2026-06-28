# Clinic User Guide: Public Patient Portals (Tokens)

Exelth provides secure, public-facing web pages that allow patients to track their appointments and pay bills without needing to download the application or create a password-protected login account. These pages use secure, encrypted access tokens.

---

## 1. Secure Token-Based Access

Whenever the clinic schedules an appointment or generates a bill, the system creates a unique, encrypted web link (token).
*   **Security:** These links act as single-use access keys, ensuring patients can only view their own information.
*   **Frictionless:** Patients simply click the link received via WhatsApp or SMS to open the details instantly in their mobile or desktop browser.

---

## 2. Public Appointment Tracker

*   **URL Format:** `/appointment/[token]`
*   **Purpose:** Allows patients to track their upcoming visits and check their status in the waiting queue.
*   **Features:**
    *   **Appointment Status:** Displays appointment date, time, assigned doctor, and location branch.
    *   **Live Roster:** Shows if the patient's queue status is Checked-in, Waiting, In Consultation, or Completed.
    *   **Clinical Documents:** Allows the patient to securely view and print the electronic prescription (E-Rx) PDF after the doctor completes the consultation.
    *   **Reschedule Options:** Enables patients to request rescheduling or cancellations directly from the browser.

<Image 
  src="/placeholders/portal-appointment.png" 
  alt="Mobile Patient Appointment and Queue Status Tracker portal web page" 
  caption="To capture: Open the patient appointment token link on a mobile browser preview (/appointment/[token]) and screenshot the active appointment details and queue tracking steps." 
/>

---

## 3. Public Invoice Checkout & Bill Pay

*   **URL Format:** `/bill/[token]`
*   **Purpose:** Enables patients to review and pay their bills securely online.
*   **Features:**
    *   **Itemized Invoice Details:** Displays the detailed billing breakdown, including consultation fees, prescribed medications, and laboratory tests.
    *   **Online UPI Payment (`PayOnlineButton`):** Integrates with Razorpay to allow patients to settle invoices online using UPI, credit cards, or net banking.
    *   **Download Billing Statements (`DownloadBillButton`):** Allows patients to download a PDF receipt once the transaction completes.
    *   **Status Indicators:** Displays the invoice payment status in real-time (Draft, Unpaid, or Paid).

<Image 
  src="/placeholders/portal-checkout.png" 
  alt="Mobile Patient Bill Checkout and payment gateway counter page" 
  caption="To capture: Load a patient billing invoice page (/bill/[token]) on mobile web view, and screenshot the itemized charges and checkout payment options." 
/>

