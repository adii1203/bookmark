import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 text-center">
            {"don't have an account? "}
            <Link className="font-semibold text-black" href="/register">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
