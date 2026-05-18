import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  function app () {
    let onHandle = ()=>{
      alert("button was clicked");
    }
  }

  return (
    <>
      <button onClick={onHandle}>click me</button>
    </>
  )
}

export default App
