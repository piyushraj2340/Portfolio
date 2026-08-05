import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { ContactFormData } from "@/lib/validations/contact";
import { sendContactNotificationEmail } from "@/lib/services/emailService";

export async function processContactSubmission(data: ContactFormData) {
  // 1. Connect to Database and Save Record
  await connectDB();
  await Contact.create(data);

  // 2. Dispatch Email Notification
  await sendContactNotificationEmail(data);
}
