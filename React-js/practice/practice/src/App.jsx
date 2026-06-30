import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [dec,setDec] = useState(0);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increase</button>
      </div>
      <div>
        <h1>{dec}</h1>
        <button onClick={() => setDec(dec - 1)}>Decrease</button>
      </div>
    </>
  )
}

export default App
