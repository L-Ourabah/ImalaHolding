import React from 'react'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'
import Galerie from './components/GalerieAccueil'
import './AirbnbAccueil.css'
import Navbar from '../../../components/Header/NavbarAirbnb'
import Header from './components/HeaderAccueil'

export default function AirbnbAccueil() {
  return (
    <main className='main_airbnb_accueil'>
     <Navbar/>
       <Header/>
      <BarreDeRecherche/>
      <Galerie/>
    </main>
  )
}