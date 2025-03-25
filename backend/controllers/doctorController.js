import userModel from "../models/userModel.js"

const changeAvailability = async (req,res)=>{

    const {docId}  = req.body

    try {
        const doctor = await userModel.findById({docId})
        await userModel.findByIdAndUpdate(docId,{available:!doctor.availeble})
        
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

export {changeAvailability}