import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/about' element={<About />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  )
}

export default App
