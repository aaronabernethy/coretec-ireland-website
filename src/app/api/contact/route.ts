import { NextResponse } from "next/server";

// Contact form handler: emails each enquiry to Cortec via Resend.
// Settings (Cloudflare Worker variables/secrets):
//   RESEND_API_KEY  (secret)  Resend API key
//   CONTACT_TO      where enquiries are delivered (comma-separate for several)
//   CONTACT_FROM    sender, must be on a domain verified in Resend

const FIELDS: [string, string][] = [
  ["name", "Name"],
  ["company", "Company"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["industry", "Industry"],
  ["help_with", "Needs help with"],
  ["message", "Message"],
];

const MAX_LEN = 5000;

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_LEN) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success, send nothing.
  if (clean(form.get("_gotcha"))) {
    return NextResponse.json({ ok: true });
  }

  const data = Object.fromEntries(FIELDS.map(([key]) => [key, clean(form.get(key))]));

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email and a message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: missing RESEND_API_KEY, CONTACT_TO or CONTACT_FROM");
    return NextResponse.json({ error: "Form temporarily unavailable" }, { status: 500 });
  }

  const rows = FIELDS.filter(([key]) => data[key])
    .map(
      ([key, label]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top;white-space:nowrap"><strong>${label}</strong></td>` +
        `<td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(data[key])}</td></tr>`
    )
    .join("");

  const text = FIELDS.filter(([key]) => data[key])
    .map(([key, label]) => `${label}: ${data[key]}`)
    .join("\n\n");

  const subject = `Website enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: data.email,
      subject: subject.replace(/[\r\n]+/g, " "),
      text,
      html: `<p>New enquiry from the cortecireland.com contact form:</p><table>${rows}</table><p style="color:#888;font-size:12px">Reply to this email to respond directly to the customer.</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
