# Module Guide: Billing, Invoices & Payments

The Payments module manages patient billing, payment link generation, invoice settlements, and SaaS subscription plans.

---

## 1. Automated Invoice Compilation

When a doctor completes a consultation, Exelth automatically compiles a draft invoice.
*   **Itemized Billing:** The invoice groups consultation fees, prescribed medication costs, and laboratory tests into a single statement.
*   **Custom Adjustments:** Receptionists can apply discounts, edit line items, or add custom charges before finalizing the bill.

<Image 
  src="/placeholders/payments-invoice.png" 
  alt="Invoice editor side sheet showing itemized consultation fees, prescription drugs, and discount fields" 
  caption="To capture: Open the Payments portal (/app/payments), select any patient in checkout status, and screenshot the active billing compilation drawer." 
/>

---

## 2. Processing Checkout Settlements

Exelth supports multiple payment methods:

*   **Cash/Card/UPI:** Settle payments using standard cash or card options at the front desk.
*   **Razorpay Payment Links:** Generate a Razorpay payment link or display a dynamic QR code at the checkout counter.
*   **WhatsApp/SMS Billing:** Send a payment link directly to the patient's phone. Once the patient pays online, the invoice status updates to **Paid** automatically.

---

## 3. Managing SaaS Subscriptions

Clinic managers can manage their platform subscription details under **Settings** → **Billing**:
*   View your current subscription plan (Free, Growth, Enterprise).
*   Monitor active usage limits (e.g., active patient limits, SMS quotas).
*   Add billing methods and settle subscription invoices.

<Image 
  src="/placeholders/payments-subscription.png" 
  alt="Clinic subscription management dashboard panel showing usage quotas and active tier limits" 
  caption="To capture: Go to Settings -> Billing, and take a screenshot of your active subscription plan overview displaying patient limits and SMS quotas." 
/>

