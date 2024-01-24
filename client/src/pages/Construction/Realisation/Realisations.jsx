import React from 'react'
import './Realisations.css'
import Herobanner from './Herobanner/Herobanner'
import Main from './Main/Main'
import Navbar from '../../../components/NavBars/NavbarConstruction'

function Realisations() {
  return (
    <div className='realisations-container'>
         <Navbar/>
        <div className='realisations-container'>
            <Herobanner />
            <Main />
        </div>
    </div>
  )
}

export default Realisations