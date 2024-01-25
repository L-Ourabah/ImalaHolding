import React from 'react'
import Bienvenue from './components/Bienvenue'
import Header from './components/Header'

import './ConciergerieAccueil.css'
import Services from './components/Services'
import Abonnement from './components/Abonnement'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'

export default function ConciergerieAccueil() {
  return (
    <>
    <Header/>
      <main className='main_accueil_conciergerie'>
        <Bienvenue/>
        <Services/>
        <Abonnement/>
        <Contact/>
        <Newsletter/>
      </main>
    </>
  )
}
