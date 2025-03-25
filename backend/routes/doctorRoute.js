import express from "express"
import { listDoctors } from "../controllers/doctorController.js"

const doctorRoute = express.Router()

doctorRoute.get("/all-doctors",listDoctors)

export default doctorRoute