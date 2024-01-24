import React from 'react'
import './Materials.css'
import Herobanner from './Herobanner/Herobanner'
import Pannels from './Pannels/Pannels'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Materials() {
  return (
    <div className='materials-container'>
      <Navbar/>
        <div className='materials-container'>
            <Herobanner />
            <Pannels />
        </div>
    </div>
  )
}

export default Materials