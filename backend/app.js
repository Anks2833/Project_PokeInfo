import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from 'cookie-parser';
import { connectDB } from "./config/db.js";

const app = express()

dotenv.config();

connectDB()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST','DELETE'],
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Working...");
})

import pokedexRouter from "./routes/pokedex-route.js"
app.use("/api", pokedexRouter)

import userRouter from "./routes/user-route.js"
app.use("/api/v1/user", userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});