import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },

    password: {
        type: String,
    }

}, { timestamps: true });

// Creating the model from the schema
const userModel = mongoose.model('User', userSchema);

export { userModel }