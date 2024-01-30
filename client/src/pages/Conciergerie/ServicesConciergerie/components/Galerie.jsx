import React from "react";
import { Link } from "react-router-dom";

export default function Galerie() {
  return (
    <section className="service_galerie">
      <div className="galerie_contenu">
        <div className="galerie_row">
          <div className="galerie_card" id="gal_nettoyage">
            <p>Nettoyage</p>
            <button>
              <Link to={"/ServiceConciergerie/nettoyage"}>Voir plus</Link>
            </button>
          </div>
          <div className="galerie_card" id="gal_garderie">
            <p>Garderie</p>
            <button>
            
              <Link to={"/ServiceConciergerie/garderie"}>Voir plus</Link>
            </button>
          </div>
        </div>

        <div className="galerie_row">
          <div className="galerie_card" id="gal_transport">
            <p>Transport</p>
            <button>
              <Link to={"/ServiceConciergerie/transport"}>Voir plus</Link>
            </button>
          </div>
          <div className="galerie_card" id="gal_guidetour">
            <p>Guide Touristique</p>
            <button>
              <Link to={"/ServiceConciergerie/guidetouristique"}>Voir plus</Link>
            </button>
          </div>
        </div>

        <div className="galerie_row">
          <div className="galerie_card" id="gal_nourriture">
            <p>Nourriture</p>
            <button>
              <Link to={"/ServiceConciergerie/nourriture"}>Voir plus</Link>
            </button>
          </div>
          <div className="galerie_card" id="gal_loisirs">
            <p>Loisirs</p>
            <button>
              
              <Link to={"/ServiceConciergerie/loisirs"}>Voir plus</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
