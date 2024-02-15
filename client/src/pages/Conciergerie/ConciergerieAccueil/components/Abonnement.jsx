import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-swift-reveal";

export default function Abonnement() {
  return (
    <Fade>
      {/*section presentation abonnement */}
      <section className="section_abonnement" id="section_abonnement">
        <div className="section_titre_conciergerie">
          <h2>Nos Abonnements</h2>
          <p>
            Découvrez nos abonnements Premium, Silver et Gold et laissez-vous
            séduire par un univers de services exclusifs conçus pour enrichir
            votre quotidien. Consultez dès maintenant nos offres détaillées pour
            trouver l'abonnement qui correspond parfaitement à vos besoins et à
            vos attentes{" "}
          </p>
          <Link to="../Abonnement">Voir plus </Link>
        </div>

        <div className="abonnement_contenu">
          {/*______________________________Offre premium __________________________________*/}

          <div className="card_abo" id="ima_premium">
            <div className="card_abo_header">
              <h3>Offre Premium</h3>
              <p>L'excellence à votre service</p>
            </div>
            <div className="card_abo_main">
              <ul>
                <li>
                  Accès prioritaire à nos concierges experts disponibles 24h/24
                  et 7j/7
                </li>
                <li>
                  Réseau exclusif de partenaires pour des expériences uniques et
                  exceptionnelles
                </li>
              </ul>
            </div>
          </div>

          {/*______________________________Offre silver __________________________________*/}

          <div className="card_abo" id="ima_silver">
            <div className="card_abo_header">
              <h3>Offre Silver</h3>
              <p>L'équilibre parfait entre qualité et accessibilité </p>
            </div>
            <div className="card_abo_main">
              <ul>
                <li>Accès à une gamme étendue de services essentiels</li>
                <li>
                  Tâches ménagères, courses, réservations et demandes
                  administratives prises en charge avec efficacité et discrétion
                </li>
                <li>
                  Flexibilité pour adapter les services à votre rythme de vie
                </li>
              </ul>
            </div>
          </div>

          {/*______________________________Offre gold __________________________________*/}

          <div className="card_abo" id="ima_golden">
            <div className="card_abo_header">
              <h3>Offre Golden</h3>
              <p>L'exclusivité au service de l'excellence </p>
            </div>
            <div className="card_abo_main">
              <ul>
                <li>Accès illimité à nos concierges dédiés</li>
                <li>
                  Services exclusifs et sur mesure anticipant et comblant vos
                  moindres désirs
                </li>
                <li>
                  Expertise et réseau étendu de nos concierges à votre service
                </li>
                <li>Réservations prioritaires dans des restaurants renommés</li>
                <li>Organisation d'événements privés</li>
              </ul>
            </div>
          </div>

          {/*______________________________________________________________________________*/}
        </div>
      </section>
    </Fade>
  );
}
