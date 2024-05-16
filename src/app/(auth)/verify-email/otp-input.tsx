"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const OtpInputForm = () => {
  const email = useSearchParams().get("email");
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, [email, router]);

  const handelOtpSubmit = async (value: string) => {
    setIsLoading(true);
    // send otp to server

    const res = await fetch(`/api/user/verify-email?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp: value }),
    });
    const data = await res.json();

    if (!data.success) {
      toast.error(data.message);
      setIsLoading(false);
    } else {
      toast.success(data.message);
      setIsLoading(false);
      router.push("/login");
    }
  };

  return (
    <div className="space-y-2">
      <Input type="text" value={email || ""} disabled />
      <p>Enter your otp</p>
      <InputOTP
        disabled={isLoading}
        onComplete={handelOtpSubmit}
        value={value}
        onChange={(value) => setValue(value)}
        className=""
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default OtpInputForm;
