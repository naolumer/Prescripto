import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useState } from 'react'
import { useEffect } from 'react'
import DocCard from "../../components/DocCard"

const DoctorsList = () => {
  
  const {backendUrl,aToken} = useContext(AdminContext)
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

  useEffect(()=>{
    fetchDoctors()
    
  },[])

  return (
    <div className='mx-3 sm:mx-5 md:mx-6 flex flex-col gap-6 mt-5'>
      <p className='font-semibold text-lg text-start'>All Doctors</p>
      <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 mr-3 '>
        {
          doctors.map((doctor,index)=> (
            <DocCard key={index} name={doctor.name} speciality={doctor.speciality} available={doctor.available} image={doctor.image} />
          ))
        }
        
      </div>

    </div>
  )
}

export default DoctorsList