import "server-only";
import { env } from "@/lib/env";

type Message = {
  to?: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendTransactional(message: Message) {
  if (!env.BREVO_API_KEY || !env.BREVO_SENDER_EMAIL) {
    return { delivered: false, reason: "Missing Brevo configuration" };
  }

  const recipientEmail = message.to || "bilalshahid1609@gmail.com";

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: env.BREVO_SENDER_EMAIL, name: env.BREVO_SENDER_NAME },
        to: [{ email: recipientEmail, name: "Bilal Shahid" }],
        cc: env.ADMIN_EMAILS ? [{ email: env.ADMIN_EMAILS.split(",")[0].trim() }] : undefined,
        subject: message.subject,
        textContent: message.text,
        htmlContent: message.html,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errText = await response.text();
      return { delivered: false, error: errText, status: response.status };
    }

    return { delivered: true };
  } catch (error) {
    return { delivered: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
