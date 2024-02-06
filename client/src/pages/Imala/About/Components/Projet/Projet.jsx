import React from 'react'
import Qsnfd from "../../../../../media/images/az.jpg";
import Villa from "../../../../../media/images/villaCote.jpg";
import './Projet.css'
export default function Projet() {
  return (
    <div>
         <section className="section projet" id="projet">
    <div className="projet-title">
      <h2>Nos Futurs projets</h2>
    </div>
    <div className="projet-p">
      <div className="p-projet">
        <h3>VILLAS HAUT STANDING SUR LA PETITE COTE</h3>
        <div className="image-projet">
          <img src={Villa} alt="" />
        </div>
        <p>
          La villa en cours de construction est une preuve tangible de notre engagement envers la qualité et
          l'innovation. Nous sommes impatientes de vous montrer comment elles sont conçues pour répondre à
          vos besoins et réaliser vos rêves.
        </p>
      </div>
      <div className="p-projet">
        <h3>Immeubles de 9 étages avec son penthouse piscine</h3>
        <div className="image-projet">
          <img src={Qsnfd} alt="" />
        </div>
        <p>
          Nous avons plusieurs projets en cours de réalisation, Nous les mettrons en place sur notre
          lorsqu'ils seront aboutis..
        </p>
      </div>
      <div className="p-projet">
        <h3>Restaurant sur deux niveaux</h3>
        <div className="image-projet">
          <img src={Qsnfd} alt="" />
        </div>
        <p>
          Nous avons plusieurs projets en cours de réalisation, Nous les mettrons en place sur notre
          lorsqu'ils seront aboutis..
        </p>
      </div>
    </div>
  </section>
</div>
  )
}
