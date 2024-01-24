import React from 'react'
import './Materials.css'
import Herobanner from './Herobanner/Herobanner'
import Pannels from './Pannels/Pannels'

function Materials() {
  return (
    <div className='materials-container'>
        <div className='materials-container'>
            <Herobanner />
            <Pannels />
        </div>
    </div>
  )
}

export default Materials