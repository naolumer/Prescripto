import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AdminContextProvider>
    <DoctorContextProvider>
      ,<AppContextProvider>
        <App />
      </AppContextProvider>
    </DoctorContextProvider>
  </AdminContextProvider>
  </BrowserRouter>
   
  ,
)
