import React from 'react'
import './App.css'
import { PriceRangeAnimation } from './components/PriceRangeAnimation/PriceRangeAnimation'

function App() {
  return (
    <div className="App">
      <PriceRangeAnimation from={430} to={7500} />
    </div>
  )
}

export default App
