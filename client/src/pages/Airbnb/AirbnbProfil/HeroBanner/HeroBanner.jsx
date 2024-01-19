// HeroBanner.js

import React from 'react';
import '../AirbnbProfil.css'; // Assurez-vous d'importer votre fichier de styles CSS
import Demba from "../../../../media/images/Demba.png"
const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Demba Soumare</h1>
       
      </div>
      <img className='img-profil' src={Demba} alt="demba" />
    </div>
  );
}

export default HeroBanner;

