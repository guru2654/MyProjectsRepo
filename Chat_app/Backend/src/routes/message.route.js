import express from "express"
import {proctedRoute} from "../middleware/auth.middleware.js"
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.get("/users",proctedRoute,getUsersForSidebar)
router.get("/:Id", proctedRoute, getMessages)
router.post("/send/:id", proctedRoute, sendMessage)

export default router;