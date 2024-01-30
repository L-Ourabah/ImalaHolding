import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import guidetourData from './GuideTourData'
import Navbar from '../../../../components/NavBars/NavbarConciergerie'


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
      phraseActivite="Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,"
      guidetourData={guidetourData} 
     />
    </>
  )
}
