import React from 'react'

import './ServiceConciergerie.css'

import HeaderPage from '../componentsG/HeaderPage'
import Presentation from '../componentsG/Presentation'
import Galerie from './components/Galerie'
import Partenaire from './components/Partenaire'
import Aide from './components/Aide'
import Navbar from '../../../components/NavBars/NavbarConciergerie'


export default function ServiceConciergerie() {
  return (
    <> <Navbar/>

       <header className='header_service_conciergerie'>
    <HeaderPage
    titrePage="Services"
    imgPage="https://images.pexels.com/photos/18189718/pexels-photo-18189718/free-photo-of-ville-vacances-gens-rue.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
</header>

<main className="main_service_conciergerie">
    <Presentation
    titrePresentation="Quels sont nos services ?"
    textePresentation="Découvrez notre gamme de services sur mesure conçus pour répondre à tous vos besoins. De
    l'assistance de conciergerie personnalisée à la planification d'événements exclusifs, nous proposons
    une suite d'options haut de gamme pour améliorer votre style de vie. Découvrez le summum de la
    commodité et du luxe avec notre soutien dédié, garantissant que chacune de vos exigences est
    satisfaite avec la plus grande attention aux détails."
    />
    <Galerie/>
    <Partenaire/>
    <Aide/>
    </main>
    </>
  )
}
