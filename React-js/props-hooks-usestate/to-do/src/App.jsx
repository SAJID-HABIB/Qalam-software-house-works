import { StrictMode, useState } from 'react'
import CountPlus from './component/CountPlus'
import Decrease from './component/CountMinus'

function App() {
  const [inCount, setInCount] = useState(0)
  const [deCount, setDecCount] = useState(0)

  function increse () {
    setInCount(prev => prev + 1);
  }

  function decrease() {
    setDecCount(prev => prev -1 );
  }

  return (
    <>
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100 gap-10'>
    <div className='bg-white p-6 rounded-xl shadow-md text-center w-64'>
      <h1 className="text-4xl font-bold text-green-600 mb-4">{inCount}</h1>
      <CountPlus onIncrease={increse} />
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md text-center w-64">
      <h1  className="text-4xl font-bold text-red-600 mb-4">{deCount}</h1>
      <Decrease decrement={decrease} />
    </div>
    </div>
    </>
  )
}

export default App
