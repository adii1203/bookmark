import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import RegisterForm from "./form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 text-center">
            already have an account?{" "}
            <Link className="font-semibold text-black" href="/login">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default RegisterPage;
