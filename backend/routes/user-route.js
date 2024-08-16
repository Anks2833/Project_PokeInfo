import { Router } from "express"
import {
    logInUser,
    registerUser,
    logOutUser,
    getUserProfile
} from "../controllers/user.controller.js"

import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/register", registerUser)
router.post("/login", logInUser)
router.post("/logout", logOutUser)
router.get("/profile", verifyJWT, getUserProfile)


export default router