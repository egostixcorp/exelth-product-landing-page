# Security Manual: Clinic Data Security & Privacy

Exelth is designed to protect sensitive patient records and maintain clinic operational security. This guide details how the system keeps your clinic's data secure and private.

---

## 1. Role-Based Data Isolation

Exelth uses role-based permissions to ensure that staff members can only access the data required for their jobs:
*   **Medical Privacy:** Only registered Doctors can access a patient's diagnostic notes, clinical history, and prescription details.
*   **Billing Security:** Only Administrators and Receptionists can view invoices, transactions, and payment setup details.
*   **Roster Controls:** Only Administrators can add or edit staff credentials and configure branch details.

---

## 2. Patient Data Consent

Exelth securely registers patient details:
*   **B2B Records vs. B2C Apps:** Clinic-created patient records (`org_patients`) remain private to the clinic. Patients can link their clinic records to their personal Care App account (`patient_users`) using verified phone numbers.
*   **Consent Checkbox:** When registering new accounts, patients must agree to the Terms of Service and Privacy Policy to ensure compliance with data regulations.

---

## 3. Real-Time Operations Security

All data is synced securely across clinic terminals:
*   **Audit Logging:** The system records all administrative changes (e.g., modifying shift rosters, updating catalogs, changing permissions) in the Settings Audit Log.
*   **Secure Access:** All connection routes are secured, and user accounts require verification to access clinic dashboards.

<Image 
  src="/placeholders/architecture-supabase-logs.png" 
  alt="Clinic Admin Security Audit Log tracker table" 
  caption="To capture: Open the workspace Settings (/app/settings) -> System Logs, and screenshot the security audit log detailing admin event records." 
/>

