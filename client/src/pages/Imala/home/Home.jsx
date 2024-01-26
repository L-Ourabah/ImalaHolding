import React from 'react'
import Navbar from '../../../components/NavBars/NavbarImala.jsx';
import './Home.css'
import Bienvenue from './components/Bienvenue.jsx';
import Banniere from './components/Banniere.jsx';
import Secteur from './components/Secteur.jsx';
import Actualite from './components/Actualités.jsx';
import Chiffre from './components/Chiffre.jsx';
import SectionContact from './components/SectionContact.jsx';


export default function Main() {

  return (
    <main className="main_accueil">
      <Navbar />
      <Banniere />
      <Bienvenue />
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
          <button id="btn_qsn">Voir plus</button>
        </div>
      </section>

      <Secteur />
      <Actualite />
      <Chiffre />
      <SectionContact />




    </main>
  );
}
