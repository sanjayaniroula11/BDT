import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Appointment from './components/Appointment'
import {ToastContainer} from 'react-toastify'
import Login from './pages/Login'
import Register from './pages/Register'
import DonorCard from './pages/DonorCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path="*" element={<NotFound />} /> 
      <Route path='/appointment' element={<Appointment/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element = {<Register/>} />
      <Route path='/donorcard' element = {<DonorCard/>} />
    </Routes>
    <ToastContainer/>
    
    </>
  )
}

export default App
 