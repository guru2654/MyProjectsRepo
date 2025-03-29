import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app =express();

// ✅ Required middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
dotenv.config()
app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);
const PORT=process.env.PORT



app.listen(PORT,()=>{
    console.log("Server is running on port:"+PORT)
    connectDB()
})