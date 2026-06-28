# Exelth: Documentation Website Source Material

This document serves as the structural reference and raw copy content for the **Exelth Documentation Website**. The pages below are organized sequentially to map to a standard docs-site sidebar (e.g., Docusaurus, Nextra, or GitBook).

---

# Document Site Structure

<DirectoryExplorer />

---

# Page 1: Overview & Architecture

Exelth is a B2B SaaS healthcare management platform for clinics and hospitals. It manages the complete patient care lifecycle: **Patient Registration → Appointment Scheduling → Reception Check-In → Consultation & Prescriptions → Lab Orders → Billing & Payments**.

<ClinicLifecycleTimeline />

## System Architecture

Exelth is built on Next.js 14 (App Router) with a serverless database backend powered by Supabase.

<ArchitectureVisualizer />

---

# Page 2: Core Architecture

This page details the structural rules developers must follow when building features in Exelth.

## 1. Supabase Client Split (Critical Requirement)

To prevent data leakage and build-time compilation crashes, Exelth separates browser and server client instances:

*   **Client-Side Component Interface:**
    *   **File location:** [client.ts](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/utils/supabase/client.ts)
    *   **Usage:** Only import inside files marked with `"use client"`. Used for user auth listener subscriptions, client-side updates, and real-time events.
*   **Server-Side Component / Action Interface:**
    *   **File location:** [server.ts](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/utils/supabase/server.ts)
    *   **Usage:** Import in Server Actions (`"use server"`), Next.js API Routes, or Server Components. Directly interfaces with database row-level security (RLS) policies.

```javascript
// Example Server Action import
import { createClient } from "@/utils/supabase/server";
```

## 2. OrgContext (The Identity Hub)

Every feature in Exelth requires context about the active user session and facility. [OrgContext.tsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/contexts/OrgContext.tsx) resolves this details globally:

```typescript
interface OrgContextType {
  userId: string;       // Supabase Auth ID
  orgMemberId: string;  // Database member record linking user to the organization
  orgId: string;        // Active SaaS Organization ID
  facilityId: string;   // Active physical hospital/clinic branch ID
}
```

*   **Rule:** Never fetch or construct these IDs within individual feature views. Always consume them from the context:
    ```javascript
    const { userId, orgId, facilityId } = useOrgContext();
    ```

## 3. Role-Based Access Control (RBAC)

Access controls are managed by [RBAC-Context.js](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/contexts/RBAC-Context.js). The roles include:
*   `admin`: Can configure facilities, manage subscription billing plans, assign members, and manage catalogs.
*   `doctor`: View consultations, write prescriptions, and review lab reports.
*   `reception`: Process walk-in registrations, schedule appointments, and compile invoice settlements.
*   `staff`: Standard administrative updates across clinical workflows.

---

# Page 3: Sidebar Module Registry

These sections map directly to the folders inside `src/app/(app)/app/`.

<SidebarNavigationMockup />

### 1. Dashboard / Home
*   **Route:** `/app`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/page.jsx)
*   **Overview:** Provides onboarding progress indicators tracking clinic configuration alongside daily calendar schedules.

### 2. Calendar & Scheduler
*   **Route:** `/app/calendar`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/calendar/page.jsx)
*   **Overview:** Scheduler using `FullCalendar`. Manages clinic capacity, doctor availability slots, and appointment drag-and-drop bookings.

### 3. Tasks Dashboard
*   **Route:** `/app/tasks`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/tasks/page.jsx)
*   **Overview:** Operations tracker. Enables managers to assign patient follow-up checklist items to staff.

### 4. Patient Inbox
*   **Route:** `/app/inbox`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/inbox/page.jsx)
*   **Overview:** Real-time communications. Links directly to outgoing Twilio SMS and WhatsApp Business channels.

### 5. Organization Management
*   **Route:** `/app/organization`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/organization/page.jsx)
*   **Overview:** Configuration tool for hospital branches, medical departments (typo in DB: `org_depertments`), and active practitioner shifts.

### 6. Reception Desk
*   **Route:** `/app/reception`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/reception/page.jsx)
*   **Overview:** Handles live walk-in registration, check-ins, and starts consultation queues.
*   **Subroute:** `/app/reception/consultation/[appointmentId]`
    *   *Consultation Flow:* Allows medical staff to start consultations, log diagnosis notes, prescribe medications, schedule immediate follow-ups, and review pending lab results.

### 7. Patients Registry (EHR)
*   **Route:** `/app/patients`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/patients/page.jsx)
*   **Overview:** Central database for B2B patient files. Tracks vital statistics, history, uploaded files, and historical lab reports.

### 8. Diagnostic Labs
*   **Route:** `/app/labs`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/labs/page.jsx)
*   **Overview:** Laboratory portal to register diagnostic request metrics, track sample collection, upload PDF results, and trigger SMS ready alerts.

### 9. Payments & Billing
*   **Route:** `/app/payments`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/payments/page.jsx)
*   **Overview:** Integrates with Razorpay for generating instant payment links, settling patient invoices, and managing the hospital's SaaS subscription billing plan.

### 10. Operational Workflow
*   **Route:** `/app/workflow`
*   **Source File:** [page.jsx](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/app/(app)/app/workflow/page.jsx)
*   **Overview:** Operational queue controller. Tracks average waiting times and features the patient flow board, automated rules engine, files parsing console, and AI bots monitor.

---

# Page 4: AI & Automations

Exelth automates manual operational overhead using custom AI components.

## 1. Mastra AI Agents System
Active agents live in [src/Exelth_Agents/agents/](file:///D:/Documents/00_Company/exelth-webapp/.claude/worktrees/zealous-easley/src/Exelth_Agents/agents/):
*   **Reminder Agent (Live):** Automatically processes queued notifications. Sends SMS/WhatsApp reminders for new bookings, 24-hour confirmations, follow-up alerts, and lab results.
*   **Scheduling Agent (Coming Soon):** Monitors slot availability, messages patient waitlists on cancellations, and balances doctor allocations.
*   **Billing Agent (Coming Soon):** Generates and sends invoices automatically upon visit completion, triggering reminders for payments overdue by 48+ hours.

## 2. Notification Rules Engine
Automation parameters are controlled in the Workflow Rules dashboard. Active triggers include:
1.  **Immediate Confirmation:** Fired when an appointment or follow-up is booked.
2.  **Scheduled Reminders:** Dispatched 24 hours and 1 hour before scheduled start times.
3.  **Result Ready Notification:** Sent automatically when laboratory reports or prescriptions are marked completed.

---

# Page 5: Developer Guide & Troubleshooting

## 1. The InlineSelect Pattern (Radix UI Sheet Portal Conflict)

*   **Problem:** When rendering Radix UI `Select` or `Command` components inside a slide-over `Sheet`, dropdown menus are rendered via React Portals. This leads to z-index mapping bugs, causing the dropdowns to be hidden underneath the overlay or failing to register clicks.
*   **Solution:** Exelth implements the `InlineSelect` pattern. This custom component overrides the standard portal rendering, appending dropdown lists inline within the sheet layout:
    ```javascript
    // Use this pattern inside all Sheets
    <InlineSelect
      options={doctorsList}
      selectedValue={selectedDoctor}
      onChange={handleDoctorChange}
      dropUp={true} // Set true if component sits at the bottom of the Sheet viewport
    />
    ```

## 2. Memory Build Flag
Because Next.js route compilation is memory-intensive, local builds require explicit heap size limits.
*   **Command:** `NODE_OPTIONS=--max-old-space-size=6144 next build`
*   *Warning:* Never run standard `next build` inside development containers without this flag, as it will crash with Out Of Memory (OOM) errors.

---

# Page 6: Codebase Action Items (TODOs & Roadmap)

The following items are extracted from the code comments:

1.  **Dashboard Optimization (`src/app/(app)/app/page.jsx:L30`)**
    *   *Code:* `// TODO: replace with real queries later`
    *   *Task:* Implement direct Supabase DB queries to check for `staffReady` and `departmentCreated` instead of using static array checks.
2.  **Consultation Prescription Trigger (`src/app/(app)/app/reception/consultation/[appointmentId]/ConsultationPageClient.jsx:L15`)**
    *   *Code:* `// TODO: open prescription sheet`
    *   *Task:* Wire the consultation handler to trigger the prescription slide-over sheet.
3.  **Organization Actions Cleanup (`src/app/(server)/actions/org.ts:L343`)**
    *   *Code:* `// TODO: fix this`
    *   *Task:* Refactor core helper function for organization member validation.
4.  **Structured WhatsApp Logging (`src/lib/whatsapp.ts:L281`)**
    *   *Code:* `// TODO: EXE1-50: Send to structured logging service (e.g., Datadog, Sentry)`
    *   *Task:* Add structured error logging inside the WhatsApp template dispatch helper block.
5.  **Firebase SDK Integration (`src/utils/firebase/firebase.js:L6`)**
    *   *Code:* `// TODO: Add SDKs for Firebase products that you want to use`
    *   *Task:* Integrate Firebase Push notification modules.
6.  **WhatsApp Edge Function Deployment (`supabase/functions/send-reminders/index.ts:L281`)**
    *   *Code:* `// TODO: Implement WhatsApp API call here for true Edge Function deployment`
    *   *Task:* Complete the porting of reminder dispatches inside the Supabase edge function environment.

<Image 
  src="/placeholders/source-reference-code.png" 
  alt="VS Code IDE workspace showing the project codebase folder tree registry" 
  caption="To capture: Screenshot your local development workspace folder structure inside VS Code or your preferred editor." 
/>

