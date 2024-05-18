import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./form";
import { signIn } from "@/auth";
import { toast } from "sonner";

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Login using your github and google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm
            signIn={async () => {
              "use server";
              const res = await signIn("github");
              console.log("login response", res);
            }}
          />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
