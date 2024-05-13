import connectDB from "@/lib/db";
import User from "@/model/User";
import { getRegisterSchema } from "@/lib/zod/schema/register";
import { z } from "zod";

export async function POST(request: Request) {
  // connect to database
  await connectDB();

  try {
    // validate request body
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
    const newUser = await User.create({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });

    //todo: send verification email

    // return success
    return Response.json({
      success: true,
      message: "User registered successfully",
      user: newUser,
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
