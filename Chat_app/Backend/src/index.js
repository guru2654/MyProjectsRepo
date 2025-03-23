import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import {connectDB} from "./lib/db.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app =express();

// ✅ Required middleware
app.use(cors());  
app.use(express.json());  // ✅ Parses JSON request body
app.use(express.urlencoded({ extended: true }));  // ✅ Parses form data
app.use(cookieParser());

dotenv.config()
app.use("/api/auth",authRoutes)
const PORT=process.env.PORT



app.listen(PORT,()=>{
    console.log("Server is running on port:"+PORT)
    connectDB()
})