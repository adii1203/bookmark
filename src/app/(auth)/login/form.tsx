"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { login } from "@/actions/login";
import { getLoginSchema } from "@/lib/zod/schema/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [data, setData] = React.useState({ email: "", password: "" });
  const loginAction = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    const parsed = getLoginSchema.safeParse({ email, password });

    if (parsed.error) {
      toast.error(parsed.error.errors[0].message);
      return;
    }

    const error = await login(parsed.data);

    if (error) {
      toast.error(error.toString());
    }
    if (!error) {
      toast.success("Logged in successfully");
      router.push("/dashboard");
    }
  };
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          id="email"
          placeholder="m@example.com"
          required
          type="email"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-sm font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
            href="/reset-password">
            Forgot password?
          </Link>
        </div>
        <Input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          id="password"
          required
          type="password"
        />
      </div>
      <Button
        onClick={() => loginAction(data)}
        className="w-full"
        type="button">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
