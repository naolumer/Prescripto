import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import userModel from "../models/userModel.js"

// Sign up api

const register = async (req,res)=>{
    
    const {name,email,password} = req.body

    if (!name || !email ||!password){
        return res.json({
            success:false,
            message:"Missing Details"
        })
    }

    try{
    const userExists = await userModel.findOne({email})

    if (userExists){
        return res.json({
            success:false,
            message:"User already exists"
        })
    }

    if (!validator.isEmail(email)){
        return res.json({
            success:false,
            message:"Enter a valid email address."
        })
    }

    if (password.length < 8){
        return res.json({
            success:false,
            message:"Password must be atleast 8 characters."
        })
    }

    const salt  = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password:hashedPassword
    })
    const user = await newUser.save()

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.json({
            success:true,
            message:"User registered successfully",
            token: token
    })

    } catch(error){
        res.json({
            success:false,
            message:error.message
        })
    } 
}

// Login api

const login = async (req,res)=>{
    
    const {email,password} = req.body

    if (!email || !password){
        return res.json({
            success:false,
            message:"Please enter email and password"
        })
    }
    try{
        const user = await userModel.find({email})

        if(!user){
            return res.json({
                success:false,
                message:"Invalid Email"
            })
        }
        const isMatching = await bcrypt.compare(password,user.password)

        if (!isMatching){
            return res.json({
                success:false,
                message: "Invalid Password"
            })
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

        res.json({
            success:true,
            message: "Login successful!",
            token : token
        })


    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

export {register,login}


