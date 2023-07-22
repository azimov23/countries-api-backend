import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
  } catch (error) {
    console.log(error.message);
  }
};
