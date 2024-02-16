import React from 'react'
import Header from '../componentsG/Header'
import Main from'./components/Main'
import nettoyageData from './NettoyageData'; // Importe les données d'activité depuis le fichier NettoyageData.js
import Navbar from '../../../../components/NavBars/NavbarConciergerie';
import Slide from '../componentsG/Slide';
import ScrollButton from '../../componentsG/ScrollButton'

export default function Nettoyage() {
 
  return (
    <>
  <Navbar/>
     <Header
     titreActivite="Pressing"
     imgActivite="https://images.pexels.com/photos/4993073/pexels-photo-4993073.jpeg?auto=compress&cs=tinysrgb&w=1600"
     />
       <Main
     sousTitreActivite="Nos services pressing"
     phraseActivite="Notre service de pressing de conciergerie va bien au-delà du simple entretien. Nous nous engageons à créer un environnement d'une propreté impeccable, où chaque recoin est soigneusement pris en charge pour offrir à nos clients un espace de vie ou de travail irréprochable. Grâce à notre équipe dévouée et à nos méthodes professionnelles, nous assurons une prestation de nettoyage haut de gamme, adaptée à vos besoins spécifiques, pour que vous puissiez profiter d'un environnement sain et accueillant au quotidien."
     nettoyageData={nettoyageData} 
    />

<Slide/>
<ScrollButton/>
    </>
  )
}
