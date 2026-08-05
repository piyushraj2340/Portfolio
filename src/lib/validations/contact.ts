import { z } from "zod";

// Parse environment variables with safe fallbacks if they aren't loaded yet
const minNameLength = parseInt(process.env.NEXT_PUBLIC_MIN_NAME_LENGTH || "2", 10);
const maxNameLength = parseInt(process.env.NEXT_PUBLIC_MAX_NAME_LENGTH || "100", 10);
const minMessageLength = parseInt(process.env.NEXT_PUBLIC_MIN_MESSAGE_LENGTH || "10", 10);
const maxMessageLength = parseInt(process.env.NEXT_PUBLIC_MAX_MESSAGE_LENGTH || "2000", 10);

export const contactSchema = z.object({
  name: z
    .string()
    .min(minNameLength, `Name must be at least ${minNameLength} characters.`)
    .max(maxNameLength, `Name cannot exceed ${maxNameLength} characters.`),
  email: z
    .string()
    .email("Please provide a valid email address."),
  message: z
    .string()
    .min(minMessageLength, `Message must be at least ${minMessageLength} characters.`)
    .max(maxMessageLength, `Message cannot exceed ${maxMessageLength} characters.`),
});

export type ContactFormData = z.infer<typeof contactSchema>;
