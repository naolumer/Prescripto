import React from 'react'

const DocCard = ({name,image,available,speciality}) => {
  return (
    <div className=' flex flex-col  items-start border border-blue-200 rounded-t-xl rounded-b-lg '>
        <img className='bg-indigo-50 hover:bg-primary transition-all duration-500 ease-in-out rounded-t-lg 
        w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg object-cover ' src={image} alt="" />
        <p className='text-gray-900 text-lg font-medium ml-4 mt-3'>{name}</p>
        <p className='text-gray-600 text-sm ml-4'>{speciality}</p>
        <div className='flex gap-1 mt-2 items-center ml-4 mb-4'>
          <input type="checkbox" checked={available} />
          <p className='text-sm'>Available</p>
          
        </div>
    </div>
  )
}

export default DocCard