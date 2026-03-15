import * as z from "zod";
import { UserRole } from "@prisma/client";
export const LeadCaptureSchema = z.object({
  phone: z.string().min(7, "Enter a valid phone number"),
  whatsapp: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    code: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 character required",
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    }),
    name: z.string().min(1, {
        message: "Name is required" 
    }),
    surname: z.string().min(1, "Surname is required"),
    phonenumber: z.preprocess(
    (val) => (typeof val === "string" ? val.replace(/\s+/g, "") : val),
    z
      .string()
      .regex(/^[0-9+]+$/, "Invalid phone number format")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be at most 15 digits")
  ),
    });

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
     username: z.string().min(3, "Username must be at least 3 characters").max(12, "Username must be at most 12 characters").optional(),
    role: z.enum([UserRole.ADMIN, UserRole.USER,]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
}).refine((data) => {
    if (data.password && !data.newPassword) {
        return false;
    }
    
    return true;
}, {
    message: "New password is required!",
    path: ["newPassword"]
}).refine((data) => {
    if (data.newPassword && !data.password) {
        return false;
    }
    
    return true;
}, {
    message: "Password is required!",
    path: ["password"]
})

export const VerificationSchema = z.object({
  bvn: z.string().min(11).max(11).optional().or(z.literal('')),
  nin: z.string().min(11).max(11).optional().or(z.literal('')),
}).refine((data) => data.bvn || data.nin, {
  message: "Either BVN or NIN is required",
  path: ["bvn"]
}).refine((data) => !(data.bvn && data.nin), {
  message: "Please provide only BVN or NIN, not both",
  path: ["bvn"]
});