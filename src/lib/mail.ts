import nodemailer from "nodemailer";

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );
}

export function getNotificationEmail(): string | undefined {
  return process.env.NOTIFICATION_EMAIL ?? process.env.ORDER_NOTIFICATION_EMAIL;
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendMail(options: {
  to: string | string[];
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!isMailConfigured()) {
    console.log("Email not configured. Message:\n", options.text);
    return { ok: false, error: "Mail not configured" };
  }

  const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const fromName = process.env.SMTP_FROM_NAME ?? "Georgian Royal Wine";

  try {
    await createTransporter().sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: options.to,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
    });
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("SMTP error:", message);
    return { ok: false, error: message };
  }
}
