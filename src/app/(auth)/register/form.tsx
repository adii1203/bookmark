"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handelFormSubmit = async () => {
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
          required
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
          required
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
          required
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
