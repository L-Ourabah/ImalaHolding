import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesSection.css'

function ServicesSection() {
  return (
    <div className='home-services-section'>
        <h2>Découvrez les services exceptionnels que nous offrons avec <br /> IMALA Construction.</h2>
        <p>
            Que vous soyez un particulier ou un promoteur immobilier, nous vous aidons à réaliser vos projets
            immobiliers. Que ce soit pour un plan, la conception, la construction, la rénovation ou la gestion de
            votre bien immobilier, notre équipe dédiée est là pour vous accompagner à chaque étape de votre
            projet.
        </p>
        <div className='services-cards'>
            <Link to='/plan'>
                <div className='services-plan'>
                    Plan
                </div>
            </Link>
            <Link to='/conception'>
                <div className='services-conception'>
                    Conception
                </div>
            </Link>
            <Link to='/materials'>
                <div className='services-materials'>
                    Matériaux
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ServicesSection