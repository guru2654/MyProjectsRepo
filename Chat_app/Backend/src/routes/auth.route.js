import express from"express"
import { login, logout, signup, updateProfile,checkAuth } from "../controllers/auth.controller.js"
import {proctedRoute} from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("update-profile",proctedRoute,updateProfile)
router.get("/check", proctedRoute, checkAuth);

export default router