import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props)=>{

    const [aToken,setAToken] = useState(localStorage.getItem("aToken")?localStorage.getItem("aToken"):"");
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors,setDoctors] = useState([])

  const fetchDoctors = async ()=>{

    try {
      const {data} = await axios.post(`${backendUrl}/api/admin/all-doctors`,{},{headers:{aToken}})

      if (data.success){
        setDoctors(data.allDoctors)
      } else {
        toast.error(data.message)
      }

    } catch(error){
      toast.error(error.message)
    }
  }



    const value = {
        aToken,
        setAToken,
        backendUrl,
        doctors,
        fetchDoctors
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider