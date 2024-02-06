import React from "react";
import { Fade } from "react-swift-reveal";

export default function Partenaire() {
  return (
    <section className="service_partenaire">
       <Fade>
      <h2>Nos Partenaires</h2>
      <div className="partenaire_contenu">
        <div className="partenaire_form" id="partenaire_traiteur">
          <p>Sally Traiteur</p>
        </div>
        <div className="partenaire_form" id="partenaire_garderie">
          <p>Sally Garde d’enfants</p>
        </div>
        <div className="partenaire_form" id="partenaire_nettoyage">
          <p>Sally Nettoyage</p>
        </div>
        <div className="partenaire_form" id="partenaire_transport">
          <p>Gakou Transports</p>
        </div>
      </div>
      </Fade>
    </section>
  );
}
