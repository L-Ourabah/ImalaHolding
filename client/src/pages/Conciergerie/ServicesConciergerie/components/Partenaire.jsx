import React from "react";

export default function Partenaire() {
  return (
    <section className="service_partenaire">
      <h2>Nos Partenaires</h2>
      <div className="partenaire_contenu">
        <div className="partenaire_form" id="traiteur">
          Sally Traiteur
        </div>
        <div className="partenaire_form" id="garderie">
          Sally Garde d’enfants
        </div>
        <div className="partenaire_form" id="nettoyage">
          Sally Nettoyage
        </div>
        <div className="partenaire_form" id="transport">
          Gakou Transports
        </div>
      </div>
    </section>
  );
}
