import React from 'react'
import './Plan.css'
import Herobanner from './Herobanner/Herobanner'
import PlanPannels from './PlanPannels/PlanPannels'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Plan() {
  return (
    <div className='plan-container'>
      <Navbar/>
        <div className='plan-container'>
            <Herobanner />
            <PlanPannels />
        </div>
    </div>
  )
}

export default Plan