import crypto from "crypto";

interface GetOtpProps {
  length: number;
}
export default function getOtp({ length }: GetOtpProps) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += crypto.randomInt(0, 9);
  }
  return otp;
}
