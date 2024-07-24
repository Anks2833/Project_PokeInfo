import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import pokedexRouter from "./routes/pokedex-route.js"
const app = express()

dotenv.config({
    path: "./.env"
});

connectDB()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use("/api", pokedexRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});