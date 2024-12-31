import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Ensure that the URI is passed correctly
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Error to connect:", err.message);
  }
};

export default connectDB;
