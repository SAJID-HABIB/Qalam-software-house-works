import { useState } from 'react'
import LandingPge from "./modules/landing/pages/LandingPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPge></LandingPge>
    </>
  )
}

export default App
