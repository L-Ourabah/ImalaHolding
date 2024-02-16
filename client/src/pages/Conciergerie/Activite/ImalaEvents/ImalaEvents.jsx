import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import imalaEventsData from './ImalaEventsData'
import Navbar from '../../../../components/NavBars/NavbarConciergerie'
import Slide from '../componentsG/Slide'
import ScrollButton from '../../componentsG/ScrollButton'

export default function ImalaEvents() {
  return (
    <>
    <Navbar/>
     <Header
     titreActivite="Imala Events"
     imgActivite="https://images.pexels.com/photos/19024675/pexels-photo-19024675/free-photo-of-fleurs-table-blanc-fete.jpeg?auto=compress&cs=tinysrgb&w=600')"
     />
     <Main
      sousTitreActivite="Nos services événementiels"
      phraseActivite=" Imala Events est votre partenaire idéal pour la location de biens pour vos événements occasionnels. Avec notre large gamme de produits, du mobilier aux chapiteaux élégants, nous vous aidons à créer l'ambiance parfaite pour votre événement. Faites confiance à Imala Events pour rendre vos événements spéciaux encore plus exceptionnels !"
      imalaEventsData={imalaEventsData} 
     />
     <Slide/>
     <ScrollButton/>
    </>
  )
}
