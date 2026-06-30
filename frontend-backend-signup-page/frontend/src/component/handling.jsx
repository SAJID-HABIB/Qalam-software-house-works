import { useState } from 'react';

import './handling.css'

function Handling() {
  const [name, setName] = useState(" ")

  return (
    <>
    <input
    type="text"
    placeholder="Enter User Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <h2>Name: {name}</h2>
      
      {/* <button onClick={()=>setCount(0)}>Reset</button> */}
    </>
  );
}

export default Handling
