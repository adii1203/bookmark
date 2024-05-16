import { z } from "zod";

export const getRegisterSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must cantain at least 3 charactor(s)" })
    .max(15),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
