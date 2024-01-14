import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/HeaderConexInscri.jsx'

import './AirbnbInscription.css'
export default function AirbnbInscription() {
  return (
    <div className='inscription'>


      <Header />

      <div className="title-inscription">
        <h2>
          INSCRIPTION
        </h2>
      </div>
      <div className="formulaire">

        <div className="nomPrenom">
          <div className="prenom"></div>
          <div className="nom"></div>

        </div>

        <div className="dateNs"></div>
        <div className="email"></div>
        <div className="mpd"></div>
        <div className="btnInscription">
          <button>S'inscrire</button>
          <p>Vous êtes déjà membre ?</p>
          <p><Link to='/connexion'>Connectez-vous</Link></p>
        </div>
      </div>

    </div>
  )
}
