import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import loisirsData from './LoisirsData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Navbar from '../../../../components/NavBars/NavbarConciergerie';

export default function Loisirs() {
  return (
    <>
  <Navbar/>
     <Header
     titreActivite="Loisirs"
     imgActivite="https://images.pexels.com/photos/18189700/pexels-photo-18189700/free-photo-of-banc-paysage-gens-herbe.jpeg?auto=compress&cs=tinysrgb&w=1600"
     />
  
      <Main
      sousTitreActivite="Nos loisirs"
      phraseActivite="Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,"
      loisirsData={loisirsData} 
     />
       </>
  )
}
