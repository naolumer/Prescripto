import { createContext, useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"

export const AppContext = createContext()

const AppContextProvider= (props)=>{

    const [doctors,setDoctors] = useState([])
    const currencySymbol  = "$"
    const backendURL = import.meta.env.VITE_BACKEND_URL

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

    useEffect(()=>{
        getDoctors()
    },[doctors])


    const value ={
        doctors,
        currencySymbol,
        backendURL,
        setDoctors
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider