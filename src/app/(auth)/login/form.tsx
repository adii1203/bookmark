"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="m@example.com" required type="email" />
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
        <Input id="password" required type="password" />
      </div>
      <Button className="w-full" type="submit">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
