import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database has connected successfully!");
  } catch (error) {
    console.error("Database failed to connect", error.message);
    process.exit(1);
  }
}