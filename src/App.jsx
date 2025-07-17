import { useState } from 'react'
import './App.css'
import Calculator from './calculator/calculator.jsx'
import Sidebar from './Sidebar/sidebar.jsx'



function App() {

  return (
    <>
      {/* Might add sidebar later */}

      <div id="mainDisplay">
        <Sidebar /> 
        <Calculator />
      </div>
    </>
  )
}

export default App
