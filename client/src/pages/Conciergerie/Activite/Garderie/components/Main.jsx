
import React from "react";
import { Link } from "react-router-dom";
import garderieData from '../GarderieData'

export default function Main(props) {
  const { garderieData } = props; // Assurez-vous que "activities" est défini

  return (
    <main className="main_activite">
      <section className="section_activite_presentation">
        <h2>{props.sousTitreActivite}</h2>
        <p>{props.phraseActivite}</p>
      </section>

      <section className="section_activite_contenu">
     
        {garderieData && garderieData.map((garderieData, index) => (
            // Assurez-vous que "activities" est défini avant de faire le map
        
          <div className="activite_contenu" key={index}>
            <div className="activite_contenu_img">
              <img src={garderieData.image} alt={`img_contenu_activite_${index}`} />
            </div>
            <div className="activite_contenu_txt">
              <h3>{garderieData.title}</h3>
              <p>{garderieData.description}</p>
              <button>
                <Link to={garderieData.link}>Voir plus</Link>
              </button>
            </div>
          </div>
        ))}
       
      </section>

    </main>
  );
}
