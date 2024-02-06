import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import garderieData from './GarderieData'
import Navbar from '../../../../components/NavBars/NavbarConciergerie'
import Slide from '../componentsG/Slide'


export default function Garderie() {
  return (
    <>
    <Navbar/>
     <Header
     titreActivite="Garderie"
     imgActivite="https://images.pexels.com/photos/8363100/pexels-photo-8363100.jpeg?auto=compress&cs=tinysrgb&w=1600"
     
     />
     <Main
      sousTitreActivite="Nos garderies"
      phraseActivite=" Notre service de garderie offre un environnement chaleureux et sécurisé où vos enfants pourront s'épanouir. Avec une équipe dévouée et des activités stimulantes, nous veillons à ce que chaque enfant reçoive les meilleurs soins et l'attention nécessaire pour grandir et s'épanouir. Laissez-nous prendre soin de vos petits pendant que vous vaquez à vos occupations en toute tranquillité d'esprit."
      garderieData={garderieData} 
     />
     <Slide/>
    </>
  )
}
