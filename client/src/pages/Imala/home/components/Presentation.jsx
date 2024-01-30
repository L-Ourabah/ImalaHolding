import React from 'react'
import { Link } from 'react-router-dom';
import "./Presentation.css"
export default function Presentation() {
  return (
    <section className="section presentation">
    <div className="presentation_img">
    </div>
    <div className="presentation_txt">
      <h2>C'est quoi Imala ?</h2>
      <p>
        Imala Holding est une agence immobilière destinée avant tout à la diaspora africaine. Nous sommes
        basé sur Paris et à Dakar et intervenons dans la location courte et moyenne durée de biens avec
        Imala location.
        Nous sommes également dans la construction de biens (villas et immeubles) et des devis peuvent
        vous être fait selon votre convenance avec Imala construction.
        Nous gérons également une conciergerie afin de gérer les biens des propriétaires, des services tels
        que le ménage de biens, un service de traiteur, de la location de véhicule avec chauffeur pour vos
        déplacements dans le pays avec imala conciergerie.
        Nos secteur d’activités : habitation (imala location) / Construction (imala construction) / Conciergerie
        (imala conciergerie)
      </p>
      <button className="btn_presentation"><Link to="/About">Voir plus</Link></button>
    </div>
  </section>
  )
}
