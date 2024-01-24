import React from 'react'
import './Plan.css'
import Herobanner from './Herobanner/Herobanner'
import Pannels from './Pannels/Pannels'

function Plan() {
  return (
    <div className='plan-container'>
        <div className='plan-container'>
            <Herobanner />
            <Pannels />
        </div>
    </div>
  )
}

export default Plan