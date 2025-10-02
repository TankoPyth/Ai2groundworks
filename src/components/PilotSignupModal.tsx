import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  formspreeEndpoint: string; // e.g. "https://formspree.io/f/xxxxxxx"
};

// Multi-select chips for project types
const PROJECT_TYPES = [
  "Roadworks",
  "Earthworks",
  "Subdivisions",
  "Utilities (water/sewer)",
  "Bridges/Structures",
  "Commercial",
  "Residential",
  "Fit-out",
  "Maintenance",
  "Other",
] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

function buildEmailSummary(fd: FormData) {
  const get = (k: string) => (fd.get(k) as string) || "—";
  return [
    `Company: ${get("companyName")}   ABN: ${get("abn")}`,
    `Contact: ${get("fullName")} — ${get("role")}`,
    `Email: ${get("email")}   Mobile: ${get("mobile")}`,
    `Location: ${get("location")}`,
    `Company size: ${get("companySize")}`,
    `Construction type: ${get("constructionType")}`,
    `Project types: ${get("projectTypes")}`,
    "",
    `Active projects/month: ${get("activeProjects")}`,
    `Current tools: ${get("currentTools")}`,
    `Best contact window: ${get("bestTime")}`,
    "",
    "Notes:",
    get("notes"),
  ].join("\n");
}

export default function PilotSignupModal({ isOpen, onClose, formspreeEndpoint }: Props) {
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitting, setSubmitting] = React.useState(false);
  const [projectTypes, setProjectTypes] = React.useState<ProjectType[]>([]);
  const [consent, setConsent] = React.useState(false);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);

    // honeypot
    if ((fd.get("company") as string)?.length) return;

    // required checks
    const required = ["companyName","fullName","email","mobile","location","companySize","constructionType"];
    for (const key of required) {
      if (!((fd.get(key) as string) || "").trim()) {
        alert("Please complete all required fields.");
        return;
      }
    }
    if (!consent) {
      alert("Please agree to share information for pilot evaluation.");
      return;
    }

    // mirror chips & subject
    fd.set("projectTypes", projectTypes.join(", "));
    const companyName = (fd.get("companyName") as string) || "";
    const location = (fd.get("location") as string) || "";
    const companySize = (fd.get("companySize") as string) || "";
    fd.set("subject", `Pilot Signup - ${companyName} - ${location} - ${companySize}`);

    // plain-text email body
    fd.set("message", buildEmailSummary(fd));

    // send JSON to Formspree
    const body: Record<string, any> = {};
    fd.forEach((v, k) => (body[k] = v));

    try {
      setSubmitting(true);
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Form submit failed");
      onClose();            // success: close modal
      setStep(1);           // reset
      setProjectTypes([]);
      setConsent(false);
      form.reset();
    } catch {
      alert("Sorry, something went wrong. Please call us if this keeps happening.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              {step === 1 ? "Pilot Program Signup — Company" : "Pilot Program Signup — Details"}
            </h3>
            <button onClick={onClose} className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100" aria-label="Close">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* honeypot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* STEP 1 (kept mounted; just hidden when inactive) */}
            <div aria-hidden={step !== 1} className={step === 1 ? "" : "hidden"}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Company name" required>
                  <input name="companyName" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="ABN (optional)">
                  <input name="abn" className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="Contact name" required>
                  <input name="fullName" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="Role / title" required>
                  <select name="role" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
                    <option value="">Select…</option>
                    <option>Owner / Director</option>
                    <option>Project Manager</option>
                    <option>Estimator</option>
                    <option>Ops / Site</option>
                    <option>Admin</option>
                    <option>IT / Systems</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Work email" required className="sm:col-span-2">
                  <input name="email" type="email" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="Mobile" required>
                  <input name="mobile" type="tel" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="Head office location" required>
                  <input name="location" placeholder="e.g., Newcastle, NSW" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="Company size" required>
                  <select name="companySize" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
                    <option value="">Select…</option>
                    <option>1–4</option>
                    <option>5–10</option>
                    <option>11–25</option>
                    <option>26–50</option>
                    <option>51–100</option>
                    <option>100+</option>
                  </select>
                </Field>
                <Field label="Primary construction type" required>
                  <select name="constructionType" required className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
                    <option value="">Select…</option>
                    <option>Civil</option>
                    <option>Building</option>
                    <option>Civil + Building</option>
                    <option>Landscaping</option>
                    <option>Services (MEP)</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Typical project categories (select all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((pt) => {
                    const active = projectTypes.includes(pt);
                    return (
                      <button
                        key={pt}
                        type="button"
                        onClick={() =>
                          setProjectTypes((prev) =>
                            prev.includes(pt) ? prev.filter((x) => x !== pt) : [...prev, pt]
                          )
                        }
                        className={`px-3 py-1.5 rounded-full border text-sm ${
                          active ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        {pt}
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" name="projectTypes" value={projectTypes.join(", ")} />
              </div>

              <div className="flex items-center justify-end">
                <button type="button" onClick={() => setStep(2)} className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
                  Next
                </button>
              </div>
            </div>

            {/* STEP 2 (kept mounted; just hidden when inactive) */}
            <div aria-hidden={step !== 2} className={step === 2 ? "" : "hidden"}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Active projects / month">
                  <select name="activeProjects" className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
                    <option value="">Select…</option>
                    <option>0–2</option>
                    <option>3–5</option>
                    <option>6–10</option>
                    <option>11–20</option>
                    <option>20+</option>
                  </select>
                </Field>
                <Field label="Current software stack">
                  <input name="currentTools" placeholder="e.g., Xero, MYOB, Simpro, Buildxact, Excel" className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
                <Field label="Best contact window">
                  <select name="bestTime" className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
                    <option>Anytime</option>
                    <option>7–10am</option>
                    <option>10–2</option>
                    <option>2–5</option>
                    <option>After hours</option>
                  </select>
                </Field>
                <div />
                <Field label="Notes (optional)" className="sm:col-span-2">
                  <textarea name="notes" rows={4} className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" />
                </Field>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm text-neutral-700">
                  <input type="checkbox" name="smsOk" defaultChecked />
                  I'm happy to receive SMS updates
                </label>
                <label className="flex items-center gap-2 text-sm text-neutral-700">
                  <input type="checkbox" checked={consent} onChange={e => setConsent(e.currentTarget.checked)} />
                  I agree to share information for pilot evaluation *
                </label>
              </div>

              {/* Subject (populated in JS) */}
              <input type="hidden" name="subject" value="" />

              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setStep(1)} className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm hover:bg-neutral-50">
                  Back
                </button>
                <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60">
                  {submitting ? "Submitting…" : "Request Pilot Access"}
                </button>
              </div>
              <p className="text-xs text-neutral-500">We typically reply within 24–48 hours.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, required, className }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="block text-sm font-medium mb-2">{label}{required ? " *" : ""}</span>
      {children}
    </label>
  );
}