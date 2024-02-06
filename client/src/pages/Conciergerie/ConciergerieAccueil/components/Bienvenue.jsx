import React from 'react'
import { Fade } from "react-swift-reveal";

export default function Bienvenue() {
  function scrollToServices() {
    const servicesSection = document.getElementById('section_services_conciergerie');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Fade>
    <section className='section_bienvenue_conciergerie' id="section_bienvenue_conciergerie">
  
    <h2>Bienvenue sur Imala Conciergerie</h2>
   <p>Où nous mettons un point d'honneur à transformer votre séjour en une expérience inoubliable.
   Dès votre arrivée, profitez de notre hospitalité chaleureuse et de notre service attentionné. <br/> 
   Nous nous engageons à rendre votre séjour mémorable en vous offrant un accueil personnalisé et en répondant à tous vos besoins avec professionnalisme. Que ce soit pour affaires ou pour le plaisir, notre équipe est là pour vous offrir une expérience exceptionnelle. Bienvenue chez vous !
   </p>
     <button onClick={scrollToServices}>Parcourir</button>
  
  </section>
  </Fade>
  )
}
