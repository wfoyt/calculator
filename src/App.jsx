import { useState } from 'react'
import './App.css'
import Calculator from './calculator/calculator.jsx'

function App() {

  return (
    <>
      {/* Might add sidebar later */}
      {/* <sidebar />  */}

      <div id="mainDisplay">
        <Calculator />
      </div>
    </>
  )
}

export default App
