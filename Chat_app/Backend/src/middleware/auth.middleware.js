import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const proctedRoute =async (req,res,next)=>{
    const token = req.cookies.jwt
    console.log("jwt-->",jwt)
    try {
        if (!token){
            res.status(401).json({ message: "UnAutherized - No Token Provided" });
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        if (!decoded){
            res.status(401).json({ message: "UnAutherized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password")
        
        if(!user){
            res.status(404).json({ message: "User Not found!" });
        }

        req.user=user

        next()
        
    } catch (error) {
        console.log("Error in protecedRoute", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}