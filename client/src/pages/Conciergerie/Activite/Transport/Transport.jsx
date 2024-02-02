import React from 'react'
import Header from '../componentsG/Header'
import Main from'./components/Main'
import transportData from './TransportData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Navbar from '../../../../components/NavBars/NavbarConciergerie'
import Slide from '../componentsG/Slide';

export default function Transport() {
  return (
    <>
    <Navbar/>
       <Header
     titreActivite="Transport"
      imgActivite="https://images.pexels.com/photos/18189671/pexels-photo-18189671/free-photo-of-ville-route-circulation-gens.jpeg?auto=compress&cs=tinysrgb&w=1600"
     />
     <Main
     sousTitreActivite="Nos moyens de transport"
     phraseActivite="Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,"
     transportData={transportData} 
    />
    <Slide/>
    </>
    
  )
}
