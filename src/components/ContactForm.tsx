"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/sanitize";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

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
      <Card role="status">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Thanks — we&apos;ll be in touch.
          </CardTitle>
          <CardDescription className="text-base text-foreground">
            We have your note. We&apos;ll read it before we reply — starting with the problem,
            not a pitch.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <FieldGroup>
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

        <FormField
          id="name"
          label="Your Name"
          required
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
        />
        <FormField
          id="organisation"
          label="Organisation"
          required
          value={values.organisation}
          error={errors.organisation}
          onChange={(value) => update("organisation", value)}
        />
        <FormField
          id="jobTitle"
          label="Job Title"
          value={values.jobTitle}
          onChange={(value) => update("jobTitle", value)}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
        />
        <FormField
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={(value) => update("phone", value)}
        />
        <FormField
          id="challenge"
          label="What challenge are you trying to solve?"
          required
          multiline
          value={values.challenge}
          error={errors.challenge}
          onChange={(value) => update("challenge", value)}
        />

        {status === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            Something went wrong sending that. Please try again.
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Spinner data-icon="inline-start" />
              Sending…
            </>
          ) : (
            "Start With Clarity →"
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}

function FormField({
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
  return (
    <Field data-invalid={error ? true : undefined}>
      <FieldLabel htmlFor={id}>
        {label}
        {required ? " *" : null}
      </FieldLabel>
      {multiline ? (
        <Textarea
          id={id}
          name={id}
          rows={6}
          value={value}
          required={required}
          aria-invalid={Boolean(error) || undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          required={required}
          aria-invalid={Boolean(error) || undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
}
