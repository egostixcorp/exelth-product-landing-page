# Module Guide: Laboratory Testing & Results

The Labs module tracks laboratory test orders, sample collection, and report delivery for patients.

---

## 1. The Lab Order Lifecycle

Lab orders are created by doctors during consultations. Lab technicians can manage and update the status of each order:

1.  **Ordered (`ordered`):** The doctor has requested a test. It appears in the Labs dashboard.
2.  **Sample Collected (`sample_collected`):** Mark the order when the patient's sample is collected.
3.  **Processing (`processing`):** Update the status while the sample is undergoing analysis.
4.  **Report Uploaded (`report_uploaded`):** Upload the completed test results PDF.
5.  **Completed (`completed`):** Close the order. The system automatically notifies the patient and makes the report available in their app.

<SpecimenTracker />

---

## 2. Managing the Lab Test Catalog

Clinic managers can customize the tests offered by the clinic:
1. Navigate to **Labs** → **Lab Catalogs**.
2. Add new tests, specify test codes, and set reference ranges.
3. Assign tests to categories (e.g., Blood Panel, Urinalysis) for easier selection.
4. Set default pricing for each test. These prices are automatically added to the patient's invoice.

<Image 
  src="/placeholders/labs-catalog.png" 
  alt="Lab Test Catalog dashboard page showing registered diagnostic tests and pricing" 
  caption="To capture: Navigate to Labs and select the 'Lab Catalogs' sub-tab, then screenshot the diagnostic test catalog grid listing." 
/>

---

## 3. Uploading Reports & Patient Notifications

*   **Uploading PDF Reports:** Open the target lab order, click **Upload Report**, and select the test results PDF file.
*   **Automated Alerts:** When a report is uploaded, the system sends an automated WhatsApp or SMS notification to the patient with a link to download their report, reducing follow-up calls.

<Image 
  src="/placeholders/labs-upload.png" 
  alt="Lab report spec document PDF upload modal details" 
  caption="To capture: Go to the active Lab Orders list (/app/labs), click on a patient order, select 'Upload Report', and screenshot the drag-and-drop file upload popup." 
/>

