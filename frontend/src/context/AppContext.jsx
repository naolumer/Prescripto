import { createContext, useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"

export const AppContext = createContext()

const AppContextProvider= (props)=>{

    const [doctors,setDoctors] = useState([])
    const currencySymbol  = "$"
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [token,setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):false)
    const [userData,setUserData] = useState(false)

    const getDoctors = async ()=>{
        try {
            const {data}  = await axios.get(`${backendURL}/api/doctor/all-doctors`)
            if (data.success){
                setDoctors(data.doctorsList)
            }

        } catch(error){
            toast.error(error.message)
        }
    }

    const getUserInfo = async ()=>{
        try {
          const {data} = await axios.get(`${backendURL}/api/user/get-profile`,{headers:{token}})
    
          if(data.success){
           setUserData(data.userData)
          }
    
        }catch(error){
          toast.error(error.message)
        }
      }

    

    const value ={
        doctors,
        currencySymbol,
        backendURL,
        setDoctors,
        token,setToken,
        userData,setUserData,
        getUserInfo,getDoctors
    }
    
    useEffect(()=>{
        getDoctors()
    },[])

    useEffect(()=>{
        if (token){
            getUserInfo()
        } else {
            setUserData(false)
        }
    },[token])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider