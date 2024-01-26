import React from 'react'
import './Partenaire.css'
import GCA from '../../../../../media/images/GCA.jpg'
import Badrame from '../../../../../media/images/Badrame.jpg'
import Albina from '../../../../../media/images/Albina.jpg'

function Partenaire() {
  return (
    <div className='services-partenaire-container'>
      <h2>NOS PARTENAIRES</h2>
      <div className='partenaire-images-container'>
        <div className='partenaire-image'>
          <img src={Badrame} alt='Global Construction Associates'/>
          <h3>Global Construction Associate</h3>
          <p> 
            <br />
            Conception plans architecturaux 2D et 3D, études techniques,
            réalisation, suivi, évaluation des travaux, génie civil, travaux publics, btp contrôle, topographie,
            sérigraphie, infographie et équipement.
          </p>
        </div>
        <div className='partenaire-image'>
          <img src={GCA} alt='Badrame Service'/>
          <h3>Badrame Service</h3>
          <p> 
            <br />
            Gestion locatif, construction de biens et conciergerie
          </p>
        </div>
        <div className='partenaire-image'>
          <img src={Albina} alt='Albina B.T.P'/>
          <h3>Albina B.T.P</h3>
          <p> 
            <br />
            Génie civil-architecture-ubraniste
          </p>
        </div>
      </div>
    </div>
  )
}

export default Partenaire