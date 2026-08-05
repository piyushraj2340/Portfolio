import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validations/contact";
import { getClientIp, checkRateLimit } from "@/lib/middleware/rateLimit";
import { processContactSubmission } from "@/lib/services/contactService";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    
    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // 3. Delegate to Service Layer (DB Save & Email Dispatch)
    await processContactSubmission(validatedData);

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

