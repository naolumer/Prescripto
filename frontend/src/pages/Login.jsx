import React, { useState } from 'react'

const Login = () => {

  const [state,setState] = useState("Sign Up")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")

  const onSubmitHandler = async(event)=>{
    event.preventDefault()
  }
  const onclickHandler = ()=>{
    state === "Sign Up"?setState("Login"):setState("Sign Up")
  }

  return (
    <div className='flex flex-col gap-3 items-start justify-center mt-24 mb-[250px] mx-auto border border-gray-200 rounded-xl shadow-md px-8 py-8 w-[350px] sm:w-[380px] max-h-[600px]'>
      <p className='text-2xl text-gray-600 font-medium'>{state==="Sign Up"?"Create Account":"Login"}</p>
      <p className=' text-gray-600  text-sm'>Please <span>{state==="Sign Up"?"sign up ":"log in"}</span> to book appointment</p>
      {/* <p className='text-sm text-gray-500'>Please log in to book appointment</p> */}
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center gap-3 w-full ' >
        {
          state==="Login"?"":
        <div className='w-full'>
          <label className='flex flex-col gap-1 text-sm  text-gray-600'>
          Full Name
          <input  className='px-4 w-full  py-[8px] rounded border border-gray-300 ' onChange={(e)=>setName(e.target.value)} value={name} type="text" />
        </label>
        </div>
          
        }
        <div className='w-full'>
          <label className='flex flex-col gap-1 text-sm  text-gray-600'>
          Email
          <input className='px-4 w-full  py-[8px] rounded border border-gray-300 text-start' onChange={(e)=>setEmail(e.target.value)} value={email} type="email" />
        </label>
        </div>
        
        <div className='w-full'>
          <label className='flex flex-col gap-1 text-sm text-gray-600 mb-3'>
          Password
          <input className='px-4 w-full  py-[8px] rounded border border-gray-300 ' onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" />
        </label>
        </div>
        

        <button className='bg-primary text-white w-full py-[8px] rounded-md cursor-pointer' type='submit'>{state}</button>
      </form>

      <p className='text-gray-600 text-sm pt-2'>{state==="Login"?"Create a new account?":"Already have an account?"}<span onClick={onclickHandler} className='text-sm text-primary underline cursor-pointer'>{state==="Sign Up"?" Login":" Click "} here</span></p>
    </div>
  )
}

export default Login