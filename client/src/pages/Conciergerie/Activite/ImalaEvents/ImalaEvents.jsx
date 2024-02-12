import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import imalaEventsData from './ImalaEventsData'
import Navbar from '../../../../components/NavBars/NavbarConciergerie'
import Slide from '../componentsG/Slide'


export default function ImalaEvents() {
  return (
    <>
    <Navbar/>
     <Header
     titreActivite="Imala Events"
     imgActivite="https://images.pexels.com/photos/19024675/pexels-photo-19024675/free-photo-of-fleurs-table-blanc-fete.jpeg?auto=compress&cs=tinysrgb&w=600')"
     />
     <Main
      sousTitreActivite="Nos service evenementielles "
      phraseActivite="Découvrez une sélection d'activités touristiques proposées par Imala Conciergerie au Sénégal. Plongez dans une aventure inoubliable en explorant notre catalogue d'expériences uniques, allant des visites culturelles aux escapades en plein air, en passant par les découvertes gastronomiques et les moments de détente. Laissez-nous vous guider à travers une diversité d'activités soigneusement choisies, conçues pour vous offrir une immersion authentique et enrichissante dans notre magnifique pays"
      guidetourData={imalaEventsData} 
     />
     <Slide/>
    </>
  )
}
