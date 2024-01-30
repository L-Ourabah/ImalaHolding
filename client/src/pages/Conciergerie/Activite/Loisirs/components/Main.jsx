
import React from "react";
import { Link } from "react-router-dom";

export default function Main(props) {
  const { loisirsData } = props; // Assurez-vous que "activities" est défini

  return (
    <main className="main_activite">
      <section className="section_activite_presentation">
        <h2>{props.sousTitreActivite}</h2>
        <p>{props.phraseActivite}</p>
      </section>

      <section className="section_activite_contenu">
        {loisirsData && loisirsData.map((loisirsData, index) => (
          // Assurez-vous que "activities" est défini avant de faire le map
          <div className="activite_contenu" key={index}>
            <div className="activite_contenu_img">
              <img src={loisirsData.image} alt={`img_contenu_activite_${index}`} />
            </div>
            <div className="activite_contenu_txt">
              <h3>{loisirsData.title}</h3>
              <p>{loisirsData.description}</p>
              <button>
                <Link to={loisirsData.link}>Voir plus</Link>
              </button>
            </div>
          </div>
        ))}
      </section>

    
    </main>
  );
}
