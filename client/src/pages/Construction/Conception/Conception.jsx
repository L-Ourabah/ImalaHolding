import React from 'react'
import './Conception.css'
import Herobanner from './Herobanner/Herobanner'
import ConceptionPannels from './ConceptionPannels/ConceptionPannels'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Conception() {
  return (
    <div className='conception-container'>
      <Navbar/>
      <div className='conception-wrapper'>
        <Herobanner />
        <ConceptionPannels />
      </div>
    </div>
  )
}

export default Conception