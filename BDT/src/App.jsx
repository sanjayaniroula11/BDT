import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import DonateBlood from './pages/DonateBlood'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/donateblood' element={<DonateBlood />}/>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    
    </>
  )
}

export default App
 