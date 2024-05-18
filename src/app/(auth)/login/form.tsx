"use client";

import { Button } from "@/components/ui/button";

const LoginForm = ({ signIn }: { signIn: () => void }) => {
  return (
    <div className="space-y-4">
      <Button onClick={() => signIn()} className="w-full" type="button">
        Continue with github
      </Button>
    </div>
  );
};

export default LoginForm;
