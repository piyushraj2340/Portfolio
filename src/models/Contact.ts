import mongoose from "mongoose";

export interface IContact extends mongoose.Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const maxNameLength = parseInt(process.env.NEXT_PUBLIC_MAX_NAME_LENGTH || "100", 10);
const maxMessageLength = parseInt(process.env.NEXT_PUBLIC_MAX_MESSAGE_LENGTH || "2000", 10);

const ContactSchema = new mongoose.Schema<IContact>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [maxNameLength, `Name cannot be more than ${maxNameLength} characters`],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    maxlength: [maxMessageLength, `Message cannot be more than ${maxMessageLength} characters`],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);
