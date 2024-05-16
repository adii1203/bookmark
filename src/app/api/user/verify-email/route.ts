import connectDB from "@/lib/db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  await connectDB();
  try {
    const { otp } = await req.json();
    const email = req.nextUrl.searchParams.get("email");

    if (!email || !otp) {
      return NextResponse.json(
        {
          message: "Email and OTP are required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        {
          status: 404,
        }
      );
    }
    if (user.isVerified) {
      return NextResponse.json(
        {
          message: "User already verified",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
    const isValidOtp = user.verificationToken === otp;
    if (!isValidOtp) {
      return NextResponse.json(
        {
          message: "Invalid OTP",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
    user.isVerified = true;
    await user.save();
    return NextResponse.json(
      {
        message: "Email verified successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error verifying email", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
