import { createContext, useState } from "react";


export const AdminContext = createContext()

const AdminContextProvider = (props)=>{

    const [aToken,setAToken] = useState("")


    const value = {
        aToken,
        setAToken
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider