import React from 'react'
import './Materials.css'
import Herobanner from './Herobanner/Herobanner'
import MaterialsPannels from './MaterialsPannels/MaterialsPannels'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Materials() {
  return (
    <div className='materials-container'>
      <Navbar/>
        <div className='materials-container'>
            <Herobanner />
            <MaterialsPannels />
        </div>
    </div>
  )
}

export default Materials