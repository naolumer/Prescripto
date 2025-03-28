import express from "express"
import { bookAppointment, cancelAppointment, getProfile, listAppointment, login, register, updateProfile } from "../controllers/userControllers.js"
import authUser from "../middlewares/authUser.js"
import upload from "../middlewares/multer.js"

const userRouter = express.Router()

userRouter.post("/register",register)
userRouter.post("/login", login)
userRouter.get("/get-profile",authUser,getProfile)
userRouter.post("/update-profile",upload.single("image"),authUser,updateProfile)
userRouter.post("/book-appointment",authUser,bookAppointment)
userRouter.get("/appointments",authUser,listAppointment)
userRouter.post("/cancel-appointment",authUser,cancelAppointment)

export default userRouter