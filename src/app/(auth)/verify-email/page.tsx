import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import OtpInputForm from "./otp-input";
import { Input } from "@/components/ui/input";

const VerifyEmail = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Verify your email</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="text" value={"aditya32ft@gmail.com"} disabled />
            <OtpInputForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default VerifyEmail;
