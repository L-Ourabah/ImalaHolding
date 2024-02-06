import React from 'react'
import './VignetteAppartement.css'
import Etoiles48 from '../../../media/images/Etoiles4,8.svg'
import Appartement1 from '../../../media/images/appartement1.jpg'

function VignetteAppartement() {
  return (
    <div className='vignette-wrapper'>
      <div className='vignette-host-container'>
        <p className='vignette-host'>Hôte : Demba SOUMARE</p>
        <p className='vignette-host-rewarded'>(Hôte récompensé)</p>
      </div>
      <div className='vignette-flex-container'>
        <div className='vignette-image-container'>
          <img src={Appartement1} alt='Appartement'/>
        </div>
        <div className='vignette-name-container'>
          <p>Duplex moderne situé à Fann-Point E-Amitié avec vue sur la mer</p>
          <div className='vignette-score-host-container'>
            <div className='vignette-score'>
              <img src={Etoiles48} alt='4.8 étoiles'/>
              <p>4.8</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default VignetteAppartement