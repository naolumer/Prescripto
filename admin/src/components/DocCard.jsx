import React from 'react'

const DocCard = ({name,image,available,speciality}) => {
  return (
    <div className=' flex flex-col  items-start border border-blue-200 rounded-t-xl rounded-b-lg '>
        <img className='bg-blue-100 hover:bg-primary transition-all duration-500 ease-in-out rounded-t-lg ' src={image} alt="" />
        <p className='text-gray-900 text-lg font-medium ml-4 mt-3'>{name}</p>
        <p className='text-gray-600 text-sm ml-4'>{speciality}</p>
        <div className='flex gap-1 mt-2 items-center ml-4 mb-4'>
          <input type="checkbox" checked />
          <p className='text-sm'>Available</p>
          
        </div>
    </div>
  )
}

export default DocCard