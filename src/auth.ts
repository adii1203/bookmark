import NextAuth from "next-auth";
import { db } from "@/lib/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Github],
});
