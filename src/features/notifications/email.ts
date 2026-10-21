import "server-only";
import { env } from "@/lib/env";

type Message = { to: string; subject: string; text: string };
export async function sendTransactional(message: Message) {
  if (!env.BREVO_API_KEY || !env.BREVO_SENDER_EMAIL) {
    return { delivered: false };
  }
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { accept: "application/json", "api-key": env.BREVO_API_KEY, "content-type": "application/json" },
      body: JSON.stringify({
        sender: { email: env.BREVO_SENDER_EMAIL, name: env.BREVO_SENDER_NAME },
        to: [{ email: message.to }],
        subject: message.subject,
        textContent: message.text,
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Brevo rejected the message (${response.status})`);
    return { delivered: true };
  } catch {
    return { delivered: false };
  }
}
