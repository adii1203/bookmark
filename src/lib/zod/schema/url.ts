import { z } from "zod";

export const urlSchema = z.string().url({ message: "Invalid URL" });

export const bookmarkSchema = z.object({
  url: urlSchema,
  userId: z.string().uuid({ message: "Invalid user ID" }),
});
