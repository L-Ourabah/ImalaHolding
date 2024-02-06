import React from 'react'
import './Plan.css'
import Herobanner from './Herobanner/Herobanner'
import Pannels from './Pannels/Pannels'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Plan() {
  return (
    <div className='plan-container'>
      <Navbar/>
        <div className='plan-container'>
            <Herobanner />
            <Pannels />
        </div>
    </div>
  )
}

export default Plan