"use client";

import React, { useState } from "react";
import { 
  Folder, 
  File, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle,
  Database,
  Server,
  Monitor,
  Code2,
  Terminal,
  Settings,
  HelpCircle,
  Eye,
  EyeOff,
  ArrowRight,
  FlaskConical
} from "lucide-react";

// Helper to match dynamic page titles to real slugs in docsList
const getSlugForName = (name) => {
  const cleanName = name.toLowerCase();
  
  if (cleanName.includes("overview") || cleanName.includes("navigation") || cleanName.includes("welcome")) return "getting-started";
  if (cleanName.includes("quick start") || cleanName.includes("installation") || cleanName.includes("troubleshooting") || cleanName.includes("build")) return "developer-troubleshooting";
  if (cleanName.includes("supabase")) return "architecture-supabase";
  if (cleanName.includes("orgcontext") || cleanName.includes("rbac")) return "architecture-context-rbac";
  if (cleanName.includes("database model") || cleanName.includes("database")) return "architecture-supabase";
  if (cleanName.includes("dashboard") || cleanName.includes("home")) return "feature-dashboard";
  if (cleanName.includes("calendar") || cleanName.includes("appointment")) return "feature-calendar";
  if (cleanName.includes("tasks") || cleanName.includes("inbox") || cleanName.includes("assignments")) return "feature-tasks";
  if (cleanName.includes("reception") || cleanName.includes("consultation")) return "feature-reception";
  if (cleanName.includes("patients") || cleanName.includes("clinical")) return "feature-patients";
  if (cleanName.includes("labs") || cleanName.includes("catalog")) return "feature-labs";
  if (cleanName.includes("payments") || cleanName.includes("invoices") || cleanName.includes("billing")) return "feature-payments";
  if (cleanName.includes("mastra") || cleanName.includes("exelthai") || cleanName.includes("ai") || cleanName.includes("agent")) return "automation-ai-agents";
  if (cleanName.includes("notification") || cleanName.includes("rules") || cleanName.includes("workflow") || cleanName.includes("wait")) return "feature-workflow";
  if (cleanName.includes("inlineselect") || cleanName.includes("source")) return "documentation-source";
  if (cleanName.includes("codebase") || cleanName.includes("todos") || cleanName.includes("action")) return "codebase-action-items";
  if (cleanName.includes("marketing") || cleanName.includes("branding")) return "marketing-profile-setup";
  if (cleanName.includes("patient flow") || cleanName.includes("lifecycle")) return "complete-patient-flow";
  if (cleanName.includes("integrations") || cleanName.includes("whatsapp")) return "feature-integrations";
  if (cleanName.includes("analytics") || cleanName.includes("reports")) return "feature-analytics";
  if (cleanName.includes("organization") || cleanName.includes("departments") || cleanName.includes("branch")) return "feature-organization";
  if (cleanName.includes("admin")) return "user-role-admin";
  if (cleanName.includes("doctor")) return "user-role-doctor";
  if (cleanName.includes("receptionist")) return "user-role-receptionist";
  
  return "getting-started";
};

// 1. Interactive Directory tree explorer component
const defaultDirectoryCode = `├── 1. Getting Started
│   ├── Overview & Architecture
│   └── Quick Start & Installation
├── 2. Core Architecture
│   ├── Supabase Client Split (Critical)
│   ├── OrgContext & RBAC
│   └── Database Model
├── 3. Sidebar Module Registry
│   ├── Dashboard & Home
│   ├── Calendar & Appointments
│   ├── Tasks & Inbox
│   ├── Reception & Consultation Flow
│   ├── Patients & Clinical Records
│   ├── Labs & Lab Catalogs
│   └── Payments & Invoices
├── 4. AI & Automations
│   ├── Mastra AI Agents
│   ├── ExelthAI Assistant
│   └── Notification Rules
└── 5. Developer Guide
    ├── The InlineSelect Pattern
    ├── Build & Deployment Scripts
    └── Codebase Action Items`;

export function DirectoryExplorer({ code = defaultDirectoryCode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("tree"); // "tree" | "grid"
  const [expanded, setExpanded] = useState({});

  // Parse the code tree dynamically
  const parseTree = React.useCallback(() => {
    const lines = code.split("\n").filter(line => line.trim() !== "");
    const parsedTree = [];
    let currentFolder = null;

    lines.forEach(line => {
      const isFile = /^[│\s]{2,}/.test(line) || line.startsWith("│") || line.startsWith(" ") || line.startsWith("\t");
      const cleanName = line.replace(/[├└│─\s]+/g, " ").trim();
      if (!cleanName) return;

      if (!isFile) {
        currentFolder = {
          name: cleanName,
          isDir: true,
          children: []
        };
        parsedTree.push(currentFolder);
      } else if (currentFolder) {
        currentFolder.children.push({
          name: cleanName,
          slug: getSlugForName(cleanName)
        });
      }
    });
    return parsedTree;
  }, [code]);

  const tree = React.useMemo(() => parseTree(), [parseTree]);

  // Initialize expanded folders
  React.useEffect(() => {
    const initial = {};
    tree.forEach(node => {
      initial[node.name] = true;
    });
    setExpanded(initial);
  }, [tree]);

  const toggle = (name) => {
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Filter tree based on search query
  const filteredTree = React.useMemo(() => {
    return tree.map(folder => {
      const matchingChildren = folder.children.filter(child =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchingChildren.length > 0 || folder.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return {
          ...folder,
          children: matchingChildren
        };
      }
      return null;
    }).filter(Boolean);
  }, [tree, searchQuery]);

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs">
      {/* Header Panel */}
      <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50/50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 border border-green-100 text-green-600">
            <Folder className="h-4.5 w-4.5" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Interactive Document Structure</h4>
            <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Exelth Documentation Directory Map</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[160px] sm:flex-initial">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 pl-8 text-xs font-semibold text-slate-700 outline-hidden placeholder-slate-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            <svg
              className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Toggle buttons */}
          <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white">
            <button
              onClick={() => setViewMode("tree")}
              className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                viewMode === "tree" ? "bg-green-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Tree View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                viewMode === "grid" ? "bg-green-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Grid Map
            </button>
          </div>
        </div>
      </div>

      {/* Main Body */}
      {viewMode === "tree" ? (
        <div className="p-5 space-y-3">
          {filteredTree.length === 0 ? (
            <div className="text-center py-6 text-xs font-medium text-slate-400">No matching files found.</div>
          ) : (
            filteredTree.map(node => (
              <div key={node.name} className="space-y-1">
                <button
                  onClick={() => toggle(node.name)}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-green-600 text-left w-full group transition-colors"
                >
                  <span className="text-slate-400 group-hover:text-green-500">
                    {expanded[node.name] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </span>
                  <Folder className={`h-4.5 w-4.5 text-yellow-500 transition-all ${expanded[node.name] ? "fill-yellow-100" : "fill-transparent"}`} />
                  <span>{node.name}</span>
                  <span className="text-[10px] text-slate-400 font-semibold bg-slate-100 rounded-md px-1.5 py-0.5 ml-1">
                    {node.children.length} pages
                  </span>
                </button>
                
                {expanded[node.name] && (
                  <div className="pl-6 border-l border-slate-150 ml-2.5 space-y-1.5 py-1">
                    {node.children.map(child => (
                      <a
                        key={child.name}
                        href={`/docs/${child.slug}`}
                        className="flex items-center gap-2 py-1 text-xs font-semibold text-slate-500 hover:text-green-600 transition-colors"
                      >
                        <File className="h-3.5 w-3.5 text-slate-400" />
                        <span className="hover:underline">{child.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="grid gap-4 p-5 sm:grid-cols-2">
          {filteredTree.length === 0 ? (
            <div className="col-span-full text-center py-6 text-xs font-medium text-slate-400">No matching files found.</div>
          ) : (
            filteredTree.map(node => (
              <div key={node.name} className="rounded-xl border border-slate-100 bg-slate-50/20 p-4 hover:border-green-500/10 hover:shadow-xs transition-all">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-3">
                  <Folder className="h-4.5 w-4.5 text-yellow-500 fill-yellow-50" />
                  <h5 className="text-xs font-bold text-slate-800 truncate">{node.name}</h5>
                </div>
                <div className="flex flex-col gap-1.5">
                  {node.children.map(child => (
                    <a
                      key={child.name}
                      href={`/docs/${child.slug}`}
                      className="flex items-center gap-2 rounded-lg bg-white border border-slate-100 hover:border-green-500/20 p-2 text-left text-xs font-semibold text-slate-650 hover:text-green-600 shadow-3xs transition-all"
                    >
                      <File className="h-3.5 w-3.5 text-slate-450 shrink-0" />
                      <span className="truncate">{child.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// 2. Specimen lifecycle tracker simulator component
export function SpecimenTrackerUI() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: "Ordered", desc: "Doctor requests tests from clinic catalog", color: "text-blue-600 bg-blue-50 border-blue-100" },
    { name: "Sample Collected", desc: "Specimen is collected and marked", color: "text-amber-600 bg-amber-50 border-amber-100" },
    { name: "Processing", desc: "Specimen is put into the lab analyzer machine", color: "text-purple-600 bg-purple-50 border-purple-100" },
    { name: "Report Uploaded", desc: "Tech uploads result PDF to portal", color: "text-pink-600 bg-pink-50 border-pink-100" },
    { name: "Completed", desc: "Results released to doctor & patient profile", color: "text-green-600 bg-green-50 border-green-100" }
  ];

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-xs">
      <div className="mb-4 text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
          <FlaskConical className="h-3 w-3" />
          <span>Lab Lifecycle Simulator</span>
        </span>
        <h4 className="mt-1.5 text-sm font-bold text-slate-800">Specimen Processing Pipeline</h4>
      </div>

      {/* Progress Step Bar */}
      <div className="relative flex justify-between items-center mb-6 py-2 px-1">
        <div className="absolute left-4 right-4 h-0.5 bg-slate-100 top-1/2 -translate-y-1/2 -z-10">
          <div 
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {steps.map((step, idx) => (
          <button
            key={step.name}
            onClick={() => setCurrentStep(idx)}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all duration-200 ${
              idx <= currentStep 
                ? "bg-green-600 border-green-600 text-white shadow-sm" 
                : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* active state card */}
      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-slate-800 text-sm">State: {steps[currentStep].name}</h5>
          <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${steps[currentStep].color}`}>
            Step {currentStep + 1} of 5
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-500 leading-relaxed">{steps[currentStep].desc}</p>
        <div className="mt-4 flex gap-2">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-650 hover:bg-slate-50 disabled:opacity-40"
          >
            Previous Stage
          </button>
          <button
            disabled={currentStep === steps.length - 1}
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-green-700 disabled:opacity-40"
          >
            Advance Stage
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. System Architecture Stack Visualizer
export function ArchitectureVisualizer() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-xs">
      <div className="mb-4 text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
          <Server className="h-3 w-3" />
          <span>Platform Stack</span>
        </span>
        <h4 className="mt-1.5 text-sm font-bold text-slate-800">Exelth Client-Server Data Flow</h4>
      </div>

      <div className="space-y-6">
        {/* Layer 1: Client components */}
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
          <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Monitor className="h-4 w-4" />
            <span>Layer 1: Client Front-End UI</span>
          </h5>
          <p className="mt-1 text-xs text-slate-600">
            Visual elements (Zustand stores, Radix components, and Tailwind styling) rendered in the {"user's"} browser.
          </p>
        </div>

        {/* Connection Arrow */}
        <div className="flex justify-center -my-3">
          <div className="h-6 w-0.5 bg-slate-200 relative">
            <ChevronDown className="h-4 w-4 absolute -bottom-2 -left-1.5 text-slate-300" />
          </div>
        </div>

        {/* Layer 2: Server Actions */}
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
          <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <Server className="h-4 w-4" />
            <span>Layer 2: Server Actions Security Gateway</span>
          </h5>
          <p className="mt-1 text-xs text-slate-600">
            Server functions running securely on the backend. Verifies user logins, active roles, and authorization keys.
          </p>
        </div>

        {/* Connection Arrow */}
        <div className="flex justify-center -my-3">
          <div className="h-6 w-0.5 bg-slate-200 relative">
            <ChevronDown className="h-4 w-4 absolute -bottom-2 -left-1.5 text-slate-300" />
          </div>
        </div>

        {/* Layer 3: Database */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4">
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700">
              <Database className="h-4 w-4" />
              <span>Supabase DB Client</span>
            </h5>
            <p className="mt-1 text-xs text-slate-600">
              Stores core medical registry tables and handles security rules.
            </p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Database className="h-4 w-4" />
              <span>Prisma Client</span>
            </h5>
            <p className="mt-1 text-xs text-slate-600">
              Manages commercial structures, hospital bills, invoices, and limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Code logic explainer component
function VisualLogicCard({ code, language }) {
  const [showCode, setShowCode] = useState(false);

  // Derive simple human titles for technical snippets
  let title = "System Integration Config";
  let explanation = "This configuration registers a secure background connection to Exelth API databases.";
  let actions = ["Initializes variables", "Encrypts credentials", "Establishes session rules"];

  if (code.includes("InlineSelect")) {
    title = "Interactive Quick-Select Menu";
    explanation = "An optimized visual selector component used inside side sheets. Allows users to quickly select doctor shifts or active departments.";
    actions = [
      "Displays dynamic options dropdown",
      "Updates selected value instantly",
      "Adapts position if placed at viewport bottom edge"
    ];
  } else if (code.includes("OrgContextType") || code.includes("useOrgContext")) {
    title = "Active Context Coordinator";
    explanation = "Verifies the current user's profile and matches them to their hospital clinic, checking permissions.";
    actions = [
      "Identifies the active user session",
      "Retrieves the active clinic branch ID",
      "Enforces department permissions and role accesses"
    ];
  } else if (code.includes("createClient")) {
    title = "Secure Database Connector";
    explanation = "Initializes a secure connection link to backend storage logs.";
    actions = [
      "Generates server-side connection client",
      "Validates clinic organization credentials",
      "Retrieves files with strict privacy constraints"
    ];
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xs">
      {/* Visual representation */}
      <div className="p-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 border border-green-100 text-green-600">
              <Code2 className="h-4 w-4" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-slate-800">{title}</h4>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">{language || "system logic"}</span>
            </div>
          </div>
          
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-650 hover:bg-slate-50 transition-all"
          >
            {showCode ? (
              <>
                <EyeOff className="h-3 w-3" />
                <span>Hide Tech Details</span>
              </>
            ) : (
              <>
                <Eye className="h-3 w-3" />
                <span>Show Code</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{explanation}</p>
          
          <div className="space-y-2">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-450">What this does in the app:</h5>
            <ul className="grid gap-2 sm:grid-cols-2">
              {actions.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2 rounded-lg bg-slate-50 p-2.5 text-xs text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Code expansion drawer (collapsible for tech users only) */}
      {showCode && (
        <div className="not-prose border-t border-slate-100 bg-slate-900 p-4 font-mono text-xs text-slate-200">
          <div className="flex justify-between items-center mb-2 text-[10px] text-slate-455 border-b border-slate-800 pb-1.5">
            <span>Raw System Config Source</span>
            <span className="uppercase font-semibold">{language || "system logic"}</span>
          </div>
          <pre className="overflow-x-auto whitespace-pre font-mono leading-relaxed text-slate-200 bg-slate-900 p-0 border-0">
            <code className="text-slate-200 bg-transparent p-0 border-0">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

// 5. Config / JSON inspector card
function ConfigurationPanel({ code }) {
  // Turn basic json-like config into toggle sliders
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-xs">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 border border-amber-100 text-amber-600">
          <Settings className="h-4 w-4" />
        </span>
        <div>
          <h4 className="text-sm font-bold text-slate-800">Operational Module Settings</h4>
          <span className="text-[10px] text-slate-450 font-semibold uppercase tracking-wider">Active Configuration</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-800">Dynamic Patient Waiting Queues</div>
            <div className="text-[10px] text-slate-400">Track and prioritize live lobby visits</div>
          </div>
          <div className="h-5 w-9 rounded-full bg-green-500 p-0.5 cursor-pointer flex justify-end">
            <div className="h-4 w-4 rounded-full bg-white shadow-sm"></div>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-800">Automatic E-Prescription Delivery</div>
            <div className="text-[10px] text-slate-400">Dispatch E-Rx PDF reports to WhatsApp</div>
          </div>
          <div className="h-5 w-9 rounded-full bg-green-500 p-0.5 cursor-pointer flex justify-end">
            <div className="h-4 w-4 rounded-full bg-white shadow-sm"></div>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-800">AI Reminders Agent</div>
            <div className="text-[10px] text-slate-400">Send WhatsApp reminders 24h prior</div>
          </div>
          <div className="h-5 w-9 rounded-full bg-green-500 p-0.5 cursor-pointer flex justify-end">
            <div className="h-4 w-4 rounded-full bg-white shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CodeBlock({ code, language }) {
  // 1. If it's a directory tree
  if (code.includes("├──") || code.includes("└──") || code.includes("│   ├──")) {
    return <DirectoryExplorer code={code} />;
  }

  // 2. If it's the Lab spec lifecycle ASCII flowchart
  if (code.includes("Ordered") && code.includes("Sample Collected") && code.includes("Processing")) {
    return <SpecimenTrackerUI />;
  }

  // 3. If it's the Stack architecture diagram
  if (code.includes("Next.js Client Components") && code.includes("Server Actions")) {
    return <ArchitectureVisualizer />;
  }

  // 4. If it's environment variables or configuration JSON/properties
  if (language === "json" || language === "env" || code.startsWith("{") && code.endsWith("}")) {
    // If it's just config code, render it as settings panel or fallback to logic card
    if (code.includes("userId") || code.includes("InlineSelect")) {
      return <VisualLogicCard code={code} language={language} />;
    }
    return <ConfigurationPanel code={code} />;
  }

  // 5. Default handler: convert standard technical snippets to Logic Workflow card
  return <VisualLogicCard code={code} language={language} />;
}
