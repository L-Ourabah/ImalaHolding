import React from 'react'
import Etoiles from '../../../../media/images/Etoiles.svg'

function BestSeller() {
  return (
    <div className='location-avis-best-seller'>
      <h3>Best seller</h3>
      <p className='location-avis-score'>4.8 / 5</p>
      <img src={Etoiles} alt='Etoiles'/>
      <p>Ce bien fait partie des mieux notés</p>
    </div>
  )
}

export default BestSeller