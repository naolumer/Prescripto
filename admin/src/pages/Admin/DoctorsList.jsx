import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useState } from 'react'
import { useEffect } from 'react'
import DocCard from "../../components/DocCard"

const DoctorsList = () => {
  
  const {aToken,fetchDoctors,doctors} = useContext(AdminContext)
 
  useEffect(()=>{
    if(aToken){
      fetchDoctors()
    }
  },[aToken])

  return (
    <div className='mx-3 sm:mx-5 md:mx-6 flex flex-col gap-6 mt-5 overflow-y-scroll'>
      <p className='font-semibold text-lg text-start'>All Doctors</p>
      <div className='grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-3 mr-3 mb-12 '>
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