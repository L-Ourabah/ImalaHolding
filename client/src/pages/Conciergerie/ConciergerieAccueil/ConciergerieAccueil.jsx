import React from 'react'
import Bienvenue from './components/Bienvenue'
import Header from './components/Header'

import './ConciergerieAccueil.css'
import Services from './components/Services'
import Abonnement from './components/Abonnement'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Navbar from '../../../components/NavBars/NavbarConciergerie'

export default function ConciergerieAccueil() {
  return (
    <>
    <Navbar/>
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
