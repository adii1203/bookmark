import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/model/User";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";
import { UserTypes } from "@/model/User";

export const { handlers, auth, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        await connectDB();
        const { email, password } = credentials;

        const user: UserTypes | null = await User?.findOne({
          email,
        });
        if (!user) {
          throw new CredentialsSignin({
            cause: "Ivalid email or password",
          });
        }
        if (!user.password) {
          throw new CredentialsSignin({
            cause: "Ivalid email or password",
          });
        }
        const isValidPassword = await bcrypt.compare(
          password as string,
          user.password
        );

        if (!isValidPassword) {
          throw new CredentialsSignin({
            cause: "Ivalid email or password",
          });
        }

        return user;
      },
    }),
  ],
});
