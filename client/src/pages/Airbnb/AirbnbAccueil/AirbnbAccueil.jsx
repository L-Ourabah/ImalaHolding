import React from 'react'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'
import Galerie from './components/GalerieAccueil'
import './AirbnbAccueil.css'

export default function AirbnbAccueil() {
  return (
    <main className='main_airbnb_accueil'>
      <BarreDeRecherche/>
      <Galerie/>
    </main>
  )
}