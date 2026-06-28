# Clinic Management: Your Sidebar Navigation

The sidebar menu is your primary control panel for navigating the Exelth Clinic Management System. Depending on your authorized role (Admin, Doctor, Receptionist, or Staff), some of these tabs may be hidden.

---

<SidebarNavigationMockup />

---

## Sidebar Modules Reference

Here is a detailed breakdown of all available sidebar modules, their primary functions, and operational statuses:

### 1. Home / Dashboard
*   **Route:** `/app`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Onboarding Checklist (`GetStartedCards`):** Tracks clinic setup progress (Facility configuration, Department creation, Staff registry, and first Patient visit creation).
    *   **Quick Actions (`HomeQuickActions`):** Instantly add patients, register appointments, block doctor schedules, or generate bills.
    *   **Unified Calendar (`AppointmentEventCalendar`):** View-at-a-glance of the day's scheduled sessions.
    *   **Recent Activity:** Real-time live log of patient check-ins, consultation completions, and payment successes.
*   **Status:** Production-ready (Requires database query hook-up optimization).

### 2. Calendar
*   **Route:** `/app/calendar`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Interactive Scheduler (`AppointmentEventCalendar`):** Switch views between Day, Week, and Month.
    *   **Drag-and-Drop scheduling:** Manage doctor shifts, slots, and bookings dynamically.
    *   **Filters:** Filter appointments by specific clinic facility or practitioner.
*   **Status:** Production-ready.

### 3. Tasks
*   **Route:** `/app/tasks`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Central Task Dashboard:** Powered by `TaskTable` to monitor operational assignments.
    *   **Clinical Follow-ups:** Tracks patient phone calls, vitals check reminders, and pending billing reviews.
    *   **Ad-hoc Task Creation:** Create custom tasks on the fly via the `CreateTaskButton` trigger.
*   **Status:** Production-ready.

### 4. Inbox
*   **Route:** `/app/inbox`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Two-Pane Communication Hub:** Clean sidebar threads listing alongside an active message viewer.
    *   **Real-time Messaging:** Fast responses to patient queries via unified Twilio SMS and WhatsApp templates.
*   **Status:** Production-ready.

### 5. Organization
*   **Route:** `/app/organization`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Facility Setup:** Configure facility profile fields (name, address, metadata details, branding logo).
    *   **Department Manager:** Lists and configures specialties (e.g., Pediatrics, Cardiology) via `depertments/page.jsx`.
    *   **Staff Registry:** Register practitioners and front desk staff, assign credentials, and set shift schedules via `staff/page.jsx`.
*   **Status:** Production-ready.

### 6. Reception
*   **Route:** `/app/reception`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Lobby Reception Overview:** Charts (`ReceptionOverviewCharts`) tracking active bookings, daily patients, and clinic utilization.
    *   **Walk-in Panel:** Fast-registration form (`WalkInPanel`) for patient queue check-in without prior appointments.
    *   **Consultation Panel:** Clinical doctor/nurse portal (`ConsultationPanel` in `ConsultationPageClient.jsx`) to:
        *   Start and complete active consultation sessions (tracks timers).
        *   Order diagnostic tests directly to Labs.
        *   Schedule immediate clinical follow-up dates.
*   **Status:** Production-ready.

### 7. Patients
*   **Route:** `/app/patients`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **B2B Patient Records Directory:** Split tab categories (`PatientsTabs`) separating active, inactive, and search entries.
    *   **Patient EHR Profile:** Detailed viewer showing personal files, consultation logs, prescription histories, active lab orders, invoices, and insurance attachments.
*   **Status:** Production-ready.

### 8. Labs
*   **Route:** `/app/labs`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Lab Orders Dashboard:** View and track processing diagnostic requests (Ordered → Sample Collected → Processing → Report Uploaded → Completed).
    *   **Lab Catalog Setup:** Customize diagnostic test templates, categories, and base pricing structures via `lab-catalogs/page.jsx`.
*   **Status:** Production-ready.

### 9. Payments & Billing
*   **Route:** `/app/payments`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Counter Payments Log:** Itemized visit transactions lists (`PaymentsPageClient`).
    *   **Razorpay Integration:** Generate online UPI checkout links and dispatch them directly via SMS/WhatsApp.
    *   **Plan Gate Security:** Access is plan-gated using the `show_payments_table` feature flag.
*   **Status:** Enabled (with Plan Gate check).

### 10. Workflow Hub
*   **Route:** `/app/workflow`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Operational Dashboard:** Monitor waiting times, waiting patient counts, active doctors, and overdue tasks.
    *   **Patient Flow Board:** Kanban queue layout (`patient-flow/page.jsx`) mapping states (Scheduled → Waiting → Consultation → Completed).
    *   **Automation Rules Engine:** Configure automated templates for client confirmations and SMS reminders (`rules/page.jsx`).
    *   **Workflow Files:** Clinical file cabinet (`workflow-files-client.tsx`) detailing Rx forms and lab sheets.
    *   **AI Agents Portal:** Panel to monitor Mastra automated bots (`workflow-agents-page.tsx`).
*   **Status:** Production-ready.

### 11. Integrations
*   **Route:** `/app/integrations`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **App Marketplace Directory:** Grid cards (`AppsCard`) showing connected 3rd party services.
    *   **Store Navigation Tabs:** Installed integrations registry alongside store templates.
    *   **WhatsApp Connector:** Settings dashboard to register official WhatsApp templates.
*   **Status:** Production-ready.

### 12. Analytics
*   **Route:** `/app/analytics`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **Recharts Dashboard:** Clean visualization of daily operations.
    *   **Operational Charts:** Patient counts, room capacity utilization, and diagnostic lab revenues.
*   **Status:** Production-ready.

### 13. Settings
*   **Route:** `/app/settings`
*   **Primary Page:** `page.jsx`
*   **Key Features:**
    *   **System Settings Roster:** Nested panels for account details, organization profile, subscription billing tiers, custom prescription PDF templates, data export tools, audit trails, and member access permissions.
*   **Status:** Production-ready.
