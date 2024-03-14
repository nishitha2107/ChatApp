// db/connectToMongoDB.js
import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    // You may choose to throw the error here for higher-level error handling
    // throw error;
  }
};

export default connectToMongoDB;
