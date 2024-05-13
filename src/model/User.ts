import mongoose, { Schema, Document } from "mongoose";

interface UserTypes extends Document {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  verificationToken: string;
}

const UserSchema: Schema<UserTypes> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  (mongoose.models.User as mongoose.Model<UserTypes>) ||
  mongoose.model<UserTypes>("User", UserSchema);

export default User;
