# Exelth Web App: Features & Action Items Directory

This document details the feature specifications, operational structure, and open action items (TODOs/FIXMEs) for **Exelth**, a B2B SaaS healthcare management platform for clinics and hospitals. The registry maps directly to the web application's sidebar layout.

---

## 1. Sidebar Feature Registry & Mapping

The main desktop application structure is governed by [sidebar.js](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/db/sidebar.js), separating access levels by role (Admin, Doctor, Receptionist, Staff).

<SidebarNavigationMockup />

### 1. Home / Dashboard
*   **Route:** `/app`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/page.jsx)
*   **Features:**
    *   **Onboarding Checklist (`GetStartedCards`):** Tracks clinic setup progress (Facility configuration, Department creation, Staff registry, and first Patient visit creation).
    *   **Quick Actions (`HomeQuickActions`):** Instantly add patients, register appointments, block doctor schedules, or generate bills.
    *   **Unified Calendar (`AppointmentEventCalendar`):** View-at-a-glance of the day's scheduled sessions.
    *   **Operational Summary (`RecentActivity`):** Live log of patient check-ins, consultation completions, and payment successes.
*   **Status:** Production-ready (Requires database query hook-up optimization).

### 2. Calendar
*   **Route:** `/app/calendar`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/calendar/page.jsx)
*   **Features:**
    *   Interactive scheduler (`AppointmentEventCalendar`) allowing view switching (Day, Week, Month).
    *   Drag-and-drop slots scheduling for clinic slots and appointments.
    *   Multi-facility and multi-doctor filtering options.
*   **Status:** Production-ready.

### 3. Tasks
*   **Route:** `/app/tasks`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/tasks/page.jsx)
*   **Features:**
    *   A central operational tasks dashboard powered by [TaskTable](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/components/Tables/task-table.tsx).
    *   Tracks clinical tasks (e.g., patient phone follow-ups, pending billing verifications).
    *   Allows ad-hoc creation of tasks via the `CreateTaskButton` trigger.
*   **Status:** Production-ready.

### 4. Inbox
*   **Route:** `/app/inbox`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/inbox/page.jsx)
*   **Features:**
    *   Two-pane layout (sidebar + message viewer) to manage SMS and WhatsApp threads.
    *   Real-time chat responses to patient queries.
*   **Status:** Production-ready.

### 5. Organization
*   **Route:** `/app/organization`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/organization/page.jsx)
*   **Features:**
    *   **Facility Setup:** Handles facility profile creation (name, metadata, address).
    *   **Department Manager:** Lists and configures clinic specialties (e.g., Pediatrics, Cardiology) via [depertments/page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/organization/depertments/page.jsx).
    *   **Staff Registry:** Add, remove, and manage staff credentials and active/inactive roster status via [staff/page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/organization/staff/page.jsx).
*   **Status:** Production-ready.

### 6. Reception
*   **Route:** `/app/reception`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/reception/page.jsx)
*   **Features:**
    *   **Reception Overview:** Analytical charts (`ReceptionOverviewCharts`) tracking active bookings, daily patients, and clinic utilization.
    *   **Walk-in Panel:** Fast-registration form (`WalkInPanel`) for patient queue management without prior appointments.
    *   **Consultation Panel:** Allows doctors/nurses to view and update visits (`ConsultationPanel` in [ConsultationPageClient.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/reception/consultation/[appointmentId]/ConsultationPageClient.jsx)). Handles:
        *   Starting / ending active consultations.
        *   Ordering diagnostic tests directly to Labs.
        *   Scheduling immediate follow-up sessions.
*   **Status:** Production-ready.

### 7. Patients
*   **Route:** `/app/patients`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/patients/page.jsx)
*   **Features:**
    *   A full B2B patient record database with tabs (`PatientsTabs`) separating active, inactive, and search results.
    *   **Patient Profile:** Detailed viewer showing personal details, clinical consultation logs, prescription histories, active lab orders, invoices, and insurance file attachments.
*   **Status:** Production-ready.

### 8. Labs
*   **Route:** `/app/labs`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/labs/page.jsx)
*   **Features:**
    *   **Lab Orders Dashboard:** View current processing lab tests and update stage (ordered, sample collected, processing, report uploaded, completed).
    *   **Lab Catalog Setup:** Customize test templates, categories, and custom pricing lists via [lab-catalogs/page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/labs/lab-catalogs/page.jsx).
*   **Status:** Production-ready.

### 9. Payments & Billing
*   **Route:** `/app/payments`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/payments/page.jsx)
*   **Features:**
    *   Payment transactions log (`PaymentsPageClient`).
    *   Razorpay integration mapping client bills to active payment linkages.
    *   *Note: This view is plan-gated using the `show_payments_table` feature flag.*
*   **Status:** Enabled (with Plan Gate check).

### 10. Workflow Hub
*   **Route:** `/app/workflow`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/workflow/page.jsx)
*   **Features:**
    *   **Operational Dashboard:** Monitors average waiting times, waiting patient count, active doctors list, and overdue tasks.
    *   **Patient Flow Board:** Kanban board mapping patient state (Scheduled → Waiting → Consultation → Completed) via [patient-flow/page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/workflow/patient-flow/page.jsx).
    *   **Automation Rules:** Active event triggers for outgoing client messages (e.g., booking confirmations, 24h reminders) configured inside [rules/page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/workflow/rules/page.jsx).
    *   **Workflow Files:** Clinical file dashboard (`workflow-files-client.tsx`) detailing uploaded Rx forms and Lab report sheets.
    *   **AI Agents Portal:** Panel to monitor Mastra automated bots (`workflow-agents-page.tsx`).
*   **Status:** Production-ready.

### 11. Integrations
*   **Route:** `/app/integrations`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/integrations/page.jsx)
*   **Features:**
    *   Directory of 3rd party apps (`AppsCard`).
    *   Installed and Store tabs configuration.
    *   WhatsApp Business API connector settings layout.
*   **Status:** Production-ready.

### 12. Analytics
*   **Route:** `/app/analytics`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/analytics/page.jsx)
*   **Features:**
    *   Recharts-driven operational analytics.
    *   Patient volumes, clinic capacity utilization charts, and lab order revenues.
*   **Status:** Production-ready.

### 13. Settings
*   **Route:** `/app/settings`
*   **Primary Page:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/settings/page.jsx)
*   **Features:**
    *   Nested sub-settings navigation: Account details, Organization profile, Billing & Subscriptions, E-prescription custom templates, Data imports/exports, Audit logs, Members permission controls, SMS notification templates, and preference configurations.
*   **Status:** Production-ready.

---

## 2. Automated AI Agents System

Exelth leverages Mastra AI agents (`src/Exelth_Agents/`) to handle clinic automation:

1.  **Reminder Agent (Live):**
    *   *Responsibility:* Tracks active appointments and automatically dispatches confirmations, 24h notifications, follow-up reminders, and lab result alerts via SMS/WhatsApp.
    *   *Rules Config:* Managed inside [workflow-rules-client.tsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/components/Pages/workflow-rules-client.tsx).
2.  **Smart Scheduling Agent (Coming Soon):**
    *   *Responsibility:* Intended to automatically fill cancellations by messaging waitlisted clients and alert managers during high-utilization hours.
3.  **Auto-Billing Agent (Coming Soon):**
    *   *Responsibility:* Planned system to automatically compile and invoice patient visits upon consultation completion, flagging past-due amounts after 48 hours.

---

## 3. Codebase Action Items (TODOs/FIXMEs)

The following items are open for implementation or correction in the codebase:

| No. | File & Line Location | Category | Code Context | Description / Target Action |
|---|---|---|---|---|
| 1 | [page.jsx:L30](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/page.jsx#L30) | Optimization | `// TODO: replace with real queries later` | Update the mocked boolean evaluations (`staffReady`, `departmentCreated`) in the dashboard greeting logic with optimized DB query checks. |
| 2 | [ConsultationPageClient.jsx:L15](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/reception/consultation/[appointmentId]/ConsultationPageClient.jsx#L15) | Core Logic | `// TODO: open prescription sheet` | Connect the `handleUpdate` event in consultation workflows to trigger the slide-over prescription template sheet. |
| 3 | [org.ts:L343](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(server)/actions/org.ts#L343) | Bug/Refactor | `// TODO: fix this` | Resolve target issue in the server-side organization action helper functions. |
| 4 | [whatsapp.ts:L281](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/lib/whatsapp.ts#L281) | Logging | `// TODO: EXE1-50: Send to structured logging...` | Replace simple console logs in the WhatsApp API module with structured platform alerts (Datadog/Sentry). |
| 5 | [firebase.js:L6](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/utils/firebase/firebase.js#L6) | Integration | `// TODO: Add SDKs for Firebase products...` | Import and initialize Firebase Analytics or messaging libraries once features require them. |
| 6 | [index.ts:L281](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/supabase/functions/send-reminders/index.ts#L281) | Edge Function | `// TODO: Implement WhatsApp API call here...` | Move WhatsApp dispatch routine directly inside the Supabase edge function for distributed performance. |

*Note: The warning comment found in [EmergencyDoctorAvailabilitySheet.jsx:L265](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/components/Sheets/EmergencyDoctorAvailabilitySheet.jsx#L265) represents a functional UI alert warning the staff that blocking dates will trigger booking cancellations, and is correct as-is.*

<Image 
  src="/placeholders/features-timeline.png" 
  alt="Development project sprint board showing task statuses" 
  caption="To capture: Screenshot your clinic development task manager board (Jira, Trello, GitHub Issues) showing current features progression." 
/>

