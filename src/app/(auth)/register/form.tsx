"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner";
import { getRegisterSchema } from "@/lib/zod/schema/register";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handelFormSubmit = async () => {
    const result = getRegisterSchema.safeParse(formData);
    if (result.error) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    const res = await fetch("/api/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      setFormData({ name: "", email: "", password: "" });
      setLoading(false);
      router.push(`/verify-email?email=${result.data.email}`);
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handelFormSubmit();
      }}
      className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Name</Label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          id="name"
          placeholder="name"
          type="name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          id="email"
          placeholder="m@example.com"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          id="password"
          type="password"
        />
      </div>
      <Button disabled={loading} className="w-full" type="submit">
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
