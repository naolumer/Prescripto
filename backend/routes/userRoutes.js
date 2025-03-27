import express from "express"
import { bookAppointment, getProfile, login, register, updateProfile } from "../controllers/userControllers.js"
import authUser from "../middlewares/authUser.js"
import upload from "../middlewares/multer.js"

const userRouter = express.Router()

userRouter.post("/register",register)
userRouter.post("/login", login)
userRouter.get("/get-profile",authUser,getProfile)
userRouter.post("/update-profile",upload.single("image"),authUser,updateProfile)
userRouter.post("/book-appointment",authUser,bookAppointment)

export default userRouter