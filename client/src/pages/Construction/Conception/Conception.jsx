import React from 'react'
import './Conception.css'
import Herobanner from './Herobanner/Herobanner'
import Pannels from './Pannels/Pannels'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Conception() {
  return (
    <div className='conception-container'>
      <Navbar/>
      <div className='conception-wrapper'>
        <Herobanner />
        <Pannels />
      </div>
    </div>
  )
}

export default Conception