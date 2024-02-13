import React from "react";
import { Link } from "react-router-dom";

import imalaEventsData from "../ImalaEventsData.jsx";

export default function Main(props) {
  const { imalaEventsData } = props; // Assurez-vous que "activities" est défini

  return (
    <main className="main_activite">
      <section className="section_activite_presentation">
        <h2>{props.sousTitreActivite}</h2>
        <p>{props.phraseActivite}</p>
      </section>

      <section className="section_activite_contenu">
        {imalaEventsData &&
          imalaEventsData.map((imalaEventsData, index) => (
            // Assurez-vous que "activities" est défini avant de faire le map
            <div className="activite_contenu" key={index}>
              <div className="activite_contenu_img">
                <img
                  src={imalaEventsData.image}
                  alt={`img_contenu_activite_${index}`}
                />
              </div>
              <div className="activite_contenu_txt">
                <h3>{imalaEventsData.title}</h3>
                <p>{imalaEventsData.description}</p>
                <button>
                  <Link to={imalaEventsData.link}>Voir plus</Link>
                </button>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
