import React from "react";
import { Fade } from "react-swift-reveal";/* animation Fade: révéle le contenu */

export default function Bienvenue() {
  function scrollToServices() {
    const servicesSection = document.getElementById(
      "section_services_conciergerie"
    );
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Fade> 
    {/* contenu section bienvenue */}
      <section className="section_bienvenue_conciergerie" id="section_bienvenue_conciergerie">
        <h2>Bienvenue sur Imala Conciergerie</h2>
        <p>
          Bienvenue chez vous ! Nous nous engageons à rendre votre séjour
          inoubliable en vous offrant un accueil personnalisé et un service
          attentionné dès votre arrivée. Que ce soit pour affaires ou pour le
          plaisir, notre équipe professionnelle est là pour répondre à tous vos
          besoins et vous offrir une expérience exceptionnelle.
        </p>
        <button onClick={scrollToServices}>Parcourir</button> {/* bouton qui dirige sur la section sevice accueil */}
      </section>
    </Fade>
  );
}
