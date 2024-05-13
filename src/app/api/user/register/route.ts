import connectDB from "@/lib/db";
import User from "@/model/User";
import { getRegisterSchema } from "@/lib/zod/schema/register";
import { z } from "zod";
import { resend } from "@/utils/resend";
import { VerifyEmail } from "@/emails/verify-emial";
import getOtp from "@/utils/getOtp";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  await connectDB();

  try {
    const data = await request.json();
    const userData = getRegisterSchema.parse(data);

    // check if user exists (if exists, return)
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return Response.json({
        success: false,
        message: "User already exists with this email address",
      });
    }

    // create user
    const otp = getOtp({ length: 6 });
    const hashPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await User.create({
      name: userData.name,
      email: userData.email,
      password: hashPassword,
      verificationToken: otp,
    });

    const email = await resend.emails.send({
      to: userData.email,
      from: "bookmark@updates.openurl.me",
      subject: "Verify your email",
      react: VerifyEmail({ otp }),
    });

    const user = await User.findById(newUser._id).select(
      "-password -verificationToken -isVerified -createdAt -updatedAt"
    );

    return Response.json({
      success: true,
      message: "Verification email sent successfully",
      user,
    });
  } catch (error) {
    console.log("Error registering user", error);
    if (error instanceof z.ZodError) {
      return Response.json({
        message: "Validation error",
        errors: error.errors,
      });
    }

    return Response.json({
      success: false,
      message: "Error registering user",
    });
  }
}
