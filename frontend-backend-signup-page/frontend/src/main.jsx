import React from "react";
import ReactDOM from "react-dom/client";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Handling from './component/signup.jsx'
import Counter from './component/counter.jsx'
import Signup from './component/signup.jsx'
import Crud from './component/crud.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Handling />
    {/* <Counter /> */}
    {/* <Signup /> */}
    {/* <Crud /> */}
  </StrictMode>,
)
