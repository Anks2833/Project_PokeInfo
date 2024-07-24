import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    // Ensure MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable");
    }

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Mongoose Connection Error: ${error.message}`);
        process.exit(1); // Consider implementing a retry mechanism or more sophisticated error handling
    }
};

export { connectDB };