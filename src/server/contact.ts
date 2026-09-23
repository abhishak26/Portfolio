import { z } from "zod";
import { site } from "@/config/site";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please select a service.").max(80),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about what you need.")
    .max(4000),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

type StoredSubmission = ContactInput & { id: string; createdAt: string };

const submissions: StoredSubmission[] = [];

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

function getEmailConfig() {
  const host = process.env.EMAIL_HOST?.trim();
  const port = Number(process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASSWORD?.trim();
  const to = process.env.CONTACT_EMAIL?.trim() || site.contactEmail;
  if (!host || !user || !pass) return null;
  return { host, port, user, pass, to };
}

async function sendEmail(data: ContactInput) {
  const cfg = getEmailConfig();
  if (!cfg) return false;

  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.port === 465,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  await transporter.sendMail({
    from: `"TheVision Infotech" <${cfg.user}>`,
    to: cfg.to,
    replyTo: data.email,
    subject: `New enquiry from ${data.name} — ${data.service}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Company: ${data.company || "—"}`,
      `Service: ${data.service}`,
      "",
      data.message,
    ].join("\n"),
  });

  return true;
}

export async function handleContactSubmission(
  raw: unknown,
): Promise<{ status: number; body: ContactResponse }> {
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      status: 400,
      body: {
        success: false,
        message: "Please check the form and try again.",
        errors,
      },
    };
  }

  const data = parsed.data;
  if (data.website) {
    return {
      status: 200,
      body: { success: true, message: "Message sent successfully." },
    };
  }

  const stored: StoredSubmission = {
    ...data,
    name: sanitize(data.name),
    email: sanitize(data.email),
    phone: data.phone ? sanitize(data.phone) : "",
    company: data.company ? sanitize(data.company) : "",
    service: sanitize(data.service),
    message: sanitize(data.message),
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  submissions.push(stored);
  if (submissions.length > 200) submissions.shift();

  try {
    await sendEmail(stored);
  } catch (error) {
    console.error("[contact] email transport failed", error);
    return {
      status: 500,
      body: { success: false, message: "Unable to send your message." },
    };
  }

  return {
    status: 200,
    body: { success: true, message: "Message sent successfully." },
  };
}
