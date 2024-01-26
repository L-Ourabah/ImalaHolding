import React from "react";
import Aboutfd from "../../../media/images/abouts.jpg";
import "./About.css";
import Qsnfd from "../../../media/images/az.jpg";
import Histoirefd from "../../../media/images/senegal.jpg"
import Partenaire from "./Components/Partenaire/Partenaire.jsx";
import Navbar from "../../../components/NavBars/NavbarImala.jsx";
import Projet from "./Components/Projet/Projet.jsx";

export default function About() {
  return (
    <main className="main_about">

      <Navbar />
      <div className=" section About " id="About">
        <h1>A PROPOS</h1>
        <img src={Aboutfd} alt="" />
      </div>

      <section className="section QSN" id="Qsn">
        <div className="img-qsn">
          <img src={Qsnfd} alt="" />
        </div>

        <div className="p-qsn">
          <h2>Qui Sommes Nous</h2>
          <p>

            Imala Holding, basée à Paris et à Dakar, propose des services immobiliers diversifiés. Imala Location se spécialise dans la location courte et moyenne durée, Imala Construction offre des services de construction de villas et d'immeubles, tandis qu'Imala Conciergerie assure la gestion complète de biens, incluant ménage, traiteur, et location de véhicules avec chauffeur. Nos domaines d'activité : l' habitation, la conciergerie et la construction.
          </p>
        </div>
      </section>

      <section className="section QSN1" id="Qsn">
        <div className="p-qsn">
          <h2>Notre histoire</h2>
          <p>
            Il y a trois ans, IMALA HOLDING a été créée pour répondre à la demande croissante dans le secteur immobilier au Senegal. Nous nous spécialisons dans les locations compétitives de villas et d'appartements, offrant également des services de conciergerie pour une gestion transparente de vos biens. Notre expertise s'étend à la construction, avec une équipe dédiée à la conception et à la réalisation de projets immobiliers. Merci de votre confiance.

            Président et Directeur Général de IMALA HOLDING
          </p>
        </div>
        <div className="img-qsn">
          <img src={Histoirefd} alt="" />
        </div>
      </section>

      <section className="section QSN" id="Qsn">
        <div className="img-qsn">
          <img src={Qsnfd} alt="" />
        </div>

        <div className="p-qsn">
          <h2>Nos secteurs</h2>
          <p>
            Ayant pour le moment trois secteurs d’activités liés à Imala holding, nous sommes dans le
            domaine de la location haute standing courte et moyenne durée, la constructions de biens et
            dans la conciergerie de haut niveau.
          </p>
        </div>
      </section>
      <Projet/>
   

      <section className="section label" id="label">
        <div className="label-title">
          <h2>Label de confiance</h2>
          <p>
            Chez IMALA HOLDING, nous nous engageons à offrir à nos clients la meilleure expérience possible.
            C'est pourquoi nous sommes fiers de porter le label de confiance IMALA, gage de notre engagement
            envers la qualité, la sécurité et la satisfaction client.
            Ce label certifie que nous respectons les normes les plus strictes dans notre domaine, vous assurant
            ainsi des services et produits sur lesquels vous pouvez compter.
            Notre priorité est de gagner votre confiance et de la maintenir, car votre tranquillité d'esprit est au
            cœur de notre mission.
          </p>
        </div>
      </section>
      <Partenaire />


    </main>
  );
}
