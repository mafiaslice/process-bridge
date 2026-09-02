"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/sanitize";

type Fields = {
  name: string;
  organisation: string;
  jobTitle: string;
  email: string;
  phone: string;
  challenge: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  organisation: "",
  jobTitle: "",
  email: "",
  phone: "",
  challenge: "",
  website: "",
};

function validate(values: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.organisation.trim()) errors.organisation = "Organisation is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.challenge.trim()) {
    errors.challenge = "Please describe the challenge you are trying to solve.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-[2px] border border-pale bg-white p-8"
        role="status"
      >
        <p className="text-2xl font-semibold text-ink">Thanks — we&apos;ll be in touch.</p>
        <p className="mt-3 text-charcoal">
          We have your note. We&apos;ll read it before we reply — starting with the problem,
          not a pitch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <Field
        id="name"
        label="Your Name"
        required
        value={values.name}
        error={errors.name}
        onChange={(value) => update("name", value)}
      />
      <Field
        id="organisation"
        label="Organisation"
        required
        value={values.organisation}
        error={errors.organisation}
        onChange={(value) => update("organisation", value)}
      />
      <Field
        id="jobTitle"
        label="Job Title"
        value={values.jobTitle}
        onChange={(value) => update("jobTitle", value)}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        required
        value={values.email}
        error={errors.email}
        onChange={(value) => update("email", value)}
      />
      <Field
        id="phone"
        label="Phone"
        type="tel"
        value={values.phone}
        onChange={(value) => update("phone", value)}
      />
      <Field
        id="challenge"
        label="What challenge are you trying to solve?"
        required
        multiline
        value={values.challenge}
        error={errors.challenge}
        onChange={(value) => update("challenge", value)}
      />

      {status === "error" ? (
        <p className="text-sm text-[#9A2A2A]" role="alert">
          Something went wrong sending that. Please try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-[2px] bg-yellow px-5 py-3 text-[15px] font-semibold text-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Start With Clarity →"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  multiline,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  multiline?: boolean;
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const shared = {
    id,
    name: id,
    value,
    required,
    "aria-invalid": Boolean(error) || undefined,
    "aria-describedby": describedBy,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(event.target.value),
    className:
      "mt-2 w-full rounded-[2px] border border-pale bg-white px-3 py-2.5 text-ink outline-none focus:border-charcoal",
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-charcoal"> *</span> : null}
      </label>
      {multiline ? (
        <textarea rows={6} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#9A2A2A]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
