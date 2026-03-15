"use server";

import { db } from "@/lib/db";
import { LeadCaptureSchema } from "@/schemas";
import * as z from "zod";

export async function submitLeadCapture(
  values: z.infer<typeof LeadCaptureSchema>
) {
  const validated = LeadCaptureSchema.safeParse(values);
  if (!validated.success) {
    return { error: "Invalid fields" };
  }

  const { phone, whatsapp, email } = validated.data;

  try {
    await db.inquiry.create({
      data: {
        fullName: "Website Visitor",
        email,
        phone,
        message: whatsapp ? `WhatsApp: ${whatsapp}` : undefined,
        source: "website_lead_capture",
      },
    });

    return { success: "Thank you! We'll be in touch shortly." };
  } catch (error) {
    console.error("Lead capture error:", error);
    return { error: "Something went wrong. Please try again." };
  }
}