import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-swift-reveal";

export default function Galerie() {
  return (
    <section className="service_galerie">
       <Fade>
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
            <p>Traiteur</p>
            <button>
              <Link to={"/ServiceConciergerie/traiteur"}>Voir plus</Link>
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
      </Fade>
    </section>
  );
}
