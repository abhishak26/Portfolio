import { useState, type FormEvent, type ReactElement } from "react";
import { serviceOptions } from "@/data/services";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const empty = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  function update(key: keyof typeof empty, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validate() {
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (!values.service) next.service = "Please select a service.";
    if (values.message.trim().length < 10) {
      next.message = "Please tell us a little about what you need.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setServerMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        success: boolean;
        message: string;
        errors?: Record<string, string>;
      };
      if (!response.ok || !data.success) {
        setStatus("error");
        setErrors(data.errors ?? {});
        setServerMessage(data.message || "Unable to send your message.");
        return;
      }
      setStatus("success");
      setValues(empty);
      setServerMessage(data.message);
    } catch {
      setStatus("error");
      setServerMessage("Unable to send your message.");
    }
  }

  const fieldClass =
    "h-12 w-full rounded-lg border border-line bg-surface px-4 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-lime";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </Field>
      </div>
      <Field label="Service required" error={errors.service} required>
        <select
          id="service"
          name="service"
          className={cn(fieldClass, "appearance-none")}
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          required
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-lime"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          required
        />
      </Field>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {status === "success" ? (
        <p className="rounded-lg border border-lime/30 bg-lime/10 px-4 py-3 text-sm text-lime" role="status">
          {serverMessage || "Message sent successfully."}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300" role="alert">
          {serverMessage || "Unable to send your message."}
        </p>
      ) : null}

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-lime px-5 text-sm font-medium text-lime-fg transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.96] disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactElement<{ id?: string }>;
}) {
  const id = children.props.id;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium tracking-wide text-muted">
        {label}
        {required ? <span className="text-lime"> *</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}
