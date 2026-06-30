import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default App
