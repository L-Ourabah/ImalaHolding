// HeroBanner.js

import React from 'react';
import '../AirbnbProfilClient.css'; // Assurez-vous d'importer votre fichier de styles CSS
import ia from "../../../../media/images/ia.jpg"
const HeroBanner = () => {
  return (
    <div className="hero-banner-client">
      <div className="hero-content">
        <h1>ia Influenceuse</h1>
       
      </div>
      <img className='img-profil-client' src={ia} alt="demba" />
    </div>
  );
}

export default HeroBanner;

