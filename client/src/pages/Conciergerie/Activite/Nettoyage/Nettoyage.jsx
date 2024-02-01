import React from 'react'
import Header from '../componentsG/Header'
import Main from'./components/Main'
import nettoyageData from './NettoyageData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Navbar from '../../../../components/NavBars/NavbarConciergerie';
import Slide from '../componentsG/Slide';

export default function Nettoyage() {
 
  return (
    <>
  <Navbar/>
     <Header
     titreActivite="Nettoyage"
     imgActivite="https://images.pexels.com/photos/10573242/pexels-photo-10573242.jpeg?auto=compress&cs=tinysrgb&w=1600"
     />
       <Main
     sousTitreActivite="Nos services de nettoyage"
     phraseActivite="Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,"
     nettoyageData={nettoyageData} 
    />

<Slide/>
    </>
  )
}
