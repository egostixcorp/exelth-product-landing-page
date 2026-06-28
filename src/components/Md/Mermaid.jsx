"use client";

import React, { useEffect, useState } from "react";
import { 
  UserCheck, 
  Clock, 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  CreditCard,
  CheckCircle2, 
  ChevronDown,
  ChevronUp,
  Activity,
  Settings,
  ShieldCheck,
  FileText,
  Image as ImageIcon,
  MapPin,
  Plus,
  Users,
  Eye,
  Menu,
  ChevronRight,
  Network,
  ListTodo,
  Layout,
  Layers,
  ArrowRight,
  Calendar,
  MessageSquare
} from "lucide-react";

let mermaidPromise = null;

function loadMermaid() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.mermaid) return Promise.resolve(window.mermaid);
  if (mermaidPromise) return mermaidPromise;

  mermaidPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js";
    script.async = true;
    script.onload = () => {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        securityLevel: "loose",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        }
      });
      resolve(window.mermaid);
    };
    document.body.appendChild(script);
  });
  return mermaidPromise;
}

// ----------------------------------------------------
// UI Render for: Patient Care Workflow Flowchart
// ----------------------------------------------------
export function PatientCareWorkflowUI() {
  const [activeStep, setActiveStep] = useState("A");

  const steps = {
    A: {
      id: "A",
      title: "Front Desk: Patient Check-In",
      module: "Reception Desk / Live Check-In",
      role: "Receptionist",
      icon: UserCheck,
      color: "emerald",
      colorClass: "border-emerald-100 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/80",
      activeColorClass: "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20",
      description: "The patient arrives at the clinic and gets registered in the system. The receptionist records their basic profile and links them to their scheduled doctor.",
      actions: [
        "Search or register patient profile (Name, Phone, Age)",
        "Assign the target department (e.g., General Medicine)",
        "Select the consulting doctor",
        "Click 'Check In' to queue the patient"
      ],
      automations: [
        "Triggers booking / registration confirmation messages via SMS/WhatsApp",
        "Dispatches patient name to the live waiting lobby screen"
      ]
    },
    B: {
      id: "B",
      title: "Lobby: Live Waiting Queue",
      module: "Waiting Lobby Dashboard",
      role: "Patient & Receptionist",
      icon: Clock,
      color: "blue",
      colorClass: "border-blue-100 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-50/80",
      activeColorClass: "border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-500/20",
      description: "Patients sit in the waiting room while the system monitors their wait times. Color-coded timers flag patients who are delayed.",
      actions: [
        "Patient monitors the live token display",
        "Receptionist tracks dynamic wait timers",
        "Visits flag Yellow (15m+) or Red (30m+) for receptionist follow-up"
      ],
      automations: [
        "System keeps real-time websocket sync active for TV screens",
        "Notifies doctor's app dashboard that the next patient has checked in"
      ]
    },
    C: {
      id: "C",
      title: "Doctor Cabin: Consultation",
      module: "Clinical EHR / Doctor Portal",
      role: "Doctor",
      icon: Stethoscope,
      color: "indigo",
      colorClass: "border-indigo-100 bg-indigo-50 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50/80",
      activeColorClass: "border-indigo-500 bg-indigo-50 text-indigo-800 ring-2 ring-indigo-500/20",
      description: "The doctor starts the consultation. They log clinical symptoms, diagnose, approve e-prescriptions, and order labs.",
      actions: [
        "Click 'Start Consultation' (Wait timer stops, session timer starts)",
        "Log presenting symptoms and active diagnosis",
        "Configure and approve digital prescription (E-Rx)",
        "Order lab test panels (optional)",
        "Schedule next follow-up slot"
      ],
      automations: [
        "Saves consultation record to patient's lifetime EHR history",
        "Generates secure prescription PDF and sends it directly via WhatsApp"
      ]
    },
    D: {
      id: "D",
      title: "Laboratory: Specimen & Testing",
      module: "Labs & Diagnostics Dashboard",
      role: "Lab Technician",
      icon: FlaskConical,
      color: "purple",
      colorClass: "border-purple-100 bg-purple-50 text-purple-700 hover:border-purple-300 hover:bg-purple-50/80",
      activeColorClass: "border-purple-500 bg-purple-50 text-purple-800 ring-2 ring-purple-500/20",
      description: "If ordered by the doctor, the patient goes to the lab. The lab tech collects specimens, processes tests, and uploads the results.",
      actions: [
        "Technician pulls up patient's ordered test panels",
        "Mark status as 'Sample Collected' when specimen is acquired",
        "Mark status as 'Processing' during lab machine testing",
        "Upload test results PDF & mark order 'Report Uploaded'"
      ],
      automations: [
        "Fires WhatsApp template alert to patient with direct PDF download link",
        "Synchronizes result reports back into the doctor's consult panel"
      ]
    },
    E: {
      id: "E",
      title: "Pharmacy & Billing Checkout",
      module: "Billing & Cashier Portal",
      role: "Receptionist / Pharmacist",
      icon: Pill,
      color: "pink",
      colorClass: "border-pink-100 bg-pink-50 text-pink-700 hover:border-pink-300 hover:bg-pink-50/80",
      activeColorClass: "border-pink-500 bg-pink-50 text-pink-800 ring-2 ring-pink-500/20",
      description: "The patient arrives at checkout. The system automatically compiles consultation fees, lab costs, and prescriptions into a single invoice draft.",
      actions: [
        "Cashier accesses the compiled draft invoice",
        "Verify prescription items are added",
        "Calculate final invoice summary including tax/discounts",
        "Initiate checkout payment link generation"
      ],
      automations: [
        "Fires online payment link requests via SMS/WhatsApp using Razorpay"
      ]
    },
    F: {
      id: "F",
      title: "Payment Settlement & Exit",
      module: "Payments Tracker / Exit Gateway",
      role: "Patient & Cashier",
      icon: CreditCard,
      color: "amber",
      colorClass: "border-amber-100 bg-amber-50 text-amber-700 hover:border-amber-300 hover:bg-amber-50/80",
      activeColorClass: "border-amber-500 bg-amber-50 text-amber-800 ring-2 ring-amber-500/20",
      description: "The patient settles the invoice via cashier cash/card or mobile link. The system marks the visit paid and releases them.",
      actions: [
        "Receive payment validation from card terminal or online Razorpay hook",
        "Mark invoice status to 'Paid'",
        "Check out patient from active facility lobby queue"
      ],
      automations: [
        "Fires automated payment receipt PDF to patient's WhatsApp",
        "Syncs transaction record into clinic's daily revenue analytics dashboard"
      ]
    }
  };

  const active = steps[activeStep];
  const StepIcon = active.icon;

  return (
    <div className="space-y-6">
      {/* Connected Flow Chart Grid */}
      <div className="relative mx-auto max-w-lg mb-8 grid grid-cols-3 gap-y-12 gap-x-4 py-4">
        {/* SVG Connectors Layer */}
        <svg className="absolute inset-0 pointer-events-none h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#64748b" />
            </marker>
          </defs>
          
          <line x1="50%" y1="65" x2="50%" y2="105" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <line x1="50%" y1="170" x2="50%" y2="210" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <path d="M 160 270 C 120 275, 80 290, 80 315" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <path d="M 320 270 C 360 275, 400 290, 400 315" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <line x1="140" y1="345" x2="310" y2="345" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <path d="M 80 375 C 80 405, 120 420, 160 425" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 400 375 C 400 405, 360 420, 320 425" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        </svg>

        <div className="col-start-2 flex justify-center z-10">
          <button
            onClick={() => setActiveStep("A")}
            className={`flex h-14 w-36 flex-col items-center justify-center rounded-xl border text-center transition-all duration-200 ${
              activeStep === "A" ? steps.A.activeColorClass : steps.A.colorClass
            }`}
          >
            <UserCheck className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">1. Front Desk</span>
          </button>
        </div>

        <div className="col-start-2 flex justify-center z-10">
          <button
            onClick={() => setActiveStep("B")}
            className={`flex h-14 w-36 flex-col items-center justify-center rounded-xl border text-center transition-all duration-200 ${
              activeStep === "B" ? steps.B.activeColorClass : steps.B.colorClass
            }`}
          >
            <Clock className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">2. Lobby Queue</span>
          </button>
        </div>

        <div className="col-start-2 flex justify-center z-10">
          <button
            onClick={() => setActiveStep("C")}
            className={`flex h-14 w-36 flex-col items-center justify-center rounded-xl border text-center transition-all duration-200 ${
              activeStep === "C" ? steps.C.activeColorClass : steps.C.colorClass
            }`}
          >
            <Stethoscope className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">3. Consultation</span>
          </button>
        </div>

        <div className="col-start-1 flex justify-center z-10">
          <button
            onClick={() => setActiveStep("D")}
            className={`flex h-14 w-36 flex-col items-center justify-center rounded-xl border text-center transition-all duration-200 ${
              activeStep === "D" ? steps.D.activeColorClass : steps.D.colorClass
            }`}
          >
            <FlaskConical className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">4. Labs Lab</span>
          </button>
        </div>
        <div className="col-start-3 flex justify-center z-10">
          <button
            onClick={() => setActiveStep("E")}
            className={`flex h-14 w-36 flex-col items-center justify-center rounded-xl border text-center transition-all duration-200 ${
              activeStep === "E" ? steps.E.activeColorClass : steps.E.colorClass
            }`}
          >
            <Pill className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">5. Billing Checkout</span>
          </button>
        </div>

        <div className="col-start-2 flex justify-center z-10">
          <button
            onClick={() => setActiveStep("F")}
            className={`flex h-14 w-36 flex-col items-center justify-center rounded-xl border text-center transition-all duration-200 ${
              activeStep === "F" ? steps.F.activeColorClass : steps.F.colorClass
            }`}
          >
            <CreditCard className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">6. Settle Exit</span>
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition-all duration-300">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <span className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-white ${
            active.color === "emerald" ? "text-emerald-600 border-emerald-100" :
            active.color === "blue" ? "text-blue-600 border-blue-100" :
            active.color === "indigo" ? "text-indigo-600 border-indigo-100" :
            active.color === "purple" ? "text-purple-600 border-purple-100" :
            active.color === "pink" ? "text-pink-600 border-pink-100" :
            "text-amber-600 border-amber-100"
          }`}>
            <StepIcon className="h-5 w-5" />
          </span>
          <div>
            <h4 className="font-bold text-slate-800">{active.title}</h4>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">Module: <strong className="text-slate-600">{active.module}</strong></span>
              <span className="text-slate-200">|</span>
              <span className="text-slate-400 font-medium">Role: <strong className="text-slate-600">{active.role}</strong></span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-650">{active.description}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5" />
              <span>Operator Actions</span>
            </h5>
            <ul className="space-y-1.5">
              {active.actions.map((act, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-655">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-green-500 shrink-0" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Settings className="h-3.5 w-3.5" />
              <span>AI & System Automations</span>
            </h5>
            <ul className="space-y-1.5">
              {active.automations.map((aut, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-655">
                  <Settings className="h-3.5 w-3.5 mt-0.5 text-blue-500 shrink-0" />
                  <span>{aut}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// UI Render for: Clinic Lifecycle Timeline Sequence
// ----------------------------------------------------
export function ClinicLifecycleTimelineUI() {
  const [expandedPhase, setExpandedPhase] = useState(1);

  const phases = [
    {
      num: 1,
      title: "Clinic Setup Configuration",
      actor: "Clinic Admin",
      roleBadge: "bg-slate-100 text-slate-700 border-slate-200",
      description: "Setting up facility, departments, doctor schedules and clinic details before opening registration.",
      steps: [
        { from: "Admin", to: "System", text: "Create B2B account & verify clinical license" },
        { from: "Admin", to: "Facility Settings", text: "Set branch details, address & customize invoice branding" },
        { from: "Admin", to: "Department Config", text: "Register specialties (e.g. Pediatrics, Lab diagnostics)" },
        { from: "Admin", to: "Staff Roster", text: "Create practitioner profiles, assign roles & set slots availability" }
      ],
      automations: [
        "Initial setup checklist registers 4 key metrics",
        "Generate doctor booking schedules automatically based on availability settings"
      ]
    },
    {
      num: 2,
      title: "Appointment Booking & Lobby Check-in",
      actor: "Patient & Receptionist",
      roleBadge: "bg-blue-50 text-blue-700 border-blue-100",
      description: "Acquiring appointments, building patient histories, and checking them in upon physical arrival.",
      steps: [
        { from: "Patient", to: "Receptionist", text: "Requests slot (walk-in counter or WhatsApp template)" },
        { from: "Receptionist", to: "Patient Registry", text: "Registers EHR profile (Name, Contact, Vitals)" },
        { from: "Receptionist", to: "Lobby Manager", text: "Clicks check-in on arrival (wait timer begins tracking)" }
      ],
      automations: [
        "Dispatches appointment booking confirmation via WhatsApp template API",
        "Updates live lobby tracking board with socket triggers"
      ]
    },
    {
      num: 3,
      title: "EHR Consultation & Prescriptions",
      actor: "Consulting Doctor",
      roleBadge: "bg-emerald-50 text-emerald-700 border-emerald-100",
      description: "The clinical core where doctor checks records, logs symptoms, approves E-Rx, and triggers follow-up orders.",
      steps: [
        { from: "Doctor", to: "Consult Panel", text: "Starts consultation (Lobby wait timer stops)" },
        { from: "Doctor", to: "EHR History", text: "Log vitals history, complaints, and primary diagnosis" },
        { from: "Doctor", to: "Prescription Form", text: "Formulates drug schedules & signs e-signature" },
        { from: "Doctor", to: "Lab Panel", text: "Selects and orders blood/imaging diagnostic tests" }
      ],
      automations: [
        "Generates secure QR-coded prescription PDF files",
        "Dispatches E-Rx PDF automatically to patient's phone link"
      ]
    },
    {
      num: 4,
      title: "Diagnostic Sample Labs",
      actor: "Lab Technician",
      roleBadge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      description: "Fulfilling diagnostic orders by collecting specimens, updating processing status, and uploading report PDFs.",
      steps: [
        { from: "Tech", to: "Lab Queue", text: "Locates patient's requested test order" },
        { from: "Tech", to: "Sample Manager", text: "Draws blood/sample (Status: Sample Collected)" },
        { from: "Tech", to: "Diagnostics", text: "Process specimen & upload result PDF file" }
      ],
      automations: [
        "Sends notification to patient WhatsApp that lab results are ready for download",
        "Syncs diagnostic report PDF directly to consulting doctor's inbox"
      ]
    },
    {
      num: 5,
      title: "Compiled Invoice Checkout & Settlement",
      actor: "Receptionist / Cashier",
      roleBadge: "bg-amber-50 text-amber-700 border-amber-100",
      description: "Consolidating all fees, generating checkout links, capturing payment, and final visit release.",
      steps: [
        { from: "Receptionist", to: "Invoice Engine", text: "Compiles consult fees, labs, and drug items into single bill" },
        { from: "Receptionist", to: "Payment API", text: "Sends online Razorpay checkout link to patient's device" },
        { from: "Patient", to: "Invoice Engine", text: "Settle invoice payment (Counter cash or mobile card payment)" },
        { from: "Receptionist", to: "Lobby Manager", text: "Check out patient and archive visit file" }
      ],
      automations: [
        "Triggers receipt PDF generator and dispatches file via WhatsApp",
        "Synchronizes invoice ledger details into clinic's revenue charts"
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <div 
          key={phase.num} 
          className={`rounded-xl border transition-all duration-200 ${
            expandedPhase === phase.num 
              ? "border-green-500/20 shadow-sm shadow-green-50/50 bg-slate-50/20" 
              : "border-slate-100 bg-white hover:border-slate-200"
          }`}
        >
          <button
            onClick={() => setExpandedPhase(expandedPhase === phase.num ? 0 : phase.num)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold border ${
                expandedPhase === phase.num 
                  ? "bg-green-600 border-green-600 text-white" 
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}>
                {phase.num}
              </span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm sm:text-base">{phase.title}</h4>
                <span className={`inline-block rounded-md border px-2 py-0.5 mt-0.5 text-[10px] font-bold ${phase.roleBadge}`}>
                  {phase.actor}
                </span>
              </div>
            </div>
            <div>
              {expandedPhase === phase.num ? (
                <ChevronUp className="h-5 w-5 text-slate-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              )}
            </div>
          </button>

          {expandedPhase === phase.num && (
            <div className="border-t border-slate-100 p-4 bg-white/70 rounded-b-xl space-y-4">
              <p className="text-xs sm:text-sm text-slate-655">{phase.description}</p>
              
              <div className="space-y-3 pl-2">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Interaction Sequences</h5>
                <div className="space-y-2 border-l border-slate-100 pl-4">
                  {phase.steps.map((step, idx) => (
                    <div key={idx} className="relative text-xs">
                      <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-slate-300 border border-white"></span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-bold text-slate-700">{step.from}</span>
                        <span className="text-slate-400">→</span>
                        <span className="font-semibold text-slate-500">{step.to}:</span>
                        <span className="text-slate-655">{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pl-2">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Associated Auto-Rules</h5>
                <div className="grid gap-2 sm:grid-cols-2">
                  {phase.automations.map((aut, idx) => (
                    <div key={idx} className="flex gap-2 rounded-lg border border-blue-100 bg-blue-50/30 p-2.5 text-xs text-blue-700">
                      <Settings className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{aut}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ----------------------------------------------------
// UI Render for: Marketing Profile Setup Stepper
// ----------------------------------------------------
export function MarketingSetupStepperUI() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: "Basic Info",
      icon: FileText,
      color: "text-blue-650 bg-blue-50 border-blue-100",
      description: "Introduce your clinic or hospital branch. Set operational categorization and general descriptors.",
      tasks: ["Clinic name & registration ID", "Facility category tags", "Public bio / summary details"]
    },
    {
      num: 2,
      title: "Branding & Media",
      icon: ImageIcon,
      color: "text-emerald-650 bg-emerald-50 border-emerald-100",
      description: "Customize your marketing aesthetics to stand out in doctor indexes and public portal lists.",
      tasks: ["Upload official clinic logo", "Add banner hero photos", "Upload interior/exterior facility gallery images"]
    },
    {
      num: 3,
      title: "Location & Contact",
      icon: MapPin,
      color: "text-indigo-650 bg-indigo-50 border-indigo-100",
      description: "Input branch addresses and coordinates to embed maps in booking directions.",
      tasks: ["Configure Google Maps coordinates", "Complete postal address", "Input public support email & phones"]
    },
    {
      num: 4,
      title: "Facilities & Gear",
      icon: Network,
      color: "text-cyan-650 bg-cyan-50 border-cyan-100",
      description: "Catalog operational details, physical amenities, and specialized medical hardware.",
      tasks: ["Select diagnostic equipment lists", "Identify patient services (parking, waiting lounges)", "Specify wheelchair/ADA accesses"]
    },
    {
      num: 5,
      title: "Services Offered",
      icon: Plus,
      color: "text-pink-650 bg-pink-50 border-pink-100",
      description: "List consulting fees and pricing lists. Make treatments filterable in search channels.",
      tasks: ["Register clinic procedures", "Define pricing structures & packages", "Link services to consulting departments"]
    },
    {
      num: 6,
      title: "Team & Doctors",
      icon: Users,
      color: "text-amber-650 bg-amber-50 border-amber-100",
      description: "Publish your clinical roster. Link doctors to their calendar availability and profiles.",
      tasks: ["Register practitioner credentials", "Link specialists to department calendars", "Add doctor bio summaries & professional photos"]
    },
    {
      num: 7,
      title: "Review & Publish",
      icon: CheckCircle2,
      color: "text-green-650 bg-green-50 border-green-100",
      description: "Verify listing integrity, run live visual previews, and submit to indexing pages.",
      tasks: ["Check data completion integrity scores", "Verify responsive mobile layout previews", "Click Publish to launch marketing page"]
    }
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-100/40">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
          <Settings className="h-3 w-3" />
          <span>Marketing Setup Checklist</span>
        </span>
        <h3 className="mt-2 text-xl font-bold text-slate-800">Clinic Profile Creation Steps</h3>
        <p className="text-sm text-slate-500">Configure your marketing profile sequentially. Click any step block to view requirements.</p>
      </div>

      {/* Horizontal Steps Indicator */}
      <div className="mb-8 flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200">
        <div className="flex min-w-max gap-4 mx-auto px-2">
          {steps.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isActive = idx === activeStep;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 rounded-xl border p-3 transition-all duration-200 ${
                  isActive 
                    ? "border-green-500 bg-green-50/40 text-green-700 ring-2 ring-green-500/10 shadow-sm" 
                    : isCompleted
                    ? "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-350"
                    : "border-slate-100 bg-white text-slate-400 hover:border-slate-250"
                }`}
              >
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  isActive ? "bg-green-600 text-white" : isCompleted ? "bg-slate-300 text-slate-700" : "bg-slate-100 text-slate-550"
                }`}>
                  {step.num}
                </span>
                <span className="text-xs font-bold tracking-tight whitespace-nowrap">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Detail Card */}
      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <span className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-white ${
            current.color
          }`}>
            <StepIcon className="h-5 w-5" />
          </span>
          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base">Step {current.num}: {current.title}</h4>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Marketing Setup Wizard</p>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-650">{current.description}</p>

        <div className="mt-4 space-y-2">
          <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-455 flex items-center gap-1">
            <ListTodo className="h-3.5 w-3.5 text-slate-400" />
            <span>Completion Requirements Checklist</span>
          </h5>
          <div className="grid gap-2 sm:grid-cols-2">
            {current.tasks.map((task, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white p-2.5 text-xs text-slate-650">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2 border-t border-slate-100 pt-4">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => prev - 1)}
            className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep(prev => prev + 1)}
            className="rounded-lg bg-green-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-green-700 disabled:opacity-40 inline-flex items-center gap-1"
          >
            <span>Next Step</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// UI Render for: Exelth App Sidebar Navigation Mockup
// ----------------------------------------------------
export function SidebarNavigationMockupUI() {
  const [selectedModule, setSelectedModule] = useState("H");

  const modules = {
    H: {
      name: "Home",
      route: "/app",
      icon: Layout,
      color: "emerald",
      desc: "Daily operational overview showing practitioner onboarding cards, dynamic checklist metrics, visit updates, and calendar charts.",
      status: "Production Ready",
      roleAccess: ["Admin", "Doctor", "Receptionist"]
    },
    C: {
      name: "Calendar",
      route: "/app/calendar",
      icon: Calendar,
      color: "blue",
      desc: "Comprehensive schedule booking system with calendar views (day, week, month), doctor/room filters, and drag-and-drop slots.",
      status: "Production Ready",
      roleAccess: ["Admin", "Doctor", "Receptionist"]
    },
    T: {
      name: "Task",
      route: "/app/tasks",
      icon: ListTodo,
      color: "indigo",
      desc: "Checklist management for operational staff. Tracks patient callbacks, invoice reviews, and pending diagnostic orders.",
      status: "Production Ready",
      roleAccess: ["Admin", "Doctor", "Receptionist", "Staff"]
    },
    I: {
      name: "Inbox",
      route: "/app/inbox",
      icon: MessageSquare,
      color: "purple",
      desc: "Direct communication dashboard sending templates to patients, managing patient SMS replies and WhatsApp confirmations.",
      status: "Testing Phase",
      roleAccess: ["Admin", "Receptionist"]
    },
    O: {
      name: "Organization",
      route: "/app/organization",
      icon: Network,
      color: "pink",
      desc: "Clinic branch administration controls. Set up locations, create practitioner shifts, and assign active departments.",
      status: "Production Ready",
      roleAccess: ["Admin"]
    },
    P: {
      name: "Patients",
      route: "/app/patients",
      icon: Users,
      color: "teal",
      desc: "Patient registry database and queue board. Stores lifetime records (vital sheets, prescriptions, lab results, diagnoses) and handles lobby check-in.",
      status: "Production Ready",
      roleAccess: ["Admin", "Doctor", "Receptionist"]
    },
    L: {
      name: "Labs",
      route: "/app/labs",
      icon: FlaskConical,
      color: "violet",
      desc: "Diagnostic laboratory orders portal. Technician updates sample collection stages and uploads lab results PDFs.",
      status: "Production Ready",
      roleAccess: ["Admin", "Doctor", "Staff"]
    },
    PAY: {
      name: "Payments",
      route: "/app/payments",
      icon: CreditCard,
      color: "orange",
      desc: "Billing management ledger. Automatically aggregates doctor consult fees, prescriptions, and lab costs for checkout.",
      status: "Production Ready",
      roleAccess: ["Admin", "Receptionist"]
    },
    W: {
      name: "Workflow",
      route: "/app/workflow",
      icon: Settings,
      color: "cyan",
      desc: "Custom auto-routing controls. Define message templates, waiting warning limits, and custom SMS/WhatsApp templates.",
      status: "Development",
      roleAccess: ["Admin"]
    },
    INT: {
      name: "Integration",
      route: "/app/integrations",
      icon: Layers,
      color: "amber",
      desc: "Directory of 3rd party apps, store integrations, and official WhatsApp Business templates settings.",
      status: "Production Ready",
      roleAccess: ["Admin"]
    },
    A: {
      name: "Analytics",
      route: "/app/analytics",
      icon: Activity,
      color: "blue",
      desc: "Recharts-driven operational charts tracking patient volumes, clinic capacity utilization, and lab order revenues.",
      status: "Production Ready",
      roleAccess: ["Admin"]
    },
    S: {
      name: "Settings",
      route: "/app/settings",
      icon: Settings,
      color: "slate",
      desc: "Nested panels for account details, organization profile, billing plans, Rx templates, and member permissions.",
      status: "Production Ready",
      roleAccess: ["Admin"]
    }
  };

  const active = modules[selectedModule];
  const ModuleIcon = active.icon;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/20 p-6 shadow-md shadow-slate-100/40">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
          <Network className="h-3 w-3" />
          <span>Interactive Sidebar Mapping</span>
        </span>
        <h3 className="mt-2 text-xl font-bold text-slate-800">Clinic Web App Sidebar Registry</h3>
        <p className="text-sm text-slate-500">Exelth&apos;s dashboard navigation structure. Click any item to view its details.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Mock Sidebar List */}
        <div className="md:col-span-1 rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-sm space-y-1">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Navigation Menu
          </div>
          {Object.entries(modules).map(([key, mod]) => {
            const Icon = mod.icon;
            const isSelected = selectedModule === key;
            const showDivider = key === "INT";
            return (
              <React.Fragment key={key}>
                {showDivider && (
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-4 pt-2 border-t border-slate-100">
                    Configuration & Tools
                  </div>
                )}
                <button
                  onClick={() => setSelectedModule(key)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-bold transition-all ${
                    isSelected 
                      ? "bg-green-600 text-white shadow-sm" 
                      : "text-slate-650 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{mod.name}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="md:col-span-2 rounded-xl border border-slate-100 bg-white p-5 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-white ${
                active.color === "emerald" ? "text-emerald-600 border-emerald-100" :
                active.color === "blue" ? "text-blue-600 border-blue-100" :
                active.color === "indigo" ? "text-indigo-600 border-indigo-100" :
                active.color === "purple" ? "text-purple-600 border-purple-100" :
                active.color === "pink" ? "text-pink-600 border-pink-100" :
                active.color === "amber" ? "text-amber-600 border-amber-100" :
                active.color === "teal" ? "text-teal-600 border-teal-100" :
                active.color === "violet" ? "text-violet-600 border-violet-100" :
                active.color === "orange" ? "text-orange-600 border-orange-100" :
                "text-cyan-600 border-cyan-100"
              }`}>
                <ModuleIcon className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-bold text-slate-800">{active.name}</h4>
                <div className="text-[10px] font-semibold text-slate-400">Route path: <strong className="text-slate-600">{active.route}</strong></div>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{active.desc}</p>
            
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 w-24">Development Status:</span>
                <span className={`rounded-md border px-2 py-0.5 text-[9px] font-extrabold uppercase ${
                  active.status === "Production Ready" 
                    ? "bg-green-50 text-green-700 border-green-150" 
                    : active.status === "Testing Phase"
                    ? "bg-blue-50 text-blue-700 border-blue-150"
                    : active.status === "Development"
                    ? "bg-amber-50 text-amber-700 border-amber-150"
                    : "bg-purple-50 text-purple-700 border-purple-150"
                }`}>
                  {active.status}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 w-24">Authorized Access:</span>
                <div className="flex flex-wrap gap-1">
                  {active.roleAccess.map(r => (
                    <span key={r} className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-600 border border-slate-200/50">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
            <a
              href={`/docs/feature-${active.name.toLowerCase().split(" ")[0]}`}
              className="rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700 transition-all inline-flex items-center gap-1"
            >
              <span>Read Module Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Tab Container for Infographics and Simulators
// ----------------------------------------------------
function TabbedDiagramWrapper({ title, badgeText, imageSrc, imageAlt, children }) {
  const [activeTab, setActiveTab] = useState("diagram");

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-100/40">
      <div className="mb-6 flex flex-col items-center justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:text-left">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 border border-green-100">
            <Activity className="h-3 w-3" />
            <span>{badgeText}</span>
          </span>
          <h3 className="mt-1.5 text-xl font-bold text-slate-800">{title}</h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex rounded-lg bg-slate-100 p-1">
          <button
            onClick={() => setActiveTab("diagram")}
            className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeTab === "diagram"
                ? "bg-white text-slate-800 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Visual Graphic</span>
          </button>
          <button
            onClick={() => setActiveTab("interactive")}
            className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeTab === "interactive"
                ? "bg-white text-slate-800 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Interactive Simulator</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-205">
        {activeTab === "diagram" ? (
          <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-slate-50/50 p-2">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="max-h-[480px] w-full rounded-lg object-contain shadow-sm border border-slate-100 bg-white" 
            />
          </div>
        ) : (
          <div className="animate-fade-up">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Generic Flowchart Parser & Stepper UI Fallback
// ----------------------------------------------------
const parseMermaidFlowchart = (chartText) => {
  if (!chartText.includes("graph LR") && !chartText.includes("graph TD")) return null;

  try {
    const lines = chartText.split("\n").map(l => l.trim()).filter(Boolean);
    const nodes = {};
    const connections = [];

    lines.forEach(line => {
      // Extract node definitions e.g., Step1[1. Basic Info]
      const nodeMatches = line.matchAll(/([a-zA-Z0-9_-]+)(?:\[|{|\(|\[\()([^\]}]+)(?:\]|}|\)|\)\])/g);
      for (const match of nodeMatches) {
        const id = match[1];
        const label = match[2].trim();
        nodes[id] = label;
      }

      // Extract connections e.g., Step1 --> Step2
      const cleanLine = line.replace(/(?:\[|{|\(|\[\().*?(?:\]|}|\)|\)\])/g, "");
      const parts = cleanLine.split("-->");
      if (parts.length > 1) {
        for (let i = 0; i < parts.length - 1; i++) {
          const from = parts[i].trim();
          const to = parts[i+1].trim();
          if (from && to) {
            connections.push({ from, to });
          }
        }
      }
    });

    const incoming = new Set(connections.map(c => c.to));
    const allNodes = Object.keys(nodes);
    
    if (allNodes.length === 0) return null;

    let current = allNodes.find(n => !incoming.has(n)) || allNodes[0];
    const orderedSteps = [];
    const visited = new Set();

    while (current && !visited.has(current)) {
      visited.add(current);
      orderedSteps.push({ id: current, label: nodes[current] });
      
      const conn = connections.find(c => c.from === current);
      current = conn ? conn.to : null;
    }

    // Add remaining unvisited nodes
    allNodes.forEach(n => {
      if (!visited.has(n)) {
        orderedSteps.push({ id: n, label: nodes[n] });
      }
    });

    return orderedSteps;
  } catch (e) {
    console.error("Failed to parse flowchart:", e);
    return null;
  }
};

function GenericFlowchartStepperUI({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!steps || steps.length === 0) return null;
  const current = steps[activeStep];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
      <div className="mb-4 text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 border border-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
          <Network className="h-3 w-3" />
          <span>Interactive Process Flow</span>
        </span>
        <h4 className="mt-1 text-sm font-bold text-slate-800 font-sans">Setup Milestones Overview</h4>
      </div>

      {/* Stepper Steps indicators */}
      <div className="mb-5 flex overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
        <div className="flex gap-2 mx-auto px-1">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 rounded-xl border p-2.5 transition-all text-xs font-bold ${
                idx === activeStep 
                  ? "border-green-500 bg-green-50/50 text-green-700 ring-2 ring-green-500/10 shadow-3xs" 
                  : "border-slate-100 bg-white text-slate-450 hover:border-slate-200"
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                idx === activeStep ? "bg-green-600 text-white" : "bg-slate-100 text-slate-650"
              }`}>
                {idx + 1}
              </span>
              <span className="whitespace-nowrap">{step.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Detail Card */}
      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white border border-slate-150 text-green-600 font-bold text-[10px] shadow-3xs">
            {activeStep + 1}
          </span>
          <h5 className="font-bold text-slate-800 text-xs">{current.label}</h5>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed font-sans">
          This stage forms part of the sequential workflow process map. Continue to the next phase to follow the setup.
        </p>

        <div className="mt-4 flex justify-end gap-2 border-t border-slate-100 pt-3">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => prev - 1)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-650 hover:bg-slate-50 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep(prev => prev + 1)}
            className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-700 disabled:opacity-40 inline-flex items-center gap-1"
          >
            <span>Next Stage</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Main Component exports
// ----------------------------------------------------
export default function Mermaid({ chart }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);

  // Decode ampersands and other basic HTML entities in case MDX escapes them
  const decodedChart = React.useMemo(() => {
    return chart
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"');
  }, [chart]);

  // Hook must be called unconditionally at the top of the component!
  useEffect(() => {
    // Check if the diagram is already intercepted. If so, do not execute mermaid compilation.
    const isIntercepted = 
      (decodedChart.includes("Front Desk: Patient Check-In") && decodedChart.includes("Lobby: Live Waiting Queue")) ||
      (decodedChart.includes("sequenceDiagram") && decodedChart.includes("Clinic Owner/Admin")) ||
      (decodedChart.includes("Step1") && decodedChart.includes("Step2") && decodedChart.includes("Step7")) ||
      (decodedChart.includes("Sidebar[Exelth App Sidebar]") || decodedChart.includes("Sidebar --> H[Home / Dashboard]"));

    if (isIntercepted) return;

    let isMounted = true;
    
    loadMermaid().then((mermaid) => {
      if (!mermaid || !isMounted) return;
      
      try {
        const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;
        mermaid.render(id, decodedChart)
          .then(({ svg }) => {
            if (isMounted) {
              setSvg(svg);
            }
          })
          .catch((err) => {
            console.error("Mermaid Render Error:", err);
            if (isMounted) {
              setError(err.message || "Mermaid rendering error");
            }
          });
      } catch (err) {
        console.error("Mermaid Render Catch:", err);
        if (isMounted) {
          setError(err.message || "Mermaid rendering error");
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [decodedChart]);

  // 1. Check if chart matches the Patient Care Workflow flowchart
  if (decodedChart.includes("Front Desk: Patient Check-In") && decodedChart.includes("Lobby: Live Waiting Queue")) {
    return (
      <TabbedDiagramWrapper
        title="Clinic Patient Care Lifecycle"
        badgeText="Patient Workflow Diagram"
        imageSrc="/features/patient_workflow.jpg"
        imageAlt="Patient Care Workflow Diagram"
      >
        <PatientCareWorkflowUI />
      </TabbedDiagramWrapper>
    );
  }

  // 2. Check if chart matches the Clinic Lifecycle Sequence timeline
  if (decodedChart.includes("sequenceDiagram") && decodedChart.includes("Clinic Owner/Admin")) {
    return (
      <TabbedDiagramWrapper
        title="End-to-End Clinic Operations Lifecycle"
        badgeText="System Sequence Diagram"
        imageSrc="/features/clinic_lifecycle.jpg"
        imageAlt="Clinic Lifecycle Sequence Timeline Diagram"
      >
        <ClinicLifecycleTimelineUI />
      </TabbedDiagramWrapper>
    );
  }

  // 3. Check if chart matches the Marketing Setup Stepper Wizard
  if (decodedChart.includes("Step1") && decodedChart.includes("Step2") && decodedChart.includes("Step7")) {
    return <MarketingSetupStepperUI />;
  }

  // 4. Check if chart matches the App Sidebar configuration
  if (decodedChart.includes("Sidebar[Exelth App Sidebar]") || decodedChart.includes("Sidebar --> H[Home / Dashboard]")) {
    return <SidebarNavigationMockupUI />;
  }

  // 5. Generic Flowchart Stepper compiler fallback if it's a flowchart
  if (decodedChart.includes("graph LR") || decodedChart.includes("graph TD")) {
    const parsedSteps = parseMermaidFlowchart(decodedChart);
    if (parsedSteps && parsedSteps.length > 0) {
      return <GenericFlowchartStepperUI steps={parsedSteps} />;
    }
  }

  // 6. Default fallback to compiled SVG
  if (error) {
    return (
      <div className="not-prose my-6 space-y-2">
        <div className="text-xs font-semibold text-red-600">Failed to render Mermaid diagram. Showing raw definition:</div>
        <pre className="overflow-x-auto rounded-lg border border-red-200 bg-red-50/50 p-4 text-xs font-mono text-red-700 bg-red-50/50">
          <code className="text-red-700">{decodedChart}</code>
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-6 flex h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 text-slate-400">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-green-600"></div>
        <span className="text-xs font-medium">Generating visual diagram...</span>
      </div>
    );
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-100/50">
      <div className="mb-2 text-center text-xs font-medium uppercase tracking-wider text-slate-400">
        Visual Workflow Diagram
      </div>
      <div 
        className="mermaid-svg-container flex justify-center overflow-x-auto py-2"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
