# Management Manual: Staff Permissions & Role Configurations

Exelth uses role-based access control (RBAC) to manage permissions and keep clinic operations secure.

---

## 1. System Roles Directory

When registering staff members under **Organization** → **Staff**, managers must assign one of the following roles:

### 1. Administrator (`admin`)
*   **Permissions:** Full access to all modules.
*   **Duties:** Manage billing subscription plans, edit payment keys, change facility branches, configure departments, and manage staff credentials.

### 2. Doctor (`doctor`)
*   **Permissions:** Access to clinical dashboards.
*   **Duties:** Manage the consultation queue, log vitals and clinical notes, write prescriptions, and order lab tests.
*   *Note: Doctors cannot access clinic payment settings or billing transaction summaries.*

### 3. Receptionist (`reception`)
*   **Permissions:** Access to front desk modules.
*   **Duties:** Register patients, check in scheduled appointments, manage the lobby queue, print invoices, and collect checkout payments.
*   *Note: Receptionists cannot edit doctor notes or access clinical diagnostic forms.*

### 4. Staff (`staff`)
*   **Permissions:** General administrative access.
*   **Duties:** View rosters, manage checklist tasks, and check logs.

---

## 2. Managing Permissions & Credentials

Only Administrators can change user roles:
1. Navigate to **Settings** → **Members**.
2. Locate the staff member's profile card and click **Edit**.
3. Choose the new role from the dropdown menu and click **Save**.
4. To revoke access, toggle their account status to **Inactive**.

<Image 
  src="/placeholders/architecture-rbac-role.png" 
  alt="Edit staff member permissions access dialog drawer" 
  caption="To capture: Go to Settings -> Members, select a user profile card, click the edit options trigger, and screenshot the active role modifier form." 
/>

