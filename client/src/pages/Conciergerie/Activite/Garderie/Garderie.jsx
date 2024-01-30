import React from 'react'
import Header from '../componentsG/Header'
import Main from './components/Main'
import garderieData from './GarderieData'
import Navbar from '../../../../components/NavBars/NavbarConciergerie'


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
      phraseActivite="Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,Ceci est un paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, fuga sint necessitatibus iusto nostrum,"
      garderieData={garderieData} 
     />
    </>
  )
}
