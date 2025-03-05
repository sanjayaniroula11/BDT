import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1 class='text-5xl font-bold underline' >BloodFind</h1>
    </>
  )
}

export default App
 