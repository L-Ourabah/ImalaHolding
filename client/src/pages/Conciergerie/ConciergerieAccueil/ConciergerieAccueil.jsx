import React from "react";

import "./ConciergerieAccueil.css";

/* importation de la navbar conciergerie */
import Navbar from "../../../components/NavBars/NavbarConciergerie";

/* importation des composants de la page d'accueil */
import Header from "./components/Header";
import Bienvenue from "./components/Bienvenue";
import Services from "./components/Services";
import Abonnement from "./components/Abonnement";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import ScrollButton from "../componentsG/ScrollButton";

export default function ConciergerieAccueil() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="main_accueil_conciergerie">
        <Bienvenue />
        <Services />
        <Abonnement />
        <Contact />
        <Newsletter />
        <ScrollButton/>
      </main>
    </>
  );
}
