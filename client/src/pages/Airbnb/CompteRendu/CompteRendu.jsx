import React from 'react'
import './CompteRendu.css'
import VignetteAppartement from '../VignetteAppartement/VignetteAppartement'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'

function CompteRendu() {
  return (
    <div>
      <BarreDeRecherche />
      <div className='compte-rendu-wrapper container'>
        <h1>COMPTE-RENDU DE LA RESERVATION</h1>
        <div className='vignette-container'>
          <VignetteAppartement />
        </div>
        <hr />
        <div className='compte-rendu-services-container'>
          
        </div>
      </div>
    </div>
    
  )
}

export default CompteRendu