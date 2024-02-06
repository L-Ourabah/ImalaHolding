import React from 'react'

function CompteRenduServices() {
  return (
    <div className='compte-rendu-services-wrapper'>
      <h2>Services</h2>
      <div className='compte-rendu-services-included'>
        <h3>Inclus</h3>
        <p>WiFi, Ménage, Télévision</p>
      </div>
      <div className='compte-rendu-services-additional'>
        <h3>Supplémentaires (Sur place)</h3>
        <p>Repas</p>
        <p>Garderie</p>
        <p>Location de véhicule</p>
      </div>
    </div>
  )
}

export default CompteRenduServices