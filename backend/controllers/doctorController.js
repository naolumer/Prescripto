import doctorModel from "../models/doctorModel.js"

const changeAvailability = async (req,res)=>{

    try { 
        const {docId}  = req.body
        const doctor = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available:!doctor.available})
        
        res.json({
            success:true,
            message:"Availability changed!"
        })

    } catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

const listDoctors = async (req,res) => {
    try{
        const doctors = await doctorModel.find({}).select(["-password","-email"])

        if(!doctors){
            return res.json({
                success:false,
                message: "No Doctors found"
            })
        }

        res.json({
            success:true,
            doctorsList:doctors
        })

    } catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

export {changeAvailability, listDoctors}