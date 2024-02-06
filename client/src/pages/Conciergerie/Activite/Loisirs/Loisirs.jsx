import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import loisirsData from './LoisirsData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Navbar from '../../../../components/NavBars/NavbarConciergerie';
import Slide from '../componentsG/Slide';

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
      phraseActivite="Découvrez une gamme de loisirs exceptionnels grâce à nos services de conciergerie. Que vous
      soyez un amateur de sports, un gourmet en quête de nouvelles saveurs, ou simplement à la
      recherche d'une nouvelle aventure, notre équipe est là pour vous faire découvrir les meilleures
      activités et expériences du pays d’accueil."
      loisirsData={loisirsData} 
     />
     <Slide/>
       </>
  )
}
