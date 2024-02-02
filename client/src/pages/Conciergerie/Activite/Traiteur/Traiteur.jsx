import React from 'react'

import Header from '../componentsG/Header'
import Navbar from '../../../../components/NavBars/NavbarConciergerie';

import Main from './components/Main'
import traiteurData from './TraiteurData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Slide from '../componentsG/Slide';

export default function Nourriture() {
  return (
    <>
    <Navbar/>
     <Header
     titreActivite="Traiteur"
     imgActivite="https://images.pexels.com/photos/7262909/pexels-photo-7262909.jpeg?auto=compress&cs=tinysrgb&w=1600"
     />
        <Main
     sousTitreActivite="Nos traiteurs"
     phraseActivite="Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,"
     traiteurData={traiteurData} 
    />
    <Slide/>
    </>
  )
}
