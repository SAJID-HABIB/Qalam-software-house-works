import { useState } from 'react'
import InputForm from './components/InputForm'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <div>
        <h1>Signup page</h1>
        <InputForm />
        {/* <DataTable /> */}
      </div>
    </>
  )
}

export default App
