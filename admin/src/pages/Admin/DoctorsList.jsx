import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'


const DoctorsList = () => {
  
  const {aToken,fetchDoctors,doctors,changeAvailability} = useContext(AdminContext)
 
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
            <div key={index} className=' flex flex-col  items-start border border-blue-200 rounded-t-xl rounded-b-lg '>
              <img className='bg-indigo-50 hover:bg-primary transition-all duration-500 ease-in-out rounded-t-lg 
              w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg object-cover ' src={doctor.image} alt="" />
              <p className='text-gray-900 text-lg font-medium ml-4 mt-3'>{doctor.name}</p>
              <p className='text-gray-600 text-sm ml-4'>{doctor.speciality}</p>
              <div className='flex gap-1 mt-2 items-center ml-4 mb-4'>
                <input className='cursor-pointer ' onChange={()=> changeAvailability(doctor._id)} type="checkbox" checked={doctor.available}/>
                <p className='text-sm'>Available</p> 
              </div>
            </div>
          ))
        } 
      </div>

    </div>
  )
}

export default DoctorsList