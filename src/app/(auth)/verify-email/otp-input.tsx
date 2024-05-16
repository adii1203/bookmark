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

const OtpInputForm = () => {
  const email = useSearchParams().get("email");
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value.length === 6) {
      console.log(value);
    }
  }, [value]);

  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, [email, router]);

  return (
    <div className="space-y-2">
      <Input type="text" value={email || ""} disabled />
      <p>Enter your otp</p>
      <InputOTP
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
