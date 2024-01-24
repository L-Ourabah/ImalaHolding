import React from "react";
import Aboutfd from "../../../media/images/abouts.jpg";
import "./About.css";
import Qsnfd from "../../../media/images/az.jpg";
import Partenaire from "./Components/Partenaire.jsx";
import Navbar from "../../../components/NavBars/NavbarImala.jsx";

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
            Imala Holding est une agence immobilière destinée avant tout à la diaspora africaine et au
            population locale.
            Nous sommes basé sur Paris et à Dakar et intervenons dans la location courte et moyenne
            durée de biens avec
            Imala location.
            Nous sommes également dans la construction de biens (villas et immeubles) et des devis
            peuvent
            vous être fait selon votre convenance avec Imala construction.
            Nous gérons également une conciergerie afin de gérer les biens des propriétaires, des
            services tels
            que le ménage de biens, un service de traiteur, de la location de véhicule avec chauffeur
            pour vos
            déplacements dans le pays avec imala conciergerie.
            Nos secteur d’activités : habitation (imala location) / Construction (imala construction) /
            Conciergerie
            (imala conciergerie)
          </p>
        </div>
      </section>

      <section className="section QSN1" id="Qsn">
        <div className="p-qsn">
          <h2>Notre histoire</h2>
          <p>
            Notre histoire a commencé il y a maintenant trois ans suite à nos expériences personnelles
            au Sénégal en ce qui concerne l’immobilier et la conciergerie.

            Nous avions analysé la forte demande de la diaspora africaine en l'occurrence sénégalaise.
            Nous savons bien qu’au Sénégal en matière d’immobilier, la confiance n’est pas de mise et
            c’est vrai que nous avons pu voir que les membres de la diaspora était friand à l'idée
            d’investir dans leurs pays d'origine.

            Ayant des origines Sénégalaises, nous connaissons parfaitement le terrain, avons effectué
            pas mal de projets avec des hauts et des bas qui en découlent. C’est pourquoi nous avons
            décidé d’ouvrir notre entité (IMALA HOLDING) afin de répondre à la demande croissante de
            la diaspora et bien d’autres.

            Nous vous proposons des locations courtes et longues durées dans Dakar et ses alentours
            de villas et d’appartements à des prix défiants toutes concurrences.

            Nous accompagnons nos clients pour la conception de leurs plans par le biais de notre
            architecte et pour la réalisation de leurs projets immobiliers.

            Nous gérons vos biens immobiliers en toute transparence et nous vous proposons des
            locations courtes et longues durées dans Dakar et ses alentours de la villa à des
            appartements haut standing à des prix défiants toutes concurrences.

            Notre équipe qui est constituée des meilleurs éléments sera en mesure de traiter vos
            demandes dans les plus bref délais.

            Merci de votre confiance.

            Président et Directeur général de IMALA HOLDING
          </p>
        </div>
        <div className="img-qsn">
          <img src={Qsnfd} alt="" />
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

      <section className="section projet" id="projet">
        <div className="projet-title">
          <h2>Nos Futurs projets</h2>
        </div>
        <div className="projet-p">
          <div className="p-projet">
            <h3>Nos secteurs</h3>
            <p>
              Nous avons plusieurs projets en cours de réalisation, Nous les mettrons en place sur notre
              lorsqu'ils seront aboutis..
            </p>
          </div>
          <div className="p-projet">
            <h3>Nos secteurs</h3>
            <p>
              Nous avons plusieurs projets en cours de réalisation, Nous les mettrons en place sur notre
              lorsqu'ils seront aboutis..
            </p>
          </div>
        </div>
      </section>

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
