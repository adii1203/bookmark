"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
      redirect: true,
    });
  } catch (error) {
    if (error) {
      const err = error as CredentialsSignin;
      return err.cause;
    }
    throw error;
  }
};
