import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { cleanField, cleanMessage, isValidEmail } from "@/lib/sanitize";

type Submission = {
  id: string;
  createdAt: string;
  name: string;
  organisation: string;
  jobTitle: string;
  email: string;
  phone: string;
  challenge: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "submissions.json");

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;

  // Honeypot: pretend success so bots do not retry.
  if (cleanField(input.website)) {
    return Response.json({ ok: true });
  }

  const name = cleanField(input.name);
  const organisation = cleanField(input.organisation);
  const jobTitle = cleanField(input.jobTitle);
  const email = cleanField(input.email, 254);
  const phone = cleanField(input.phone, 40);
  const challenge = cleanMessage(input.challenge);

  if (!name || !organisation || !email || !challenge) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Invalid email." }, { status: 400 });
  }

  const submission: Submission = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    name,
    organisation,
    jobTitle,
    email,
    phone,
    challenge,
  };

  try {
    await mkdir(dataDir, { recursive: true });
    let existing: Submission[] = [];
    try {
      const raw = await readFile(dataFile, "utf8");
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) existing = parsed as Submission[];
    } catch {
      existing = [];
    }
    existing.push(submission);
    await writeFile(dataFile, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
  } catch {
    return Response.json({ error: "Could not store submission." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
