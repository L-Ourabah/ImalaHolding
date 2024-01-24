import React from 'react'
import ban from '../../../../media/videos/drone.mp4'
import "../Home.css"
export default function Banniere() {
    return (
        <div >
        <div className="ban">
        <h1>IMALA</h1>
        <h2>"Nous sommes ravis de vous accueillir chez IMALA Holding, l'adresse incontournable pour une expérience immobilière et une conciergerie sur mesure au Sénégal."</h2>
      </div>

      <div className="banniere_accueil">
        <video id="background-video" autoPlay loop muted>
          <source src={ban} type="video/mp4" />
        </video>
      </div>

</div>
    )
}