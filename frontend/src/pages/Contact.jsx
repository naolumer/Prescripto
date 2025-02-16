import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-gray-500 text-2xl text-center mt-16 mb-10 mx-auto'>
        <p className=' font-medium'>CONTACT <span className='text-gray-800  font-medium'>US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 items-start md:items-center  justify-start md:justify-center w-full md:mx-auto'>
        <img className='h-auto w-full md:w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col items-start '>
          <p className='text-lg  font-medium text-gray-700 mb-6'>OUR OFFICE</p>
          <p className='text-sm text-gray-500'>00000 Willms Station</p>
          <p className='text-sm text-gray-500 mb-6'>Suite 000, Washington, USA</p>
          <p className='text-sm text-gray-500'>Tel: (000) 000-0000</p>
          <p className='text-sm text-gray-600 mb-6'>Email: greatstackdev@gmail.com</p>
          <p className='text-lg  font-medium text-gray-700'>CAREERS AT PRESCRIPTO</p>
          <p className='text-sm text-gray-600 my-5'>Learn more about our teams and job openings.</p>
          <button className='text-sm px-8 py-4 border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact