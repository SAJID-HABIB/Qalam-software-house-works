import { useState } from 'react'
import LandingPge from "./modules/landing/pages/LandingPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPge></LandingPge>
      {/* <h1 className='text-7xl'>hello sajid </h1> */}
    </>
  )
}

export default App
