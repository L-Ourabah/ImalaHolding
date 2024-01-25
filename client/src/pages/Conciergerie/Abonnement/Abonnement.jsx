import React from 'react'
import HeaderPage from '../componentsG/HeaderPage'

import './Abonnement.css'
import Presentation from '../componentsG/Presentation'
import Premium from './components/Premium'
import Gold from './components/Gold'
import Silver from './components/Silver'

export default function Abonnement() {
  return (
    <>
    <header className='header_abo'>
    <HeaderPage
    titrePage="Abonnement"
    imgPage="https://images.pexels.com/photos/18189718/pexels-photo-18189718/free-photo-of-ville-vacances-gens-rue.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
</header>

    <main className="main_abo">
      <Presentation
      titrePresentation="À quoi sert nos abonnements ?"
      textePresentation="Nos abonnements sont votre passeport vers un monde d'avantages exclusifs, de services personnalisés et d'expériences uniques. Choisissez parmi nos formules Premium, Silver et Gold pour accéder à un univers de privilèges conçu pour répondre à vos besoins spécifiques et enrichir votre quotidien."
      />
      <Premium/>
      <Silver/>
      <Gold/>
    </main>
    </>
  )
}
