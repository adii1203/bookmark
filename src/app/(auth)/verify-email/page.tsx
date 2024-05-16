import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { Suspense } from "react";
import OtpInputForm from "./otp-input";

const VerifyEmail = () => {
  return (
    <Suspense
      fallback={
        <div>
          {/* 
      // todo: add fallback here
      */}
          loading
        </div>
      }>
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Verify your email</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <OtpInputForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </Suspense>
  );
};

export default VerifyEmail;
