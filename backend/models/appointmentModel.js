import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    docId: {type:String,required:true},
    userId: {type:String, required:true},
    slotTime: {type:String, required:true},
    slotDate: {type:String, required:true},
    userData: {type:Object, required:true},
    docData: {type:Object, required:true},
    amount : {type:Number, required:true},
    date: {type:Number, required:true},
    isCompleted : {type:Boolean, default:false},
    payment : {type:Boolean, default:false },
    cancelled: {type:Boolean, default:false}
})

const appointmentModel = mongoose.models.appointment || mongoose.model("appointment",appointmentSchema)
export default appointmentModel