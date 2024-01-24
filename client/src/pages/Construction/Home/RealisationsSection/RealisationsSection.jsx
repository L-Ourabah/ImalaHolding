import React from 'react'
import { Link } from 'react-router-dom'
import Real1 from '../../../../media/images/realisations-image1.png'
import Real2 from '../../../../media/images/realisations-image2.png'
import Real3 from '../../../../media/images/realisations-image3.png'
import './RealisationsSection.css'

function RealisationsSection() {
  return (
    <div className='home-realisations-section'>
        <h2>Nos Réalisations</h2>
        <div className='home-realisations-images'>
            <img src={Real1} alt={Real1} />
            <img src={Real2} alt={Real2} />
            <img src={Real3} alt={Real3} />
        </div>
        <div className='home-realisations-button-container'>
          <p>
            Découvrez nos réalisations immobilières.
            Que ce soit la construction d'une résidence standing, d’une villa, ou la création d'un ensemble de
            logements, notre équipe a su répondre à une multitude de défis pour créer des projets qui marquent
            l'espace urbain.
          </p>
          <Link to='/realisations'><button>Voir plus</button></Link>
        </div>
        
    </div>
  )
}

export default RealisationsSection