import React from 'react'
import './InformationsSection.css'
import Real1 from '../../../assets/images/realisations-image1.png'
import { Link } from 'react-router-dom'

function InformationsSection() {
  return (
    <div className='home-informations-section container'>
      <div className='home-informations-image' >
        <img src={Real1}/>
      </div>
      <div className='home-informations-text' >
        <h2>Demande d'informations</h2>
        <p>
          Si vous souhaitez en savoir plus sur nos services, nos projets ou si vous avez des questions
          spécifiques, n'hésitez pas à nous contacter.
          Notre équipe est à votre disposition pour vous fournir des informations détaillées et vous aider à
          comprendre comment nous pouvons vous aider à réaliser vos ambitions immobilières.
        </p>
        <div>
          <button><Link to='informations'>Voir plus</Link></button>
        </div>
      </div>
    </div>
  )
}

export default InformationsSection