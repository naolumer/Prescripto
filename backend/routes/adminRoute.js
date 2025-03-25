import express from "express"
import { addDoctor,loginAdmin,allDoctors } from "../controllers/adminController.js"
import upload from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js"


const adminRouter = express.Router()

adminRouter.post("/add-doctor",authAdmin,upload.single("image"),addDoctor)
adminRouter.post("/login",loginAdmin)
adminRouter.post("/all-doctors",authAdmin,allDoctors)

export default adminRouter