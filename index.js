import express from "express";
import cors from 'cors'
import router from "./routes/register.js";
import connectDatabase from "./db.js";
import { config } from "dotenv";
config()

// Connect to database
connectDatabase()
// Server instance
const app = express()
// Constants
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// User registration route api
app.use('/api/user' , router)

// Listen on port
app.listen(PORT , () => {
    console.log("Listening on", PORT)
} )