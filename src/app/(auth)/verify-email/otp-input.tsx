"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React, { useEffect, useState } from "react";

const OtpInputForm = () => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value.length === 6) {
      console.log(value);
    }
  }, [value]);

  return (
    <div className="space-y-2">
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
