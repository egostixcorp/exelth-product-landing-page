# Help & Support: Clinic FAQ & Troubleshooting

This guide answers common questions and helps you troubleshoot operational issues on the Exelth platform.

---

## 1. Frequently Asked Questions

### Why can't a patient click the "Terms of Service" link?
*   **Fix:** If a patient is unable to click the **Terms of Service** or **Privacy Policy** links on the sign-up page, ensure they are clicking directly on the underlined green text rather than the checkbox checkbox itself. (This has been optimized to ensure links remain accessible during registration).

### Why are appointments disabled for a specific date?
*   **Reason:** This happens when an Administrator has blocked the date due to an emergency or planned leave. Check the **Organization** roster settings to verify the doctor's calendar status.

### Why is the Payments module showing a "Coming Soon" overlay?
*   **Reason:** The Payments checkout table is a premium feature. If your clinic is on the Free subscription plan, you must upgrade your subscription under **Settings** → **Billing & Plans** to enable checkout billing tracking.

---

## 2. Troubleshooting Steps

### A patient check-in is not showing on the Doctor's screen
1. Ensure the patient's check-in status was updated in **Reception** (status should show as **Waiting (Arrived)**).
2. Check if the Doctor filter at the top of the receptionist queue matches the Doctor's active calendar roster.
3. Refresh the page to reload the queue data.

### Lab results are uploaded but the patient did not receive a WhatsApp alert
1. Go to the patient's profile in the **Patients** directory and verify their contact number format (must include correct country code).
2. Go to **Settings** → **Notifications** and ensure the WhatsApp notification toggle is enabled.
3. Check the **Workflow** → **Activity** log to see if the message delivery failed due to network errors.

<Image 
  src="/placeholders/troubleshooting-errors.png" 
  alt="Help Center and Support Form panel showing ticket generation" 
  caption="To capture: Open the Help & Support interface or FAQ helpdesk panel, and take a screenshot of the FAQ list or contact support details form." 
/>

