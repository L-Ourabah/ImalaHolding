import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import guidetourData from './GuideTourData'
import Navbar from '../../../../components/NavBars/NavbarConciergerie'
import Slide from '../componentsG/Slide'


export default function GuideTour() {
  return (
    <>
    <Navbar/>
     <Header
     titreActivite="Guide Touristique"
     imgActivite="https://images.pexels.com/photos/4856284/pexels-photo-4856284.jpeg?auto=compress&cs=tinysrgb&w=1600"
     />
     <Main
      sousTitreActivite="Nos activités touristiques "
      phraseActivite="Découvrez une sélection d'activités touristiques proposées par Imala Conciergerie au Sénégal. Plongez dans une aventure inoubliable en explorant notre catalogue d'expériences uniques, allant des visites culturelles aux escapades en plein air, en passant par les découvertes gastronomiques et les moments de détente. Laissez-nous vous guider à travers une diversité d'activités soigneusement choisies, conçues pour vous offrir une immersion authentique et enrichissante dans notre magnifique pays"
      guidetourData={guidetourData} 
     />
     <Slide/>
    </>
  )
}
