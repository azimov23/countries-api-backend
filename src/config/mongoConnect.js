import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(Stprocess.env.MONGO_URI));
  } catch (error) {
    console.log(error.message);
  }
};
