import nodemailer from "nodemailer";
import { ContactFormData } from "@/lib/validations/contact";
import { getContactEmailHtml } from "@/lib/templates/emailTemplates";

export async function sendContactNotificationEmail(data: ContactFormData) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL_TO) {
    console.warn("SMTP credentials not fully configured in .env.local. Skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || "465", 10),
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const emailHtml = getContactEmailHtml(data);

  await transporter.sendMail({
    from: `"Portfolio Website" <${SMTP_USER}>`,
    to: CONTACT_EMAIL_TO,
    subject: `New Message from ${data.name}`,
    html: emailHtml,
    replyTo: data.email,
  });
}
