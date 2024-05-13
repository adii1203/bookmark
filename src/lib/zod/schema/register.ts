import { z } from "zod";

export const getRegisterSchema = z.object({
  name: z.string({ message: "name is required" }).min(3).max(15),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
