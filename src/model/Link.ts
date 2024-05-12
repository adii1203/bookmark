import mongoose, { Schema, Document } from "mongoose";

interface LinkTypes extends Document {
  url: string;
  title: string;
  description: string;
  image: string;
  userId: mongoose.Schema.Types.ObjectId;
}

const LinkSchema: Schema<LinkTypes> = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Link =
  (mongoose.models.Link as mongoose.Model<LinkTypes>) ||
  mongoose.model<LinkTypes>("Link", LinkSchema);

export default Link;
