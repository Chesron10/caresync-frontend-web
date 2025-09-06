import { profile } from "console";
import { z } from "zod";

export const doctorFirstSchema = z.object({
  firstName: z.string().min(2, { message: "first name is required" }),
  lastName: z.string().min(2, { message: "last name is required" }),
  phoneNumber: z.string().length(9, { message: "phone number is required" }),
});

export type DoctorFirstSchema = z.infer<typeof doctorFirstSchema>;

export const doctorSecondSchema = z.object({
  specialisation: z.string({ message: "specialisation is required" }),
  affiliation: z.string({ message: "affiliation is required" }),
  gender: z.string({ message: "gender is required" }),
});

export type DoctorSecondSchema = z.infer<typeof doctorSecondSchema>;

export const doctorThirdSchema = z.object({
  email: z.string().email({ message: "valid email is required" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters long" }),
});

export type DoctorThirdSchema = z.infer<typeof doctorThirdSchema>;

export const verificationSchema = z.object({
  code: z.string().min(6, { message: "verification code is required" }),
});

export type VerificationSchema = z.infer<typeof verificationSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "valid email is required" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters long" }),
  profileImage: z.string().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
