import React from 'react'
import Navbar from '../../../components/NavBars/NavbarImala.jsx';
import './Home.css'
import Bienvenue from './components/Bienvenue.jsx';
import Banniere from './components/Banniere.jsx';
import Secteur from './components/Secteur.jsx';
import Actualite from './components/Actualités.jsx';
import Chiffre from './components/Chiffre.jsx';
import SectionContact from './components/SectionContact.jsx';
import Presentation from './components/Presentation.jsx';


export default function Main() {

  return (
    <main className="main_accueil">
      <Navbar />
      <Banniere />
      <Bienvenue />
      <Presentation/>  
      <Secteur />
      <Actualite />
      <Chiffre />
      <SectionContact />




    </main>
  );
}
