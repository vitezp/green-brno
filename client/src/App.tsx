import React from 'react'
import './App.css'
// import { PriceRangeAnimation } from './components/PriceRangeAnimation/PriceRangeAnimation'
import { Map } from './map/components/Map'

function App() {
  return (
    <div className="App">
      {/*<PriceRangeAnimation from={430} to={7500} />*/}
      <Map />
    </div>
  )
}

export default App
