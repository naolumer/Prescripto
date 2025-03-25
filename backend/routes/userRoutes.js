import express from "express"
import { getProfile, login, register } from "../controllers/userControllers.js"
import authUser from "../middlewares/authUser.js"

const userRouter = express.Router()

userRouter.post("/register",register)
userRouter.post("/login", login)
userRouter.post("/get-profile",authUser,getProfile)

export default userRouter