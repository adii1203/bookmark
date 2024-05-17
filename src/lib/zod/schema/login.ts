import { z } from "zod";

export const getLoginSchema = z.object({
  email: z.string().email({ message: "Provide valid email addres" }),
  password: z.string(),
});
