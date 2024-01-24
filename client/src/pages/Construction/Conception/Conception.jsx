import React from 'react'
import './Conception.css'
import Herobanner from './Herobanner/Herobanner'
import Pannels from './Pannels/Pannels'

function Conception() {
  return (
    <div className='conception-container'>
      <div className='conception-wrapper'>
        <Herobanner />
        <Pannels />
      </div>
    </div>
  )
}

export default Conception