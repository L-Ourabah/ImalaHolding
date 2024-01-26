import React from "react";

import { Link } from "react-router-dom";

export default function Aide() {
  return (
    <section className="service_aide">
      <div className="aide_contenu">
        <h2>Besoin d'aide ?</h2>
        <p>
          N’hésitez pas à nous contacter pour toute demande ou question, nous
          n’hésiterons pas à vous satisfaire.
        </p>
      </div>
      <button>
        <Link to="../contact">Voir plus</Link>{" "}
      </button>
    </section>
  );
}
