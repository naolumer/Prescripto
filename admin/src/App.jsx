import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Login/>
      
    </div>
  )
}

export default App