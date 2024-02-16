import React from "react";

import "./ServiceConciergerie.css";
/* importation des composants  */
import HeaderPage from "../componentsG/HeaderPage";
import Presentation from "../componentsG/Presentation";
import Galerie from "./components/Galerie";
import Partenaire from "./components/Partenaire";
import Aide from "./components/Aide";
import Navbar from "../../../components/NavBars/NavbarConciergerie";
import Avis from "./components/Avis";
import ScrollButton from '../componentsG/ScrollButton'
export default function ServiceConciergerie() {
  return (
    <>
      <Navbar />
{/* header*/}
      <header className="header_service_conciergerie">
        <HeaderPage
          titrePage="Services"
          imgPage="https://images.pexels.com/photos/18189716/pexels-photo-18189716/free-photo-of-ville-route-paysage-gens.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </header>
{/* main*/}
<main className="main_service_conciergerie">
        <Presentation
          titrePresentation="Quels sont nos services ?"
          textePresentation="Découvrez notre gamme de services sur mesure conçus pour répondre à tous vos besoins. De
    l'assistance de conciergerie personnalisée à la planification d'événements exclusifs, nous proposons
    une suite d'options haut de gamme pour améliorer votre style de vie."
        />
        <Galerie />
        <Avis />
        <Partenaire />
        <Aide />
        <ScrollButton/>
  </main>
    </>
  );
}
