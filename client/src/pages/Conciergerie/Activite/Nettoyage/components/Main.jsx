
import React from "react";
import { Link } from "react-router-dom";

import nettoyageData from '../NettoyageData'

export default function Main(props) {
  const { nettoyageData } = props; // Assurez-vous que "activities" est défini

  return (
    <main className="main_activite">
      <section className="section_activite_presentation">
        <h2>{props.sousTitreActivite}</h2>
        <p>{props.phraseActivite}</p>
      </section>

      <section className="section_activite_contenu">
        {nettoyageData && nettoyageData.map((nettoyageData, index) => (
          // Assurez-vous que "activities" est défini avant de faire le map
          <div className="activite_contenu" key={index}>
            <div className="activite_contenu_img">
              <img src={nettoyageData.image} alt={`img_contenu_activite_${index}`} />
            </div>
            <div className="activite_contenu_txt">
              <h3>{nettoyageData.title}</h3>
              <p>{nettoyageData.description}</p>
              <button>
                <Link to={nettoyageData.link}>Voir plus</Link>
              </button>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}
