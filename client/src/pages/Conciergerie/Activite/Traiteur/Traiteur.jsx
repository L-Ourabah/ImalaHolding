import React from 'react'

import Header from '../componentsG/Header'
import Navbar from '../../../../components/NavBars/NavbarConciergerie';

import Main from './components/Main'
import traiteurData from './TraiteurData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Slide from '../componentsG/Slide';
import ScrollButton from '../../componentsG/ScrollButton'
export default function Nourriture() {
  return (
    <>
    <Navbar/>
     <Header
     titreActivite="Traiteur"
     imgActivite="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600"
     />
        <Main
     sousTitreActivite="Nos traiteurs"
     phraseActivite="Découvrez une expérience culinaire d'exception avec notre service de traiteur. Chez nous, chaque plat est une œuvre d'art gustative, conçue avec passion et créativité pour éveiller vos sens et ravir vos convives. Laissez-nous sublimer votre événement avec des saveurs exquises et un service attentif qui fera de chaque occasion un moment inoubliable."
     traiteurData={traiteurData} 
    />
    <Slide/>
    <ScrollButton/>
    </>
  )
}
